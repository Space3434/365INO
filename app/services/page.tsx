import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { ServiceCard } from "@/components/card-grids";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Services",
  "Explore 365INO services across AI, automation, cloud modernization, digital transformation, PMO, data analytics, and technology strategy.",
  "/services"
);

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Enterprise services for AI-ready transformation."
        description="365INO helps organizations plan, govern, automate, modernize, and deliver critical technology initiatives."
      />
      <AnimatedSection className="bg-white py-20">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Capabilities"
            title="Strategy, modernization, and delivery under one operating model."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </AnimatedSection>
      <CtaBanner />
    </>
  );
}
