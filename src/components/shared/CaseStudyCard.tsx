"use client";

import Image from "next/image";
import { motion } from "motion/react";

interface CaseStudyCardProps {
  company: string;
  year: string;
  description: string;
  thumbnail: string;
  brand: string;
}

const cardVariants = {
  rest: { y: 0, boxShadow: "0 0px 0px rgba(0,0,0,0)" },
  hover: { y: -5, boxShadow: "0 20px 48px rgba(0,0,0,0.10)" },
};

const imageVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.07 },
};

const overlayVariants = {
  rest: { opacity: 0 },
  hover: { opacity: 1 },
};

const arrowTopVariants = {
  rest: { opacity: 0, scale: 0.7 },
  hover: { opacity: 1, scale: 1 },
};

const arrowBottomVariants = {
  rest: { opacity: 0, x: 6 },
  hover: { opacity: 1, x: 0 },
};

const logoVariants = {
  rest: { scale: 1, opacity: 1 },
  hover: { scale: 0.72, opacity: 0.85 },
};

export function CaseStudyCard({
  company,
  year,
  description,
  thumbnail,
  brand,
}: CaseStudyCardProps) {
  return (
    <motion.div
      className="bg-white/60 rounded-[20px] overflow-hidden w-full cursor-pointer"
      variants={cardVariants}
      initial="rest"
      whileHover="hover"
      animate="rest"
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-2 p-2">
        {/* Thumbnail */}
        <div className="relative bg-black rounded-2xl overflow-hidden h-[200px] md:h-[304px] flex items-center justify-center">
          {/* Zoom */}
          <motion.div
            className="absolute inset-0"
            variants={imageVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src={thumbnail}
              alt={company}
              fill
              className="object-cover opacity-80"
            />
          </motion.div>

          {/* Dark overlay */}
          <motion.div
            className="absolute inset-0 bg-black/25 z-[1]"
            variants={overlayVariants}
            transition={{ duration: 0.3 }}
          />

          {/* Brand logo — shrinks on hover */}
          <motion.div
            className="relative z-10 w-[180px] md:w-[250px] h-[30px] md:h-[35px]"
            variants={logoVariants}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Image
              src={brand}
              alt={`${company} brand`}
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Year badge */}
          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-black/30 rounded-full px-2 py-1 z-10">
            <span className="font-[family-name:var(--font-geist)] text-sm text-white tracking-[-0.42px]">
              {year}
            </span>
          </div>

          {/* Top-right arrow — appears on hover */}
          <motion.div
            className="absolute top-4 right-4 md:top-5 md:right-5 z-10 bg-white rounded-full size-9 flex items-center justify-center"
            variants={arrowTopVariants}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <svg className="size-4 text-black -rotate-45" viewBox="0 0 16 16" fill="none">
              <path d="M3 13L13 3M13 3H5M13 3v8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </div>

        {/* Text content */}
        <div className="px-3 py-3 md:px-5 md:py-5 flex items-start justify-between gap-3">
          <div>
            <h3 className="font-[family-name:var(--font-albert-sans)] text-[22px] md:text-[26px] leading-[1.3] tracking-[-1.04px] text-black mb-1">
              {company}
            </h3>
            <p className="font-[family-name:var(--font-geist)] text-sm md:text-base leading-[20px] md:leading-[22.4px] tracking-[-0.48px] text-[var(--color-text-muted)]">
              {description}
            </p>
          </div>

          {/* Bottom-right arrow — slides in on hover */}
          <motion.div
            className="shrink-0 mt-1 size-8 rounded-full border border-black/15 flex items-center justify-center"
            variants={arrowBottomVariants}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <svg className="size-3.5 text-black -rotate-45" viewBox="0 0 16 16" fill="none">
              <path d="M3 13L13 3M13 3H5M13 3v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
