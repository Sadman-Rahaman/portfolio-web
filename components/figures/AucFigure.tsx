import { aucByModel, thesisMeta } from "@/content/thesis";
import { FigureFrame } from "./FigureFrame";
import { cn } from "@/lib/cn";

/** The x axis runs from chance (0.5) to perfect (1.0). */
const AXIS_MIN = 0.5;
const AXIS_MAX = 1;
const TICKS = [0.5, 0.6, 0.7, 0.8, 0.9, 1];

const pct = (value: number) => ((value - AXIS_MIN) / (AXIS_MAX - AXIS_MIN)) * 100;
const fmt = (value: number) => value.toFixed(3);

/**
 * Discrimination by model, as a dot and whisker chart. Shown only on the thesis case study.
 * Built in HTML rather than SVG so every label stays on the type scale at any width.
 * The visual is hidden from screen readers; the same data is in a table below it.
 */
export function AucFigure({ number }: { number: number }) {
  return (
    <FigureFrame
      id="fig-auc"
      number={number}
      tag={`Thesis · ${thesisMeta.status.toLowerCase()}`}
      title="Adding MRI did not beat clinical scores alone"
      subtitle="Area under the ROC curve with 95% confidence intervals"
      caption={`Pooled out of fold results, 5 folds × 3 seeds, about 400 patients with mild cognitive impairment from ADNI. Within each ADNI phase the MRI only model fell close to chance, so most of its signal was scanner era. Source: ${thesisMeta.source}.`}
    >
      <div aria-hidden>
        <ul className="flex flex-col gap-4">
          {aucByModel.map((model) => (
            <li key={model.id}>
              <div className="flex items-baseline justify-between gap-4">
                <span className={cn("caption-5", model.highlight ? "text-fg" : "text-fg-muted")}>
                  {model.label}
                </span>
                <span
                  className={cn(
                    "caption-4 tabular-nums",
                    model.highlight ? "text-accent" : "text-fg",
                  )}
                >
                  {fmt(model.auc)}
                </span>
              </div>
              <div className="relative mt-2 h-3">
                {TICKS.map((tick) => (
                  <span key={tick} className="absolute inset-y-0 w-px bg-line" style={{ left: `${pct(tick)}%` }} />
                ))}
                <span
                  className={cn(
                    "absolute top-1/2 h-px -translate-y-1/2",
                    model.highlight ? "bg-accent" : "bg-fg-muted",
                  )}
                  style={{
                    left: `${pct(model.ciLow)}%`,
                    width: `${pct(model.ciHigh) - pct(model.ciLow)}%`,
                  }}
                />
                <span
                  className={cn(
                    "absolute top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-surface",
                    model.highlight ? "bg-accent" : "bg-fg",
                  )}
                  style={{ left: `${pct(model.auc)}%` }}
                />
              </div>
            </li>
          ))}
        </ul>

        <div className="relative mt-3 h-4">
          {TICKS.map((tick, index) => (
            <span
              key={tick}
              className={cn(
                "absolute top-0 caption-5 text-fg-muted tabular-nums",
                index === 0 ? "" : index === TICKS.length - 1 ? "-translate-x-full" : "-translate-x-1/2",
              )}
              style={{ left: `${pct(tick)}%` }}
            >
              {tick.toFixed(1)}
            </span>
          ))}
        </div>
        <p className="mt-2 caption-5 text-fg-muted">0.5 is chance</p>
      </div>

      {/* Tables ignore sr-only sizing, so the wrapper does the hiding. */}
      <div className="sr-only">
        <table>
          <caption>Area under the ROC curve by model, with 95% confidence intervals</caption>
          <thead>
            <tr>
              <th scope="col">Model</th>
              <th scope="col">Inputs</th>
              <th scope="col">AUC</th>
              <th scope="col">95% confidence interval</th>
            </tr>
          </thead>
          <tbody>
            {aucByModel.map((model) => (
              <tr key={model.id}>
                <th scope="row">{model.label}</th>
                <td>{model.inputs}</td>
                <td>{fmt(model.auc)}</td>
                <td>
                  {fmt(model.ciLow)} to {fmt(model.ciHigh)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </FigureFrame>
  );
}
