"use client";

import { motion } from "framer-motion";
import { Compass, Target, MapPin, Clock, ArrowUpRight } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="relative py-24 px-4 sm:px-6 bg-[#FAF9F6] overflow-hidden">
      {/* Soft Background Accent Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#C59B27]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#1C2D42]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Mission Card with Animated Hover */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
            whileHover={{ y: -8 }}
            className="group relative bg-white/80 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-2xl hover:border-[#C59B27]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Subtle Hover Gradient Fill */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#C59B27]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 rounded-2xl bg-[#C59B27]/10 group-hover:bg-[#C59B27] group-hover:text-white transition-colors duration-300 flex items-center justify-center text-[#C59B27] shadow-sm"
                >
                  <Target size={28} />
                </motion.div>
                <span className="text-[#C59B27] text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-[#C59B27]/10">
                  Our Purpose
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-light text-[#1C2D42] mb-4 group-hover:text-[#C59B27] transition-colors">
                Mission Statement
              </h2>
              
              <p className="text-[#718096] leading-relaxed text-sm sm:text-base font-normal">
                “Kandy Community Church exists to reach the unreached with the Gospel, raise faithful and Christ-centered disciples, and release Spirit-filled believers to transform communities and influence nations for the glory of God." 
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center text-xs font-medium text-[#1C2D42] opacity-70 group-hover:opacity-100 transition-opacity">
              <span>Reach. Raise. Release.</span>
              <ArrowUpRight size={16} className="ml-1 text-[#C59B27]" />
            </div>
          </motion.div>

          {/* Vision Card with Animated Hover */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            whileHover={{ y: -8 }}
            className="group relative bg-white/80 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-gray-200/80 shadow-sm hover:shadow-2xl hover:border-[#1C2D42]/30 transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            {/* Subtle Hover Gradient Fill */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1C2D42]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="w-14 h-14 rounded-2xl bg-[#1C2D42]/10 group-hover:bg-[#1C2D42] group-hover:text-white transition-colors duration-300 flex items-center justify-center text-[#1C2D42] shadow-sm"
                >
                  <Compass size={28} />
                </motion.div>
                <span className="text-[#1C2D42] text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full bg-[#1C2D42]/10">
                  Our Future
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-light text-[#1C2D42] mb-4 group-hover:text-[#C59B27] transition-colors">
                Vision Statement
              </h2>

              <p className="text-[#718096] leading-relaxed text-sm sm:text-base font-normal">
                “To see transformed communities and nations through the Gospel of Jesus Christ by reaching the unreached, raising mature disciples, and releasing Spirit-empowered believers for Kingdom impact.”
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center text-xs font-medium text-[#1C2D42] opacity-70 group-hover:opacity-100 transition-opacity">
              <span>Transformed Communities</span>
              <ArrowUpRight size={16} className="ml-1 text-[#C59B27]" />
            </div>
          </motion.div>

        </div>

        {/* Animated Sunday Gathering Info Banner */}
        <motion.div
          id="sunday-service"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative bg-gradient-to-r from-[#1C2D42] via-[#243B55] to-[#1C2D42] text-white p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 overflow-hidden border border-white/10"
        >
          {/* Ambient Lighting Circles inside Banner */}
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-3 text-center lg:text-left z-10 max-w-lg">
            <span className="inline-block text-[#C59B27] text-xs uppercase tracking-[0.2em] font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10">
              Weekly Service Gathering
            </span>
            <h3 className="text-2xl sm:text-4xl font-light tracking-wide text-white">
              Join Us Every Sunday
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
              Our morning service is welcoming and family friendly, creating a warm place of belonging for every age and background.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 z-10 w-full lg:w-auto">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/15 w-full sm:w-auto shadow-sm"
            >
              <div className="p-3 bg-[#C59B27]/20 rounded-xl text-[#C59B27]">
                <Clock size={22} />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-300 uppercase tracking-wider">Service Time</p>
                <p className="text-base font-semibold text-white">At 12:00 Noon</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/15 w-full sm:w-auto shadow-sm"
            >
              <div className="p-3 bg-[#C59B27]/20 rounded-xl text-[#C59B27]">
                <MapPin size={22} />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-300 uppercase tracking-wider">Location</p>
                <p className="text-base font-semibold text-white">26 Colombo St, Kandy</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}