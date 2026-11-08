export type ThemeChoice = "system" | "dark" | "light";

export const THEME_STORAGE_KEY = "theme";

/**
 * Runs before first paint (inlined in <head>) so a saved choice never flashes
 * the wrong theme. Dark is the default; light follows the system unless saved.
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t==="light"||t==="dark"){document.documentElement.setAttribute("data-theme",t)}}catch(e){}})();`;

/** Marks that JavaScript runs, which enables the scroll reveal starting state. */
export const jsFlagScript = `document.documentElement.classList.add("js");`;

export function applyTheme(choice: ThemeChoice) {
  const root = document.documentElement;
  if (choice === "system") root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", choice);
  try {
    if (choice === "system") localStorage.removeItem(THEME_STORAGE_KEY);
    else localStorage.setItem(THEME_STORAGE_KEY, choice);
  } catch {
    // Storage can be unavailable (private mode). The choice still applies for this visit.
  }
}

export function readTheme(): ThemeChoice {
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    // Fall through to system.
  }
  return "system";
}
