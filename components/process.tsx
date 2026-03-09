import { useTranslations } from "next-intl";
import { Reveal } from "./reveal";

export function Process() {
  const t = useTranslations("process");

  const steps = [
    t.raw("steps.0"),
    t.raw("steps.1"),
    t.raw("steps.2"),
    t.raw("steps.3"),
  ] as { title: string; desc: string }[];

  return (
    <section className="py-24 px-5 md:px-10 border-b border-line">
      <div className="text-[0.68rem] font-medium tracking-[0.16em] uppercase text-muted-text mb-14 flex items-center gap-3">
        {t("tag")}
        <span className="flex-1 h-px bg-line max-w-[60px]" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <Reveal key={i} delay={i * 70}>
            <div
              className={`pr-0 lg:pr-8 ${
                i < steps.length - 1
                  ? "lg:border-r border-line"
                  : ""
              } ${i > 0 ? "lg:pl-8 mt-10 sm:mt-0" : ""}`}
            >
              <div className="font-serif text-4xl text-line leading-none mb-5">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-[0.88rem] font-medium text-ink mb-1.5 tracking-tight">
                {step.title}
              </h3>
              <p className="text-[0.81rem] leading-relaxed text-muted-text">
                {step.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
