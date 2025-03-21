"use client";
import React from 'react'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ThreeDscroll = () => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!boxRef.current) return;

    gsap.to(boxRef.current, {
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
        markers: false, // You can set true for debugging
      },
      rotationY: 360, // Rotates in Y axis
      transformPerspective: 800,
      ease: "none",
    });
  }, []);



  return (
    <div className="h-[200vh] bg-gray-900 flex items-center justify-center">
    <div
      ref={boxRef}
      className="w-[250px] h-[250px] bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold rounded-lg shadow-2xl"
      style={{
        transformStyle: "preserve-3d",
        perspective: "800px",
      }}
    >
      3D Scroll Box
    </div>
  </div>
  );
}

export default ThreeDscroll