import Image from "next/image";

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
          className="focus-ring block overflow-hidden rounded-md border border-slate-200 bg-slate-50"
          aria-label="Open the 365INO past performance and client success brochure image"
        >
          <Image
            src="/past-performance-client-success.png"
            alt="365INO past performance and client success brochure"
            width={1024}
            height={1536}
            className="h-auto w-full"
          />
        </a>
      </div>
    </div>
  );
}
