#!/usr/bin/env node
/**
 * Design rule check for the landing page design skill (Part B).
 * Run with: npm run check:design
 *
 * Flags: off scale spacing, raw text size utilities (use named text styles),
 * arbitrary px or rem values, banned fonts, italics, ultra bold weights,
 * browser default easing, transitions under 200ms, background gradients,
 * Material icons, and banned filler words.
 */
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const DIRS = ["app", "components", "content", "lib"];
const EXT = /\.(tsx?|css|mdx?)$/;

const ALLOWED_SPACING = new Set(["0", "0.5", "1", "2", "3", "4", "6", "8", "10", "12", "16", "20", "24", "px", "1/2", "full"]);
const SPACING_PREFIX =
  "p|px|py|pt|pr|pb|pl|ps|pe|m|mx|my|mt|mr|mb|ml|ms|me|gap|gap-x|gap-y|space-x|space-y|inset|inset-x|inset-y|top|right|bottom|left|translate-x|translate-y";
const spacingRe = new RegExp(`(?<![\\w\\[-])(?:[a-z0-9-]+:)*-?(${SPACING_PREFIX})-([0-9.\\/]+|px)(?![\\w.\\/\\]-])`, "g");

const rules = [
  { re: /(?<![\w-])(?:[a-z0-9-]+:)*text-(xs|sm|base|lg|[2-9]?xl)(?![\w-])/g, msg: "Raw text size utility. Use a named text style (heading-1, body-3, caption-4...)." },
  { re: /\[[^\]]*\d(px|rem|em)\]/g, msg: "Arbitrary px/rem/em value. Use a token." },
  { re: /\b(Inter|Roboto|Arial|Helvetica|Open Sans)\b/g, msg: "Banned font." },
  { re: /(?<![\w-])(italic|font-black|font-extrabold)(?![\w-])/g, msg: "Italics and ultra bold weights are not allowed." },
  { re: /(?<![\w-])(ease-in|ease-out|ease-in-out|ease-linear)(?![\w-])/g, msg: "Browser default easing. Use ease-base." },
  { re: /(?<![\w-])duration-(0|75|100|150)(?![\w-])/g, msg: "Transition shorter than 200ms." },
  { re: /(?<![\w-])bg-(gradient|linear|radial|conic)-/g, msg: "Background gradients are not allowed." },
  { re: /material-(icons|symbols)|@mui\/icons/gi, msg: "Material icons are not allowed. Use Phosphor." },
  { re: /\b(revolutioni[sz]e|supercharge|cutting edge|effortless|transform your workflow|take it to the next level|harness the power|world class)\b/gi, msg: "Banned filler word." },
];

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : EXT.test(name) ? [path] : [];
  });
}

const problems = [];
for (const dir of DIRS) {
  let files = [];
  try {
    files = walk(join(ROOT, dir));
  } catch {
    continue;
  }
  for (const file of files) {
    const lines = readFileSync(file, "utf8").split("\n");
    lines.forEach((line, i) => {
      const where = `${relative(ROOT, file)}:${i + 1}`;
      for (const match of line.matchAll(spacingRe)) {
        if (!ALLOWED_SPACING.has(match[2])) problems.push(`${where}  "${match[0]}"  Off scale spacing. Allowed: 0, 2, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96px.`);
      }
      // CSS files define the tokens, so only spacing and gradient checks matter there.
      if (file.endsWith(".css")) return;
      for (const { re, msg } of rules) {
        for (const match of line.matchAll(re)) problems.push(`${where}  "${match[0]}"  ${msg}`);
      }
    });
  }
}

if (problems.length) {
  console.error(`Design check failed with ${problems.length} problem(s):\n`);
  for (const p of problems) console.error(`  ${p}`);
  process.exit(1);
}
console.log("Design check passed.");
