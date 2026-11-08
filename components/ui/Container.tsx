import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Page width (1200px) with the approved gutters: 16px mobile, 32px desktop. */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-page px-4 lg:px-8", className)}>
      {children}
    </div>
  );
}
