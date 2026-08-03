import { AnimatedSection } from "@/components/animated-section";
import { CapabilityOrbit } from "@/components/capability-orbit";
import { IndustryCard, TechnologyGrid } from "@/components/card-grids";
import { CtaBanner } from "@/components/cta-banner";
import { Hero } from "@/components/hero";
import { HomepageRoadmaps } from "@/components/homepage-roadmaps";
import { SectionHeading } from "@/components/section-heading";
import { Stats } from "@/components/stats";
import { industries } from "@/lib/content";
import { getEditableSiteContent } from "@/lib/site-content";

export default function HomePage() {
  const content = getEditableSiteContent();
  return (
    <>
      <Hero content={content.hero} />
      <Stats stats={content.stats} />
      <CapabilityOrbit services={content.services} />
      <HomepageRoadmaps />

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

      <CtaBanner />
    </>
  );
}
