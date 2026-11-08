/**
 * About page copy (8 Nov 2026). Personal and story driven; the evidence lives on the Work page.
 * Sources: resume, LinkedIn profile, case study reports, certificates, event photos, and Sadman's
 * answers on 7 and 8 Nov 2026. Aspire figures: letter of acknowledgement, 14 October 2025.
 * Left out on purpose: the four years of teaching (no details yet) and BhangariLens.AI.
 */
import { photos, type Photo } from "./media";

/** Page heading and the opening section, in Sadman's own words (8 Nov 2026, evening). */
export const aboutHeader = {
  heading: ["A journey shaped by curiosity."],
  lead: "I'm Sadman Rahaman, a final year Computer Science student at BRAC University, with a minor in Business.",
};

export const moreAboutMe = {
  title: "A little more about me",
  paragraphs: [
    "My journey has taken me across different fields, teams, and ideas, often beyond what I initially set out to explore.",
    "I've had the opportunity to work on ventures at different stages, from building an ecommerce business to developing a mobility platform and contributing to a digital media initiative. Each experience has given me a different perspective on how ideas evolve, how organisations work, and what it takes to turn plans into something tangible.",
    "These experiences have shaped how I approach challenges. I value ownership, thoughtful execution, and the ability to see things from different perspectives. I'm particularly interested in the space where technology meets business and everyday human needs.",
    "I'm also drawn to stories, places, and the forces that shape societies. My interest in history and politics comes from wanting to understand how the world works, how decisions shape people's lives, and how things change over time.",
    "There is still a lot I want to learn, experience, and contribute to. I'm happy being a work in progress.",
  ],
};

export type Chapter = {
  id: string;
  period: string;
  title: string;
  role?: string;
  text: string;
  link?: { label: string; href: string };
  /** Files such as certificates, opened in a new tab. */
  documents?: { label: string; href: string }[];
  /** Shown full width above `photos`. */
  leadPhoto?: Photo;
  photos?: Photo[];
  /** Shown full width below `photos`. */
  closingPhoto?: Photo;
};

/**
 * Order set by Sadman (8 Nov 2026): MotoRent, Prizm, research, solar finance, BIZ BEE, then the
 * rest newest first. The timeline above stays in date order. Nothing planned is described as done.
 */
export const journey: Chapter[] = [
  {
    id: "motorent",
    period: "2025 to now",
    title: "MotoRent",
    role: "Cofounder and Product Lead",
    text: "With four teammates, as Team Nirbhiq, I cofounded MotoRent, a peer to peer vehicle rental platform. I work on product strategy, the roadmap and execution, and on communication with the people who fund us. We are preparing to launch.",
    link: { label: "See MotoRent on the Work page", href: "/work#motorent" },
  },
  {
    id: "prizm",
    period: "2024 to now",
    title: "Prizm",
    role: "Cofounder and Content Manager",
    text: "I cofounded The Papyrus, later renamed Prizm, a digital news platform for Gen Z readers, and led its 17 member content team from planning and writing to publishing and distribution.",
    photos: [photos.prizmLogo, photos.prizmArtwork],
  },
  {
    id: "thesis",
    period: "2026",
    title: "Undergraduate research",
    role: "Thesis team of five, supervised by Dr. Md. Ashraful Alam",
    text: "Our thesis asks which patients with mild cognitive impairment will go on to develop Alzheimer's, using longitudinal MRI and clinical data, and whether a model's risk estimates can be trusted. It is still in progress.",
    link: { label: "Read the case study", href: "/work/mci-to-ad-calibration" },
  },
  {
    id: "solar",
    period: "2026",
    title: "Solar finance for garment factories",
    role: "BUS334 team project, with Oxfam in Bangladesh",
    text: "For BUS334 our team built a business case that would let garment factories install rooftop solar with no upfront cost, starting from a field study at a factory in Gazipur. We presented it at the Teaching Just Energy Transition workshop.",
    link: { label: "Read the case study", href: "/work/rgef-solar-rmg" },
    photos: [photos.justEnergyCertificate],
  },
  {
    id: "bizbee",
    period: "2022 to 2024",
    title: "BIZ BEE",
    role: "Executive, Organizing and Management, BRAC University Business Club",
    text: "At university I joined BIZ BEE and spent two years on its events: planning, scheduling and running them on the day, and coordinating workshops, seminars and networking events with corporate partners.",
    photos: [photos.bizbeeFace2Face],
  },
  {
    id: "aspire",
    period: "2025",
    title: "Aspire Leaders Program",
    role: "Fellow, Cohort 4, Aspire Institute",
    text: "A fully funded leadership programme from the Aspire Institute, whose cofounders are Harvard Business School professors. It covered leadership, social entrepreneurship and strategic communication, with one on one mentorship, and ended with the Aspire Horizons course on leadership, trust, AI and community impact, taught by Harvard faculty. I was one of 9,362 finalists who completed it, out of 45,228 students in Cohort 4.",
    documents: [
      { label: "Certificate of completion", href: "/certificates/aspire-leaders-program-2025-certificate.pdf" },
      { label: "Letter of acknowledgement", href: "/certificates/aspire-leaders-program-2025-letter.pdf" },
    ],
  },
  {
    id: "eshodor",
    period: "2021 to 2022",
    title: "eShodor",
    role: "Cofounder and Chief Technology Officer",
    text: "My first venture. I cofounded eShodor, a community online shop for local customers in Chattogram, built its WordPress store, and looked after its online operations, maintenance and shopping experience.",
  },
  {
    id: "new-generation-of-chittagong",
    period: "2018",
    title: "New Generation of Chittagong",
    role: "Senior member",
    text: "A youth led nonprofit and charity organisation dedicated to community welfare, disaster relief, and civic improvement in Bangladesh. Driven by volunteer efforts, the organisation focuses on providing emergency relief during crises, supporting underprivileged communities, and promoting social awareness initiatives.",
    leadPhoto: photos.ngcHall,
    photos: [photos.ngcDrawing, photos.ngcVolunteers],
    closingPhoto: photos.ngcPosters,
  },
  {
    id: "charulata",
    period: "2018 to 2019",
    title: "Charulata",
    role: "Volunteer",
    text: "My first real work with people was volunteering. At Charulata I taught underprivileged children and helped with its medical and disaster relief campaigns.",
    photos: [photos.charulataEid, photos.charulataAnniversary],
  },
];

export const creative = {
  heading: "My creative side",
  instagram: {
    handle: "@the_sadventure_escape",
    href: "https://www.instagram.com/the_sadventure_escape/",
    note: "Photography and short films from my travels.",
  },
  paragraphs: [
    "Away from code and spreadsheets, I travel and tell stories with a camera, through photography and short films.",
    "I share my journeys on Instagram, where exploring a place and finding a way to show it to someone else come together.",
  ],
};

export const heading = {
  title: "Where I'm heading",
  paragraphs: [
    "I'm close to graduating, and I want my next step to use both halves of what I've learned: a technical foundation, and an understanding of how businesses are planned and run.",
    "The work that interests me sits in software development and AI, product and operations, and business management, in technology driven startups and established organisations alike.",
    "In the long run, I want to understand both the technical and the business side of an organisation well enough to lead people in turning ideas into outcomes that matter.",
  ],
};
