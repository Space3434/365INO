import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/metadata";

const routes = [
  "",
  "/about",
  "/services",
  "/solutions",
  "/ai-automation",
  "/digital-transformation",
  "/government-solutions",
  "/commercial-solutions",
  "/industries",
  "/case-studies",
  "/leadership",
  "/careers",
  "/contact",
  "/privacy-policy",
  "/terms-of-use"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7
  }));
}
