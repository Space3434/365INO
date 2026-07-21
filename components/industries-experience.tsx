"use client";

import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  PencilRuler,
  Scale,
  ShieldCheck,
  ShoppingCart,
  Target,
  TrainFront,
  Users
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { industries } from "@/lib/content";

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

const sectorDetails: Array<{
  color: string;
  icon: LucideIcon;
  chips: string[];
}> = [
  { color: "#1769e0", icon: Landmark, chips: ["Legacy modernization", "Compliance", "Citizen services"] },
  { color: "#078b8f", icon: HeartPulse, chips: ["Interoperability", "Automation", "HIPAA-aware"] },
  { color: "#267f2a", icon: ShieldCheck, chips: ["Claims processing", "Benefits delivery", "Case tracking"] },
  { color: "#98213a", icon: Scale, chips: ["Data governance", "Risk controls", "Reporting"] },
  { color: "#1466bc", icon: ShoppingCart, chips: ["Forecasting", "Personalization", "Omnichannel"] },
  { color: "#46515f", icon: Factory, chips: ["Predictive maintenance", "Supply chain", "Plant data"] },
  { color: "#c6570d", icon: TrainFront, chips: ["Asset tracking", "Logistics", "Scheduling"] },
  { color: "#5b2993", icon: GraduationCap, chips: ["Student services", "Automation", "Reporting"] },
  { color: "#956916", icon: Users, chips: ["Donor insight", "Lean delivery", "Automation"] }
];

const approach = [
  { title: "Plan", icon: Target, copy: "Clarify mission goals, stakeholder needs, constraints, dependencies, and measures of success." },
  { title: "Design", icon: PencilRuler, copy: "Translate operating needs into secure, scalable architectures and implementation roadmaps." },
  { title: "Deliver", icon: CheckCircle2, copy: "Build, integrate, test, and deploy capabilities through disciplined, transparent execution." },
  { title: "Modernize", icon: BarChart3, copy: "Continuously improve platforms, workflows, data visibility, and organizational performance." }
];

