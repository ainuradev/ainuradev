"use client";

import { useEffect, useMemo, useState } from "react";
import type { Lang } from "../page";

type HeroProps = {
  lang: Lang;
};

const copy = {
  en: {
    kicker: "Cover Story",
    heading: "Building Scalable Digital Products That Perform.",
    description:
      "I help businesses and founders turn ideas into fast, reliable, and well-structured digital products, combining clean front-end execution with scalable full-stack architecture.",
    authority: "Performance-focused. Detail-driven. Built to scale.",
    byline: "By AINURA DEV Editorial Desk",
    viewWork: "View Work",
    workTogether: "Let's Work Together",
  },
  id: {
    kicker: "Artikel Utama",
    heading: "Membangun Produk Digital Skalabel Dengan Performa Tinggi.",
    description:
      "Saya membantu bisnis dan founder mengubah ide menjadi produk digital yang cepat, andal, dan terstruktur, menggabungkan eksekusi front-end yang rapi dengan arsitektur full-stack yang skalabel.",
    authority: "Fokus performa. Detail presisi. Dibangun untuk bertumbuh.",
    byline: "Oleh Redaksi AINURA DEV",
    viewWork: "Lihat Karya",
    workTogether: "Mari Bekerja Sama",
  },
};

export default function Hero({ lang }: HeroProps) {
  const t = copy[lang];
  const headingChars = useMemo(() => Array.from(t.heading), [t.heading]);
  const [typedLength, setTypedLength] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setTypedLength(headingChars.length);
      setIsDeleting(false);
      return;
    }

    let timeoutDelay = isDeleting ? 18 : 32;

    if (!isDeleting && typedLength === headingChars.length) {
      timeoutDelay = 1100;
    } else if (isDeleting && typedLength === 0) {
      timeoutDelay = 320;
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
  }, [headingChars.length, isDeleting, typedLength]);

  return (
    <section className="editorial-container py-12 md:py-16">
      <div className="grid gap-10 border-y border-[var(--line-strong)] py-10 md:grid-cols-[1.35fr,0.65fr] md:py-14">
        <div data-reveal>
          <p className="kicker">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--ink)]" />
            {t.kicker}
          </p>
          <h1 className="editorial-title mt-5 max-w-4xl text-4xl leading-[1.08] md:text-7xl">
            <span>{headingChars.slice(0, typedLength).join("")}</span>
            <span
              aria-hidden
              className="ml-1 inline-block h-[0.95em] w-[0.08em] animate-pulse bg-[var(--ink)] align-[-0.08em]"
            />
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--ink-soft)]">{t.description}</p>
          <p className="mt-5 text-sm uppercase tracking-[0.14em] text-[var(--ink)]">{t.authority}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#works"
              className="rounded-full border border-[var(--line-strong)] px-6 py-2.5 text-sm transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
            >
              {t.viewWork}
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[var(--line-strong)] bg-[var(--ink)] px-6 py-2.5 text-sm text-[var(--paper)] transition-colors hover:bg-[rgba(30,25,19,0.86)]"
            >
              {t.workTogether}
            </a>
          </div>
        </div>

        <aside className="space-y-4 border-l border-[var(--line)] pl-0 md:pl-8" data-reveal>
          <div className="editor-card rounded-xl p-5">
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--ink-soft)]">This Edition</p>
            <p className="editorial-title mt-2 text-2xl">AINURA DEV</p>
            <p className="mt-3 text-sm text-[var(--ink-soft)]">{t.byline}</p>
          </div>
          <div className="editor-card rounded-xl p-5">
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--ink-soft)]">Featured Focus</p>
            <p className="mt-3 text-sm text-[var(--ink-soft)]">
              Architecture clarity, production velocity, and long-term maintainability.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
