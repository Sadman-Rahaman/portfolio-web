/**
 * Facts still missing. Anywhere copy contains {{key}}, development builds show a clearly
 * marked placeholder with the label below. Production builds hide the sentence that holds
 * it, so visitors never see an unfinished gap. Set NEXT_PUBLIC_SHOW_PLACEHOLDERS=true
 * to show them in production too (for example on a Vercel preview).
 */
export const placeholderLabels: Record<string, string> = {
  thesis_contribution: "your part of the thesis work",
  thesis_repo_url: "thesis code link",
  rgef_team: "BUS334 team members",
  rgef_contribution: "your part of the solar model",
};

export const showPlaceholders =
  process.env.NODE_ENV !== "production" || process.env.NEXT_PUBLIC_SHOW_PLACEHOLDERS === "true";

const TOKEN = /\{\{[a-z_]+\}\}/;

export const hasPlaceholder = (text: string) => TOKEN.test(text);

/** Removes every sentence that still contains a placeholder. Returns "" when nothing is left. */
export function stripPlaceholders(text: string): string {
  return text
    .split(/(?<=[.?!])\s+/)
    .filter((sentence) => !TOKEN.test(sentence))
    .join(" ")
    .trim();
}
