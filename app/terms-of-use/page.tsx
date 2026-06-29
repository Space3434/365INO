import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { companyContact } from "@/lib/contact";
import { createMetadata } from "@/lib/metadata";

const sections = [
  {
    title: "Website Purpose",
    content: [
      "The 365INO website is provided for general informational purposes only. It is intended to provide information about our company, services, capabilities, career opportunities, and other business-related information.",
      "Nothing on this website constitutes legal, financial, contractual, or professional advice."
    ]
  },
  {
    title: "Acceptable Use",
    content: ["You agree to use this website only for lawful purposes."],
    bullets: [
      "Use the website in violation of any applicable law or regulation.",
      "Attempt to gain unauthorized access to the website, its systems, or networks.",
      "Introduce malicious code, viruses, or other harmful software.",
      "Interfere with the operation or security of the website.",
      "Use automated tools, bots, or scraping technologies to collect website content without prior written permission.",
      "Misrepresent your identity or affiliation when communicating with us."
    ],
    bulletIntro: "You may not:"
  },
  {
    title: "Intellectual Property",
    content: [
      "Unless otherwise stated, all website content, including text, graphics, logos, images, documents, layouts, icons, and other materials, is the property of 365INO Corporation or is used with permission and is protected by applicable intellectual property laws.",
      "You may view, download, or print materials from this website solely for personal, informational, or internal business evaluation purposes.",
      "You may not reproduce, distribute, modify, publish, transmit, or commercially exploit any website content without prior written permission from 365INO."
    ]
  },
  {
    title: "Accuracy of Information",
    content: [
      "We strive to keep the information on this website accurate and up to date. However, we make no warranties or representations regarding the completeness, accuracy, reliability, or availability of any information contained on the website.",
      "Information may be updated, revised, or removed at any time without notice."
    ]
  },
  {
    title: "Third-Party Links",
    content: [
      "This website may include links to third-party websites for your convenience.",
      "365INO does not control or endorse these websites and is not responsible for their content, privacy practices, products, services, or availability. Access to third-party websites is at your own risk."
    ]
  },
  {
    title: "Employment Information",
    content: [
      "Career opportunities and employment information presented on this website are provided for informational purposes only.",
      "Submission of a resume or employment application does not guarantee employment, an interview, or future consideration."
    ]
  },
  {
    title: "No Warranties",
    content: [
      "This website and its contents are provided on an \"as is\" and \"as available\" basis.",
      "To the fullest extent permitted by law, 365INO disclaims all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, non-infringement, and uninterrupted availability."
    ]
  },
  {
    title: "Limitation of Liability",
    content: [
      "To the fullest extent permitted by applicable law, 365INO shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising out of or relating to your use of, or inability to use, this website or its contents."
    ]
  },
  {
    title: "Security",
    content: [
      "While we implement reasonable security measures to protect our website, no Internet-based service can be guaranteed to be completely secure.",
      "Users are responsible for ensuring that any files downloaded from this website are scanned using appropriate security software."
    ]
  },
  {
    title: "Privacy",
    content: [
      "Your use of this website is also governed by our Privacy Policy, which explains how we collect, use, and protect information submitted through this website."
    ]
  },
  {
    title: "Governing Law",
    content: [
      "These Terms of Use shall be governed by and interpreted in accordance with the laws of the State of Florida, without regard to its conflict of law principles.",
      "Any disputes relating to these Terms or your use of this website shall be resolved in a court of competent jurisdiction located within the State of Florida."
    ]
  },
  {
    title: "Changes to These Terms",
    content: [
      "365INO may modify these Terms of Use at any time without prior notice.",
      "Any updates will become effective upon posting to this page. Continued use of the website after changes are posted constitutes acceptance of the revised Terms."
    ]
  }
];

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
        description="Effective Date: June 2026"
      />
      <section className="bg-white py-16">
        <div className="container-pad max-w-4xl">
          <div className="space-y-6 text-lg leading-8 text-slate-700">
            <p>
              Welcome to the 365INO Corporation (&quot;365INO,&quot; &quot;we,&quot; &quot;our,&quot; or
              &quot;us&quot;) website. By accessing or using this website, you agree to these Terms of Use. If you do
              not agree with these terms, please discontinue use of the website.
            </p>
          </div>

          <div className="mt-12 space-y-10">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-black text-navy">{section.title}</h2>
                <div className="mt-4 space-y-4 text-lg leading-8 text-slate-700">
                  {section.content.map((paragraph) => (
                    <p key={paragraph}>
                      {section.title === "Privacy" ? (
                        <>
                          Your use of this website is also governed by our{" "}
                          <Link href="/privacy-policy" className="font-bold text-cyan-700 hover:text-navy">
                            Privacy Policy
                          </Link>
                          , which explains how we collect, use, and protect information submitted through this website.
                        </>
                      ) : (
                        paragraph
                      )}
                    </p>
                  ))}
                  {section.bulletIntro ? <p>{section.bulletIntro}</p> : null}
                  {section.bullets ? (
                    <ul className="list-disc space-y-2 pl-6">
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </section>
            ))}

            <section>
              <h2 className="text-2xl font-black text-navy">Contact Information</h2>
              <div className="mt-4 space-y-2 text-lg leading-8 text-slate-700">
                <p>If you have questions regarding these Terms of Use, please contact us:</p>
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
