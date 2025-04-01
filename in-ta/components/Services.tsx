import React from 'react';
import { StickyScroll } from './ui/sticky-scroll-reveal';
import Image from 'next/image';

const content = [
  {
    title: "Web Development",
    description: "We build modern and responsive web applications tailored to your needs.",
    content: (
      <Image
        src="/img/web.jpg"
        alt="Web Development"
        layout="fill"
        objectFit="cover"
      />
    )
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile solutions with stunning UI/UX.",
    content: (
      <Image
        src="/img/mobile.png"
        alt="Mobile Apps"
        layout="fill"
        objectFit="cover"
      />
    )
  },
  {
    title: "Cloud Services",
    description: "Reliable and scalable cloud solutions for businesses of all sizes.",
    content: (
      <Image
        src="/img/cloud.jpg"
        alt="Cloud Services"
        layout="fill"
        objectFit="cover"
      />
    )
  },
  {
    title: "AI Solutions",
    description: "Powerful AI-driven solutions for automation and insights.",
    content: (
      <Image
        src="/images/ai.jpg"
        alt="AI Solutions"
        layout="fill"
        objectFit="cover"
      />
    )
  },
];

const Services = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <StickyScroll content={content} />
    </div>
  );
};

export default Services;
