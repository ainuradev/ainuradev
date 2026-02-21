"use client";

import type { Lang } from "../page";

type HeroProps = {
  lang: Lang;
};

const copy = {
  en: {
    kicker: "DOMAIN EXPANSION",
    heading: "Infinite Void: Digital Systems Built To Dominate Attention",
    subheading: "Ainura Dev channels cursed precision into high-performance interfaces and scalable architectures.",
    description:
      "Every release is designed like a controlled domain: clear intent, fast execution, and measurable impact across product, performance, and growth.",
    authority: "Ainura Dev | Sorcerer-Class Web Engineer",
    viewWork: "View Techniques",
    workTogether: "Summon Collaboration",
  },
  id: {
    kicker: "DOMAIN EXPANSION",
    heading: "Infinite Void: Sistem Digital untuk Mendominasi Perhatian",
    subheading: "Ainura Dev menyalurkan presisi kutukan ke antarmuka berperforma tinggi dan arsitektur skalabel.",
    description:
      "Setiap rilis dirancang seperti domain terkendali: niat yang jelas, eksekusi cepat, dan dampak terukur pada produk, performa, dan pertumbuhan.",
    authority: "Ainura Dev | Web Engineer Kelas Sorcerer",
    viewWork: "Lihat Teknik",
    workTogether: "Mulai Kolaborasi",
  },
};

export default function Hero({ lang }: HeroProps) {
  const t = copy[lang];

  return (
    <section className="editorial-container py-8 md:py-10">
      <div data-reveal className="glass-card rounded-2xl p-6 md:p-8">
        <p className="kicker">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
          {t.kicker}
        </p>
        <h1 className="editorial-title mt-4 max-w-4xl text-3xl leading-tight md:text-6xl">{t.heading}</h1>
        <p className="mt-4 max-w-2xl text-base text-[var(--ink-soft)] md:text-lg">{t.subheading}</p>
        <p className="newspaper-justify mt-4 max-w-3xl text-[0.98rem] leading-relaxed text-[var(--ink-soft)]">{t.description}</p>
        <p className="mt-4 text-xs uppercase tracking-[0.14em] text-[var(--accent)]">{t.authority}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#works" className="stamp-btn">
            {t.viewWork}
          </a>
          <a href="#contact" className="stamp-btn stamp-btn-solid">
            {t.workTogether}
          </a>
        </div>
      </div>
    </section>
  );
}
