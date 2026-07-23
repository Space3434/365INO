import { NextResponse } from "next/server";

const feedUrl = "https://techxplore.com/rss-feed/machine-learning-ai-news/";

function decodeXml(value: string) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&#(\d+);/g, (_, code: string) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code: string) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

function readTag(item: string, tag: string) {
  const match = item.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return match ? decodeXml(match[1]) : "";
}

export async function GET() {
  try {
    const response = await fetch(feedUrl, {
      next: { revalidate: 1800 },
      headers: {
        Accept: "application/rss+xml, application/xml;q=0.9, text/xml;q=0.8",
        "User-Agent": "Mozilla/5.0 (compatible; 365INO/1.0; +https://365ino.com)"
      }
    });

    if (!response.ok) {
      throw new Error(`RSS request failed with status ${response.status}`);
    }

    const xml = await response.text();
    const items = Array.from(xml.matchAll(/<item>([\s\S]*?)<\/item>/gi))
      .slice(0, 12)
      .map((match) => ({
        title: readTag(match[1], "title"),
        link: readTag(match[1], "link"),
        published: readTag(match[1], "pubDate")
      }))
      .filter((item) => item.title && item.link.startsWith("https://techxplore.com/"));

    if (!items.length) {
      throw new Error("RSS feed contained no usable news items");
    }

    return NextResponse.json(
      { source: "Tech Xplore", items },
      { headers: { "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=86400" } }
    );
  } catch {
    return NextResponse.json({ source: "Tech Xplore", items: [] }, { status: 502 });
  }
}
