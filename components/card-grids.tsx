import type { LucideIcon } from "lucide-react";
import { platformIcons, technologies } from "@/lib/content";

export function ServiceCard({
  title,
  description,
  icon: Icon
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <article className="group rounded-md border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-enterprise">
      <div className="mb-5 grid h-12 w-12 place-items-center rounded-md bg-cyan-50 text-cyan-700 transition group-hover:bg-navy group-hover:text-white">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-black text-navy">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}

export function TechnologyGrid() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {technologies.map((tech, index) => {
        const Icon = platformIcons[index % platformIcons.length];
        return (
          <div key={tech} className="flex items-center gap-3 rounded-md border border-slate-200 bg-white p-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-skyglass text-cyan-800">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-sm font-bold text-slate-800">{tech}</span>
          </div>
        );
      })}
    </div>
  );
}
