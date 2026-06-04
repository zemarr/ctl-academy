
"use client";

import { motion } from "motion/react";
import type { ReactNode, ElementType } from "react";

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  stagger?: number;
}

export function RevealText({
  text,
  className = "",
  delay = 0,
  as = "span",
  stagger = 0.07,
}: RevealTextProps) {
  const words = text.split(" ");

  // Strongly typing the dynamic motion tag for Tailwind/React 19 compatibility
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.span;

  return (
    <MotionTag
      className={className}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="reveal-mask align-bottom mr-[0.25em] inline-block">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%" },
              visible: { y: "0%" },
            }}
            transition={{
              duration: 0.9,
              ease: [0.65, 0, 0.35, 1],
              delay: delay + i * stagger,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  y = 24,
  className = ""
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        delay
      }}
    >
      {children}
    </motion.div>
  );
}