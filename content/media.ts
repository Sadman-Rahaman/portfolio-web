/**
 * Photos on the site. All supplied by Sadman on 7 and 8 Nov 2026; people in team photos
 * appear with his confirmation that team photos may be used. Captions only state what
 * the photo itself shows or what a source confirms.
 */

export type Photo = { src: string; width: number; height: number; alt: string; caption?: string };

export const photos = {
  portrait: {
    src: "/images/portrait.jpg",
    width: 960,
    height: 1200,
    alt: "Sadman Rahaman in a dark three piece suit and tie, standing in a university corridor.",
  },
  motorentLogo: {
    src: "/images/motorent-logo.png",
    width: 1200,
    height: 188,
    alt: "MotoRent",
  },
  ictDivisionMeeting: {
    src: "/images/ict-division-meeting.jpg",
    width: 1600,
    height: 1200,
    alt: "The MotoRent team standing with representatives of the ICT Division and the University Innovation Hub Program in an office.",
    caption: "Meeting the ICT Division and the UIHP team about MotoRent's launch plans.",
  },
  uihpChequeHandover: {
    src: "/images/uihp-cheque-handover.jpg",
    width: 1600,
    height: 1270,
    alt: "Five members of Team Nirbhiq holding a large University Innovation Hub Program cheque for forty thousand taka, dated 12 July 2025.",
    caption: "Team Nirbhiq receiving the BDT 40,000 UIHP prize, 12 July 2025.",
  },
  justEnergyDiscussion: {
    src: "/images/just-energy-discussion.jpg",
    width: 1472,
    height: 828,
    alt: "Students and a facilitator in a small group discussion, seated in a circle of classroom chairs at the Teaching Just Energy Transition workshop.",
    caption: "Group work at the Teaching Just Energy Transition workshop, BRAC University.",
  },
  charulataEid: {
    src: "/images/charulata-eid-distribution.jpg",
    width: 720,
    height: 540,
    alt: "Children in school uniforms and volunteers outside Charulata Bidyapith, holding a banner for an Eid clothing distribution.",
    caption: "Eid clothing distribution at Charulata Bidyapith.",
  },
  charulataAnniversary: {
    src: "/images/charulata-anniversary.jpg",
    width: 960,
    height: 720,
    alt: "A cake decorated with the Charulata leaf logo and Bangla text marking the sixth founding anniversary of Charulata Bidyapith, 14 April 2018.",
    caption: "Charulata Bidyapith's sixth founding anniversary, 14 April 2018.",
  },
  justEnergyCertificate: {
    src: "/images/just-energy-certificate.jpg",
    width: 1140,
    height: 828,
    alt: "Sadman Rahaman holding a certificate of participation and a Teaching Just Energy Transition tote bag, between two workshop facilitators in a classroom.",
    caption: "Receiving my certificate at the Teaching Just Energy Transition workshop.",
  },
  thesisHeatmap: {
    src: "/images/thesis-mri-heatmap.jpg",
    width: 793,
    height: 582,
    alt: "Two views of the same axial brain MRI slice: on the left in greyscale, on the right with a blue to red heatmap from the thesis model overlaid.",
    caption: "An MRI slice (left) and a heatmap from our model over the same slice (right).",
  },
  bizbeeFace2Face: {
    src: "/images/bizbee-face-2-face.jpg",
    width: 1600,
    height: 806,
    alt: "A large group of BIZ BEE members posing together under colourful bunting and a FACE 2 FACE sign.",
    caption: "FACE 2 FACE, a BIZ BEE event at BRAC University.",
  },
  /* Art Competition 2018, New Generation of Chittagong. The year and organiser are printed on
     the banner ("Art Competition'18, organised by New Generation of Chittagong") and the prize crests. */
  ngcHall: {
    src: "/images/ngc-art-competition-hall.jpg",
    width: 960,
    height: 520,
    alt: "A hall seen from above, with children and parents on plastic chairs facing a stage under a banner that reads Art Competition '18, organised by New Generation of Chittagong.",
    caption: "Art Competition 2018, organised by New Generation of Chittagong.",
  },
  ngcDrawing: {
    src: "/images/ngc-art-competition-drawing.jpg",
    width: 960,
    height: 640,
    alt: "Two schoolgirls in uniform drawing village scenes with oil pastels at their desks.",
    caption: "Children drawing during the competition.",
  },
  ngcVolunteers: {
    src: "/images/ngc-art-competition-volunteers.jpg",
    width: 960,
    height: 640,
    alt: "Young volunteers wearing lanyards gathered around a table, one of them holding a camera.",
    caption: "Volunteers at work during the event.",
  },
  ngcPosters: {
    src: "/images/ngc-posters.jpg",
    width: 960,
    height: 578,
    alt: "Young volunteers standing behind children who hold up coloured hand made posters outside a glass fronted building, with the N.G.C logo in the corner.",
    caption: "Members of New Generation of Chittagong with children holding hand made posters.",
  },
  /** About page, "A little more about me" (supplied by Sadman, 8 Nov 2026). */
  aboutHillside: {
    src: "/images/about-hillside.jpg",
    width: 1200,
    height: 1468,
    alt: "Sadman Rahaman smiling with both thumbs up on a grassy hillside in thick fog.",
  },
  prizmLogo: {
    src: "/images/prizm-logo.jpg",
    width: 480,
    height: 479,
    alt: "The PRIZM wordmark in white on a near black background.",
    caption: "The Prizm wordmark.",
  },
  prizmArtwork: {
    src: "/images/prizm-artwork.jpg",
    width: 1600,
    height: 900,
    alt: "Prizm artwork: a silhouetted figure with arms spread stands on a graffiti covered car on a grey beach, as a white beam of light enters from the left and leaves as a rainbow, with the PRIZM wordmark below.",
    caption: "Prizm artwork.",
  },
  motorentLanding: {
    src: "/images/motorent-landing-page.jpg",
    width: 1400,
    height: 1642,
    alt: "A laptop showing the MotoRent website with the headline Rent any vehicle, Move freely, next to a printed MotoRent flyer, in the hall of the UIHP National Innovation Challenge.",
    caption: "MotoRent's website and flyer at the UIHP National Innovation Challenge.",
  },
  justEnergyWorkshop: {
    src: "/images/just-energy-workshop.jpg",
    width: 1472,
    height: 828,
    alt: "Participants of the Teaching Just Energy Transition workshop at BRAC University giving a thumbs up in front of the workshop title slide.",
    caption: "Teaching Just Energy Transition workshop, BRAC Business School with Oxfam in Bangladesh.",
  },
  industrialVisit: {
    src: "/images/industrial-visit.jpg",
    width: 1600,
    height: 1200,
    alt: "A group of students and factory staff standing outside the Colors and Stitches Ltd garment factory in Gazipur during a field visit.",
    caption: "Field visit to Colors and Stitches Ltd, Gazipur, April 2026.",
  },
  uihpBanner: {
    src: "/images/uihp-nic-banner.jpg",
    width: 1200,
    height: 1600,
    alt: "Banner for the UIHP National Innovation Challenge, Episode 3, presented by the ICT Division and powered by the DEIED Project.",
    caption: "UIHP National Innovation Challenge, Episode 3.",
  },
  uihpCertificate: {
    src: "/images/uihp-nic-certificate.jpg",
    width: 1200,
    height: 1600,
    alt: "Certificate of participation in the UIHP National Innovation Challenge given to Team Nirbhiq, held up in the event hall.",
    caption: "Certificate of participation for Team Nirbhiq, the team behind MotoRent.",
  },
  factoryPumpRoom: {
    src: "/images/factory-fire-pump-room.jpg",
    width: 1200,
    height: 1600,
    alt: "Looking down into a factory fire pump room with red fire safety pipes and valves, as members of our team and a staff member walk through it.",
    caption: "The fire pump room at Colors and Stitches Ltd.",
  },
  rgefPresentation: {
    src: "/images/rgef-presentation.jpg",
    width: 1600,
    height: 1200,
    alt: "A presenter in a classroom beside a slide titled Next Actions for Positive Change, showing the RGEF pilot plan of 50 factories by the fourth quarter of 2026.",
    caption: "Presenting the RGEF rollout plan: a pilot with 50 factories by Q4 2026.",
  },
} satisfies Record<string, Photo>;
