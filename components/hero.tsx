import Image from "next/image";
import type { EditableSiteContent } from "@/lib/site-content";

const collaborationImage = "/homepage-header.png";

export function Hero({ content }: { content: EditableSiteContent["hero"] }) {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="relative h-[18.75rem] overflow-hidden sm:h-[23.75rem] lg:h-[27.5rem]">
        <Image
          src={collaborationImage}
          alt="IT professionals collaborating around laptops in a modern workplace"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/15 to-transparent" />
      </div>

      <div className="relative w-full bg-white py-10 sm:py-12 lg:py-14">
        <div className="sr-only">
          <p>{content.eyebrow}</p>
          <h1>{content.headline}</h1>
          <p>{content.subheading}</p>
        </div>
        <div className="mx-auto w-full max-w-[72rem] px-4 sm:px-8 lg:px-12">
          <div className="overflow-hidden rounded-[1.25rem] bg-white shadow-enterprise">
            <Image
              src="/homepage-measurable-impact.png"
              alt="From strategy to measurable impact through innovation and execution."
              width={1298}
              height={718}
              priority
              className="block h-auto w-full object-contain"
              sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1279px) calc(100vw - 4rem), 1152px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
