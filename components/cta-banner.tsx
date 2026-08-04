import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CtaBanner() {
  return (
    <section className="bg-white pb-10 pt-12 sm:pb-12 sm:pt-14">
      <div className="container-pad">
        <div className="grid gap-10 lg:grid-cols-[0.25fr_0.75fr] lg:gap-14">
          <div className="border-t-4 border-[#FF3300] pt-6">
            <p className="max-w-[11rem] text-base font-black uppercase leading-tight tracking-[0.14em] text-navy">
              Start with one
              <br />
              conversation.
            </p>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FF3300]">Collaborate with 365INO</p>
            <h2 className="mt-4 text-balance text-3xl font-black tracking-tight text-navy sm:text-4xl">
              Let&apos;s Build What&apos;s Next—Together
            </h2>
            <p className="mt-5 max-w-4xl text-base leading-7 text-slate-600">
              Whether you&apos;re exploring a new initiative, seeking a trusted business partner, or ready to bring a
              promising idea to life, we&apos;d love to hear from you. 365INO provides the strategy, technology
              expertise, and execution support needed to transform ideas into practical, measurable outcomes.
            </p>
            <p className="mt-6 text-base leading-7 text-slate-600">
              Start a conversation with us today and discover what we can accomplish together.
            </p>
            <Link
              href="/contact#contact-form"
              className="focus-ring mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-sm bg-[#FF3300] px-6 py-3 text-sm font-black text-white shadow-[0_0.6rem_1.5rem_rgba(255,51,0,0.2)] transition hover:bg-[#E62E00]"
            >
              Schedule Consultation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
