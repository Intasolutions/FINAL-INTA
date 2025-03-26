"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion"; // ✅ Import Framer Motion

// Import your Card UI components
import {
  CardBody,
  CardContainer,
  CardItem,
} from "@/components/ui/CardContent";

export function Card({
  title,
  description,
  image,
  link,
}: {
  title: string;
  description: string;
  image: string;
  link: string;
}) {
  return (
    <CardContainer className="inter-var">
      {/* Framer Motion Wrapper */}
      <motion.div
        className="px-10"
        initial={{ opacity: 0, y: 50 }}  // 👈 Animation starts from below and hidden
        whileInView={{ opacity: 1, y: 0 }} // 👈 Animates into view
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        viewport={{ once: true }} // 👈 Only animate once when in view
      >
        <CardBody
          className="relative group bg-gray-50 dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-6 border transition-transform duration-300 hover:scale-105 dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]"
        >
          {/* Card Title */}
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-neutral-600 dark:text-white transition-transform duration-300 ease-in-out group-hover:scale-110"
          >
            {title}
          </CardItem>

          {/* Card Description */}
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 transition-transform duration-300 ease-in-out group-hover:scale-105"
          >
            {description}
          </CardItem>

          {/* Card Image */}
          <CardItem
            translateZ="100"
            className="w-full mt-4 transition-transform duration-300 ease-in-out group-hover:scale-110"
          >
            <Image
              src={image}
              height={1000}
              width={1000}
              className="h-60 w-full object-cover rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>

          {/* Card Footer Buttons */}
          <div className="flex justify-between items-center mt-10">
            {/* Button: Try Now */}
            <CardItem
              translateZ={20}
              as={Link}
              href={link}
              target="_blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white transition-transform duration-300 ease-in-out group-hover:scale-110"
            >
              Read More →
            </CardItem>

            {/* Button: Sign Up */}
           
          </div>
        </CardBody>
      </motion.div>
    </CardContainer>
  );
}
