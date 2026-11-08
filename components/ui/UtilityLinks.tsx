import { site } from "@/content/site";
import { cn } from "@/lib/cn";
import { ArrowUpRight, DownloadSimple } from "./icons";

const linkClass =
  "inline-flex items-center gap-1 rounded-sm body-5 text-accent " +
  "underline decoration-accent/40 underline-offset-4 " +
  "transition-colors duration-300 ease-base hover:decoration-accent";

/**
 * The quiet links that sit beside a primary action: CV, LinkedIn, GitHub.
 * Deliberately styled as text, not buttons, so they never compete with the CTA.
 */
export function UtilityLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-x-4 gap-y-2", className)}>
      <li>
        <a href={site.cv.href} download={site.cv.fileName} className={linkClass}>
          <DownloadSimple size={16} aria-hidden />
          Download CV
          <span className="sr-only">({site.cv.meta})</span>
        </a>
      </li>
      <li>
        <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
          LinkedIn
          <ArrowUpRight size={16} aria-hidden />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </li>
      <li>
        <a href={site.links.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
          GitHub
          <ArrowUpRight size={16} aria-hidden />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </li>
    </ul>
  );
}
