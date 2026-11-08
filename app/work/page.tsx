import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { caseStudies, smallBuilds } from "@/content/projects";
import { otherVentures, workIntro } from "@/content/work";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionFrame } from "@/components/ui/SectionFrame";
import { CaseStudyCard, SmallBuildList } from "@/components/work/ProjectRows";
import { MotoRentVenture } from "@/components/work/MotoRentVenture";
import { VentureCard } from "@/components/work/VentureCard";
import { Recognition } from "@/components/work/Recognition";

const description =
  "Ventures, case studies, projects and recognition of Sadman Rahaman: MotoRent, Prizm and eShodor; research on predicting Alzheimer's; a solar finance model; web and machine learning projects.";

export const metadata: Metadata = pageMetadata({
  title: "Work",
  description,
  path: "/work",
  shareTitle: "Work by Sadman Rahaman",
});

const sections = [
  { id: "business", label: "Business" },
  { id: "case-studies", label: "Case studies" },
  { id: "projects", label: "Projects" },
  { id: "recognition", label: "Recognition" },
];

const jumpLink =
  "rounded-sm body-5 text-accent underline decoration-accent/40 underline-offset-4 " +
  "transition-colors duration-300 ease-base hover:decoration-accent";

export default function WorkPage() {
  return (
    <>
      <PageHeader crumbs={[{ label: "Work" }]} heading={workIntro.heading} lead={workIntro.lead}>
        <nav aria-label="On this page">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className={jumpLink}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </PageHeader>

      <div className="mt-16 lg:mt-24">
        {/* ---------- Business ---------- */}
        <SectionFrame id="business" title="Business" subtitle="Ventures I've cofounded" stickyTitle>
          <div className="flex flex-col gap-6">
            <MotoRentVenture />
            {otherVentures.map((venture) => (
              <VentureCard key={venture.id} venture={venture} />
            ))}
          </div>
        </SectionFrame>

        {/* ---------- Case studies ---------- */}
        <SectionFrame id="case-studies" title="Case studies" subtitle="Research and business strategy, written up in full" stickyTitle>
          <div className="grid gap-6 sm:grid-cols-2">
            {caseStudies.map((project) => (
              <CaseStudyCard key={project.id} project={project} />
            ))}
          </div>
        </SectionFrame>

        {/* ---------- Projects ---------- */}
        <SectionFrame id="projects" title="Projects" subtitle="Course projects and web platforms" tinted stickyTitle>
          <SmallBuildList builds={smallBuilds} />
        </SectionFrame>

        <Recognition />
      </div>
    </>
  );
}
