import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { CaseStudyCard } from "@/components/case-study-card";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { PerformanceBrochure } from "@/components/performance-brochure";
import { caseStudies } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import Image from "next/image";

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
        <div className="container-pad">
          <div className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-enterprise">
            <Image
              src="/client-perspective-modernization.png"
              alt="Client perspective graphic highlighting modernization that delivers clarity, confidence, and momentum"
              width={3840}
              height={2152}
              className="h-auto w-full"
              sizes="(min-width: 1280px) 1180px, calc(100vw - 32px)"
            />
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.title} {...study} />
            ))}
          </div>
          <div id="capability-statement" className="mt-10 scroll-mt-28">
            <PerformanceBrochure />
          </div>
        </div>
      </AnimatedSection>
      <CtaBanner />
    </>
  );
}
