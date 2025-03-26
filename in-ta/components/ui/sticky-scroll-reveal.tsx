"use client";

import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Or use clsx

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end end"], // ⬅ changed from "end start" to "end end"
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / (cardLength - 0.5)); // Adjust for last index
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = ["#000000", "#000000", "#000000"];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex h-[20rem] justify-center space-x-10 overflow-y-auto no-scrollbar rounded-md p-10"
      ref={ref}
    >
      {/* LEFT SIDE - SCROLLABLE CONTENT */}
      <div className="relative flex items-start  px-10">
        <div className="max-w-2xl">
          {content.map((item, index) => {
            const isActive = activeCard === index;

            return (
              <motion.div
                key={item.title + index}
                className="my-40" // Increased margin for more space
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: isActive ? 1 : 0.3,
                  y: isActive ? 0 : 40,
                  transition: { duration: 0.5, ease: "easeOut" },
                }}
                exit={{ opacity: 0, y: 40 }}
              >
                <motion.h2 className="text-3xl font-bold text-slate-100">
                  {item.title}
                </motion.h2>

                <motion.p className="text-lg mt-6 max-w-sm text-slate-300">
                  {item.description}
                </motion.p>
              </motion.div>
            );
          })}

          {/* Add extra scroll space at the bottom */}
          <div className="h-[20vh]" />
        </div>
      </div>

      {/* RIGHT SIDE - STICKY IMAGE WITH GRADIENT */}
      <div
  className={cn(
    "sticky top-0 self-start h-[350px] w-[25rem] overflow-hidden rounded-xl lg:block shadow-2xl p-5",
    contentClassName
  )}
>

        {/* Blurred Gradient Background */}
        <motion.div
          key={`background-${activeCard}`}
          className="absolute inset-0 z-0 rounded-xl blur-3xl opacity-50"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.5,
            transition: { duration: 0.6, ease: "easeOut" },
          }}
          style={{
            background: backgroundGradient,
          }}
        />

        {/* Animated Foreground Image/Content */}
        <motion.div
          key={`image-${activeCard}`}
          className="relative z-10 flex items-center justify-center h-full w-full px-10"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
        >
          <motion.div className="relative h-full w-full rounded-md overflow-hidden shadow-2xl">
            {content[activeCard]?.content ?? (
              <div className="flex items-center justify-center h-full text-white">
                No content available.
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
