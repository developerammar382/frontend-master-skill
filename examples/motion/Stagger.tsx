"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { enter, stagger } from "./motion";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  gap?: number;
  // "load" for the hero, "view" for everything below the fold
  trigger?: "load" | "view";
};

export function Stagger({ children, className, gap = stagger.base, trigger = "view" }: StaggerProps) {
  const reduceMotion = useReducedMotion();
  const play =
    trigger === "load"
      ? { animate: "visible" }
      : { whileInView: "visible", viewport: { once: true, margin: "0px 0px -15% 0px" } };

  return (
    <motion.div
      className={className}
      initial="hidden"
      {...play}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: reduceMotion ? 0 : gap } } }}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
};

// Direct children of Stagger. They inherit the trigger and play in order.
export function StaggerItem({ children, className }: StaggerItemProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: enter },
      }}
    >
      {children}
    </motion.div>
  );
}
