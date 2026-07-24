"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./industry-prism-gallery.module.css";

type Industry = {
  name: string;
  short: string;
  description: string;
  image: string;
  href: string;
};

const galleryIndustries: Industry[] = [
  {
    name: "Public Sector",
    short: "PS",
    description: "Secure technology for responsive government.",
    image: "/industries/public-sector.png",
    href: "/government-solutions"
  },
  {
    name: "Healthcare",
    short: "HC",
    description: "Connected systems that support better care.",
    image: "/industries/healthcare.png",
    href: "/commercial-solutions"
  },
  {
    name: "Manufacturing",
    short: "MF",
    description: "Smarter operations from plant floor to cloud.",
    image: "/industries/manufacturing.png",
    href: "/commercial-solutions"
  },
  {
    name: "Financial Services",
    short: "FS",
    description: "Modern platforms built for trust and resilience.",
    image: "/industries/financial-services.png",
    href: "/commercial-solutions"
  },
  {
    name: "Energy & Utilities",
    short: "EU",
    description: "Intelligent infrastructure for a changing world.",
    image: "/industries/energy.png",
    href: "/commercial-solutions"
  },
  {
    name: "Transportation",
    short: "TR",
    description: "Connected mobility that keeps communities moving.",
    image: "/industries/transportation.png",
    href: "/commercial-solutions"
  }
];

const faceAngle = 360 / galleryIndustries.length;

