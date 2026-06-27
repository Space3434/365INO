import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Terms of Use",
  "365INO website terms of use.",
  "/terms-of-use"
);

export default function TermsOfUsePage() {
  return (
    <>
      <PageHero
        eyebrow="Terms"
        title="Terms of Use"
        description="This placeholder terms page should be reviewed by legal counsel before production use."
      />
      <section className="bg-white py-16">
        <div className="container-pad max-w-3xl space-y-5 text-lg leading-8 text-slate-700">
          <p>
            Website content is provided for general informational purposes and does not create a consulting,
            contractual, or advisory relationship.
          </p>
          <p>
            Visitors may not misuse the website, attempt unauthorized access, or reproduce content in a misleading
            manner. All trademarks and brand references remain the property of their respective owners.
          </p>
          <p>
            365INO may update this website and these terms from time to time. Continued use of the website indicates
            acceptance of the current terms.
          </p>
        </div>
      </section>
    </>
  );
}
