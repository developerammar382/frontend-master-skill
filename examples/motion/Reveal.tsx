"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { enter } from "./motion";

type RevealVariant = "up" | "fade" | "blur" | "scale" | "clip";

// Each variant starts differently and lands on the same visible state.
// Mix variants across sections so the page doesn't fade-up everything.
const hiddenStates = {
  up: { opacity: 0, y: 32 },
  fade: { opacity: 0 },
  blur: { opacity: 0, filter: "blur(12px)" },
  scale: { opacity: 0, scale: 0.94 },
  clip: { clipPath: "inset(0 0 100% 0)" },
};

const visibleState = { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", clipPath: "inset(0 0 0% 0)" };

type RevealProps = {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
};

export function Reveal({ children, variant = "up", delay = 0, className }: RevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      // Reduced motion keeps a short fade so content still arrives gently
      initial={reduceMotion ? { opacity: 0 } : hiddenStates[variant]}
      whileInView={visibleState}
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      transition={{ ...enter, delay }}
    >
      {children}
    </motion.div>
  );
}
