/**
 * Results from "Calibration Beyond Discrimination in Longitudinal Multimodal
 * Deep Learning for MCI-to-AD Conversion Prediction", Pre Thesis II report,
 * BRAC University, October 2026. Table 5.1: pooled out of fold results on the
 * development set (5 folds x 3 seeds). The thesis is ongoing.
 *
 * Copy numbers from the report only. Do not round or recompute.
 */

export type ModelResult = {
  id: string;
  label: string;
  inputs: string;
  n: number;
  auc: number;
  ciLow: number;
  ciHigh: number;
  /** The single value the figure draws attention to (skill: one accent, used rarely). */
  highlight?: boolean;
};

export const aucByModel: ModelResult[] = [
  {
    id: "clinical-reference",
    label: "Clinical scores only",
    inputs: "Clinical sequence",
    n: 399,
    auc: 0.912,
    ciLow: 0.882,
    ciHigh: 0.938,
  },
  {
    id: "b4",
    label: "CNN + GRU",
    inputs: "MRI + clinical sequence",
    n: 397,
    auc: 0.912,
    ciLow: 0.883,
    ciHigh: 0.938,
  },
  {
    id: "b5",
    label: "Proposed: CNN + masked Transformer",
    inputs: "MRI + clinical sequence",
    n: 397,
    auc: 0.904,
    ciLow: 0.873,
    ciHigh: 0.933,
  },
  {
    id: "b2-m12",
    label: "Gradient boosting",
    inputs: "Clinical summaries to month 12",
    n: 399,
    auc: 0.895,
    ciLow: 0.862,
    ciHigh: 0.924,
  },
  {
    id: "b1-m12",
    label: "Logistic regression",
    inputs: "Clinical summaries to month 12",
    n: 399,
    auc: 0.894,
    ciLow: 0.858,
    ciHigh: 0.924,
  },
  {
    id: "b3",
    label: "CNN, MRI only",
    inputs: "Baseline MRI",
    n: 397,
    auc: 0.652,
    ciLow: 0.594,
    ciHigh: 0.71,
    highlight: true,
  },
];

export const thesisMeta = {
  title:
    "Calibration Beyond Discrimination in Longitudinal Multimodal Deep Learning for MCI to AD Conversion Prediction",
  status: "Ongoing",
  institution: "BRAC University",
  report: "Pre Thesis II report, October 2026",
  cohort: { patients: 499, converters: 185, horizonMonths: 36 },
  source: "Table 5.1, Pre Thesis II report, BRAC University, October 2026",
};
