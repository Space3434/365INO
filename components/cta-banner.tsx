import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ConversationPathCards } from "@/components/conversation-path-cards";

export function CtaBanner() {
  return (
    <section className="bg-[#E7E6DF] py-8 sm:py-10">
      <div className="mx-auto w-[calc(100%-2.125rem)] sm:w-[min(calc(100%-3rem),57.5rem)] lg:w-[min(88.75rem,calc(100%-6rem))]">
        <div className="grid gap-10 lg:grid-cols-[0.31fr_0.69fr] lg:items-center lg:gap-12">
          <div>
            <p className="max-w-[34rem] text-[clamp(1.96875rem,4.5vw,4.21875rem)] font-medium leading-[0.97] tracking-[-0.055em] text-[#0C2937]">
              Start with one
              <br />
              conversation.
            </p>
            <Link
              href="/contact#contact-form"
              className="focus-ring mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-sm bg-[#FF3300] px-6 py-3 text-sm font-black text-white shadow-[0_0.6rem_1.5rem_rgba(255,51,0,0.2)] transition hover:bg-[#E62E00]"
            >
              Schedule Consultation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <ConversationPathCards />
        </div>
      </div>
    </section>
  );
}
