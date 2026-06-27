import { writeFile } from "node:fs/promises";
import { NextResponse } from "next/server";
import { getEditableSiteContent, siteContentPath } from "@/lib/site-content";

export async function GET() {
  return NextResponse.json(getEditableSiteContent());
}

export async function PUT(request: Request) {
  const content = await request.json();

  await writeFile(siteContentPath, `${JSON.stringify(content, null, 2)}\n`, "utf8");

  return NextResponse.json({ ok: true });
}
