"use client";

import { motion } from "motion/react";

function SectionHeader({ sectionName, title, description, isCenter }) {
  // Motion Variants
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 20,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className={`${isCenter && "text-center"} mb-8 md:mb-10`}
    >
      {/* Section Name */}
      {sectionName && (
        <motion.p variants={item} className="mb-2 capitalize">
          <span className="text-sunsetOrange">{"{"} </span>
          {sectionName}
          <span className="text-sunsetOrange"> {"}"}</span>
        </motion.p>
      )}
      {/* Title */}
      {title && (
        <motion.h2
          variants={item}
          className="text-4xl md:text-5xl font-semibold mb-4"
        >
          {title}
        </motion.h2>
      )}
      {/* Description */}
      {description && (
        <motion.p
          variants={item}
          className={` text-gray-400 max-w-3xl ${isCenter && "mx-auto"}`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}

export default SectionHeader;
