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
        <figure
          key={testimonial.name}
          className="rounded-md border border-cyan-200 bg-gradient-to-br from-white to-cyan-50/70 p-7 shadow-sm"
        >
          <blockquote className="text-xl font-black leading-8 text-navy">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-5 border-t border-cyan-200 pt-4 text-sm font-black uppercase tracking-[0.16em] text-cyan-700">
            {testimonial.name}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
