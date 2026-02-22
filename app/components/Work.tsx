"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const projects = [
  {
    title: "Lumina Studio",
    description: "A creative agency website built around motion and minimalism.",
    tags: ["Web Design", "UI/UX"],
    color: "#f97316",
    bg: "linear-gradient(135deg, #7c2d12 0%, #c2410c 50%, #f97316 100%)",
    mockup: "🍊",
    url: "https://luminastudio.com",
  },
  {
    title: "Nexus Dashboard",
    description: "Real-time analytics platform for modern SaaS companies.",
    tags: ["Development", "React"],
    color: "#7c6aff",
    bg: "linear-gradient(135deg, #1e1b4b 0%, #3730a3 50%, #6d28d9 100%)",
    mockup: "📊",
    url: "https://nexusdashboard.com",
  },
  {
    title: "Bloom Commerce",
    description: "Headless e-commerce experience with seamless checkout flow.",
    tags: ["Web Design", "Next.js"],
    color: "#ec4899",
    bg: "linear-gradient(135deg, #831843 0%, #be185d 50%, #ec4899 100%)",
    mockup: "🌸",
    url: "https://bloomcommerce.com",
  },
  {
    title: "Atlas Travel",
    description: "Immersive travel booking platform with stunning visuals.",
    tags: ["UI/UX", "Framer"],
    color: "#22d3ee",
    bg: "linear-gradient(135deg, #164e63 0%, #0e7490 50%, #22d3ee 100%)",
    mockup: "✈️",
    url: "https://atlastravel.com",
  },
  {
    title: "Verde Finance",
    description: "Clean fintech dashboard focused on clarity and trust.",
    tags: ["Development", "Design"],
    color: "#22c55e",
    bg: "linear-gradient(135deg, #14532d 0%, #15803d 50%, #22c55e 100%)",
    mockup: "💹",
    url: "https://verdefinance.com",
  },
  {
    title: "Pulse Media",
    description: "Bold editorial platform for a digital-first magazine.",
    tags: ["Web Design", "CMS"],
    color: "#f59e0b",
    bg: "linear-gradient(135deg, #78350f 0%, #b45309 50%, #f59e0b 100%)",
    mockup: "📰",
    url: "https://pulsemedia.com",
  },
];

