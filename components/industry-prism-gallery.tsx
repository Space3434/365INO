"use client";

import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { industries } from "@/lib/content";

const industryDetails = [
  { color: "#1769e0", href: "/government-solutions" },
  { color: "#078b8f", href: "/commercial-solutions" },
  { color: "#267f2a", href: "/government-solutions" },
  { color: "#98213a", href: "/commercial-solutions" },
  { color: "#1466bc", href: "/commercial-solutions" },
  { color: "#46515f", href: "/commercial-solutions" },
  { color: "#c6570d", href: "/commercial-solutions" },
  { color: "#5b2993", href: "/commercial-solutions" },
  { color: "#956916", href: "/commercial-solutions" }
];

function wrappedIndex(index: number) {
  return (index + industries.length) % industries.length;
}

export function IndustryPrismGallery({ reducedMotion }: { reducedMotion: boolean }) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef<number | null>(null);
  const lastInteraction = useRef(0);

  const selectIndustry = (index: number) => {
    lastInteraction.current = Date.now();
    setActive(wrappedIndex(index));
  };

  const previous = () => selectIndustry(active - 1);
  const next = () => selectIndustry(active + 1);

  useEffect(() => {
    if (reducedMotion) return;

    const timer = window.setInterval(() => {
      const inactiveLongEnough = Date.now() - lastInteraction.current > 8000;
      if (document.visibilityState === "visible" && !hovered && !focused && !dragging && inactiveLongEnough) {
        setActive((value) => wrappedIndex(value + 1));
      }
    }, 6000);

    return () => window.clearInterval(timer);
  }, [dragging, focused, hovered, reducedMotion]);

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    dragStart.current = event.clientX;
    setDragging(true);
    lastInteraction.current = Date.now();
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (dragStart.current !== null) {
      const distance = event.clientX - dragStart.current;
      if (Math.abs(distance) >= 45) {
        if (distance > 0) {
          previous();
        } else {
          next();
        }
      }
    }
    dragStart.current = null;
    setDragging(false);
  };

  const visibleFaces = [-1, 0, 1].map((offset) => ({
    offset,
    index: wrappedIndex(active + offset)
  }));
  const selectedIndustry = industries[active];
  const selectedDetail = industryDetails[active];
  const SelectedIcon = selectedIndustry.icon;

  return (
    <section
      id="industries-explorer"
      className="scroll-mt-24 overflow-hidden bg-gradient-to-br from-[#020b1d] via-[#061a3d] to-[#0a2f66] py-14 text-white sm:py-16"
      aria-labelledby="industries-gallery-title"
    >
      <div className="container-pad">
        <div className="grid items-center gap-9 lg:grid-cols-[0.78fr_1.45fr_0.9fr] xl:gap-12">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-300">Industries we serve</p>
            <h2 id="industries-gallery-title" className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Experience built around your <span className="text-blue-400">operating reality.</span>
            </h2>
            <div role="tablist" aria-label="Select an industry" className="mt-7 grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-1">
              {industries.map((industry, index) => {
                const Icon = industry.icon;
                const selected = active === index;
                return (
                  <button
                    key={industry.title}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => selectIndustry(index)}
                    className={`focus-ring flex min-h-[44px] items-center gap-3 rounded-md px-3 py-2 text-left text-sm font-bold transition ${
                      selected ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-md border"
                      style={{ borderColor: selected ? industryDetails[index].color : "rgba(148,163,184,.45)" }}
                    >
                      <Icon className="h-4 w-4" style={{ color: selected ? industryDetails[index].color : "#94a3b8" }} aria-hidden="true" />
                    </span>
                    <span>{industry.title}</span>
                    <ArrowRight className={`ml-auto h-4 w-4 ${selected ? "text-orange-400" : "text-slate-500"}`} aria-hidden="true" />
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocusCapture={() => setFocused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false);
            }}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                previous();
              } else if (event.key === "ArrowRight") {
                event.preventDefault();
                next();
              }
            }}
          >
            <div
              className={`relative mx-auto h-[22rem] w-full max-w-[43rem] touch-pan-y select-none outline-none sm:h-[25rem] ${
                dragging ? "cursor-grabbing" : "cursor-grab"
              }`}
              style={{ perspective: "1100px" }}
              tabIndex={0}
              role="group"
              aria-label="Interactive industry gallery. Drag, swipe, or use the left and right arrow keys to explore."
              onPointerDown={handlePointerDown}
              onPointerUp={handlePointerUp}
              onPointerCancel={() => {
                dragStart.current = null;
                setDragging(false);
              }}
            >
              {visibleFaces.map(({ index, offset }) => {
                const industry = industries[index];
                const detail = industryDetails[index];
                const faceIsActive = offset === 0;
                return (
                  <motion.button
                    key={index}
                    type="button"
                    onClick={() => selectIndustry(index)}
                    aria-label={`Select ${industry.title}`}
                    aria-current={faceIsActive ? "true" : undefined}
                    className="absolute left-1/2 top-1/2 h-[18rem] w-[58%] overflow-hidden rounded-xl border border-blue-300/30 bg-[#071a3a] text-left shadow-[0_24px_60px_rgba(0,0,0,.42)] sm:h-[21rem]"
                    initial={false}
                    animate={
                      reducedMotion
                        ? { x: "-50%", y: "-50%", opacity: faceIsActive ? 1 : 0 }
                        : {
                            x: `calc(-50% + ${offset * 58}%)`,
                            y: "-50%",
                            rotateY: offset * -34,
                            scale: faceIsActive ? 1 : 0.82,
                            opacity: faceIsActive ? 1 : 0.58
                          }
                    }
                    transition={{ duration: reducedMotion ? 0.2 : 0.65, ease: [0.22, 1, 0.36, 1] }}
                    style={{ zIndex: faceIsActive ? 3 : 2, transformStyle: "preserve-3d" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-300/10" />
                    <div className="absolute inset-0 opacity-25 subtle-grid" />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#020817] to-transparent" />
                    <span className="absolute left-5 top-5 z-10 text-xs font-black uppercase tracking-[0.16em] text-blue-100">
                      {industry.title}
                    </span>
                    <span className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-lg border border-white/25 bg-white/5">
                      <industry.icon className="h-5 w-5 text-blue-200" aria-hidden="true" />
                    </span>
                    <Image
                      src={industry.image}
                      alt={`${industry.title} industry`}
                      fill
                      sizes="(max-width: 768px) 58vw, 28vw"
                      className="object-contain p-12 opacity-90 drop-shadow-[0_18px_24px_rgba(0,0,0,.4)]"
                    />
                    <span className="absolute inset-x-5 bottom-5 z-10 h-0.5 rounded-full" style={{ backgroundColor: detail.color }} />
                  </motion.button>
                );
              })}
            </div>

            <div className="relative mx-auto -mt-3 h-10 w-[82%] rounded-[50%] border border-orange-500/70 shadow-[0_0_20px_rgba(249,115,22,.18)]" aria-hidden="true">
              <motion.span
                className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 rounded-full bg-orange-400 shadow-[0_0_12px_rgba(251,146,60,.9)]"
                animate={reducedMotion ? undefined : { x: ["-280%", "180%"] }}
                transition={reducedMotion ? undefined : { duration: 8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
              />
            </div>

            <div className="mt-5 flex items-center justify-center gap-3">
              <button type="button" onClick={previous} className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-white/5 transition hover:bg-white/10" aria-label="Previous industry">
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <div className="flex flex-wrap justify-center gap-2" aria-label="Select a gallery face">
                {industries.map((industry, index) => (
                  <button
                    key={industry.title}
                    type="button"
                    onClick={() => selectIndustry(index)}
                    className={`focus-ring h-3 rounded-full transition-all ${active === index ? "w-7 bg-orange-400" : "w-3 bg-white/30 hover:bg-white/60"}`}
                    aria-label={`Show ${industry.title}`}
                    aria-current={active === index ? "true" : undefined}
                  />
                ))}
              </div>
              <button type="button" onClick={next} className="focus-ring grid h-11 w-11 place-items-center rounded-full border border-white/30 bg-white/5 transition hover:bg-white/10" aria-label="Next industry">
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <motion.article
            key={active}
            initial={reducedMotion ? false : { opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-xl border border-white/10 bg-white/[.06] p-6 backdrop-blur-sm sm:p-8"
            aria-live="polite"
          >
            <span className="grid h-14 w-14 place-items-center rounded-xl border border-blue-400/50 bg-blue-500/10">
              <SelectedIcon className="h-7 w-7 text-blue-300" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-3xl font-black tracking-tight">{selectedIndustry.title}</h3>
            <span className="mt-4 block h-0.5 w-10 bg-orange-400" />
            <p className="mt-5 text-base leading-7 text-slate-200">{selectedIndustry.description}</p>
            <Link
              href={selectedDetail.href}
              className="focus-ring mt-7 inline-flex min-h-[44px] items-center gap-3 rounded-md bg-blue-600 px-5 py-3 text-sm font-black text-white transition hover:bg-blue-500"
            >
              View Solutions <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
