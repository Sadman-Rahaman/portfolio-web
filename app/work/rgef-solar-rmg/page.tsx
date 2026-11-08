import type { Metadata } from "next";
import Image from "next/image";
import { photos } from "@/content/media";
import { pageMetadata } from "@/lib/metadata";
import { CaseHeader, CaseNext, CaseSection, Findings, Points, Prose } from "@/components/case/CaseLayout";
import { FigureFrame } from "@/components/figures/FigureFrame";
import { FlowFigure } from "@/components/figures/FlowFigure";
import { CapitalStackFigure } from "@/components/figures/CapitalStackFigure";
import { PlaceholderBlock } from "@/components/ui/Placeholder";
import { LoopVideo } from "@/components/ui/LoopVideo";
import { showPlaceholders } from "@/content/placeholders";

const description =
  "A blended finance model that lets Bangladesh's garment factories adopt rooftop solar at no upfront cost. Built for BUS334 at BRAC University in collaboration with Oxfam in Bangladesh.";

export const metadata: Metadata = pageMetadata({
  title: "Rooftop solar finance case study",
  description,
  path: "/work/rgef-solar-rmg",
  shareTitle: "Rooftop solar finance for garment factories",
});

/** Modelled outputs from the report's Master Modelling Assumptions and summary tables. */
const modelled = [
  { value: "400 MW", label: "Phase 1 rooftop solar portfolio" },
  { value: "USD 250M", label: "Blended capital" },
  { value: "about 22.3%", label: "Net equity IRR, after tax, 15 year model" },
  { value: "about 5.6 years", label: "Discounted payback at 10%, after tax" },
  { value: "464,440 t", label: "CO₂ avoided per year at full Phase 1" },
  { value: "6%", label: "Of PPA receipts to a Worker Equity Fund" },
];

/* Sources: RGEF report (BUS334, BRAC University, 2026); LinkedIn post on the workshop;
   Sadman's account, photos and film of the factory visit (8 Nov 2026). */
