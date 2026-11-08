import Image from "next/image";
import { motorent } from "@/content/work";
import { Timeline } from "@/components/figures/Timeline";
import { ArrowUpRight } from "@/components/ui/icons";
import { StatusPill, quietLink } from "./ProjectRows";

/**
 * MotoRent as a venture, not a case study (Sadman's instruction, 8 Nov 2026):
 * what it is, my role and contributions, milestones, evidence and press.
 */
export function MotoRentVenture() {
  return (
    <article id="motorent" aria-labelledby="motorent-title" className="scroll-mt-24 rounded-xl border border-line bg-surface">
      <div className="flex flex-col gap-6 p-6 sm:p-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h3 id="motorent-title">
            {/* Logo on a fixed light plate so its navy wordmark reads in both themes */}
            <span className="inline-flex rounded-md bg-plate px-3 py-2">
              <Image
                src={motorent.logo.src}
                alt={motorent.logo.alt}
                width={motorent.logo.width}
                height={motorent.logo.height}
                sizes="200px"
                className="h-8 w-auto"
              />
            </span>
          </h3>
          <StatusPill>{motorent.status}</StatusPill>
        </div>

        <p className="title-1 text-fg">{motorent.role}</p>

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col gap-4 lg:col-span-7">
            {motorent.about.map((p) => (
              <p key={p.slice(0, 24)} className="body-3 text-fg-muted">
                {p}
              </p>
            ))}
          </div>
          <dl className="flex flex-col lg:col-span-5">
            {motorent.facts.map((fact) => (
              <div key={fact.label} className="grid grid-cols-3 gap-4 border-t border-line py-3 last:border-b">
                <dt className="caption-2 text-fg-muted">{fact.label}</dt>
                <dd className="col-span-2 body-5 text-fg">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="border-t border-line pt-6">
          <h4 className="title-2 text-fg">What I do</h4>
          <ul className="mt-4 grid gap-x-8 gap-y-3 md:grid-cols-2">
            {motorent.contributions.map((c) => (
              <li key={c} className="flex gap-3 body-6 text-fg-muted">
                <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-line pt-6">
          <h4 className="title-2 text-fg">Milestones</h4>
          <Timeline items={motorent.milestones} label="MotoRent milestones" className="mt-2" />
          <p className="mt-4 max-w-prose body-6 text-fg-muted">{motorent.status_note}</p>
        </div>

        <div className="border-t border-line pt-6">
          <h4 className="title-2 text-fg">Evidence</h4>
          <ul className="mt-4 grid gap-x-6 gap-y-8 sm:grid-cols-2">
            {motorent.evidence.map((photo) => (
              <li key={photo.src}>
                <figure>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    sizes="(min-width: 640px) 360px, 100vw"
                    className="aspect-4/3 h-auto w-full rounded-lg object-cover"
                  />
                  {photo.caption && <figcaption className="mt-2 caption-2 text-fg-muted">{photo.caption}</figcaption>}
                </figure>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="caption-2 text-fg-muted">In the press:</p>
            {motorent.press.map((p) => (
              <a key={p.href} href={p.href} target="_blank" rel="noopener noreferrer" className={quietLink}>
                {p.outlet}
                <ArrowUpRight size={16} aria-hidden />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
