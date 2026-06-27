"use client";

import { Eye, Plus, Save, Trash2 } from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { EditableSiteContent } from "@/lib/site-content";

type ArrayFieldName = "consoleItems" | "capabilityTiles";

const sectionKeys = [
  "services",
  "why",
  "delivery",
  "technology",
  "industries",
  "caseStudies",
  "testimonials",
  "faq"
] as const;

function Field({
  label,
  value,
  onChange,
  multiline = false
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
}) {
  const shared =
    "focus-ring w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm";

  return (
    <label className="grid gap-2 text-sm font-bold text-slate-700">
      {label}
      {multiline ? (
        <textarea className={`${shared} min-h-28`} value={value} onChange={(event) => onChange(event.target.value)} />
      ) : (
        <input className={shared} value={value} onChange={(event) => onChange(event.target.value)} />
      )}
    </label>
  );
}

function EditorPanel({
  title,
  children
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="mb-5 text-xl font-black text-navy">{title}</h2>
      <div className="grid gap-4">{children}</div>
    </section>
  );
}

export function EditorContentForm({ initialContent }: { initialContent: EditableSiteContent }) {
  const [content, setContent] = useState(initialContent);
  const [status, setStatus] = useState("Ready");
  const [activeTab, setActiveTab] = useState<"hero" | "sections" | "cards">("hero");

  const heroPreview = useMemo(
    () => ({
      headline: content.hero.headline || "Homepage headline",
      subheading: content.hero.subheading || "Homepage subheading"
    }),
    [content.hero.headline, content.hero.subheading]
  );

  function updateHero(key: keyof EditableSiteContent["hero"], value: string | string[]) {
    setContent((current) => ({
      ...current,
      hero: {
        ...current.hero,
        [key]: value
      }
    }));
  }

  function updateHeroArray(name: ArrayFieldName, index: number, value: string) {
    setContent((current) => {
      const items = [...current.hero[name]];
      items[index] = value;
      return {
        ...current,
        hero: {
          ...current.hero,
          [name]: items
        }
      };
    });
  }

  function addHeroArrayItem(name: ArrayFieldName) {
    setContent((current) => ({
      ...current,
      hero: {
        ...current.hero,
        [name]: [...current.hero[name], "New item"]
      }
    }));
  }

  function removeHeroArrayItem(name: ArrayFieldName, index: number) {
    setContent((current) => ({
      ...current,
      hero: {
        ...current.hero,
        [name]: current.hero[name].filter((_, itemIndex) => itemIndex !== index)
      }
    }));
  }

  async function saveContent() {
    setStatus("Saving...");
    const response = await fetch("/api/editor-content", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(content)
    });

    if (!response.ok) {
      setStatus("Save failed. Check the terminal for details.");
      return;
    }

    setStatus("Saved. Refresh the website to see the update.");
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="container-pad flex min-h-20 flex-wrap items-center justify-between gap-4 py-3">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">365INO</p>
            <h1 className="text-2xl font-black text-navy">Website Content Editor</h1>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-md bg-slate-100 px-3 py-2 text-sm font-bold text-slate-700">{status}</span>
            <Link
              href="/"
              className="focus-ring inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-black text-navy"
            >
              <Eye className="h-4 w-4" aria-hidden="true" /> View Site
            </Link>
            <button
              type="button"
              onClick={saveContent}
              className="focus-ring inline-flex items-center gap-2 rounded-md bg-navy px-4 py-2 text-sm font-black text-white hover:bg-cyan-800"
            >
              <Save className="h-4 w-4" aria-hidden="true" /> Save Changes
            </button>
          </div>
        </div>
      </header>

      <div className="container-pad grid gap-6 py-8 lg:grid-cols-[260px_1fr_360px]">
        <aside className="h-fit rounded-md border border-slate-200 bg-white p-3 shadow-sm">
          {[
            ["hero", "Hero"],
            ["sections", "Section Headings"],
            ["cards", "Cards & Lists"]
          ].map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setActiveTab(key as typeof activeTab)}
              className={`focus-ring mb-2 w-full rounded-md px-4 py-3 text-left text-sm font-black ${
                activeTab === key ? "bg-cyan-50 text-cyan-900" : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              {label}
            </button>
          ))}
        </aside>

        <div className="grid gap-6">
          {activeTab === "hero" ? (
            <EditorPanel title="Homepage Hero">
              <Field label="Small label above headline" value={content.hero.eyebrow} onChange={(value) => updateHero("eyebrow", value)} />
              <Field label="Main headline" value={content.hero.headline} onChange={(value) => updateHero("headline", value)} multiline />
              <Field label="Subheading" value={content.hero.subheading} onChange={(value) => updateHero("subheading", value)} multiline />
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Primary button" value={content.hero.primaryButton} onChange={(value) => updateHero("primaryButton", value)} />
                <Field label="Secondary button" value={content.hero.secondaryButton} onChange={(value) => updateHero("secondaryButton", value)} />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <Field label="Console title" value={content.hero.consoleTitle} onChange={(value) => updateHero("consoleTitle", value)} />
                <Field label="Console status" value={content.hero.consoleStatus} onChange={(value) => updateHero("consoleStatus", value)} />
              </div>
              <ArrayEditor
                title="Console items"
                items={content.hero.consoleItems}
                onAdd={() => addHeroArrayItem("consoleItems")}
                onRemove={(index) => removeHeroArrayItem("consoleItems", index)}
                onChange={(index, value) => updateHeroArray("consoleItems", index, value)}
              />
              <ArrayEditor
                title="Capability tiles"
                items={content.hero.capabilityTiles}
                onAdd={() => addHeroArrayItem("capabilityTiles")}
                onRemove={(index) => removeHeroArrayItem("capabilityTiles", index)}
                onChange={(index, value) => updateHeroArray("capabilityTiles", index, value)}
              />
            </EditorPanel>
          ) : null}

          {activeTab === "sections" ? (
            <EditorPanel title="Homepage Section Headings">
              {sectionKeys.map((key) => (
                <div key={key} className="rounded-md border border-slate-200 p-4">
                  <h3 className="mb-4 text-base font-black capitalize text-navy">{key.replace(/([A-Z])/g, " $1")}</h3>
                  <div className="grid gap-4">
                    <Field
                      label="Eyebrow"
                      value={content.homeSections[key].eyebrow}
                      onChange={(value) =>
                        setContent((current) => ({
                          ...current,
                          homeSections: {
                            ...current.homeSections,
                            [key]: { ...current.homeSections[key], eyebrow: value }
                          }
                        }))
                      }
                    />
                    <Field
                      label="Title"
                      value={content.homeSections[key].title}
                      onChange={(value) =>
                        setContent((current) => ({
                          ...current,
                          homeSections: {
                            ...current.homeSections,
                            [key]: { ...current.homeSections[key], title: value }
                          }
                        }))
                      }
                    />
                    <Field
                      label="Description"
                      value={content.homeSections[key].description ?? ""}
                      multiline
                      onChange={(value) =>
                        setContent((current) => ({
                          ...current,
                          homeSections: {
                            ...current.homeSections,
                            [key]: { ...current.homeSections[key], description: value }
                          }
                        }))
                      }
                    />
                  </div>
                </div>
              ))}
            </EditorPanel>
          ) : null}

          {activeTab === "cards" ? (
            <>
              <EditorPanel title="Stats">
                {content.stats.map((stat, index) => (
                  <div key={index} className="grid gap-3 rounded-md border border-slate-200 p-4 md:grid-cols-[1fr_1fr_2fr]">
                    <Field
                      label="Number"
                      value={String(stat.value)}
                      onChange={(value) =>
                        setContent((current) => {
                          const stats = [...current.stats];
                          stats[index] = { ...stats[index], value: Number(value) || 0 };
                          return { ...current, stats };
                        })
                      }
                    />
                    <Field
                      label="Suffix"
                      value={stat.suffix}
                      onChange={(value) =>
                        setContent((current) => {
                          const stats = [...current.stats];
                          stats[index] = { ...stats[index], suffix: value };
                          return { ...current, stats };
                        })
                      }
                    />
                    <Field
                      label="Label"
                      value={stat.label}
                      onChange={(value) =>
                        setContent((current) => {
                          const stats = [...current.stats];
                          stats[index] = { ...stats[index], label: value };
                          return { ...current, stats };
                        })
                      }
                    />
                  </div>
                ))}
              </EditorPanel>

              <EditorPanel title="Services">
                {content.services.map((service, index) => (
                  <div key={index} className="grid gap-3 rounded-md border border-slate-200 p-4">
                    <Field
                      label="Title"
                      value={service.title}
                      onChange={(value) =>
                        setContent((current) => {
                          const services = [...current.services];
                          services[index] = { ...services[index], title: value };
                          return { ...current, services };
                        })
                      }
                    />
                    <Field
                      label="Description"
                      value={service.description}
                      multiline
                      onChange={(value) =>
                        setContent((current) => {
                          const services = [...current.services];
                          services[index] = { ...services[index], description: value };
                          return { ...current, services };
                        })
                      }
                    />
                  </div>
                ))}
              </EditorPanel>

              <EditorPanel title="Why 365INO">
                <SimpleListEditor
                  items={content.why365}
                  onChange={(items) => setContent((current) => ({ ...current, why365: items }))}
                />
              </EditorPanel>

              <EditorPanel title="Industries">
                <SimpleListEditor
                  items={content.industries}
                  onChange={(items) => setContent((current) => ({ ...current, industries: items }))}
                />
              </EditorPanel>

              <EditorPanel title="Case Studies">
                {content.caseStudies.map((study, index) => (
                  <div key={index} className="grid gap-3 rounded-md border border-slate-200 p-4">
                    {(["title", "challenge", "solution", "outcome"] as const).map((field) => (
                      <Field
                        key={field}
                        label={field}
                        value={study[field]}
                        multiline={field !== "title"}
                        onChange={(value) =>
                          setContent((current) => {
                            const caseStudies = [...current.caseStudies];
                            caseStudies[index] = { ...caseStudies[index], [field]: value };
                            return { ...current, caseStudies };
                          })
                        }
                      />
                    ))}
                    <SimpleListEditor
                      label="Metrics"
                      items={study.metrics}
                      onChange={(items) =>
                        setContent((current) => {
                          const caseStudies = [...current.caseStudies];
                          caseStudies[index] = { ...caseStudies[index], metrics: items };
                          return { ...current, caseStudies };
                        })
                      }
                    />
                  </div>
                ))}
              </EditorPanel>
            </>
          ) : null}
        </div>

        <aside className="h-fit rounded-md border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-700">Preview</p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-navy">{heroPreview.headline}</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">{heroPreview.subheading}</p>
          <div className="mt-6 rounded-md bg-navy p-4 text-white">
            <p className="text-sm font-black">{content.hero.consoleTitle}</p>
            <div className="mt-4 space-y-2">
              {content.hero.consoleItems.map((item) => (
                <div key={item} className="rounded-md bg-white/10 px-3 py-2 text-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

function ArrayEditor({
  title,
  items,
  onChange,
  onAdd,
  onRemove
}: {
  title: string;
  items: string[];
  onChange: (index: number, value: string) => void;
  onAdd: () => void;
  onRemove: (index: number) => void;
}) {
  return (
    <div className="grid gap-3 rounded-md border border-slate-200 p-4">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-black text-navy">{title}</h3>
        <button type="button" onClick={onAdd} className="focus-ring inline-flex items-center gap-2 rounded-md bg-cyan-50 px-3 py-2 text-sm font-black text-cyan-900">
          <Plus className="h-4 w-4" aria-hidden="true" /> Add
        </button>
      </div>
      {items.map((item, index) => (
        <div key={index} className="grid grid-cols-[1fr_auto] gap-2">
          <input
            className="focus-ring rounded-md border border-slate-300 px-3 py-2 text-sm"
            value={item}
            onChange={(event) => onChange(index, event.target.value)}
          />
          <button
            type="button"
            onClick={() => onRemove(index)}
            className="focus-ring grid h-10 w-10 place-items-center rounded-md border border-slate-300 text-slate-700"
            aria-label={`Remove ${item}`}
          >
            <Trash2 className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      ))}
    </div>
  );
}

function SimpleListEditor({
  label = "Items",
  items,
  onChange
}: {
  label?: string;
  items: string[];
  onChange: (items: string[]) => void;
}) {
  return (
    <ArrayEditor
      title={label}
      items={items}
      onAdd={() => onChange([...items, "New item"])}
      onRemove={(index) => onChange(items.filter((_, itemIndex) => itemIndex !== index))}
      onChange={(index, value) => {
        const nextItems = [...items];
        nextItems[index] = value;
        onChange(nextItems);
      }}
    />
  );
}