export default function RgefPage() {
  return (
    <>
      <CaseHeader
        title="Rooftop solar finance"
        heading={["Rooftop solar finance", "for garment factories"]}
        lead="The RMG Green Energy Fund: a blended finance model that lets Bangladesh's garment factories adopt rooftop solar at no upfront cost. Built for BUS334 at BRAC University in collaboration with Oxfam in Bangladesh."
        meta={[
          { label: "Period", value: "2026" },
          { label: "Course", value: "BUS334, BRAC University" },
          { label: "Partner", value: "Oxfam in Bangladesh" },
          { label: "Field study", value: "Colors and Stitches Ltd, Gazipur, April 2026" },
          { label: "Team", text: "{{rgef_team}}" },
          { label: "My part", text: "{{rgef_contribution}}" },
        ]}
      />

      <CaseSection
        id="problem"
        label="The problem"
        title="Solar is already cheaper than the grid. Almost no garment factory has it."
      >
        <Prose>
          Bangladesh&apos;s ready made garment industry exports more than USD 47 billion a year and
          employs about 4.4 million people, and it runs almost entirely on fossil fuel: roughly 60% from
          gas through the national grid and 25% from diesel generators, by the report&apos;s estimates.
          Only about 50 of some 7,000 export factories have installed solar, around 50 MW in total.
        </Prose>
        <Prose>
          IDCOL found in 2022 that solar already costs less than the grid tariff. The gap comes from two
          other places: factories cannot meet the upfront capital (a 100 kW system costs roughly Tk 1.5
          to 2 crore), and they cannot turn solar into the verified Scope 2 emissions data their
          overseas buyers now ask for.
        </Prose>
      </CaseSection>

      <CaseSection id="method" label="Method" title="One factory floor, checked against the industry.">
        <Points
          items={[
            "Structured interviews with management at Colors and Stitches Ltd, an exporter in Gazipur with more than 970 workers, in April 2026, plus informal consultations with workers away from supervisors.",
            "Secondary data from BGMEA, BTMA, IDCOL, Bangladesh Bank, UCB and company statements, used to test whether the factory's barriers match the sector.",
            "Financial projections benchmarked against IDCOL, IEEFA and Solar EPC Development data.",
          ]}
        />
        <Prose>
          The report lists its own limits: a single factory visit, management interviews that may reflect
          the company&apos;s position, informal worker consultations, and a below grid price range that
          comes from one provider.
        </Prose>
      </CaseSection>

      {/* Sadman's own account of the visit (8 Nov 2026), with the visit's film and photos. */}
      <CaseSection id="field-visit" label="Field visit" title="We did not just build a model on paper.">
        <Prose>
          We visited Colors and Stitches Ltd in Gazipur, an export oriented factory with over 970
          workers, currently only 1 to 2% solar powered. Management confirmed active pressure from
          international buyers and clear rooftop capacity.
        </Prose>
        <Prose>
          But when we asked why they had not gone further, the answer was immediate: the upfront
          cost. A million dollars for solar is simply not capital they can access. That single
          conversation brought the entire case into focus: this is a financing gap, not a technology
          gap.
        </Prose>
        <FigureFrame
          id="fig-factory-film"
          number={1}
          tag="April 2026"
          title="Inside the factory"
          caption="From the visit: the meeting with management, the sewing and packing floors, the fire pump room and the electrical panels."
        >
          <LoopVideo
            src="/videos/factory-visit.mp4"
            poster="/videos/factory-visit-poster.jpg"
            label="Short film from the factory visit: a meeting with management, the sewing and packing floors, the fire pump room and the electrical panels."
            className="aspect-video w-full"
          />
        </FigureFrame>
        <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2">
          {[photos.industrialVisit, photos.factoryPumpRoom].map((photo, i) => (
            <figure key={photo.src}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 100vw"
                className="aspect-4/3 h-auto w-full rounded-lg object-cover"
              />
              <figcaption className="mt-2 caption-2 text-fg-muted">
                <span className="caption-3 text-accent">Fig. {2 + i}</span> {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </CaseSection>

      <CaseSection id="model" label="The model" title="A fund that owns the panels and sells the power.">
        <FigureFrame
          id="fig-rgef-flow"
          number={4}
          tag="Proposal"
          title="How the RMG Green Energy Fund works"
          caption="Six percent of PPA receipts flows to a Worker Equity Fund under tripartite governance by Oxfam, BGMEA and worker representatives."
        >
          <FlowFigure
            nodes={[
              { title: "Lenders and investors", detail: "Concessional debt, impact equity, brand green finance" },
              { title: "RMG Green Energy Fund", detail: "A special purpose vehicle that installs and owns rooftop solar", highlight: true },
              { title: "Garment factories", detail: "Pay only for units delivered, below the grid price, with no upfront cost" },
              { title: "Buyers", detail: "Receive verified emissions data for their supply chain reporting" },
            ]}
            connectors={["capital", "power purchase agreement", "data"]}
          />
        </FigureFrame>
        <CapitalStackFigure number={5} />
        <div>
          <p className="caption-4 text-fg-muted">Modelled outputs, not results</p>
          <dl className="mt-4 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {modelled.map((item) => (
              <div key={item.label} className="flex flex-col-reverse justify-end gap-1 border-t border-line py-4">
                <dt className="caption-2 text-fg-muted">{item.label}</dt>
                <dd className="heading-5 text-fg tabular-nums">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </CaseSection>

      <CaseSection id="findings" label="Findings" title="The barrier is finance and reporting, not technology.">
        <Findings
          items={[
            {
              claim: "Upfront capital is the first barrier.",
              evidence: "At the factory, the primary barrier was the upfront cost: a 100 kW system costs roughly Tk 1.5 to 2 crore, 30 to 50% more than a comparable installation in India.",
            },
            {
              claim: "Missing emissions reporting is the second.",
              evidence: "Without verified Scope 2 data in GRI or IFRS S2 formats, solar does little for a factory's standing with overseas buyers.",
            },
            {
              claim: "Buyer pressure is already here.",
              evidence: "Management confirmed sustainability is part of current procurement conversations. Workers had not heard of transition plans and responded positively to the Worker Equity Fund idea.",
            },
          ]}
        />
        <Prose>
          The team presented the model at the Teaching Just Energy Transition workshop at BRAC
          University, organised by BRAC Business School with Oxfam in Bangladesh under the Just Energy
          Transition Programme.
        </Prose>
        <div className="grid gap-x-6 gap-y-8 sm:grid-cols-2">
          {[photos.rgefPresentation, photos.justEnergyWorkshop, photos.justEnergyDiscussion, photos.justEnergyCertificate].map((photo, i) => (
            <figure key={photo.src}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(min-width: 1024px) 340px, (min-width: 640px) 50vw, 100vw"
                className="aspect-4/3 h-auto w-full rounded-lg object-cover"
              />
              <figcaption className="mt-2 caption-2 text-fg-muted">
                <span className="caption-3 text-accent">Fig. {6 + i}</span> {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </CaseSection>

      {showPlaceholders && (
      <CaseSection id="my-part" label="My part">
        <PlaceholderBlock title="What you did on the solar model">
          Which parts were yours: for example the field interviews, the financial model, the capital
          stack, the governance design or the presentation.
        </PlaceholderBlock>
        <PlaceholderBlock title="Your reflection">
          In your own words: what building a finance case for a real sector taught you.
        </PlaceholderBlock>
      </CaseSection>
      )}

      <CaseSection id="credits" label="Credits and sources">
        <Prose>
          RGEF report, BUS334, BRAC University, 2026, prepared in collaboration with Oxfam in
          Bangladesh. All financial figures are modelled estimates under the report&apos;s stated
          assumptions; they are not audited data or investment assurances. Interviewees are not named
          on this site.
        </Prose>
      </CaseSection>

      <CaseNext next={{ title: "Can we trust an Alzheimer's prediction?", href: "/work/mci-to-ad-calibration" }} />
    </>
  );
}
