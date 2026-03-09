import { useTranslations } from "next-intl";
import { Reveal } from "./reveal";

export function FreeBanner() {
  const t = useTranslations("banner");

  return (
    <Reveal>
      <div className="bg-ink text-white text-center py-3.5 px-8 text-[0.8rem] tracking-wide border-b border-line">
        <strong className="font-medium">{t("bold")}</strong> {t("text")}
      </div>
    </Reveal>
  );
}
