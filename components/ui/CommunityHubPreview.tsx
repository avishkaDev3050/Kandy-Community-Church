"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, ArrowRight, HeartHandshake, ShieldCheck } from "lucide-react";

export default function CommunityHubPreview() {
  return (
    <section className="py-24 px-4 sm:px-6 bg-[#1C2D42] text-white relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#F6AD55] text-xs uppercase tracking-[0.25em] font-medium px-4 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md">
            Future Vision & Project[cite: 1]
          </span>
          <h2 className="text-3xl sm:text-5xl font-light leading-tight">
            Kingdom Community Hub Project
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
            A permanent home for worship, discipleship, community care, and transformation in Kandy.
          </p>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-white/5 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-white/10 space-y-6"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#C59B27]/20 text-[#F6AD55] flex items-center justify-center border border-[#C59B27]/30">
              <Building2 size={28} />
            </div>

            <h3 className="text-2xl sm:text-3xl font-light text-white">
              Building for Future Generations
            </h3>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
              We are actively trusting God for a dedicated property to establish a worship sanctuary, educational spaces, training facilities, and community care hubs to serve the city of Kandy.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-[#F6AD55] shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-sm font-medium text-white">Permanent Sanctuary</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Space for growing congregation</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HeartHandshake className="text-[#F6AD55] shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="text-sm font-medium text-white">Community Outreach</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Training and care services</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/hub"
                className="inline-flex items-center gap-2 bg-[#C59B27] hover:bg-[#b08820] text-white px-7 py-3.5 rounded-full text-sm font-medium shadow-lg transition-all group"
              >
                Learn More About The Project
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Quick Call-to-Action Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 bg-gradient-to-br from-[#C59B27]/20 to-white/5 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-[#C59B27]/30 flex flex-col justify-between space-y-8 text-center sm:text-left"
          >
            <div className="space-y-4">
              <span className="text-[#F6AD55] text-xs font-semibold uppercase tracking-wider">
                Partner With Us
              </span>
              <h4 className="text-2xl font-light text-white">
                Support The Building Fund
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed font-light">
                Your generosity helps establish a lasting spiritual legacy in Kandy. Pray with us and consider making a financial contribution.
              </p>
            </div>

            <div className="space-y-3">
              <Link
                href="/hub#donate"
                className="w-full inline-flex items-center justify-center bg-white text-[#1C2D42] hover:bg-gray-100 font-medium px-6 py-3.5 rounded-full text-sm transition-all shadow-md"
              >
                Give & Support
              </Link>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}