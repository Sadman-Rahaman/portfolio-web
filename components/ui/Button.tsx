import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary";
type Size = "md" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-3 py-2 whitespace-nowrap " +
  "transition-[background-color,color,border-color,transform] duration-300 ease-base " +
  "active:scale-98 motion-reduce:active:scale-100";

/** Reference buttons: filled deep green, and a quiet outline on the paper colour. */
const variants: Record<Variant, string> = {
  primary: "bg-accent text-on-accent hover:bg-accent/90",
  secondary: "border border-fg-muted/40 text-fg hover:border-fg hover:bg-surface",
};

const sizes: Record<Size, string> = {
  md: "button-md",
  sm: "button-sm",
};

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
};

/**
 * Main buttons use 8px by 12px padding (skill B2). Rendered as an anchor because every
 * button on this site goes somewhere: a section, an email client, a file or a profile.
 */
export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <a href={href} className={cn(base, variants[variant], sizes[size], className)} {...rest}>
      {children}
    </a>
  );
}

/** Same look as ButtonLink, for pages inside the site (client side navigation). */
export function LinkButton({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)}>
      {children}
    </Link>
  );
}
