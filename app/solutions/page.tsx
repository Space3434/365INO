import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/metadata";
import { Blocks, Rocket, Workflow } from "lucide-react";
import Image from "next/image";

const solutions = [
  "AI & Automation",
  "Digital Transformation",
  "Government Solutions",
  "Commercial Solutions"
];

const solutionLabels = ["One", "Two", "Three", "Four"];

const technologyPartners = [
  { name: "AWS", logo: "/partner-logos/aws.svg", width: 264, height: 170 },
  { name: "Azure", logo: "/partner-logos/azure.svg", width: 348, height: 200 },
  { name: "Cerner", logo: "/partner-logos/cerner.png", width: 976, height: 240 },
  { name: "Databricks", logo: "/partner-logos/databricks.svg", width: 232, height: 141 },
  { name: "Intel", logo: "/partner-logos/intel.svg", width: 314, height: 302 },
  { name: "Microsoft", logo: "/partner-logos/microsoft.svg", width: 348, height: 107 },
  { name: "PEGA", logo: "/partner-logos/pega.png", width: 6943, height: 1840 },
  { name: "Salesforce", logo: "/partner-logos/salesforce.svg", width: 342, height: 246 },
  { name: "SAP", logo: "/partner-logos/sap.svg", width: 372, height: 201 },
  { name: "ServiceNow", logo: "/partner-logos/servicenow.svg", width: 321, height: 83 }
];

const partnershipBenefits = [
  {
    title: "Faster Starts",
    description: "We match proven technologies to your priorities so teams can move from planning to delivery with confidence.",
    icon: Rocket
  },
  {
    title: "Connected Solutions",
    description: "We help platforms, data, workflows, and people work together across the enterprise.",
    icon: Workflow
  },
  {
    title: "Flexible Delivery",
    description: "Our approach adapts to government and commercial environments, existing systems, and mission requirements.",
    icon: Blocks
  }
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
          <div className="mx-auto mt-12 grid max-w-5xl gap-y-8 gap-x-10 md:grid-cols-2">
            {solutions.map((solution, index) => (
              <div
                key={solution}
                className="min-h-48 rounded-md border border-cyan-700/40 bg-navy p-6 shadow-sm"
              >
                <h2 className="whitespace-nowrap text-xl font-black text-cyan-200 lg:text-2xl">
                  {solutionLabels[index]}: {solution}
                </h2>
                <p className="mt-5 max-w-[31rem] text-base leading-7 text-white">
                  Define the roadmap, align stakeholders, prioritize practical use cases, and deliver with
                  transparent governance.
                </p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection className="border-y border-slate-200 bg-slate-50 py-20">
        <div className="container-pad">
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="Technology experience"
              title="Leading platforms. Practical solutions."
            />
            <p className="mt-5 text-lg leading-8 text-slate-600">
              365INO brings experience working with widely adopted enterprise technologies. We help clients
              select, integrate, and apply the right platforms to modernize operations, strengthen
              decision-making, and achieve measurable outcomes.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {technologyPartners.map((partner) => (
              <div
                key={partner.name}
                className="flex min-h-24 items-center justify-center rounded-md border border-cyan-200 bg-white px-4 py-4 shadow-sm transition hover:border-cyan-500 hover:shadow-md"
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={partner.width}
                  height={partner.height}
                  className="h-14 w-full object-contain"
                />
              </div>
            ))}
          </div>

          <div className="mt-14 border-t border-slate-200 pt-10">
            <h2 className="text-2xl font-black text-navy">How we turn technology into results</h2>
            <div className="mt-7 grid gap-8 md:grid-cols-3">
              {partnershipBenefits.map(({ title, description, icon: Icon }) => (
                <div key={title} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-navy text-cyan-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-navy">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>
      <CtaBanner />
    </>
  );
}
