# Sadman Rahaman, personal portfolio

Next.js (App Router), TypeScript and Tailwind CSS v4. Deploys on Vercel.
Design rules: `DECISIONS.md` and the landing page design skill.

## Run it

```bash
npm install
npm run dev            # http://localhost:3000
npm run check:design   # enforces the design tokens and copy rules
npm run typecheck
npm run build
```

Node 20.9 or newer.

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, choose **Add New Project** and import the repository. The defaults are correct.
3. Nothing else is required: the site uses the production address Vercel provides. When you
   connect your own domain, set `NEXT_PUBLIC_SITE_URL` (for example `https://yourname.com`)
   under **Settings, Environment Variables** so metadata and the sitemap use it.
4. When you buy a domain, add it under **Settings, Domains** and update `NEXT_PUBLIC_SITE_URL`.

## Where things live

| What | File |
| --- | --- |
| Name, email, links, availability, nav | `content/site.ts` |
| Homepage copy | `content/home.ts` |
| About page: who I am, journey chapters, creative side, where I'm heading | `content/about.ts` |
| Work page intro, MotoRent, Prizm and eShodor (skills kept but not shown) | `content/work.ts` |
| Photography and films (About, My creative side) | `content/photography.ts`, `public/images/photography/`, `public/videos/` |
| Photos and alt text | `content/media.ts` |
| Case studies and smaller builds | `content/projects.ts` |
| Thesis results (Table 5.1) | `content/thesis.ts` |
| Awards (CV line, Work card figure, event, icon), press links | `content/recognition.ts` |
| CV entries and timeline milestones | `content/profile.ts` |
| Labels for missing facts | `content/placeholders.ts` |
| Case studies | `app/work/<slug>/page.tsx` |
| Colour tokens, text styles, motion | `app/globals.css` |
| CV download | `public/cv/Sadman_Rahaman_CV.pdf` |
| Certificates (list) | `certifications` in `content/profile.ts`; PDFs in `public/certificates/` |
| Page metadata, schema | `app/layout.tsx`, each `page.tsx` |
| Favicon, social image | `app/icon.svg`, `app/opengraph-image.tsx` |

## Adding your portrait

1. Save a JPG (about 1600px on the long side) as `public/images/portrait.jpg`.
2. In `content/site.ts`, set:
   ```ts
   portrait: { src: "/images/portrait.jpg", alt: "Sadman Rahaman", width: 1200, height: 1500 },
   ```
   using the real pixel size. The hero swaps the NIC banner for the portrait, and the About page uses it too,
   and Next.js serves resized AVIF or WebP versions.

## Changing the photography

"My creative side" on the About page reads `content/photography.ts`.

1. Photos: about 1600px on the long side, in `public/images/photography/`.
   Films: short, silent MP4 (H.264, about 960px tall) plus a poster JPG, in `public/videos/`.
   For example: `ffmpeg -i clip.mov -t 15 -an -vf "scale=-2:960,fps=30" -c:v libx264 -preset veryfast -crf 28 -pix_fmt yuv420p -movflags +faststart clip.mp4`
2. Edit the `gallery` list: kind, path, real pixel size and what it shows.
3. Exactly eight items give the collage (positions 1, 4, 5 and 8 are the tall corner tiles); any other number shows a plain grid.

## Pages

`/`, `/work`, `/work/mci-to-ad-calibration`, `/work/rgef-solar-rmg`,
`/about`, `/cv`, plus a branded 404. Add new pages to `app/sitemap.ts`.

## Placeholders

Anything written as `{{like_this}}` is a fact still missing. In `npm run dev` the site shows
it as a dashed "To add" mark, and larger gaps as `PlaceholderBlock`s. Production builds
(`npm run build`, Vercel) hide every sentence, header row and section that still holds one,
so visitors never see a gap. To show them on a deployment, set
`NEXT_PUBLIC_SHOW_PLACEHOLDERS=true`. See DECISIONS.md, "Placeholders and open items".

## Analytics

Vercel Web Analytics is included (cookieless page views). Turn it on under the project's
**Analytics** tab in Vercel.

## Build note

`npm run build` passed on 7 Nov 2026 (Next.js 16.4.5, 13 static routes). After building, run
`npm run start` to serve it at http://localhost:3000; the build alone does not start a server.
