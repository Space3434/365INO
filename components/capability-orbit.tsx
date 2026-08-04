"use client";

import { useEffect, useState } from "react";
import {
  BarChart3,
  Bot,
  BriefcaseBusiness,
  Cloud,
  SlidersHorizontal,
  Target,
  type LucideIcon
} from "lucide-react";

const orbitItems: Array<{
  shortTitle: string;
  accent: string;
  icon: LucideIcon;
  x: number;
  y: number;
}> = [
  { shortTitle: "AI + Automation", accent: "#F47B3B", icon: Bot, x: 50, y: 8 },
  { shortTitle: "Program Leadership", accent: "#765EEA", icon: BriefcaseBusiness, x: 85.5, y: 29.5 },
  { shortTitle: "Secure Cloud", accent: "#2789E8", icon: Cloud, x: 85.5, y: 70.5 },
  { shortTitle: "Process", accent: "#EFAA32", icon: SlidersHorizontal, x: 50, y: 92 },
  { shortTitle: "Data + Insight", accent: "#13A96A", icon: BarChart3, x: 14.5, y: 70.5 },
  { shortTitle: "Strategy", accent: "#09869A", icon: Target, x: 14.5, y: 29.5 }
];

export function CapabilityOrbit({
  services
}: {
  services: Array<{ title: string; description: string }>;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % orbitItems.length);
    }, 3600);

    return () => window.clearInterval(timer);
  }, []);

  const activeOrbitItem = orbitItems[activeIndex];
  const activeService = services[activeIndex] ?? services[0];

  return (
    <section
      className="overflow-hidden bg-white py-[3.15rem] sm:py-[3.6rem] lg:py-[4.5rem]"
      aria-labelledby="capability-orbit-title"
    >
      <div className="w-full px-4 sm:px-8 lg:px-16">
        <div className="mx-auto grid w-full max-w-[96rem] items-center gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10">
          <div className="relative z-10 lg:pl-12 xl:pl-16">
            <p className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.18em] text-[#00B0F0]">
              Enterprise Capabilities
              <span className="h-px w-9 bg-current" aria-hidden="true" />
            </p>
            <h2
              id="capability-orbit-title"
              className="mt-5 text-balance text-4xl font-black leading-[0.98] tracking-[-0.045em] text-navy sm:text-5xl lg:text-[3.5rem]"
            >
              From ambition
              <br />
              to <span className="text-[#FF3300]">adoption.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
              365INO connects strategy, technology, and disciplined execution to turn complex priorities into
              measurable mission outcomes.
            </p>

            <article
              className="mt-9 flex gap-4 border-l-[3px] bg-slate-50 px-5 py-5 transition-colors"
              style={{ borderColor: activeOrbitItem.accent }}
              aria-live="polite"
            >
              <span className="pt-1 text-xs font-black" style={{ color: activeOrbitItem.accent }}>
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-slate-400">
                  Active discipline
                </p>
                <h3 className="mt-1 text-xl font-black text-navy">{activeService?.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{activeService?.description}</p>
              </div>
            </article>
          </div>

          <div
            className="relative mx-auto aspect-square w-full max-w-[26.93rem] lg:ml-auto lg:mr-8"
            aria-label="Interactive capability orbit"
          >
            <div className="absolute inset-[34%] rounded-full border border-slate-300" aria-hidden="true" />
            <div className="absolute inset-[19%] rounded-full border border-slate-300" aria-hidden="true" />
            <div
              className="capability-orbit-ring absolute inset-[7%] rounded-full border border-dashed border-slate-300"
              aria-hidden="true"
            />

            <div className="absolute left-1/2 top-1/2 z-10 grid aspect-square w-[24%] -translate-x-1/2 -translate-y-1/2 place-content-center rounded-full bg-navy text-center text-white shadow-[0_1.25rem_3.75rem_rgba(11,91,211,0.27)]">
              <strong className="text-[9px] font-black leading-tight sm:text-sm">
                <span className="block">Continuous</span>
                <span className="block">Adoption</span>
              </strong>
            </div>

            {orbitItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeIndex === index;
              return (
                <button
                  key={item.shortTitle}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="focus-ring absolute z-20 w-[7rem] -translate-x-1/2 -translate-y-1/2 text-center text-[8px] font-normal uppercase tracking-[0.05em] text-slate-600 sm:w-[8rem] sm:text-[10px]"
                  style={{ left: `${item.x}%`, top: `${item.y}%` }}
                  aria-pressed={isActive}
                >
                  <span
                    className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-full border bg-white transition duration-300 sm:h-12 sm:w-12"
                    style={{
                      color: isActive ? "#FFFFFF" : item.accent,
                      backgroundColor: isActive ? item.accent : "#FFFFFF",
                      borderColor: isActive ? item.accent : "#CEDAE7",
                      boxShadow: isActive ? `0 10px 28px ${item.accent}66` : "none",
                      transform: isActive ? "scale(1.14)" : "scale(1)"
                    }}
                  >
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                  </span>
                  {item.shortTitle}
                </button>
              );
            })}

            <div className="capability-orbit-satellite absolute inset-[15%] rounded-full" aria-hidden="true">
              <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[#F47B3B] shadow-[0_0_0_7px_rgba(244,123,59,0.13)]" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .capability-orbit-ring {
          animation: capability-ring-spin 38s linear infinite;
        }

        .capability-orbit-satellite {
          animation: capability-satellite-spin 15s linear infinite;
        }

        @keyframes capability-ring-spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes capability-satellite-spin {
          to {
            transform: rotate(360deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .capability-orbit-ring,
          .capability-orbit-satellite {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
