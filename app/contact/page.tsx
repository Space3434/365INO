import type { Metadata } from "next";
import { Mail, MapPin, Phone, Printer } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { companyAddressLines, companyContact } from "@/lib/contact";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  "Contact",
  "Contact 365INO to schedule a consultation for AI, automation, cloud modernization, technology strategy, or enterprise delivery.",
  "/contact"
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Start a focused conversation about modernization."
        description="Use the form to share your goals, constraints, and opportunities. 365INO will follow up to discuss fit and next steps."
      />
      <AnimatedSection className="bg-white py-20">
        <div className="container-pad grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="text-3xl font-black text-navy">Business information</h2>
            <div className="mt-6 space-y-4 text-slate-700">
              <p className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-cyan-700" aria-hidden="true" /> {companyContact.email}
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-cyan-700" aria-hidden="true" /> {companyContact.phone}
              </p>
              <p className="flex items-center gap-3">
                <Printer className="h-5 w-5 text-cyan-700" aria-hidden="true" /> {companyContact.fax}
              </p>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-cyan-700" aria-hidden="true" />
                <address className="not-italic leading-7">
                  {companyAddressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
            </div>
            <div className="mt-8 grid min-h-64 place-items-center rounded-md border border-dashed border-cyan-300 bg-cyan-50 text-center">
              <p className="px-6 text-sm font-bold text-cyan-900">
                Map placeholder: {companyContact.address.city}, {companyContact.address.state}
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </AnimatedSection>
    </>
  );
}
