const DURATION_MS = 320;
const EASING = "cubic-bezier(0.22, 1, 0.36, 1)";

export function initAnimatedDetails() {
  document
    .querySelectorAll<HTMLDetailsElement>("[data-animate-details]")
    .forEach((details) => {
      if (details.dataset.animateReady) return;
      details.dataset.animateReady = "1";

      const summary = details.querySelector(":scope > summary");
      if (!summary) return;

      summary.addEventListener("click", (event) => {
        const target = event.target as HTMLElement | null;
        if (target?.closest("a, button")) return;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          return;
        }

        event.preventDefault();
        if (details.dataset.animating === "1") return;
        void animateToggle(details);
      });
    });
}

async function animateToggle(details: HTMLDetailsElement) {
  details.dataset.animating = "1";

  const duration =
    Number(details.dataset.animateDuration) || DURATION_MS;
  const opening = !details.open;
  const start = details.offsetHeight;

  details.style.overflow = "hidden";
  details.style.height = `${start}px`;
  details.open = opening;

  // Measure natural height in the target open/closed state (same frame, before paint).
  details.style.height = "auto";
  const end = details.offsetHeight;
  details.style.height = `${start}px`;
  void details.offsetHeight;

  try {
    await details.animate(
      [{ height: `${start}px` }, { height: `${end}px` }],
      { duration, easing: EASING },
    ).finished;
  } catch {
    // Animation cancelled (e.g. node removed).
  } finally {
    details.style.height = "";
    details.style.overflow = "";
    delete details.dataset.animating;
  }
}
