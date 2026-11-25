import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

const routes: MetadataRoute.Sitemap = [
  {
    url: SITE_URL,
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    url: `${SITE_URL}/about`,
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${SITE_URL}/hub`,
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${SITE_URL}/beliefs`,
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${SITE_URL}/values`,
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${SITE_URL}/ministries`,
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    url: `${SITE_URL}/gallery`,
    changeFrequency: "monthly",
    priority: 0.6,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    ...route,
    lastModified,
  }));
}
