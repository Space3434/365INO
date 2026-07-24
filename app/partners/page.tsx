import type { Metadata } from "next";
import { Blocks, Network, Rocket } from "lucide-react";
import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/metadata";

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

const partnerValues = [
  {
    title: "Aligned solutions",
    description: "We connect proven technologies to each organization’s operating priorities and constraints.",
    icon: Network
  },
  {
    title: "Faster delivery",
    description: "Shared expertise helps teams move efficiently from planning through integration and adoption.",
    icon: Rocket
  },
  {
    title: "Flexible collaboration",
    description: "Our delivery model supports technology alliances, teaming relationships, and specialist partners.",
    icon: Blocks
  }
];

export const metadata: Metadata = createMetadata(
  "Partners",
  "Explore the technology ecosystem and collaborative delivery approach that help 365INO turn modernization plans into measurable outcomes.",
  "/partners"
);

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="A connected ecosystem for practical modernization."
        description="365INO collaborates across leading technology platforms and delivery disciplines to create solutions that fit each organization’s mission, systems, and people."
      />
      <AnimatedSection className="bg-white py-20">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Technology ecosystem"
            title="Leading platforms. Integrated with purpose."
          />
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Our platform experience supports thoughtful selection, integration, governance, and adoption
            across complex government and commercial environments.
          </p>
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
        </div>
      </AnimatedSection>
      <AnimatedSection className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="container-pad grid gap-8 md:grid-cols-3">
          {partnerValues.map(({ title, description, icon: Icon }) => (
            <article key={title} className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-navy text-cyan-300">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-lg font-black text-navy">{title}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </AnimatedSection>
      <CtaBanner />
    </>
  );
}
