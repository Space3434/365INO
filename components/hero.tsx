import { ArrowRight, Sparkles } from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";
import { ButtonLink } from "@/components/button-link";
import type { EditableSiteContent } from "@/lib/site-content";

export function Hero({ content }: { content: EditableSiteContent["hero"] }) {
  return (
    <section className="relative isolate overflow-hidden">
      <AnimatedBackground />
      <div className="container-pad relative grid min-h-[calc(100vh-5rem)] items-center gap-10 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-cyan-200 bg-white/80 px-3 py-2 text-sm font-bold text-cyan-800 shadow-sm">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            {content.eyebrow}
          </div>
          <h1 className="text-balance text-5xl font-black tracking-tight text-navy sm:text-6xl lg:text-7xl">
            {content.headline}
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-700">
            {content.subheading}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">{content.primaryButton}</ButtonLink>
            <ButtonLink href="/services" variant="secondary">
              {content.secondaryButton}
            </ButtonLink>
          </div>
        </div>

        <div className="relative min-h-[420px]">
          <div className="absolute inset-0 rounded-[2rem] border border-cyan-100 bg-white/70 shadow-enterprise backdrop-blur-md" />
          <div className="absolute left-8 right-8 top-8 rounded-md border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm font-black text-navy">{content.consoleTitle}</p>
              <span className="rounded-md bg-emerald-50 px-3 py-1 text-xs font-black text-emerald-700">
                {content.consoleStatus}
              </span>
            </div>
            <div className="space-y-3">
              {content.consoleItems.map((label, index) => (
                <div key={label} className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-md bg-cyan-50 text-sm font-black text-cyan-800">
                    {index + 1}
                  </span>
                  <div className="h-3 rounded-full bg-slate-100">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
                      style={{ width: `${82 - index * 14}%` }}
                    />
                  </div>
                  <ArrowRight className="h-4 w-4 text-cyan-700" aria-hidden="true" />
                  <p className="col-span-3 pl-11 text-sm font-semibold text-slate-600">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute bottom-8 left-8 right-8 grid gap-4 sm:grid-cols-3">
            {content.capabilityTiles.map((label) => (
              <div key={label} className="rounded-md border border-white/80 bg-navy p-5 text-white shadow-lg">
                <p className="text-3xl font-black">{label}</p>
                <p className="mt-2 text-sm text-cyan-100">Enterprise-ready capability</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
