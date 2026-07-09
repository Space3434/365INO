import type { Metadata } from "next";
import { ArrowRight, BadgeCheck, Brain, BriefcaseBusiness, Cloud, Code2, GraduationCap, Handshake, Maximize2, ShieldCheck, Users } from "lucide-react";
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
            description="365INO is a rapidly growing technology consulting firm driven by a singular mission: helping organizations transform, modernize, and achieve their most ambitious technology objectives. We are looking for exceptional professionals who combine technical excellence with compassion, curiosity, integrity, and the courage to think differently. Here, you&apos;ll solve meaningful challenges, work alongside talented teammates, and contribute to solutions that create lasting impact for our clients."
          />
          <div className="rounded-md border border-slate-200 bg-slate-50 p-6 lg:p-8">
            <h3 className="text-2xl font-black text-navy">Grow your career with us</h3>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              As we grow, we&apos;re committed to investing in your success, providing opportunities to learn, lead,
              innovate, and build a career that grows with the company. If you&apos;re passionate about making a
              difference through technology, 365INO is where your future begins.
            </p>
            <p className="mt-6 font-bold text-navy">
              Respond to{" "}
              <a
                href="mailto:careers@365ino.com"
                className="focus-ring text-cyan-700 underline decoration-cyan-300 underline-offset-4 transition hover:text-cyan-900"
              >
                careers@365ino.com
              </a>
            </p>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white pb-20">
        <div className="container-pad">
          <div className="overflow-hidden rounded-md border border-slate-200 bg-slate-50 shadow-sm">
            <Image
              src="/careers-collaboration.png"
              alt="Professional team collaborating around project materials in a modern office"
              width={1680}
              height={960}
              className="h-72 w-full object-cover md:h-96"
              sizes="(min-width: 1280px) 1120px, calc(100vw - 32px)"
            />
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
          <div className="group relative mx-auto aspect-[2/3] w-full max-w-[312px] overflow-hidden rounded-md border border-slate-200 bg-slate-50 shadow-md transition hover:-translate-y-1 hover:border-cyan-400 hover:shadow-enterprise">
            <a
              href="/careers-at-365ino.png"
              target="_blank"
              rel="noreferrer"
              className="focus-ring block h-full w-full"
              aria-label="Open the full-size Build Your Future careers graphic"
            >
              <Image
                src="/careers-at-365ino.png"
                alt="Build Your Future with 365INO careers graphic"
                width={1024}
                height={1536}
                className="h-full w-full object-cover"
                sizes="312px"
              />
              <span className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-md bg-navy text-white shadow-md transition group-hover:bg-cyan-600">
                <Maximize2 className="h-5 w-5" aria-hidden="true" />
              </span>
            </a>
            <a
              href="mailto:careers@365ino.com"
              className="focus-ring absolute left-[56.5%] top-[88.9%] z-10 h-[4.6%] w-[37.8%] rounded-md bg-transparent transition hover:bg-cyan-200/15"
              aria-label="Send resume to careers@365ino.com"
            >
              <span className="sr-only">careers@365ino.com</span>
            </a>
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
