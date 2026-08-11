"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-4 sm:px-6 py-16 text-center overflow-hidden">
      
      {/* Background Image with Dark & Soft Overlay for Readability */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10 transition-all duration-700"
        style={{ backgroundImage: "url('/background-img.png')" }}
      >
        {/* Soft Dark Overlay with Glass/Blur Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C2D42]/60 via-[#1C2D42]/40 to-[#1C2D42]/80 backdrop-blur-[2px]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        

        {/* Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
        >
          <span className="inline-block tex[cite: 1]t-[#F6AD55] text-xs sm:text-sm uppercase tracking-[0.25em] font-medium px-4 py-1.5 rounded-full bg-black/20 backdrop-blur-md border border-[#F6AD55]/30">
            Reach. Raise. Release.
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
          className="mt-6 text-3xl sm:text-5xl md:text-6xl font-light text-white leading-[1.15] drop-shadow-md"
        >
          Transforming Communities Through <br className="hidden sm:inline" />
          <span className="italic font-serif font-normal text-[#F6AD55]">
            The Gospel of Christ
          </span>
        </motion.h1>

        {/* Subtitle Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
          className="mt-6 text-gray-200 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow"
        >
          A Christ-centered community in Kandy dedicated to reaching the unreached, raising mature disciples, and restoring families.
        </motion.p>

        {/* Call To Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.7, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/about"
            className="w-full sm:w-auto bg-[#C59B27] hover:bg-[#b08820] text-white px-8 py-3.5 rounded-full text-sm font-medium shadow-lg transition-all"
          >
            Our Story & Vision
          </Link>
          <a
            href="#sunday-service"
            className="w-full sm:w-auto bg-white/20 hover:bg-white/30 text-white border border-white/40 backdrop-blur-md px-8 py-3.5 rounded-full text-sm font-medium transition-all shadow-md"
          >
            Sunday Service Info
          </a>
        </motion.div>

      </div>
    </section>
  );
}