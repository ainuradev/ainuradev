import type { Lang } from "../page";

type WorksProps = {
  lang: Lang;
};

type Project = {
  title: string;
  date: string;
  stack: string[];
  description: string;
  link: string;
  thumbnail?: string;
};

const copy = {
  en: {
    heading: "Portfolio Gazette - Featured Works",
    intro: "Investigative stories from digital products built for speed, stability, and measurable growth.",
    projects: [
      {
        title: "Pesantren Idrisiyyah Website",
        date: "Published: Feb 2026",
        stack: ["Next.js", "Tailwind CSS", "Vercel"],
        description:
          "Built a modern profile and information website for Pesantren Idrisiyyah with responsive layout and clear content structure.",
        link: "https://pesantren-idrisiyyah.vercel.app/",
        thumbnail: "https://image.thum.io/get/width/1200/https://pesantren-idrisiyyah.vercel.app/",
      },
      {
        title: "Commerce Platform Rebuild",
        date: "Published: Jan 2026",
        stack: ["Next.js", "Node.js", "PostgreSQL"],
        description:
          "Re-architected storefront and checkout flow for faster load times and stronger conversion consistency.",
        link: "https://anubhawa.gt.tc",
      },
      {
        title: "SaaS Analytics Dashboard",
        date: "Published: Nov 2025",
        stack: ["React", "Express.js", "MongoDB"],
        description:
          "Built a modular dashboard interface with clean data pipelines and clear operational reporting.",
        link: "#",
      },
      {
        title: "B2B Service Portal",
        date: "Published: Jul 2025",
        stack: ["Vue.js", "Laravel", "MySQL"],
        description:
          "Implemented multi-role access and scalable API-backed workflows for enterprise onboarding.",
        link: "#",
      },
      {
        title: "Marketing Site System",
        date: "Published: Apr 2025",
        stack: ["Next.js", "Tailwind CSS", "Vercel"],
        description:
          "Created a high-performance component system optimized for content speed and SEO structure.",
        link: "#",
      },
    ] as Project[],
  },
  id: {
    heading: "Gazet Portofolio - Karya Unggulan",
    intro: "Laporan proyek digital yang dibangun untuk kecepatan, stabilitas, dan pertumbuhan terukur.",
    projects: [
      {
        title: "Website Pesantren Idrisiyyah",
        date: "Terbit: Feb 2026",
        stack: ["Next.js", "Tailwind CSS", "Vercel"],
        description:
          "Membangun website profil dan informasi Pesantren Idrisiyyah dengan layout responsif dan struktur konten yang jelas.",
        link: "https://pesantren-idrisiyyah.vercel.app/",
        thumbnail: "../image/pesantren.png",
      },
      {
        title: "Rebuild Platform E-Commerce",
        date: "Terbit: Jan 2026",
        stack: ["Next.js", "Node.js", "PostgreSQL"],
        description:
          "Merancang ulang storefront dan checkout untuk waktu muat lebih cepat dan konversi yang lebih stabil.",
        link: "https://anubhawa.gt.tc",
      },
      {
        title: "Dashboard Analitik SaaS",
        date: "Terbit: Nov 2025",
        stack: ["React", "Express.js", "MongoDB"],
        description:
          "Membangun antarmuka dashboard modular dengan alur data yang rapi dan pelaporan operasional yang jelas.",
        link: "#",
      },
      {
        title: "Portal Layanan B2B",
        date: "Terbit: Jul 2025",
        stack: ["Vue.js", "Laravel", "MySQL"],
        description:
          "Mengimplementasikan akses multi-role dan workflow berbasis API yang skalabel untuk onboarding enterprise.",
        link: "#",
      },
      {
        title: "Sistem Website Marketing",
        date: "Terbit: Apr 2025",
        stack: ["Next.js", "Tailwind CSS", "Vercel"],
        description:
          "Membangun sistem komponen performa tinggi yang dioptimalkan untuk kecepatan konten dan struktur SEO.",
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
        <p className="newspaper-label">Feature Stories</p>
        <h2 className="editorial-title mt-2 text-3xl md:text-5xl">{t.heading}</h2>
        <p className="newspaper-justify mt-4 text-base leading-relaxed text-[var(--ink-soft)]">{t.intro}</p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {t.projects.map((project) => (
          <article key={project.title} data-reveal className="editor-card newspaper-tear group relative overflow-hidden rounded-sm">
            {project.thumbnail ? (
              <img
                src={project.thumbnail}
                alt={project.title}
                className="h-40 w-full border-b border-[var(--line)] object-cover"
                loading="lazy"
              />
            ) : (
              <div className="halftone h-40 border-b border-[var(--line)]" />
            )}
            <div className="space-y-3 p-5">
              <p className="text-[0.68rem] uppercase tracking-[0.15em] text-[var(--accent)]">{project.date}</p>
              <h3 className="editorial-title text-2xl uppercase">{project.title}</h3>
              <p className="newspaper-justify text-sm leading-relaxed text-[var(--ink-soft)]">{project.description}</p>
              <p className="text-[0.68rem] uppercase tracking-[0.14em] text-[var(--ink-soft)]">
                Fine Print: {project.stack.join(" • ")}
              </p>
              <a
                href={project.link}
                target={project.link.startsWith("http") ? "_blank" : undefined}
                rel={project.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="stamp-btn text-[0.68rem]"
              >
                Read More
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
