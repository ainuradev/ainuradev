import type { Lang } from "../page";

type ServicesProps = {
  lang: Lang;
};

const copy = {
  en: {
    heading: "Services Directory",
    intro: "Classified capabilities for modern digital publication and product systems.",
    items: [
      {
        title: "Front-End Development",
        description:
          "Responsive editorial-grade interfaces engineered for speed, accessibility, and consistency.",
      },
      {
        title: "Full-Stack Systems",
        description:
          "Robust backend architecture, API design, and scalable data structure for long-term growth.",
      },
      {
        title: "UI Implementation",
        description:
          "Pixel-accurate implementation with clean component structure and maintainable styling systems.",
      },
      {
        title: "Performance Optimization",
        description:
          "Speed tuning, SEO structure, and deployment refinement for reliable production delivery.",
      },
    ],
  },
  id: {
    heading: "Direktori Layanan",
    intro: "Kemampuan terstruktur untuk publikasi digital modern dan sistem produk yang kuat.",
    items: [
      {
        title: "Pengembangan Front-End",
        description:
          "Antarmuka responsif bergaya editorial yang dioptimalkan untuk kecepatan, aksesibilitas, dan konsistensi.",
      },
      {
        title: "Sistem Full-Stack",
        description:
          "Arsitektur backend kokoh, desain API, dan struktur data skalabel untuk pertumbuhan jangka panjang.",
      },
      {
        title: "Implementasi UI",
        description:
          "Implementasi pixel-accurate dengan struktur komponen bersih dan styling yang mudah dipelihara.",
      },
      {
        title: "Optimasi Performa",
        description:
          "Tuning kecepatan, struktur SEO, dan penyempurnaan deployment untuk rilis production yang andal.",
      },
    ],
  },
};

export default function Services({ lang }: ServicesProps) {
  const t = copy[lang];

  return (
    <section id="services" className="editorial-container py-14 section-rule">
      <div className="max-w-3xl" data-reveal>
        <p className="newspaper-label">Classifieds & Features</p>
        <h2 className="editorial-title mt-2 text-3xl md:text-4xl">{t.heading}</h2>
        <p className="newspaper-justify mt-4 text-base text-[var(--ink-soft)]">{t.intro}</p>
      </div>

      <div className="mt-8 grid gap-4 2xl:grid-cols-2">
        {t.items.map((service) => (
          <article key={service.title} data-reveal className="editor-card ornate-box rounded-xl p-5">
            <p className="text-[0.67rem] uppercase tracking-[0.16em] text-[var(--accent)]">Inquire Within</p>
            <h3 className="editorial-title mt-2 text-xl uppercase">{service.title}</h3>
            <p className="newspaper-justify mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">{service.description}</p>
            <a href="#contact" className="mt-4 inline-block text-xs uppercase tracking-[0.16em] text-[var(--accent)]">
              Dispatch Inquiry
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

