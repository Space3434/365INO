"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Settings,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { IndustryPrismGallery } from "@/components/industry-prism-gallery";

const heroSlides = [
  {
    eyebrow: "Industry insight. Technology execution.",
    title: "Modernize with",
    accent: "confidence.",
    copy: "365INO aligns strategy, technology, and operations to help public and private organizations deliver measurable outcomes."
  },
  {
    eyebrow: "Public-sector missions",
    title: "Secure. Compliant.",
    accent: "Citizen-centered.",
    copy: "We modernize complex environments while strengthening accountability, improving service delivery, and reducing operational friction."
  },
  {
    eyebrow: "Enterprise transformation",
    title: "Connect data.",
    accent: "Accelerate decisions.",
    copy: "From healthcare and financial services to manufacturing and transportation, we connect information, workflows, and people."
  }
];

type AiNewsItem = {
  title: string;
  link: string;
  published?: string;
};

const fallbackAiNews: AiNewsItem[] = [
  {
    title: "AI catches up with humans to score 100% at top math contest",
    link: "https://techxplore.com/news/2026-07-ai-humans-score-math-contest.html"
  },
  {
    title: "AI chatbots can be as effective as humans at emotional support—sometimes better",
    link: "https://techxplore.com/news/2026-07-ai-chatbots-effective-humans-emotional.html"
  },
  {
    title: "Machine learning accelerates search for longer-lasting materials for solar cells",
    link: "https://techxplore.com/news/2026-07-machine-longer-materials-solar-cells.html"
  },
  {
    title: "AI is rewriting cybersecurity's rules",
    link: "https://techxplore.com/news/2026-07-ai-rewriting-cybersecurity.html"
  },
  {
    title: "Microsoft strikes deal for Mistral's AI computing power",
    link: "https://techxplore.com/news/2026-07-microsoft-mistral-ai-power.html"
  },
  {
    title: "AI detects personalities of individual 3D printers to cut manufacturing errors",
    link: "https://techxplore.com/news/2026-07-ai-personalities-individual-3d-printers.html"
  }
];

