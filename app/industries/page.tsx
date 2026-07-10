import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { IndustryCard } from "@/components/card-grids";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { industries } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Industries",
  "365INO supports government, healthcare, financial services, retail, manufacturing, transportation, education, and non-profit modernization.",
  "/industries"
);

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Modernization consulting across public and commercial sectors."
        description="365INO brings adaptable technology leadership to organizations with complex operations, stakeholder needs, and delivery constraints."
      />
      <AnimatedSection className="bg-white py-20">
        <div className="container-pad grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <IndustryCard key={industry.title} {...industry} index={index} />
          ))}
        </div>
      </AnimatedSection>
      <CtaBanner />
    </>
  );
}
