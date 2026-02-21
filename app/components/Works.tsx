import Image from "next/image";
import type { Lang } from "../page";

type WorksProps = {
  lang: Lang;
};

type Project = {
  title: string;
  codename: string;
  date: string;
  stack: string[];
  description: string;
  link: string;
  thumbnail?: string;
};

const copy = {
  en: {
    heading: "Cursed Techniques - Featured Domains",
    intro: "A set of production techniques engineered for impact, conversion, and long-term scalability.",
    projects: [
      {
        title: "HeavenTrip Umrah Platform",
        codename: "Technique: Reverse UX Flow",
        date: "Activated: Feb 2026",
        stack: ["Next.js", "Tailwind CSS", "Vercel"],
        description:
          "Built a conversion-focused travel platform with clear package flow, sharp hierarchy, and strong mobile behavior.",
        link: "https://heaventrip.vercel.app/",
        thumbnail: "/works/heaventrip.png",
      },
      {
        title: "Commerce Platform Rebuild",
        codename: "Technique: Black Flash Checkout",
        date: "Activated: Jan 2026",
        stack: ["Next.js", "Node.js", "PostgreSQL"],
        description: "Re-architected storefront and checkout sequence for measurable speed gains and stronger conversion consistency.",
        link: "https://anubhawa.gt.tc",
      },
      {
        title: "SaaS Analytics Dashboard",
        codename: "Technique: Six Eyes Metrics",
        date: "Activated: Nov 2025",
        stack: ["React", "Express.js", "MongoDB"],
        description: "Designed modular analytics surfaces with stable data pipelines and clear operational intelligence.",
        link: "#",
      },
      {
        title: "B2B Service Portal",
        codename: "Technique: Layered Barrier Access",
        date: "Activated: Jul 2025",
        stack: ["Vue.js", "Laravel", "MySQL"],
        description: "Implemented multi-role workflows and API-driven onboarding that scales cleanly with enterprise demand.",
        link: "#",
      },
    ] as Project[],
  },
  id: {
    heading: "Cursed Technique - Domain Unggulan",
    intro: "Kumpulan teknik produksi yang dirancang untuk dampak, konversi, dan skalabilitas jangka panjang.",
    projects: [
      {
        title: "Platform Umrah HeavenTrip",
        codename: "Teknik: Reverse UX Flow",
        date: "Aktif: Feb 2026",
        stack: ["Next.js", "Tailwind CSS", "Vercel"],
        description:
          "Membangun platform travel berorientasi konversi dengan alur paket yang jelas, hierarki tajam, dan performa mobile kuat.",
        link: "https://heaventrip.vercel.app/",
        thumbnail: "/works/heaventrip.png",
      },
      {
        title: "Rebuild Platform E-Commerce",
        codename: "Teknik: Black Flash Checkout",
        date: "Aktif: Jan 2026",
        stack: ["Next.js", "Node.js", "PostgreSQL"],
        description: "Merancang ulang storefront dan checkout untuk peningkatan kecepatan nyata dan konversi yang lebih stabil.",
        link: "https://anubhawa.gt.tc",
      },
      {
        title: "Dashboard Analitik SaaS",
        codename: "Teknik: Six Eyes Metrics",
        date: "Aktif: Nov 2025",
        stack: ["React", "Express.js", "MongoDB"],
        description: "Merancang dashboard modular dengan pipeline data stabil dan insight operasional yang jelas.",
        link: "#",
      },
      {
        title: "Portal Layanan B2B",
        codename: "Teknik: Layered Barrier Access",
        date: "Aktif: Jul 2025",
        stack: ["Vue.js", "Laravel", "MySQL"],
        description: "Mengimplementasikan workflow multi-role dan onboarding berbasis API yang mudah diskalakan.",
        link: "#",
      },
    ] as Project[],
  },
};

export default function Works({ lang }: WorksProps) {
  const t = copy[lang];

  return (
    <section id="works" className="editorial-container py-14 section-rule">
      <div className="max-w-3xl" data-reveal>
        <p className="newspaper-label">Technique Archive</p>
        <h2 className="editorial-title mt-2 text-3xl md:text-5xl">{t.heading}</h2>
        <p className="newspaper-justify mt-4 text-base leading-relaxed text-[var(--ink-soft)]">{t.intro}</p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {t.projects.map((project) => (
          <article key={project.title} data-reveal className="editor-card group relative overflow-hidden rounded-2xl">
            {project.thumbnail ? (
              <div className="relative h-44 w-full border-b border-[var(--line)]">
                <Image src={project.thumbnail} alt={project.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            ) : (
              <div className="halftone h-44 border-b border-[var(--line)]" />
            )}
            <div className="space-y-3 p-5">
              <p className="text-[0.64rem] uppercase tracking-[0.15em] text-[var(--accent)]">{project.codename}</p>
              <h3 className="editorial-title text-xl uppercase md:text-2xl">{project.title}</h3>
              <p className="text-[0.64rem] uppercase tracking-[0.15em] text-[var(--ink-soft)]">{project.date}</p>
              <p className="newspaper-justify text-sm leading-relaxed text-[var(--ink-soft)]">{project.description}</p>
              <p className="text-[0.68rem] uppercase tracking-[0.14em] text-[var(--ink-soft)]">Stack: {project.stack.join(" | ")}</p>
              <a
                href={project.link}
                target={project.link.startsWith("http") ? "_blank" : undefined}
                rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="stamp-btn text-[0.68rem]"
              >
                Open Domain
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
