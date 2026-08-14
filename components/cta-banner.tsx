import Link from "next/link";
import { ConversationPathCards } from "@/components/conversation-path-cards";

type CtaBannerProps = {
  showCards?: boolean;
};

export function CtaBanner({ showCards = true }: CtaBannerProps) {
  return (
    <section
      className={`bg-[#E7E6DF] ${showCards ? "py-[0.55rem] sm:py-[0.825rem]" : "flex min-h-[21.25rem] items-center py-12 sm:py-[4.5rem]"}`}
    >
      <div className="mx-auto w-[calc(100%-2.125rem)] sm:w-[min(calc(100%-3rem),57.5rem)] lg:w-full lg:px-16">
        <div className={`${showCards ? "grid gap-10 lg:grid-cols-[minmax(20rem,calc((100vw-88.75rem)/2+24.5rem))_minmax(0,1fr)] lg:items-center lg:gap-12" : ""}`}>
          <div className="lg:pl-[max(0px,calc((100vw-88.75rem)/2-5rem))]">
            <p className="max-w-[34rem] text-[clamp(1.96875rem,4.5vw,4.21875rem)] font-medium leading-[0.97] tracking-[-0.055em] text-[#0C2937]">
              Start with one
              <br />
              conversation.
            </p>
            <Link
              href="/contact#contact-form"
              className="focus-ring mt-7 inline-flex min-h-12 items-center justify-center gap-5 rounded-sm bg-[#FF3300] px-6 py-3 text-sm font-black text-white shadow-[0_0.6rem_1.5rem_rgba(255,51,0,0.2)] transition hover:bg-white hover:text-black"
            >
              Schedule Consultation
            </Link>
          </div>

          {showCards ? (
            <div className="ml-auto w-full max-w-[59rem] lg:mr-16">
              <ConversationPathCards />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