export function IndustriesExperience() {
  const reducedMotion = useReducedMotion();
  const [slide, setSlide] = useState(0);
  const [aiNews, setAiNews] = useState<AiNewsItem[]>(fallbackAiNews);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = window.setInterval(() => setSlide((value) => (value + 1) % heroSlides.length), 6500);
    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  useEffect(() => {
    const controller = new AbortController();

    fetch("/api/ai-news", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load AI news");
        return response.json() as Promise<{ items?: AiNewsItem[] }>;
      })
      .then((data) => {
        if (data.items?.length) setAiNews(data.items);
      })
      .catch(() => undefined);

    return () => controller.abort();
  }, []);

  const currentSlide = heroSlides[slide];

  return (
    <>
      <section className="relative isolate h-[32rem] min-h-[31.5rem] overflow-hidden bg-[#000e24] text-white sm:h-[min(38rem,calc(100vh-6.875rem))]">
        <div className="absolute inset-0 bg-mesh-grid opacity-30" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000817] via-[#000e24]/[.9] to-[#000e24]/55" aria-hidden="true" />
        <div className="absolute right-[-10.8125rem] top-1/2 h-[26.5625rem] w-[26.5625rem] -translate-y-1/2 sm:right-[-2.6875rem] lg:right-[6%] lg:h-[27.625rem] lg:w-[27.625rem]" aria-hidden="true">
          <motion.div
            className="absolute inset-0"
            animate={reducedMotion ? undefined : { scale: [1, 1.018, 1], filter: ["brightness(1)", "brightness(1.08)", "brightness(1)"] }}
            transition={reducedMotion ? undefined : { duration: 6, ease: "easeInOut", repeat: Infinity }}
          >
            <Image
              src="/images/industries-globe-high-res-review.png"
              alt=""
              fill
              priority
              unoptimized
              sizes="(max-width: 640px) 425px, (min-width: 1024px) 398px, 424px"
              className="rounded-full object-cover"
              style={{ filter: "drop-shadow(0 24px 38px rgba(0,0,0,.28))" }}
            />
          </motion.div>

          <motion.div
            className="absolute inset-[10.4%] rounded-full"
            animate={reducedMotion ? undefined : { rotate: 360 }}
            transition={reducedMotion ? undefined : { duration: 24, ease: "linear", repeat: Infinity }}
          >
            <span className="absolute left-[13%] top-[11%] h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_0_5px_rgba(34,211,238,.15),0_0_16px_rgba(34,211,238,.85)]" />
            <span className="absolute bottom-[16%] right-[7%] h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,.9)]" />
          </motion.div>

          <div className="absolute inset-[23.4%] rounded-full border border-[#FF3300] shadow-[0_0_12px_rgba(255,51,0,.72)]" />

          <motion.div
            className="absolute inset-[16.5%] rounded-full"
            animate={reducedMotion ? undefined : { rotate: -360 }}
            transition={reducedMotion ? undefined : { duration: 12, ease: "linear", repeat: Infinity }}
          >
            <span className="absolute right-[-8px] top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-[#FF3300] bg-[#FF3300] shadow-[0_0_0_5px_rgba(255,51,0,.16),0_0_22px_rgba(255,51,0,1)]" />
          </motion.div>
        </div>

        <div className="container-pad relative z-10 flex min-h-[31.5rem] items-center py-14 lg:min-h-[36.5rem]">
          <motion.div
            key={slide}
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="w-full max-w-[38.75rem] lg:max-w-[48vw]"
          >
            <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.22em] text-emerald-300 before:h-0.5 before:w-8 before:bg-emerald-300">
              {currentSlide.eyebrow}
            </p>
            <h1 className="mt-6 text-[44px] font-black leading-[0.94] tracking-[-0.055em] sm:text-[clamp(2.625rem,5.2vw,4.625rem)]">
              {currentSlide.title}
              <span className="mt-2 block text-blue-400">{currentSlide.accent}</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-200">{currentSlide.copy}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#industries-explorer" className="focus-ring inline-flex min-h-[44px] items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-navy transition hover:-translate-y-0.5 hover:bg-cyan-50">
                Explore our experience <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#delivery-approach" className="focus-ring inline-flex min-h-[44px] items-center rounded-full border border-white/40 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10">
                How we deliver
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 z-20">
          <div className="container-pad flex items-center gap-3">
            {heroSlides.map((item, index) => (
              <button key={item.eyebrow} type="button" onClick={() => setSlide(index)} className={`h-1 rounded-full transition-all ${slide === index ? "w-12 bg-emerald-300" : "w-8 bg-white/30 hover:bg-white/60"}`} aria-label={`Show hero message ${index + 1}`} aria-current={slide === index ? "true" : undefined} />
            ))}
            <span className="ml-2 text-xs font-bold tracking-widest text-slate-300">0{slide + 1} / 03</span>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-t border-white/15 bg-[#174a7a] py-5 text-white" aria-label="Latest artificial intelligence news from Tech Xplore">
        <motion.div
          className="flex w-max"
          animate={reducedMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={reducedMotion ? undefined : { duration: 120, ease: "linear", repeat: Infinity }}
        >
          {[0, 1].map((group) => (
            <div
              key={group}
              className="flex shrink-0 gap-8 px-4 text-xs font-black uppercase tracking-[0.12em] text-slate-300"
              aria-hidden={group === 1 ? "true" : undefined}
            >
              {aiNews.map((item) => (
                <a
                  key={`${group}-${item.link}`}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  tabIndex={group === 1 ? -1 : undefined}
                  className="flex items-center gap-3 whitespace-nowrap transition hover:text-white before:h-2 before:w-2 before:rounded-full before:bg-emerald-400"
                >
                  <span className="text-emerald-300">Latest AI News</span>
                  <span>{item.title}</span>
                </a>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <IndustryPrismGallery reducedMotion={Boolean(reducedMotion)} />

      <section id="delivery-approach" className="scroll-mt-24 bg-navy py-8 text-white sm:py-10">
        <div className="container-pad">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Our approach</p>
            <h2 className="mt-1 text-4xl font-black tracking-tight sm:text-5xl">Strategy through sustained execution.</h2>
            <p className="mt-2 max-w-2xl text-lg leading-8 text-slate-300">A practical delivery model designed to move complex technology initiatives from ambition to measurable operational value.</p>
          </div>
          <div className="sr-only">
            <ol>
              <li>Plan: Clarify mission goals, stakeholder needs, constraints, dependencies, and measures of success.</li>
              <li>Design: Translate operating needs into secure, scalable architectures and implementation roadmaps.</li>
              <li>Deliver: Build, integrate, test, and deploy capabilities through disciplined, transparent execution.</li>
              <li>Modernize: Continuously improve platforms, workflows, data visibility, and organizational performance.</li>
            </ol>
          </div>
          <Image
            src="/images/industries-approach-stairs-cropped.png"
            alt=""
            width={1774}
            height={777}
            unoptimized
            className="mx-auto mt-4 block h-auto w-full"
            sizes="(max-width: 1536px) 100vw, 1536px"
          />
        </div>
      </section>

      <section className="bg-slate-50 py-10 sm:py-16">
        <div className="container-pad">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="grid items-center gap-5 rounded-2xl border border-slate-200 bg-white px-5 py-6 shadow-sm sm:gap-7 sm:px-8 sm:py-7 md:grid-cols-[1.1fr_0.8fr] lg:grid-cols-[1.2fr_0.72fr_0.85fr_auto_2.2fr] lg:gap-6 lg:px-10"
          >
            <header>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">Designed for outcomes</p>
              <h2 className="mt-3 text-balance text-3xl font-black tracking-tight text-navy sm:text-4xl">
                Technology that advances the mission.
              </h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Our work is focused on practical improvements that leaders, employees, customers, and communities can experience.
              </p>
            </header>

            <div className="relative mx-auto w-full max-w-[12rem] sm:max-w-[15rem]" aria-hidden="true">
              <div className="absolute inset-[18%] rounded-full bg-blue-100/60 blur-2xl" />
              <svg viewBox="0 0 240 180" className="relative block h-auto w-full overflow-visible">
                {[
                  "M18 168 A146 146 0 0 1 211 24",
                  "M54 168 A110 110 0 0 1 202 61",
                  "M91 168 A74 74 0 0 1 190 98"
                ].map((path, index) => (
                  <motion.path
                    key={path}
                    d={path}
                    fill="none"
                    stroke={index === 0 ? "#1d4ed8" : "#2563eb"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    initial={reducedMotion ? false : { pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9, delay: index * 0.14, ease: "easeOut" }}
                  />
                ))}
                <motion.circle
                  cx="174"
                  cy="39"
                  r="5"
                  fill="#65a30d"
                  animate={reducedMotion ? undefined : { r: [4.5, 6.5, 4.5], opacity: [0.75, 1, 0.75] }}
                  transition={reducedMotion ? undefined : { duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.circle
                  cx="155"
                  cy="68"
                  r="4.5"
                  fill="#1d4ed8"
                  animate={reducedMotion ? undefined : { cx: [151, 158, 151], cy: [72, 65, 72] }}
                  transition={reducedMotion ? undefined : { duration: 9, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.circle
                  cx="139"
                  cy="100"
                  r="4.5"
                  fill="#2563eb"
                  animate={reducedMotion ? undefined : { cx: [136, 144, 136], cy: [103, 96, 103] }}
                  transition={reducedMotion ? undefined : { duration: 11, repeat: Infinity, ease: "easeInOut" }}
                />
                <circle cx="121" cy="142" r="18" fill="#eff6ff" />
              </svg>
            </div>

            <div className="border-t border-slate-200 pt-5 md:col-span-2 lg:col-span-1 lg:border-0 lg:pt-0">
              <span className="mb-3 block h-0.5 w-8 bg-lime-500" />
              <h3 className="text-2xl font-black tracking-tight text-navy">Modernization with purpose.</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                365INO combines program leadership, software delivery, business analysis, PMO support, and systems integration.
              </p>
            </div>

            <div className="hidden h-36 w-px bg-slate-200 lg:block" aria-hidden="true" />

            <div className="grid border-t border-slate-200 md:col-span-2 md:grid-cols-3 lg:col-span-1 lg:border-t-0">
              {[
                { icon: Settings, text: "Reduce manual processing and operational friction." },
                { icon: BarChart3, text: "Improve data visibility and decision-making." },
                { icon: ShieldCheck, text: "Strengthen scalability, security, and maintainability." }
              ].map((outcome, index) => {
                const OutcomeIcon = outcome.icon;
                return (
                  <motion.article
                    key={outcome.text}
                    initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.4, delay: reducedMotion ? 0 : 0.12 + index * 0.1 }}
                    className="group flex items-center gap-4 border-b border-slate-200 py-4 last:border-b-0 md:block md:border-b-0 md:border-l md:border-dashed md:px-5 md:py-2 md:text-center md:first:border-l-0"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-blue-50 text-blue-700 transition group-hover:bg-blue-100 group-hover:text-blue-800 md:mx-auto">
                      <OutcomeIcon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
                    </span>
                    <p className="text-sm font-semibold leading-6 text-navy md:mt-4">{outcome.text}</p>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
