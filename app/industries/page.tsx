import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { industries } from "@/lib/content";
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
      <AnimatedSection className="bg-white py-20">
        <div className="container-pad grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ title, icon: Icon }) => (
            <article key={title} className="rounded-md border border-slate-200 bg-white p-7 shadow-sm">
              <Icon className="mb-5 h-8 w-8 text-cyan-700" aria-hidden="true" />
              <h2 className="text-2xl font-black text-navy">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Strategy, automation, data, and delivery support tailored to sector priorities.
              </p>
            </article>
          ))}
        </div>
      </AnimatedSection>
      <CtaBanner />
    </>
  );
}
