"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { gridItems } from "@/data";

const Grid = () => {
  return (
    <section id="about" className="py-20 px-5">
      <BentoGrid>
        {gridItems.map(
          (
            {
              id,
              title,
              description,
              className,
              img,
              imgClassName,
              titleClassName,
              spareImg,
            },
            index
          ) => (
            <TiltScrollCard
              key={id}
              id={id}
              title={title}
              description={description}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
              index={index}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default Grid;

const TiltScrollCard = ({
  id,
  title,
  description,
  className,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-150, 150], [15, -15]);
  const rotateY = useTransform(x, [-150, 150], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        scale: isHovered ? 1.05 : 1,
        transformPerspective: 1000,
      }}
      className={`relative z-10 cursor-pointer will-change-transform transition-shadow duration-300 ${className} ${
        isHovered
          
      }`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <BentoGridItem
        id={id}
        title={title}
        description={description}
        className="w-full h-full"
        img={img}
        imgClassName={imgClassName}
        titleClassName={titleClassName}
        spareImg={spareImg}
      />
    </motion.div>
  );
};
