import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="py-7 px-5 md:px-10 border-t border-line flex items-center justify-between flex-wrap gap-3">
      <a
        href="#"
        className="font-serif text-xl text-ink no-underline tracking-tight"
      >
        Taino Labs
        <sup className="font-sans text-[0.52rem] font-medium tracking-widest uppercase text-muted-text align-super ml-1">
          RD
        </sup>
      </a>
      <p className="text-[0.75rem] text-muted-text">{t("copy")}</p>
    </footer>
  );
}
