"use client";

import { useState } from "react";
import type { Lang } from "../page";

type MastheadProps = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const copy = {
  en: {
    tabs: ["Services", "Works", "Pricing", "FAQ", "Contact"],
    tabLinks: ["#services", "#works", "#pricing", "#faq", "#contact"],
    edition: "Cursed Engineering Archive",
  },
  id: {
    tabs: ["Layanan", "Karya", "Harga", "FAQ", "Kontak"],
    tabLinks: ["#services", "#works", "#pricing", "#faq", "#contact"],
    edition: "Arsip Rekayasa Kutukan",
  },
};

function formatVintageDate(lang: Lang) {
  const locale = lang === "id" ? "id-ID" : "en-US";
  const today = new Date();
  return today.toLocaleDateString(locale, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Masthead({ lang, setLang }: MastheadProps) {
  const t = copy[lang];
  const dateLabel = formatVintageDate(lang);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="masthead glass-card mb-5">
        <div className="masthead-inner">
          <p className="masthead-kicker">EST. 2024</p>
          <h1 className="masthead-title">ainura dev</h1>
          <p className="masthead-kicker">{t.edition}</p>
        </div>

        <div className="masthead-meta">
          <span>{dateLabel}</span>
          <span className="inline-flex items-center gap-2">
            <span className="hidden md:inline">DOMAIN STATUS: STABLE</span>
            <span className="inline-flex items-center rounded-full border border-[var(--line)] p-0.5">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`rounded-full px-2 py-0.5 text-[0.62rem] ${lang === "en" ? "bg-[var(--accent)] text-[#06080d]" : "text-[var(--ink)]"}`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang("id")}
                className={`rounded-full px-2 py-0.5 text-[0.62rem] ${lang === "id" ? "bg-[var(--accent)] text-[#06080d]" : "text-[var(--ink)]"}`}
              >
                ID
              </button>
            </span>
          </span>
        </div>

        <nav className="masthead-nav hidden md:flex">
          {t.tabs.map((tab, index) => (
            <a key={tab} href={t.tabLinks[index]} className="masthead-tab">
              {tab}
            </a>
          ))}
        </nav>
      </header>

      <div className="fixed right-5 top-4 z-[130] md:hidden">
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--paper)] shadow-[0_10px_28px_rgba(0,0,0,0.42)]"
          aria-expanded={menuOpen}
          aria-controls="masthead-mobile-nav"
          aria-label="Toggle navigation menu"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 block h-[2px] w-5 bg-[var(--ink)] transition-all duration-200 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] block h-[2px] w-5 bg-[var(--ink)] transition-all duration-200 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] block h-[2px] w-5 bg-[var(--ink)] transition-all duration-200 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>

        <nav
          id="masthead-mobile-nav"
          className={`absolute right-0 top-12 z-[119] w-44 rounded-xl border border-[var(--line)] bg-[var(--paper)] p-2 shadow-[0_12px_30px_rgba(0,0,0,0.2)] transition-all duration-200 ${
            menuOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
          } flex flex-col`}
        >
          {t.tabs.map((tab, index) => (
            <a
              key={`mobile-${tab}`}
              href={t.tabLinks[index]}
              className="block rounded-md px-2 py-1.5 text-[0.66rem] uppercase tracking-[0.13em] text-[var(--ink-soft)] hover:text-[var(--accent)]"
              onClick={() => setMenuOpen(false)}
            >
              {tab}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
