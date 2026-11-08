# Design decisions record

The visual identity below was approved on 7 Nov 2026. Nothing in the
"Approved" section changes without Sadman's explicit OK. Decisions made
during the build are logged separately, each marked with its status.

Strategy source: "Sadman Rahaman portfolio: strategy, copy and design system" (Claude Doc).
Rules source: the landing page design skill (`landing-page-design/SKILL.md`), Part B.

## Version 3 (8 Nov 2026): content and structure refinement, current

Sadman's brief "Portfolio Website Refinement, Updated Instructions" (8 Nov 2026). The visual
identity of version 2 is unchanged: same palette, type, nav, layout grid and components.
Only content and information architecture changed. Where earlier sections conflict, this wins.

### Positioning (from the brief)
- The homepage introduces Sadman as a person: "I'm a computer science student who enjoys
  building things, taking initiative and bringing people together."
- **Reversed rule:** version 2 banned job seeking language. The brief asks for "Where I'm
  heading" and "the next chapter of my career", so direction is stated, framed as interests
  and goals. Still no "open to roles", dates of availability or recruiter FAQ.
- BSc in Computer Science **with a minor in Business** (stated by Sadman in the brief).

### Page structure
| Page | Sections |
| --- | --- |
| Home | Hero (intro, About me and See my work) · Highlights band · What I'm drawn to (Technology, Business, People, Creativity) · In the field · Contact |
| About | Who I am (portrait, interests) · My journey (horizontal timeline, then chapters) · My creative side (Instagram) · Where I'm heading |
| Work | Business (MotoRent, Prizm, eShodor) · Case studies and projects · Skills · Recognition |

- Work and Skills sections removed from the homepage; Skills and Recognition moved to Work.
- **MotoRent is a venture, not a case study** (Sadman). `/work/motorent` deleted; its facts,
  milestones, evidence photos and press links now sit in one MotoRent card on Work.
  The site was never deployed, so no outside links break.
- Case studies: the thesis and the solar finance model, each with a photo on its card.
- The thesis case study gains Fig. 4, the model heatmap ("MRI heatmap is ours", Sadman),
  captioned as an illustration only.

### Timeline
- Horizontal, left to right, oldest first. All eight milestones fit one row at 1024px and up;
  below that the row scrolls sideways with snap points and a "Swipe or scroll sideways" hint.
  The scroll region is keyboard focusable. The current milestone (Graduating) uses the accent.
- Only dated facts from the resume, LinkedIn, certificates and photos. The 2018 milestone
  covers Charulata and New Generation of Chittagong.

### Content left out (Sadman's answers)
| Item | Decision |
| --- | --- |
| Four years of teaching | Left out ("not related to Charulata, so leave it"). Charulata teaching stays: it is on the resume |
| BhangariLens.AI | Left out for now |
| Figma, Lightroom, video editing | Not listed; skills are only those shown by coursework, projects or ventures |
| Instagram feed | Not embedded (needs a Meta API token). A handle card links out; `content/photography.ts` turns it into a gallery once photos are added |

### Photos added
| Photo | Use | Source |
| --- | --- | --- |
| Just Energy certificate | About (solar chapter), home "In the field" | "Certificate photo is me" |
| Thesis MRI heatmap | Thesis Fig. 4 and its Work card | "MRI heatmap is ours" |
| FACE 2 FACE | About, BIZ BEE chapter | "Face 2 Face of BIZ BEE… to show my activity" |
| Art Competition 2018 volunteer team on stage | About, New Generation of Chittagong chapter | "Volunteering at New Generation of BD in Chittagong… art competition… prize money" |

