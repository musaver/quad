interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}

export function SectionHeader({ title, subtitle, align = "center", light = false }: SectionHeaderProps) {
  return (
    <div className={`flex flex-col gap-3 md:gap-5 w-full max-w-full lg:max-w-[600px] ${align === "center" ? "items-center text-center" : "items-start text-left"}`}>
      <h2
        className={`font-[family-name:var(--font-albert-sans)] text-[28px] md:text-[34px] lg:text-[40px] leading-[1.1] tracking-[-1.4px] md:tracking-[-1.7px] lg:tracking-[-2px] ${
          light ? "text-white" : "text-black"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`font-[family-name:var(--font-geist)] text-base lg:text-lg leading-[22.4px] lg:leading-[25.2px] tracking-[-0.48px] lg:tracking-[-0.54px] ${
            light ? "text-white/80" : "text-[var(--color-text-muted)]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
