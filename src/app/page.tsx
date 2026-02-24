import { HeroSection } from "@/components/sections/HeroSection";
import { LogoSection } from "@/components/sections/LogoSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FeatureSection } from "@/components/sections/FeatureSection";
import { IntegrationSection } from "@/components/sections/IntegrationSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { AnimateOnScroll } from "@/components/shared/AnimateOnScroll";

export default function Home() {
  return (
    <>
      <AnimateOnScroll variant="fade-in" delay={0.2}>
        <HeroSection />
      </AnimateOnScroll>
      <AnimateOnScroll variant="fade-in">
        <LogoSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <ProcessSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <FeatureSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <IntegrationSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <PricingSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CaseStudiesSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <TestimonialsSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <FaqSection />
      </AnimateOnScroll>
      <AnimateOnScroll>
        <CtaSection />
      </AnimateOnScroll>
    </>
  );
}
