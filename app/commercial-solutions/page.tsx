import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Commercial Solutions",
  "Commercial consulting for AI adoption, automation, data analytics, cloud modernization, and technology strategy.",
  "/commercial-solutions"
);

export default function CommercialSolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Commercial solutions"
        title="Technology consulting for teams that need speed and discipline."
        description="365INO helps commercial organizations improve workflows, data visibility, customer operations, and modernization execution."
      />
      <AnimatedSection className="bg-white py-20">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Commercial focus"
            title="Create durable operating advantage with practical modernization."
            description="Engagements can include AI opportunity discovery, process automation, cloud planning, delivery governance, and analytics enablement."
          />
        </div>
      </AnimatedSection>
      <CtaBanner />
    </>
  );
}
