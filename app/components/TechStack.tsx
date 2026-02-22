"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const TECHS = [
  { name: "Next.js", symbol: "NEXT", tone: "#ffffff" },
  { name: "React", symbol: "REACT", tone: "#61dafb" },
  { name: "TypeScript", symbol: "TS", tone: "#3178c6" },
  { name: "Node.js", symbol: "NODE", tone: "#5fa04e" },
  { name: "Tailwind", symbol: "TW", tone: "#38bdf8" },
  { name: "PostgreSQL", symbol: "PG", tone: "#336791" },
  { name: "Figma", symbol: "FIG", tone: "#f24e1e" },
  { name: "Vercel", symbol: "V", tone: "#a3a3a3" },
  { name: "Docker", symbol: "DKR", tone: "#2496ed" },
  { name: "Supabase", symbol: "SB", tone: "#3ecf8e" },
];

const dup = <T,>(arr: T[]) => [...arr, ...arr, ...arr];

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section id="tech" ref={sectionRef} className="relative py-10 overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "var(--border)" }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "var(--border)" }}
      />
      <div
        className="absolute inset-y-0 left-0 w-40 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--bg), transparent)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-40 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--bg), transparent)" }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: EASE }}
        className="overflow-hidden"
      >
        <div className="flex animate-marquee w-max items-center">
          {dup(TECHS).map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex-shrink-0 flex items-center mx-4 transition-all duration-300"
            >
              <div
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--surface-hover)";
                  e.currentTarget.style.borderColor = "var(--border-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--surface)";
                  e.currentTarget.style.borderColor = "var(--border)";
                }}
              >
                <span
                  className="h-2.5 w-2.5 rounded-full"
                  style={{
                    background: tech.tone,
                    boxShadow: `0 0 10px ${tech.tone}99`,
                  }}
                />
                <span className="text-[10px] font-black tracking-[0.18em] uppercase" style={{ color: "var(--text)" }}>
                  {tech.symbol}
                </span>
                <span className="text-xs font-semibold tracking-wide" style={{ color: tech.tone }}>
                  {tech.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
