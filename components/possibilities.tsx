import { useTranslations } from "next-intl";
import { Reveal } from "./reveal";

const icons: Record<string, React.ReactNode> = {
  repeat: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 1l4 4-4 4" />
      <path d="M3 11V9a4 4 0 014-4h14" />
      <path d="M7 23l-4-4 4-4" />
      <path d="M21 13v2a4 4 0 01-4 4H3" />
    </svg>
  ),
  message: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  ),
  chart: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  ),
  file: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  ),
  tool: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  strategy: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
      <path d="M8 12h.01" />
      <path d="M16 12h.01" />
      <path d="M12 12l3-3" />
    </svg>
  ),
};

export function Possibilities() {
  const t = useTranslations("possibilities");

  const items = Array.from({ length: 6 }, (_, i) =>
    t.raw(`items.${i}`)
  ) as { icon: string; title: string; desc: string; example: string }[];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-5 md:px-10 border-b border-line">
      {/* Header */}
      <div className="max-w-[600px] mb-10 sm:mb-16">
        <div className="text-[0.68rem] font-medium tracking-[0.16em] uppercase text-muted-text mb-6 flex items-center gap-3">
          {t("tag")}
          <span className="flex-1 h-px bg-line max-w-[60px]" />
        </div>
        <Reveal>
          <h2 className="font-serif text-[clamp(1.75rem,4vw,3.5rem)] leading-[1.05] tracking-tight text-ink mb-4">
            {t("title1")} <em className="italic text-gold">{t("title2")}</em>{" "}
            {t("title3")}
          </h2>
          <p className="text-[0.88rem] leading-7 text-muted-text">
            {t("subtitle")}
          </p>
        </Reveal>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
        {items.map((item, i) => (
          <Reveal key={i} delay={i * 60}>
            <div
              className={`px-4 py-6 sm:p-8 border-line ${
                i % 3 !== 2 ? "lg:border-r" : ""
              } ${
                i < 3 ? "border-b" : ""
              } ${
                i % 2 === 0 ? "md:border-r lg:border-r-0" : ""
              } ${
                i % 3 !== 2 ? "lg:border-r" : ""
              } ${
                i < 4 ? "md:border-b" : "md:border-b-0"
              } ${
                i < 3 ? "lg:border-b" : "lg:border-b-0"
              }`}
            >
              <div className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-muted-text mb-4 sm:mb-5">
                {icons[item.icon]}
              </div>
              <h3 className="text-[0.92rem] font-medium text-ink mb-2 tracking-tight">
                {item.title}
              </h3>
              <p className="text-[0.81rem] leading-relaxed text-muted-text mb-3">
                {item.desc}
              </p>
              <p className="text-[0.72rem] text-gold/80 italic leading-relaxed">
                {item.example}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
