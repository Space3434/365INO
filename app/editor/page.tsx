import type { Metadata } from "next";
import { EditorContentForm } from "@/components/editor-content-form";
import { getEditableSiteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Content Editor",
  robots: {
    index: false,
    follow: false
  }
};

export default function EditorPage() {
  const content = getEditableSiteContent();

  return <EditorContentForm initialContent={content} />;
}
