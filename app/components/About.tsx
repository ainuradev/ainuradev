"use client";

import { useState, type CSSProperties, type MouseEvent } from "react";
import Image from "next/image";
import type { Lang } from "../page";

type AboutProps = {
  lang: Lang;
};

const copy = {
  en: {
    title: "Precision Over Noise.",
    p1: "I'm a web developer and full-stack engineer focused on clarity, structure, and performance.",
    p2: "My approach blends thoughtful UI implementation with robust backend systems to ensure every product is fast, scalable, and maintainable.",
    p3: "I don't just build interfaces, I engineer digital foundations that support long-term growth.",
    p4: "Every line of code is written with structure, readability, and performance in mind.",
  },
  id: {
    title: "Presisi Lebih Penting Dari Kebisingan.",
    p1: "Saya adalah web developer dan full-stack engineer yang fokus pada kejelasan, struktur, dan performa.",
    p2: "Pendekatan saya menggabungkan implementasi UI yang matang dengan sistem backend yang kuat agar setiap produk cepat, skalabel, dan mudah dipelihara.",
    p3: "Saya tidak hanya membangun antarmuka, saya merekayasa fondasi digital untuk pertumbuhan jangka panjang.",
    p4: "Setiap baris kode ditulis dengan struktur, keterbacaan, dan performa sebagai prioritas.",
  },
};

export default function About({ lang }: AboutProps) {
  const t = copy[lang];
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, active: false });

  const handleSpotlightMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    setSpotlight({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
      active: true,
    });
  };

  const spotlightStyle = {
    "--spot-x": `${spotlight.x}%`,
    "--spot-y": `${spotlight.y}%`,
  } as CSSProperties;

  return (
    <section id="about" className="editorial-container py-12 section-rule">
      <div className="grid items-center gap-6 lg:grid-cols-2" data-reveal>
        <article className="lg:self-center">
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--ink-soft)]">Editorial Note</p>
          <h2 className="editorial-title mt-3 text-3xl md:text-5xl lg:max-w-xl">{t.title}</h2>
          <div className="mt-6 space-y-4 text-[1.03rem] leading-relaxed text-[var(--ink-soft)]">
            <p className="dropcap">{t.p1}</p>
            <p>{t.p2}</p>
            <p>{t.p3}</p>
            <p>{t.p4}</p>
          </div>
        </article>
        <figure className="editor-card rounded-xl p-3">
          <div
            className={`about-photo-wrap relative aspect-[4/5] overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--paper-deep)] ${spotlight.active ? "is-active" : ""}`}
            style={spotlightStyle}
            onMouseEnter={() => setSpotlight((prev) => ({ ...prev, active: true }))}
            onMouseMove={handleSpotlightMove}
            onMouseLeave={() => setSpotlight((prev) => ({ ...prev, active: false }))}
          >
            <Image
              src="/profil.webp"
              alt="Portrait of Ainura Dev"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
            <div aria-hidden className="about-photo-shadow" />
            <div aria-hidden className="about-photo-beam" />
          </div>
          <figcaption className="mt-3 border-t border-[var(--line)] pt-3 text-xs uppercase tracking-[0.14em] text-[var(--ink-soft)]">
            Profile Portrait
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
