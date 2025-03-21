"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollSectionProps {
  children: React.ReactNode;
  bgColor?: string;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({
  children,
  bgColor = "#000",
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Triggers as it comes into and out of view
  });

  // Advanced transforms
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100]);
  const blur = useTransform(scrollYProgress, [0, 0.5, 1], ["10px", "0px", "10px"]);

  return (
    <section
      ref={ref}
      className="relative  w-full flex justify-center items-center overflow-hidden"
      style={{
        backgroundColor: bgColor,
        perspective: "1000px",
      }}
    >
      <motion.div
        style={{
          opacity,
          scale,
          rotateX,
          y,
          filter: blur,
        }}
        className="w-full h-full flex justify-center items-center"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default ScrollSection;
