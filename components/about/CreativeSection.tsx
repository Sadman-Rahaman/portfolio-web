import Image from "next/image";
import { creative } from "@/content/about";
import { gallery, type GalleryItem } from "@/content/photography";
import { Container } from "@/components/ui/Container";
import { ArrowUpRight, InstagramLogo } from "@/components/ui/icons";
import { quietLink } from "@/components/work/ProjectRows";
import { LoopVideo } from "@/components/ui/LoopVideo";
import { cn } from "@/lib/cn";

/**
 * "My creative side" (Sadman, 8 Nov 2026): photos and short films side by side, with the
 * text card sitting on top of them.
 *
 * Large screens: a 4 by 4 collage. The card takes the middle and reaches over the edges of
 * the tiles around it; tall tiles sit at the corners. Film controls sit top right, clear of the card.
 * Smaller screens: four tiles, the card overlapping the rows above and below it, four tiles.
 */
const collageSlots = [
  "lg:col-start-1 lg:row-start-1 lg:row-span-2",
  "lg:col-start-2 lg:row-start-1",
  "lg:col-start-3 lg:row-start-1",
  "lg:col-start-4 lg:row-start-1 lg:row-span-2",
  "lg:col-start-1 lg:row-start-3 lg:row-span-2",
  "lg:col-start-2 lg:row-start-4",
  "lg:col-start-3 lg:row-start-4",
  "lg:col-start-4 lg:row-start-3 lg:row-span-2",
];

const focusClass = { center: "object-center", bottom: "object-bottom", right: "object-right" } as const;

export function CreativeSection() {
  const collage = gallery.length === collageSlots.length;
  const tile = cn("aspect-4/5 w-full", collage && "lg:aspect-auto lg:h-full");

  return (
    <section
      id="creative"
      aria-labelledby="creative-heading"
      className="scroll-mt-16 border-t border-line bg-surface-raised py-16 lg:py-24"
    >
      <Container>
        <div
          data-reveal
          className={cn("grid grid-cols-2 gap-4 sm:grid-cols-4", collage && "lg:aspect-4/3 lg:grid-rows-4")}
        >
          {/* The homepage "See my creative side" link lands here, on the Instagram card. */}
          <div
            id="instagram"
            className={cn(
              "relative z-10 order-2 col-span-2 scroll-mt-32 sm:col-span-4",
              gallery.length > 0 && "mx-4 -my-12 sm:mx-12",
              collage && "lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-2 lg:-m-10",
            )}
          >
            <CreativeCard />
          </div>

          {gallery.map((item, i) => (
            <figure
              key={item.src}
              className={cn("min-h-0", i < gallery.length / 2 ? "order-1" : "order-3", collage && collageSlots[i])}
            >
              <GalleryTile item={item} className={tile} />
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

function GalleryTile({ item, className }: { item: GalleryItem; className: string }) {
  if (item.kind === "video" && item.poster) {
    return <LoopVideo src={item.src} poster={item.poster} label={item.alt} className={className} />;
  }
  return (
    <Image
      src={item.src}
      alt={item.alt}
      width={item.width}
      height={item.height}
      sizes="(min-width: 1024px) 240px, (min-width: 640px) 25vw, 50vw"
      className={cn("rounded-lg object-cover", focusClass[item.focus ?? "center"], className)}
    />
  );
}

function CreativeCard() {
  return (
    <div className="flex h-full flex-col justify-center rounded-xl border border-line bg-surface p-6 sm:p-8">
      <h2 id="creative-heading" className="heading-4 text-fg">
        {creative.heading}
      </h2>
      <div className="mt-4 flex flex-col gap-3">
        {creative.paragraphs.map((p) => (
          <p key={p.slice(0, 24)} className="body-6 text-fg-muted">
            {p}
          </p>
        ))}
      </div>
      <a
        href={creative.instagram.href}
        target="_blank"
        rel="noopener noreferrer"
        className={
          "group mt-6 flex items-start gap-4 rounded-lg border border-line bg-bg p-4 " +
          "transition-[border-color] duration-300 ease-base hover:border-fg-muted/40"
        }
      >
        <InstagramLogo size={24} aria-hidden className="shrink-0 text-accent" />
        <span className="flex min-w-0 flex-col gap-1">
          <span className="break-all title-3 text-fg sm:title-2">{creative.instagram.handle}</span>
          <span className="caption-2 text-fg-muted">{creative.instagram.note}</span>
          <span className={cn(quietLink, "mt-2 group-hover:decoration-accent")}>
            Open my Instagram
            <ArrowUpRight size={16} aria-hidden />
          </span>
        </span>
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    </div>
  );
}
