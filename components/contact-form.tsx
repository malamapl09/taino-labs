"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Reveal } from "./reveal";

export function ContactForm() {
  const t = useTranslations("form");
  const [charCount, setCharCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const typeOptions = [
    t("typeOptions.0"),
    t("typeOptions.1"),
    t("typeOptions.2"),
    t("typeOptions.3"),
    t("typeOptions.4"),
    t("typeOptions.5"),
    t("typeOptions.6"),
  ];

  const budgetOptions = [
    t("budgetOptions.0"),
    t("budgetOptions.1"),
    t("budgetOptions.2"),
    t("budgetOptions.3"),
    t("budgetOptions.4"),
    t("budgetOptions.5"),
  ];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const nombre = data.get("nombre") as string;
    const empresa = data.get("empresa") as string;
    const email = data.get("email") as string;
    const telefono = data.get("telefono") as string;
    const tipo = data.get("tipo") as string;
    const descripcion = data.get("descripcion") as string;
    const presupuesto = data.get("presupuesto") as string;

    const subject = encodeURIComponent(
      `[Taíno Labs] Solicitud de ${nombre}`
    );
    const body = encodeURIComponent(
      `Nueva solicitud — Taíno Labs
━━━━━━━━━━━━━━━━━━━━━━━
Nombre:      ${nombre}
Empresa:     ${empresa || "No indicada"}
Email:       ${email}
Teléfono:    ${telefono || "No indicado"}

Tipo:        ${tipo}
Presupuesto: ${presupuesto || "No indicado"}

Descripción:
${descripcion}

━━━━━━━━━━━━━━━━━━━━━━━
Fecha: ${new Date().toLocaleString("es-DO", { timeZone: "America/Santo_Domingo" })}`
    );

    await new Promise((r) => setTimeout(r, 600));
    window.location.href = `mailto:TU_EMAIL@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitting(false);
    setIsSuccess(true);
  }

  const inputClass =
    "w-full bg-transparent border-0 border-b border-line text-ink font-sans text-[0.9rem] font-light py-2.5 outline-none focus:border-ink transition-colors placeholder:text-muted-text/40 rounded-none";

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-5 md:px-10 bg-white" id="solicitar">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 max-w-[1100px]">
        {/* Left side */}
        <Reveal>
          <div className="text-[0.68rem] font-medium tracking-[0.16em] uppercase text-muted-text mb-8 sm:mb-14 flex items-center gap-3">
            {t("tag")}
            <span className="flex-1 h-px bg-line max-w-[60px]" />
          </div>
          <h2 className="font-serif text-[clamp(1.75rem,4vw,3.5rem)] leading-[1.05] tracking-tight text-ink mb-4">
            {t("title1")}
            <br />
            {t("title2")} <em className="italic text-muted-text">{t("title3")}</em>
          </h2>
          <p className="text-[0.86rem] leading-7 text-muted-text mb-6 sm:mb-8">
            {t("subtitle")}
          </p>
          <div className="pl-4 border-l-2 border-gold bg-gold/5 py-4 pr-4">
            <p className="text-[0.78rem] text-ink leading-relaxed">
              {t.rich("note", {
                strong: (chunks) => (
                  <strong className="font-medium text-gold">{chunks}</strong>
                ),
              })}
            </p>
          </div>
        </Reveal>

        {/* Right side - Form */}
        <Reveal>
          {!isSuccess ? (
            <form onSubmit={handleSubmit}>
              {/* Name + Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                <div className="mb-5">
                  <label className="block text-[0.68rem] font-medium tracking-[0.12em] uppercase text-muted-text mb-1.5">
                    {t("name")}
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    placeholder={t("namePlaceholder")}
                    required
                    className={inputClass}
                  />
                </div>
                <div className="mb-5">
                  <label className="block text-[0.68rem] font-medium tracking-[0.12em] uppercase text-muted-text mb-1.5">
                    {t("company")}
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    placeholder={t("companyPlaceholder")}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
                <div className="mb-5">
                  <label className="block text-[0.68rem] font-medium tracking-[0.12em] uppercase text-muted-text mb-1.5">
                    {t("email")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder={t("emailPlaceholder")}
                    required
                    className={inputClass}
                  />
                </div>
                <div className="mb-5">
                  <label className="block text-[0.68rem] font-medium tracking-[0.12em] uppercase text-muted-text mb-1.5">
                    {t("phone")}
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    placeholder={t("phonePlaceholder")}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Solution type */}
              <div className="mb-5">
                <label className="block text-[0.68rem] font-medium tracking-[0.12em] uppercase text-muted-text mb-1.5">
                  {t("type")}
                </label>
                <select
                  name="tipo"
                  required
                  defaultValue=""
                  className={`${inputClass} cursor-pointer appearance-none`}
                >
                  <option value="" disabled>
                    {t("typePlaceholder")}
                  </option>
                  {typeOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-white text-ink">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div className="mb-5">
                <label className="block text-[0.68rem] font-medium tracking-[0.12em] uppercase text-muted-text mb-1.5">
                  {t("description")}
                </label>
                <textarea
                  name="descripcion"
                  placeholder={t("descriptionPlaceholder")}
                  required
                  maxLength={1000}
                  onChange={(e) => setCharCount(e.target.value.length)}
                  className={`${inputClass} resize-none min-h-[100px] leading-relaxed`}
                />
                <div
                  className={`text-[0.68rem] text-right mt-1 transition-colors ${
                    charCount > 700 ? "text-muted-text" : "text-line"
                  }`}
                >
                  {charCount} / 1000
                </div>
              </div>

              {/* Budget */}
              <div className="mb-5">
                <label className="block text-[0.68rem] font-medium tracking-[0.12em] uppercase text-muted-text mb-1.5">
                  {t("budget")}
                </label>
                <select
                  name="presupuesto"
                  defaultValue=""
                  className={`${inputClass} cursor-pointer appearance-none`}
                >
                  <option value="" disabled>
                    {t("budgetPlaceholder")}
                  </option>
                  {budgetOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-white text-ink">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-ink text-white border-0 font-sans font-medium text-[0.78rem] tracking-[0.1em] uppercase py-4 px-6 cursor-pointer hover:opacity-65 transition-opacity mt-3 flex items-center justify-center gap-2 rounded-sm disabled:opacity-35 disabled:pointer-events-none min-h-[48px]"
              >
                <span>{isSubmitting ? t("submitting") : t("submit")}</span>
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          ) : (
            <div className="py-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="w-10 h-10 border border-ink rounded-full flex items-center justify-center mb-5">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-ink mb-1.5 tracking-tight">
                {t("successTitle")}
              </h3>
              <p className="text-[0.85rem] text-muted-text leading-7 max-w-[340px]">
                {t("successMessage")}
              </p>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
