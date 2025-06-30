"use client";

import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  words,
  duration = 5000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || shouldReduceMotion) {
    return (
      <span
        className={cn(
          "inline-block italic relative font-semibold text-left text-primary",
          className,
        )}
      >
        {words[0]}
      </span>
    );
  }

  return (
    <FlipWordsAnimated
      words={words}
      duration={duration}
      className={className}
    />
  );
};

function FlipWordsAnimated({
  words,
  duration,
  className,
}: {
  words: string[];
  duration: number;
  className?: string;
}) {
  const [currentWord, setCurrentWord] = useState<string>(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const startAnimation = useCallback(() => {
    const nextIndex = (words.indexOf(currentWord) + 1) % words.length;
    setCurrentWord(words[nextIndex]);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating) {
      const t = window.setTimeout(startAnimation, duration);
      return () => window.clearTimeout(t);
    }
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        key={currentWord}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{
          opacity: 0,
          y: 0,
          filter: "blur(8px)",
          position: "absolute",
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        className={cn(
          "inline-block italic relative font-semibold text-left text-primary",
          className,
        )}
      >
        {currentWord.split(" ").map((word, wi) => (
          <motion.span
            key={word + wi}
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: wi * 0.3, duration: 0.5 }}
            className="inline-block whitespace-nowrap"
          >
            {word.split("").map((letter, li) => (
              <motion.span
                key={letter + li}
                initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: wi * 0.3 + li * 0.05,
                  duration: 0.2,
                }}
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
