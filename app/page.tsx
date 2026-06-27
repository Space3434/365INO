import { AnimatedSection } from "@/components/animated-section";
import { CaseStudyCard } from "@/components/case-study-card";
import { ServiceCard, TechnologyGrid } from "@/components/card-grids";
import { CtaBanner } from "@/components/cta-banner";
import { FAQ } from "@/components/faq";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { Stats } from "@/components/stats";
import { Testimonials } from "@/components/testimonials";
import { Timeline } from "@/components/timeline";
import { caseStudies, industries, services, why365 } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />

      <AnimatedSection className="bg-white py-20">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Enterprise capabilities"
            title="Modernization services built for measurable business outcomes."
            description="365INO connects strategy, technology, and disciplined execution so organizations can move from ambition to adoption."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-slate-50 py-20">
        <div className="container-pad grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Why 365INO"
            title="Business-first technology leadership for complex environments."
            description="The firm brings enterprise delivery discipline, AI readiness, and vendor-neutral advisory support to organizations that need practical modernization."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {why365.map((item) => (
              <div key={item} className="rounded-md border border-slate-200 bg-white p-5 text-lg font-black text-navy">
                {item}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-20">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Delivery model"
            title="From strategy to execution, with adoption in mind."
            description="Every engagement starts with clarity, then moves into practical roadmaps, delivery governance, and continuous improvement."
          />
          <div className="mt-10">
            <Timeline />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-slate-50 py-20">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Technology ecosystem"
            title="AI, cloud, automation, and enterprise platforms working together."
            description="365INO helps teams evaluate the right platforms and operating practices for secure modernization."
          />
          <div className="mt-10">
            <TechnologyGrid />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-20">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Industries"
            title="Consulting support for mission-driven and commercial organizations."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.slice(0, 6).map(({ title, icon: Icon }) => (
              <div key={title} className="rounded-md border border-slate-200 bg-white p-6">
                <Icon className="mb-4 h-7 w-7 text-cyan-700" aria-hidden="true" />
                <h3 className="text-xl font-black text-navy">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-slate-50 py-20">
        <div className="container-pad">
          <SectionHeading
            eyebrow="Case studies"
            title="Sample modernization patterns."
            description="These illustrative examples show engagement structures without naming clients or claiming unsourced results."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.title} {...study} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-20">
        <div className="container-pad grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Client perspective"
            title="Modernization work needs clarity, confidence, and momentum."
            description="These representative testimonials can be replaced with approved client quotes when available."
          />
          <Testimonials />
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-slate-50 py-20">
        <div className="container-pad grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Common questions"
            title="A practical partner for AI-ready modernization."
          />
          <FAQ />
        </div>
      </AnimatedSection>

      <CtaBanner />
    </>
  );
}
