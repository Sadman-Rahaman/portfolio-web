import Image from "next/image";
import Link from "next/link";
import type { FeaturedProject, SmallBuild } from "@/content/projects";
import { ArrowRight, ArrowUpRight } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

export const quietLink =
  "inline-flex w-fit items-center gap-1 rounded-sm body-5 text-accent underline decoration-accent/40 " +
  "underline-offset-4 transition-colors duration-300 ease-base hover:decoration-accent";

export function StatusPill({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line px-2 py-0.5 caption-4 text-fg">
      <span aria-hidden className="size-2 rounded-full bg-accent" />
      {children}
    </span>
  );
}

/**
 * Case study card on the Work page: image flush with the card's top edge (gap 0, so it
 * shares the 12px radius, skill B3), then title, summary, role, three figures and the link.
 */
export function CaseStudyCard({ project }: { project: FeaturedProject }) {
  const href = `/work/${project.slug}`;
  const modelled = project.figures.some((f) => f.modelled);
  return (
    <article
      id={project.id}
      aria-labelledby={`${project.id}-title`}
      className="flex scroll-mt-24 flex-col overflow-hidden rounded-xl border border-line bg-surface"
    >
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={project.image.width}
        height={project.image.height}
        sizes="(min-width: 640px) 320px, 100vw"
        className="aspect-4/3 h-auto w-full object-cover"
      />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-4">
          <p className="caption-2 text-fg-muted">{project.tags.join(" · ")}</p>
          {project.status ? <StatusPill>{project.status}</StatusPill> : <p className="caption-2 text-fg-muted">{project.period}</p>}
        </div>
        <h3 id={`${project.id}-title`} className="mt-3 heading-5 text-fg">
          {project.title}
        </h3>
        <p className="mt-3 body-6 text-fg-muted">{project.summary}</p>
        <p className="mt-3 caption-1 text-fg">{project.role}</p>
        {/* One figure per row, value first: long values like "464,440 t" never squeeze */}
        <dl className="mt-6 flex flex-col border-t border-line">
          {project.figures.map((figure) => (
            // dt before dd for valid markup; row-reverse shows the value first
            <div key={figure.label} className="flex flex-row-reverse items-baseline justify-end gap-4 border-b border-line py-3">
              <dt className="caption-2 text-fg-muted">{figure.label}</dt>
              <dd className="w-24 shrink-0 heading-6 text-fg tabular-nums">{figure.value}</dd>
            </div>
          ))}
        </dl>
        {modelled && <p className="mt-3 caption-5 text-fg-muted">Figures are modelled estimates, not results.</p>}
        <Link href={href} className={cn(quietLink, "mt-6 sm:mt-auto sm:pt-6")}>
          Read the case study
          <ArrowRight size={16} aria-hidden />
          <span className="sr-only">: {project.title}</span>
        </Link>
      </div>
    </article>
  );
}

export function SmallBuildList({ builds, headingLevel = 3 }: { builds: SmallBuild[]; headingLevel?: 3 | 4 }) {
  const Title = headingLevel === 3 ? "h3" : "h4";
  return (
    <ul className="flex flex-col">
      {builds.map((build) => (
        <li key={build.id} className="grid gap-2 border-t border-line py-6 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <Title className="title-3 text-fg">{build.title}</Title>
            <p className="mt-1 caption-4 text-fg-muted">{build.context}</p>
          </div>
          <p className="body-6 text-fg-muted md:col-span-5">{build.summary}</p>
          <div className="flex flex-col items-start gap-2 md:col-span-3">
            <p className="caption-4 text-fg-muted">{build.stack.join(", ")}</p>
            {build.href && (
              <a href={build.href} target="_blank" rel="noopener noreferrer" className={cn(quietLink, "mt-1 whitespace-nowrap")}>
                Code on GitHub
                <ArrowUpRight size={16} aria-hidden />
                <span className="sr-only">for {build.title} (opens in a new tab)</span>
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}
