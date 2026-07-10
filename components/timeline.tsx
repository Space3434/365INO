import { processSteps } from "@/lib/content";

const stepLabels = ["One", "Two", "Three", "Four"];

export function Timeline() {
  return (
    <div className="grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {processSteps.map((step, index) => (
        <article
          key={step.title}
          className="min-h-56 w-full max-w-56 justify-self-center rounded-md border border-navy bg-navy p-6 shadow-sm"
        >
          <h3 className="whitespace-nowrap text-lg font-black text-white">
            {stepLabels[index]}: {step.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-100">{step.description}</p>
        </article>
      ))}
    </div>
  );
}
