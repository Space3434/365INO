import { processSteps } from "@/lib/content";

export function Timeline() {
  return (
    <div className="grid gap-4 lg:grid-cols-4">
      {processSteps.map((step, index) => (
        <article key={step.title} className="rounded-md border border-navy bg-navy p-6 shadow-sm">
          <p className="mb-4 text-sm font-black text-cyan-700">0{index + 1}</p>
          <h3 className="text-xl font-black text-white">{step.title}</h3>
          <p className="mt-3 text-sm leading-7 text-slate-100">{step.description}</p>
        </article>
      ))}
    </div>
  );
}
