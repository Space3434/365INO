import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/metadata";

const values = ["Remote opportunities", "Technology", "Innovation", "Learning", "Diversity"];

export const metadata: Metadata = createMetadata(
  "Careers",
  "Explore careers with 365INO across remote opportunities, technology, innovation, learning, and diverse teams.",
  "/careers"
);

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build modernization work that helps organizations move forward."
        description="365INO is interested in people who combine technology curiosity, delivery discipline, clear communication, and a passion for practical innovation."
      />
      <AnimatedSection className="bg-white py-20">
        <div className="container-pad grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((value) => (
            <div key={value} className="rounded-md border border-slate-200 bg-white p-6 text-lg font-black text-navy">
              {value}
            </div>
          ))}
        </div>
      </AnimatedSection>
      <CtaBanner />
    </>
  );
}
