"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-4 sm:px-6 py-16 text-center overflow-hidden bg-[#241C15]">
      
      {/* 1. Mobile Background Image */}
      <div className="block sm:hidden absolute inset-0 z-0">
        <Image
          src="/background-m.jpg"
          alt="Kandy Community Church Mobile Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft Dark Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-[#241C15]/60 bg-gradient-to-b from-[#241C15]/80 via-transparent to-[#241C15]/90" />
      </div>

      {/* 2. Desktop Background Image */}
      <div className="hidden sm:block absolute inset-0 z-0">
        <Image
          src="/background.jpg"
          alt="Kandy Community Church Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft Dark Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-[#241C15]/50 bg-gradient-to-r from-[#241C15]/80 via-[#241C15]/40 to-[#241C15]/80" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">

        {/* Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <span className="inline-block text-[#D4A359] text-xs sm:text-sm uppercase tracking-[0.25em] font-medium px-4 py-1.5 rounded-full bg-[#241C15]/70 backdrop-blur-md border border-[#C59B27]/30 shadow-lg">
            Reach. Raise. Release.
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="mt-6 text-3xl sm:text-5xl md:text-6xl font-light text-[#F4EBE1] leading-[1.15] drop-shadow-lg"
        >
          Transforming Communities Through <br className="hidden sm:inline" />
          <span className="italic font-serif font-normal text-[#D4A359]">
            The Gospel of Christ
          </span>
        </motion.h1>

        {/* Subtitle Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-6 text-[#D1C2B4] text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed drop-shadow-md font-light"
        >
          A Christ-centered community in Kandy dedicated to reaching the unreached, raising mature disciples, and restoring families.
        </motion.p>

        {/* Call To Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <Link
            href="/about"
            className="w-full sm:w-auto bg-[#B8860B] hover:bg-[#A3750A] text-[#1A120B] px-8 py-3.5 rounded-full text-sm font-semibold shadow-xl transition-all text-center hover:scale-105 active:scale-95"
          >
            Our Story & Vision
          </Link>
          <a
            href="#sunday-service"
            className="w-full sm:w-auto bg-[#241C15]/70 hover:bg-[#3D3024] text-[#F4EBE1] border border-[#C59B27]/40 backdrop-blur-md px-8 py-3.5 rounded-full text-sm font-medium transition-all shadow-lg text-center hover:scale-105 active:scale-95"
          >
            Sunday Service Info
          </a>
        </motion.div>

      </div>
    </section>
  );
}