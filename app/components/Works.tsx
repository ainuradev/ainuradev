import type { Lang } from "../page";

type WorksProps = {
  lang: Lang;
};

const copy = {
  en: {
    heading: "Selected Work",
    intro: "A collection of projects focused on performance, structure, and user experience.",
    projects: [
      {
        title: "Commerce Platform Rebuild",
        stack: ["Next.js", "Node.js", "PostgreSQL"],
        description:
          "Re-architected storefront and checkout flow for faster load times and stronger conversion consistency.",
      },
      {
        title: "SaaS Analytics Dashboard",
        stack: ["React", "Express.js", "MongoDB"],
        description:
          "Built a modular dashboard interface with clean data pipelines and clear operational reporting.",
      },
      {
        title: "B2B Service Portal",
        stack: ["Vue.js", "Laravel", "MySQL"],
        description:
          "Implemented multi-role access and scalable API-backed workflows for enterprise onboarding.",
      },
      {
        title: "Marketing Site System",
        stack: ["Next.js", "Tailwind CSS", "Vercel"],
        description:
          "Created a high-performance component system optimized for content speed and SEO structure.",
      },
    ],
  },
  id: {
    heading: "Karya Pilihan",
    intro: "Kumpulan proyek yang berfokus pada performa, struktur, dan pengalaman pengguna.",
    projects: [
      {
        title: "Rebuild Platform E-Commerce",
        stack: ["Next.js", "Node.js", "PostgreSQL"],
        description:
          "Merancang ulang storefront dan checkout untuk waktu muat lebih cepat dan konversi yang lebih stabil.",
      },
      {
        title: "Dashboard Analitik SaaS",
        stack: ["React", "Express.js", "MongoDB"],
        description:
          "Membangun antarmuka dashboard modular dengan alur data yang rapi dan pelaporan operasional yang jelas.",
      },
      {
        title: "Portal Layanan B2B",
        stack: ["Vue.js", "Laravel", "MySQL"],
        description:
          "Mengimplementasikan akses multi-role dan workflow berbasis API yang skalabel untuk onboarding enterprise.",
      },
      {
        title: "Sistem Website Marketing",
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
        <p className="text-xs uppercase tracking-[0.16em] text-[var(--ink-soft)]">Portfolio Edition</p>
        <h2 className="editorial-title mt-3 text-3xl md:text-5xl">{t.heading}</h2>
        <p className="mt-4 text-base leading-relaxed text-[var(--ink-soft)]">{t.intro}</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {t.projects.map((project) => (
          <article
            key={project.title}
            data-reveal
            className="editor-card group relative overflow-hidden rounded-xl"
          >
            <div className="h-44 border-b border-[var(--line)] bg-[linear-gradient(140deg,#efe8d8_5%,#ded3be_95%)]" />
            <div className="space-y-4 p-6">
              <h3 className="editorial-title text-2xl">{project.title}</h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--ink-soft)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-[var(--ink-soft)]">{project.description}</p>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-transparent transition-colors duration-300 group-hover:bg-[rgba(30,25,19,0.03)]" />
          </article>
        ))}
      </div>
    </section>
  );
}
