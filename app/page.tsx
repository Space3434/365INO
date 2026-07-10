import { ExternalLink, FileText, Maximize2 } from "lucide-react";
import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";
import { CaseStudyCard } from "@/components/case-study-card";
import { IndustryCard, ServiceCard, TechnologyGrid } from "@/components/card-grids";
import { CtaBanner } from "@/components/cta-banner";
import { FAQ } from "@/components/faq";
import { Hero } from "@/components/hero";
import { SectionHeading } from "@/components/section-heading";
import { Stats } from "@/components/stats";
import { Timeline } from "@/components/timeline";
import { industries, services as serviceModels } from "@/lib/content";
import { getEditableSiteContent } from "@/lib/site-content";

export default function HomePage() {
  const content = getEditableSiteContent();
  const editableServices = content.services.map((service, index) => ({
    ...service,
    icon: serviceModels[index]?.icon ?? serviceModels[0].icon
  }));
  return (
    <>
      <Hero content={content.hero} />
      <Stats stats={content.stats} />

      <AnimatedSection className="bg-white py-16">
        <div className="container-pad">
          <div className="grid items-center gap-8 rounded-md border border-cyan-100 bg-slate-50 p-6 shadow-enterprise md:grid-cols-[1.2fr_0.8fr] lg:p-8">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-md bg-cyan-50 px-3 py-2 text-sm font-black uppercase tracking-[0.16em] text-cyan-800">
                <FileText className="h-4 w-4" aria-hidden="true" />
                Capability Statement
              </div>
              <h2 className="text-balance text-3xl font-black tracking-tight text-navy sm:text-4xl">
                Preview the 365INO capability statement.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                Review 365INO&apos;s services, differentiators, business information, and delivery experience in
                the Case Studies capability overview.
              </p>
              <a
                href="/past-performance-client-success.png"
                target="_blank"
                rel="noreferrer"
                className="focus-ring mt-6 inline-flex min-h-12 items-center justify-center gap-3 rounded-md border border-cyan-300 bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.12em] text-navy shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-500 hover:bg-cyan-50 hover:shadow-md"
              >
                View Capability Statement
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <a
              href="/past-performance-client-success.png"
              target="_blank"
              rel="noreferrer"
              className="focus-ring group relative mx-auto block aspect-square w-full max-w-[340px] overflow-hidden rounded-md border border-slate-200 bg-white shadow-md transition hover:-translate-y-1 hover:border-cyan-400 hover:shadow-enterprise"
              aria-label="Open the 365INO capability statement PDF"
            >
              <Image
                src="/capability-statement-link-button.png"
                alt="365INO capability statement and past performance preview"
                width={1254}
                height={1254}
                className="h-full w-full object-contain transition duration-300 group-hover:scale-[1.02]"
                sizes="340px"
              />
              <span className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-md bg-navy text-white shadow-md transition group-hover:bg-cyan-600">
                <Maximize2 className="h-5 w-5" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-20">
        <div className="container-pad">
          <SectionHeading
            eyebrow={content.homeSections.services.eyebrow}
            title={content.homeSections.services.title}
            description={content.homeSections.services.description}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {editableServices.map((service, index) => (
              <ServiceCard key={service.title} {...service} index={index} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-20">
        <div className="container-pad">
          <SectionHeading
            eyebrow={content.homeSections.delivery.eyebrow}
            title={content.homeSections.delivery.title}
            description={content.homeSections.delivery.description}
          />
          <div className="mt-10">
            <Timeline />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-slate-50 py-20">
        <div className="container-pad">
          <SectionHeading
            eyebrow={content.homeSections.technology.eyebrow}
            title={content.homeSections.technology.title}
            description={content.homeSections.technology.description}
          />
          <div className="mt-10">
            <TechnologyGrid />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-20">
        <div className="container-pad">
          <SectionHeading
            eyebrow={content.homeSections.industries.eyebrow}
            title={content.homeSections.industries.title}
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <IndustryCard key={industry.title} {...industry} index={index} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-slate-50 py-20">
        <div className="container-pad">
          <SectionHeading
            eyebrow={content.homeSections.caseStudies.eyebrow}
            title={content.homeSections.caseStudies.title}
            description={content.homeSections.caseStudies.description}
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {content.caseStudies.map((study) => (
              <CaseStudyCard key={study.title} {...study} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-slate-50 py-20">
        <div className="container-pad grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow={content.homeSections.faq.eyebrow}
            title={content.homeSections.faq.title}
          />
          <FAQ />
        </div>
      </AnimatedSection>

      <CtaBanner />
    </>
  );
}
