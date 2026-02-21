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
    quote: "Technique without discipline is noise. Discipline with technique becomes inevitability.",
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
    quote: "Teknik tanpa disiplin hanyalah bising. Disiplin dengan teknik menjadi keniscayaan.",
    authority: "Ainura Dev | Web Engineer Kelas Sorcerer",
    viewWork: "Lihat Teknik",
    workTogether: "Mulai Kolaborasi",
  },
};

export default function Hero({ lang }: HeroProps) {
  const t = copy[lang];

  return (
    <section className="editorial-container py-8 md:py-10">
      <div className="grid gap-4 lg:grid-cols-[1.3fr,0.7fr]">
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

        <aside className="space-y-4" data-reveal>
          <div className="glass-card rounded-2xl p-5">
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--ink-soft)]">Cursed Principle</p>
            <p className="editorial-title mt-2 text-xl leading-tight md:text-2xl">&ldquo;{t.quote}&rdquo;</p>
          </div>
          <div className="glass-card rounded-2xl p-5">
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--ink-soft)]">Energy Signature</p>
            <div className="mt-3 h-24 rounded-xl bg-[radial-gradient(circle_at_24%_30%,rgba(0,255,209,0.45),transparent_42%),radial-gradient(circle_at_78%_75%,rgba(157,0,255,0.55),transparent_48%),rgba(255,255,255,0.04)]" />
          </div>
        </aside>
      </div>
    </section>
  );
}
