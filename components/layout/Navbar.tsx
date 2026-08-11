"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-md border-b border-gray-200/60 overflow-x-clip">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between relative">
        
        {/* Animated Brand Section */}
        <div className="flex items-center gap-3">
          {/* Logo Image Animation: Center -> Left */}
          <motion.div
            initial={{ x: "calc(50vw - 50% - 24px)", scale: 1.3 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
            className="relative w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 z-20"
          >
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Kandy Community Church Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </motion.div>

          {/* Text Title Fade-In */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <Link href="/" className="font-bold text-sm sm:text-base md:text-lg text-[#1C2D42] tracking-wider uppercase whitespace-nowrap">
              Kandy Community Church
            </Link>
          </motion.div>
        </div>

        {/* Desktop Links */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
          className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#2D3748]"
        >
          <Link href="/" className="hover:text-[#C59B27] transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#C59B27] transition-colors">
            Our Story
          </Link>
          <Link href="/beliefs" className="hover:text-[#C59B27] transition-colors">
            Beliefs & Values
          </Link>
          <Link href="/ministries" className="hover:text-[#C59B27] transition-colors">
            What We Do
          </Link>
          <Link href="/hub" className="hover:text-[#C59B27] transition-colors">
            Community Hub
          </Link>
        </motion.div>

        {/* Desktop CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.3, ease: "easeOut" }}
          className="hidden md:block"
        >
          <Link
            href="/hub#donate"
            className="bg-[#1C2D42] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#1C2D42]/90 transition-all shadow-sm block"
          >
            Support Us
          </Link>
        </motion.div>

        {/* Mobile Hamburger Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#1C2D42] focus:outline-none z-20"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </motion.button>
      </div>

      {/* Mobile Slide-down Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#FAF9F6] border-b border-gray-200/80 px-6 py-6"
          >
            <div className="flex flex-col gap-4 text-base font-medium text-[#2D3748]">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#C59B27] py-1 border-b border-gray-100"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#C59B27] py-1 border-b border-gray-100"
              >
                Our Story
              </Link>
              <Link
                href="/beliefs"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#C59B27] py-1 border-b border-gray-100"
              >
                Beliefs & Values
              </Link>
              <Link
                href="/ministries"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#C59B27] py-1 border-b border-gray-100"
              >
                What We Do
              </Link>
              <Link
                href="/hub"
                onClick={() => setIsOpen(false)}
                className="hover:text-[#C59B27] py-1 border-b border-gray-100"
              >
                Community Hub
              </Link>
              <Link
                href="/hub#donate"
                onClick={() => setIsOpen(false)}
                className="bg-[#1C2D42] text-white text-center py-3 rounded-full font-medium mt-2 shadow-sm"
              >
                Support Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}