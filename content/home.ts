/**
 * Homepage copy, version 3 (8 Nov 2026). The homepage introduces Sadman as a person;
 * projects and skills live on the Work page, the full story on the About page.
 * Every fact traces to the resume, LinkedIn, the case study sources or Sadman's answers.
 * Site copy has no hyphens (skill B1): "cofounded", "final year", "17 member".
 */
import { photos } from "./media";

export const hero = {
  /* The degree line moved into the intro (Sadman's own words, 8 Nov 2026), so it is not repeated here. */
  roleLines: ["Cofounder and Product Lead, MotoRent."],
  /** Break where the thought breaks (skill B5). */
  headline: ["I'm a computer science student", "who enjoys building things,", "taking initiative and", "bringing people together."],
  /** Sadman's own words (8 Nov 2026); only "final-year" lost its hyphen, per skill B1. */
  intro: [
    "I'm a final year Computer Science student at BRAC University with a minor in Business. Over the years, I've explored entrepreneurship, technology, research, teaching, and leadership through experiences both inside and outside the classroom.",
    "I enjoy exploring new ideas, taking initiative, working with people, and learning by doing. Beyond my professional interests, I'm also passionate about photography and creative exploration.",
  ],
};

export type DrawnTo = {
  title: string;
  text: string;
  link: { label: string; href: string };
  icon: "code" | "chart" | "people" | "camera";
};

/** What I'm drawn to: one line each, every line backed by something on the Work or About page. */
export const drawnTo: DrawnTo[] = [
  {
    title: "Technology",
    text: "Software, data and machine learning: from web platforms in PHP and the MERN stack to a thesis on predicting Alzheimer's.",
    link: { label: "See my work", href: "/work" },
    icon: "code",
  },
  {
    title: "Business",
    text: "How ventures are planned, funded and run: MotoRent's roadmap, and a solar finance model for garment factories.",
    link: { label: "See the ventures", href: "/work#business" },
    icon: "chart",
  },
  {
    title: "People",
    text: "Leading teams and running events, from BIZ BEE at BRAC University to Prizm's content team and volunteering.",
    link: { label: "Read my story", href: "/about#journey" },
    icon: "people",
  },
  {
    title: "Creativity",
    text: "Photography and visual storytelling, from the places I travel to, shared on Instagram.",
    link: { label: "See my creative side", href: "/about#instagram" },
    icon: "camera",
  },
];

/** Newest first. Text states only what the photo shows or a source confirms. */
export const field = [
  {
    title: "UIHP National Innovation Challenge",
    tag: "Sep 2026",
    text: "Pitched MotoRent as Team Nirbhiq, won BDT 80,000 and met investors at Senate Bhaban, University of Dhaka.",
    href: "/work#motorent",
    linkLabel: "See MotoRent",
    image: photos.uihpCertificate,
  },
  {
    title: "Launch planning with the ICT Division",
    tag: "MotoRent",
    text: "Met the ICT Division and the University Innovation Hub Program team to discuss MotoRent's launch plans and next steps.",
    href: "/work#motorent",
    linkLabel: "See MotoRent",
    image: photos.ictDivisionMeeting,
  },
  {
    title: "Teaching Just Energy Transition",
    tag: "Workshop",
    text: "Presenting the RGEF rollout plan, a pilot with 50 factories by Q4 2026, at a BRAC Business School workshop with Oxfam in Bangladesh.",
    href: "/work/rgef-solar-rmg",
    linkLabel: "See the solar model",
    image: photos.rgefPresentation,
  },
  {
    title: "Field visit for the solar model",
    tag: "Apr 2026",
    /* Short form of Sadman's paragraph so the tile matches the others (8 Nov 2026);
       the full paragraph is on the solar case study, with the visit's photos and film. */
    text: "We visited Colors and Stitches Ltd in Gazipur. One conversation with management brought the case into focus: a financing gap, not a technology gap.",
    href: "/work/rgef-solar-rmg",
    linkLabel: "Read the case study",
    image: photos.industrialVisit,
  },
  {
    title: "UIHP prize money handover",
    tag: "Jul 2025",
    text: "Team Nirbhiq received BDT 40,000 in seed funding for MotoRent from the University Innovation Hub Program.",
    href: "/work#motorent",
    linkLabel: "See MotoRent",
    image: photos.uihpChequeHandover,
  },
  {
    title: "Charulata Bidyapith",
    tag: "2018",
    text: "Volunteered at Charulata, teaching underprivileged children and supporting its medical and disaster relief campaigns.",
    href: "/about#journey",
    linkLabel: "Read my story",
    image: photos.charulataEid,
  },
];
