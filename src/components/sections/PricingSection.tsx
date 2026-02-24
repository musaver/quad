"use client";

import { useState } from "react";
import Image from "next/image";
import { PRICING } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ButtonMain } from "@/components/shared/ButtonMain";
import { CheckIcon, CircleArrowIcon, PenToolIcon } from "@/icons";

function PlanListItem({
  name,
  description,
  active,
  onClick,
}: {
  name: string;
  description: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-2xl w-full text-left transition-all cursor-pointer ${
        active
          ? "bg-white/10 shadow-[5px_8px_15px_0px_rgba(0,0,0,0.15)]"
          : "bg-white/10 opacity-60 hover:opacity-80"
      }`}
    >
      <div className="flex items-center justify-between px-5 py-4">
        <div className="flex flex-col gap-px flex-1">
          <h4 className="font-[family-name:var(--font-albert-sans)] text-xl text-white tracking-[-0.8px] leading-[26px]">
            {name}
          </h4>
          <p className="font-[family-name:var(--font-geist)] text-sm text-white/60 tracking-[-0.42px] leading-[19.6px]">
            {description}
          </p>
        </div>
        {active && <CircleArrowIcon className="size-6" stroke="white" />}
      </div>
    </button>
  );
}

function ProfileAvatars() {
  return (
    <div className="flex -space-x-1.5">
      {PRICING.profiles.map((src, i) => (
        <div
          key={i}
          className="relative size-8 rounded-full overflow-hidden shadow-[5px_8px_15px_0px_rgba(0,0,0,0.15)] border border-[#e6e6e6]"
        >
          <Image src={src} alt="Customer" fill className="object-cover" />
        </div>
      ))}
    </div>
  );
}

export function PricingSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePlan = PRICING.plans[activeIndex];

  return (
    <section
      id="pricing"
      className="relative w-full flex flex-col items-center justify-center px-5 py-10 lg:py-20 z-10"
    >
      <div className="w-full rounded-[20px] md:rounded-[32px] overflow-hidden relative">
        <Image
          src="/images/pricing-bg.png"
          alt=""
          fill
          className="object-cover"
        />

        <div className="relative flex flex-col lg:flex-row items-start justify-between px-5 md:px-10 lg:px-[60px] py-10 lg:py-20 gap-8 lg:gap-0 bg-black/50">
          {/* Left: Plan selector */}
          <div className="flex flex-col h-full justify-between max-w-[600px] w-full lg:w-[356px]">
            <div className="flex flex-col gap-10">
              <SectionHeader title={PRICING.title} align="left" light />

              <div className="bg-black/30 rounded-3xl overflow-hidden p-2 flex flex-col gap-2">
                {PRICING.plans.map((plan, i) => (
                  <PlanListItem
                    key={plan.name}
                    name={plan.name}
                    description={plan.description}
                    active={i === activeIndex}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            </div>

            <div className="flex gap-3 items-center mt-8">
              <ProfileAvatars />
              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-geist)] text-sm text-white tracking-[-0.42px]">
                  {PRICING.rating}
                </span>
                <span className="font-[family-name:var(--font-geist)] text-sm text-white/60 tracking-[-0.42px]">
                  {PRICING.customers}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Plan details */}
          <div className="w-full lg:max-w-[425px]">
            <div
              className="rounded-3xl backdrop-blur-[2.5px] shadow-[0px_8px_20px_0px_rgba(104,99,80,0.15)] overflow-hidden"
              style={{
                backgroundImage:
                  "linear-gradient(-39.9538deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.68) 100%)",
              }}
            >
              <div className="flex flex-col gap-10 p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-col gap-6">
                  <div className="flex gap-3 items-center">
                    <div className="bg-white/10 p-2 rounded-full">
                      <PenToolIcon className="size-6" stroke="white" />
                    </div>
                    <h3 className="font-[family-name:var(--font-albert-sans)] text-[26px] md:text-[30px] text-white tracking-[-1.2px] leading-[39px]">
                      {activePlan.name}
                    </h3>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="flex gap-2 items-baseline">
                      <span className="font-[family-name:var(--font-albert-sans)] text-[36px] md:text-[40px] text-white tracking-[-2px] leading-[44px]">
                        {activePlan.price}
                      </span>
                      {activePlan.period && (
                        <span className="font-[family-name:var(--font-geist)] text-lg text-white/80 tracking-[-0.54px]">
                          {activePlan.period}
                        </span>
                      )}
                    </div>
                    <p className="font-[family-name:var(--font-geist)] text-base text-white/80 tracking-[-0.48px] leading-[22.4px]">
                      {activePlan.detailDescription}
                    </p>
                  </div>

                  <ButtonMain label={activePlan.cta} variant="yellow" />
                </div>

                {/* Features */}
                <div className="flex flex-col gap-2">
                  {activePlan.features.map((feature) => (
                    <div key={feature} className="flex gap-2 items-center">
                      <CheckIcon className="size-6 shrink-0" stroke="white" />
                      <span className="font-[family-name:var(--font-geist)] text-base text-white/80 tracking-[-0.48px]">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
