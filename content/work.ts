/**
 * Work page content (8 Nov 2026): Business, Case studies, Projects, Recognition.
 * MotoRent is a venture, not a case study (Sadman's instruction), so it has no case study page.
 * Venture descriptions and "What I do" lists are Sadman's own words (8 Nov 2026, afternoon),
 * with hyphens rewritten per skill B1 ("peer to peer", "short term", "17 member").
 * Sources: resume, LinkedIn, Bard College and BRACU Express articles, certificates, reports.
 */
import { photos, type Photo } from "./media";
import { certificateImage, press } from "./recognition";

export const workIntro = {
  heading: ["A record of what I've built,", "researched and helped move forward."],
  lead: "These come from different parts of my journey: cofounding ventures, building digital products, machine learning research and business strategy. Together they show how I approach problems, work with people and turn ideas into action.",
};

export const motorent = {
  logo: photos.motorentLogo,
  status: "Pre launch",
  role: "Cofounder and Product Lead",
  about: [
    "MotoRent is a Bangladeshi mobility startup building a peer to peer vehicle rental marketplace and fleet management platform. We connect vehicle owners with people seeking short term access to bikes and cars while helping rental operators manage and grow their businesses. Our mission is to make transportation more accessible, transparent, and efficient.",
  ],
  facts: [
    { label: "Since", value: "2025" },
    { label: "Team", value: "Team Nirbhiq, five students at BRAC University" },
    { label: "Funding", value: "USD 1,500 grant, BDT 120,000 from UIHP" },
  ],
  contributions: [
    "Shape MotoRent's vision, business direction, and long term product strategy.",
    "Drive the product roadmap, translating market needs and business opportunities into practical solutions.",
    "Lead product development and collaborate with design and engineering teams to bring ideas to life.",
    "Drive strategic partnerships, investor communication, and business development.",
    "Take ownership of execution, strategic priorities, and the company's growth initiatives.",
  ],
  milestones: [
    { date: "Jul 2025", title: "UIHP winning team", detail: "BDT 40,000 seed funding" },
    { date: "2025", title: "National semi final", detail: "Undergrad Startup Challenge" },
    { date: "Dec 2025", title: "First place", detail: "Launch a Different World, USD 1,500 grant" },
    { date: "Sep 2026", title: "UIHP National Innovation Challenge", detail: "BDT 80,000" },
    { date: "Now", title: "Pre launch", detail: "Planning with the ICT Division and UIHP", current: true },
  ],
  status_note:
    "MotoRent has not launched yet, so there are no user or revenue numbers to show. The plan is to start in Dhaka, then expand to tourist areas and eventually across the country.",
  evidence: [
    photos.uihpChequeHandover,
    { ...certificateImage, caption: "Certificate of appreciation, Undergrad Startup Challenge 2025 semi final." },
    photos.ictDivisionMeeting,
    photos.motorentLanding,
  ] satisfies Photo[],
  press: [press.bard, press.bracuExpress, press.bracu],
};

export type Venture = {
  id: string;
  name: string;
  period: string;
  role: string;
  whatIDo: string[];
  image?: Photo;
  social?: { network: "facebook" | "instagram"; href: string }[];
};

export const otherVentures: Venture[] = [
  {
    id: "prizm",
    name: "Prizm",
    period: "2024 to now",
    role: "Cofounder and Content Manager",
    whatIDo: [
      "Cofounded Prizm and helped shape its vision as a digital news platform for Gen Z audiences.",
      "Lead a 17 member content team, overseeing collaboration and day to day content operations.",
      "Guide the content pipeline from editorial planning and content creation to publishing and distribution.",
      "Shape content direction and storytelling to engage audiences across digital platforms.",
    ],
    image: photos.prizmArtwork,
    social: [
      { network: "facebook", href: "https://www.facebook.com/theprizm.entertainment" },
      { network: "instagram", href: "https://www.instagram.com/p/DemXtzYACye/" },
    ],
  },
  {
    id: "eshodor",
    name: "eShodor",
    period: "2021 to 2022",
    role: "Cofounder and Chief Technology Officer",
    whatIDo: [
      "Cofounded eShodor, building an online shopping platform to serve local customers in Chattogram.",
      "Built and launched the company's ecommerce website on WordPress.",
      "Led website management, user experience, maintenance, and day to day online operations, making online shopping accessible and convenient for local customers.",
    ],
  },
];

export type SkillGroup = { group: string; usedIn?: string; items: string[] };

/**
 * Only skills confirmed by the CV, LinkedIn or the project files. No levels or percentages.
 * Not shown on the Work page since 8 Nov 2026 (Sadman removed the section); kept for reuse.
 */
export const skills: SkillGroup[] = [
  {
    group: "Programming",
    usedIn: "Coursework, Umeed and the bank marketing model",
    items: ["Python", "Java", "SQL", "JavaScript", "PHP"],
  },
  {
    group: "Web development",
    usedIn: "Baycation, Umeed, eShodor",
    items: ["HTML", "CSS", "React", "Node.js", "Express", "MongoDB", "Bootstrap", "MySQL", "WordPress"],
  },
  {
    group: "AI and machine learning",
    usedIn: "The thesis and the bank marketing model",
    items: [
      "scikit-learn",
      "Keras",
      "Supervised learning",
      "K-Means clustering",
      "3D CNNs and Transformers",
      "Model calibration",
      "Imbalanced data",
      "Data analysis",
    ],
  },
  {
    group: "Business and management",
    usedIn: "MotoRent, Prizm, BIZ BEE, the solar finance model",
    items: [
      "Product strategy",
      "Roadmap prioritisation",
      "Agile project management",
      "Business modelling",
      "Financial modelling",
      "Operations",
      "Event management",
      "Team leadership",
      "Social entrepreneurship",
    ],
  },
  {
    group: "Design and creative",
    usedIn: "Google UX design courses, eShodor and my photography",
    items: ["Canva", "UX design", "Visual communication", "Photography", "Cinematography"],
  },
  {
    group: "Tools",
    usedIn: "Every software project",
    items: ["Git", "GitHub"],
  },
];
