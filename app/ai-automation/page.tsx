import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/metadata";

const items = ["Responsible AI readiness", "Workflow automation", "Copilot enablement", "Decision intelligence"];

export const metadata: Metadata = createMetadata(
  "AI & Automation",
  "AI and intelligent automation consulting for responsible adoption, workflow automation, and business value.",
  "/ai-automation"
);

export default function AIAutomationPage() {
  return (
    <>
      <PageHero
        eyebrow="AI & Automation"
        title="Practical AI adoption with enterprise guardrails."
        description="365INO helps organizations identify where AI and automation can reduce friction, improve decisions, and support better mission or business outcomes."
      />
      <AnimatedSection className="bg-white py-20">
        <div className="container-pad">
          <SectionHeading eyebrow="What we support" title="Move from AI interest to governed action." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
              <div key={item} className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-black text-navy">{item}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Assess opportunity, readiness, controls, and adoption steps before scaling.
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
