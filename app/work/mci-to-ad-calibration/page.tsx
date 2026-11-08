import type { Metadata } from "next";
import Image from "next/image";
import { photos } from "@/content/media";
import { pageMetadata } from "@/lib/metadata";
import { CaseHeader, CaseNext, CaseSection, Findings, Points, Prose } from "@/components/case/CaseLayout";
import { FigureFrame } from "@/components/figures/FigureFrame";
import { FlowFigure } from "@/components/figures/FlowFigure";
import { CohortFigure } from "@/components/figures/CohortFigure";
import { AucFigure } from "@/components/figures/AucFigure";
import { PlaceholderBlock } from "@/components/ui/Placeholder";
import { showPlaceholders } from "@/content/placeholders";
import { thesisMeta } from "@/content/thesis";

const description =
  "An ongoing BRAC University thesis on predicting which patients with mild cognitive impairment will develop Alzheimer's, and whether the predicted risks can be trusted.";

export const metadata: Metadata = pageMetadata({
  title: "Alzheimer's prediction thesis",
  description,
  path: "/work/mci-to-ad-calibration",
  shareTitle: "Can we trust an Alzheimer's prediction?",
});

/* Source for every number on this page: Pre Thesis II report, BRAC University, October 2026. */
export default function ThesisPage() {
  return (
    <>
      <CaseHeader
        title="Alzheimer's thesis"
        heading={["Can we trust an", "Alzheimer's prediction?"]}
        lead={
          <>
            {thesisMeta.title}. An undergraduate thesis at {thesisMeta.institution}, still in progress.
          </>
        }
        status="Ongoing"
        meta={[
          { label: "Period", value: "2026, ongoing" },
          { label: "Role", text: "Thesis team member. {{thesis_contribution}}" },
          { label: "Supervisor", value: "Dr. Md. Ashraful Alam, Associate Professor" },
          { label: "Data", value: "Alzheimer's Disease Neuroimaging Initiative (ADNI)" },
          { label: "Methods", value: "3D CNN, Transformer, calibration analysis" },
          { label: "Code", text: "{{thesis_repo_url}}" },
        ]}
      />

      <CaseSection
        id="question"
        label="The question"
        title="A model that ranks patients well can still give risks no one should act on."
      >
        <Prose>
          Mild cognitive impairment can lead to Alzheimer&apos;s disease, but only some patients
          progress. For a prediction to be useful in a clinic, its risk estimates need to be reliable,
          not only good at ranking who is more likely to convert.
        </Prose>
        <Prose>
          Deep learning studies of this problem usually report discrimination (AUC) and rarely report
          calibration. Most also test only inside the ADNI cohort: a meta analysis cited in the report
          found that only 3 of 42 studies validated on an independent cohort.
        </Prose>
      </CaseSection>

      <CaseSection id="approach" label="Approach" title="A multimodal model, judged against strong simple baselines.">
        <FigureFrame
          id="fig-pipeline"
          number={1}
          title="The proposed model"
          subtitle="One pass per patient, across up to several visits"
          caption="Baselines trained on the same cross validation folds: logistic regression, gradient boosting, an MRI only CNN, a CNN with a GRU, and a clinical only sequence model."
        >
          <FlowFigure
            nodes={[
              { title: "Each visit", detail: "An MRI scan plus clinical and neuropsychological scores" },
              { title: "Encoders", detail: "A parameter efficient 3D depthwise separable CNN for MRI; an encoder for the scores" },
              { title: "Transformer over visits", detail: "Missing visits are masked rather than filled in", highlight: true },
              { title: "Risk", detail: "Probability of conversion to Alzheimer's within 36 months" },
            ]}
            connectors={["per visit", "visit tokens", "output"]}
          />
        </FigureFrame>
        <Points
          items={[
            "A 12 month landmark design: the model only sees what would be known 12 months after the first visit.",
            "A leakage controlled cohort and a locked test set that no development step touches.",
            "Calibration reported with bias aware confidence intervals and compared with what a perfectly calibrated model would show at the same sample size.",
          ]}
        />
        <CohortFigure number={2} />
      </CaseSection>

      <CaseSection id="findings" label="Early findings" title="Four results that shape the rest of the thesis.">
        <Findings
          items={[
            {
              claim: "Clinical scores carry almost all of the signal.",
              evidence:
                "The clinical only sequence model reached a pooled AUC of 0.912. Adding MRI gave 0.912 (CNN with GRU) and 0.904 (the proposed model): no measurable improvement in discrimination.",
            },
            {
              claim: "Most of the MRI only signal was scanner era, not disease.",
              evidence:
                "The MRI only CNN scored 0.652, yet a predictor that knew only each patient's ADNI phase scored 0.681, and inside each phase the MRI only model fell close to chance. The report recommends that imaging studies on multi phase ADNI test for this.",
            },
            {
              claim: "At this sample size, calibration cannot rank the models.",
              evidence:
                "Every model trained without class weighting was statistically consistent with perfect calibration (p from 0.21 to 0.86). Class weighted logistic regression was the exception: it predicted a mean risk of 0.423 against a base risk of 0.371 (p = 0.002).",
            },
            {
              claim: "Sparse visit histories may cost calibration.",
              evidence:
                "A preliminary analysis suggests sequence models lose calibration as the number of observed visits falls. The final study tests this directly.",
            },
          ]}
        />
        <AucFigure number={3} />
        <FigureFrame
          id="fig-heatmap"
          number={4}
          tag="Thesis · ongoing"
          title="Where the model looks"
          caption="An axial MRI slice (left) and a heatmap from our model over the same slice (right); red marks the highest values. Shown for illustration only: whether the model's attention follows measured brain atrophy is tested in the final study."
        >
          <Image
            src={photos.thesisHeatmap.src}
            alt={photos.thesisHeatmap.alt}
            width={photos.thesisHeatmap.width}
            height={photos.thesisHeatmap.height}
            sizes="(min-width: 1024px) 640px, 100vw"
            className="mx-auto h-auto w-full max-w-xl"
          />
        </FigureFrame>
      </CaseSection>

      <CaseSection id="next" label="What comes next" title="The final study, planned in the report.">
        <Points
          items={[
            "Does calibration hold up when the cohort and scanners change? External validation.",
            "How do masking, imputation and deletion of missing visits compare, and can a calibration layer that accounts for how complete a patient's history is fix the gap?",
            "Does the model's attention follow measured brain atrophy, beyond simply how recent a visit is? A permutation test decides.",
            "If data is available, a first feasibility study with Bangladeshi clinical data, a population almost absent from Alzheimer's prediction research.",
          ]}
        />
      </CaseSection>

      {showPlaceholders && (
      <CaseSection id="my-part" label="My part">
        <PlaceholderBlock title="What you did on the thesis">
          Which parts were yours: for example data pipeline, cohort construction, model code,
          baselines, calibration analysis or writing. Keep it to two or three specific lines.
        </PlaceholderBlock>
        <PlaceholderBlock title="Your reflection">
          In your own words: what this work taught you about trusting a model.
        </PlaceholderBlock>
      </CaseSection>
      )}

      <CaseSection id="credits" label="Credits and sources">
        <Prose>
          Authors: Anika Salsabil, Sadik Mohammad, Md Asif Ahemed, Sadman Rahaman and Sadia Naima
          Nawar. Supervised by Dr. Md. Ashraful Alam, Department of Computer Science and
          Engineering, BRAC University.
        </Prose>
        <Prose>
          Data from the Alzheimer&apos;s Disease Neuroimaging Initiative (ADNI). Results here are
          aggregate, and the one MRI slice shown is de-identified ADNI data. Source: {thesisMeta.report},
          BRAC University.
        </Prose>
      </CaseSection>

      <CaseNext next={{ title: "Rooftop solar finance for garment factories", href: "/work/rgef-solar-rmg" }} />
    </>
  );
}
