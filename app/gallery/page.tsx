"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Sparkles, X, Maximize2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Gallery Categories
const galleryCategories = [
  "All",
  "Worship Services",
  "Bethel Education",
  "Community Care",
  "Youth & Events",
];

// Gallery Data with single image placeholder (/images/hero-1.jpg)
const galleryItems = [
  {
    id: 1,
    title: "Sunday Morning Worship",
    category: "Worship Services",
    image: "/images/hero-1.jpg",
    description: "Gathering together in unity every Sunday at 12:00 PM.",
  },
  {
    id: 2,
    title: "Bethel Education Classes",
    category: "Bethel Education",
    image: "/images/hero-1.jpg",
    description: "Empowering children through character building and education.",
  },
  {
    id: 3,
    title: "Kidney Patient Support & Care",
    category: "Community Care",
    image: "/images/hero-1.jpg",
    description: "Extending love and practical support to dialysis patients and families.",
  },
  {
    id: 4,
    title: "Praise & Intercession",
    category: "Worship Services",
    image: "/images/hero-1.jpg",
    description: "Deep times of prayer and Spirit-filled worship.",
  },
  {
    id: 5,
    title: "Youth Fellowship Gathering",
    category: "Youth & Events",
    image: "/images/hero-1.jpg",
    description: "Equipping the next generation of leaders in Kandy.",
  },
  {
    id: 6,
    title: "Community Outreach & Relief",
    category: "Community Care",
    image: "/images/hero-1.jpg",
    description: "Reaching out to vulnerable families across surrounding villages.",
  },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeImage, setActiveImage] = useState<(typeof galleryItems)[0] | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-[#120E0B] text-white selection:bg-[#FFCC00] selection:text-[#120E0B] relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FFCC00]/10 blur-[140px] rounded-full" />
        <div className="absolute top-3/4 -right-32 w-80 h-80 bg-[#D4A359]/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1 py-16 px-4 sm:px-6 max-w-6xl mx-auto w-full space-y-12">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#FFCC00] hover:text-white transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>
          </motion.div>

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 text-[#FFCC00] text-xs uppercase tracking-[0.25em] font-semibold px-4 py-1.5 rounded-full bg-[#FFCC00]/10 border border-[#FFCC00]/20 backdrop-blur-md"
            >
              <Sparkles size={14} className="text-[#FFCC00] animate-pulse" />
              <span>Moments & Ministry</span>
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-light text-white tracking-wide"
            >
              Photo Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-sm sm:text-base font-light"
            >
              A glimpse into God's work, fellowship, and community care at Kandy Community Church.
            </motion.p>
          </div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-2.5 pt-2"
          >
            {galleryCategories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? "bg-[#FFCC00] text-[#120E0B] shadow-[0_0_20px_rgba(255,204,0,0.4)]"
                      : "bg-[#1A1410]/80 text-gray-300 hover:text-white hover:border-[#FFCC00] border border-[#D4A359]/30 backdrop-blur-md"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </motion.div>

          {/* Image Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setActiveImage(item)}
                  className="group relative bg-[#1A1410]/80 rounded-3xl border border-[#D4A359]/30 hover:border-[#FFCC00] shadow-xl hover:shadow-[0_0_25px_rgba(255,204,0,0.2)] overflow-hidden cursor-pointer transition-all duration-500 flex flex-col justify-between backdrop-blur-xl"
                >
                  {/* Photo Container */}
                  <div className="relative h-56 w-full overflow-hidden bg-[#241C15]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1410] via-transparent to-transparent opacity-60" />
                    <div className="absolute inset-0 bg-[#120E0B]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="w-10 h-10 rounded-full bg-[#FFCC00] text-[#120E0B] flex items-center justify-center shadow-[0_0_15px_rgba(255,204,0,0.5)]">
                        <Maximize2 size={18} />
                      </span>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-6 space-y-2 relative z-10">
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#FFCC00] bg-[#FFCC00]/10 border border-[#FFCC00]/20 px-3 py-1 rounded-full inline-block backdrop-blur-md">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-light text-white group-hover:text-[#FFCC00] transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-300 group-hover:text-white font-light leading-relaxed transition-colors duration-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Lightbox / Modal */}
          <AnimatePresence>
            {activeImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveImage(null)}
                className="fixed inset-0 z-[999] bg-[#120E0B]/90 backdrop-blur-xl p-4 sm:p-8 flex items-center justify-center"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-w-3xl w-full bg-[#1A1410] rounded-3xl overflow-hidden border border-[#FFCC00]/40 shadow-[0_0_50px_rgba(0,0,0,0.9)] space-y-4"
                >
                  <button
                    onClick={() => setActiveImage(null)}
                    className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-[#241C15] border border-[#FFCC00]/40 text-white flex items-center justify-center hover:bg-[#FFCC00] hover:text-[#120E0B] transition-colors"
                  >
                    <X size={20} />
                  </button>

                  <div className="relative h-72 sm:h-96 w-full bg-[#241C15]">
                    <Image
                      src={activeImage.image}
                      alt={activeImage.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-6 sm:p-8 space-y-2">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#FFCC00] bg-[#FFCC00]/10 border border-[#FFCC00]/20 px-3 py-1 rounded-full">
                      {activeImage.category}
                    </span>
                    <h3 className="text-2xl font-light text-white">{activeImage.title}</h3>
                    <p className="text-sm text-gray-300 font-light">{activeImage.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </div>
  );
}