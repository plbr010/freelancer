import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { getAllProjectSlugs } from "@/data/projects";
import { getAvailableDemos } from "@/data/demos";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages = ["", "/projetos", "/sobre", "/contato"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const projectPages = getAllProjectSlugs().map((slug) => ({
    url: `${baseUrl}/projetos/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const demoPages = getAvailableDemos().map((demo) => ({
    url: `${baseUrl}/demos/${demo.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages, ...demoPages];
}
