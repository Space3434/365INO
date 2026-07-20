import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
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
      <AnimatedSection className="bg-white py-12 sm:py-16">
        <div className="container-pad">
          <Image
            src="/images/industry-insight-overview.png"
            alt="Industry Insight and Technology Execution overview for nine industries served by 365INO"
            width={1672}
            height={941}
            sizes="(max-width: 768px) 100vw, 1152px"
            className="mx-auto h-auto w-full max-w-6xl rounded-md"
          />
        </div>
      </AnimatedSection>
      <CtaBanner />
    </>
  );
}
