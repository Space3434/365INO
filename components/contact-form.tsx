export function ContactForm() {
  return (
    <form className="grid gap-4 rounded-md border border-slate-200 bg-white p-6 shadow-sm" aria-label="Contact form">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          First name
          <input className="focus-ring rounded-md border border-slate-300 px-4 py-3 font-normal" name="firstName" />
        </label>
        <label className="grid gap-2 text-sm font-bold text-slate-700">
          Last name
          <input className="focus-ring rounded-md border border-slate-300 px-4 py-3 font-normal" name="lastName" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-bold text-slate-700">
        Work email
        <input className="focus-ring rounded-md border border-slate-300 px-4 py-3 font-normal" name="email" type="email" />
      </label>
      <label className="grid gap-2 text-sm font-bold text-slate-700">
        Organization
        <input className="focus-ring rounded-md border border-slate-300 px-4 py-3 font-normal" name="organization" />
      </label>
      <label className="grid gap-2 text-sm font-bold text-slate-700">
        What can we help you modernize?
        <textarea
          className="focus-ring min-h-36 rounded-md border border-slate-300 px-4 py-3 font-normal"
          name="message"
        />
      </label>
      <button
        type="submit"
        className="focus-ring rounded-md bg-navy px-5 py-3 text-sm font-black text-white transition hover:bg-cyan-800"
      >
        Submit Inquiry
      </button>
    </form>
  );
}
