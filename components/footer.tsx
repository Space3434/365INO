import { Linkedin, Mail, MapPin, Phone, Printer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { companyAddressLines, companyContact } from "@/lib/contact";
import { navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="w-full px-4 pb-2 pt-5 md:px-8 xl:px-16">
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.5fr_1.1fr]">
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
              <span className="text-cyan-100">Technology That Moves Business Forward.</span> 365INO Corporation
              helps organizations modernize operations through AI, automation, cloud technologies, data insight,
              and enterprise delivery leadership.
            </p>
            <p className="mt-5 text-sm font-medium leading-6 text-cyan-100">
              UEI: YLN7PLWJGMP6 <span className="mx-2 text-cyan-300/70">|</span> CAGE: 8NW98
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

          <div className="md:pt-8">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">Quick Links</h2>
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

          <div className="md:pt-8">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">Connect</h2>
            <div className="space-y-3 text-sm text-slate-300">
              <p className="flex items-center gap-4">
                <Mail className="h-4 w-4 text-cyan-300" aria-hidden="true" /> {companyContact.email}
              </p>
              <p className="flex items-center gap-4">
                <Phone className="h-4 w-4 text-cyan-300" aria-hidden="true" /> {companyContact.phone}
              </p>
              <p className="flex items-center gap-4">
                <Printer className="h-4 w-4 text-cyan-300" aria-hidden="true" /> {companyContact.fax}
              </p>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
                <address className="not-italic leading-6">
                  {companyAddressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>
              <a href={companyContact.linkedIn} className="inline-flex items-center gap-4 hover:text-white">
                <Linkedin className="h-4 w-4 text-cyan-300" aria-hidden="true" /> LinkedIn
              </a>
            </div>
          </div>
        </div>
        <p className="mt-4 text-left text-[11px] text-[#FF3300]">
          Copyright 2026 365INO, CO. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
