import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { CaseStudyCard } from "@/components/case-study-card";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { PerformanceSection } from "@/components/performance-section";
import { caseStudies } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Case Studies",
  "Explore 365INO past performance, client success, project examples, demonstrated capabilities, and case study layouts.",
  "/case-studies"
);

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Past performance, client success, and modernization examples."
        description="Review representative government, commercial, and nonprofit work across program management, software delivery, cloud modernization, testing, and business transformation."
      />
      <PerformanceSection detailed />
      <AnimatedSection className="bg-white py-20">
        <div className="container-pad">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-cyan-700">Engagement patterns</p>
            <h2 className="text-3xl font-black tracking-tight text-navy sm:text-4xl">
              Additional modernization case study formats.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.title} {...study} />
          ))}
          </div>
        </div>
      </AnimatedSection>
      <CtaBanner />
    </>
  );
}
