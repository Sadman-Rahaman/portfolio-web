/**
 * Case studies and smaller projects on the Work page.
 * Every figure has a source noted beside it. "Modelled" numbers are projections, never results.
 */

import { photos, type Photo } from "./media";

export type KeyFigure = {
  value: string;
  label: string;
  /** Marks projections so they are never read as outcomes. */
  modelled?: boolean;
};

export type FeaturedProject = {
  id: string;
  slug: string;
  title: string;
  period: string;
  tags: string[];
  summary: string;
  role: string;
  status?: string;
  figures: KeyFigure[];
  source?: { label: string; href: string };
  image: Photo;
};

export type SmallBuild = {
  id: string;
  title: string;
  context: string;
  summary: string;
  stack: string[];
  href?: string;
};

/** Case studies (MotoRent is a venture and lives under Business on the Work page). */
export const caseStudies: FeaturedProject[] = [
  {
    id: "work-thesis",
    slug: "mci-to-ad-calibration",
    title: "Can we trust an Alzheimer's prediction?",
    period: "2026, ongoing",
    tags: ["Research", "Machine learning"],
    summary:
      "A longitudinal model that combines MRI with clinical scores to predict which patients with mild cognitive impairment will develop Alzheimer's. Early results: clinical scores carried the signal, and most of the MRI signal turned out to be scanner era.",
    role: "Thesis team of five, supervised by Dr. Md. Ashraful Alam",
    image: photos.thesisHeatmap,
    status: "Ongoing",
    // Source: Pre Thesis II report, BRAC University, October 2026.
    figures: [
      { value: "499", label: "Patients with mild cognitive impairment in the cohort" },
      { value: "185", label: "Converted to Alzheimer's within 36 months" },
      { value: "6", label: "Model families compared on identical folds" },
    ],
  },
  {
    id: "work-rgef",
    slug: "rgef-solar-rmg",
    title: "Rooftop solar finance for garment factories",
    period: "2026",
    tags: ["Strategy", "Finance"],
    summary:
      "A Power Purchase Agreement model that lets garment factories adopt rooftop solar with no upfront cost. Built for BUS334 at BRAC University with Oxfam in Bangladesh, from a field study at Colors and Stitches Ltd, Gazipur.",
    role: "Team project, BUS334",
    image: photos.rgefPresentation,
    // Source: RGEF report. All financial figures are modelled estimates.
    figures: [
      { value: "400 MW", label: "Phase 1 rooftop portfolio", modelled: true },
      { value: "22.3%", label: "Approximate net equity IRR, 15 year model", modelled: true },
      { value: "464,440 t", label: "CO₂ avoided per year at full Phase 1", modelled: true },
    ],
  },
];

export const smallBuilds: SmallBuild[] = [
  {
    id: "build-bank-marketing",
    title: "Bank marketing prediction",
    context: "CSE422, BRAC University, team of two",
    summary:
      "Predicts before a call whether a client will open a term deposit. Five models compared on 41,176 records, with call duration excluded because it is only known after the call.",
    stack: ["Python", "scikit-learn", "Keras"],
  },
  {
    id: "build-baycation",
    title: "Baycation",
    context: "Web platform",
    summary:
      "A social travel platform for finding travel companions, planning group trips, reviewing guides and renting gear. Requirements and class diagram documented in the repository.",
    stack: ["JavaScript", "Frontend and backend"],
    href: "https://github.com/Sadman-Rahaman/Baycation",
  },
  {
    id: "build-umeed",
    title: "Umeed",
    context: "Web platform",
    summary:
      "A donation management system for admins and donors: campaign requests, volunteer sign up, a blog and an admin dashboard, in a responsive interface.",
    stack: ["PHP", "MySQL", "Bootstrap 5"],
    href: "https://github.com/Sadman-Rahaman/Umeed-Light-up-the-lamps-of-hope",
  },
];
