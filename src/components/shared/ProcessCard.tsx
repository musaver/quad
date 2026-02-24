"use client";

import { useEffect, useState } from "react";

interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
  isOpen: boolean;
  image?: React.ReactNode;
  onActivate: () => void;
}

export function ProcessCard({ number, title, description, isOpen, image, onActivate }: ProcessCardProps) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const imageOpacity = isDesktop ? (isOpen ? 1 : 0) : 1;

  return (
    <div
      onMouseEnter={onActivate}
      onClick={onActivate}
      className="h-auto md:h-[340px] cursor-pointer w-full md:w-auto"
      style={{
        flexGrow: isDesktop ? (isOpen ? 2.2 : 1) : undefined,
        flexShrink: isDesktop ? 0 : undefined,
        flexBasis: isDesktop ? 0 : undefined,
        minWidth: 0,
        transition: "flex-grow 500ms cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div
        className={`relative h-full rounded-[20px] overflow-hidden transition-[background-color,box-shadow,border-color] duration-300 ${
          isOpen
            ? "bg-white/90 shadow-[0px_8px_20px_0px_rgba(0,0,0,0.1)] border-2 border-white"
            : "bg-white/70 border-2 border-transparent"
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-center h-full p-5 md:p-6 gap-4">
          <div className="flex flex-col md:h-full justify-between shrink-0 w-full md:w-[150px] gap-3 md:gap-0">
            <span className="font-[family-name:var(--font-geist)] text-lg text-[var(--color-text-light)] tracking-[-0.54px]">
              {number}
            </span>
            <div className="flex flex-col gap-2 md:gap-[15px]">
              <h3 className="font-[family-name:var(--font-albert-sans)] text-[22px] md:text-[26px] leading-[1.3] tracking-[-1.04px] text-black">
                {title}
              </h3>
              <p className="font-[family-name:var(--font-geist)] text-sm md:text-base leading-[20px] md:leading-[22.4px] tracking-[-0.48px] text-[var(--color-text-muted)]">
                {description}
              </p>
            </div>
          </div>
          <div
            className="w-full md:flex-1 h-[180px] md:h-full min-w-0 overflow-hidden rounded-2xl relative"
            style={{
              opacity: imageOpacity,
              transition: "opacity 400ms ease",
            }}
          >
            {image}
          </div>
        </div>
      </div>
    </div>
  );
}