export function IndustryPrismGallery({ reducedMotion }: { reducedMotion: boolean }) {
  const [active, setActive] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [paused, setPaused] = useState(reducedMotion);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef({ x: 0, rotation: 0 });
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const selectIndustry = useCallback(
    (index: number, userAction = false) => {
      const normalized = (index + galleryIndustries.length) % galleryIndustries.length;
      setActive(normalized);
      setRotation(-normalized * faceAngle);
      if (userAction && !reducedMotion) {
        setPaused(true);
        if (resumeTimer.current) clearTimeout(resumeTimer.current);
        resumeTimer.current = setTimeout(() => setPaused(false), 8000);
      }
    },
    [reducedMotion]
  );

  useEffect(() => {
    if (reducedMotion || paused || dragging) return;
    const timer = window.setInterval(() => {
      if (document.visibilityState !== "visible") return;
      setActive((current) => {
        const next = (current + 1) % galleryIndustries.length;
        setRotation(-next * faceAngle);
        return next;
      });
    }, 6000);
    return () => window.clearInterval(timer);
  }, [dragging, paused, reducedMotion]);

  useEffect(
    () => () => {
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    },
    []
  );

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    dragStart.current = { x: event.clientX, rotation };
    setDragging(true);
    setPaused(true);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const delta = event.clientX - dragStart.current.x;
    setRotation(dragStart.current.rotation + delta * 0.28);
  };

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    event.currentTarget.releasePointerCapture(event.pointerId);
    const closest = Math.round(-rotation / faceAngle);
    setDragging(false);
    selectIndustry(closest, true);
  };

  const current = galleryIndustries[active];

  return (
    <section id="industries-explorer" className={styles.industrySection} aria-labelledby="industries-heading">
      <div className={styles.ambientOne} aria-hidden="true" />
      <div className={styles.ambientTwo} aria-hidden="true" />

      <div className={styles.galleryShell}>
        <aside className={styles.industryNav}>
          <p className={styles.eyebrow}>Plan. Deliver. Modernize.</p>
          <h2 id="industries-heading">
            Industries
            <br />
            <em>We Serve</em>
          </h2>
          <div className={styles.orangeRule} />
          <div role="tablist" aria-label="Select an industry">
            {galleryIndustries.map((industry, index) => (
              <button
                key={industry.name}
                className={`${styles.industryLink} ${index === active ? styles.active : ""}`}
                onClick={() => selectIndustry(index, true)}
                aria-selected={index === active}
                role="tab"
                type="button"
              >
                <span className={styles.hexIcon} aria-hidden="true">{industry.short}</span>
                <span>{industry.name}</span>
                {index === active && <span className={styles.chevron} aria-hidden="true">›</span>}
              </button>
            ))}
          </div>
        </aside>

        <div className={styles.stageColumn}>
          <div
            className={`${styles.prismStage} ${dragging ? styles.dragging : ""}`}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={() => setDragging(false)}
            onMouseEnter={() => !reducedMotion && setPaused(true)}
            onMouseLeave={() => !dragging && !reducedMotion && setPaused(false)}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") selectIndustry(active + 1, true);
              if (event.key === "ArrowLeft") selectIndustry(active - 1, true);
            }}
            role="application"
            aria-label="Interactive rotating industry gallery. Drag horizontally or use the arrow keys."
            tabIndex={0}
          >
            <div
              className={styles.prism}
              style={{ transform: `translate(-50%, -50%) rotateX(-5deg) rotateY(${rotation}deg)` }}
            >
              {galleryIndustries.map((industry, index) => (
                <article
                  key={industry.name}
                  className={styles.prismFace}
                  style={{
                    transform: `rotateY(${index * faceAngle}deg) translateZ(var(--prism-radius))`,
                    backgroundImage: `linear-gradient(180deg, rgba(3,20,48,.08), rgba(2,15,39,.58)), url("${industry.image}")`
                  }}
                  aria-hidden={index !== active}
                  onClick={() => selectIndustry(index, true)}
                >
                  <div className={styles.faceTopline}>
                    <span>{industry.name.toUpperCase()}</span>
                    <span className={styles.faceBadge}>{industry.short}</span>
                  </div>
                  <div className={styles.dataLines} aria-hidden="true">
                    <i /><i /><i /><i />
                  </div>
                </article>
              ))}
            </div>
            <div className={styles.prismFloor} />
          </div>

          <div className={styles.orbitControls}>
            <button type="button" onClick={() => selectIndustry(active - 1, true)} aria-label="Previous industry">‹</button>
            <div className={styles.orbitLine}>
              <span style={{ left: `${(active / (galleryIndustries.length - 1)) * 100}%` }} />
            </div>
            <button type="button" onClick={() => selectIndustry(active + 1, true)} aria-label="Next industry">›</button>
          </div>
          <p className={styles.rotateLabel}><span className={styles.hand} aria-hidden="true">↔</span>Drag to Explore</p>
        </div>

        <aside className={styles.industryDetail} aria-live="polite">
          <span className={styles.detailIcon} aria-hidden="true">{current.short}</span>
          <div>
            <h3>{current.name}</h3>
            <div className={styles.orangeRule} />
            <p>{current.description}</p>
          </div>
          <Link href={current.href}>View Solutions <span aria-hidden="true">→</span></Link>
        </aside>
      </div>

      <div className={styles.instructionBar} aria-label="Gallery instructions">
        <div className={styles.instruction}>
          <span className={styles.instructionSymbol}>↔</span>
          <p><strong>Mouse Drag</strong><small>Click and drag to rotate</small></p>
        </div>
        <div className={styles.instruction}>
          <span className={`${styles.instructionSymbol} ${styles.keys}`}>← →</span>
          <p><strong>Arrow Keys</strong><small>Use left and right to navigate</small></p>
        </div>
        <button
          className={`${styles.instruction} ${styles.autoToggle}`}
          type="button"
          onClick={() => !reducedMotion && setPaused((value) => !value)}
          aria-pressed={paused}
        >
          <span className={styles.instructionSymbol}>{paused ? "▶" : "↻"}</span>
          <p><strong>Auto-Rotate</strong><small>{paused ? "Paused — click to resume" : "Pauses when you interact"}</small></p>
        </button>
        <div className={styles.facePicker}>
          <p>Or Select a Face</p>
          <div>
            {galleryIndustries.map((industry, index) => (
              <button
                key={industry.name}
                type="button"
                className={`${styles.faceButton} ${index === active ? styles.active : ""}`}
                onClick={() => selectIndustry(index, true)}
                aria-label={`Select ${industry.name}`}
                aria-pressed={index === active}
              >
                {industry.short}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
