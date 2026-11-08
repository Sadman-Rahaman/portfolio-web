/**
 * Awards and press. Every entry needs a source the visitor can check,
 * or a line on the CV. Amounts and dates come from the resume (Nov 2026),
 * the Undergrad Startup Challenge certificate and the public pages linked below.
 */

export const press = {
  bard: {
    outlet: "Bard College, Lead the Change",
    href: "https://leadthechange.bard.edu/blog/motorent-wins-launch-a-different-world-competition",
  },
  bracu: {
    outlet: "BRAC University news",
    // Verified 7 Nov 2026. The slug URL from LinkedIn could not be checked, so the node URL is used.
    href: "https://www.bracu.ac.bd/node/29339",
  },
  bracuExpress: {
    // Verified 7 Nov 2026: "Turning idle bikes into opportunity", 13 January 2026.
    outlet: "BRACU Express",
    href: "https://bracuexpress.com/turning-idle-bikes-into-opportunity-motorents-winning-journey/",
  },
} as const;

export const pressList = [press.bracu, press.bracuExpress, press.bard];

/** The single proof signal shown beside the hero call to action. */
export const heroProof = {
  date: "Dec 2025",
  title: "First place, Launch a Different World 2025",
  detail: "Democratizing Innovation Institute, hosted by Bard College. USD 1,500 grant for MotoRent.",
  source: press.bard,
} as const;

export type Award = {
  date: string;
  /** Full line, used on the CV. */
  title: string;
  /** Large text on the Work page card, and the event it belongs to. */
  highlight: string;
  event: string;
  icon: "trophy" | "medal" | "coins" | "certificate";
  /** One featured award gets the wide dark card on the Work page. */
  featured?: boolean;
  detail?: string;
  by: string;
  /** Optional evidence, such as a certificate PDF. */
  href?: string;
  linkLabel?: string;
};

/** Newest first. */
export const awards: Award[] = [
  {
    date: "Sep 2026",
    title: "BDT 80,000, UIHP National Innovation Challenge, Episode 3",
    highlight: "BDT 80,000",
    event: "UIHP National Innovation Challenge, Episode 3",
    icon: "coins",
    detail: "For MotoRent, pitched as Team Nirbhiq",
    by: "ICT Division and Bangladesh Hi Tech Park Authority",
  },
  {
    date: "Dec 2025",
    title: "First place, Launch a Different World 2025",
    highlight: "1st place",
    event: "Launch a Different World 2025",
    icon: "trophy",
    featured: true,
    detail: "International pitch competition. MotoRent won a USD 1,500 grant",
    by: "Democratizing Innovation Institute, hosted by Bard College, USA",
    href: press.bard.href,
    linkLabel: "Read the Bard College story",
  },
  {
    date: "Jul to Oct 2025",
    title: "Fellow, Aspire Leaders Program, Cohort 4",
    highlight: "Fellow",
    event: "Aspire Leaders Program, Cohort 4",
    icon: "certificate",
    detail: "One of 9,362 finalists who completed the fully funded programme, out of 45,228 students in Cohort 4",
    by: "Aspire Institute, founded by Harvard Business School professors",
    href: "/certificates/aspire-leaders-program-2025-certificate.pdf",
    linkLabel: "View certificate",
  },
  {
    date: "Jul 2025",
    title: "Winning team, University Innovation Hub Program",
    highlight: "Winning team",
    event: "University Innovation Hub Program",
    icon: "trophy",
    detail: "BDT 40,000 seed funding for MotoRent, pitched as Team Nirbhiq",
    by: "ICT Division and Bangladesh Hi Tech Park Authority, financed by the World Bank",
  },
  {
    date: "2025",
    title: "National semi finalist, Undergrad Startup Challenge 2025",
    highlight: "Semi finalist",
    event: "Undergrad Startup Challenge 2025, national round",
    icon: "medal",
    detail: "With Team MotoRent",
    by: "Presented by Eastern Bank PLC, organised by BUEDF",
  },
];

export const certificateImage = {
  src: "/images/motorent-usc-certificate.jpg",
  width: 1600,
  height: 1131,
  alt: "Certificate of appreciation from Undergrad Startup Challenge 2025, presented to Sadman Rahaman for reaching the semi final round with Team MotoRent.",
} as const;
