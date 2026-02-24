import type { Metadata } from "next";
import { AboutHeroSection } from "@/components/sections/AboutHeroSection";
import { MissionStatsSection } from "@/components/sections/MissionStatsSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

export const metadata: Metadata = {
  title: "About — QUAD",
  description:
    "At QUAD, our vision is to redefine how businesses grow in the digital era.",
};

export default function AboutPage() {
  return (
    <>
      <AnimateOnScroll variant="fade-in" delay={0.2}>
        <AboutHeroSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <MissionStatsSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <TeamSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CtaSection />
      </AnimateOnScroll>
    </>
  );
}
