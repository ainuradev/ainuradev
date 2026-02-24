"use client";

import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Contact from "@/app/components/Contact";
import { useLanguage } from "@/app/components/LanguageProvider";

export default function HeavenTripCaseStudyPage() {
  const { locale } = useLanguage();
  const isID = locale === "id";

  return (
    <main className="min-h-screen px-6 pt-28 pb-16">
      <Navbar />
      <div className="mx-auto w-full max-w-4xl">
        <p
          className="text-xs tracking-[0.2em] uppercase mb-4"
          style={{ color: "var(--accent-light)" }}
        >
          {isID ? "Studi Kasus Proyek" : "Project Case Study"}
        </p>

        <h1
          className="text-[clamp(36px,7vw,72px)] font-black tracking-tighter leading-none mb-5"
          style={{ color: "var(--text)" }}
        >
          HeavenTrip
        </h1>

        <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-muted)" }}>
          {isID
            ? "HeavenTrip adalah website travel dan umrah yang fokus pada penyampaian paket yang jelas, performa render cepat, dan arah visual yang menumbuhkan kepercayaan untuk konversi."
            : "HeavenTrip is a travel and Umrah website focused on clear package communication, fast page rendering, and a trust-first visual direction for conversion."}
        </p>
        <p className="text-sm leading-relaxed mb-8" style={{ color: "var(--text-subtle)" }}>
          {isID
            ? "Role: Product Design + Frontend Development · Timeline: 2 minggu"
            : "Role: Product Design + Frontend Development · Timeline: 2 weeks"}
        </p>

        <div
          className="rounded-3xl overflow-hidden border mb-10"
          style={{ borderColor: "var(--border)" }}
        >
          <img
            src="/heaventrip.png"
            alt="HeavenTrip project preview"
            className="w-full h-auto block"
          />
        </div>

        <section className="grid gap-6 md:grid-cols-3 mb-10">
          <article
            className="rounded-2xl p-5"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <h2 className="text-sm font-bold mb-2" style={{ color: "var(--text)" }}>
              {isID ? "Tantangan" : "Challenge"}
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {isID
                ? "Menyajikan banyak paket travel tanpa membuat halaman terasa penuh."
                : "Present multiple travel packages without making the page feel crowded."}
            </p>
          </article>

          <article
            className="rounded-2xl p-5"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <h2 className="text-sm font-bold mb-2" style={{ color: "var(--text)" }}>
              {isID ? "Pendekatan" : "Approach"}
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {isID
                ? "Hierarki layout yang terstruktur, CTA kontras tinggi, dan motion yang terukur untuk menjaga kejelasan."
                : "Structured layout hierarchy, high-contrast CTAs, and restrained motion for clarity."}
            </p>
          </article>

          <article
            className="rounded-2xl p-5"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <h2 className="text-sm font-bold mb-2" style={{ color: "var(--text)" }}>
              {isID ? "Hasil" : "Outcome"}
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
              {isID
                ? "Alur pengguna lebih rapi dari hero sampai inquiry booking, dengan keterbacaan mobile yang lebih baik."
                : "A cleaner user flow from hero to booking inquiry, with better readability on mobile."}
            </p>
          </article>
        </section>

        <section className="grid gap-6 md:grid-cols-2 mb-10">
          <article
            className="rounded-2xl p-5"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <h2 className="text-sm font-bold mb-2" style={{ color: "var(--text)" }}>
              {isID ? "Tujuan Produk" : "Product Goals"}
            </h2>
            <ul className="text-sm leading-relaxed space-y-2" style={{ color: "var(--text-muted)" }}>
              <li>{isID ? "Menaikkan jumlah inquiry dari traffic organik." : "Increase inquiry conversion from organic traffic."}</li>
              <li>{isID ? "Mempercepat proses pengguna memahami paket." : "Reduce time-to-understand for package options."}</li>
              <li>{isID ? "Membangun trust visual dalam 5 detik pertama." : "Establish trust in the first 5 seconds."}</li>
            </ul>
          </article>

          <article
            className="rounded-2xl p-5"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <h2 className="text-sm font-bold mb-2" style={{ color: "var(--text)" }}>
              {isID ? "Strategi Eksekusi" : "Execution Strategy"}
            </h2>
            <ul className="text-sm leading-relaxed space-y-2" style={{ color: "var(--text-muted)" }}>
              <li>{isID ? "Hero messaging langsung ke value proposition." : "Hero messaging aligned to the core value proposition."}</li>
              <li>{isID ? "Hierarchy section berbasis intent calon jamaah." : "Section hierarchy mapped to user decision intent."}</li>
              <li>{isID ? "CTA WhatsApp dipasang konsisten di titik decision." : "WhatsApp CTA placed consistently at decision points."}</li>
            </ul>
          </article>
        </section>

        <section
          className="rounded-2xl p-6 mb-10"
          style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
        >
          <h2 className="text-sm font-bold mb-3" style={{ color: "var(--text)" }}>
            {isID ? "Tech Stack & Deliverables" : "Tech Stack & Deliverables"}
          </h2>
          <p className="text-sm mb-3" style={{ color: "var(--text-muted)" }}>
            {isID
              ? "Next.js, TypeScript, Tailwind CSS, Framer Motion, Web3Forms integration."
              : "Next.js, TypeScript, Tailwind CSS, Framer Motion, Web3Forms integration."}
          </p>
          <p className="text-sm" style={{ color: "var(--text-subtle)" }}>
            {isID
              ? "Output: landing page production-ready, case study page, localization EN/ID, dan funnel contact berbasis WhatsApp + Email."
              : "Output: production-ready landing page, case-study page, EN/ID localization, and WhatsApp + Email contact funnel."}
          </p>
        </section>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://heaventrip.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white"
            style={{ background: "var(--accent)" }}
          >
            {isID ? "Lihat Website Live" : "Visit Live Site"}
          </a>

          <Link
            href="/#work"
            className="px-5 py-2.5 rounded-xl text-sm font-semibold"
            style={{
              color: "var(--text)",
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            {isID ? "Kembali ke Work" : "Back to Work"}
          </Link>
        </div>
      </div>
      <Contact />
    </main>
  );
}
