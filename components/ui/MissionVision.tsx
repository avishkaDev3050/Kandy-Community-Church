"use client";

import { motion } from "framer-motion";
import { Compass, Target, CheckCircle2 } from "lucide-react";

const focusAreas = [
  "Educate",
  "Care",
  "Worship",
  "Train",
  "Commission",
];

export default function MissionVision() {
  return (
    <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto space-y-16">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#C59B27] text-xs uppercase tracking-[0.25em] font-semibold px-3 py-1 rounded-full bg-[#C59B27]/10"
        >
          Our Foundation
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-light text-[#1C2D42]"
        >
          Mission & Vision
        </motion.h2>
      </div>

      {/* Motto Highlight Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="bg-[#1C2D42] text-white p-6 sm:p-8 rounded-3xl text-center shadow-lg relative overflow-hidden group cursor-pointer border border-[#1C2D42] hover:border-[#FFCC00]/50 transition-all duration-500"
      >
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-32 h-32 bg-[#FFCC00]/10 rounded-full blur-2xl pointer-events-none group-hover:scale-150 group-hover:bg-[#FFCC00]/20 transition-all duration-700" />
        <span className="text-[#FFCC00] text-xs uppercase tracking-[0.3em] font-medium block mb-2 group-hover:tracking-[0.4em] transition-all duration-300">
          Church Motto
        </span>
        <h3 className="text-2xl sm:text-4xl font-light tracking-wide text-white group-hover:text-[#FFCC00] transition-colors duration-300">
          “Reach. Raise. Release.”
        </h3>
      </motion.div>

      {/* Mission & Vision Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mission Card with Yellow Water/Fill Hover Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative bg-[#E6DEC8]/60 p-8 sm:p-10 rounded-3xl border border-[#D0C4A8] shadow-sm overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between"
        >
          {/* Yellow Fill Layer */}
          <div className="absolute inset-0 bg-[#FFCC00] translate-y-full group-hover:translate-y-0 transition-transform duration-[700ms] ease-[cubic-bezier(0.25,1,0.3,1)] z-0 pointer-events-none" />

          {/* Card Content */}
          <div className="relative z-10 space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-[#1C2D42] text-[#FFCC00] group-hover:bg-[#1C2D42] group-hover:text-[#FFCC00] group-hover:scale-110 flex items-center justify-center shadow-md transition-all duration-500">
              <Target size={24} />
            </div>

            <div className="space-y-2">
              <span className="text-[#C59B27] group-hover:text-[#1C2D42] text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-500">
                Our Purpose
              </span>
              <h3 className="text-2xl font-light text-[#1C2D42] group-hover:text-[#1C2D42] transition-colors duration-500">
                Mission Statement
              </h3>
            </div>

            <p className="text-[#4A5568] group-hover:text-[#1C2D42] leading-relaxed font-light text-sm sm:text-base transition-colors duration-500">
              “Kandy Community Church exists to reach the unreached with the Gospel, raise faithful and Christ-centered disciples, and release Spirit-filled believers to transform communities and influence nations for the glory of God.”
            </p>
          </div>
        </motion.div>

        {/* Vision Card with Yellow Water/Fill Hover Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group relative bg-[#E6DEC8]/60 p-8 sm:p-10 rounded-3xl border border-[#D0C4A8] shadow-sm overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between"
        >
          {/* Yellow Fill Layer */}
          <div className="absolute inset-0 bg-[#FFCC00] translate-y-full group-hover:translate-y-0 transition-transform duration-[700ms] ease-[cubic-bezier(0.25,1,0.3,1)] z-0 pointer-events-none" />

          {/* Card Content */}
          <div className="relative z-10 space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-[#1C2D42] text-[#FFCC00] group-hover:bg-[#1C2D42] group-hover:text-[#FFCC00] group-hover:scale-110 flex items-center justify-center shadow-md transition-all duration-500">
              <Compass size={24} />
            </div>

            <div className="space-y-2">
              <span className="text-[#C59B27] group-hover:text-[#1C2D42] text-xs font-semibold uppercase tracking-[0.2em] transition-colors duration-500">
                Our Horizon
              </span>
              <h3 className="text-2xl font-light text-[#1C2D42] group-hover:text-[#1C2D42] transition-colors duration-500">
                Vision Statement
              </h3>
            </div>

            <p className="text-[#4A5568] group-hover:text-[#1C2D42] leading-relaxed font-light text-sm sm:text-base transition-colors duration-500">
              “To see transformed communities and nations through the Gospel of Jesus Christ by reaching the unreached, raising mature disciples, and releasing Spirit-empowered believers for Kingdom impact.”
            </p>
          </div>
        </motion.div>
      </div>

      {/* Focus Areas List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#EFEAD8] border border-[#D0C4A8] p-6 sm:p-8 rounded-3xl text-center space-y-4"
      >
        <span className="text-[#1C2D42] text-xs font-semibold uppercase tracking-[0.2em] block">
          What We Do Focus Areas
        </span>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 pt-2">
          {focusAreas.map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              className="bg-[#F3EFE0] hover:bg-[#FFCC00] border border-[#D0C4A8] px-5 py-2.5 rounded-2xl flex items-center gap-2 text-sm font-medium text-[#1C2D42] shadow-sm transition-all duration-300 cursor-pointer"
            >
              <CheckCircle2 size={16} className="text-[#C59B27]" />
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}