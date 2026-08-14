"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Story", href: "/about" },
    { name: "Beliefs & Values", href: "/beliefs" },
    { name: "What We Do", href: "/ministries" },
    { name: "Community Hub", href: "/hub" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#241C15]/95 backdrop-blur-md border-b border-[#3D3024] shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between relative">
        
        {/* Animated Brand Section */}
        <div className="flex items-center gap-3">
          {/* Logo Animation with Oak Glow */}
          <motion.div
            initial={{ x: "calc(50vw - 50% - 24px)", scale: 1.3 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1], delay: 0.3 }}
            className="relative w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 z-20 group"
          >
            <Link href="/" className="block relative w-full h-full">
              <div className="absolute inset-0 rounded-full bg-[#C59B27]/20 blur-md group-hover:bg-[#C59B27]/40 transition-all duration-500" />
              
              <Image
                src="/logo.png"
                alt="Kandy Community Church Logo"
                fill
                className="object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </Link>
          </motion.div>

          {/* Text Title Fade-In */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <Link href="/" className="group flex flex-col">
              <span className="font-serif font-bold text-base sm:text-lg text-[#F4EBE1] tracking-wider uppercase whitespace-nowrap group-hover:text-[#D4A359] transition-colors duration-300">
                Kandy Community Church
              </span>
              <span className="text-[10px] tracking-[0.22em] text-[#C59B27] font-sans font-medium uppercase">
                Faith • Hope • Love
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Desktop Links with Warm Golden Underline */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
          className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#D1C2B4]"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 transition-colors duration-300 ${
                  isActive ? "text-[#F4EBE1] font-semibold" : "hover:text-[#D4A359]"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C59B27] rounded-full shadow-[0_0_6px_#C59B27]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </motion.div>

        {/* Desktop CTA: Oak Wood Amber Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.3, ease: "easeOut" }}
          className="hidden md:block"
        >
          <Link
            href="/hub#donate"
            className="relative group overflow-hidden bg-[#B8860B] hover:bg-[#A3750A] text-[#1A120B] px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            {/* Soft Shimmer Highlight */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            
            <Heart size={15} className="fill-[#1A120B]/20 text-[#1A120B] transition-transform duration-300 group-hover:scale-110" />
            <span className="relative z-10">Support Us</span>
          </Link>
        </motion.div>

        {/* Mobile Hamburger Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#F4EBE1] hover:text-[#D4A359] transition-colors focus:outline-none z-20"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </motion.button>
      </div>

      {/* Mobile Slide-down Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="md:hidden bg-[#241C15]/98 backdrop-blur-lg border-b border-[#3D3024] px-6 py-6 shadow-xl"
          >
            <div className="flex flex-col gap-2 text-base font-medium text-[#D1C2B4]">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * idx, duration: 0.25 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`block py-2.5 px-3 rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-[#3D3024] text-[#F4EBE1] border-l-4 border-[#C59B27] font-semibold"
                          : "hover:bg-[#3D3024]/50 hover:text-[#F4EBE1]"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.3 }}
                className="pt-3"
              >
                <Link
                  href="/hub#donate"
                  onClick={() => setIsOpen(false)}
                  className="bg-[#B8860B] text-[#1A120B] text-center py-3 rounded-full font-semibold shadow-md flex items-center justify-center gap-2 active:scale-95 transition-transform"
                >
                  <Heart size={16} className="fill-[#1A120B]/20" />
                  <span>Support Us</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}