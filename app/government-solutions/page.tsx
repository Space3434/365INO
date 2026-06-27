import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Government Solutions",
  "Government consulting for AI readiness, modernization, automation, PMO support, cloud, and enterprise delivery.",
  "/government-solutions"
);

export default function GovernmentSolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Government solutions"
        title="Modernization support for mission-driven agencies."
        description="365INO helps public-sector teams improve service delivery, operational visibility, and technology adoption with secure, practical, and mission-aware consulting."
      />
      <AnimatedSection className="bg-white py-20">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Public-sector focus"
            title="Governance, modernization, and delivery for complex environments."
            description="Support includes AI readiness, portfolio visibility, workflow automation, cloud planning, data insight, and program leadership."
          />
        </div>
      </AnimatedSection>
      <CtaBanner />
    </>
  );
}