### Additions, 8 Nov 2026 (morning)
| Item | Decision | Source |
| --- | --- | --- |
| Art Competition 2018 date | 2018. Month not shown anywhere, so none given | Banner "Art Competition'18" and prize crests "Art Competition 2018" |
| Organiser name | **New Generation of Chittagong**, replacing "New Generation of BD" | Printed on the banner and crests; flagged to Sadman to confirm |
| Volunteering | Split into two chapters: Charulata (both Charulata photos restored) and New Generation of Chittagong (hall photo full width, then drawing, winners, volunteers, team) | Five photos would crowd one shared chapter |
| Close-ups of individual prize winners | Not used | Three photos of single identifiable children; the winners' line up shows the same moment |
| Outdoor photo with children holding posters | Not used yet | No date or event visible; waiting for Sadman |
| Coursera certificates (4) | Listed on Work (Skills and certificates) and CV, each linked to Coursera's verification page; PDFs not hosted | Certificates supplied by Sadman |
| Aspire Leaders Program | Certificate and letter hosted in `public/certificates/`; "one of 9,362 finalists who completed it, out of 45,228 students in Cohort 4" added to About, Recognition and CV | Letter of acknowledgement, 14 Oct 2025 |
| Work section title | "Skills" becomes "Skills and certificates" | Courses sit under the skill groups |

### Homepage changes, 8 Nov 2026 (afternoon)
| Item | Decision | Source |
| --- | --- | --- |
| Hero intro | Sadman's own two paragraphs, verbatim except "final-year" becomes "final year" (B1) | Sadman |
| Hero role line | "Final year Computer Science student, BRAC University. Minor in Business." removed; the intro now says it. "Cofounder and Product Lead, MotoRent." stays | Avoids saying the same thing twice in a row |
| Hero button | "About me" becomes "More about me" | Sadman asked for a clear link to the About page |
| Highlights band | 3 ventures (what each one is) · 1st place at Launch a Different World 2025 · BDT 120,000 UIHP seed funding over two rounds. Values sit level at every width | Sadman asked for more meaningful content; all from the resume |
| Field visit tile | "Industrial visit" becomes "Field visit for the solar model", Apr 2026, Sadman's paragraph about Colors and Stitches Ltd, linked to the case study. New facts from Sadman: factory about 1 to 2% solar powered; solar would cost about a million dollars | Sadman confirmed the visit was for the solar case |
| Teaching Just Energy Transition tile | Photo is now the rollout plan presentation (case study Fig. 3); text says what it shows | Sadman |
| Contact | Email card takes a full row so the address sits on one line; LinkedIn and GitHub share the row below | Sadman |

### Work page changes, 8 Nov 2026 (evening)
| Item | Decision | Source |
| --- | --- | --- |
| Skills and certificates | Section removed from Work. Skills data kept in `content/work.ts` for reuse; certificates still on the CV page, Aspire also on About and Recognition | Sadman |
| Section order | Business · Case studies · Projects · Recognition (case studies and projects are now separate sections) | Sadman |
| MotoRent card | Role line under the logo; Sadman's description and five "What I do" points replace the earlier text, including the Bard College business model line; "Role" removed from the facts list | Sadman's own words; hyphens rewritten (B1) |
| MotoRent plan | "The plan is to start in Dhaka, then expand to tourist areas and eventually across the country", without the BRACU Express attribution | Sadman: his own plan |
| Prizm card | Artwork across the top, role, period, Sadman's four "What I do" points, Facebook and Instagram icon links | Sadman; the Instagram link is a post, not the profile |
| eShodor card | Role, period, three short points. The third point merges Sadman's two sentences into one, and "WordPress based e-commerce" becomes "ecommerce website on WordPress" (B1) | Sadman asked for it short |
| Recognition | Accomplishment cards: Launch a Different World 2025 on a wide dark green card with a link to the Bard College story; four cards with a Phosphor icon (trophy, medal, coins, certificate), a large figure, the event and the awarding body | Sadman asked for it to look like accomplishments |

