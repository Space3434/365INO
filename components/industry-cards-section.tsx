import { AnimatedSection } from "@/components/animated-section";
import { IndustryCard } from "@/components/card-grids";
import { SectionHeading } from "@/components/section-heading";
import { industries } from "@/lib/content";

export function IndustryCardsSection({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <AnimatedSection className="bg-white py-20">
      <div className="container-pad">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <IndustryCard key={industry.title} {...industry} index={index} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
