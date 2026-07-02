import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, Brain, BriefcaseBusiness, Cloud, Code2, GraduationCap, Handshake, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";
import { ButtonLink } from "@/components/button-link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { companyContact } from "@/lib/contact";
import { createMetadata } from "@/lib/metadata";

const reasons = [
  {
    title: "Meaningful Work",
    description: "Support modernization initiatives that improve services, operations, and mission outcomes.",
    icon: BadgeCheck
  },
  {
    title: "Innovation First",
    description: "Work across AI, automation, cloud platforms, data, low-code solutions, and digital delivery.",
    icon: Brain
  },
  {
    title: "Professional Growth",
    description: "Build skills through challenging projects, mentoring, certifications, and leadership opportunities.",
    icon: GraduationCap
  },
  {
    title: "Collaborative Culture",
    description: "Join teams that value integrity, accountability, shared learning, and clear communication.",
    icon: Handshake
  }
];

const disciplines = [
  { title: "Program & Project Management", icon: BriefcaseBusiness },
  { title: "Business Analysis", icon: Users },
  { title: "AI & Automation", icon: Brain },
  { title: "Cloud Engineering", icon: Cloud },
  { title: "Cybersecurity", icon: ShieldCheck },
  { title: "Software Development", icon: Code2 }
];

const qualities = [
  "Think critically",
  "Solve problems creatively",
  "Communicate clearly",
  "Embrace continuous learning",
  "Deliver exceptional client service",
  "Take ownership of results"
];

const opportunities = [
  "Project and Program Managers",
  "Business Analysts",
  "AI and Automation Engineers",
  "Cloud and DevSecOps Engineers",
  "Cybersecurity Specialists",
  "Solution Architects",
  "Software Developers",
  "QA and Test Engineers",
  "Technical Writers",
  "Proposal Professionals"
];

export const metadata: Metadata = createMetadata(
  "Careers",
  "Explore careers with 365INO across remote opportunities, government technology, digital modernization, collaboration, and professional growth.",
  "/careers"
);

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Join the team building technology that helps organizations work better."
        description="365INO is interested in consultants, technologists, analysts, and delivery leaders who bring curiosity, discipline, collaboration, and a practical commitment to measurable results."
      />

      <AnimatedSection className="bg-white py-20">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Impact"
            title="Make an impact every day."
            description="Our teams support organizations that need modern systems, intelligent automation, data-driven decisions, and dependable delivery. Every engagement is an opportunity to simplify complex work and help clients move forward with confidence."
          />
          <div className="rounded-md border border-slate-200 bg-slate-50 p-6 lg:p-8">
            <h3 className="text-2xl font-black text-navy">Invested in your success</h3>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              365INO supports professional growth, work-life balance, and meaningful career development through
              challenging assignments, flexible collaboration, and a culture that values trusted relationships as much
              as technical excellence.
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-slate-50 py-20">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Why 365INO"
            title="Why professionals choose 365INO."
            description="We keep teams focused on purposeful work, useful technology, and a culture where people can grow while serving clients well."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-md border border-slate-200 bg-white p-6">
                <Icon className="mb-4 h-7 w-7 text-cyan-700" aria-hidden="true" />
                <h3 className="text-xl font-black text-navy">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-20">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Disciplines"
            title="Help shape the future of government and enterprise technology."
            description="365INO contributes across strategy, delivery, engineering, analysis, quality, and advisory work for mission-driven and commercial clients."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {disciplines.map(({ title, icon: Icon }) => (
              <div key={title} className="flex items-center gap-4 rounded-md border border-slate-200 bg-white p-5">
                <Icon className="h-6 w-6 shrink-0 text-cyan-700" aria-hidden="true" />
                <h3 className="text-lg font-black text-navy">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-slate-50 py-20">
        <div className="container-pad grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Who thrives here"
              title="We look for professionals who bring ownership and care."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {qualities.map((quality) => (
                <div key={quality} className="rounded-md border border-slate-200 bg-white p-4 font-black text-navy">
                  {quality}
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="Opportunities"
              title="Explore current and future roles."
              description="We are continually interested in talented professionals across consulting, delivery, engineering, analysis, testing, technical writing, and proposal support."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {opportunities.map((role) => (
                <div key={role} className="rounded-md border border-slate-200 bg-white p-4 text-sm font-bold text-slate-700">
                  {role}
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white pt-20">
        <div className="container-pad">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-md border border-slate-200 bg-slate-50 shadow-enterprise">
            <Image
              src="/careers-at-365ino.png"
              alt="Careers at 365INO graphic highlighting innovation, collaboration, impact, future-focused vision, equal opportunity employment, and resume submission"
              width={900}
              height={600}
              className="h-64 w-full object-cover object-center md:h-[390px]"
              sizes="(min-width: 1280px) 1024px, calc(100vw - 32px)"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-20">
        <div className="container-pad">
          <div className="grid items-center gap-8 rounded-md bg-navy p-8 text-white shadow-enterprise md:grid-cols-[1fr_auto] md:p-10">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-200">Talent network</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Ready to build what is next?
              </h2>
              <p className="mt-4 max-w-3xl text-slate-300">
                If you are passionate about technology, innovation, and practical client impact, connect with 365INO
                so we can keep you in mind for aligned opportunities.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="light">
                <span className="inline-flex items-center gap-2">
                  Contact Recruiting <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </ButtonLink>
              <a
                href={`mailto:${companyContact.email}?subject=365INO%20Talent%20Network`}
                className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-cyan-200 px-5 py-3 text-sm font-black text-white transition hover:bg-white/10"
              >
                Join Talent Network
              </a>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-slate-50 py-16">
        <div className="container-pad">
          <div className="rounded-md border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-black text-navy">Equal Opportunity Employer</h2>
            <p className="mt-4 leading-7 text-slate-600">
              365INO is committed to a respectful workplace where employment decisions are based on qualifications,
              merit, business needs, and performance. Reasonable accommodations are available throughout the employment
              process for qualified individuals who require assistance.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
