import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { IndustryCardsSection } from "@/components/industry-cards-section";
import { IndustriesExperience } from "@/components/industries-experience";
import { createMetadata } from "@/lib/metadata";
import { getEditableSiteContent } from "@/lib/site-content";

export const metadata: Metadata = createMetadata(
  "Industries",
  "365INO supports government, healthcare, financial services, retail, manufacturing, transportation, education, and non-profit modernization.",
  "/industries"
);

export default function IndustriesPage() {
  const content = getEditableSiteContent();

  return (
    <>
      <IndustriesExperience />
      <IndustryCardsSection
        eyebrow={content.homeSections.industries.eyebrow}
        title={content.homeSections.industries.title}
      />
      <CtaBanner />
    </>
  );
}
