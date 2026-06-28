import { Download, FileText } from "lucide-react";
import Image from "next/image";
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
import { industries as industryModels, services as serviceModels } from "@/lib/content";
import { getEditableSiteContent } from "@/lib/site-content";

export default function HomePage() {
  const content = getEditableSiteContent();
  const editableServices = content.services.map((service, index) => ({
    ...service,
    icon: serviceModels[index]?.icon ?? serviceModels[0].icon
  }));
  const editableIndustries = content.industries.map((title, index) => ({
    title,
    icon: industryModels[index]?.icon ?? industryModels[0].icon
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
                Download the 365INO capability statement.
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                Review 365INO&apos;s services, differentiators, business information, and enterprise technology
                consulting capabilities in a concise downloadable PDF.
              </p>
              <a
                href="/365ino-capability-statement.pdf"
                download
                className="focus-ring mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-navy px-5 py-3 text-sm font-black text-white shadow-sm transition hover:bg-cyan-800"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download Capability Statement
              </a>
            </div>

            <a
              href="/365ino-capability-statement.pdf"
              download
              className="focus-ring group mx-auto block w-full max-w-xs overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm md:max-w-sm"
              aria-label="Download the 365INO capability statement PDF"
            >
              <Image
                src="/capability-statement-thumbnail.png"
                alt="Preview of the 365INO capability statement"
                width={1280}
                height={720}
                className="h-auto w-full transition duration-300 group-hover:scale-[1.02]"
              />
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
            {editableServices.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-slate-50 py-20">
        <div className="container-pad grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow={content.homeSections.why.eyebrow}
            title={content.homeSections.why.title}
            description={content.homeSections.why.description}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {content.why365.map((item) => (
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
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {editableIndustries.map(({ title, icon: Icon }) => (
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

      <AnimatedSection className="bg-white py-20">
        <div className="container-pad grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow={content.homeSections.testimonials.eyebrow}
            title={content.homeSections.testimonials.title}
            description={content.homeSections.testimonials.description}
          />
          <Testimonials />
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
