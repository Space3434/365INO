import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";

export function CtaBanner() {
  return (
    <section className="bg-white py-16">
      <div className="container-pad">
        <div className="grid items-center gap-8 rounded-md bg-navy p-8 text-white shadow-enterprise md:grid-cols-[1fr_auto] md:p-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-200">Ready to modernize</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Build an AI-ready operating model with enterprise discipline.
            </h2>
            <p className="mt-4 max-w-3xl text-slate-300">
              Start with a focused consultation to identify the initiatives, controls, and capabilities that can
              create near-term value.
            </p>
          </div>
          <ButtonLink href="/contact" variant="light">
            <span className="inline-flex items-center gap-2">
              Schedule Consultation <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </span>
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
