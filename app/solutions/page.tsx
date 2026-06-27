import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/metadata";

const solutions = [
  "AI & Automation",
  "Digital Transformation",
  "Government Solutions",
  "Commercial Solutions"
];

export const metadata: Metadata = createMetadata(
  "Solutions",
  "Explore 365INO solutions for AI automation, digital transformation, government modernization, and commercial growth.",
  "/solutions"
);

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Modernization solutions shaped around the outcome."
        description="From AI readiness to operating model redesign, 365INO brings the strategy, delivery, and adoption support needed to turn ideas into measurable progress."
      />
      <AnimatedSection className="bg-white py-20">
        <div className="container-pad">
          <SectionHeading eyebrow="Focus areas" title="Four paths to technology-enabled performance." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {solutions.map((solution) => (
              <div key={solution} className="rounded-md border border-slate-200 bg-white p-7 shadow-sm">
                <h2 className="text-2xl font-black text-navy">{solution}</h2>
                <p className="mt-4 leading-8 text-slate-600">
                  Define the roadmap, align stakeholders, prioritize practical use cases, and deliver with
                  transparent governance.
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      <CtaBanner />
    </>
  );
}
