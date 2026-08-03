import Image from "next/image";
import Link from "next/link";

const capabilityStatementHref = "/past-performance-client-success.png";

export function HomepageRoadmaps() {
  return (
    <section className="w-full bg-white" aria-label="Practical roadmaps and measurable outcomes">
      <div className="relative mx-auto w-full overflow-hidden md:w-[70.125%]">
        <Image
          src="/homepage-practical-roadmaps.png"
          alt="Practical roadmaps and measurable outcomes through discover, design, deliver, and improve."
          width={1672}
          height={941}
          quality={100}
          className="block h-auto w-full"
          sizes="(max-width: 767px) 100vw, 70vw"
        />

        <div
          className="absolute left-[1.8%] top-[3.1%] flex w-[10.8%] items-center bg-[#001330] px-[0.35%] py-[0.25%]"
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
          className="focus-ring absolute bottom-[12.8%] left-[64.2%] h-[4.7%] w-[15.4%] rounded-sm"
          aria-label="View the 365INO capability statement"
        >
          <span className="sr-only">View Capability Statement</span>
        </Link>

        <Link
          href={capabilityStatementHref}
          target="_blank"
          rel="noreferrer"
          className="focus-ring absolute bottom-[12.8%] right-[4.1%] h-[26.8%] w-[15.7%] rounded-full"
          aria-label="Open the 365INO capability statement preview"
        >
          <span className="sr-only">Open Capability Statement Preview</span>
        </Link>
      </div>
    </section>
  );
}
