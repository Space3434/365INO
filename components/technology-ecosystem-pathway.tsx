"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";

const categories = [
  "AI & Productivity",
  "Cloud & Data",
  "Automation & Platforms",
  "Integration & Delivery",
  "Delivery Collaboration"
] as const;

const technologies = [
  { name: "Artificial Intelligence", category: "AI & Productivity", mark: "AI", brief: "Responsible AI strategy shaped around measurable operational value.", detail: "Our team and consultants translate business needs into practical AI use cases, readiness roadmaps, governance controls, and adoption plans—keeping people, risk, and measurable outcomes at the center." },
  { name: "Microsoft Copilot", category: "AI & Productivity", mark: "MC", brief: "Secure productivity enablement for the Microsoft ecosystem.", detail: "We help teams identify high-value Copilot scenarios, prepare content and permissions, establish responsible-use guidance, and support adoption across everyday knowledge-work processes." },
  { name: "GitHub Copilot", category: "AI & Productivity", mark: "GC", brief: "AI-assisted development paired with disciplined engineering practices.", detail: "Our practitioners use GitHub Copilot to accelerate routine development, testing, documentation, and code exploration while maintaining human review, security controls, and delivery standards." },
  { name: "Azure", category: "Cloud & Data", mark: "AZ", brief: "Enterprise cloud services aligned to security and mission needs.", detail: "Our team brings experience planning and supporting Azure environments, integrations, identity-aware services, data solutions, and modernization roadmaps built for scalable, governed operations." },
  { name: "AWS", category: "Cloud & Data", mark: "AW", brief: "Scalable cloud foundations for modern applications and services.", detail: "Our consultants support AWS-based solution planning, application modernization, secure service integration, and operational practices that improve resilience, scalability, and cost visibility." },
  { name: "SQL Server", category: "Cloud & Data", mark: "SQL", brief: "Reliable enterprise data foundations and actionable reporting.", detail: "We apply SQL Server experience to data modeling, integration, reporting, query optimization, and controlled access—helping teams turn operational data into dependable insight." },
  { name: "Power Platform", category: "Automation & Platforms", mark: "PP", brief: "Low-code automation that improves work without adding complexity.", detail: "Our team uses Power Apps, Power Automate, and Power BI patterns to streamline workflows, connect information, reduce manual handoffs, and provide clearer operational visibility." },
  { name: "SharePoint", category: "Automation & Platforms", mark: "SP", brief: "Structured collaboration, content management, and workflow enablement.", detail: "Our consultants organize SharePoint content, permissions, lists, and collaboration patterns so teams can find trusted information, manage work consistently, and support automation safely." },
  { name: "Pega", category: "Automation & Platforms", mark: "PG", brief: "Enterprise case management and workflow modernization.", detail: "Our professionals bring hands-on experience supporting Pega delivery, platform upgrades, integration, testing, and complex case workflows in highly governed enterprise environments." },
  { name: "ServiceNow", category: "Automation & Platforms", mark: "SN", brief: "Service workflows that create visibility, consistency, and accountability.", detail: "We help shape ServiceNow-enabled intake, routing, service management, and reporting processes that connect user needs with transparent, measurable operational delivery." },
  { name: "REST APIs", category: "Integration & Delivery", mark: "API", brief: "Secure interfaces that connect systems and reduce information silos.", detail: "Our team defines and supports RESTful integration patterns, data contracts, validation, error handling, and end-to-end testing to help enterprise services exchange information reliably." },
  { name: "DevSecOps", category: "Integration & Delivery", mark: "DS", brief: "Security integrated throughout the delivery lifecycle.", detail: "Our practitioners embed security, quality, traceability, and automation into delivery practices so teams can release with greater confidence while meeting governance expectations." },
  { name: "GitHub", category: "Integration & Delivery", mark: "GH", brief: "Collaborative source control with transparent engineering governance.", detail: "We use GitHub to support version control, peer review, issue traceability, documentation, and automated delivery practices across distributed technical teams." },
  { name: "CI/CD", category: "Integration & Delivery", mark: "CI", brief: "Repeatable delivery pipelines that improve release quality and speed.", detail: "Our team supports CI/CD practices that automate build, test, validation, and deployment steps while preserving approvals, auditability, and environment-specific controls." },
  { name: "Jira", category: "Delivery Collaboration", mark: "JR", brief: "Visible, traceable work from strategy through execution.", detail: "Our consultants structure backlogs, workflows, dependencies, and reporting in Jira to improve planning clarity, delivery transparency, and informed leadership decisions." },
  { name: "Confluence", category: "Delivery Collaboration", mark: "CF", brief: "Living project knowledge that supports alignment and continuity.", detail: "We use Confluence to organize requirements, decisions, technical guidance, meeting outcomes, and operational knowledge—creating a reliable source of truth for delivery teams." }
] as const;

