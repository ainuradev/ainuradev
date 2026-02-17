"use client";

import { useState } from "react";
import type { Lang } from "../page";

type NavbarProps = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const menu = {
  en: [
    { label: "Services", href: "#services" },
    { label: "Works", href: "#works" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
  id: [
    { label: "Layanan", href: "#services" },
    { label: "Karya", href: "#works" },
    { label: "Harga", href: "#pricing" },
    { label: "Kontak", href: "#contact" },
  ],
};

const socials = [
  { label: "IG", href: "https://instagram.com/sepsigmay" },
  { label: "IN", href: "https://linkedin.com/in/aditya-nugraha-891932261" },
  { label: "GH", href: "https://github.com/arunara8" },
];

function SocialIcon({ label }: { label: string }) {
  if (label === "IG") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.7A4.05 4.05 0 0 0 3.7 7.75v8.5A4.05 4.05 0 0 0 7.75 20.3h8.5a4.05 4.05 0 0 0 4.05-4.05v-8.5a4.05 4.05 0 0 0-4.05-4.05h-8.5ZM12 6.95A5.05 5.05 0 1 1 6.95 12 5.06 5.06 0 0 1 12 6.95Zm0 1.7A3.35 3.35 0 1 0 15.35 12 3.35 3.35 0 0 0 12 8.65Zm5.4-3.05a1.2 1.2 0 1 1-1.2 1.2 1.2 1.2 0 0 1 1.2-1.2Z" />
      </svg>
    );
  }

  if (label === "IN") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M5.4 3.5A1.9 1.9 0 1 1 3.5 5.4 1.9 1.9 0 0 1 5.4 3.5ZM3.8 8.2h3.2v12H3.8Zm5.1 0H12v1.7h.1A3.4 3.4 0 0 1 15.2 8c3.3 0 3.9 2.2 3.9 5v7.2H16V13.8c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3v6.5H8.9Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M12 2A10 10 0 0 0 8.84 21.5c.5.09.68-.22.68-.49v-1.72c-2.78.6-3.37-1.18-3.37-1.18a2.65 2.65 0 0 0-1.11-1.47c-.91-.62.07-.61.07-.61a2.1 2.1 0 0 1 1.53 1 2.14 2.14 0 0 0 2.92.83 2.16 2.16 0 0 1 .64-1.35c-2.22-.25-4.55-1.11-4.55-4.93a3.86 3.86 0 0 1 1-2.68 3.58 3.58 0 0 1 .1-2.64s.84-.27 2.75 1a9.45 9.45 0 0 1 5 0c1.91-1.29 2.75-1 2.75-1a3.58 3.58 0 0 1 .1 2.64 3.86 3.86 0 0 1 1 2.68c0 3.83-2.33 4.68-4.56 4.92a2.43 2.43 0 0 1 .69 1.89V21c0 .27.18.59.69.49A10 10 0 0 0 12 2Z" />
    </svg>
  );
}

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(10,25,47,0.84)] backdrop-blur-md">
      <div className="editorial-container relative py-2">
        <div className="grid items-center gap-3 md:grid-cols-[1fr_auto_1fr]">
          <div className="hidden items-center gap-1.5 md:flex">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[var(--line)] text-xs text-[var(--ink-soft)] transition-colors hover:border-[var(--line-strong)] hover:text-[#64ffda]"
                aria-label={social.label}
                title={social.label}
              >
                <SocialIcon label={social.label} />
              </a>
            ))}
          </div>

          <a
            href="#"
            className="editorial-title justify-self-start pr-10 text-left text-xl tracking-tight text-[var(--ink)] md:justify-self-auto md:pr-0 md:text-center md:text-2xl"
          >
            AINURA DEV
          </a>

          <div className="hidden justify-end md:flex">
            <div className="inline-flex items-center rounded-full border border-[var(--line)] p-0.5">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`rounded-full px-2.5 py-0.5 text-[0.7rem] transition-colors ${
                  lang === "en" ? "bg-[#64ffda] text-[#0a192f]" : "text-[var(--ink)]"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("id")}
                className={`rounded-full px-2.5 py-0.5 text-[0.7rem] transition-colors ${
                  lang === "id" ? "bg-[#64ffda] text-[#0a192f]" : "text-[var(--ink)]"
                }`}
              >
                ID
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="absolute right-4 top-2.5 inline-flex h-8 w-8 items-center justify-center rounded-md border border-[var(--line-strong)] bg-[rgba(17,34,64,0.88)] p-0 text-xs text-[var(--ink)] md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? "X" : "|||"}
          </button>
        </div>

        <div className="mt-2 hidden items-center justify-center gap-5 border-t border-[var(--line)] pt-2 text-xs uppercase tracking-[0.16em] md:flex">
          {menu[lang].map((item) => (
            <a key={item.href} href={item.href} className="text-[var(--ink-soft)] transition-colors hover:text-[#64ffda]">
              {item.label}
            </a>
          ))}
        </div>

        {open && (
          <div className="mt-2 space-y-1.5 border-t border-[var(--line)] pt-2 md:hidden">
            {menu[lang].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-1.5 text-sm text-[var(--ink-soft)] transition-colors hover:bg-[rgba(100,255,218,0.1)] hover:text-[#64ffda]"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center justify-between px-3 pt-1.5">
              <div className="inline-flex items-center rounded-full border border-[var(--line)] p-0.5">
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`rounded-full px-2.5 py-0.5 text-[0.7rem] ${lang === "en" ? "bg-[#64ffda] text-[#0a192f]" : "text-[var(--ink)]"}`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLang("id")}
                  className={`rounded-full px-2.5 py-0.5 text-[0.7rem] ${lang === "id" ? "bg-[#64ffda] text-[#0a192f]" : "text-[var(--ink)]"}`}
                >
                  ID
                </button>
              </div>
              <div className="flex items-center gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-[var(--line)] text-xs text-[var(--ink-soft)]"
                    aria-label={social.label}
                    title={social.label}
                  >
                    <SocialIcon label={social.label} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
