import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { navItems } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-pad grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-md bg-cyan-500 text-lg font-black">365</span>
            <div>
              <p className="text-xl font-black">365INO</p>
              <p className="text-sm text-cyan-100">Technology That Moves Business Forward.</p>
            </div>
          </div>
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
              <Mail className="h-4 w-4 text-cyan-300" aria-hidden="true" /> info@365ino.com
            </p>
            <p className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-cyan-300" aria-hidden="true" /> Available by consultation
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-cyan-300" aria-hidden="true" /> United States
            </p>
            <a href="https://www.linkedin.com/" className="inline-flex items-center gap-2 hover:text-white">
              <Linkedin className="h-4 w-4" aria-hidden="true" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-pad text-sm text-slate-400">
          Copyright {new Date().getFullYear()} 365 Innovations Corporation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
