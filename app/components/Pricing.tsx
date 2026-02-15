import type { Lang } from "../page";

type PricingProps = {
  lang: Lang;
};

const copy = {
  en: {
    heading: "Subscription Rates & Packages",
    fine: "Custom rates available upon request.",
    plans: [
      {
        name: "Daily Edition",
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
        name: "Weekly Premium",
        price: "$179+",
        description: "For teams requiring full product development.",
        features: [
          "Multi-page front-end architecture",
          "Backend, API, and database implementation",
          "Performance tuning and deployment support",
        ],
        featured: true,
      },
      {
        name: "Full Archive",
        price: "Custom Scope",
        description: "For long-term platforms with dedicated support.",
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
    heading: "Tarif Langganan & Paket",
    fine: "Tarif khusus tersedia sesuai kebutuhan.",
    plans: [
      {
        name: "Edisi Harian",
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
        name: "Premium Mingguan",
        price: "$179+",
        description: "Untuk tim yang membutuhkan pengembangan produk penuh.",
        features: [
          "Arsitektur front-end multi-halaman",
          "Implementasi backend, API, dan database",
          "Tuning performa dan dukungan deployment",
        ],
        featured: true,
      },
      {
        name: "Arsip Lengkap",
        price: "Ruang Lingkup Kustom",
        description: "Untuk platform jangka panjang dengan dukungan khusus.",
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
        <p className="newspaper-label">Rates Ledger</p>
        <h2 className="editorial-title mt-2 text-3xl md:text-5xl">{t.heading}</h2>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {t.plans.map((plan) => (
          <article
            key={plan.name}
            data-reveal
            className={`ornate-box rounded-sm border p-6 transition-all duration-300 ${
              plan.featured ? "border-[var(--line-strong)] bg-[rgba(139,47,47,0.06)]" : "editor-card"
            }`}
          >
            <h3 className="editorial-title text-2xl uppercase">{plan.name}</h3>
            <p className="mt-2 text-sm text-[var(--ink-soft)]">{plan.description}</p>
            <p className="editorial-title mt-5 text-4xl">{plan.price}</p>
            <ul className="mt-5 space-y-2 text-sm text-[var(--ink-soft)]">
              {plan.features.map((feature) => (
                <li key={feature}>? {feature}</li>
              ))}
            </ul>
            <a href="#contact" className="stamp-btn mt-5 inline-block text-[0.68rem]">
              Subscribe Now
            </a>
          </article>
        ))}
      </div>
      <p className="mt-4 text-xs italic text-[var(--ink-soft)]">* {t.fine}</p>
    </section>
  );
}

