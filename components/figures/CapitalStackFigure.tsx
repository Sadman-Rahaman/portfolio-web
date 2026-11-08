import { FigureFrame } from "./FigureFrame";
import { cn } from "@/lib/cn";

/**
 * RGEF capital stack, from the report's Capital Stack table (BUS334, 2026).
 * Parts of a whole, so one stacked bar; shades of the text colour, no extra hues.
 */
const tranches = [
  { source: "Concessional debt", detail: "IDCOL, Bangladesh Bank TDF, GCF · 5% a year over 15 years", amount: "USD 125M", share: 50, swatch: "bg-fg" },
  { source: "Impact equity", detail: "Target net IRR about 22.3%", amount: "USD 75M", share: 30, swatch: "bg-fg/60" },
  { source: "Brand green finance", detail: "0% grant equivalent", amount: "USD 37.5M", share: 15, swatch: "bg-fg/30" },
  { source: "Government fiscal support", detail: "Duty waiver that lowers project cost", amount: "USD 12.5M", share: 5, swatch: "bg-fg/15" },
];

export function CapitalStackFigure({ number }: { number: number }) {
  return (
    <FigureFrame
      id="fig-capital"
      number={number}
      tag="Modelled, not results"
      title="A USD 250M blended capital stack"
      subtitle="Share of Phase 1 capital by source"
      caption="Every commitment is conditional; no tranche has reached financial close. Non equity blended rate about 2.5%, full project WACC about 9.2%. Source: RGEF report, BUS334, BRAC University, 2026."
    >
      <div aria-hidden className="flex h-4 w-full gap-0.5 overflow-hidden rounded-full">
        {tranches.map((t) => (
          <span key={t.source} className={cn("h-full", t.swatch)} style={{ width: `${t.share}%` }} />
        ))}
      </div>
      <dl className="mt-6 flex flex-col">
        {tranches.map((t) => (
          <div key={t.source} className="grid grid-cols-12 gap-4 border-t border-line py-3 first:border-t-0 first:pt-0">
            <dt className="col-span-8 flex gap-3 sm:col-span-9">
              <span aria-hidden className={cn("mt-1 size-2 shrink-0 rounded-full", t.swatch)} />
              <span>
                <span className="block body-5 text-fg">{t.source}</span>
                <span className="block caption-5 text-fg-muted">{t.detail}</span>
              </span>
            </dt>
            <dd className="col-span-4 text-right sm:col-span-3">
              <span className="block body-5 text-fg tabular-nums">{t.amount}</span>
              <span className="block caption-5 text-fg-muted tabular-nums">{t.share}%</span>
            </dd>
          </div>
        ))}
      </dl>
    </FigureFrame>
  );
}
