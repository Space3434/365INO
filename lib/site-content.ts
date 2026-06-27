import { readFileSync } from "node:fs";
import { join } from "node:path";

export type EditableSiteContent = {
  hero: {
    eyebrow: string;
    headline: string;
    subheading: string;
    primaryButton: string;
    secondaryButton: string;
    consoleTitle: string;
    consoleStatus: string;
    consoleItems: string[];
    capabilityTiles: string[];
  };
  stats: Array<{
    value: number;
    suffix: string;
    label: string;
  }>;
  homeSections: Record<
    | "services"
    | "why"
    | "delivery"
    | "technology"
    | "industries"
    | "caseStudies"
    | "testimonials"
    | "faq",
    {
      eyebrow: string;
      title: string;
      description?: string;
    }
  >;
  services: Array<{
    title: string;
    description: string;
  }>;
  why365: string[];
  industries: string[];
  caseStudies: Array<{
    title: string;
    challenge: string;
    solution: string;
    outcome: string;
    metrics: string[];
  }>;
};

export const siteContentPath = join(process.cwd(), "content", "site-content.json");

export function getEditableSiteContent(): EditableSiteContent {
  const raw = readFileSync(siteContentPath, "utf8");
  return JSON.parse(raw) as EditableSiteContent;
}
