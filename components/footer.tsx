import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="py-6 sm:py-7 px-4 sm:px-5 md:px-10 border-t border-line flex flex-col sm:flex-row items-center sm:justify-between gap-3 text-center sm:text-left">
      <a
        href="#"
        className="font-serif text-lg sm:text-xl text-ink no-underline tracking-tight"
      >
        Taino Labs
        <sup className="font-sans text-[0.52rem] font-medium tracking-widest uppercase text-muted-text align-super ml-1">
          RD
        </sup>
      </a>
      <p className="text-[0.7rem] sm:text-[0.75rem] text-muted-text">{t("copy")}</p>
    </footer>
  );
}
