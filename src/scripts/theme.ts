const STORAGE_KEY = "theme";

export function getStoredTheme(): "light" | "dark" {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function applyTheme(theme: "light" | "dark") {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

export function initThemeToggle() {
  document.querySelectorAll<HTMLButtonElement>("[data-theme-toggle]").forEach(
    (button) => {
      button.addEventListener("click", () => {
        const next =
          document.documentElement.classList.contains("dark")
            ? "light"
            : "dark";
        applyTheme(next);
        localStorage.setItem(STORAGE_KEY, next);
      });
    },
  );
}

export const headerScrolledClasses = [
  "backdrop-blur-sm",
  "bg-white/80",
  "dark:bg-gray-950/80",
];

export function initHeaderScroll() {
  const update = () => {
    const scrolled = window.scrollY > 100;
    for (const id of ["header", "header-mobile"]) {
      const el = document.getElementById(id);
      if (scrolled) {
        el?.classList.add(...headerScrolledClasses);
      } else {
        el?.classList.remove(...headerScrolledClasses);
      }
    }
  };
  update();
  window.addEventListener("scroll", update);
}
