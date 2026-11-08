import Image from "next/image";
import { site } from "@/content/site";
import { hero } from "@/content/home";
import { photos } from "@/content/media";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { enterDelay as delay } from "@/lib/motion";

/**
 * Reference hero: name and role lines, a serif statement, one supporting sentence,
 * two buttons, and a photo on the right (a portrait once supplied, MotoRent until then).
 */
/** Shown only if the portrait in content/site.ts is set to null. */
const fallbackImage = photos.uihpBanner;

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="pt-6 pb-16 sm:pt-12 lg:pt-16 lg:pb-24">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            {/* Below large screens the name and role sit on the card over the photo instead. */}
            <p className="enter hidden body-4 text-fg lg:block">{site.name}</p>
            <p className="enter mt-1 hidden body-6 text-fg-muted lg:block">
              {hero.roleLines.map((line, i) => (
                <span key={line} className="block">
                  {line}
                  {i < hero.roleLines.length - 1 && " "}
                </span>
              ))}
            </p>

            <h1 id="hero-heading" className="enter max-w-hero heading-4 text-fg sm:heading-3 lg:mt-6" style={delay(60)}>
              {hero.headline.map((line, i) => (
                <span key={line} className="sm:whitespace-nowrap">
                  {line}
                  {i < hero.headline.length - 1 && <br className="hidden sm:inline" />}
                  {i < hero.headline.length - 1 && " "}
                </span>
              ))}
            </h1>

            <div className="enter mt-6 flex max-w-hero flex-col gap-4" style={delay(120)}>
              {hero.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="body-7 text-fg-muted">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="enter mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap" style={delay(180)}>
              <LinkButton href="/about">More about me</LinkButton>
              <LinkButton href="/work" variant="secondary">
                See my work
              </LinkButton>
            </div>
          </div>

          {/* Phones and tablets: the photo comes first, with a name card over its lower edge. */}
          <div className="enter order-first lg:order-none lg:col-span-4" style={delay(240)}>
            {site.portrait ? (
              <div className="mx-auto w-full max-w-sm lg:max-w-none">
                <Image
                  src={site.portrait.src}
                  alt={site.portrait.alt}
                  width={site.portrait.width}
                  height={site.portrait.height}
                  priority
                  sizes="(min-width: 1024px) 320px, (min-width: 640px) 384px, 100vw"
                  className="aspect-square h-auto w-full rounded-xl object-cover object-top sm:aspect-4/5"
                />
                <div className="relative mx-4 -mt-12 rounded-xl border border-line bg-surface p-4 lg:hidden">
                  <p className="title-2 text-fg">{site.name}</p>
                  <p className="mt-1 caption-2 text-fg-muted">{hero.roleLines.join(" ")}</p>
                </div>
              </div>
            ) : (
              <figure>
                <Image
                  src={fallbackImage.src}
                  alt={fallbackImage.alt}
                  width={fallbackImage.width}
                  height={fallbackImage.height}
                  priority
                  sizes="(min-width: 1024px) 320px, 100vw"
                  className="aspect-4/5 h-auto w-full rounded-xl object-cover"
                />
                <figcaption className="mt-3 caption-2 text-fg-muted">{fallbackImage.caption}</figcaption>
              </figure>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
