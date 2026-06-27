import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { Timeline } from "@/components/timeline";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Digital Transformation",
  "Digital transformation consulting for operating model redesign, cloud modernization, automation, data, and adoption.",
  "/digital-transformation"
);

export default function DigitalTransformationPage() {
  return (
    <>
      <PageHero
        eyebrow="Digital Transformation"
        title="Modernize how people, processes, data, and platforms work together."
        description="365INO plans and delivers modernization programs that improve operations while keeping adoption, governance, and measurable value in view."
      />
      <AnimatedSection className="bg-white py-20">
        <div className="container-pad">
          <Timeline />
        </div>
      </AnimatedSection>
      <CtaBanner />
    </>
  );
}
