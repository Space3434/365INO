import type { Metadata } from "next";

export const siteUrl = "https://365ino.com";

export function createMetadata(title: string, description: string, path = ""): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "365INO",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}
