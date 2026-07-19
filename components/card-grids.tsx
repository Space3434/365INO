import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { platformIcons, technologies } from "@/lib/content";

const serviceAccentStyles = [
  {
    card: "border-cyan-200 bg-cyan-50/50 hover:border-cyan-400",
    icon: "bg-cyan-100 text-cyan-800 group-hover:bg-cyan-700"
  },
  {
    card: "border-blue-200 bg-blue-50/50 hover:border-blue-400",
    icon: "bg-blue-100 text-blue-800 group-hover:bg-blue-700"
  },
  {
    card: "border-emerald-200 bg-emerald-50/50 hover:border-emerald-400",
    icon: "bg-emerald-100 text-emerald-800 group-hover:bg-emerald-700"
  },
  {
    card: "border-sky-200 bg-sky-50/50 hover:border-sky-400",
    icon: "bg-sky-100 text-sky-800 group-hover:bg-sky-700"
  },
  {
    card: "border-teal-200 bg-teal-50/50 hover:border-teal-400",
    icon: "bg-teal-100 text-teal-800 group-hover:bg-teal-700"
  },
  {
    card: "border-indigo-200 bg-indigo-50/50 hover:border-indigo-400",
    icon: "bg-indigo-100 text-indigo-800 group-hover:bg-indigo-700"
  }
];

const industryAccentStyles = [
  {
    icon: "bg-cyan-200 text-cyan-900"
  },
  {
    icon: "bg-blue-200 text-blue-900"
  },
  {
    icon: "bg-emerald-200 text-emerald-900"
  },
  {
    icon: "bg-indigo-200 text-indigo-900"
  },
  {
    icon: "bg-sky-200 text-sky-900"
  },
  {
    icon: "bg-teal-200 text-teal-900"
  },
  {
    icon: "bg-violet-200 text-violet-900"
  },
  {
    icon: "bg-amber-200 text-amber-900"
  },
  {
    icon: "bg-rose-200 text-rose-900"
  }
];

export function ServiceCard({
  title,
  description,
  icon: Icon,
  index = 0
}: {
  title: string;
  description: string;
  icon: LucideIcon;
  index?: number;
}) {
  const accent = serviceAccentStyles[index % serviceAccentStyles.length];

  return (
    <article
      className={`group rounded-md border border-t-4 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-enterprise ${accent.card}`}
    >
      <div
        className={`mb-5 grid h-12 w-12 place-items-center rounded-md transition group-hover:text-white ${accent.icon}`}
      >
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-black text-navy">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}

export function IndustryCard({
  title,
  description,
  image,
  index = 0
}: {
  title: string;
  description: string;
  image: string;
  index?: number;
}) {
  const accent = industryAccentStyles[index % industryAccentStyles.length];

  return (
    <article
      className="group rounded-md border border-t-4 border-navy bg-white px-5 py-4 shadow-sm transition hover:-translate-y-1 hover:border-ocean hover:shadow-enterprise"
    >
      <div className={`mb-2 grid h-10 w-10 place-items-center rounded-md ${accent.icon}`}>
        <Image
          src={image}
          alt=""
          width={44}
          height={44}
          className="h-9 w-9 object-contain"
          aria-hidden="true"
        />
      </div>
      <h3 className="text-xl font-black text-navy">{title}</h3>
      <p className="mt-2 text-sm leading-5 text-slate-600">{description}</p>
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