export function TechnologyEcosystemPathway() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>(categories[0]);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeTechnologies = technologies.filter((technology) => technology.category === activeCategory);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveCategory((currentCategory) => {
        const currentIndex = categories.indexOf(currentCategory);
        return categories[(currentIndex + 1) % categories.length];
      });
    }, 8000);

    return () => window.clearInterval(interval);
  }, []);

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex = index;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % categories.length;
    else if (event.key === "ArrowLeft") nextIndex = (index - 1 + categories.length) % categories.length;
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = categories.length - 1;
    else return;

    event.preventDefault();
    setActiveCategory(categories[nextIndex]);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <section className="w-full overflow-hidden bg-white px-4 pb-8 pt-8 text-navy sm:px-8 lg:px-16 lg:pb-10 lg:pt-10" aria-labelledby="technology-ecosystem-heading">
      <div className="mx-auto w-full max-w-[88.75rem]">
        <header className="grid items-end gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:gap-[3.6rem]">
          <div>
            <p className="text-lg font-black uppercase tracking-[0.18em] text-[#00B0F0]">
              Technology ecosystem
            </p>
            <h2 id="technology-ecosystem-heading" className="mt-3.5 max-w-[43rem] text-balance text-[1.71rem] font-medium leading-[0.98] tracking-[-0.045em] text-navy sm:text-[2.31rem] lg:text-[2.85rem]">
              Experience that
              <br />
              connects strategy,
              <br />
              platforms, and delivery.
            </h2>
          </div>
          <div className="lg:-ml-[5rem]">
            <p className="text-base leading-7 text-black">
              365INO brings together experienced consultants and technology professionals who understand how modern platforms work in real delivery environments—not as isolated tools, but as parts of a secure, integrated operating model.
              We help organizations select, implement, govern, and improve the technologies that move priorities from concept to measurable mission and business outcomes.
            </p>
          </div>
        </header>

        <div className="mt-9 border-t border-black pt-8">
          <p className="mb-8 text-lg font-black uppercase tracking-[0.18em] text-[#00B0F0]">One connected delivery ecosystem</p>
          <div className="flex gap-2 overflow-x-auto pb-1 lg:grid lg:grid-cols-5" role="tablist" aria-label="Technology categories">
            {categories.map((category, index) => {
              const selected = category === activeCategory;
              return (
                <button
                  key={category}
                  ref={(element) => { tabRefs.current[index] = element; }}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveCategory(category)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                  className={`focus-ring flex min-h-[3.87rem] min-w-[8.78rem] items-center justify-center border-b-[3px] px-3 py-2.5 text-center text-base font-black leading-tight transition hover:-translate-y-0.5 ${selected ? "border-[#FF3300] bg-[#082D48] text-white" : "border-slate-400 bg-slate-200 text-slate-700 hover:bg-slate-300"}`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative mt-[2.7rem] grid gap-7 sm:grid-cols-2 lg:grid-cols-4" role="tabpanel" aria-live="polite">
          <span className="absolute left-[5%] right-[5%] top-[1.3rem] hidden h-0.5 bg-[#00B0F0] lg:block" aria-hidden="true" />
          {activeTechnologies.map((technology, index) => (
            <article key={technology.name} className="technology-card-in relative z-10 min-w-0" style={{ animationDelay: `${index * 55}ms` }}>
              <div className="mb-3.5 flex items-center">
                <span className="grid h-[2.86rem] w-[2.86rem] place-items-center rounded-xl border-2 border-[#00B0F0] bg-white text-[11px] font-black tracking-wide text-[#00B0F0] shadow-[0_0.45rem_1.25rem_rgba(11,80,101,0.12)]" aria-hidden="true">
                  {technology.mark}
                </span>
              </div>
              <h3 className="text-lg font-medium text-black">{technology.name}</h3>
              <p className="mt-3 min-h-[3.65rem] text-base leading-7 text-black">{technology.brief}</p>
              <details className="mt-2">
                <summary className="focus-ring w-fit cursor-pointer list-none text-[10px] font-black uppercase tracking-[0.045em] text-[#FF3300] marker:hidden">
                  Team experience <span>+</span>
                </summary>
                <p className="mt-3 text-base leading-7 text-black">{technology.detail}</p>
              </details>
            </article>
          ))}
        </div>

      </div>

      <style jsx>{`
        .technology-card-in {
          animation: technology-card-in 380ms both;
        }

        @keyframes technology-card-in {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .technology-card-in { animation: none; }
        }
      `}</style>
    </section>
  );
}
