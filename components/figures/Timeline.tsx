import { cn } from "@/lib/cn";

export type TimelineItem = { date: string; title: string; detail?: string; current?: boolean };

/** Literal class names so Tailwind generates them. Add a count here if a timeline needs it. */
const desktopColumns: Record<number, string> = {
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
  6: "lg:grid-cols-6",
  7: "lg:grid-cols-7",
  8: "lg:grid-cols-8",
};

/**
 * Horizontal timeline, oldest on the left. A 1px rail runs through one dot per milestone;
 * the latest milestone takes the accent.
 *
 * Desktop (1024px and up): every milestone in equal columns, nothing hidden.
 * Below that: a row that scrolls sideways with snapping. The row is focusable, so arrow
 * keys scroll it, and a one line hint says there is more to see.
 */
export function Timeline({
  items,
  label,
  className,
}: {
  items: TimelineItem[];
  /** Names the scrollable region for screen readers, for example "Milestones, 2018 to 2027". */
  label: string;
  className?: string;
}) {
  const fitsOnDesktop = items.length in desktopColumns;
  return (
    <div className={className}>
      <div
        role="region"
        aria-label={label}
        tabIndex={0}
        className={cn(
          "snap-x snap-mandatory overflow-x-auto rounded-sm pb-4",
          fitsOnDesktop && "lg:overflow-visible lg:pb-0",
        )}
      >
        <ol
          className={cn(
            "flex w-max gap-4",
            fitsOnDesktop && cn("lg:grid lg:w-auto", desktopColumns[items.length]),
          )}
        >
          {items.map((item, i) => {
            const last = i === items.length - 1;
            return (
              <li
                key={`${item.date}-${item.title}`}
                className={cn("relative w-48 shrink-0 snap-start pt-8", fitsOnDesktop && "lg:w-auto")}
              >
                {/* Rail: from this dot across the gap to the next one */}
                {!last && <span aria-hidden className="absolute top-3 left-0 -right-4 h-px bg-line" />}
                <span
                  aria-hidden
                  className={cn(
                    "absolute top-2 left-0 size-2 rounded-full",
                    item.current ? "bg-accent" : "bg-fg",
                  )}
                />
                <p className="heading-6 text-fg tabular-nums">{item.date}</p>
                <p className="mt-2 body-5 text-fg">{item.title}</p>
                {item.detail && <p className="mt-1 caption-2 text-fg-muted">{item.detail}</p>}
              </li>
            );
          })}
        </ol>
      </div>
      <p className={cn("mt-2 caption-2 text-fg-muted", fitsOnDesktop && "lg:hidden")}>
        Swipe or scroll sideways to see every milestone.
      </p>
    </div>
  );
}
