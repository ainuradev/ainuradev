import type { Lang } from "../page";

type ProcessProps = {
  lang: Lang;
};

const copy = {
  en: {
    heading: "How I Build",
    steps: [
      {
        id: "01",
        title: "Discovery",
        description: "Understanding business goals and technical requirements.",
      },
      {
        id: "02",
        title: "Architecture",
        description:
          "Designing clean system structure, database schema, and scalable application flow.",
      },
      {
        id: "03",
        title: "Development",
        description: "Building modular, maintainable, and performance-focused code.",
      },
      {
        id: "04",
        title: "Optimization",
        description: "Performance tuning, SEO structure, and deployment refinement.",
      },
      {
        id: "05",
        title: "Support & Iteration",
        description: "Continuous improvement and scalable expansion planning.",
      },
    ],
  },
  id: {
    heading: "Cara Saya Membangun",
    steps: [
      {
        id: "01",
        title: "Discovery",
        description: "Memahami tujuan bisnis dan kebutuhan teknis.",
      },
      {
        id: "02",
        title: "Architecture",
        description: "Merancang struktur sistem, skema database, dan alur aplikasi yang skalabel.",
      },
      {
        id: "03",
        title: "Development",
        description: "Membangun kode modular, mudah dirawat, dan berfokus pada performa.",
      },
      {
        id: "04",
        title: "Optimization",
        description: "Tuning performa, struktur SEO, dan penyempurnaan deployment.",
      },
      {
        id: "05",
        title: "Support & Iteration",
        description: "Peningkatan berkelanjutan dan perencanaan ekspansi yang skalabel.",
      },
    ],
  },
};

export default function Process({ lang }: ProcessProps) {
  const t = copy[lang];

  return (
    <section id="process" className="editorial-container py-14 section-rule">
      <div className="grid gap-10 md:grid-cols-[0.6fr,1.4fr]">
        <div data-reveal>
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--ink-soft)]">Production Workflow</p>
          <h2 className="editorial-title mt-3 text-3xl md:text-5xl">{t.heading}</h2>
        </div>
        <div className="space-y-4" data-reveal>
          {t.steps.map((step) => (
            <article key={step.id} className="editor-card rounded-xl p-5 md:flex md:items-start md:gap-6">
              <p className="editorial-title min-w-14 text-3xl">{step.id}</p>
              <div className="mt-2 md:mt-0">
                <h3 className="editorial-title text-2xl">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
