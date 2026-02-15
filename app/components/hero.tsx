"use client";

import { useEffect, useMemo, useState } from "react";
import type { Lang } from "../page";

type HeroProps = {
  lang: Lang;
};

const copy = {
  en: {
    kicker: "EXTRA! EXTRA!",
    heading: "Local Developer Revolutionizes Web Design",
    subheading: "Ainura Dev combines newspaper-era structure with modern engineering precision.",
    description:
      "From startup stories to enterprise platforms, each release is written like a front-page headline: fast, structured, and impossible to ignore.",
    pullQuote: "Well-crafted interfaces meet robust architecture in every edition.",
    authority: "By Ainura Dev | Web Development Chronicle",
    continued: "Continued on Page 2",
    viewWork: "Read Works",
    workTogether: "Dispatch Message",
  },
  id: {
    kicker: "BERITA UTAMA",
    heading: "Developer Lokal Merevolusi Desain Web",
    subheading: "Ainura Dev menggabungkan struktur era koran dengan presisi engineering modern.",
    description:
      "Dari proyek startup sampai platform enterprise, setiap rilis disusun seperti headline halaman depan: cepat, terstruktur, dan berkesan.",
    pullQuote: "Antarmuka berkualitas bertemu arsitektur kokoh di setiap edisi.",
    authority: "Oleh Ainura Dev | Kronik Pengembangan Web",
    continued: "Bersambung ke Halaman 2",
    viewWork: "Baca Karya",
    workTogether: "Kirim Telegram",
  },
};

export default function Hero({ lang }: HeroProps) {
  const t = copy[lang];
  const headingChars = useMemo(() => Array.from(t.heading), [t.heading]);
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [typedLength, setTypedLength] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let timeoutDelay = isDeleting ? 22 : 36;

    if (!isDeleting && typedLength === headingChars.length) {
      timeoutDelay = 1300;
    } else if (isDeleting && typedLength === 0) {
      timeoutDelay = 420;
    }

    const timeout = window.setTimeout(() => {
      if (!isDeleting && typedLength < headingChars.length) {
        setTypedLength((prev) => prev + 1);
        return;
      }

      if (!isDeleting && typedLength === headingChars.length) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && typedLength > 0) {
        setTypedLength((prev) => prev - 1);
        return;
      }

      if (isDeleting && typedLength === 0) {
        setIsDeleting(false);
      }
    }, timeoutDelay);

    return () => window.clearTimeout(timeout);
  }, [headingChars.length, isDeleting, prefersReducedMotion, typedLength]);

  return (
    <section className="editorial-container py-10 md:py-14">
      <div className="newspaper-fold border-y border-[var(--line-strong)] py-8 md:py-10">
        <div className="grid gap-8 lg:grid-cols-[1.35fr,0.65fr]">
          <div data-reveal>
            <p className="kicker">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              {t.kicker}
            </p>
            <h2 className="mt-4 text-sm uppercase tracking-[0.2em] text-[var(--ink-soft)]">Front Page Headline</h2>
            <h1 className="editorial-title mt-3 max-w-4xl text-4xl leading-[1.06] md:text-7xl">
              <span>{headingChars.slice(0, prefersReducedMotion ? headingChars.length : typedLength).join("")}</span>
              <span
                aria-hidden
                className="ml-1 inline-block h-[0.95em] w-[0.08em] animate-pulse bg-[var(--accent)] align-[-0.08em]"
              />
            </h1>
            <p className="mt-4 max-w-2xl text-lg italic text-[var(--ink-soft)]">{t.subheading}</p>
            <p className="newspaper-justify mt-4 max-w-3xl text-[1.01rem] leading-relaxed text-[var(--ink-soft)]">
              {t.description}
            </p>
            <p className="mt-4 text-xs uppercase tracking-[0.14em] text-[var(--ink)]">{t.authority}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#works" className="stamp-btn">
                {t.viewWork}
              </a>
              <a href="#contact" className="stamp-btn stamp-btn-solid">
                {t.workTogether}
              </a>
            </div>
            <p className="mt-5 text-xs uppercase tracking-[0.18em] text-[var(--accent)]">{t.continued} ?</p>
          </div>

          <aside className="space-y-4 border-l border-dashed border-[var(--line)] pl-0 md:pl-8" data-reveal>
            <div className="editor-card halftone rounded-sm p-5">
              <p className="text-xs uppercase tracking-[0.14em] text-[var(--ink-soft)]">Pull Quote</p>
              <p className="editorial-title mt-2 text-2xl leading-tight">“{t.pullQuote}”</p>
            </div>
            <div className="editor-card rounded-sm p-5">
              <p className="text-xs uppercase tracking-[0.14em] text-[var(--ink-soft)]">Press Bulletin</p>
              <p className="newspaper-justify mt-3 text-sm text-[var(--ink-soft)]">
                Editorial systems, scalable backend architecture, and fast front-end delivery for modern businesses.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

