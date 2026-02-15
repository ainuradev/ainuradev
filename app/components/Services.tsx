import type { Lang } from "../page";

type ServicesProps = {
  lang: Lang;
};

const copy = {
  en: {
    heading: "Services",
    items: [
      {
        title: "Front-End Development",
        description:
          "Modern, responsive, performance-optimized interfaces built with scalable structure.",
      },
      {
        title: "Full-Stack Development",
        description:
          "Backend systems, API architecture, and database design focused on long-term growth.",
      },
      {
        title: "UI Implementation & Optimization",
        description:
          "Pixel-accurate execution combined with performance tuning and SEO structure.",
      },
    ],
  },
  id: {
    heading: "Layanan",
    items: [
      {
        title: "Pengembangan Front-End",
        description:
          "Antarmuka modern, responsif, dan optimal performa dengan struktur yang skalabel.",
      },
      {
        title: "Pengembangan Full-Stack",
        description:
          "Sistem backend, arsitektur API, dan desain database yang berfokus pada pertumbuhan jangka panjang.",
      },
      {
        title: "Implementasi UI & Optimasi",
        description:
          "Eksekusi pixel-accurate dipadukan dengan tuning performa dan struktur SEO.",
      },
    ],
  },
};

export default function Services({ lang }: ServicesProps) {
  const t = copy[lang];
  const loopItems = [...t.items, ...t.items];

  return (
    <section id="services" className="editorial-container py-12 section-rule">
      <div className="grid grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] items-center gap-4 md:gap-6">
        <div data-reveal className="self-center">
          <h2 className="editorial-title text-2xl md:text-4xl">{t.heading}</h2>
          <p className="mt-4 max-w-xs text-[0.68rem] uppercase tracking-[0.14em] text-[var(--ink-soft)] md:max-w-sm md:text-xs">
            Structured capabilities for modern digital publishing and product systems.
          </p>
        </div>

        <div data-reveal className="services-loop-viewport justify-self-end">
          <div className="services-loop-track">
            {loopItems.map((service, index) => (
              <article
                key={`${service.title}-${index}`}
                className="editor-card services-loop-card rounded-lg p-4 md:p-5"
              >
                <p className="text-[0.62rem] uppercase tracking-[0.14em] text-[var(--ink-soft)] md:text-[0.68rem]">Feature</p>
                <h3 className="editorial-title mt-2 text-lg leading-tight md:text-xl">{service.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[var(--ink-soft)] md:text-sm">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
