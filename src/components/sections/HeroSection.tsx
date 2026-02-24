"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { HERO } from "@/lib/constants";
import { ButtonMain } from "@/components/shared/ButtonMain";
import { StaggerContainer, StaggerItem } from "@/components/shared/StaggerContainer";
import { HeroBackground } from "@/components/shared/HeroBackground";

const CUSTOMERS = [
  {
    name: "Maggie Johnson",
    company: "Oasis Organic Inc.",
    avatar: "/images/testimonial-profile-1.png",
    highlighted: true,
  },
  {
    name: "Chris Friedkly",
    company: "Supermarket Villanova",
    avatar: "/images/testimonial-profile-2.png",
    highlighted: false,
  },
  {
    name: "Gael Harry",
    company: "New York Finest Fruits",
    avatar: "/images/testimonial-profile-3.png",
    highlighted: false,
  },
];

// [cyan height, rose height, yellow height, total] — from Figma exact values
const BARS = [
  { day: "M", h: [13, 13, 16], total: 42 },
  { day: "T", h: [25, 13, 40], total: 78 },
  { day: "W", h: [13, 35, 18], total: 66 },
  { day: "T", h: [39, 13, 21], total: 73 },
  { day: "F", h: [13, 13, 30], total: 56 },
  { day: "S", h: [13, 24, 10], total: 47 },
  { day: "S", h: [13, 13, 16], total: 42 },
];

