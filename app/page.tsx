"use client";

import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Hero from "./components/hero";
import Masthead from "./components/Masthead";
import Pricing from "./components/Pricing";
import Process from "./components/Process";
import Services from "./components/Services";
import TechStack from "./components/TechStack";
import WhatsappFloat from "./components/WhatsappFloat";
import Works from "./components/Works";

export type Lang = "en" | "id";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => {
      element.classList.add("reveal");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="page-paper min-h-screen selection:bg-[rgba(0,255,209,0.24)] selection:text-[#04070b]">
      <section className="editorial-container py-6 md:py-8">
        <Masthead lang={lang} setLang={setLang} />

        <div className="bento-hero">
          <Hero lang={lang} />
        </div>

        <div className="bento-grid mt-4">
          <div className="bento-item glass-card col-span-12 xl:col-span-8" data-reveal>
            <Works lang={lang} />
          </div>
          <div className="bento-item glass-card col-span-12 xl:col-span-4" data-reveal>
            <Services lang={lang} />
          </div>
          <div className="bento-item glass-card col-span-12 lg:col-span-7" data-reveal>
            <About lang={lang} />
          </div>
          <div className="bento-item glass-card col-span-12 lg:col-span-5" data-reveal>
            <Process lang={lang} />
          </div>
          <div className="bento-item glass-card col-span-12 xl:col-span-5" data-reveal>
            <TechStack lang={lang} />
          </div>
          <div className="bento-item glass-card col-span-12 xl:col-span-7" data-reveal>
            <Pricing lang={lang} />
          </div>
          <div className="bento-item glass-card col-span-12 xl:col-span-5" data-reveal>
            <FAQ lang={lang} />
          </div>
          <div className="bento-item glass-card col-span-12 xl:col-span-7" data-reveal>
            <Contact lang={lang} />
          </div>
        </div>

        <footer className="mt-8 rounded-2xl border border-[var(--line)] px-5 py-6 text-center text-sm text-[var(--ink-soft)]">
          Domain Registry: Ainura Dev Studios | (c) 2026
        </footer>
      </section>
      <WhatsappFloat />
    </main>
  );
}