### About page changes, 8 Nov 2026 (evening)
| Item | Decision | Source |
| --- | --- | --- |
| Page heading | "A journey shaped by curiosity." | Sadman |
| Opening section | "Who I am" becomes "A little more about me": Sadman's five paragraphs, the first as the lead. The interest chips are removed; his text now covers his interests, including history and politics | Sadman's own words; "e-commerce" becomes "ecommerce" (B1) |
| Timeline, 2026 | "Research and solar finance for RMG": undergraduate research; work with Oxfam and an RMG factory, in collaboration with BRAC University | Sadman |
| New Generation of Chittagong | Role "Senior member"; Sadman's description of the organisation ("youth led nonprofit", hyphens removed). Photos: hall (full width), children drawing, volunteers at work, and the outdoor poster photo (full width). Winners and team on stage photos removed | Sadman; period still shown as 2018 until he gives the full span |
| Prizm chapter | Two photos: the PRIZM wordmark and the Prizm artwork | Sadman |
| Chapter order | MotoRent, Prizm, Undergraduate research, Solar finance, BIZ BEE, then Aspire, eShodor, New Generation of Chittagong, Charulata (newest first). The timeline above stays in date order | Sadman named the first five |
| CV | New Generation of Chittagong role is now "Senior member" | Same source |

### My creative side, 8 Nov 2026 (evening)
| Item | Decision | Source |
| --- | --- | --- |
| Gallery | Six photos and two short films supplied by Sadman, shown side by side as a collage | Sadman |
| Layout | Large screens: 4 by 4 collage, tall tiles at the corners, the text card in the middle reaching over the surrounding tiles. Phones and tablets: four tiles, the card overlapping the rows around it, four tiles | Sadman preferred the text on the photos |
| Card | Heading, Sadman's two paragraphs, and the Instagram block (@the_sadventure_escape, "Photography and short films from my travels.", Open my Instagram) | Existing copy |
| Films | Trimmed and compressed to silent 540x960 MP4 loops (16 s, 1.2 MB and 11.8 s, 2.7 MB) with poster frames. Load nothing until needed, play only on screen, never autoplay under reduced motion, pause button on each (WCAG 2.2.2) | Original .mov files were 54 MB and 24 MB |
| Alt text | Describes only what is visible; no places, dates or people named | Locations were not given |

### Changes, 8 Nov 2026 (night)
| Item | Decision | Source |
| --- | --- | --- |
| Homepage highlights band | Removed (3 ventures, 1st place, BDT 120,000). "What I'm drawn to" now sits on the dark green band instead | Sadman |
| In the field tiles | Field visit tile shortened to match the others; each row's tiles share a height and their links line up at the bottom. Sadman's full paragraph moved to the solar case study | Sadman asked for equal box heights |
| Privacy and terms | Page, footer link and sitemap entry removed | Sadman. Note: skill B10 lists legal links; Sadman's instruction wins |
| Work section titles | Business, Case studies, Projects and Recognition titles stay in view while their section scrolls (sticky, large screens) | Sadman |
| About timeline | 2020 (HSC) and 2027 (Graduating) removed; 2026 is now the current milestone | Sadman |
| About photo | "A little more about me" uses the hillside photo; the suit portrait stays in the homepage hero. On large screens the photo runs the full height of the text beside it (4:5 on phones) | Sadman |
| Creative link | Homepage "See my creative side" now lands on the Instagram card (`/about#instagram`) | Sadman |
| Solar case study | New Field visit section with Sadman's paragraph, the factory film (Fig. 1; letterboxing cropped, 27 s, 3.4 MB, silent), the team outside the factory (Fig. 2) and the fire pump room (Fig. 3). Workshop photos now four: rollout plan, workshop group, group work, certificate (Figs. 6 to 9). Model figures renumbered 4 and 5 | All supplied by Sadman earlier |
| Focus ring | On the dark green band the focus outline uses the light band text colour so it stays visible | Accessibility (B9) |

### Homepage on phones, 8 Nov 2026 (night)
Desktop (1024px and up) is unchanged; checked by comparing full page screenshots before and after.
| Item | Decision | Source |
| --- | --- | --- |
| Hero, below 1024px | Photo first (square on phones, 4:5 and centred at 384px on tablets), with a card over its lower edge holding the name and role; headline, intro and buttons follow. The two buttons share a row at equal width on phones | Sadman: on phones only text showed until scrolling |
| What I'm drawn to, below 640px | Icon in a circle beside each title; tighter spacing between items | Same |
| In the field, below 640px | A swipeable row of photo cards (288px wide, the next card peeking in) with a "Swipe sideways to see more." hint, instead of six stacked tiles | Same; homepage on a phone is now 3,770px tall instead of 6,356px |




