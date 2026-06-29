import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { companyContact } from "@/lib/contact";
import { createMetadata } from "@/lib/metadata";

const sections = [
  {
    title: "Information We Collect",
    content: [
      "Most visitors can browse our website without providing any personal information.",
      "We may collect information that you voluntarily provide, including your name, company name, email address, telephone number, resume or employment information if applying for a position, and any information you choose to include when contacting us.",
      "We do not intentionally collect sensitive personal information through our website."
    ]
  },
  {
    title: "How We Use Your Information",
    content: [
      "Information you provide may be used to respond to your questions or requests, communicate regarding our services, process employment inquiries, improve our website and customer experience, and maintain the security and operation of our website.",
      "We will only use your information for the purposes for which it was provided."
    ]
  },
  {
    title: "Information Collected Automatically",
    content: [
      "Like most websites, our hosting platform may automatically collect limited technical information when you visit our website, including IP address, browser type, device type, operating system, pages visited, date and time of access, and referring website.",
      "This information is used only to help maintain website security, troubleshoot technical issues, and understand general website usage. It is not used to personally identify visitors."
    ]
  },
  {
    title: "Cookies",
    content: [
      "365INO does not intentionally use cookies for advertising or user tracking.",
      "Our website or hosting provider may use essential technical cookies that are necessary for website functionality or security. You may control cookies through your browser settings at any time."
    ]
  },
  {
    title: "How We Share Information",
    content: [
      "365INO does not sell, rent, or trade your personal information.",
      "We may share information only with service providers assisting in website operations, when required by law, to protect our legal rights or prevent fraud, or with your permission.",
      "If you submit a resume or employment application, your information may be shared internally with hiring personnel and, when appropriate, with teaming partners involved in contract staffing opportunities."
    ]
  },
  {
    title: "Data Security",
    content: [
      "We use commercially reasonable administrative, technical, and physical safeguards to protect information submitted through our website.",
      "While we work to protect your information, no method of transmitting information over the Internet or storing electronic data is completely secure. Accordingly, we cannot guarantee absolute security."
    ]
  },
  {
    title: "Third-Party Websites",
    content: [
      "Our website may contain links to third-party websites.",
      "We are not responsible for the privacy practices, content, or security of websites operated by others. We encourage you to review the privacy policies of any external sites you visit."
    ]
  },
  {
    title: "Children's Privacy",
    content: [
      "Our website is intended for individuals who are at least 18 years of age.",
      "We do not knowingly collect personal information from children under the age of 13."
    ]
  },
  {
    title: "Employment Applications",
    content: [
      "If you submit a resume or employment information, we will use that information solely for employment-related purposes, including evaluating qualifications for current or future employment opportunities.",
      "Your information will be retained only as long as reasonably necessary for recruiting and business purposes unless otherwise required by law."
    ]
  },
  {
    title: "Automated Decision-Making",
    content: [
      "365INO does not use information submitted through this website for automated decision-making or profiling."
    ]
  },
  {
    title: "Your Choices",
    content: [
      "You may choose not to provide personal information through our website.",
      `If you have submitted personal information and would like to request that it be updated or deleted, please contact us at ${companyContact.email}.`
    ]
  },
  {
    title: "Changes to This Privacy Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our business, technology, or legal requirements.",
      "Any updates will be posted on this page with a revised Effective Date."
    ]
  }
];

export const metadata: Metadata = createMetadata(
  "Privacy Policy",
  "365INO privacy policy for website visitors, consultation inquiries, and employment inquiries.",
  "/privacy-policy"
);

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Privacy"
        title="Privacy Policy"
        description="Effective Date: June 2026"
      />
      <section className="bg-white py-16">
        <div className="container-pad max-w-4xl">
          <div className="space-y-6 text-lg leading-8 text-slate-700">
            <p>
              At 365INO Corporation (&quot;365INO,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we
              respect your privacy and are committed to protecting any personal information you choose to share with us.
            </p>
            <p>
              Our website is primarily an informational resource designed to provide information about our company,
              services, capabilities, and employment opportunities. We collect only the information necessary to
              respond to inquiries and operate our website.
            </p>
          </div>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-black text-navy">{section.title}</h2>
                <div className="mt-4 space-y-4 text-lg leading-8 text-slate-700">
                  {section.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}

            <section>
              <h2 className="text-2xl font-black text-navy">Contact Us</h2>
              <div className="mt-4 space-y-2 text-lg leading-8 text-slate-700">
                <p>If you have questions regarding this Privacy Policy or how we handle personal information, please contact us:</p>
                <p className="font-bold text-navy">365INO Corporation</p>
                <p>Email: {companyContact.email}</p>
                <p>Website: www.365ino.com</p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
