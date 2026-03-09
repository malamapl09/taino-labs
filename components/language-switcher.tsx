"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale() {
    const next = locale === "es" ? "en" : "es";
    const segments = pathname.split("/");

    // Remove current locale prefix if present
    if (segments[1] === "es" || segments[1] === "en") {
      segments.splice(1, 1);
    }

    // Add new locale prefix (skip for default "es")
    const newPath =
      next === "es" ? segments.join("/") || "/" : `/${next}${segments.join("/") || "/"}`;

    router.push(newPath);
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
