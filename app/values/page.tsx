"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Heart, Compass, Flame, Crown, ArrowLeft } from "lucide-react";
import Link from "next/link";

const coreValues = [
  {
    id: "relational",
    title: "Relational",
    subtitle: "Community & Mutual Respect",
    icon: Heart,
    points: [
      "God is community; in community, we accurately reflect Him and see lasting fruit.",
      "We value diversity and humble, anointed leadership.",
      "We champion the contribution of both women and men at every leadership level.",
    ],
  },
  {
    id: "missional",
    title: "Missional",
    subtitle: "Reconciling All Things Under Christ",
    icon: Compass,
    points: [
      "We are co-workers with God in reconciling all things under Christ.",
      "Presenting the Good News with relevance, actions, and miraculous power.",
      "Viewing justice and social action as central to Jesus' message.",
    ],
  },
  {
    id: "charismatic",
    title: "Charismatic",
    subtitle: "Energized by the Holy Spirit",
    icon: Flame,
    points: [
      "Energized by a living experience of the Holy Spirit.",
      "Expecting revelation, body healing, spiritual gifts, and miraculous signs.",
      "Rooted firmly in Scripture and informed by church history.",
    ],
  },
  {
    id: "kingdom",
    title: "Kingdom Orientated",
    subtitle: "Unified Across All Spheres",
    icon: Crown,
    points: [
      "Eliminating the sacred-secular divide across all spheres of life (business, politics, media, community, education, arts).",
      "Partnering for the unity of the Body of Christ locally and globally.",
    ],
  },
];

export default function ValuesPage() {
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

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#C59B27] text-xs uppercase tracking-[0.25em] font-semibold px-3 py-1 rounded-full bg-[#C59B27]/10"
          >
            What Drives Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-light text-[#1C2D42]"
          >
            Our Core Values
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#5A6A80] text-sm sm:text-base font-light"
          >
            These guiding principles define how we love God, serve people, and build His Kingdom in Kandy and beyond.
          </motion.p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-[#E6DEC8]/60 p-8 rounded-3xl border border-[#D0C4A8] shadow-sm overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between"
              >
                {/* Yellow Fill Overlay on Hover */}
                <div className="absolute inset-0 bg-[#FFCC00] translate-y-full group-hover:translate-y-0 transition-transform duration-[700ms] ease-[cubic-bezier(0.25,1,0.3,1)] z-0 pointer-events-none" />

                {/* Content Container */}
                <div className="relative z-10 space-y-6">
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#1C2D42] text-[#FFCC00] group-hover:bg-[#1C2D42] group-hover:scale-110 flex items-center justify-center shadow-md transition-all duration-500">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-semibold text-[#C59B27] group-hover:text-[#1C2D42] uppercase tracking-wider bg-[#1C2D42]/5 group-hover:bg-[#1C2D42]/10 px-3 py-1 rounded-full transition-colors duration-500">
                      Value 0{index + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="space-y-1">
                    <h2 className="text-2xl font-light text-[#1C2D42] transition-colors duration-500">
                      {value.title}
                    </h2>
                    <p className="text-xs font-medium text-[#C59B27] group-hover:text-[#1C2D42]/80 uppercase tracking-widest transition-colors duration-500">
                      {value.subtitle}
                    </p>
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-3 pt-2">
                    {value.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm font-light text-[#4A5568] group-hover:text-[#1C2D42] leading-relaxed transition-colors duration-500"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27] group-hover:bg-[#1C2D42] mt-2 flex-shrink-0 transition-colors duration-500" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#1C2D42] text-white p-8 sm:p-10 rounded-3xl text-center space-y-4 shadow-lg border border-[#1C2D42]"
        >
          <h3 className="text-2xl sm:text-3xl font-light text-white">
            Rooted in Faith, Driven by Purpose
          </h3>
          <p className="text-gray-300 text-sm font-light max-w-xl mx-auto">
            Explore our foundational beliefs to learn more about our doctrinal stance and spiritual commitment.
          </p>
          <div className="pt-2">
            <Link
              href="/beliefs"
              className="inline-block bg-[#FFCC00] hover:bg-[#e6b800] text-[#1C2D42] px-8 py-3 rounded-xl font-semibold text-sm transition-all shadow-md"
            >
              Read Our Beliefs
            </Link>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}