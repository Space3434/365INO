export function CaseStudyCard({
  title,
  challenge,
  solution,
  outcome,
  metrics
}: {
  title: string;
  challenge: string;
  solution: string;
  outcome: string;
  metrics: string[];
}) {
  return (
    <article className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-2xl font-black text-navy">{title}</h3>
      <div className="mt-6 grid gap-5">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-cyan-700">Challenge</p>
          <p className="mt-2 text-sm leading-7 text-slate-600">{challenge}</p>
        </div>
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-cyan-700">Solution</p>
          <p className="mt-2 text-sm leading-7 text-slate-600">{solution}</p>
        </div>
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-cyan-700">Business Outcome</p>
          <p className="mt-2 text-sm leading-7 text-slate-600">{outcome}</p>
        </div>
      </div>
      <div className="mt-6 grid gap-2">
        {metrics.map((metric) => (
          <span key={metric} className="rounded-md bg-cyan-50 px-3 py-2 text-sm font-bold text-cyan-900">
            {metric}
          </span>
        ))}
      </div>
    </article>
  );
}
