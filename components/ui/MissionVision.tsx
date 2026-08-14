"use client";

import { motion } from "framer-motion";
import { Compass, Target, MapPin, Clock, ArrowUpRight } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="relative py-24 px-4 sm:px-6 bg-[#281F17] overflow-hidden text-[#F4EBE1]">
      {/* Soft Gold Background Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#D4A359]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#D4A359]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            whileHover={{ y: -8 }}
            className="group relative bg-[#34291F] backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-[#D4A359]/30 shadow-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden"
          >
            {/* Liquid Fill Hover Effect */}
            <div className="absolute inset-0 bg-[#D4A359] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out -z-0 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 rounded-2xl bg-[#D4A359]/20 group-hover:bg-[#1A120B] group-hover:text-[#D4A359] transition-colors duration-500 flex items-center justify-center text-[#D4A359] shadow-md"
                >
                  <Target size={28} />
                </motion.div>
                <span className="text-[#D4A359] group-hover:text-[#1A120B] text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-[#D4A359]/15 group-hover:bg-[#1A120B]/10 transition-colors duration-500 border border-[#D4A359]/30">
                  Our Purpose
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-light text-[#FFFFFF] group-hover:text-[#1A120B] mb-4 transition-colors duration-500">
                Mission Statement
              </h2>
              
              <p className="text-[#E2D4C7] group-hover:text-[#1A120B] leading-relaxed text-sm sm:text-base font-normal transition-colors duration-500">
                “Kandy Community Church exists to reach the unreached with the Gospel, raise faithful and Christ-centered disciples, and release Spirit-filled believers to transform communities and influence nations for the glory of God." 
              </p>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-[#D4A359]/20 group-hover:border-[#1A120B]/20 flex items-center justify-between text-xs font-semibold text-[#D4A359] group-hover:text-[#1A120B] transition-colors duration-500">
              <span>Reach. Raise. Release.</span>
              <ArrowUpRight size={18} className="text-[#D4A359] group-hover:text-[#1A120B] transition-colors duration-500" />
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            whileHover={{ y: -8 }}
            className="group relative bg-[#34291F] backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-[#D4A359]/30 shadow-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden"
          >
            {/* Liquid Fill Hover Effect */}
            <div className="absolute inset-0 bg-[#D4A359] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out -z-0 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-14 h-14 rounded-2xl bg-[#D4A359]/20 group-hover:bg-[#1A120B] group-hover:text-[#D4A359] transition-colors duration-500 flex items-center justify-center text-[#D4A359] shadow-md"
                >
                  <Compass size={28} />
                </motion.div>
                <span className="text-[#D4A359] group-hover:text-[#1A120B] text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-[#D4A359]/15 group-hover:bg-[#1A120B]/10 transition-colors duration-500 border border-[#D4A359]/30">
                  Our Future
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-light text-[#FFFFFF] group-hover:text-[#1A120B] mb-4 transition-colors duration-500">
                Vision Statement
              </h2>

              <p className="text-[#E2D4C7] group-hover:text-[#1A120B] leading-relaxed text-sm sm:text-base font-normal transition-colors duration-500">
                “To see transformed communities and nations through the Gospel of Jesus Christ by reaching the unreached, raising mature disciples, and releasing Spirit-empowered believers for Kingdom impact.”
              </p>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-[#D4A359]/20 group-hover:border-[#1A120B]/20 flex items-center justify-between text-xs font-semibold text-[#D4A359] group-hover:text-[#1A120B] transition-colors duration-500">
              <span>Transformed Communities</span>
              <ArrowUpRight size={18} className="text-[#D4A359] group-hover:text-[#1A120B] transition-colors duration-500" />
            </div>
          </motion.div>

        </div>

        {/* Sunday Gathering Banner */}
        <motion.div
          id="sunday-service"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative bg-[#34291F] text-[#F4EBE1] p-8 sm:p-12 rounded-3xl shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden border border-[#D4A359]/40"
        >
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-[#D4A359]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 text-center lg:text-left z-10 max-w-lg">
            <span className="inline-block text-[#D4A359] text-xs uppercase tracking-[0.2em] font-semibold px-3 py-1 rounded-full bg-[#D4A359]/15 border border-[#D4A359]/30">
              Weekly Service Gathering
            </span>
            <h3 className="text-2xl sm:text-4xl font-light tracking-wide text-white">
              Join Us Every Sunday
            </h3>
            <p className="text-[#E2D4C7] text-sm sm:text-base leading-relaxed font-light">
              Our morning service is welcoming and family friendly, creating a warm place of belonging for every age and background.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 z-10 w-full lg:w-auto">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-4 bg-[#281F17] px-6 py-4 rounded-2xl border border-[#D4A359]/30 w-full sm:w-auto shadow-md"
            >
              <div className="p-3 bg-[#D4A359]/20 rounded-xl text-[#D4A359]">
                <Clock size={22} />
              </div>
              <div className="text-left">
                <p className="text-xs text-[#E2D4C7] uppercase tracking-wider">Service Time</p>
                <p className="text-base font-semibold text-white">At 12:00 Noon</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-4 bg-[#281F17] px-6 py-4 rounded-2xl border border-[#D4A359]/30 w-full sm:w-auto shadow-md"
            >
              <div className="p-3 bg-[#D4A359]/20 rounded-xl text-[#D4A359]">
                <MapPin size={22} />
              </div>
              <div className="text-left">
                <p className="text-xs text-[#E2D4C7] uppercase tracking-wider">Location</p>
                <p className="text-base font-semibold text-white">26 Colombo St, Kandy</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}