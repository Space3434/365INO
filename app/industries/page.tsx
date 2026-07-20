import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { IndustriesExperience } from "@/components/industries-experience";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Industries",
  "365INO supports government, healthcare, financial services, retail, manufacturing, transportation, education, and non-profit modernization.",
  "/industries"
);

export default function IndustriesPage() {
  return (
    <>
      <IndustriesExperience />
      <CtaBanner />
    </>
  );
}
