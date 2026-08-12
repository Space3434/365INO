"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { EditableSiteContent } from "@/lib/site-content";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) {
      return;
    }

    const controls = animate(0, value, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (latest) => setCount(Math.round(latest))
    });

    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function Stats({ stats }: { stats: EditableSiteContent["stats"] }) {
  return (
    <section className="bg-navy py-12 text-white">
      <div className="stats-grid mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-md border border-white/10 bg-white/5 p-6">
            <p className="text-4xl font-black text-[#00B0F0]">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-200">{stat.label}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .stats-grid {
          width: min(88.75rem, calc(100% - 6rem));
        }

        @media (max-width: 65.625rem) {
          .stats-grid {
            width: min(calc(100% - 3rem), 57.5rem);
          }
        }

        @media (max-width: 42.5rem) {
          .stats-grid {
            width: calc(100% - 2.125rem);
          }
        }
      `}</style>
    </section>
  );
}
