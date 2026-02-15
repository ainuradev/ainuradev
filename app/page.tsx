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
    const isMobileViewport = window.matchMedia("(max-width: 768px)").matches;
    const enableParallax = isMobileViewport && !prefersReducedMotion;

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

    let frameId = 0;

    const updateParallax = () => {
      frameId = 0;

      if (!enableParallax) {
        elements.forEach((element) => {
          element.style.setProperty("--parallax-offset", "0px");
        });
        return;
      }

      const viewportCenter = window.innerHeight * 0.5;
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const elementCenter = rect.top + rect.height * 0.5;
        const distance = (elementCenter - viewportCenter) / window.innerHeight;
        const offset = Math.max(-18, Math.min(18, distance * -26));
        element.style.setProperty("--parallax-offset", `${offset.toFixed(2)}px`);
      });
    };

    const requestParallaxUpdate = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
    window.addEventListener("resize", requestParallaxUpdate);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestParallaxUpdate);
      window.removeEventListener("resize", requestParallaxUpdate);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
      elements.forEach((element) => {
        element.style.removeProperty("--parallax-offset");
      });
    };
  }, []);

  return (
    <main className="page-paper min-h-screen selection:bg-[rgba(108,21,21,0.24)]">
      <section className="editorial-container py-8 lg:py-10">
        <Masthead lang={lang} setLang={setLang} />
        <Hero lang={lang} />
        <About lang={lang} />
        <Services lang={lang} />
        <Process lang={lang} />
        <Works lang={lang} />
        <TechStack lang={lang} />
        <Pricing lang={lang} />
        <FAQ lang={lang} />
        <Contact lang={lang} />
        <footer className="section-rule mt-10 py-10 text-center lg:text-left">
          <p className="text-sm text-[var(--ink-soft)]">Published by Ainura Dev Studios | (c) 2026</p>
        </footer>
      </section>
      <WhatsappFloat />
    </main>
  );
}

