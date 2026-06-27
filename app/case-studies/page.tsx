import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { CaseStudyCard } from "@/components/case-study-card";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { caseStudies } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Case Studies",
  "Illustrative 365INO case study layouts for AI readiness, enterprise portfolio visibility, and workflow modernization.",
  "/case-studies"
);

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Sample engagements focused on challenge, solution, and outcome."
        description="These examples use illustrative metrics where source data is not available and avoid naming clients without public reference."
      />
      <AnimatedSection className="bg-white py-20">
        <div className="container-pad grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.title} {...study} />
          ))}
        </div>
      </AnimatedSection>
      <CtaBanner />
    </>
  );
}
