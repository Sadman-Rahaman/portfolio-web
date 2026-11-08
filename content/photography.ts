/**
 * Photos and short films for "My creative side" on the About page (supplied by Sadman, 8 Nov 2026).
 *
 * With exactly eight items the page lays them out as a collage around the text card:
 * four tall tiles at the corners (positions 1, 4, 5 and 8) and four smaller tiles above and
 * below the card. Any other number falls back to a plain grid.
 *
 * To change them:
 * 1. Photos: about 1600px on the long side, into /public/images/photography/.
 *    Videos: short, silent MP4 (H.264, about 960px tall) plus a poster frame, into /public/videos/.
 * 2. Update the list below with the real pixel size and what the photo or film shows.
 *
 * Alt text says only what is visible: no places, dates or people are named.
 */
export type GalleryItem = {
  kind: "photo" | "video";
  src: string;
  /** Video only: the still frame shown before it plays. */
  poster?: string;
  width: number;
  height: number;
  /** What the photo or film shows, for screen readers. */
  alt: string;
  /** Which part to keep when a tile crops the picture. */
  focus?: "center" | "bottom" | "right";
};

export const gallery: GalleryItem[] = [
  {
    kind: "video",
    src: "/videos/forest-trek.mp4",
    poster: "/videos/forest-trek-poster.jpg",
    width: 540,
    height: 960,
    alt: "Short film: hikers in rain ponchos walk up a misty forest trail between tall trees.",
  },
  {
    kind: "photo",
    src: "/images/photography/sunset-boat.jpg",
    width: 1600,
    height: 1200,
    alt: "A boatman silhouetted against an orange sky, rowing a wooden boat, with cargo ships along the horizon.",
    focus: "right",
  },
  {
    kind: "photo",
    src: "/images/photography/fog-hill.jpg",
    width: 1324,
    height: 1600,
    alt: "A person in a yellow rain poncho stands with arms spread on a grassy hillside in thick fog.",
    focus: "bottom",
  },
  {
    kind: "photo",
    src: "/images/photography/puppy-boats.jpg",
    width: 1092,
    height: 1600,
    alt: "A brown and white puppy licking its nose on a sandy shore, with painted fishing boats behind it.",
  },
  {
    kind: "photo",
    src: "/images/photography/beach-sunset.jpg",
    width: 1200,
    height: 1600,
    alt: "A man in a white sweater stands on an empty beach under a soft golden sky, looking out to sea.",
  },
  {
    kind: "photo",
    src: "/images/photography/red-crab.jpg",
    width: 1200,
    height: 1600,
    alt: "A red crab on dark sand with its eye stalks raised, and a low orange sun behind it.",
  },
  {
    kind: "photo",
    src: "/images/photography/moon-boat.jpg",
    width: 1387,
    height: 1600,
    alt: "The curved prow of a wooden fishing boat in shallow sea water under a clear blue sky.",
    focus: "bottom",
  },
  {
    kind: "video",
    src: "/videos/hill-trail.mp4",
    poster: "/videos/hill-trail-poster.jpg",
    width: 540,
    height: 960,
    alt: "Short film: a foggy hillside, then a muddy trail through tall grass with hikers in rain ponchos ahead.",
  },
];
