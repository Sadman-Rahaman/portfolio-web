import Image from "next/image";
import type { Portrait } from "@/content/site";
import { cn } from "@/lib/cn";

/** Portrait as in the reference: a plain photo with rounded corners, no frame. */
export function PortraitFigure({ portrait, className }: { portrait: Portrait; className?: string }) {
  return (
    <Image
      src={portrait.src}
      alt={portrait.alt}
      width={portrait.width}
      height={portrait.height}
      priority
      sizes="(min-width: 1024px) 320px, 100vw"
      className={cn("aspect-4/5 h-auto w-full rounded-xl object-cover", className)}
    />
  );
}
