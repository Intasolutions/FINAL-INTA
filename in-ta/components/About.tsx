"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Hsparkles } from "./Hsparkels";

const About = () => {
  const ref = useRef<HTMLDivElement>(null);

  // Scroll based fade-out effect (existing effect)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end start"],
  });

  const opacityOut = useTransform(scrollYProgress, [0, 0.5], [2, 0]); // Fade out while scrolling away
  const yOut = useTransform(scrollYProgress, [0, 1], [0, -50]);

  // InView for scroll in/out detection
  const isInView = useInView(ref, {
    once: false, // So it runs every time
    margin: "-30% 0px -30% 0px",
  });

  // Animation state that toggles every time you scroll into view
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isInView) {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
  }, [isInView]);

  // Reset key for TextGenerateEffect when in view
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (shouldAnimate) {
      setKey((prev) => prev + 1);
    }
  }, [shouldAnimate]);

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // Animate on every scroll-in
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay:  0.2,
      }}
      style={{
        opacity: opacityOut, // fade out when scrolling past
        y: yOut,              // move up when scrolling past
      }}
      className="text-center relative  px-10 justify-center flex flex-col items-center"
    >
     <Hsparkles>

      
     </Hsparkles>

      <TextGenerateEffect
        key={key}
        className="capitalize text-[20px] max-w-3xl"
        words="Technology is transforming the world at an unprecedented pace. From simple tools to complex algorithms, innovation is reshaping industries and improving lives. Whether it's healthcare, education, or business, embracing technology unlocks new opportunities and drives progress. The future belongs to those who are ready to adapt, learn, and lead in this digital era."
      />
    </motion.div>
  );
};

export default About;
