import Image from "next/image";
import { LOGO_SECTION } from "@/lib/constants";

export function LogoSection({ label = "Trusted by growing teams" }: { label?: string }) {
  const logos = LOGO_SECTION.logos;
  const doubled = [...logos, ...logos];

  return (
    <section className="w-full flex flex-col items-center justify-center py-8 md:py-12 bg-[var(--color-page-bg)]">
      <div className="max-w-[1200px] w-full px-5 md:px-10 lg:px-20">
        <p className="text-center text-sm tracking-[1.5px] uppercase text-[var(--color-text-muted)] font-[family-name:var(--font-geist)] mb-6 md:mb-8">
          {label}
        </p>

        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 md:w-16 z-10 bg-gradient-to-r from-[var(--color-page-bg)] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 md:w-16 z-10 bg-gradient-to-l from-[var(--color-page-bg)] to-transparent pointer-events-none" />

          <div className="animate-marquee-h flex items-center gap-12 md:gap-20 w-max">
            {doubled.map((logo, i) => (
              <div
                key={`${logo.alt}-${i}`}
                className="flex-shrink-0 h-7 md:h-9 w-auto opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={36}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
