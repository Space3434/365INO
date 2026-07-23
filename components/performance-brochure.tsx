import Image from "next/image";
import { Maximize2 } from "lucide-react";

export function PerformanceBrochure() {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm lg:p-7">
      <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-cyan-700">
            Past performance
          </p>
          <h3 className="text-3xl font-black tracking-tight text-navy">
            A brochure-style snapshot of representative delivery experience.
          </h3>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            This overview gives visitors a quick visual reference for 365INO&apos;s project history, client
            types, demonstrated capabilities, and business outcomes across government, nonprofit, and
            commercial environments.
          </p>
        </div>
        <a
          href="/past-performance-client-success.png"
          target="_blank"
          rel="noreferrer"
          className="focus-ring group relative mx-auto block aspect-[2/3] w-full max-w-[19.5rem] overflow-hidden rounded-md border border-slate-200 bg-slate-50 shadow-md transition hover:-translate-y-1 hover:border-cyan-400 hover:shadow-enterprise"
          aria-label="Open the 365INO past performance and client success brochure image"
        >
          <Image
            src="/past-performance-client-success.png"
            alt="365INO past performance and client success brochure"
            width={1024}
            height={1536}
            className="h-full w-full object-cover"
            sizes="(min-width: 1024px) 281px, 312px"
          />
          <span className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-md bg-navy text-white shadow-md transition group-hover:bg-cyan-600">
            <Maximize2 className="h-5 w-5" aria-hidden="true" />
          </span>
        </a>
      </div>
    </div>
  );
}
