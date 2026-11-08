import type { ReactNode } from "react";
import { placeholderLabels, showPlaceholders, stripPlaceholders } from "@/content/placeholders";
import { cn } from "@/lib/cn";

/** Inline marker for a missing fact. Visibly unfinished on purpose, so nothing is guessed. */
export function PlaceholderMark({ name }: { name: string }) {
  const label = placeholderLabels[name] ?? name.replace(/_/g, " ");
  return (
    <span className="rounded-sm border border-dashed border-fg-muted px-1 caption-4 text-fg-muted">
      To add: {label}
    </span>
  );
}

/**
 * Renders copy with {{key}} placeholders. Development: each one becomes a PlaceholderMark.
 * Production: sentences that still hold a placeholder are left out.
 */
export function WithPlaceholders({ text }: { text: string }) {
  if (!showPlaceholders) return <>{stripPlaceholders(text)}</>;
  const parts = text.split(/(\{\{[a-z_]+\}\})/g).filter(Boolean);
  return (
    <>
      {parts.map((part, i) => {
        const match = part.match(/^\{\{([a-z_]+)\}\}$/);
        return match ? <PlaceholderMark key={i} name={match[1]} /> : <span key={i}>{part}</span>;
      })}
    </>
  );
}

/** True when a copy string has something to show in the current build. */
export const hasVisibleText = (text: string) => showPlaceholders || stripPlaceholders(text).length > 0;

/** Block placeholder for a missing asset or section. Hidden in production builds. */
export function PlaceholderBlock({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  if (!showPlaceholders) return null;
  return (
    <div className={cn("rounded-xl border border-dashed border-fg-muted p-6", className)}>
      <p className="caption-4 text-fg-muted">Placeholder</p>
      <p className="mt-2 title-3 text-fg">{title}</p>
      <div className="mt-1 caption-2 text-fg-muted">{children}</div>
    </div>
  );
}
