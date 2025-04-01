"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [experienceStarted, setExperienceStarted] = useState(false);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Detect when section is in view
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.5,
  });

  const setRefs = (node: HTMLDivElement) => {
    ref.current = node;
    inViewRef(node);
  };

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (inView && experienceStarted) {
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            video.muted = false;
            setHasStarted(true);
          })
          .catch((err) => {
            console.warn("Video play failed:", err);
          });
      }
    } else {
      if (hasStarted) {
        video.pause();
      }
    }
  }, [inView, hasStarted, experienceStarted]);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    // Start muted autoplay for Chrome on load
    video.muted = true;
    video.play().catch((err) => {
      console.warn("Muted autoplay failed:", err);
    });
  }, []);

  const handleExperienceClick = () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = false;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setExperienceStarted(true);
          setHasStarted(true);
        })
        .catch((err) => {
          console.warn("Video play failed:", err);
        });
    }
  };

  return (
    <section
      ref={setRefs}
      className="relative w-full h-screen overflow-hidden flex justify-center items-center"
    >
      {/* ✅ Background Video */}
      <motion.video
        ref={videoRef}
        loop
        playsInline
        style={{ opacity: videoOpacity }}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      {/* ✅ Experience Overlay */}
      {!experienceStarted && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/90 z-50 flex justify-center items-center transition-opacity duration-500">
          <button
            onClick={handleExperienceClick}
            className="px-8 py-4 bg-white text-black font-bold text-xl rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
          >
           Get Start
          </button>
        </div>
      )}

      {/* ✅ Hero Content */}
      <motion.div
        style={{ opacity, y }}
        className="flex justify-center items-center h-full relative z-30 px-4"
      >
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center text-white text-center gap-4">
          <h1 className="uppercase tracking-widest text-xs text-blue-100 max-w-80">
            IN-TA Solutions
          </h1>

          <h2 className="text-[45px] uppercase">Welcome To IN-TA Solutions Pvt Ltd</h2>

          <p className="text-[20px] md:tracking-wider capitalize mb-0">
            Transform concept into seamless experience
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
