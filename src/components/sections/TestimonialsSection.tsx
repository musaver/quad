import { TESTIMONIALS } from "@/lib/constants";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/StaggerContainer";

const CARD_OFFSETS = ["lg:pt-0", "lg:pt-[40px]", "lg:pt-[80px]"];

export function TestimonialsSection() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center py-10 lg:py-20">
      <div className="max-w-[1200px] w-full px-5 md:px-10 lg:px-20">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 items-start">
          {TESTIMONIALS.map((testimonial, index) => (
            <StaggerItem
              key={testimonial.author}
              className={`${CARD_OFFSETS[index] ?? ""}`}
            >
              <div className="h-[380px] md:h-[409px]">
                <TestimonialCard {...testimonial} />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
