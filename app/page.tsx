import { CapabilityOrbit } from "@/components/capability-orbit";
import { AnimatedHomeHero } from "@/components/animated-home-hero";
import { CtaBanner } from "@/components/cta-banner";
import { ObservabilityDashboard } from "@/components/observability-dashboard";
import { Stats } from "@/components/stats";
import { TechnologyEcosystemPathway } from "@/components/technology-ecosystem-pathway";
import { getEditableSiteContent } from "@/lib/site-content";

export default function HomePage() {
  const content = getEditableSiteContent();
  return (
    <>
      <AnimatedHomeHero />
      <Stats stats={content.stats} />
      <CapabilityOrbit services={content.services} />
      <ObservabilityDashboard />

      <TechnologyEcosystemPathway />

      <CtaBanner showCards={false} />

    </>
  );
}
