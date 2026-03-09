import { useTranslations } from "next-intl";
import { Reveal } from "./reveal";

export function Trust() {
  const t = useTranslations("trust");

  const items = Array.from({ length: 4 }, (_, i) =>
    t.raw(`items.${i}`)
  ) as { value: string; label: string }[];

  return (
    <section className="py-12 px-5 md:px-10 border-b border-line">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
        {items.map((item, i) => (
          <Reveal key={i} delay={i * 60}>
            <div
              className={`py-4 md:py-0 ${
                i < items.length - 1
                  ? "lg:border-r border-line lg:pr-8 lg:mr-0"
                  : ""
              } ${i > 0 ? "lg:pl-8" : ""} ${
                i < 2 ? "border-b lg:border-b-0 pb-6 lg:pb-0" : "pt-6 lg:pt-0"
              }`}
            >
              <div className="font-serif text-3xl md:text-4xl text-ink leading-none mb-1.5">
                {item.value}
              </div>
              <div className="text-[0.78rem] text-muted-text leading-snug">
                {item.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
