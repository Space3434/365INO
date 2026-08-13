import Image from "next/image";
import Link from "next/link";

const capabilityStatementHref = "/past-performance-client-success.png";

export function HomepageRoadmaps() {
  return (
    <section className="w-full bg-[#020b1c]" aria-label="Practical roadmaps and measurable outcomes">
      <div className="relative mx-auto w-full overflow-hidden">
        <Image
          src="/homepage-practical-roadmaps-v7.png"
          alt="Practical roadmaps and measurable outcomes through discover, design, deliver, and improve."
          width={1824}
          height={862}
          unoptimized
          className="block h-auto w-full"
          sizes="100vw"
        />

        <Link
          href={capabilityStatementHref}
          target="_blank"
          rel="noreferrer"
          className="focus-ring absolute bottom-[7.5%] right-[2.4%] h-[15.2%] w-[31.6%] rounded-sm"
          aria-label="View the 365INO capability statement"
        >
          <span className="sr-only">View Capability Statement</span>
        </Link>
      </div>
    </section>
  );
}
