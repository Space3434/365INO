export function PageHero({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white">
      <div className="absolute inset-0 bg-mesh-grid subtle-grid opacity-30" aria-hidden="true" />
      <div className="container-pad relative">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-200">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-balance text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{description}</p>
      </div>
    </section>
  );
}
