import { apps } from "@/lib/apps";
import { essays } from "@/lib/essays";
import { site } from "@/lib/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-10-06");
  const staticRoutes = ["", "/about", "/flat-out", "/flatvoice/privacy"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
  }));

  return [
    ...staticRoutes,
    ...apps.map((app) => ({
      url: `${site.url}${app.href}`,
      lastModified: now,
    })),
    ...essays.map((essay) => ({
      url: `${site.url}/flat-out/${essay.slug}`,
      lastModified: now,
    })),
  ];
}
