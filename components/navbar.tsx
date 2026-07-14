"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/lib/content";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <nav className="container-pad flex min-h-20 items-center justify-between" aria-label="Primary navigation">
        <Link href="/" className="focus-ring flex items-center gap-3 rounded-md">
          <span className="grid h-[3.12rem] w-[10.92rem] place-items-center rounded-md px-3">
            <Image
              src="/365ino-header-logo.png"
              alt="365INO"
              width={400}
              height={125}
              priority
              className="h-auto w-full"
            />
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring rounded-md px-3 py-2 text-sm font-semibold transition ${
                  active ? "bg-cyan-50 text-cyan-800" : "text-slate-700 hover:bg-slate-100 hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/contact"
          className="focus-ring hidden rounded-md bg-navy px-5 py-3 text-sm font-bold text-white shadow-enterprise transition hover:bg-cyan-800 lg:inline-flex"
        >
          Schedule Consultation
        </Link>

        <button
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((value) => !value)}
          className="focus-ring inline-grid h-11 w-11 place-items-center rounded-md border border-slate-200 text-navy lg:hidden"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="container-pad grid gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-md px-3 py-3 text-base font-semibold text-slate-800 hover:bg-cyan-50"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