function RevealText({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        animate={inView ? { y: "0%" } : {}}
        transition={{ duration: 0.9, ease: EASE, delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0); // -1 = prev, 1 = next

  const paginate = (dir: number) => {
    setDirection(dir);
    setActive((a) => (a + dir + projects.length) % projects.length);
  };

  const prevIdx = (active - 1 + projects.length) % projects.length;
  const nextIdx = (active + 1) % projects.length;

  // Slide variants — masuk dari kanan/kiri, keluar ke kanan/kiri
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: "0%",
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section id="work" ref={sectionRef} className="relative pt-32 pb-32 overflow-hidden">
      <div className="max-w-3xl mx-auto w-full px-6">

        {/* ── Label ── */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-xs tracking-[0.2em] uppercase mb-4"
          style={{ color: "var(--accent-light)" }}
        >
        </motion.p>

        {/* ── Heading ── */}
        <div className="mb-16 text-center">
          <RevealText delay={0.1}>
            <span
              className="text-[clamp(32px,8vw,72px)] font-black tracking-tighter leading-none"
              style={{ color: "var(--text)" }}
            >
              Things{" "}
              <em
                style={{
                  fontFamily: "Georgia, serif",
                  fontStyle: "italic",
                  fontWeight: 300,
                  color: "var(--text-muted)",
                }}
              >
                I&apos;ve Designed.
              </em>
            </span>
          </RevealText>
        </div>
      </div>

      {/* ── Carousel ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative flex items-center justify-center"
        style={{ height: "460px" }}
      >

        {/* Peek kiri */}
        <div
          className="absolute hidden md:block cursor-pointer"
          style={{ left: "calc(50% - 440px)", zIndex: 1 }}
          onClick={() => paginate(-1)}
        >
          <div
            className="w-60 h-80 rounded-3xl overflow-hidden transition-all duration-300 hover:opacity-60"
            style={{
              background: projects[prevIdx].bg,
              opacity: 0.35,
              transform: "scale(0.88)",
            }}
          >
            <div className="w-full h-full flex items-center justify-center text-5xl">
              {projects[prevIdx].mockup}
            </div>
          </div>
        </div>

        {/* Active card — slide animation */}
        <div
          className="absolute z-20 overflow-hidden"
          style={{ width: "clamp(300px, 52vw, 500px)" }}
        >
          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.45, ease: EASE }}
            >
              {/* Card wrapper — bisa diklik ke URL project */}
              <a
                href={projects[active].url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div
                  className="relative overflow-hidden rounded-3xl"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    backdropFilter: "blur(30px)",
                    WebkitBackdropFilter: "blur(30px)",
                    border: `1px solid ${projects[active].color}30`,
                    boxShadow: `
                      0 0 0 1px rgba(255,255,255,0.05),
                      0 30px 80px rgba(0,0,0,0.6),
                      inset 0 1px 0 rgba(255,255,255,0.08),
                      0 0 60px ${projects[active].color}20
                    `,
                  }}
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-8 right-8 h-px z-10"
                    style={{
                      background: `linear-gradient(to right, transparent, ${projects[active].color}80, transparent)`,
                    }}
                  />

                  {/* Tags */}
                  <div className="absolute top-4 right-4 z-10 flex gap-2">
                    {projects[active].tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] tracking-widest uppercase px-3 py-1.5 rounded-full font-semibold"
                        style={{
                          background: "rgba(0,0,0,0.5)",
                          backdropFilter: "blur(10px)",
                          color: "rgba(255,255,255,0.85)",
                          border: "1px solid rgba(255,255,255,0.12)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Thumbnail / mockup area */}
                  <div
                    className="relative overflow-hidden flex items-center justify-center"
                    style={{
                      height: "clamp(200px, 28vw, 280px)",
                      background: projects[active].bg,
                    }}
                  >
                    {/* Glow blob */}
                    <div
                      className="absolute inset-0 opacity-60"
                      style={{
                        background: `radial-gradient(circle at 60% 40%, ${projects[active].color}40, transparent 70%)`,
                      }}
                    />

                    {/* Monitor frame */}
                    <div
                      className="relative z-10 mx-8 mt-4"
                      style={{
                        background: "rgba(0,0,0,0.55)",
                        borderRadius: "10px",
                        padding: "6px",
                        border: "2px solid rgba(255,255,255,0.18)",
                        width: "82%",
                        aspectRatio: "16/10",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                      }}
                    >
                      <div
                        className="w-full h-full rounded-lg flex items-center justify-center text-5xl"
                        style={{ background: "rgba(0,0,0,0.3)" }}
                      >
                        {projects[active].mockup}
                      </div>

                      {/* Monitor stand */}
                      <div
                        className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-6 h-2.5 rounded-b"
                        style={{ background: "rgba(0,0,0,0.6)" }}
                      />
                    </div>

                    {/* Hover overlay — "View Project" */}
                    <div
                      className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
                    >
                      <div
                        className="flex items-center gap-2 px-5 py-2.5 rounded-2xl font-semibold text-sm text-white"
                        style={{
                          background: projects[active].color,
                          boxShadow: `0 0 30px ${projects[active].color}60`,
                        }}
                      >
                        View Project
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17L17 7M17 7H7M17 7v10"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3
                          className="text-xl font-bold mb-1.5 group-hover:text-white transition-colors"
                          style={{ color: "var(--text)" }}
                        >
                          {projects[active].title}
                        </h3>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {projects[active].description}
                        </p>
                      </div>

                      {/* Arrow icon */}
                      <div
                        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: `${projects[active].color}20`,
                          border: `1px solid ${projects[active].color}40`,
                          color: projects[active].color,
                        }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M7 17L17 7M17 7H7M17 7v10"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Peek kanan */}
        <div
          className="absolute hidden md:block cursor-pointer"
          style={{ left: "calc(50% + 180px)", zIndex: 1 }}
          onClick={() => paginate(1)}
        >
          <div
            className="w-60 h-80 rounded-3xl overflow-hidden transition-all duration-300 hover:opacity-60"
            style={{
              background: projects[nextIdx].bg,
              opacity: 0.35,
              transform: "scale(0.88)",
            }}
          >
            <div className="w-full h-full flex items-center justify-center text-5xl">
              {projects[nextIdx].mockup}
            </div>
          </div>
        </div>

        {/* ── Arrow buttons — tampil di semua ukuran ── */}
        <button
          onClick={() => paginate(-1)}
          className="absolute z-30 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
          style={{
            // Mobile: di pinggir kiri card. Desktop: lebih keluar
            left: "clamp(8px, calc(50% - 290px), calc(50% - 290px))",
            background: projects[active].color,
            boxShadow: `0 0 24px ${projects[active].color}50`,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
        </button>

        <button
          onClick={() => paginate(1)}
          className="absolute z-30 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
          style={{
            right: "clamp(8px, calc(50% - 290px), calc(50% - 290px))",
            background: projects[active].color,
            boxShadow: `0 0 24px ${projects[active].color}50`,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </motion.div>

      {/* ── Dot indicators ── */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {projects.map((p, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > active ? 1 : -1);
              setActive(i);
            }}
            className="transition-all duration-300"
            style={{
              width: i === active ? "24px" : "6px",
              height: "6px",
              borderRadius: "3px",
              background: i === active ? p.color : "rgba(255,255,255,0.2)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
