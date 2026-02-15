import type { Lang } from "../page";

type TechStackProps = {
  lang: Lang;
};

const groups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    items: ["PHP", "Node.js", "Go", "Laravel", "Express.js"],
  },
  {
    title: "Database",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools",
    items: ["Git", "Docker", "Vercel", "Figma", "Postman"],
  },
];

const copy = {
  en: {
    heading: "Tools of the Trade",
    intro: "As featured in every production cycle: field-tested technologies for reliable publishing.",
  },
  id: {
    heading: "Perkakas Utama",
    intro: "Tampil di setiap siklus produksi: teknologi teruji untuk pengembangan yang andal.",
  },
};

export default function TechStack({ lang }: TechStackProps) {
  const t = copy[lang];

  return (
    <section id="tech" className="editorial-container py-14 section-rule">
      <div className="max-w-3xl" data-reveal>
        <p className="newspaper-label">Sponsored Column</p>
        <h2 className="editorial-title mt-2 text-3xl md:text-5xl">{t.heading}</h2>
        <p className="newspaper-justify mt-4 text-base leading-relaxed text-[var(--ink-soft)]">{t.intro}</p>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {groups.map((group) => (
          <div key={group.title} data-reveal className="editor-card ornate-box rounded-sm p-5">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent)]">{group.title}</h3>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {group.items.map((item) => (
                <div
                  key={item}
                  className="halftone rounded-sm border border-[var(--line)] px-2 py-2 text-center text-[0.72rem] uppercase tracking-[0.08em] text-[var(--ink)]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

