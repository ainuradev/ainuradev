"use client";

import { FormEvent, useState } from "react";
import type { Lang } from "../page";

type ContactProps = {
  lang: Lang;
};

const copy = {
  en: {
    heading: "Let's Work Together.",
    description:
      "If you're looking for a developer who values structure, performance, and long-term scalability, let's talk.",
    name: "Name",
    email: "Email",
    details: "Project Details",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@company.com",
    detailsPlaceholder: "Tell me about your project...",
    button: "Send Message",
    sending: "Sending...",
    success: "Message sent successfully.",
    error: "Failed to send message. Please try again.",
  },
  id: {
    heading: "Mari Bekerja Sama.",
    description:
      "Jika kamu mencari developer yang mengutamakan struktur, performa, dan skalabilitas jangka panjang, mari berdiskusi.",
    name: "Nama",
    email: "Email",
    details: "Detail Proyek",
    namePlaceholder: "Nama kamu",
    emailPlaceholder: "kamu@perusahaan.com",
    detailsPlaceholder: "Ceritakan proyek kamu...",
    button: "Kirim Pesan",
    sending: "Mengirim...",
    success: "Pesan berhasil terkirim.",
    error: "Pesan gagal dikirim. Silakan coba lagi.",
  },
};

export default function Contact({ lang }: ContactProps) {
  const t = copy[lang];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify({
      ...object,
      access_key: "0a05cbba-155e-4125-a77f-65eba14c1672",
      subject: "New contact form submission from AINURA DEV",
      from_name: "AINURA DEV Portfolio",
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const raw = await response.text();
      let isSuccess = response.ok;

      if (raw) {
        try {
          const result = JSON.parse(raw) as { success?: boolean | string };
          if (typeof result.success === "boolean") {
            isSuccess = response.ok && result.success;
          } else if (typeof result.success === "string") {
            isSuccess = response.ok && result.success.toLowerCase() === "true";
          }
        } catch {
          isSuccess = response.ok;
        }
      }

      if (isSuccess) {
        form.reset();
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="editorial-container py-14 section-rule">
      <div className="grid gap-10 md:grid-cols-[0.8fr,1.2fr]">
        <div data-reveal>
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--ink-soft)]">Open Correspondence</p>
          <h2 className="editorial-title mt-3 text-3xl md:text-5xl">{t.heading}</h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--ink-soft)]">{t.description}</p>
        </div>

        <form data-reveal className="editor-card rounded-xl p-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-sm text-[var(--ink-soft)]" htmlFor="name">
                {t.name}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder={t.namePlaceholder}
                required
                className="w-full rounded-lg border border-[var(--line)] bg-[rgba(255,255,255,0.7)] px-4 py-3 text-sm text-[var(--ink)] outline-none transition-colors focus:border-[var(--line-strong)]"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm text-[var(--ink-soft)]" htmlFor="email">
                {t.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder={t.emailPlaceholder}
                required
                className="w-full rounded-lg border border-[var(--line)] bg-[rgba(255,255,255,0.7)] px-4 py-3 text-sm text-[var(--ink)] outline-none transition-colors focus:border-[var(--line-strong)]"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm text-[var(--ink-soft)]" htmlFor="details">
                {t.details}
              </label>
              <textarea
                id="details"
                name="message"
                rows={5}
                placeholder={t.detailsPlaceholder}
                required
                className="w-full resize-none rounded-lg border border-[var(--line)] bg-[rgba(255,255,255,0.7)] px-4 py-3 text-sm text-[var(--ink)] outline-none transition-colors focus:border-[var(--line-strong)]"
              />
            </div>

            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            {status !== "idle" && (
              <p className={`text-sm ${status === "success" ? "text-green-700" : "text-red-700"}`}>
                {status === "success" ? t.success : t.error}
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full border border-[var(--line-strong)] bg-[var(--ink)] px-5 py-3 text-sm text-[var(--paper)] transition-colors hover:bg-[rgba(30,25,19,0.88)] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? t.sending : t.button}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