function CustomersCard() {
  return (
    <div className="relative w-[320px] md:w-[380px] xl:w-[420px] rounded-[20px] bg-white/60 shadow-[-3px_15px_25px_0px_rgba(104,99,80,0.15)] overflow-hidden">
      <div className="flex flex-col gap-6 py-[23px]">
        {/* Header */}
        <div className="flex items-center justify-between px-[23px]">
          <span className="font-[family-name:var(--font-geist)] font-medium text-[18px] leading-[21.6px] tracking-[-0.54px] text-black">
            Customers
          </span>
          <div className="flex items-center gap-1">
            <span className="font-[family-name:var(--font-geist)] text-[14px] leading-[16.8px] tracking-[-0.42px] text-[#1a1a1a]">
              Sort by Newest
            </span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 3.5L5 6.5L8 3.5" stroke="#1a1a1a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Customer rows */}
        <div className="flex flex-col px-2">
          {CUSTOMERS.map((c) => (
            <div
              key={c.name}
              className={`flex items-center gap-3 p-4 rounded-[16px] ${c.highlighted ? "bg-[#fef7af]" : ""}`}
            >
              <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0">
                <Image src={c.avatar} alt={c.name} fill className="object-cover" />
              </div>
              <div className="flex flex-col gap-[2px] flex-1 min-w-0">
                <span className="font-[family-name:var(--font-geist)] font-medium text-[14px] leading-[16.8px] tracking-[-0.42px] text-black whitespace-nowrap">
                  {c.name}
                </span>
                <span className="font-[family-name:var(--font-geist)] text-[12px] leading-[14.4px] tracking-[-0.36px] text-[#605f5f] whitespace-nowrap">
                  {c.company}
                </span>
              </div>
              {c.highlighted && (
                <div className="flex items-center">
                  {/* Edit */}
                  <div className="size-9 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M11.333 2.667A1.885 1.885 0 0114 5.333L5.333 14 2 14.667 2.667 11.334l8.666-8.667z" stroke="#1a1a1a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  {/* Star */}
                  <div className="size-9 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 2.333L9.545 5.464 13 5.965l-2.5 2.437.59 3.44L8 10.218l-3.09 1.624.59-3.44L3 5.965l3.455-.501L8 2.333z" stroke="#1a1a1a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  {/* Chat */}
                  <div className="size-9 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M14 7.667C14 10.612 11.314 13 8 13c-.592 0-1.163-.073-1.706-.21L3 14l.79-2.573C2.67 10.524 2 9.17 2 7.667 2 4.722 4.686 2.333 8 2.333S14 4.722 14 7.667z" stroke="#1a1a1a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  {/* More */}
                  <div className="size-9 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="4" cy="8" r="1.2" fill="#1a1a1a" />
                      <circle cx="8" cy="8" r="1.2" fill="#1a1a1a" />
                      <circle cx="12" cy="8" r="1.2" fill="#1a1a1a" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center gap-2 px-[23px]">
          <span className="font-[family-name:var(--font-geist)] text-[14px] leading-[16.8px] tracking-[-0.42px] text-black">
            All customers
          </span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4.5l4 3.5-4 3.5" stroke="black" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* White border overlay */}
      <div className="absolute inset-0 rounded-[20px] border-2 border-white pointer-events-none" />
    </div>
  );
}

function DailyAverageCard() {
  return (
    <div className="relative w-[240px] xl:w-[265px] rounded-[20px] backdrop-blur-[2.5px] bg-white/40 shadow-[-3px_15px_25px_0px_rgba(104,99,80,0.15)] px-8 py-7 flex flex-col gap-5">
      {/* Info row */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-[3px]">
          <span className="font-[family-name:var(--font-geist)] text-[12px] leading-[14.4px] tracking-[-0.36px] text-black opacity-50">
            Daily Average
          </span>
          <span className="font-[family-name:var(--font-geist)] font-medium text-[24px] leading-[28.8px] tracking-[-0.72px] text-black">
            2h 20m
          </span>
        </div>
        <div className="flex items-center gap-[3px]">
          <span className="font-[family-name:var(--font-geist)] text-[12px] leading-[14.4px] tracking-[-0.36px] text-[#e83043]">
            +30m
          </span>
          <span className="font-[family-name:var(--font-geist)] text-[12px] leading-[14.4px] tracking-[-0.36px] text-black opacity-50">
            this week
          </span>
        </div>
      </div>

      {/* Bar chart */}
      <div className="flex items-end justify-between h-[109px]">
        {BARS.map((bar, i) => (
          <div key={`${bar.day}-${i}`} className="flex flex-col items-center gap-[14.5px]">
            <div
              className="flex flex-col rounded-[4px] overflow-hidden w-[18px]"
              style={{ height: bar.total }}
            >
              <div
                className="shrink-0 w-full rounded-t-[4px]"
                style={{ height: bar.h[0], backgroundColor: "#84e6f6" }}
              />
              <div
                className="shrink-0 w-full"
                style={{ height: bar.h[1], backgroundColor: "#f7a49e" }}
              />
              <div className="flex-1 w-full" style={{ backgroundColor: "#fecd1a" }} />
            </div>
            <span className="font-[family-name:var(--font-geist)] font-medium text-[12px] leading-[14.4px] text-black opacity-50">
              {bar.day}
            </span>
          </div>
        ))}
      </div>

      {/* White border overlay */}
      <div className="absolute inset-0 rounded-[20px] border-2 border-white pointer-events-none" />
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] overflow-hidden">
      <HeroBackground />

      <div className="relative flex items-center justify-center pt-24 lg:pt-40 pb-16 lg:pb-24 min-h-[inherit]">
        <div className="max-w-[1200px] w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-8 px-5 md:px-10 lg:px-20">

          {/* Left: Text + CTAs */}
          <div className="flex flex-col items-start flex-1 max-w-full lg:max-w-[480px] gap-6 lg:gap-8">
            <h1 className="font-[family-name:var(--font-albert-sans)] text-[32px] md:text-[44px] lg:text-[56px] leading-[1.1] tracking-[-1.6px] md:tracking-[-2.2px] lg:tracking-[-2.8px] text-black">
            One Partner. Every Growth System. Built to Scale.

            </h1>
            <p className="font-[family-name:var(--font-geist)] text-base lg:text-[18px] leading-[22.4px] lg:leading-[25.2px] tracking-[-0.48px] lg:tracking-[-0.54px] text-[#605f5f] max-w-[420px]">
            QUAD is an AI-powered, full-stack digital growth agency. 
            When you onboard with us, you don’t hire a service — you plug into a complete business growth system.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start sm:items-center w-full sm:w-auto">
              <ButtonMain label={HERO.cta} />
              <ButtonMain label={HERO.secondaryCta} variant="outline" />
            </div>
          </div>

          {/* Right: Dashboard UI cards (desktop only) */}
          <div className="hidden lg:block flex-1 relative">
            {/* Container sized to fit both overlapping cards */}
            <div className="relative w-[480px] h-[430px] ml-auto">
              {/* Customers card — top-left, rotated 2° */}
              <motion.div
                className="absolute top-0 left-0 rotate-2 origin-top-left"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                <CustomersCard />
              </motion.div>

              {/* Chart card — bottom-right, rotated -3° */}
              <motion.div
                className="absolute bottom-0 right-0 -rotate-3 origin-bottom-right"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              >
                <DailyAverageCard />
              </motion.div>
            </div>
          </div>

          {/* Mobile: stacked cards, no rotation */}
          <StaggerContainer className="lg:hidden w-full max-w-[360px] mx-auto flex flex-col gap-4">
            <StaggerItem>
              <CustomersCard />
            </StaggerItem>
            <StaggerItem>
              <DailyAverageCard />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
