"use client";

import { Compass, Link2, Target } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const paths = [
  { title: "Explore New Possibilities", description: "Shape early ideas into focused, actionable initiatives.", icon: Compass, image: "/explore-new-possibilities.jpg" },
  { title: "Partner With Confidence", description: "Gain experienced strategy, technology, and delivery support.", icon: Link2, image: "/partner-with-confidence.jpg" },
  { title: <>Turn Ideas<br />Into Impact</>, key: "Turn Ideas Into Impact", description: "Transform promising concepts into measurable outcomes.", icon: Target, image: "/turn-ideas-into-impact.jpg" }
] as const;

export function ConversationPathCards() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;

    const timer = window.setTimeout(() => setActiveIndex(null), 10_000);
    return () => window.clearTimeout(timer);
  }, [activeIndex]);

  return (
    <div className="grid items-center gap-8 sm:grid-cols-3 lg:gap-10" aria-label="Ways to collaborate with 365INO">
      {paths.map((path, index) => {
        const Icon = path.icon;
        const active = activeIndex !== null && index === activeIndex;
        const idle = activeIndex === null;

        return (
          <button
            key={"key" in path ? path.key : path.title}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-pressed={active}
            className={`group relative z-10 flex min-h-[18rem] flex-col items-center justify-center rounded-2xl bg-[linear-gradient(145deg,#10366f,#021030)] px-5 py-7 text-center text-white outline-none transition duration-300 focus-visible:border-[#FF6A00] sm:min-h-[19rem] ${
              active
                ? "scale-[1.12] border-2 border-[#FF6A00]"
                : `${idle ? "scale-100" : "scale-[0.94]"} border-2 border-[#2588FF] hover:scale-[0.98]`
            }`}
          >
            <span className="relative grid h-[9.25rem] w-[9.25rem] overflow-hidden place-items-center rounded-full border border-[#56A9FF] text-white shadow-[inset_0_0_1.2rem_rgba(0,122,255,0.3),0_0_1.4rem_rgba(0,122,255,0.45)]" aria-hidden="true">
              {"image" in path ? (
                <Image src={path.image} alt="" fill sizes="148px" className="object-cover object-[50%_62%]" />
              ) : (
                <>
                  <span className="absolute inset-[16%] rounded-full border border-[#7FC2FF]/80" />
                  <Icon className={`relative h-12 w-12 stroke-[1.65] ${active ? "text-[#FF7900] drop-shadow-[0_0_8px_rgba(255,121,0,0.75)]" : "text-white drop-shadow-[0_0_8px_rgba(0,176,240,0.9)]"}`} />
                </>
              )}
            </span>

            <span className="mt-7 block text-xl font-black leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">{path.title}</span>
            <span className="mt-4 h-0.5 w-8 bg-[#FF6A00] shadow-[0_0_0.75rem_rgba(255,106,0,0.8)]" aria-hidden="true" />
            <span className="mt-4 block max-w-[15rem] text-base leading-6 text-slate-100">{path.description}</span>
          </button>
        );
      })}

    </div>
  );
}
