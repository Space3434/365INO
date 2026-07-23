import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ScrollProgress } from "@/components/scroll-progress";
import { companyContact } from "@/lib/contact";
import "./globals.css";

const siteUrl = "https://365ino.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "365INO | Technology Strategy, AI Transformation, Enterprise Delivery",
    template: "%s | 365INO"
  },
  description:
    "365 Innovations Corporation helps government agencies and commercial organizations modernize operations through AI, automation, cloud technologies, and enterprise program leadership.",
  applicationName: "365INO",
  authors: [{ name: "365 Innovations Corporation" }],
  creator: "365 Innovations Corporation",
  publisher: "365 Innovations Corporation",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "365INO",
    title: "365INO | Technology That Moves Business Forward",
    description:
      "Technology strategy, AI transformation, and enterprise delivery for government and commercial organizations."
  },
  twitter: {
    card: "summary_large_image",
    title: "365INO | Technology That Moves Business Forward",
    description:
      "AI, automation, cloud modernization, and enterprise delivery consulting."
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-512.png", type: "image/png", sizes: "512x512" }
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "365 Innovations Corporation",
    alternateName: "365INO",
    url: siteUrl,
    email: companyContact.email,
    telephone: companyContact.phone,
    faxNumber: companyContact.fax,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${companyContact.address.street} ${companyContact.address.suite}`,
      addressLocality: companyContact.address.city,
      addressRegion: companyContact.address.state,
      postalCode: companyContact.address.postalCode,
      addressCountry: companyContact.address.country
    },
    slogan: "Technology That Moves Business Forward.",
    sameAs: [companyContact.linkedIn]
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <ScrollProgress />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
