import { CapabilityOrbit } from "@/components/capability-orbit";
import { CtaBanner } from "@/components/cta-banner";
import { Hero } from "@/components/hero";
import { HomepageRoadmaps } from "@/components/homepage-roadmaps";
import { Stats } from "@/components/stats";
import { TechnologyEcosystemPathway } from "@/components/technology-ecosystem-pathway";
import { getEditableSiteContent } from "@/lib/site-content";

export default function HomePage() {
  const content = getEditableSiteContent();
  return (
    <>
      <Hero content={content.hero} />
      <Stats stats={content.stats} />
      <CapabilityOrbit services={content.services} />
      <HomepageRoadmaps />

      <TechnologyEcosystemPathway />

      <CtaBanner />
    </>
  );
}
