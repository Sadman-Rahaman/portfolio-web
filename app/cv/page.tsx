import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import type { ReactNode } from "react";
import { site } from "@/content/site";
import { awards } from "@/content/recognition";
import { certifications, education, experience, leadership, skills, summary, type Entry } from "@/content/profile";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowUpRight, DownloadSimple } from "@/components/ui/icons";

const description =
  "CV of Sadman Rahaman: BSc Computer Science at BRAC University (January 2027), Cofounder and Product Lead at MotoRent, Prizm, eShodor, awards and skills.";

export const metadata: Metadata = pageMetadata({
  title: "CV",
  description,
  path: "/cv",
  shareTitle: "CV of Sadman Rahaman",
});

function CvBlock({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section aria-labelledby={id} className="grid gap-4 border-t border-line py-12 lg:grid-cols-12 lg:gap-8">
      <h2 id={id} className="heading-5 text-fg lg:col-span-3">
        {title}
      </h2>
      <div className="min-w-0 lg:col-span-9">{children}</div>
    </section>
  );
}

function EntryList({ entries }: { entries: Entry[] }) {
  return (
    <ul className="flex flex-col gap-8">
      {entries.map((entry) => (
        <li key={`${entry.role}-${entry.org}`} className="grid gap-2 sm:grid-cols-9 sm:gap-8">
          <p className="caption-4 text-fg-muted sm:col-span-2">{entry.period}</p>
          <div className="sm:col-span-7">
            <h3 className="title-2 text-fg">{entry.role}</h3>
            <p className="mt-1 caption-1 text-fg-muted">
              {entry.org}
              {entry.place && `, ${entry.place}`}
            </p>
            {entry.points.length > 0 && (
              <ul className="mt-3 flex max-w-prose flex-col gap-2">
                {entry.points.map((point) => (
                  <li key={point} className="flex gap-3 body-6 text-fg-muted">
                    <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-fg-muted" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function CvPage() {
  return (
    <>
      <PageHeader crumbs={[{ label: "CV" }]} heading={["Curriculum vitae"]} lead={summary}>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
          <ButtonLink href={site.cv.href} download={site.cv.fileName}>
            <DownloadSimple size={20} aria-hidden />
            Download PDF
          </ButtonLink>
          <p className="caption-4 text-fg-muted">{site.cv.meta}</p>
        </div>
      </PageHeader>

      <div className="py-16 lg:py-24">
        <Container>
          <div data-reveal>
            <CvBlock id="cv-contact" title="Contact">
              <dl className="grid gap-4 sm:grid-cols-3">
                <div>
                  <dt className="caption-5 text-fg-muted">Email</dt>
                  <dd className="mt-1 break-all body-5 text-fg">
                    <a href={`mailto:${site.email}`} className="rounded-sm underline decoration-line underline-offset-4 hover:decoration-fg">
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="caption-5 text-fg-muted">Location</dt>
                  <dd className="mt-1 body-5 text-fg">{site.location}</dd>
                </div>
                <div>
                  <dt className="caption-5 text-fg-muted">Profiles</dt>
                  <dd className="mt-1 flex gap-3 body-5 text-fg">
                    <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-sm underline decoration-line underline-offset-4 hover:decoration-fg">
                      LinkedIn<span className="sr-only"> (opens in a new tab)</span>
                    </a>
                    <a href={site.links.github} target="_blank" rel="noopener noreferrer" className="rounded-sm underline decoration-line underline-offset-4 hover:decoration-fg">
                      GitHub<span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </dd>
                </div>
              </dl>
            </CvBlock>
            <CvBlock id="cv-experience" title="Experience">
              <EntryList entries={experience} />
            </CvBlock>
            <CvBlock id="cv-education" title="Education">
              <EntryList entries={education} />
            </CvBlock>
            <CvBlock id="cv-awards" title="Awards">
              <ul className="flex flex-col gap-6">
                {awards.map((award) => (
                  <li key={award.title} className="grid gap-2 sm:grid-cols-9 sm:gap-8">
                    <p className="caption-4 text-fg-muted sm:col-span-2">{award.date}</p>
                    <div className="sm:col-span-7">
                      <h3 className="title-3 text-fg">{award.title}</h3>
                      {award.detail && <p className="mt-1 body-6 text-fg-muted">{award.detail}</p>}
                      <p className="mt-1 caption-5 text-fg-muted">{award.by}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </CvBlock>
            <CvBlock id="cv-leadership" title="Leadership and volunteering">
              <EntryList entries={leadership} />
            </CvBlock>
            <CvBlock id="cv-skills" title="Skills">
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="title-3 text-fg">Technical</h3>
                  <ul className="mt-3 flex flex-col gap-2">
                    {skills.technical.map((s) => (
                      <li key={s} className="body-6 text-fg-muted">{s}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="title-3 text-fg">Business and design</h3>
                  <ul className="mt-3 flex flex-col gap-2">
                    {skills.business.map((s) => (
                      <li key={s} className="body-6 text-fg-muted">{s}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CvBlock>
            <CvBlock id="cv-certifications" title="Certifications">
              <ul className="flex flex-col gap-6">
                {certifications.map((c) => (
                  <li key={c.href} className="grid gap-2 sm:grid-cols-9 sm:gap-8">
                    <p className="caption-4 text-fg-muted sm:col-span-2">{c.date}</p>
                    <div className="sm:col-span-7">
                      <h3 className="title-3 text-fg">{c.title}</h3>
                      <p className="mt-1 caption-5 text-fg-muted">{c.issuer}</p>
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 rounded-sm caption-1 text-accent underline decoration-accent/40 underline-offset-4 transition-colors duration-300 ease-base hover:decoration-accent"
                      >
                        {c.linkLabel}
                        <ArrowUpRight size={14} aria-hidden />
                        <span className="sr-only">for {c.title} (opens in a new tab)</span>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </CvBlock>
          </div>
        </Container>
      </div>
    </>
  );
}
