import { thesisMeta } from "@/content/thesis";
import { FigureFrame } from "./FigureFrame";

/** Parts of a whole: converters versus non converters in the analysis cohort. */
export function CohortFigure({ number }: { number: number }) {
  const { patients, converters, horizonMonths } = thesisMeta.cohort;
  const stable = patients - converters;
  const share = (converters / patients) * 100;

  return (
    <FigureFrame
      id="fig-cohort"
      number={number}
      tag="ADNI cohort"
      title={`${converters} of ${patients} patients converted within ${horizonMonths} months`}
      subtitle="Patients with mild cognitive impairment, leakage controlled cohort"
      caption={`A base risk of about 37%. Patients are assessed at a 12 month landmark, and a locked test set is held back from all development. Source: ${thesisMeta.report}.`}
    >
      <div aria-hidden className="flex h-4 w-full overflow-hidden rounded-full bg-line">
        <span className="h-full bg-accent" style={{ width: `${share}%` }} />
      </div>
      <dl className="mt-4 grid grid-cols-2 gap-4">
        <div className="flex flex-col-reverse gap-1">
          <dt className="flex items-center gap-2 caption-2 text-fg-muted">
            <span aria-hidden className="size-2 rounded-full bg-accent" />
            Converted to Alzheimer&apos;s
          </dt>
          <dd className="heading-5 text-fg tabular-nums">{converters}</dd>
        </div>
        <div className="flex flex-col-reverse gap-1">
          <dt className="flex items-center gap-2 caption-2 text-fg-muted">
            <span aria-hidden className="size-2 rounded-full bg-line" />
            Did not convert in {horizonMonths} months
          </dt>
          <dd className="heading-5 text-fg tabular-nums">{stable}</dd>
        </div>
      </dl>
    </FigureFrame>
  );
}
