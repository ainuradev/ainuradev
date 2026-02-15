"use client";

import type { Lang } from "../page";

type LeftRailProps = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const copy = {
  en: {
    role: "Special Edition Publisher",
    intro: "Building tactile digital experiences with vintage editorial composition and modern code.",
    sections: [
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Process", href: "#process" },
      { label: "Works", href: "#works" },
      { label: "Tech", href: "#tech" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
  id: {
    role: "Penerbit Edisi Khusus",
    intro: "Membangun pengalaman digital taktil dengan komposisi editorial vintage dan kode modern.",
    sections: [
      { label: "Tentang", href: "#about" },
      { label: "Layanan", href: "#services" },
      { label: "Proses", href: "#process" },
      { label: "Karya", href: "#works" },
      { label: "Teknologi", href: "#tech" },
      { label: "Harga", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
      { label: "Kontak", href: "#contact" },
    ],
  },
};

const socials = [
  { label: "GH", href: "https://github.com/arunara8" },
  { label: "IN", href: "https://linkedin.com/in/aditya-nugraha-891932261" },
  { label: "IG", href: "https://instagram.com/sepsigmay" },
];

export default function LeftRail({ lang, setLang }: LeftRailProps) {
  const t = copy[lang];

  return (
    <aside className="newspaper-fold lg:sticky lg:top-6 lg:flex lg:h-[calc(100vh-3rem)] lg:flex-col lg:justify-between lg:py-10">
      <div>
        <a href="#" className="editorial-title text-4xl font-semibold tracking-tight md:text-5xl lg:text-4xl">
          AINURA DEV
        </a>
        <p className="mt-3 text-sm uppercase tracking-[0.14em] text-[var(--accent)]">{t.role}</p>
        <p className="newspaper-justify mt-3 max-w-sm text-[0.93rem] leading-relaxed text-[var(--ink-soft)]">{t.intro}</p>

        <nav className="mt-8 hidden space-y-3 lg:block">
          {t.sections.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex items-center gap-4 text-xs uppercase tracking-[0.14em] text-[var(--ink-soft)] transition-colors hover:text-[var(--accent)]"
            >
              <span className="h-px w-10 bg-[var(--line)] transition-all group-hover:w-16 group-hover:bg-[var(--accent)]" />
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4 lg:mt-0 lg:block lg:space-y-5">
        <div className="inline-flex items-center rounded-sm border border-[var(--line)] p-1">
          <button
            type="button"
            onClick={() => setLang("en")}
            className={`rounded-sm px-3 py-1 text-xs transition-colors ${
              lang === "en" ? "bg-[var(--accent)] text-[var(--paper)]" : "text-[var(--ink)]"
            }`}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLang("id")}
            className={`rounded-sm px-3 py-1 text-xs transition-colors ${
              lang === "id" ? "bg-[var(--accent)] text-[var(--paper)]" : "text-[var(--ink)]"
            }`}
          >
            ID
          </button>
        </div>

        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 min-w-9 items-center justify-center rounded-sm border border-[var(--line)] px-2 text-[0.65rem] tracking-[0.08em] text-[var(--ink-soft)] transition-colors hover:border-[var(--line-strong)] hover:text-[var(--accent)]"
              aria-label={social.label}
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}

