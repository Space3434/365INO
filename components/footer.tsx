import { Linkedin, Mail, MapPin, Phone, Printer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { companyAddressLines, companyContact } from "@/lib/contact";
import { navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-pad grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <Image
              src="/365ino-logo.png"
              alt="365INO"
              width={614}
              height={137}
              className="h-auto w-44"
            />
          </div>
          <p className="mb-4 text-sm text-cyan-100">Technology That Moves Business Forward.</p>
          <p className="max-w-xl text-sm leading-7 text-slate-300">
            365 Innovations Corporation helps organizations modernize operations through AI, automation,
            cloud technologies, data insight, and enterprise delivery leadership.
          </p>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">Quick Links</h2>
          <div className="grid grid-cols-2 gap-3 text-sm text-slate-300">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms-of-use" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-cyan-200">Connect</h2>
          <div className="space-y-3 text-sm text-slate-300">
            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-cyan-300" aria-hidden="true" /> {companyContact.email}
            </p>
            <p className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-cyan-300" aria-hidden="true" /> {companyContact.phone}
            </p>
            <p className="flex items-center gap-3">
              <Printer className="h-4 w-4 text-cyan-300" aria-hidden="true" /> {companyContact.fax}
            </p>
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
              <address className="not-italic leading-6">
                {companyAddressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>
            <a href={companyContact.linkedIn} className="inline-flex items-center gap-3 hover:text-white">
              <Linkedin className="h-4 w-4 text-cyan-300" aria-hidden="true" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-pad text-sm text-slate-400">
          Copyright {new Date().getFullYear()} 365INO, CO. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
