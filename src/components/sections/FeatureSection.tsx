"use client";

import { useState } from "react";
import Image from "next/image";
import { FEATURE_SECTION } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FEATURE_TAB_ICONS } from "@/icons";

export function FeatureSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="features" className="relative w-full flex flex-col items-center justify-center bg-[var(--color-page-bg)]">
      <div className="max-w-[1200px] w-full flex flex-col items-center gap-6 md:gap-10 py-10 lg:py-20 px-5 md:px-10 lg:px-20">
        <SectionHeader
          title={FEATURE_SECTION.title}
          subtitle={FEATURE_SECTION.subtitle}
          align="center"
        />

        <div className="flex flex-col gap-3 w-full">
          {/* Tabs - scrollable on mobile */}
          <div className="bg-[var(--color-section-bg)] rounded-[40px] p-1.5 md:p-2 flex gap-1.5 md:gap-2 overflow-x-auto">
            {FEATURE_SECTION.tabs.map((tab, i) => {
              const IconComponent = FEATURE_TAB_ICONS[tab.id];
              const isActive = i === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(i)}
                  className={`flex-none md:flex-1 min-w-fit md:min-w-0 flex gap-2 items-center justify-center px-4 py-3 md:p-4 rounded-[32px] transition-all cursor-pointer ${
                    isActive
                      ? "bg-white/80 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.1)]"
                      : "opacity-50 hover:opacity-75"
                  }`}
                >
                  {IconComponent && <IconComponent className="size-5 shrink-0" />}
                  <span className="font-[family-name:var(--font-geist)] text-sm md:text-lg text-black tracking-[-0.54px] whitespace-nowrap">
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Feature content */}
          <div className="bg-white/60 rounded-3xl overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 p-2 lg:pl-2 lg:pr-10 lg:py-2">
              <div className="w-full lg:flex-1 h-[220px] md:h-[300px] lg:h-[389px] relative rounded-[20px] overflow-hidden">
                <Image
                  src="/images/abstract-bg.png"
                  alt="Feature background"
                  fill
                  className="object-cover rounded-[20px]"
                />
                <div className="absolute inset-[20px_-20px_-20px_20px] md:inset-[32px_-32px_-32px_32px] rounded-2xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.25)] overflow-hidden">
                  <Image
                    key={FEATURE_SECTION.tabs[activeTab].image}
                    src={FEATURE_SECTION.tabs[activeTab].image}
                    alt={FEATURE_SECTION.tabs[activeTab].label}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 border border-[#e6e6e6] rounded-2xl" />
                </div>
              </div>

              <div className="flex flex-col gap-4 md:gap-6 w-full lg:w-[430px] shrink-0 px-4 pb-4 lg:px-0 lg:pb-0">
                <span className="bg-[var(--color-highlight)] self-start px-3 py-2 rounded-full font-[family-name:var(--font-albert-sans)] text-xs font-medium uppercase tracking-[-0.36px]">
                  {FEATURE_SECTION.tabs[activeTab].badge}
                </span>
                <h3 className="font-[family-name:var(--font-albert-sans)] text-2xl md:text-3xl lg:text-4xl leading-[1.3] tracking-[-1.2px] lg:tracking-[-1.8px] text-black">
                  {FEATURE_SECTION.tabs[activeTab].title}
                </h3>
                <p className="font-[family-name:var(--font-geist)] text-sm md:text-base leading-[20px] md:leading-[22.4px] tracking-[-0.48px] text-[var(--color-text-muted)]">
                  {FEATURE_SECTION.tabs[activeTab].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
