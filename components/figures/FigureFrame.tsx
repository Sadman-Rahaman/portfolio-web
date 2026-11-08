import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Shared frame for numbered figures: "Fig. N" in the accent, a title that states the
 * finding, and a caption with the source, like a paper (approved direction, principle 4).
 */
export function FigureFrame({
  number,
  tag,
  title,
  subtitle,
  caption,
  children,
  className,
  id,
}: {
  number: number;
  tag?: string;
  title: string;
  subtitle?: string;
  caption?: ReactNode;
  children: ReactNode;
  className?: string;
  id: string;
}) {
  return (
    <figure aria-labelledby={`${id}-title`} className={cn("rounded-xl border border-line bg-surface p-6", className)}>
      <div className="flex items-baseline justify-between gap-4">
        <p className="caption-3 text-accent">Fig. {number}</p>
        {tag && <p className="caption-5 text-fg-muted">{tag}</p>}
      </div>
      <p id={`${id}-title`} className="mt-2 title-3 text-fg">
        {title}
      </p>
      {subtitle && <p className="mt-1 caption-2 text-fg-muted">{subtitle}</p>}
      <div className="mt-6">{children}</div>
      {caption && (
        <figcaption className="mt-6 border-t border-line pt-4 caption-5 text-fg-muted">{caption}</figcaption>
      )}
    </figure>
  );
}
