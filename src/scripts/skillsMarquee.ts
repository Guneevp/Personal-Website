const CRUISE_PX_PER_SEC = 120;
const ACCEL_PX_PER_SEC2 = 160;
const IDLE_RESUME_MS = 600;

export function initSkillsMarquee() {
  document
    .querySelectorAll<HTMLElement>("[data-skills-marquee]")
    .forEach(setup);
}

function setup(root: HTMLElement) {
  const track = root.querySelector<HTMLElement>("[data-skills-track]");
  const sets = root.querySelectorAll<HTMLElement>(".skills-marquee__set");
  const set = sets[0];
  if (!track || !set || sets.length < 2) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let offset = 0;
  let speed = reduced ? 0 : CRUISE_PX_PER_SEC;
  let hovering = false;
  let dragging = false;
  let pointerId: number | null = null;
  let lastX = 0;
  let lastTs = 0;
  let resumeAt = 0;
  let loopWidth = 0;

  const measure = () => {
    // Distance from start of copy 0 to start of copy 1 (= one seamless period).
    loopWidth = sets[1].offsetLeft - sets[0].offsetLeft;
  };

  const normalize = () => {
    if (loopWidth <= 0) return;
    while (offset <= -loopWidth) offset += loopWidth;
    while (offset > 0) offset -= loopWidth;
  };

  const paint = () => {
    track.style.transform = `translate3d(${offset}px,0,0)`;
  };

  const scheduleResume = () => {
    resumeAt = performance.now() + IDLE_RESUME_MS;
    speed = 0;
  };

  const tick = (ts: number) => {
    const dt = lastTs ? Math.min(0.05, (ts - lastTs) / 1000) : 0;
    lastTs = ts;

    if (!reduced && !dragging && !hovering && ts >= resumeAt) {
      if (speed < CRUISE_PX_PER_SEC) {
        speed = Math.min(CRUISE_PX_PER_SEC, speed + ACCEL_PX_PER_SEC2 * dt);
      }
      offset -= speed * dt;
      normalize();
      paint();
    }

    requestAnimationFrame(tick);
  };

  root.addEventListener("pointerenter", () => {
    hovering = true;
    speed = 0;
  });

  root.addEventListener("pointerleave", () => {
    hovering = false;
    if (!dragging) scheduleResume();
  });

  root.addEventListener("pointerdown", (e) => {
    if (e.button !== 0) return;
    dragging = true;
    pointerId = e.pointerId;
    lastX = e.clientX;
    speed = 0;
    resumeAt = Number.POSITIVE_INFINITY;
    root.setPointerCapture(pointerId);
    root.classList.add("is-dragging");
  });

  root.addEventListener("pointermove", (e) => {
    if (!dragging || e.pointerId !== pointerId) return;
    offset += e.clientX - lastX;
    lastX = e.clientX;
    normalize();
    paint();
  });

  const endDrag = (e: PointerEvent) => {
    if (!dragging || e.pointerId !== pointerId) return;
    dragging = false;
    pointerId = null;
    root.classList.remove("is-dragging");
    if (!hovering) scheduleResume();
  };

  root.addEventListener("pointerup", endDrag);
  root.addEventListener("pointercancel", endDrag);

  measure();
  normalize();
  paint();
  requestAnimationFrame(tick);

  const ro = new ResizeObserver(() => {
    const prev = loopWidth;
    measure();
    if (prev > 0 && loopWidth > 0) offset = (offset / prev) * loopWidth;
    normalize();
    paint();
  });
  ro.observe(set);
}
