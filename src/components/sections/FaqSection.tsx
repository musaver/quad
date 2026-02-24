"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ButtonMain } from "@/components/shared/ButtonMain";
import { StaggerContainer, StaggerItem } from "@/components/shared/StaggerContainer";

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white/40 rounded-[20px] overflow-hidden transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-3 md:p-5 cursor-pointer text-left"
      >
        <h3 className="font-[family-name:var(--font-albert-sans)] text-lg md:text-xl text-black tracking-[-0.8px] leading-[1.3] pr-3 flex-1">
          {question}
        </h3>
        <svg className={`size-5 shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`} fill="none" viewBox="0 0 20 20">
          <path d="M3.125 10H16.875" stroke="#AEAEAE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M10 3.125V16.875" stroke="#AEAEAE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-3 pb-3 md:px-5 md:pb-5">
          <p className="font-[family-name:var(--font-geist)] text-sm md:text-base leading-[20px] md:leading-[22.4px] tracking-[-0.48px] text-[var(--color-text-muted)] max-w-[620px]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FaqSection() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center py-10 lg:py-20 z-10">
      <div className="max-w-[1200px] w-full flex flex-col lg:flex-row items-start lg:justify-between gap-8 lg:gap-0 px-5 md:px-10 lg:px-20">
        {/* Left: Title + CTA */}
        <div className="flex flex-col gap-5 max-w-full lg:max-w-[343px] lg:shrink-0">
          <SectionHeader
            title="Your questions, answered"
            subtitle="Get quick answers to the most common questions about our platform and services."
            align="left"
          />
          <ButtonMain label="Contact us" variant="outline" className="self-start" />
        </div>

        {/* Right: FAQ accordion */}
        <div className="w-full lg:w-[603px] lg:shrink-0">
          <StaggerContainer className="bg-[var(--color-section-bg)] rounded-3xl p-2 flex flex-col gap-2">
            {FAQ_ITEMS.map((item) => (
              <StaggerItem key={item.question}>
                <FaqItem {...item} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
