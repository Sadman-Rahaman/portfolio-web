import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const routes: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/work", priority: 0.9 },
  { path: "/work/mci-to-ad-calibration", priority: 0.8 },
  { path: "/work/rgef-solar-rmg", priority: 0.8 },
  { path: "/about", priority: 0.7 },
  { path: "/cv", priority: 0.7 },
];

/** Add each new page here. */
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route.path}`,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
