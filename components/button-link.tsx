import Link from "next/link";
import type { ReactNode } from "react";

export function ButtonLink({
  href,
  children,
  variant = "primary"
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
}) {
  const styles = {
    primary: "bg-navy text-white hover:bg-cyan-800",
    secondary: "border border-slate-300 bg-white text-navy hover:border-cyan-500 hover:bg-cyan-50",
    light: "bg-white text-navy hover:bg-cyan-50"
  };

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-[44px] items-center justify-center rounded-md px-5 py-3 text-sm font-black shadow-sm transition ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
