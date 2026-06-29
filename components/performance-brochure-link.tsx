import { Award, ExternalLink, ShieldCheck } from "lucide-react";

export function PerformanceBrochureLink() {
  return (
    <a
      href="/past-performance-client-success.png"
      target="_blank"
      rel="noreferrer"
      className="focus-ring group grid gap-6 rounded-md border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-enterprise md:grid-cols-[auto_1fr_auto] md:items-center lg:p-7"
      aria-label="Open the 365INO past performance and client success brochure"
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-md bg-navy text-cyan-200">
        <ShieldCheck className="h-10 w-10" aria-hidden="true" />
      </div>
      <div>
        <p className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-cyan-700">
          Past performance
        </p>
        <h3 className="text-2xl font-black tracking-tight text-navy">
          View a brochure-style snapshot of client success and delivery experience.
        </h3>
        <p className="mt-3 text-base leading-7 text-slate-600">
          Open the full visual overview for representative projects, client types, demonstrated
          capabilities, and trust-building outcomes across 365INO engagements.
        </p>
      </div>
      <div className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-cyan-700">
        <Award className="h-5 w-5" aria-hidden="true" />
        View brochure
        <ExternalLink className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden="true" />
      </div>
    </a>
  );
}
