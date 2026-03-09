import { useTranslations } from "next-intl";
import { Reveal } from "./reveal";

export function Payment() {
  const t = useTranslations("payment");

  const items = [
    t.raw("items.0"),
    t.raw("items.1"),
    t.raw("items.2"),
  ] as { pct: string; label: string; desc: string }[];

  return (
    <div className="flex flex-col md:flex-row items-stretch py-12 px-5 md:px-10 border-b border-line">
      {items.map((item, i) => (
        <Reveal
          key={i}
          delay={i * 70}
          className={`flex-1 ${
            i < items.length - 1
              ? "md:border-r border-line md:pr-10 md:mr-10 pb-8 md:pb-0 border-b md:border-b-0 mb-8 md:mb-0"
              : ""
          }`}
        >
          <div className="font-serif text-6xl text-ink leading-none mb-2">
            {item.pct}
          </div>
          <div className="text-[0.85rem] font-medium text-ink mb-1">
            {item.label}
          </div>
          <div className="text-[0.78rem] text-muted-text leading-relaxed">
            {item.desc}
          </div>
        </Reveal>
      ))}
    </div>
  );
}
