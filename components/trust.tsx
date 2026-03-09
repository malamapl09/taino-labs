import { useTranslations } from "next-intl";
import { Reveal } from "./reveal";

export function Trust() {
  const t = useTranslations("trust");

  const items = Array.from({ length: 4 }, (_, i) =>
    t.raw(`items.${i}`)
  ) as { value: string; label: string }[];

  return (
    <section className="py-10 sm:py-12 px-4 sm:px-5 md:px-10 border-b border-line">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-0">
        {items.map((item, i) => (
          <Reveal key={i} delay={i * 60}>
            <div
              className={`${
                i < items.length - 1
                  ? "lg:border-r border-line lg:pr-8"
                  : ""
              } ${i > 0 ? "lg:pl-8" : ""} ${
                i < 2 ? "border-b sm:border-b lg:border-b-0 pb-5 sm:pb-6 lg:pb-0" : "pt-0 lg:pt-0"
              }`}
            >
              <div className="font-serif text-2xl sm:text-3xl md:text-4xl text-ink leading-none mb-1">
                {item.value}
              </div>
              <div className="text-[0.72rem] sm:text-[0.78rem] text-muted-text leading-snug">
                {item.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
