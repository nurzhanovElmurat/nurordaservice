import type { MetadataRoute } from "next";
import { catalogCategories } from "@/data/catalog";

const BASE_URL = "https://nurordaservice.kz";

const staticPages = [
  "",
  "/about",
  "/directions",
  "/catalog",
  "/industries",
  "/international",
  "/services",
  "/advantages",
  "/contacts",
  "/contacts/thank-you",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const catalogEntries = catalogCategories.map((cat) => ({
    url: `${BASE_URL}/catalog/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...catalogEntries];
}
