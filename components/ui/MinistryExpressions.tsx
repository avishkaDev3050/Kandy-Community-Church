"use client";

import { motion } from "framer-motion";
import { Users, GraduationCap, Send, Heart } from "lucide-react";

const pillars = [
  {
    title: "Reach the Unreached",
    description:
      "We are committed to sharing the Gospel of Jesus Christ with love, compassion, and urgency to those who have not yet heard.",
    icon: Users,
    tag: "Reach",
  },
  {
    title: "Raise Disciples",
    description:
      "We build strong believers through the Word of God, prayer, fellowship, and the empowerment of the Holy Spirit.",
    icon: GraduationCap,
    tag: "Raise",
  },
  {
    title: "Release Leaders",
    description:
      "We equip, empower, and send believers into ministry, missions, and marketplace influence locally and globally.",
    icon: Send,
    tag: "Release",
  },
  {
    title: "Restore Communities",
    description:
      "We believe in the transforming power of Jesus Christ to heal lives, families, and society.",
    icon: Heart,
    tag: "Restore",
  },
];

export default function MinistryExpressions() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1] as const,
      },
    },
  };

  return (
    <section className="py-28 px-4 sm:px-6 bg-[#241C15] relative overflow-hidden text-[#F4EBE1]">
      {/* Soft Ambient Background Glows */}
      <motion.div 
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 left-10 w-96 h-96 bg-[#D4A359]/10 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[#D4A359] text-xs uppercase tracking-[0.25em] font-semibold px-4 py-1.5 rounded-full bg-[#D4A359]/15 border border-[#D4A359]/30">
            Our Core Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-white tracking-wide">
            Ministry Expressions
          </h2>
          <p className="text-[#E2D4C7] text-sm sm:text-base font-light">
            How we live out our faith and calling in Kandy and beyond.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {pillars.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-[#34291F] backdrop-blur-md p-7 rounded-3xl border border-[#D4A359]/30 shadow-2xl overflow-hidden transition-all duration-500 flex flex-col justify-between"
              >
                {/* Liquid Gold Fill Layer */}
                <div className="absolute inset-0 bg-[#D4A359] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] z-0 pointer-events-none" />

                {/* Card Content */}
                <div className="relative z-10">
                  <div className="w-13 h-13 rounded-2xl bg-[#D4A359]/20 text-[#D4A359] group-hover:bg-[#1A120B] group-hover:text-[#D4A359] flex items-center justify-center mb-6 transition-colors duration-500 shadow-md">
                    <IconComponent size={26} />
                  </div>

                  <span className="text-[#D4A359] group-hover:text-[#1A120B] text-xs font-semibold tracking-wider uppercase transition-colors duration-500">
                    {pillar.tag}
                  </span>

                  <h3 className="text-xl font-light text-white group-hover:text-[#1A120B] mt-1 mb-3 transition-colors duration-500">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-[#E2D4C7] group-hover:text-[#1A120B] leading-relaxed font-normal transition-colors duration-500">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}