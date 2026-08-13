import Image from "next/image";
import Link from "next/link";

const capabilityStatementHref = "/past-performance-client-success.png";

export function HomepageRoadmaps() {
  return (
    <section
      className="w-full bg-navy bg-[url('/practical-roadmaps-section-background.png')] bg-cover bg-center bg-no-repeat"
      aria-label="Practical roadmaps and measurable outcomes"
    >
      <div className="relative mx-auto w-full overflow-hidden border-x-[3px] border-b-[3px] border-t-[24px] border-navy md:w-[74.68%]">
        <Image
          src="/homepage-practical-roadmaps-hd.png"
          alt="Practical roadmaps and measurable outcomes through discover, design, deliver, and improve."
          width={3344}
          height={1882}
          unoptimized
          className="block h-auto w-full md:w-[93.9%]"
          sizes="(max-width: 767px) 100vw, 70vw"
        />

        <span className="pointer-events-none absolute bottom-[7.2%] left-[30.38%] right-0 top-0 hidden bg-navy md:block" aria-hidden="true" />

        <Image
          src="/homepage-practical-roadmaps-hd.png"
          alt=""
          width={3344}
          height={1882}
          unoptimized
          className="pointer-events-none absolute left-[6.1%] top-0 hidden h-auto w-[93.9%] [clip-path:inset(0_0_7.2%_32.35%)] md:block"
          sizes="70vw"
          aria-hidden="true"
        />

        <div
          className="absolute left-[1.69%] top-[3.1%] flex w-[10.14%] items-center bg-[#001330] px-[0.35%] py-[0.25%]"
          aria-hidden="true"
        >
          <Image
            src="/homepage-roadmaps-logo.png"
            alt=""
            width={400}
            height={125}
            className="h-auto w-full object-contain"
          />
        </div>

        <Link
          href={capabilityStatementHref}
          target="_blank"
          rel="noreferrer"
          className="focus-ring absolute bottom-[12.8%] left-[66.38%] h-[4.7%] w-[14.46%] rounded-sm"
          aria-label="View the 365INO capability statement"
        >
          <span className="sr-only">View Capability Statement</span>
        </Link>

        <Link
          href={capabilityStatementHref}
          target="_blank"
          rel="noreferrer"
          className="focus-ring absolute bottom-[12.8%] right-[3.85%] h-[26.8%] w-[14.74%] rounded-full"
          aria-label="Open the 365INO capability statement preview"
        >
          <span className="sr-only">Open Capability Statement Preview</span>
        </Link>
      </div>
    </section>
  );
}
