/**
 * Single source of truth for personal details, links and navigation.
 * Anything wrapped in {{double braces}} is a placeholder waiting for a real fact.
 */

export type NavItem = {
  label: string;
  href: string;
  /** false until the page exists. Unbuilt routes render as visibly disabled, never as dead links. */
  ready: boolean;
};

export type Portrait = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

function siteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  const vercel =
    process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export const site = {
  name: "Sadman Rahaman",
  /**
   * Absolute site address for canonical links, sitemap, robots and schema.
   * Order: NEXT_PUBLIC_SITE_URL (set this once you have a domain), then the production
   * address Vercel provides automatically, then localhost for local development.
   */
  url: siteUrl(),
  location: "Dhaka, Bangladesh",
    /** Site copy has no hyphens (skill B1), so the resume's "Co-founder" is written "Cofounder". */
  role: "Cofounder and Product Lead at MotoRent",
  education: "BSc in Computer Science, BRAC University, expected January 2027",

  title: "Sadman Rahaman | Computer science, business and building things",
  description:
    "Sadman Rahaman is a final year Computer Science student at BRAC University with a minor in Business, cofounder of MotoRent and Prizm, working across software, machine learning research and startups.",

  /* Contact: assumed from the resume on 7 Nov 2026. Confirm before launch. */
  email: "sadman.connect@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/sadmanrahaman",
    github: "https://github.com/Sadman-Rahaman",
  },

  cv: {
    href: "/cv/Sadman_Rahaman_CV.pdf",
    fileName: "Sadman_Rahaman_CV.pdf",
    meta: "PDF, 43 KB",
  },

  /** Portrait for the hero and About page (supplied 8 Nov 2026, cropped waist up). Set to null to fall back to a photo. */
  portrait: {
    src: "/images/portrait.jpg",
    width: 960,
    height: 1200,
    alt: "Sadman Rahaman in a dark three piece suit and tie, standing in a university corridor.",
  } as Portrait | null,

  nav: [
    { label: "Home", href: "/", ready: true },
    { label: "Work", href: "/work", ready: true },
    { label: "About", href: "/about", ready: true },
    { label: "CV", href: "/cv", ready: true },
  ] satisfies NavItem[],

} as const;

export const mailto = (subject?: string) =>
  `mailto:${site.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
