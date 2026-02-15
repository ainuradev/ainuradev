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
    heading: "Technology Stack",
    intro: "Tools and technologies I use to build scalable, production-ready applications.",
  },
  id: {
    heading: "Technology Stack",
    intro: "Tools dan teknologi yang saya gunakan untuk membangun aplikasi production-ready dan skalabel.",
  },
};

export default function TechStack({ lang }: TechStackProps) {
  const t = copy[lang];

  return (
    <section className="editorial-container py-14 section-rule">
      <div className="max-w-3xl" data-reveal>
        <p className="text-xs uppercase tracking-[0.16em] text-[var(--ink-soft)]">Production Tools</p>
        <h2 className="editorial-title mt-3 text-3xl md:text-5xl">{t.heading}</h2>
        <p className="mt-4 text-base leading-relaxed text-[var(--ink-soft)]">{t.intro}</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {groups.map((group) => (
          <div key={group.title} data-reveal className="editor-card rounded-xl p-6">
            <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-[var(--ink)]">
              {group.title}
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {group.items.map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-[var(--line)] bg-[rgba(255,255,255,0.44)] px-3 py-2 text-center text-xs text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
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
