import { useTranslations } from "next-intl";
import { Reveal } from "./reveal";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="min-h-screen flex flex-col justify-end px-5 md:px-10 pb-20 border-b border-line relative overflow-hidden">
      {/* Background watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none select-none">
        <span className="font-serif italic text-[clamp(4.5rem,11vw,11rem)] text-ink/[0.18] whitespace-nowrap tracking-tight leading-none block">
          Taino Labs
          <sup className="text-[0.28em] not-italic font-sans font-medium tracking-widest align-super text-ink/[0.18] ml-1.5">
            RD
          </sup>
        </span>
        <span className="font-sans text-[clamp(0.7rem,1.1vw,0.9rem)] font-normal tracking-[0.2em] uppercase text-ink/[0.3] whitespace-nowrap mt-2 block">
          {t("bgSlogan")}
        </span>
      </div>

      {/* Content */}
      <Reveal className="relative flex items-end justify-between gap-12 flex-wrap">
        <h1 className="font-serif text-[clamp(3rem,7.5vw,7rem)] leading-[0.97] tracking-tight text-ink max-w-[700px]">
          {t("title1")}
          <br />
          <em className="italic text-gold">{t("title2")}</em>
        </h1>
        <div className="max-w-[280px] shrink-0">
          <p className="text-[0.88rem] leading-7 text-muted-text mb-8">
            {t("subtitle")}
          </p>
          <a
            href="#solicitar"
            className="inline-flex items-center gap-2 text-[0.8rem] font-medium text-ink no-underline border-b border-current pb-0.5 hover:gap-3 hover:opacity-55 transition-all"
          >
            {t("cta")}
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
          </a>
        </div>
      </Reveal>
    </section>
  );
}
