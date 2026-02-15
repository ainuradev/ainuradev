import type { Lang } from "../page";

type PricingProps = {
  lang: Lang;
};

const copy = {
  en: {
    heading: "Clear Scope. Transparent Structure.",
    plans: [
      {
        name: "Starter",
        price: "$89+",
        description: "For focused launches and early-stage products.",
        features: [
          "Landing page or small website scope",
          "Responsive front-end implementation",
          "Core performance and SEO setup",
        ],
        featured: false,
      },
      {
        name: "Business",
        price: "$179+",
        description: "For growth-stage teams requiring full product development.",
        features: [
          "Multi-page front-end architecture",
          "Backend, API, and database implementation",
          "Performance tuning and deployment support",
        ],
        featured: true,
      },
      {
        name: "Custom",
        price: "Custom Scope",
        description: "For large or long-term platforms with dedicated support.",
        features: [
          "Complex workflows and integrations",
          "Scalable system architecture",
          "Priority support and iterative roadmap",
        ],
        featured: false,
      },
    ],
  },
  id: {
    heading: "Ruang Lingkup Jelas. Struktur Transparan.",
    plans: [
      {
        name: "Starter",
        price: "$89+",
        description: "Untuk peluncuran terfokus dan produk tahap awal.",
        features: [
          "Landing page atau website skala kecil",
          "Implementasi front-end responsif",
          "Setup performa dan SEO dasar",
        ],
        featured: false,
      },
      {
        name: "Business",
        price: "$179+",
        description: "Untuk tim yang bertumbuh dan butuh pengembangan produk penuh.",
        features: [
          "Arsitektur front-end multi-halaman",
          "Implementasi backend, API, dan database",
          "Tuning performa dan dukungan deployment",
        ],
        featured: true,
      },
      {
        name: "Custom",
        price: "Ruang Lingkup Kustom",
        description: "Untuk platform besar atau jangka panjang dengan dukungan khusus.",
        features: [
          "Workflow kompleks dan integrasi lanjutan",
          "Arsitektur sistem yang skalabel",
          "Dukungan prioritas dan roadmap iteratif",
        ],
        featured: false,
      },
    ],
  },
};

export default function Pricing({ lang }: PricingProps) {
  const t = copy[lang];

  return (
    <section id="pricing" className="editorial-container py-14 section-rule">
      <div className="max-w-2xl" data-reveal>
        <p className="text-xs uppercase tracking-[0.16em] text-[var(--ink-soft)]">Rate Card</p>
        <h2 className="editorial-title mt-3 text-3xl md:text-5xl">{t.heading}</h2>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {t.plans.map((plan) => (
          <article
            key={plan.name}
            data-reveal
            className={`rounded-xl border p-7 transition-all duration-300 ${
              plan.featured
                ? "border-[var(--line-strong)] bg-[rgba(255,255,255,0.8)]"
                : "editor-card"
            }`}
          >
            <h3 className="editorial-title text-3xl">{plan.name}</h3>
            <p className="mt-2 text-sm text-[var(--ink-soft)]">{plan.description}</p>
            <p className="editorial-title mt-6 text-4xl">{plan.price}</p>
            <ul className="mt-6 space-y-3 text-sm text-[var(--ink-soft)]">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