## Version 2 (7 Nov 2026, 23:35): visual identity still current

Sadman rejected the version 1 homepage design and content and supplied a reference portfolio
(Imranul Ahsan Moonim) for ideation. Version 2 follows that reference. Where version 1
rules below conflict with this section, this section wins.

### Positioning (chosen by Sadman)
- **Building for impact**: technology and ventures that widen access to mobility, clean
  energy and health in Bangladesh.
- For everyone, not only recruiters. No job seeking language anywhere (relaxed in version 3).
- MotoRent is **peer to peer vehicle rental** ("Rent any vehicle", per its landing page).
- The UIHP awards were won by **Team Nirbhiq**; the startup is MotoRent. Garibohor is no
  longer mentioned.

### Visual direction: reference editorial
- Warm off white paper (#F4F4EF), deep green accent (#1E4D3A), one dark green band (#12332A).
- Light is the default; dark (approved v1 palette with a light green accent #8FC4A8)
  follows the system or the footer switch.
- Two typefaces, as in the reference and as Sadman asked: **Newsreader** (serif, regular,
  no italics) for headings and display numbers, **Geist** for everything else.
  Geist Mono removed.
- Layout: serif section title in the left 4 columns, content in the right 8, a full
  width hairline between sections, page width 1040px.
- Cards are used where the reference uses them: work, contact. Buttons: filled green and
  quiet outline. Links: deep green, underlined.
- Plain sticky top nav: name in serif, Home, Work, About, CV, and a Download CV button.
  The current page is underlined. Phones keep the full height menu.
- The hero heading gradient is gone; the reference uses solid text.

### Homepage order (superseded by version 3)
Hero · About · Highlights band · Work · Skills · In the field · Recognition · Contact.

### Skill rules this version departs from (Sadman's explicit request wins, per the skill)
| Rule | Departure | Why |
| --- | --- | --- |
| B1 one typeface | Serif headings plus Geist | Reference look requested |
| B4 dark backgrounds list | Light default uses paper tones | Reference look requested; dark mode still uses the approved list |
| B5 hero gradient text | Solid text | Reference look requested |
| B11 tagline reveal | Removed | Sadman found the old homepage messy; the reference has no such section |

### Contrast (checked 7 Nov 2026)
Every pair passes WCAG AA in both themes. Lowest: muted text on the raised paper tone, 5.31:1.

## Version 1, approved 7 Nov 2026 (superseded where version 2 differs)

### Positioning
- One working method: test whether an idea holds up, then build and run the thing that does.
- ~~Primary audience: MTO programmes and MNC executive roles.~~ Changed 7 Nov 2026 by Sadman: the site showcases skills, achievements and work **for everyone**, not only recruiters.
- **No job seeking language anywhere**: no availability lines, no "looking for" roles, no hiring prompts, no recruiter FAQ.
- One primary action: email. CV, LinkedIn and GitHub are quiet utility links, never rival buttons.
- Featured work: MotoRent, the Alzheimer's thesis (ongoing), the BUS334 rooftop solar finance model, selected web projects. BhangariLens.AI is out.

### Visual direction: "Lab notebook"
- Warm near black paper, one typeface, mono annotations in the margin, real figures with numbered captions, almost no boxes.
- Lists, not cards. A card only where the object is one, such as a figure.
- Asymmetry from a 12 column grid: labels and metadata on the left, content on the right; one column on mobile.
- One accent (signal amber), used rarely: focus ring, current nav item, the one number that matters in a figure.
- Not allowed: gradient blobs or glows, glass cards, bento grids, skill bars, typing effects, particle or 3D backgrounds, logo walls, waving hello, stock illustrations, AI portraits.

### Typography
- Geist (400, 500, 600) for everything; Geist Mono only for dates, figures, tags, section indices, code.
- No italics. Nothing above 600.
- Named text styles only (heading-1 to caption-5), defined once in `app/globals.css`.
- Hero heading: heading-3 below 640px, heading-2 from 640px, heading-1 from 1024px.
- Hero heading gradient is the only gradient: #FFFFFF to #9B9B9B dark, #000000 to #666666 light.

### Colour tokens
| Token | Dark (default) | Light |
| --- | --- | --- |
| bg | #131209 | #F7F6F2 |
| surface | #1F1F1F | #FFFFFF |
| surface raised | #272727 | #EFEDE7 |
| line | #313131 | #E2E0D9 |
| text | #EDEBE4 | #111110 |
| text muted | #9B9B9B | #666666 |
| accent | #E3A33B | #8F5A08 |

Dark is the default; light follows the system setting; a footer switch overrides either way.
Contrast checked 7 Nov 2026: every pair passes WCAG AA, lowest 5.31:1 (light muted on bg).

### Spacing, radius, icons, motion
- Spacing only from the skill table (0, 2, 4, 8, 12, 16, 24, 32, 40, 48, 64, 80, 96px).
- Section padding 96px desktop, 64px mobile. Gutter 16px mobile, 32px desktop. Page width 1200px.
- Buttons: 8px by 12px padding, fully rounded. Nav: fully rounded. Figures: rounded xl outer, nested radius rule inside.
- Icons: Phosphor, regular weight, 20px (16px inline with small text).
- Motion: cubic-bezier(0.22, 1, 0.36, 1). Scroll reveals rise 32px over 700ms, once. Transform and opacity only. Reduced motion: opacity only.

## Build decisions

| Date | Decision | Why | Status |
| --- | --- | --- | --- |
| 7 Nov 2026 | Added **Body 7** (text-lg, 18/28, regular) for lead paragraphs such as the hero subheadline | Skill allows a new numbered style built from a scale step | Needs your OK |
| 7 Nov 2026 | Site copy writes **"Cofounder"**, not "Co-founder" | Skill B1 bans hyphens in copy | Needs your OK |
| 7 Nov 2026 | Hero headline breaks into three lines: "I test ideas with data, / then build the ones / that hold up." | Two lines broke as "that / hold up." on desktop | Needs your OK |
| 7 Nov 2026 | ~~Hero visual is Fig. 1~~ Fig. 1 (AUC by model) appears **only on the thesis case study** | Sadman's direction | Decided by Sadman |
| 7 Nov 2026 | Hero visual is a **Now panel** (Building, Researching, Studying, Looking for) until a portrait is added | Factual, notebook style, replaces Fig. 1 | Needs your OK |
| 7 Nov 2026 | Homepage must carry more substance than a hero alone | "The main page is too simple" | Decided by Sadman |
| 7 Nov 2026 | Selected work: three featured projects as ruled rows, each with a framed **Key figures** block; three smaller builds as a compact list | Lists, not cards; the figures block is the one boxed data object | Needs your OK |
| 7 Nov 2026 | Solar model figures carry a "Modelled, not results" tag | Projections never read as outcomes | Follows approved doc |
| 7 Nov 2026 | Smaller builds: CSE422 bank marketing prediction, Baycation, Umeed | From the files added on 7 Nov 2026 | Needs your OK |
| 7 Nov 2026 | What I bring heading changed to "Four habits that show up across my work." | Approved heading said three, but there are four items | Needs your OK |
| 7 Nov 2026 | What I bring links jump to the matching project on the page; project rows link to their case studies | Keeps the reader on the page first | Follows approved doc |
| 7 Nov 2026 | Tagline set in four lines: "Scoring well is not / the same as being right. / I build things you can check, / and then I run them." | The three line version broke as "being right." on desktop | Needs your OK |
| 7 Nov 2026 | IMG_9157.JPG is the Undergrad Startup Challenge 2025 certificate, kept for the MotoRent case study, not the hero | It is not a portrait | Noted |
| 7 Nov 2026 | Hero proof sits under the CTA after a rule: date in mono, award, detail, link to Bard College | Proof beside the claim (skill A4) | Follows approved doc |
| 7 Nov 2026 | ~~Unbuilt nav links disabled~~ All nav and footer links live once the full site was built | Every page now exists | Done |
| 7 Nov 2026 | Theme switch offers System, Dark and Light | Approved "manual toggle in the footer" | Follows approved doc |
| 7 Nov 2026 | **No Framer Motion.** Load entrance is CSS; scroll reveals use one IntersectionObserver | Smaller JavaScript; skill allows either | Changed from doc's stack list (technical only) |
| 7 Nov 2026 | Favicon is an abstract notebook mark (amber dot, three ruled lines), no letters | Letters would render in an unknown system font | Needs your OK |
| 7 Nov 2026 | Sadman asked for the entire site in one pass | "Now build the entire portfolio web" | Decided by Sadman |
| 7 Nov 2026 | How I work: three numbered steps, each linking to the case study that shows it | A real sequence, so numbering is meaningful | Follows approved doc |
| 7 Nov 2026 | Recognition: newest first, with the semi final certificate as the one image and three press links | Proof the visitor can check | Needs your OK |
| 7 Nov 2026 | About in brief heading: "Building things since before university." plus a facts list | Approved copy had no heading | Needs your OK |
| 7 Nov 2026 | Recruiter FAQ: 8 questions as native expandable rows; added "Is MotoRent live?" | Native elements are keyboard and screen reader friendly | Needs your OK |
| 7 Nov 2026 | Final contact block is the one framed section on the homepage, with a copy email button | Sets off the single action | Needs your OK |
| 7 Nov 2026 | Case studies are plain TypeScript pages built from shared components, not MDX | No extra dependencies; content stays easy to find | Changed from doc's stack list (technical only) |
| 7 Nov 2026 | Case study figures: MotoRent model flow and certificate; thesis pipeline, cohort bar and AUC chart (now Fig. 3); solar fund flow and capital stack | Real material only | Follows approved doc |
| 7 Nov 2026 | Missing facts show as dashed "To add" marks or "Placeholder" blocks | Never guess; skill B8 | Follows approved doc |
| 7 Nov 2026 | Inner pages use plain headings; the gradient stays on the homepage hero only | Skill B5 limits the gradient to the hero | Follows skill |
| 7 Nov 2026 | Footer link renamed "Privacy and terms" (one page covers both) | Skill B10 asks for both links | Needs your OK |
| 7 Nov 2026 | Phone number kept off the website; it stays in the CV PDF | Privacy | Needs your OK |
| 7 Nov 2026 | CGPA kept off the website | Approved doc recommendation | Follows approved doc |
| 7 Nov 2026 | Vercel Web Analytics added for cookieless page view counts | Doc's conversion tracking plan; no consent banner needed | Follows approved doc |
| 7 Nov 2026 | "scikit-learn" keeps its hyphen | It is the library's proper name | Exception to B1 |
| 7 Nov 2026 | Audit fix 1: placeholders show in development only; production hides any sentence, header row or section that still holds one. Override with `NEXT_PUBLIC_SHOW_PLACEHOLDERS=true` | Recruiters never see unfinished gaps | Done, tested |
| 7 Nov 2026 | Audit fix 2: site URL falls back to Vercel's production address before localhost | Correct canonical, sitemap, robots and schema without setup | Done, tested |
| 7 Nov 2026 | Audit fix 3: `lib/metadata.ts` gives every page a full Open Graph and Twitter set | Next.js replaces, not merges, these objects | Done; rendered tags not tested |
| 7 Nov 2026 | Audit fix 4: all links set in Geist; Geist Mono kept for dates, figures, tags, indices, margin labels and code | Conformance with the approved typography rule | Done, tested |
| 7 Nov 2026 | Audit fix 5: MotoRent cites BRACU Express (13 Jan 2026) for "oversaw technical execution and user testing" and the Dhaka first launch plan; BRAC University link switched to the verified page | Independent support for your role | Done |
| 7 Nov 2026 | Audit fix 6: project titles stay clickable but leave the tab order | One keyboard stop per project | Done, tested |
| 7 Nov 2026 | Removed every availability and job seeking line (hero eyebrow, Now panel row, About, CV summary, timeline, metadata) | Sadman: the portfolio is for everyone, not a job application | Decided by Sadman |
| 7 Nov 2026 | Removed the recruiter FAQ section and its FAQ schema; contact section renumbered 06 | Same reason | Decided by Sadman |
| 7 Nov 2026 | Hero eyebrow now reads "Dhaka, Bangladesh · Product, machine learning research and startups" | Names your three areas without repeating the paragraph below | Needs your OK |
| 7 Nov 2026 | Contact heading now reads "Have an idea worth testing? Let's talk." | Speaks to any visitor and echoes the tagline | Needs your OK |
| 7 Nov 2026 | Version 2 homepage, design tokens, nav and footer rebuilt from the reference | Sadman: "I don't like the design and the content of the home page" | Decided by Sadman |
| 7 Nov 2026 | Photos added: MotoRent landing page and flyer, Just Energy workshop, industrial visit, NIC banner, Team Nirbhiq certificate, RGEF presentation. Resized to 165 to 390 KB, metadata stripped | Real evidence instead of decoration | Done |
| 7 Nov 2026 | Hero image is the NIC banner until a portrait is supplied | Avoids repeating the MotoRent photo used in the Work card | Temporary |
| 7 Nov 2026 | Highlights band: 3 ventures cofounded, 1st place at Launch a Different World, BDT 120,000 UIHP funding | All sourced; the reference has a similar band | Needs your OK |
| 7 Nov 2026 | New "In the field" section with the workshop, industrial visit and NIC | Uses the photos and video stills supplied | Needs your OK |
| 7 Nov 2026 | Industrial visit text only says what the photos and video show; no factory name | The visit is not named in any source | Resolved 8 Nov: Colors and Stitches Ltd, Gazipur |
| 8 Nov 2026 | Portrait added (suit photo, cropped waist up, 960x1200, 105 KB) in the hero and on About | Supplied by Sadman | Done |
| 8 Nov 2026 | "In the field" is now a two column photo grid, newest first: NIC, ICT Division launch planning, Just Energy workshop, industrial visit, UIHP prize handover, Charulata | New photos supplied by Sadman | Done |
| 8 Nov 2026 | Both Charulata photos on the About page volunteering entry; the anniversary cake reads "6th founding anniversary of Charulata Bidyapith, 14.04.18" | Supplied by Sadman; caption only states what the photo shows | Done |
| 8 Nov 2026 | MotoRent logo on the homepage MotoRent card and the case study's product section, on a fixed light plate token (`plate`) so the navy wordmark reads in dark mode | Supplied by Sadman | Done |
| 8 Nov 2026 | MotoRent case study evidence grid: prize handover, semi final certificate, NIC certificate, ICT Division meeting (Figs. 2 to 5) | Real evidence for each milestone | Done |
| 8 Nov 2026 | Solar case study shows the rollout presentation beside the workshop group photo | Homepage now uses the workshop discussion photo | Done |
| 8 Nov 2026 | The LinkedIn post's "Bangladesh's first" claim stays off the site | Still no independent source | Rule kept |
| 7 Nov 2026 | `npm run check:design` fails the build check on off scale spacing, raw text sizes, arbitrary values, banned fonts, italics, default easing, short transitions, background gradients, Material icons and banned filler words | Keeps the rules enforced as the site grows | Tooling |

## Placeholders and open items

| Item | Where it shows | Status |
| --- | --- | --- |
| Email and LinkedIn URL | Everywhere | Assumed from resume; confirm |
| Portrait | Hero and About | Added 8 Nov 2026 |
| Final CV PDF | `/public/cv/Sadman_Rahaman_CV.pdf` | Using the uploaded MNC resume; it still says "Bangladesh's first" and "vehicle rental", which the site dropped |
| Site URL | Metadata, sitemap, schema | Set `NEXT_PUBLIC_SITE_URL` in Vercel |
| Thesis contribution and repo URL | Thesis case study | Waiting |
| BUS334 team and your part | Solar case study | Waiting |
| GitHub projects to feature | Smaller builds | Baycation and Umeed added; more welcome |
| CSE422 code link | Smaller builds | No repository given yet |
| MotoRent app screenshots | MotoRent card on Work | Logo, website photo and event photos added; app screens still welcome |
| Reflections ("What I learned") | Both case studies | Waiting, in your words |
| Photography gallery | About, My creative side | Send six or nine photos; the Instagram card shows until then |
| Instagram name | About | Handle is @the_sadventure_escape; LinkedIn calls the page "The Sadverse Escape". Site uses the handle |
| New Generation of Chittagong name | About, CV | Banner says "New Generation of Chittagong"; Sadman called it "New Generation of BD". Confirm |
| Outdoor poster photo | Not used | Needs a date and what the event was |

## Build log

| Step | Scope | Status |
| --- | --- | --- |
| 1 | Tokens, text styles, nav, mobile menu, footer, theme switch, metadata, favicon, OG image, robots, sitemap, hero | Built 7 Nov 2026 |
| 2 | Now panel, Selected work, What I bring, tagline reveal, scroll reveals | Built 7 Nov 2026 |
| 3 | How I work, Recognition, About in brief, recruiter FAQ with schema, final contact | Built 7 Nov 2026 |
| 4 | Work index; MotoRent, thesis and solar finance case studies | Built 7 Nov 2026 |
| 5 | About, CV, Privacy and terms, 404, sitemap, analytics | Built 7 Nov 2026 |
| 6 | Checks: every page at 390, 820 and 1440px; links; design rules | Done 7 Nov 2026 in preview |
| 7 | Audit: 41 tests, 6 fixes (see "Portfolio audit, 7 Nov 2026") | Done 7 Nov 2026; 4 items need Sadman, 4 not testable here |
| 8 | Version 2: reference design, new homepage content, photos, vehicle rental, Team Nirbhiq | Built 7 Nov 2026; 27 page and width checks pass |
| 9 | Portrait, MotoRent logo, Charulata, ICT Division meeting, workshop and UIHP handover photos | Built 8 Nov 2026; 27 page and width checks pass |
| 10 | Version 3: homepage as a personal intro, About rebuilt (journey timeline, creative side, direction), Work rebuilt (MotoRent venture, case studies, skills, recognition), MotoRent case page removed, four new photos | Built 8 Nov 2026; 24 page and width checks pass (8 pages × 390, 820, 1440px) |
| 11 | Art Competition 2018 photos and date, volunteering split into two chapters, Coursera and Aspire certificates on Work, CV, About and Recognition | Built 8 Nov 2026; 24 page and width checks pass |
| 12 | Homepage: Sadman's intro, More about me, new highlights band, field visit and workshop tiles, wider email card | Built 8 Nov 2026; 24 page and width checks pass |
| 13 | Work: Skills removed, Case studies and Projects split, MotoRent, Prizm and eShodor in Sadman's words, Prizm artwork and social links, Recognition as accomplishment cards | Built 8 Nov 2026; 24 page and width checks pass |
| 14 | About: new heading and opening section, chapter order, New Generation of Chittagong as senior member with four photos, Prizm photos, 2026 timeline label | Built 8 Nov 2026; 24 page and width checks pass |
| 15 | About: My creative side as a photo and film collage with the text card on top | Built 8 Nov 2026; 24 page and width checks pass; film play, pause, off screen and reduced motion behaviour tested |
| 16 | Highlights band removed, What I'm drawn to on green, equal field tiles, privacy page removed, sticky Work titles, timeline trimmed, About photo, Instagram anchor, solar field visit film and photos | Built 8 Nov 2026; 21 page and width checks pass (7 pages × 390, 820, 1440px) |
| 17 | Homepage phone layout: photo first with name card, compact drawn to rows, swipeable field cards | Built 8 Nov 2026; 21 page and width checks pass; desktop screenshots unchanged |
