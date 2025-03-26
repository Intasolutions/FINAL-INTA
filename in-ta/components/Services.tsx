"use client";

import React, { useState, useEffect } from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Web Development",
    description: "We build modern and responsive web applications tailored to your needs.",
    content: (
      <div className="relative w-full h-full">
        <Image
          src="/img/web.jpg"
          alt="Web Development"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    )
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile solutions with stunning UI/UX.",
    content: (
      <div className="relative w-full h-full">
        <Image
          src="/img/mobile.png"
          alt="Mobile Apps"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    )
  },
  {
    title: "Cloud Services",
    description: "Reliable and scalable cloud solutions for businesses of all sizes.",
    content: (
      <div className="relative w-full h-full">
        <Image
          src="/img/cloud.jpg"
          alt="Cloud Services"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    )
  },
  {
    title: "AI Solutions",
    description: "Powerful AI-driven solutions for automation and insights.",
    content: (
      <div className="relative w-full h-full">
        <Image
          src="/images/ai.jpg"
          alt="AI Solutions"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    )
  },
];

const Services = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-20 bg-black text-white overflow-hidden">
      {/* 🔥 Spotlight Effect */}
      <div
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{
          background: `radial-gradient(300px at ${cursorPos.x}px ${cursorPos.y}px, rgba(0, 125, 255, 0.2), rgba(0, 0, 0, 0.8))`,
        }}
      ></div>

      {/* 🔥 Services Section */}
      <div className="relative z-10">
        <StickyScroll content={content} />
      </div>
    </div>
  );
};

export default Services;
