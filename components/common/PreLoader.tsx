"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#F3EFE0]"
        >
          <div className="relative flex items-center justify-center">
            {/* Outer Pulsing Glow Ring */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-24 h-24 rounded-full bg-[#FFCC00]/20 blur-md"
            />

            {/* Modern Spinning Arc */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-16 h-16 rounded-full border-2 border-t-[#1C2D42] border-r-transparent border-b-[#FFCC00] border-l-transparent"
            />

            {/* Inner Brand Accent Dot */}
            <motion.div
              animate={{
                scale: [0.8, 1.1, 0.8],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-3 h-3 rounded-full bg-[#1C2D42]"
            />
          </div>

          {/* Minimal Text Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 text-center space-y-1"
          >
            <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-[#1C2D42]">
              Kandy Community Church
            </span>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-[#C59B27]">
              Faith · Hope · Love
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}