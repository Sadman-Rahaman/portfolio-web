/**
 * CV and About content, from the MNC resume and LinkedIn profile (Nov 2026).
 * Site copy has no hyphens, so "Co-founder" is written "Cofounder" and so on.
 * The phone number stays in the PDF only.
 */

import { photos, type Photo } from "./media";

export type Entry = {
  role: string;
  org: string;
  place?: string;
  period: string;
  points: string[];
  photos?: Photo[];
};

export const summary =
  "Computer science student with entrepreneurial experience in product development, technology, digital media and team leadership. Cofounded MotoRent, led a 17 member team at Prizm, and earned recognition in startup competitions.";

export const education: Entry[] = [
  {
    role: "BSc in Computer Science, minor in Business",
    org: "BRAC University",
    place: "Dhaka",
    period: "Sep 2022 to Jan 2027 (expected)",
    points: ["Undergraduate thesis on predicting MCI to Alzheimer's conversion, ongoing."],
  },
  {
    role: "Higher Secondary Certificate, Science",
    org: "CMP School and College",
    period: "2020",
    points: [],
  },
];

export const experience: Entry[] = [
  {
    role: "Cofounder and Product Lead",
    org: "MotoRent",
    place: "Dhaka",
    period: "2025 to present",
    points: [
      "Lead product strategy for a peer to peer vehicle rental platform, now pre launch.",
      "Won first place in an international pitch competition and secured ICT Division UIHP seed funding as Team Nirbhiq.",
      "Collaborate with design and engineering to build and ship product iterations using grant funding.",
      "Manage investor communication, roadmap prioritisation and execution timelines.",
    ],
  },
  {
    role: "Cofounder and Content Manager",
    org: "Prizm (first launched as The Papyrus)",
    place: "Dhaka",
    period: "2024 to present",
    points: [
      "Cofounded Prizm, a digital news platform for Gen Z readers, and led its 17 member content team.",
      "Oversaw the content pipeline from planning and creation to publishing and online distribution.",
    ],
  },
  {
    role: "Cofounder and Chief Technology Officer",
    org: "eShodor",
    place: "Chattogram",
    period: "2021 to 2022",
    points: [
      "Cofounded eShodor, a community based online shop serving local customers in Chattogram.",
      "Built the WordPress ecommerce website and managed all online operations, maintenance and UX.",
    ],
  },
];

export const leadership: Entry[] = [
  {
    role: "Fellow, Aspire Leaders Program (Cohort 4)",
    org: "Aspire Institute",
    period: "Jul 2025 to Oct 2025",
    points: [
      "Completed a fully funded leadership programme founded by Harvard Business School professors, covering social entrepreneurship and strategic communication, with one on one mentorship.",
      "One of 9,362 finalists who completed the programme, out of 45,228 students in Cohort 4.",
    ],
  },
  {
    role: "Executive, Organizing and Management",
    org: "BRAC University Business Club (BIZ BEE)",
    period: "Sep 2022 to Nov 2024",
    points: [
      "Managed event operations end to end, from planning and scheduling to on site execution.",
      "Coordinated workshops, seminars and networking events with corporate partners.",
    ],
  },
  {
    role: "Volunteer",
    org: "Charulata",
    period: "Jan 2018 to Jan 2019",
    points: ["Taught underprivileged children and supported medical and disaster relief campaigns."],
    photos: [photos.charulataEid, photos.charulataAnniversary],
  },
  {
    role: "Senior member",
    org: "New Generation of Chittagong",
    period: "2018",
    points: ["Helped organise Art Competition 2018 for school children in Chattogram, with crests and prize money for the winners."],
  },
];

export const skills = {
  technical: [
    "Data analytics (Python, SQL)",
    "Machine learning",
    "Full stack development (MERN stack, JavaScript)",
    "Technical documentation and version control (Git, GitHub)",
    "Ecommerce infrastructure (WordPress)",
  ],
  business: [
    "Product strategy and lifecycle management",
    "Agile project management",
    "Team leadership",
    "Digital operations",
    "UX strategy",
    "Product prototyping and iteration",
    "Visual communication",
    "Social entrepreneurship",
  ],
};

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  href: string;
  linkLabel: string;
};

/** Newest first. Coursera links go to Coursera's own verification page for each certificate. */
export const certifications: Certificate[] = [
  {
    title: "Aspire Leaders Program 2025",
    issuer: "Aspire Institute",
    date: "Oct 2025",
    href: "/certificates/aspire-leaders-program-2025-certificate.pdf",
    linkLabel: "View certificate",
  },
  {
    title: "Introduction to Psychology",
    issuer: "Yale University, on Coursera",
    date: "Jul 2025",
    href: "https://coursera.org/verify/00NVB0ASRV3H",
    linkLabel: "Verify on Coursera",
  },
  {
    title: "Start the UX Design Process: Empathize, Define, and Ideate",
    issuer: "Google, on Coursera",
    date: "Feb 2023",
    href: "https://coursera.org/verify/2BV4PZXQ2394",
    linkLabel: "Verify on Coursera",
  },
  {
    title: "Foundations of User Experience (UX) Design",
    issuer: "Google, on Coursera",
    date: "Jan 2023",
    href: "https://coursera.org/verify/6HFGEXBJE93F",
    linkLabel: "Verify on Coursera",
  },
  {
    title: "Programming for Everybody (Getting Started with Python)",
    issuer: "University of Michigan, on Coursera",
    date: "Jan 2023",
    href: "https://coursera.org/verify/QF8MPQEPZ46B",
    linkLabel: "Verify on Coursera",
  },
];

/** About page timeline, oldest first. Short titles so all eight fit side by side on desktop. */
export const milestones = [
  { date: "2018", title: "Started volunteering", detail: "Charulata and New Generation of Chittagong" },
  { date: "2021", title: "Cofounded eShodor", detail: "Community online shop, Chattogram" },
  { date: "2022", title: "Started at BRAC University", detail: "Computer Science; joined BIZ BEE" },
  { date: "2024", title: "Cofounded Prizm", detail: "Led a 17 member content team" },
  { date: "2025", title: "Cofounded MotoRent", detail: "Aspire Leaders fellow; first place at Launch a Different World" },
  { date: "2026", title: "Research and solar finance for RMG", detail: "Undergraduate research; work with Oxfam and an RMG factory, in collaboration with BRAC University", current: true },
];
