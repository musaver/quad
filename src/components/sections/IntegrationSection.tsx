import Image from "next/image";
import { INTEGRATION_SECTION } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ButtonMain } from "@/components/shared/ButtonMain";
import { PlusIcon } from "@/icons";

function IntegrationStep({ number, text }: { number: string; text: string }) {
  return (
    <div className="flex gap-3 items-center w-full">
      <div className="bg-black rounded-full size-7 flex items-center justify-center shrink-0">
        <span className="font-[family-name:var(--font-albert-sans)] text-xs font-medium text-white uppercase tracking-[-0.36px]">
          {number}
        </span>
      </div>
      <span className="font-[family-name:var(--font-geist)] text-base md:text-lg text-[var(--color-text-muted)] tracking-[-0.54px]">
        {text}
      </span>
    </div>
  );
}

function LogoGrid() {
  const logos = INTEGRATION_SECTION.logos;
  const col1 = logos.slice(0, 5);
  const col2 = logos.slice(3, 8);

  return (
    <div className="h-[300px] md:h-[465px] overflow-hidden relative shrink-0">
      <div className="flex gap-3 md:gap-4">
        <div className="w-[80px] md:w-[100px] h-[300px] md:h-[465px] overflow-hidden rounded-[10px]">
          <div className="flex flex-col gap-3 animate-marquee">
            {[...col1, ...col1].map((logo, i) => (
              <div key={i} className="bg-[var(--color-section-bg)] rounded-2xl size-[80px] md:size-[100px] flex items-center justify-center overflow-hidden p-5 md:p-7 shrink-0">
                <Image src={logo.src} alt={logo.alt} width={44} height={44} className="object-contain" />
              </div>
            ))}
          </div>
        </div>
        <div className="w-[80px] md:w-[100px] h-[300px] md:h-[465px] overflow-hidden rounded-[10px]">
          <div className="flex flex-col gap-3 animate-marquee-reverse">
            {[...col2, ...col2].map((logo, i) => (
              <div key={i} className="bg-[var(--color-section-bg)] rounded-2xl size-[80px] md:size-[100px] flex items-center justify-center overflow-hidden p-5 md:p-7 shrink-0">
                <Image src={logo.src} alt={logo.alt} width={44} height={44} className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function IntegrationSection() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center py-10 lg:py-20 z-10">
      <div className="max-w-[1200px] w-full flex flex-col lg:flex-row items-center lg:items-center lg:justify-between gap-10 lg:gap-0 px-5 md:px-10 lg:px-20">
        <div className="flex flex-col gap-10 lg:gap-16 flex-1 max-w-full lg:max-w-[600px]">
          <div className="flex flex-col gap-5">
            <SectionHeader
              title={INTEGRATION_SECTION.title}
              subtitle={INTEGRATION_SECTION.subtitle}
              align="left"
            />
            <ButtonMain label={INTEGRATION_SECTION.cta} className="self-start" />
          </div>

          <div className="hidden md:flex gap-10 lg:gap-16 items-center justify-center px-5">
            <PlusIcon />
            <PlusIcon />
            <PlusIcon />
            <PlusIcon />
          </div>

          <div className="flex flex-col gap-4 md:gap-5 overflow-hidden">
            {INTEGRATION_SECTION.steps.map((step) => (
              <IntegrationStep key={step.number} number={step.number} text={step.text} />
            ))}
          </div>
        </div>

        <LogoGrid />
      </div>
    </section>
  );
}
