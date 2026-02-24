"use client";

import { useState } from "react";
import Image from "next/image";
import { PROCESS_STEPS } from "@/lib/constants";
import { ProcessCard } from "@/components/shared/ProcessCard";

function StepCardImage() {
  return (
    <>
      <Image src="/images/step-card-bg.png" alt="" fill className="object-cover" />
      <div className="absolute inset-[32px_-32px_-32px_32px] rounded-2xl shadow-[-2px_4px_15px_0px_rgba(0,0,0,0.25)] overflow-hidden">
        <Image src="/images/step-card-overlay.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 border-2 border-white rounded-2xl" />
      </div>
    </>
  );
}

export function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full flex flex-col items-center justify-center">
      <div className="max-w-[1200px] w-full py-10 lg:py-20 px-5 md:px-10 lg:px-20">
        <div className="bg-[var(--color-section-bg)] rounded-3xl w-full">
          <div className="flex flex-col md:flex-row md:flex-nowrap gap-2 items-stretch p-2">
            {PROCESS_STEPS.map((step, i) => (
              <ProcessCard
                key={step.number}
                number={step.number}
                title={step.title}
                description={step.description}
                isOpen={activeIndex === i}
                image={<StepCardImage />}
                onActivate={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
