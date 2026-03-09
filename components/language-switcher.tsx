"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale() {
    const next = locale === "es" ? "en" : "es";
    router.replace(pathname, { locale: next });
  }

  return (
    <button
      onClick={switchLocale}
      className="text-[0.78rem] font-medium tracking-wide text-muted-text hover:text-ink transition-colors cursor-pointer"
    >
      {locale === "es" ? "EN" : "ES"}
    </button>
  );
}
