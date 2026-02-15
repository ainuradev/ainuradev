import type { Lang } from "../page";

type WorksProps = {
  lang: Lang;
};

const copy = {
  en: {
    heading: "Portfolio Gazette - Featured Works",
    intro: "Investigative stories from digital products built for speed, stability, and measurable growth.",
    projects: [
      {
        title: "Commerce Platform Rebuild",
        date: "Published: Jan 2026",
        stack: ["Next.js", "Node.js", "PostgreSQL"],
        description:
          "Re-architected storefront and checkout flow for faster load times and stronger conversion consistency.",
      },
      {
        title: "SaaS Analytics Dashboard",
        date: "Published: Nov 2025",
        stack: ["React", "Express.js", "MongoDB"],
        description:
          "Built a modular dashboard interface with clean data pipelines and clear operational reporting.",
      },
      {
        title: "B2B Service Portal",
        date: "Published: Jul 2025",
        stack: ["Vue.js", "Laravel", "MySQL"],
        description:
          "Implemented multi-role access and scalable API-backed workflows for enterprise onboarding.",
      },
      {
        title: "Marketing Site System",
        date: "Published: Apr 2025",
        stack: ["Next.js", "Tailwind CSS", "Vercel"],
        description:
          "Created a high-performance component system optimized for content speed and SEO structure.",
      },
    ],
  },
  id: {
    heading: "Gazet Portofolio - Karya Unggulan",
    intro: "Laporan proyek digital yang dibangun untuk kecepatan, stabilitas, dan pertumbuhan terukur.",
    projects: [
      {
        title: "Rebuild Platform E-Commerce",
        date: "Terbit: Jan 2026",
        stack: ["Next.js", "Node.js", "PostgreSQL"],
        description:
          "Merancang ulang storefront dan checkout untuk waktu muat lebih cepat dan konversi yang lebih stabil.",
      },
      {
        title: "Dashboard Analitik SaaS",
        date: "Terbit: Nov 2025",
        stack: ["React", "Express.js", "MongoDB"],
        description:
          "Membangun antarmuka dashboard modular dengan alur data yang rapi dan pelaporan operasional yang jelas.",
      },
      {
        title: "Portal Layanan B2B",
        date: "Terbit: Jul 2025",
        stack: ["Vue.js", "Laravel", "MySQL"],
        description:
          "Mengimplementasikan akses multi-role dan workflow berbasis API yang skalabel untuk onboarding enterprise.",
      },
      {
        title: "Sistem Website Marketing",
        date: "Terbit: Apr 2025",
        stack: ["Next.js", "Tailwind CSS", "Vercel"],
        description:
          "Membangun sistem komponen performa tinggi yang dioptimalkan untuk kecepatan konten dan struktur SEO.",
      },
    ],
  },
};

export default function Works({ lang }: WorksProps) {
  const t = copy[lang];

  return (
    <section id="works" className="editorial-container py-14 section-rule">
      <div className="max-w-3xl" data-reveal>
        <p className="newspaper-label">Feature Stories</p>
        <h2 className="editorial-title mt-2 text-3xl md:text-5xl">{t.heading}</h2>
        <p className="newspaper-justify mt-4 text-base leading-relaxed text-[var(--ink-soft)]">{t.intro}</p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {t.projects.map((project) => (
          <article key={project.title} data-reveal className="editor-card newspaper-tear group relative overflow-hidden rounded-sm">
            <div className="halftone h-40 border-b border-[var(--line)]" />
            <div className="space-y-3 p-5">
              <p className="text-[0.68rem] uppercase tracking-[0.15em] text-[var(--accent)]">{project.date}</p>
              <h3 className="editorial-title text-2xl uppercase">{project.title}</h3>
              <p className="newspaper-justify text-sm leading-relaxed text-[var(--ink-soft)]">{project.description}</p>
              <p className="text-[0.68rem] uppercase tracking-[0.14em] text-[var(--ink-soft)]">
                Fine Print: {project.stack.join(" • ")}
              </p>
              <a href="#contact" className="stamp-btn text-[0.68rem]">Read More</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

