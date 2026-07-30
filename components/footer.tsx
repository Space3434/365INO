import { Linkedin, Mail, MapPin, Phone, Printer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { companyAddressLines, companyContact } from "@/lib/contact";
import { navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="w-full px-4 pb-2 pt-5 md:px-8 xl:px-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-[1.2fr_0.65fr_0.95fr_1fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <Image
                src="/365ino-footer-logo.png"
                alt="365INO"
                width={400}
                height={125}
                className="h-auto w-[10.67rem]"
              />
            </div>
            <p className="max-w-xl text-sm leading-7 text-slate-300">
              <span className="font-bold text-white">Technology That Moves Business Forward.</span> 365INO Corporation
              helps organizations modernize operations through AI, automation, cloud technologies, data insight,
              and enterprise delivery leadership.
            </p>
            <p className="mt-5 text-sm font-medium leading-6 text-[#00B0F0]">
              UEI: YLN7PLWJGMP6 <span className="mx-2">|</span> CAGE: 8NW98
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="flex h-14 w-36 items-center justify-center rounded-md bg-white p-2.5">
                <Image
                  src="/pmi-logo.png"
                  alt="Project Management Institute"
                  width={483}
                  height={161}
                  className="max-h-full w-auto max-w-full object-contain"
                />
              </div>
              <div className="flex h-14 w-36 items-center justify-center rounded-md bg-white p-2.5">
                <Image
                  src="/iiba-logo.png"
                  alt="IIBA"
                  width={238}
                  height={99}
                  className="max-h-full w-auto max-w-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="md:pt-8 lg:justify-self-center">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#00B0F0]">Quick Links</h2>
            <div className="grid grid-cols-[max-content_max-content] gap-x-12 gap-y-3 text-sm text-slate-300">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${index % 2 === 1 ? "text-[13px]" : ""} hover:text-white`}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy
              </Link>
              <Link href="/terms-of-use" className="text-[13px] hover:text-white">
                Terms
              </Link>
            </div>
          </div>

          <div className="md:pt-8 lg:justify-self-center">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#00B0F0]">Connect</h2>
            <div className="space-y-3 text-sm text-slate-300">
              <p className="flex items-center gap-4">
                <Mail className="h-4 w-4 text-[#00B0F0]" aria-hidden="true" /> {companyContact.email}
              </p>
              <p className="flex items-center gap-4">
                <Phone className="h-4 w-4 text-[#00B0F0]" aria-hidden="true" /> {companyContact.phone}
              </p>
              <p className="flex items-center gap-4">
                <Printer className="h-4 w-4 text-[#00B0F0]" aria-hidden="true" /> {companyContact.fax}
              </p>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#00B0F0]" aria-hidden="true" />
                <address className="not-italic leading-6">
                  {companyAddressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
              <a href={companyContact.linkedIn} className="inline-flex items-center gap-4 hover:text-white">
                <Linkedin className="h-4 w-4 text-[#00B0F0]" aria-hidden="true" /> LinkedIn
              </a>
            </div>
          </div>

          <div className="md:pt-8">
            <h3 className="mb-2 text-sm font-black text-[#00B0F0]">Stay Connected With Us!</h3>
            <form
              action="/contact"
              method="get"
              className="flex w-full max-w-sm flex-col gap-2 sm:flex-row"
              aria-label="Stay connected by email"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="Enter your email address"
                className="focus-ring min-h-10 min-w-0 flex-1 rounded-md border border-white/20 bg-white px-3 text-sm text-navy placeholder:text-slate-500"
              />
              <button
                type="submit"
                className="focus-ring min-h-10 rounded-md bg-[#00B0F0] px-4 text-sm font-black text-navy transition hover:bg-[#00B0F0]/80"
              >
                Connect
              </button>
            </form>
          </div>
        </div>
        <p className="mt-4 text-left text-[9px] text-white">
          Copyright 2026 365INO, CO. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
