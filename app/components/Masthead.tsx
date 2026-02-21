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
    edition: "Web Development Chronicle",
  },
  id: {
    tabs: ["Layanan", "Karya", "Harga", "FAQ", "Kontak"],
    tabLinks: ["#services", "#works", "#pricing", "#faq", "#contact"],
    edition: "Kronik Pengembangan Web",
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
    <header className="mb-8 bg-[var(--paper)]/95 backdrop-blur-[2px]">
      <div className="masthead-inner">
        <p className="masthead-kicker">EST. 2024</p>
        <h1 className="masthead-title">AINURA DEV</h1>
        <p className="masthead-kicker">{t.edition}</p>
      </div>
      <div className="masthead-meta">
        <span>{dateLabel}</span>
        <span className="inline-flex items-center gap-2">
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex items-center rounded-sm border border-[var(--line)] px-2 py-0.5 text-[0.62rem] uppercase tracking-[0.12em] md:hidden"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
          <span className="hidden md:inline">PAGE 1 OF PORTFOLIO</span>
          <span className="inline-flex items-center rounded-sm border border-[var(--line)] p-0.5">
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`rounded-sm px-2 py-0.5 text-[0.62rem] ${lang === "en" ? "bg-[var(--accent)] text-[var(--paper)]" : "text-[var(--ink)]"}`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang("id")}
              className={`rounded-sm px-2 py-0.5 text-[0.62rem] ${lang === "id" ? "bg-[var(--accent)] text-[var(--paper)]" : "text-[var(--ink)]"}`}
            >
              ID
            </button>
          </span>
        </span>
      </div>
      <nav className={`masthead-nav ${menuOpen ? "flex" : "hidden"} md:flex`}>
        {t.tabs.map((tab, index) => (
          <a key={tab} href={t.tabLinks[index]} className="masthead-tab" onClick={() => setMenuOpen(false)}>
            {tab}
          </a>
        ))}
      </nav>
    </header>
<button
  type="button"
  onClick={() => setMenuOpen((prev) => !prev)}
  className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--accent)] bg-[var(--paper)] shadow-[0_0_15px_rgba(100,255,218,0.4)] md:hidden"
>
  <div className="relative h-6 w-6">
    <span className={`absolute top-1/2 block h-0.5 w-6 -translate-y-1/2 bg-[var(--accent)] transition-all duration-300 ${menuOpen ? "rotate-45" : ""}`}></span>
    <span className={`absolute left-1/2 block h-6 w-0.5 -translate-x-1/2 bg-[var(--accent)] transition-all duration-300 ${menuOpen ? "rotate-90" : ""}`}></span>
  </div>
</button>
</>
  );
}
