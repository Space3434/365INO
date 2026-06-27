import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Privacy Policy",
  "365INO privacy policy for website visitors and consultation inquiries.",
  "/privacy-policy"
);

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        description="This placeholder policy should be reviewed by legal counsel before production use."
      />
      <section className="bg-white py-16">
        <div className="container-pad max-w-3xl space-y-5 text-lg leading-8 text-slate-700">
          <p>
            365 Innovations Corporation may collect information submitted through website forms, including name,
            organization, email address, and message details. This information is used to respond to inquiries and
            evaluate potential consulting engagements.
          </p>
          <p>
            The website may use standard analytics, hosting logs, and security tools to understand performance,
            protect the service, and improve the visitor experience.
          </p>
          <p>
            365INO does not sell personal information. Requests about submitted information can be directed to
            info@365ino.com.
          </p>
        </div>
      </section>
    </>
  );
}
