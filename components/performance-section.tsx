import { ArrowRight, BadgeCheck, CheckCircle2, Star } from "lucide-react";
import Link from "next/link";
import {
  clientConfidenceReasons,
  clientPortfolio,
  demonstratedCapabilities,
  performanceStats
} from "@/lib/content";

export function PerformanceSection({ detailed = false }: { detailed?: boolean }) {
  const featuredClients = detailed ? clientPortfolio : clientPortfolio.slice(0, 3);

  return (
    <section className={detailed ? "bg-white py-20" : "bg-navy py-20 text-white"}>
      <div className="container-pad">
        <div className={detailed ? "max-w-4xl" : "max-w-4xl"}>
          <p
            className={
              detailed
                ? "mb-3 text-sm font-black uppercase tracking-[0.22em] text-cyan-700"
                : "mb-3 text-sm font-black uppercase tracking-[0.22em] text-cyan-200"
            }
          >
            Past performance
          </p>
          <h2
            className={
              detailed
                ? "text-balance text-3xl font-black tracking-tight text-navy sm:text-4xl lg:text-5xl"
                : "text-balance text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl"
            }
          >
            Proven delivery across government, commercial, and nonprofit organizations.
          </h2>
          <p className={detailed ? "mt-5 text-lg leading-8 text-slate-600" : "mt-5 text-lg leading-8 text-slate-300"}>
            For more than 15 years, 365INO has delivered technology modernization, business transformation,
            project management, software development, and enterprise IT consulting services for mission-driven and
            commercial teams.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {performanceStats.map((stat) => (
            <div
              key={`${stat.value}-${stat.label}`}
              className={
                detailed
                  ? "rounded-md border border-slate-200 bg-slate-50 p-5"
                  : "rounded-md border border-white/10 bg-white/5 p-5"
              }
            >
              <p className={detailed ? "text-3xl font-black text-cyan-700" : "text-3xl font-black text-cyan-200"}>
                {stat.value}
              </p>
              <p className={detailed ? "mt-2 text-sm font-bold text-slate-700" : "mt-2 text-sm font-bold text-slate-200"}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featuredClients.map((client) => (
            <article
              key={client.name}
              className={
                detailed
                  ? "rounded-md border border-slate-200 bg-white p-6 shadow-sm"
                  : "rounded-md border border-white/10 bg-white p-6 text-slate-700 shadow-enterprise"
              }
            >
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-black text-navy">{client.name}</h3>
                  <p className="mt-1 text-sm font-bold text-cyan-700">{client.sector}</p>
                </div>
                <BadgeCheck className="h-6 w-6 shrink-0 text-cyan-700" aria-hidden="true" />
              </div>

              <dl className="grid gap-2 text-sm text-slate-700">
                <div className="flex justify-between gap-4">
                  <dt className="font-bold">Role</dt>
                  <dd className="text-right">{client.role}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="font-bold">Location</dt>
                  <dd className="text-right">{client.location}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="font-bold">Value</dt>
                  <dd className="text-right">{client.value}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="font-bold">Period</dt>
                  <dd className="text-right">{client.period}</dd>
                </div>
              </dl>

              {detailed ? (
                <div className="mt-5 grid gap-5">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-700">Key services</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {client.services.map((service) => (
                        <span key={service} className="rounded-md bg-cyan-50 px-2.5 py-1 text-xs font-bold text-cyan-900">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-700">Business outcomes</p>
                    <ul className="mt-3 grid gap-2 text-sm text-slate-700">
                      {client.outcomes.map((outcome) => (
                        <li key={outcome} className="flex gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <p className="mt-5 text-sm leading-7 text-slate-600">{client.summary}</p>
              )}

              <div className="mt-5 flex gap-1 text-amber-400" aria-label="Five star performance marker">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
              </div>
            </article>
          ))}
        </div>

        <div
          className={
            detailed
              ? "mt-10 rounded-md border border-slate-200 bg-slate-50 p-6"
              : "mt-10 rounded-md border border-white/10 bg-white/5 p-6"
          }
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <h3 className={detailed ? "text-2xl font-black text-navy" : "text-2xl font-black text-white"}>
                Core capabilities demonstrated
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {demonstratedCapabilities.map((capability) => (
                  <span
                    key={capability}
                    className={
                      detailed
                        ? "rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700"
                        : "rounded-md border border-white/10 bg-white/10 px-3 py-2 text-sm font-bold text-slate-100"
                    }
                  >
                    {capability}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className={detailed ? "text-2xl font-black text-navy" : "text-2xl font-black text-white"}>
                Why clients choose 365INO
              </h3>
              <ul className={detailed ? "mt-5 grid gap-2 text-sm text-slate-700" : "mt-5 grid gap-2 text-sm text-slate-200"}>
                {clientConfidenceReasons.map((reason) => (
                  <li key={reason} className="flex gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden="true" />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {!detailed ? (
          <Link
            href="/case-studies"
            className="focus-ring mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-black text-navy shadow-sm transition hover:bg-cyan-50"
          >
            View Full Performance Portfolio
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        ) : null}
      </div>
    </section>
  );
}
