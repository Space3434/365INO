import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { why365 } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "About",
  "Learn how 365INO helps organizations modernize through AI, automation, cloud technologies, and enterprise program leadership.",
  "/about"
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About 365INO"
        title="Technology consulting with a business-first point of view."
        description="365 Innovations Corporation (365INO) helps organizations modernize through Artificial Intelligence, digital transformation, cloud technologies, automation, and enterprise program leadership."
      />
      <AnimatedSection className="bg-white py-20">
        <div className="container-pad grid gap-10 lg:grid-cols-3">
          <div className="rounded-md border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-black text-navy">Mission</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Empower organizations through innovation, intelligent automation, and technology leadership.
            </p>
          </div>
          <div className="rounded-md border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-black text-navy">Vision</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Become a trusted partner helping organizations confidently adopt emerging technologies.
            </p>
          </div>
          <div className="rounded-md border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-black text-navy">Tagline</h2>
            <p className="mt-4 leading-8 text-slate-600">Technology That Moves Business Forward.</p>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection className="bg-slate-50 py-20">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Why 365INO"
            title="A trusted advisor for modernization work that has to land."
            description="365INO emphasizes outcomes, adoption, clarity, and disciplined delivery instead of buzzwords or one-size-fits-all technology prescriptions."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {why365.map((item) => (
              <div key={item} className="rounded-md border border-slate-200 bg-white p-6 font-black text-navy">
                {item}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      <CtaBanner />
    </>
  );
}