export function IndustriesExperience() {
  const reducedMotion = useReducedMotion();
  const [slide, setSlide] = useState(0);
  const [activeSector, setActiveSector] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = window.setInterval(() => setSlide((value) => (value + 1) % heroSlides.length), 6500);
    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = window.setInterval(() => setActiveSector((value) => (value + 1) % industries.length), 6000);
    return () => window.clearInterval(timer);
  }, [reducedMotion]);

  const currentSlide = heroSlides[slide];
  const currentIndustry = industries[activeSector];
  const currentDetail = sectorDetails[activeSector];
  const CurrentIcon = currentDetail.icon;

  return (
    <>
      <section className="relative isolate h-[570px] min-h-[560px] overflow-hidden bg-[#020d20] text-white sm:h-[min(680px,calc(100vh-110px))]">
        <div className="absolute inset-0 bg-mesh-grid opacity-30" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#010a19] via-[#021127]/[.9] to-[#020d20]/55" aria-hidden="true" />
        <div className="absolute right-[-173px] top-1/2 h-[425px] w-[425px] -translate-y-1/2 sm:right-[-43px] lg:right-[6%] lg:h-[442px] lg:w-[442px]" aria-hidden="true">
          <motion.div
            className="absolute inset-0"
            animate={reducedMotion ? undefined : { scale: [1, 1.018, 1], filter: ["brightness(1)", "brightness(1.08)", "brightness(1)"] }}
            transition={reducedMotion ? undefined : { duration: 6, ease: "easeInOut", repeat: Infinity }}
          >
            <Image
              src="/images/industries-globe-matched-navy.png"
              alt=""
              fill
              priority
              sizes="(max-width: 640px) 425px, 442px"
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

        <div className="container-pad relative z-10 flex min-h-[560px] items-center py-20 lg:min-h-[650px]">
          <motion.div
            key={slide}
            initial={reducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="w-full max-w-[620px] lg:max-w-[48vw]"
          >
            <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.22em] text-emerald-300 before:h-0.5 before:w-8 before:bg-emerald-300">
              {currentSlide.eyebrow}
            </p>
            <h1 className="mt-6 text-[44px] font-black leading-[0.94] tracking-[-0.055em] sm:text-[clamp(42px,5.2vw,74px)]">
              {currentSlide.title}
              <span className="mt-2 block text-blue-400">{currentSlide.accent}</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-200">{currentSlide.copy}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#industries-explorer" className="focus-ring inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-navy transition hover:-translate-y-0.5 hover:bg-cyan-50">
                Explore our experience <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="#delivery-approach" className="focus-ring inline-flex min-h-12 items-center rounded-full border border-white/40 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10">
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

      <div className="overflow-hidden border-t border-white/10 bg-[#0b2851] py-5 text-white" aria-hidden="true">
        <motion.div
          className="flex w-max"
          animate={reducedMotion ? undefined : { x: ["0%", "-50%"] }}
          transition={reducedMotion ? undefined : { duration: 32, ease: "linear", repeat: Infinity }}
        >
          {[0, 1].map((group) => (
            <div key={group} className="flex shrink-0 gap-8 px-4 text-xs font-black uppercase tracking-[0.16em] text-slate-300">
              {industries.map((industry) => (
                <span key={`${group}-${industry.title}`} className="flex items-center gap-3 whitespace-nowrap before:h-2 before:w-2 before:rounded-full before:bg-emerald-400">
                  {industry.title}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <section id="industries-explorer" className="scroll-mt-24 bg-white py-20 sm:py-24">
        <div className="container-pad">
          <div className="grid items-end gap-6 lg:grid-cols-[1fr_430px]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">Industries we serve</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight text-navy sm:text-5xl">Experience built around your operating reality.</h2>
            </div>
            <p className="text-base leading-7 text-slate-600">Select an industry to see how 365INO applies modernization, automation, integration, and data insight to its most important challenges.</p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(280px,360px)_1fr]">
            <div role="tablist" aria-label="Select an industry" className="grid sm:grid-cols-3 lg:block">
              {industries.map((industry, index) => {
                const detail = sectorDetails[index];
                return (
                  <button
                    key={industry.title}
                    type="button"
                    role="tab"
                    aria-selected={activeSector === index}
                    onClick={() => setActiveSector(index)}
                    className="group grid w-full grid-cols-[40px_1fr_auto] items-center gap-3 border-b border-slate-200 px-1 py-3 text-left transition hover:bg-slate-50"
                    style={{ color: activeSector === index ? detail.color : "#0b1d3d" }}
                  >
                    <span className="grid h-9 w-9 place-items-center rounded-full border text-xs font-black" style={{ borderColor: detail.color, color: detail.color }}>{String(index + 1).padStart(2, "0")}</span>
                    <span className="text-sm font-black">{industry.title}</span>
                    <ArrowRight className={`h-4 w-4 transition ${activeSector === index ? "translate-x-1" : "text-slate-400"}`} />
                  </button>
                );
              })}
            </div>

            <motion.article
              key={activeSector}
              role="tabpanel"
              initial={reducedMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative min-h-[600px] overflow-hidden rounded-[28px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white shadow-enterprise"
            >
              <div className="relative z-10 max-w-xl p-8 sm:p-12 lg:p-16">
                <p className="text-xs font-black uppercase tracking-[0.16em]" style={{ color: currentDetail.color }}>{String(activeSector + 1).padStart(2, "0")} / 09 · Industry experience</p>
                <h3 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl" style={{ color: currentDetail.color }}>{currentIndustry.title}</h3>
                <p className="mt-5 text-lg leading-8 text-slate-600">{currentIndustry.description}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {currentDetail.chips.map((chip) => <span key={chip} className="rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-black text-slate-700 shadow-sm">{chip}</span>)}
                </div>
              </div>
              <div className="absolute -bottom-24 -right-20 h-80 w-80 rounded-full border opacity-20 sm:bottom-auto sm:right-[-5%] sm:top-1/2 sm:-translate-y-1/2" style={{ borderColor: currentDetail.color, boxShadow: `0 0 0 42px ${currentDetail.color}12, 0 0 0 88px ${currentDetail.color}08` }} aria-hidden="true" />
              <CurrentIcon className="absolute bottom-12 right-10 h-28 w-28 opacity-80 sm:right-[10%] sm:top-1/2 sm:-translate-y-1/2" style={{ color: currentDetail.color }} strokeWidth={1.25} aria-hidden="true" />
              <div className="absolute bottom-0 left-0 h-1 w-full bg-slate-100"><div className="h-full" style={{ width: `${((activeSector + 1) / industries.length) * 100}%`, backgroundColor: currentDetail.color }} /></div>
            </motion.article>
          </div>
        </div>
      </section>

      <section id="delivery-approach" className="scroll-mt-24 bg-navy py-20 text-white sm:py-24">
        <div className="container-pad">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Our approach</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Strategy through sustained execution.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">A practical delivery model designed to move complex technology initiatives from ambition to measurable operational value.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {approach.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.article key={step.title} initial={reducedMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="relative rounded-2xl border border-blue-300/20 bg-blue-950/45 p-7">
                  <span className="text-xs font-black tracking-widest text-cyan-300">0{index + 1}</span>
                  <Icon className="mt-7 h-16 w-16 text-cyan-300" strokeWidth={1.4} aria-hidden="true" />
                  <h3 className="mt-6 text-2xl font-black">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{step.copy}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="container-pad">
          <div className="grid items-end gap-6 lg:grid-cols-[1fr_430px]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-700">Designed for outcomes</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-navy sm:text-5xl">Technology that advances the mission.</h2>
            </div>
            <p className="text-base leading-7 text-slate-600">Our work is focused on practical improvements that leaders, employees, customers, and communities can experience.</p>
          </div>
          <div className="mt-12 grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-enterprise lg:grid-cols-[1.25fr_repeat(3,1fr)]">
            <div className="bg-gradient-to-br from-blue-700 to-navy p-8 text-white lg:p-10">
              <h3 className="text-3xl font-black">Modernization with purpose.</h3>
              <p className="mt-4 leading-7 text-slate-200">365INO combines program leadership, software delivery, business analysis, PMO support, and systems integration.</p>
            </div>
            {["Reduce manual processing and operational friction.", "Improve data visibility and decision-making.", "Strengthen scalability, security, and maintainability."].map((metric, index) => (
              <div key={metric} className="border-t border-slate-200 p-8 lg:border-l lg:border-t-0">
                <strong className="text-4xl font-black text-blue-700">0{index + 1}</strong>
                <p className="mt-4 text-sm leading-6 text-slate-600">{metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
