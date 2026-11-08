import type { Metadata } from "next";
import { site } from "@/content/site";

/**
 * Complete metadata for an inner page. Next.js replaces (does not merge) a parent's
 * openGraph and twitter objects, so every page sets the full set: site name, type,
 * locale, URL, image, and a page specific title for link previews.
 * The image is the site's generated social card at /opengraph-image.
 */
export function pageMetadata({
  title,
  description,
  path,
  shareTitle,
}: {
  title: string;
  description: string;
  path: string;
  /** Title for link previews. Defaults to "<title> | Sadman Rahaman". */
  shareTitle?: string;
}): Metadata {
  const preview = shareTitle ?? `${title} | ${site.name}`;
  const image = {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: `${site.name}: product, computer science and ML research`,
  };
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: "en_US",
      url: path,
      title: preview,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: preview,
      description,
      images: [image.url],
    },
  };
}
