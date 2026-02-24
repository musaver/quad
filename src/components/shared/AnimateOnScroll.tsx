"use client";

import { motion, type TargetAndTransition } from "motion/react";
import type { ReactNode } from "react";

type Variant = "fade-up" | "fade-in" | "scale-up";

const variants: Record<Variant, { initial: TargetAndTransition; animate: TargetAndTransition }> = {
  "fade-up": {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  },
  "fade-in": {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  },
  "scale-up": {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
  },
};

interface AnimateOnScrollProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  className?: string;
}

export function AnimateOnScroll({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.6,
  className,
}: AnimateOnScrollProps) {
  const v = variants[variant];

  return (
    <motion.div
      initial={v.initial}
      whileInView={v.animate}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
