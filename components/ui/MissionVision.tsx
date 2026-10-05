"use client";

import { motion } from "framer-motion";
import { Compass, Target, CheckCircle2, Sparkles } from "lucide-react";

const focusAreas = [
  "Educate",
  "Care",
  "Worship",
  "Train",
  "Commission",
];

export default function MissionVision() {
  return (
    <section className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto space-y-16 text-white">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#FFCC00]/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 text-center max-w-2xl mx-auto space-y-3">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-[#FFCC00] text-xs uppercase tracking-[0.25em] font-semibold px-4 py-1.5 rounded-full bg-[#FFCC00]/10 border border-[#FFCC00]/20 backdrop-blur-md shadow-[0_0_15px_rgba(255,204,0,0.1)]"
        >
          <Sparkles size={14} className="text-[#FFCC00] animate-pulse" />
          <span>Our Foundation</span>
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-light text-white tracking-wide"
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
        className="relative z-10 bg-[#1A1410]/90 border border-[#FFCC00]/30 hover:border-[#FFCC00] text-white p-8 sm:p-10 rounded-3xl text-center shadow-[0_0_25px_rgba(0,0,0,0.5)] hover:shadow-[0_0_35px_rgba(255,204,0,0.25)] relative overflow-hidden group cursor-pointer backdrop-blur-xl transition-all duration-500"
      >
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-[#FFCC00]/15 rounded-full blur-3xl pointer-events-none group-hover:scale-150 transition-all duration-700" />

        <span className="text-[#FFCC00] text-xs uppercase tracking-[0.35em] font-medium block mb-2 group-hover:tracking-[0.45em] transition-all duration-300">
          Church Motto
        </span>
        <h3 className="text-2xl sm:text-4xl font-light tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-white to-[#FFCC00]">
          “Reach. Raise. Release.”
        </h3>
      </motion.div>

      {/* Mission & Vision Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative bg-[#1A1410]/80 p-8 sm:p-10 rounded-3xl border border-[#D4A359]/30 hover:border-[#FFCC00] shadow-xl hover:shadow-[0_0_30px_rgba(255,204,0,0.2)] overflow-hidden transition-all duration-500 flex flex-col justify-between backdrop-blur-xl"
        >
          {/* Subtle Ambient Light Effect */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFCC00]/5 rounded-full blur-2xl group-hover:bg-[#FFCC00]/15 transition-all duration-500 pointer-events-none" />

          {/* Card Content */}
          <div className="relative z-10 space-y-5">
            <div className="w-14 h-14 rounded-2xl bg-[#241C15] border border-[#FFCC00]/40 text-[#FFCC00] group-hover:border-[#FFCC00] group-hover:shadow-[0_0_15px_rgba(255,204,0,0.4)] flex items-center justify-center transition-all duration-500">
              <Target size={26} />
            </div>

            <div className="space-y-1.5">
              <span className="text-[#FFCC00] text-xs font-semibold uppercase tracking-[0.25em]">
                Our Purpose
              </span>
              <h3 className="text-2xl font-light text-white group-hover:text-[#FFCC00] transition-colors duration-300">
                Mission Statement
              </h3>
            </div>

            <p className="text-gray-200 leading-relaxed font-light text-sm sm:text-base group-hover:text-white transition-colors duration-300">
              “Kandy Community Church exists to reach the unreached with the Gospel, raise faithful and Christ-centered disciples, and release Spirit-filled believers to transform communities and influence nations for the glory of God.”
            </p>
          </div>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group relative bg-[#1A1410]/80 p-8 sm:p-10 rounded-3xl border border-[#D4A359]/30 hover:border-[#FFCC00] shadow-xl hover:shadow-[0_0_30px_rgba(255,204,0,0.2)] overflow-hidden transition-all duration-500 flex flex-col justify-between backdrop-blur-xl"
        >
          {/* Subtle Ambient Light Effect */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFCC00]/5 rounded-full blur-2xl group-hover:bg-[#FFCC00]/15 transition-all duration-500 pointer-events-none" />

          {/* Card Content */}
          <div className="relative z-10 space-y-5">
            <div className="w-14 h-14 rounded-2xl bg-[#241C15] border border-[#FFCC00]/40 text-[#FFCC00] group-hover:border-[#FFCC00] group-hover:shadow-[0_0_15px_rgba(255,204,0,0.4)] flex items-center justify-center transition-all duration-500">
              <Compass size={26} />
            </div>

            <div className="space-y-1.5">
              <span className="text-[#FFCC00] text-xs font-semibold uppercase tracking-[0.25em]">
                Our Horizon
              </span>
              <h3 className="text-2xl font-light text-white group-hover:text-[#FFCC00] transition-colors duration-300">
                Vision Statement
              </h3>
            </div>

            <p className="text-gray-200 leading-relaxed font-light text-sm sm:text-base group-hover:text-white transition-colors duration-300">
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
        className="relative z-10 bg-[#1A1410]/70 border border-[#D4A359]/30 backdrop-blur-xl p-6 sm:p-8 rounded-3xl text-center space-y-4 shadow-xl"
      >
        <span className="text-[#FFCC00] text-xs font-semibold uppercase tracking-[0.25em] block">
          What We Do Focus Areas
        </span>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-5 pt-2">
          {focusAreas.map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              className="bg-[#241C15] hover:bg-[#FFCC00] border border-[#D4A359]/40 hover:border-[#FFCC00] px-5 py-2.5 rounded-2xl flex items-center gap-2 text-sm font-medium text-white hover:text-[#120E0B] shadow-md transition-all duration-300 cursor-pointer group"
            >
              <CheckCircle2 size={16} className="text-[#FFCC00] group-hover:text-[#120E0B] transition-colors duration-300" />
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}