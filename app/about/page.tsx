import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { pageMetadata } from "@/lib/metadata";
import { mailto, site } from "@/content/site";
import { photos, type Photo } from "@/content/media";
import { aboutHeader, heading, journey, moreAboutMe } from "@/content/about";
import { milestones } from "@/content/profile";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { ButtonLink, LinkButton } from "@/components/ui/Button";
import { PortraitFigure } from "@/components/figures/PortraitFigure";
import { Timeline } from "@/components/figures/Timeline";
import { CreativeSection } from "@/components/about/CreativeSection";
import { quietLink } from "@/components/work/ProjectRows";
import { ArrowRight, ArrowUpRight, DownloadSimple } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

const description =
  "About Sadman Rahaman: a final year Computer Science student at BRAC University with a minor in Business. His story, from volunteering and his first venture to MotoRent, research and photography.";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description,
  path: "/about",
  shareTitle: "About Sadman Rahaman",
});

/** Section shell matching the rest of the site: hairline above, serif title on the left. */
function AboutSection({
  id,
  title,
  tinted = false,
  wide,
  children,
}: {
  id: string;
  title: string;
  tinted?: boolean;
  /** Full width content shown under the title row, before the two column content. */
  wide?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn("scroll-mt-16 border-t border-line py-16 lg:py-24", tinted && "bg-surface-raised")}
    >
      <Container>
        <div data-reveal>
          <h2 id={`${id}-heading`} className="heading-4 text-fg">
            {title}
          </h2>
          {wide && <div className="mt-8 lg:mt-12">{wide}</div>}
          <div className={cn(wide ? "mt-12 lg:mt-16" : "mt-8")}>{children}</div>
        </div>
      </Container>
    </section>
  );
}

/** A chapter photo at full width and its own proportions, above or below the photo grid. */
function WidePhoto({ photo }: { photo: Photo }) {
  return (
    <figure className="mt-6">
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        sizes="(min-width: 1024px) 640px, 100vw"
        className="h-auto w-full rounded-lg"
      />
      {photo.caption && <figcaption className="mt-2 caption-2 text-fg-muted">{photo.caption}</figcaption>}
    </figure>
  );
}

export default function AboutPage() {
  return (
    <>
      <PageHeader crumbs={[{ label: "About" }]} heading={aboutHeader.heading} lead={aboutHeader.lead} />

      {/* ---------- A. A little more about me ---------- */}
      <section aria-labelledby="more-about-me-heading" className="py-16 lg:py-24">
        <Container>
          <div data-reveal className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Phones: a 4:5 photo. Large screens: the photo runs the full height of the text beside it. */}
            <div className="relative aspect-4/5 overflow-hidden rounded-xl lg:col-span-4 lg:aspect-auto">
              <Image
                src={photos.aboutHillside.src}
                alt={photos.aboutHillside.alt}
                width={photos.aboutHillside.width}
                height={photos.aboutHillside.height}
                priority
                sizes="(min-width: 1024px) 320px, 100vw"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-6 lg:col-span-7 lg:col-start-6">
              <h2 id="more-about-me-heading" className="heading-5 text-fg">
                {moreAboutMe.title}
              </h2>
              {moreAboutMe.paragraphs.map((p, i) => (
                <p key={p.slice(0, 24)} className={cn("max-w-prose", i === 0 ? "body-8 text-fg" : "body-3 text-fg-muted")}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ---------- B. My journey ---------- */}
      <AboutSection
        id="journey"
        title="My journey"
        wide={<Timeline items={milestones} label="Milestones from 2018 to 2026" />}
      >
        <ol className="flex flex-col">
          {journey.map((chapter) => (
            <li
              key={chapter.id}
              className="grid gap-4 border-t border-line py-8 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:gap-8"
            >
              <div className="lg:col-span-4">
                <p className="caption-2 text-fg-muted">{chapter.period}</p>
                <h3 className="mt-1 heading-5 text-fg">{chapter.title}</h3>
                {chapter.role && <p className="mt-1 caption-1 text-fg-muted">{chapter.role}</p>}
              </div>
              <div className="lg:col-span-8">
                <p className="max-w-prose body-3 text-fg-muted">{chapter.text}</p>
                {chapter.link && (
                  <Link href={chapter.link.href} className={`${quietLink} mt-4`}>
                    {chapter.link.label}
                    <ArrowRight size={16} aria-hidden />
                  </Link>
                )}
                {chapter.documents && (
                  <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                    {chapter.documents.map((doc) => (
                      <li key={doc.href}>
                        <a href={doc.href} target="_blank" rel="noopener noreferrer" className={quietLink}>
                          {doc.label}
                          <ArrowUpRight size={16} aria-hidden />
                          <span className="sr-only">(PDF, opens in a new tab)</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
                {chapter.leadPhoto && <WidePhoto photo={chapter.leadPhoto} />}
                {chapter.photos && (
                  <div className={cn("mt-6 grid gap-4", chapter.photos.length > 1 && "sm:grid-cols-2")}>
                    {chapter.photos.map((photo) => (
                      <figure key={photo.src}>
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          width={photo.width}
                          height={photo.height}
                          sizes={chapter.photos!.length > 1 ? "(min-width: 640px) 320px, 100vw" : "(min-width: 1024px) 640px, 100vw"}
                          className={cn(
                            "h-auto w-full rounded-lg object-cover",
                            chapter.photos!.length > 1 ? "aspect-4/3" : "aspect-video",
                          )}
                        />
                        {photo.caption && <figcaption className="mt-2 caption-2 text-fg-muted">{photo.caption}</figcaption>}
                      </figure>
                    ))}
                  </div>
                )}
                {chapter.closingPhoto && <WidePhoto photo={chapter.closingPhoto} />}
              </div>
            </li>
          ))}
        </ol>
      </AboutSection>

      {/* ---------- C. My creative side ---------- */}
      <CreativeSection />

      {/* ---------- D. Where I'm heading ---------- */}
      <AboutSection id="direction" title={heading.title}>
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col gap-4 lg:col-span-8">
            {heading.paragraphs.map((p, i) => (
              <p key={p.slice(0, 24)} className={cn("max-w-prose", i === 0 ? "body-8 text-fg" : "body-3 text-fg-muted")}>
                {p}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap content-start gap-3 lg:col-span-4 lg:justify-end">
            <ButtonLink href={mailto("Hello from your portfolio")}>Email me</ButtonLink>
            <ButtonLink href={site.cv.href} download={site.cv.fileName} variant="secondary">
              <DownloadSimple size={20} aria-hidden />
              Download CV
            </ButtonLink>
            <LinkButton href="/work" variant="secondary">
              See my work
            </LinkButton>
          </div>
        </div>
      </AboutSection>
    </>
  );
}
