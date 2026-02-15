"use client";

import { FormEvent, useState } from "react";
import type { Lang } from "../page";

type ContactProps = {
  lang: Lang;
};

const copy = {
  en: {
    heading: "Get In Touch - Personal Inquiries",
    description:
      "Correspondence accepted for projects requiring structure, speed, and long-term scalability.",
    name: "Name",
    email: "Email",
    details: "Project Details",
    namePlaceholder: "Your full name",
    emailPlaceholder: "you@company.com",
    detailsPlaceholder: "Describe your request...",
    button: "Dispatch Message",
    sending: "Dispatching...",
    success: "Telegram sent successfully.",
    error: "Dispatch failed. Please retry.",
  },
  id: {
    heading: "Hubungi Kami - Korespondensi Personal",
    description:
      "Korespondensi diterima untuk proyek dengan kebutuhan struktur, kecepatan, dan skalabilitas jangka panjang.",
    name: "Nama",
    email: "Email",
    details: "Detail Proyek",
    namePlaceholder: "Nama lengkap kamu",
    emailPlaceholder: "kamu@perusahaan.com",
    detailsPlaceholder: "Jelaskan kebutuhan kamu...",
    button: "Kirim Pesan",
    sending: "Mengirim...",
    success: "Telegram berhasil dikirim.",
    error: "Pengiriman gagal. Silakan coba lagi.",
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
      <div className="grid gap-8 md:grid-cols-[0.85fr,1.15fr]">
        <div data-reveal>
          <p className="newspaper-label">Personal Column</p>
          <h2 className="editorial-title mt-2 text-3xl md:text-5xl">{t.heading}</h2>
          <p className="newspaper-justify mt-4 max-w-xl text-base leading-relaxed text-[var(--ink-soft)]">{t.description}</p>
          <p className="mt-4 text-xs uppercase tracking-[0.14em] text-[var(--accent)]">Correspondence accepted via: Email / Social Dispatch</p>
        </div>

        <form data-reveal className="editor-card ornate-box rounded-sm p-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-[var(--ink-soft)]" htmlFor="name">
                {t.name}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder={t.namePlaceholder}
                required
                className="newspaper-input"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-[var(--ink-soft)]" htmlFor="email">
                {t.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder={t.emailPlaceholder}
                required
                className="newspaper-input"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs uppercase tracking-[0.14em] text-[var(--ink-soft)]" htmlFor="details">
                {t.details}
              </label>
              <textarea
                id="details"
                name="message"
                rows={5}
                placeholder={t.detailsPlaceholder}
                required
                className="newspaper-input resize-none"
              />
            </div>

            <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

            {status !== "idle" && (
              <p className={`text-sm ${status === "success" ? "text-[var(--accent)]" : "text-[var(--ink-soft)]"}`}>
                {status === "success" ? t.success : t.error}
              </p>
            )}

            <button type="submit" disabled={isSubmitting} className="stamp-btn stamp-btn-solid w-full justify-center">
              {isSubmitting ? t.sending : t.button}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

