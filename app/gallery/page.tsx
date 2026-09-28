"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Image as ImageIcon, X, Maximize2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Sample Gallery Data (Replace with your actual photo paths in /public/images/gallery/)
const galleryCategories = ["All", "Worship Services", "Bethel Education", "Community Care", "Youth & Events"];

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
    <div className="min-h-screen flex flex-col bg-[#F3EFE0]">
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
            className="inline-flex items-center gap-2 text-sm font-medium text-[#C59B27] hover:text-[#1C2D42] transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
        </motion.div>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#C59B27] text-xs uppercase tracking-[0.25em] font-semibold px-3 py-1 rounded-full bg-[#C59B27]/10"
          >
            Moments & Ministry
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-light text-[#1C2D42]"
          >
            Photo Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#5A6A80] text-sm sm:text-base font-light"
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
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm ${
                  isActive
                    ? "bg-[#1C2D42] text-[#FFCC00] shadow-md"
                    : "bg-[#E6DEC8]/80 text-[#1C2D42] hover:bg-[#FFCC00] border border-[#D0C4A8]"
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
                className="group relative bg-[#E6DEC8]/60 rounded-3xl border border-[#D0C4A8] overflow-hidden shadow-sm hover:shadow-xl cursor-pointer transition-all duration-500 flex flex-col justify-between"
              >
                {/* Yellow Fill Hover Effect */}
                <div className="absolute inset-0 bg-[#FFCC00] translate-y-full group-hover:translate-y-0 transition-transform duration-[600ms] ease-[cubic-bezier(0.25,1,0.3,1)] z-0 pointer-events-none" />

                {/* Photo Container */}
                <div className="relative h-56 w-full overflow-hidden bg-[#1C2D42]/10 z-10">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#1C2D42]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="w-10 h-10 rounded-full bg-[#1C2D42] text-[#FFCC00] flex items-center justify-center shadow-lg">
                      <Maximize2 size={18} />
                    </span>
                  </div>
                </div>

                {/* Card Info */}
                <div className="relative z-10 p-6 space-y-2">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#C59B27] group-hover:text-[#1C2D42] bg-[#1C2D42]/5 group-hover:bg-[#1C2D42]/10 px-2.5 py-1 rounded-full transition-colors duration-500">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-light text-[#1C2D42] transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5A6A80] group-hover:text-[#1C2D42] font-light leading-relaxed transition-colors duration-500">
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
              className="fixed inset-0 z-[999] bg-[#1C2D42]/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-3xl w-full bg-[#FAF6ED] rounded-3xl overflow-hidden border border-[#D0C4A8] shadow-2xl space-y-4"
              >
                <button
                  onClick={() => setActiveImage(null)}
                  className="absolute top-4 right-0 z-20 mr-4 w-9 h-9 rounded-full bg-[#1C2D42] text-white flex items-center justify-center hover:bg-[#FFCC00] hover:text-[#1C2D42] transition-colors"
                >
                  <X size={20} />
                </button>

                <div className="relative h-72 sm:h-96 w-full bg-[#1C2D42]">
                  <Image
                    src={activeImage.image}
                    alt={activeImage.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#C59B27] bg-[#C59B27]/10 px-3 py-1 rounded-full">
                    {activeImage.category}
                  </span>
                  <h3 className="text-2xl font-light text-[#1C2D42]">{activeImage.title}</h3>
                  <p className="text-sm text-[#5A6A80] font-light">{activeImage.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}