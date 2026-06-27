import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Leadership",
  "365INO leadership combines technology strategy, AI readiness, enterprise delivery, and modernization consulting experience.",
  "/leadership"
);

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Experienced guidance for technology decisions that matter."
        description="365INO leadership brings a practical blend of strategy, program delivery, innovation, and operational modernization experience."
      />
      <AnimatedSection className="bg-white py-20">
        <div className="container-pad">
          <div className="rounded-md border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-black text-navy">Enterprise technology leadership</h2>
            <p className="mt-5 max-w-3xl leading-8 text-slate-600">
              Leadership profiles can be expanded with approved biographies, headshots, certifications, and
              public professional details when available. This placeholder keeps the page production-ready without
              fabricating personal claims.
            </p>
          </div>
        </div>
      </AnimatedSection>
      <CtaBanner />
    </>
  );
}
