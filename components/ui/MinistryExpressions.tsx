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
  return (
    <section className="py-24 px-4 sm:px-6 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-[#C59B27] text-xs uppercase tracking-[0.25em] font-semibold px-3 py-1 rounded-full bg-[#C59B27]/10">
            Our Core Pillars
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-[#1C2D42]">
            Ministry Expressions
          </h2>
          <p className="text-[#718096] text-sm sm:text-base">
            How we live out our faith and calling in Kandy and beyond.
          </p>
        </div>

        {/* 4 Pillars Grid with Ultra-Slower Bottom-to-Top Dark Blur Water Fill Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative bg-white p-7 rounded-3xl border border-gray-200/80 shadow-sm overflow-hidden transition-all duration-1000 flex flex-col justify-between"
              >
                {/* Slow Liquid Water Fill Layer (Duration increased to 1200ms) */}
                <div className="absolute inset-0 bg-[#1C2D42]/90 backdrop-blur-md translate-y-full group-hover:translate-y-0 transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.3,1)] z-0 pointer-events-none" />

                {/* Card Content with Slower Color & Scale Transitions */}
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-[#1C2D42] text-white flex items-center justify-center mb-6 group-hover:bg-[#C59B27] group-hover:scale-110 transition-all duration-[1000ms] shadow-md">
                    <IconComponent size={24} />
                  </div>

                  <span className="text-[#C59B27] group-hover:text-[#F6AD55] text-xs font-semibold tracking-wider uppercase transition-colors duration-[1000ms]">
                    {pillar.tag}
                  </span>

                  <h3 className="text-xl font-medium text-[#1C2D42] group-hover:text-white mt-1 mb-3 transition-colors duration-[1000ms]">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-[#718096] group-hover:text-gray-200 leading-relaxed font-light transition-colors duration-[1000ms]">
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}