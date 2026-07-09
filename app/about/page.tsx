import type { Metadata } from "next";
import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { createMetadata } from "@/lib/metadata";
import { ExternalLink, FileText, Maximize2 } from "lucide-react";
import Link from "next/link";

const contractingReasons = [
  {
    title: "Mission-Focused",
    description: "We align technology decisions with measurable business and mission outcomes."
  },
  {
    title: "Government Experience",
    description: "Our work is shaped by public-sector discipline, delivery rigor, and stakeholder accountability."
  },
  {
    title: "AI & Innovation",
    description: "We apply automation, cloud, and emerging technologies where they create practical value."
  },
  {
    title: "Trusted Delivery",
    description: "We bring transparency, quality, and partnership from strategy through execution."
  }
];

export const metadata: Metadata = createMetadata(
  "About",
  "Learn how 365INO helps organizations modernize through AI, automation, cloud technologies, and enterprise program leadership.",
  "/about"
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About 365INO"
        title="Technology consulting with a business-first point of view."
        description="365 Innovations Corporation (365INO) helps organizations modernize through Artificial Intelligence, digital transformation, cloud technologies, automation, and enterprise program leadership."
      />
      <AnimatedSection className="bg-white py-20">
        <div className="container-pad grid gap-10 lg:grid-cols-3">
          <div className="rounded-md border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-black text-navy">Mission</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Empower organizations through innovation, intelligent automation, and technology leadership.
            </p>
          </div>
          <div className="rounded-md border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-black text-navy">Vision</h2>
            <p className="mt-4 leading-8 text-slate-600">
              Become a trusted partner helping organizations confidently adopt emerging technologies.
            </p>
          </div>
          <div className="rounded-md border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-black text-navy">Focus</h2>
            <p className="mt-4 leading-8 text-slate-600">Technology That Moves Business Forward.</p>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection className="border-y border-slate-200 bg-slate-50 py-16">
        <div className="container-pad">
          <div className="grid items-center gap-8 rounded-md border border-cyan-100 bg-white p-6 shadow-enterprise md:grid-cols-[1.1fr_0.9fr] lg:p-8">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-cyan-50 px-3 py-2 text-sm font-black uppercase tracking-[0.16em] text-cyan-800">
                <FileText className="h-4 w-4" aria-hidden="true" />
                Capability Statement
              </div>
              <h2 className="text-balance text-3xl font-black tracking-tight text-navy sm:text-4xl">
                Preview 365INO&apos;s capabilities and delivery experience.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                View a brochure-style overview of representative client work, core capabilities, and
                performance highlights on the Case Studies page.
              </p>
              <Link
                href="/case-studies#capability-statement"
                className="focus-ring mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-black text-white shadow-sm transition hover:bg-cyan-800"
              >
                View Capability Statement
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <Link
              href="/case-studies#capability-statement"
              className="focus-ring group relative mx-auto block aspect-[2/3] w-full max-w-[312px] overflow-hidden rounded-md border border-slate-200 bg-slate-50 shadow-md transition hover:-translate-y-1 hover:border-cyan-400 hover:shadow-enterprise"
              aria-label="View the 365INO capability statement preview on the Case Studies page"
            >
              <Image
                src="/past-performance-client-success.png"
                alt="365INO capability statement and past performance preview"
                width={1024}
                height={1536}
                className="h-full w-full object-cover"
                sizes="312px"
              />
              <span className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-md bg-navy text-white shadow-md transition group-hover:bg-cyan-600">
                <Maximize2 className="h-5 w-5" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection className="bg-slate-50 py-20">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Why 365INO"
            title="Mission-focused technology partnerships built on trust."
            description="Choose 365INO when your next contracting engagement needs practical innovation, disciplined execution, and a partner focused on results instead of buzzwords."
          />
          <div className="mt-10 grid items-start gap-8 lg:grid-cols-[1fr_0.95fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {contractingReasons.map((item) => (
                <div key={item.title} className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-black text-navy">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
            <a
              href="/why-365ino-principles.png"
              target="_blank"
              rel="noreferrer"
              className="focus-ring group block overflow-hidden rounded-md border border-slate-200 bg-white shadow-enterprise"
              aria-label="Open the full-size Why 365INO graphic"
            >
              <Image
                src="/why-365ino-principles.png"
                alt="Why 365INO graphic highlighting mission focus, government experience, AI and innovation, proven results, trusted partnership, and quality and integrity"
                width={1003}
                height={565}
                className="h-auto w-full transition duration-300 group-hover:scale-[1.02]"
                sizes="(min-width: 1024px) 520px, calc(100vw - 32px)"
              />
            </a>
          </div>
        </div>
      </AnimatedSection>
      <CtaBanner />
    </>
  );
}
