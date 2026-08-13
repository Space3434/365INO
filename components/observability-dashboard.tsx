"use client";

import { useState } from "react";
import styles from "./observability-dashboard.module.css";

const cases = [
  {
    title: "AI Readiness Roadmap",
    meta: "resolved · public sector",
    issue:
      "A public-sector organization needed a pragmatic path to evaluate AI opportunities without increasing operational risk.",
    fix: "Structured discovery workshops, prioritized use cases, and a sequenced adoption roadmap.",
    result:
      "Clear direction and aligned stakeholders to move from exploration to execution.",
  },
  {
    title: "Enterprise Portfolio Visibility",
    meta: "resolved · enterprise PMO",
    issue:
      "Executives lacked consistent insight into program health, blockers, dependencies, and delivery tradeoffs.",
    fix: "Right-sized PMO operating model, reporting cadence, and executive dashboard framework.",
    result:
      "Improved portfolio transparency and decision-making across the enterprise.",
  },
  {
    title: "Cloud Workflow Modernization",
    meta: "resolved · IT operations",
    issue:
      "Manual request routing and legacy collaboration patterns were slowing service delivery.",
    fix: "Process mapping, low-code automation, and secure data practices.",
    result:
      "Streamlined workflows and better collaboration across teams and systems.",
  },
];

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <line x1="20" y1="20" x2="15.5" y2="15.5" />
    </svg>
  );
}

export function ObservabilityDashboard() {
  const [openCase, setOpenCase] = useState<number | null>(null);

  return (
    <section className={styles.section} aria-labelledby="engagement-monitor-title">
      <div className={styles.inner}>
        <div className={styles.topbar}>
          <div className={styles.brand}>
            <span className={styles.pulse} />
            365INO / Engagement Monitor
          </div>
          <div className={styles.statusRow}>
            <div>UPTIME <b>99.98%</b></div>
            <div>ACTIVE PROGRAMS <b>12</b></div>
            <div>STATUS <b>ALL SYSTEMS NOMINAL</b></div>
          </div>
        </div>

        <h2 id="engagement-monitor-title" className={styles.title}>
          Practical roadmaps. <span className={styles.titleAccent}>Measurable outcomes.</span>
        </h2>
        <p className={styles.sub}>
          365INO helps federal and commercial organizations align strategy, technology, delivery, and adoption to create measurable progress — turning clarity into action with roadmaps built to deliver.
        </p>

        <div className={styles.metrics}>
          <article className={styles.metric}>
            <div className={styles.label}><span className={styles.icon}><SearchIcon /></span>01 · Discover</div>
            <h3>Mission &amp; Stakeholders</h3>
            <p>Needs, priorities, existing systems, and measurable outcomes.</p>
          </article>
          <article className={styles.metric}>
            <div className={styles.label}><span className={styles.icon}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M4 15l4-4 3 3 5-6 4 5" /></svg></span>02 · Design</div>
            <h3>Roadmap &amp; Architecture</h3>
            <p>Operating model and delivery governance shaped.</p>
          </article>
          <article className={styles.metric}>
            <div className={styles.label}><span className={styles.icon}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="2" y="9" width="12" height="8" rx="1.5" /><path d="M14 12h4l3 3v2h-7z" /></svg></span>03 · Deliver</div>
            <h3>Focused Increments</h3>
            <p>Transparent decisions, risk management, adoption.</p>
          </article>
          <article className={styles.metric}>
            <div className={styles.label}><span className={styles.icon}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M3 17l6-6 4 4 8-9" /></svg></span>04 · Improve</div>
            <h3>Measured Value</h3>
            <p>Refine workflows, strengthen controls, expand.</p>
            <svg className={styles.spark} viewBox="0 0 120 26" aria-hidden="true"><path d="M0,20 L15,17 L30,19 L45,10 L60,13 L75,6 L90,9 L105,3 L120,5" /></svg>
          </article>
        </div>

        <div className={styles.casesRow}>
          {cases.map((item, index) => {
            const isOpen = openCase === index;
            return (
              <article className={`${styles.case} ${isOpen ? styles.open : ""}`} key={item.title}>
                <button className={styles.caseButton} type="button" onClick={() => setOpenCase(isOpen ? null : index)} aria-expanded={isOpen}>
                  <span className={styles.statusDot} />
                  <span className={styles.caseHeading}>{item.title}</span>
                  <svg className={styles.chevron} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M6 9l6 6 6-6" /></svg>
                </button>
                <div className={styles.caseMeta}>{item.meta}</div>
                <div className={styles.detail} aria-hidden={!isOpen}>
                  <div className={`${styles.detailRow} ${styles.issue}`}><span>issue</span><p>{item.issue}</p></div>
                  <div className={`${styles.detailRow} ${styles.fix}`}><span>fix</span><p>{item.fix}</p></div>
                  <div className={`${styles.detailRow} ${styles.result}`}><span>result</span><p>{item.result}</p></div>
                </div>
              </article>
            );
          })}
        </div>

        <div className={styles.capabilityBanner}>
          <div className={styles.capabilityIcon}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" /></svg></div>
          <div className={styles.capabilityText}>
            <div className={styles.capabilityLabel}>Capability Statement</div>
            <h3>Preview the 365INO capability statement.</h3>
            <p>Services, differentiators, business information, and delivery experience in one overview report.</p>
          </div>
          <a className={styles.capabilityButton} href="/365ino-capability-statement.pdf" target="_blank" rel="noreferrer">Export Report ↓</a>
        </div>
      </div>
    </section>
  );
}
