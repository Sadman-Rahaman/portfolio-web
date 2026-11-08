import type { ReactNode } from "react";
import { Container } from "./Container";
import { cn } from "@/lib/cn";

/**
 * Reference layout: a full width hairline above each section, the serif section title in
 * the left column (4 of 12) and the content on the right (8 of 12). One column on phones.
 *
 * `tinted` gives the section the raised paper tone. `band` puts it on the dark green band
 * (homepage "What I'm drawn to", 8 Nov 2026). `stickyTitle` keeps the title in view while the
 * section scrolls past on large screens (Work page, 8 Nov 2026).
 */
export function SectionFrame({
  id,
  title,
  subtitle,
  tinted = false,
  band = false,
  stickyTitle = false,
  children,
  className,
}: {
  id: string;
  title: string;
  subtitle?: string;
  tinted?: boolean;
  band?: boolean;
  stickyTitle?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      data-tone={band ? "band" : undefined}
      className={cn(
        "scroll-mt-16 py-16 lg:py-24",
        band ? "bg-band text-on-band" : "border-t border-line",
        tinted && !band && "bg-surface-raised",
        className,
      )}
    >
      <Container>
        <div data-reveal className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          <div className={cn("lg:col-span-4", stickyTitle && "lg:sticky lg:top-24 lg:self-start")}>
            <h2 id={`${id}-heading`} className={cn("heading-4", band ? "text-on-band" : "text-fg")}>
              {title}
            </h2>
            {subtitle && (
              <p className={cn("mt-2 body-6", band ? "text-on-band-muted" : "text-fg-muted")}>{subtitle}</p>
            )}
          </div>
          <div className="min-w-0 lg:col-span-8">{children}</div>
        </div>
      </Container>
    </section>
  );
}
