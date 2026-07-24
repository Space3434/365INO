import type { Metadata } from "next";
import { FileCheck2, Handshake, ShieldCheck } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/metadata";

const contractingPaths = [
  {
    title: "Procurement readiness",
    description:
      "Clear scopes, delivery plans, governance, and documentation designed to support confident acquisition decisions.",
    icon: FileCheck2
  },
  {
    title: "Teaming and subcontracting",
    description:
      "Flexible collaboration with prime contractors and specialist firms to assemble the right capabilities for each mission.",
    icon: Handshake
  },
  {
    title: "Responsible delivery",
    description:
      "Disciplined program controls, security-minded execution, and measurable outcomes throughout the engagement.",
    icon: ShieldCheck
  }
];

export const metadata: Metadata = createMetadata(
  "Contracts",
  "Learn how 365INO supports public-sector procurement, teaming, subcontracting, and responsible technology delivery.",
  "/contracts"
);

export default function ContractsPage() {
  return (
    <>
      <PageHero
        eyebrow="Contracts"
        title="Clear pathways to mission-ready technology."
        description="365INO works with public-sector organizations, prime contractors, and delivery partners to make complex technology initiatives easier to procure, govern, and execute."
      />
      <AnimatedSection className="bg-white py-20">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Contracting approach"
            title="Built for accountable delivery from the outset."
          />
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            We align program goals, technical requirements, delivery responsibilities, and performance
            measures early—helping teams reduce ambiguity and move forward with confidence.
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {contractingPaths.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-md border border-slate-200 bg-slate-50 p-6">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-navy text-cyan-300">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-xl font-black text-navy">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>
      <CtaBanner />
    </>
  );
}
