"use client";

import { useState } from "react";
import type { Lang } from "../page";

type FaqProps = {
  lang: Lang;
};

const copy = {
  en: {
    heading: "Letters to the Editor - Frequently Asked",
    items: [
      {
        q: "Dear Editor, how long does a typical project take?",
        a: "Most editorial-grade website projects ship in 2-6 weeks depending on scope and revision cycles.",
      },
      {
        q: "Can you handle both design implementation and backend?",
        a: "Yes. I cover front-end implementation, API/backend architecture, database planning, and deployment.",
      },
      {
        q: "Do you accept ongoing maintenance retainers?",
        a: "Yes. Ongoing support includes optimization, feature iteration, monitoring, and content updates.",
      },
      {
        q: "Do you work with teams outside Indonesia?",
        a: "Yes. I collaborate remotely across time zones using async workflows and clear milestone communication.",
      },
    ],
    sign: "Signed, Editorial Desk",
  },
  id: {
    heading: "Surat Pembaca - Pertanyaan Umum",
    items: [
      {
        q: "Yth. Redaksi, berapa lama rata-rata proyek dikerjakan?",
        a: "Sebagian besar proyek website dengan kualitas editorial selesai dalam 2-6 minggu tergantung ruang lingkup.",
      },
      {
        q: "Apakah bisa menangani frontend dan backend sekaligus?",
        a: "Bisa. Saya menangani implementasi frontend, arsitektur API/backend, perencanaan database, dan deployment.",
      },
      {
        q: "Apakah menerima maintenance jangka panjang?",
        a: "Ya. Dukungan berkelanjutan mencakup optimasi, iterasi fitur, monitoring, dan update konten.",
      },
      {
        q: "Apakah menerima klien di luar Indonesia?",
        a: "Ya. Saya bekerja remote lintas zona waktu dengan workflow async dan milestone yang jelas.",
      },
    ],
    sign: "Hormat kami, Tim Redaksi",
  },
};

export default function FAQ({ lang }: FaqProps) {
  const t = copy[lang];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="editorial-container py-14 section-rule">
      <div className="max-w-3xl" data-reveal>
        <p className="newspaper-label">Letters Column</p>
        <h2 className="editorial-title mt-2 text-3xl md:text-4xl">{t.heading}</h2>
      </div>

      <div className="mt-8 space-y-3">
        {t.items.map((item, index) => {
          const open = openIndex === index;
          return (
            <article key={item.q} data-reveal className="editor-card newspaper-fold rounded-sm">
              <button
                type="button"
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={open}
              >
                <span className="text-[0.92rem] font-semibold uppercase tracking-[0.04em]">{item.q}</span>
                <span className="text-[var(--accent)]">{open ? "-" : "+"}</span>
              </button>
              {open && (
                <div className="border-t border-dashed border-[var(--line)] px-5 py-4 text-sm leading-relaxed text-[var(--ink-soft)]">
                  <p className="newspaper-justify">Dear Reader, {item.a}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>
      <p className="mt-4 text-right text-xs italic text-[var(--ink-soft)]">{t.sign}</p>
    </section>
  );
}

