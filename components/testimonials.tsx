const testimonials = [
  {
    quote:
      "365INO brings the right balance of strategy, delivery discipline, and practical modernization thinking.",
    name: "Enterprise Transformation Sponsor"
  },
  {
    quote:
      "The team helps leaders translate big technology goals into roadmaps, operating rhythms, and measurable action.",
    name: "Technology Program Executive"
  }
];

export function Testimonials() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {testimonials.map((testimonial) => (
        <figure key={testimonial.name} className="rounded-md border border-slate-200 bg-white p-7 shadow-sm">
          <blockquote className="text-xl font-black leading-8 text-navy">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-cyan-700">
            {testimonial.name}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
