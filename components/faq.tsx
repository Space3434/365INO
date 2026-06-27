const faqs = [
  {
    question: "Does 365INO only provide project management?",
    answer:
      "No. Enterprise delivery is one capability. 365INO focuses on technology strategy, AI transformation, automation, cloud modernization, data, and program leadership."
  },
  {
    question: "Do you work with government and commercial teams?",
    answer:
      "Yes. The firm supports mission-driven public-sector work and commercial modernization initiatives with a business-first approach."
  },
  {
    question: "Can you help identify practical AI use cases?",
    answer:
      "Yes. 365INO helps evaluate readiness, prioritize responsible use cases, and define governance and adoption plans."
  }
];

export function FAQ() {
  return (
    <div className="grid gap-4">
      {faqs.map((faq) => (
        <details key={faq.question} className="rounded-md border border-slate-200 bg-white p-5">
          <summary className="cursor-pointer text-lg font-black text-navy">{faq.question}</summary>
          <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
