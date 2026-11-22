"use client";

import { motion, useReducedMotion } from "motion/react";
import { duration, ease, stagger } from "./motion";

type TextRevealProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  delay?: number;
  trigger?: "load" | "view";
};

// Words slide up from behind a mask. Use for headlines, not body text.
export function TextReveal({ text, as: Tag = "h2", className, delay = 0, trigger = "view" }: TextRevealProps) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");
  const play =
    trigger === "load"
      ? { animate: "visible" }
      : { whileInView: "visible", viewport: { once: true, margin: "0px 0px -10% 0px" } };

  return (
    <Tag className={className}>
      {/* Screen readers get the sentence once, not word by word */}
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden="true"
        className="block"
        initial="hidden"
        {...play}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: reduceMotion ? 0 : stagger.base, delayChildren: delay } },
        }}
      >
        {words.map((word, index) => (
          // Index keys are safe here: the word list never reorders
          <span key={index}>
            {/* pb keeps descenders (g, y, p) from being clipped by the mask */}
            <span className="inline-block overflow-hidden pb-[0.12em] align-bottom">
              <motion.span
                className="inline-block"
                variants={{
                  hidden: reduceMotion ? { opacity: 0 } : { y: "110%" },
                  visible: { y: 0, opacity: 1, transition: { duration: duration.slow, ease: ease.out } },
                }}
              >
                {word}
              </motion.span>
            </span>{" "}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
