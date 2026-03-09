import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./language-switcher";

export function Nav() {
  const t = useTranslations("nav");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-5 bg-cream/90 backdrop-blur-2xl border-b border-line">
      <a
        href="#"
        className="font-serif text-xl text-ink no-underline tracking-tight"
      >
        Taino Labs
        <sup className="font-sans text-[0.52rem] font-medium tracking-widest uppercase text-muted-text align-super ml-1">
          RD
        </sup>
      </a>
      <div className="flex items-center gap-5">
        <LanguageSwitcher />
        <a
          href="#solicitar"
          className="text-[0.78rem] font-medium tracking-wide text-white bg-ink px-4 py-2 no-underline rounded-sm hover:opacity-70 transition-opacity"
        >
          {t("cta")} &rarr;
        </a>
      </div>
    </nav>
  );
}
