"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Clock } from "lucide-react";

const heroSlides = [
  {
    id: 1,
    image: "/images/hero-1.jpg",
    title: "Reach the Unreached",
    subtitle: "Sharing the Gospel of Jesus Christ with love, compassion, and urgency.",
  },
  {
    id: 2,
    image: "/images/hero-2.jpg",
    title: "Raise Disciples",
    subtitle: "Building strong believers through the Word of God, prayer, and fellowship.",
  },
  {
    id: 3,
    image: "/images/hero-3.jpg",
    title: "Release Leaders",
    subtitle: "Equipping believers to transform communities and influence nations.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[580px] w-full overflow-hidden bg-[#1C2D42]">
      {/* Background Image Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={heroSlides[currentSlide].image}
            alt="Kandy Community Church"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C2D42] via-[#1C2D42]/75 to-[#1C2D42]/40" />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content Layer */}
      <div className="relative z-10 h-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center text-center space-y-6 pt-10">
        
        {/* Church Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#1C2D42]/80 border-2 border-[#C59B27] p-2 flex items-center justify-center shadow-2xl backdrop-blur-md"
        >
          <Image
            src="/images/logo.png"
            alt="Kandy Community Church Logo"
            width={90}
            height={90}
            className="object-contain"
          />
        </motion.div>

        {/* Church Motto Badge */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block text-[#FFCC00] text-xs uppercase tracking-[0.3em] font-semibold px-4 py-1.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm"
        >
          Reach · Raise · Release
        </motion.span>

        {/* Dynamic Text Content */}
        <div className="max-w-3xl space-y-3 min-h-[130px] flex flex-col justify-center">
          <motion.h1
            key={`title-${currentSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-6xl font-light text-white tracking-wide"
          >
            {heroSlides[currentSlide].title}
          </motion.h1>

          <motion.p
            key={`sub-${currentSlide}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-200 text-sm sm:text-lg font-light leading-relaxed max-w-2xl mx-auto"
          >
            {heroSlides[currentSlide].subtitle}
          </motion.p>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <Link
            href="/hub"
            className="bg-[#FFCC00] hover:bg-[#e6b800] text-[#1C2D42] px-7 py-3 rounded-xl font-semibold text-sm transition-all shadow-md flex items-center gap-2"
          >
            <span>Kingdom Community Hub</span>
            <ArrowRight size={16} />
          </Link>
          <a
            href="#service-times"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-7 py-3 rounded-xl font-medium text-sm transition-all backdrop-blur-sm"
          >
            Sunday Worship
          </a>
        </motion.div>

        {/* Slider Controls (Dots) */}
        <div className="absolute bottom-6 flex items-center gap-2.5">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? "w-8 bg-[#FFCC00]" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}