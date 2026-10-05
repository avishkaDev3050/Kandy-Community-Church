"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import {
  BookOpen,
  Sparkles,
  Cross,
  Heart,
  Droplets,
  Flame,
  Activity,
  Crown,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const beliefsList = [
  {
    id: "scriptures",
    number: "01",
    title: "The Scriptures Inspired",
    description:
      "The Bible is the infallible, authoritative Word of God, inspired by the Holy Spirit and serving as our rule of faith and conduct.",
    icon: BookOpen,
  },
  {
    id: "god",
    number: "02",
    title: "The One True God",
    description:
      "There is one true God who eternally exists as a Trinity—Father, Son, and Holy Spirit.",
    icon: Sparkles,
  },
  {
    id: "jesus",
    number: "03",
    title: "Deity of Jesus Christ",
    description:
      "Jesus Christ is the eternal Son of God, virgin-born, sinless, crucified, resurrected, and exalted to the right hand of the Father.",
    icon: Cross,
  },
  {
    id: "salvation",
    number: "04",
    title: "The Salvation of Man",
    description:
      "Salvation is provided solely through the shed blood of Jesus Christ, received through repentance and faith.",
    icon: Heart,
  },
  {
    id: "ordinances",
    number: "05",
    title: "Church Ordinances",
    description:
      "We practice Water Baptism by immersion as a public declaration of faith and regular Holy Communion in remembrance of Christ.",
    icon: Droplets,
  },
  {
    id: "holyspirit",
    number: "06",
    title: "Baptism in the Holy Spirit",
    description:
      "The baptism in the Holy Spirit endows believers with power for life and service, with the initial physical evidence of speaking in tongues.",
    icon: Flame,
  },
  {
    id: "healing",
    number: "07",
    title: "Divine Healing",
    description:
      "Deliverance from sickness is provided for in the atonement and is the privilege of all believers through prayer.",
    icon: Activity,
  },
  {
    id: "hope",
    number: "08",
    title: "The Blessed Hope & Reign",
    description:
      "We look forward to the resurrection/rapture of believers, Christ's millennial reign on Earth, final judgment, and new heavens/earth.",
    icon: Crown,
  },
];

export default function BeliefsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#120E0B] text-white selection:bg-[#FFCC00] selection:text-[#120E0B] relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FFCC00]/10 blur-[140px] rounded-full" />
        <div className="absolute top-3/4 -right-32 w-80 h-80 bg-[#D4A359]/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1 py-16 px-4 sm:px-6 max-w-6xl mx-auto w-full space-y-16">
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

          {/* Page Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 text-[#FFCC00] text-xs uppercase tracking-[0.25em] font-semibold px-4 py-1.5 rounded-full bg-[#FFCC00]/10 border border-[#FFCC00]/20 backdrop-blur-md"
            >
              <Sparkles size={14} className="text-[#FFCC00] animate-pulse" />
              <span>Statement of Faith</span>
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-light text-white tracking-wide"
            >
              Our Beliefs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-sm sm:text-base font-light"
            >
              The foundational truths upon which Kandy Community Church stands.
            </motion.p>
          </div>

          {/* Image 1: Top Feature Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-72 sm:h-96 rounded-3xl overflow-hidden border border-[#D4A359]/30 hover:border-[#FFCC00] shadow-[0_0_35px_rgba(0,0,0,0.6)] group"
          >
            <Image
              src="/belief-1.jpg"
              alt="Foundational Scriptures"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-75 group-hover:opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#120E0B] via-[#120E0B]/30 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 z-10 max-w-xl space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#FFCC00] bg-[#120E0B]/80 px-3.5 py-1.5 rounded-full border border-[#FFCC00]/30 backdrop-blur-md inline-block">
                Anchored in Truth
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-white">
                Living by the Word of God
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light">
                Our faith rests firmly on scripture, guiding our community in spirit and daily action.
              </p>
            </div>
          </motion.div>

          {/* First 4 Beliefs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beliefsList.slice(0, 4).map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative bg-[#1A1410]/80 p-8 rounded-3xl border border-[#D4A359]/30 hover:border-[#FFCC00] shadow-xl hover:shadow-[0_0_25px_rgba(255,204,0,0.2)] overflow-hidden transition-all duration-500 flex flex-col justify-between backdrop-blur-xl"
                >
                  <div className="relative z-10 space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#241C15] border border-[#FFCC00]/40 text-[#FFCC00] group-hover:border-[#FFCC00] group-hover:shadow-[0_0_15px_rgba(255,204,0,0.4)] flex items-center justify-center transition-all duration-500">
                        <Icon size={22} />
                      </div>
                      <span className="text-xs font-semibold text-[#FFCC00] bg-[#FFCC00]/10 border border-[#FFCC00]/20 px-3.5 py-1.5 rounded-full backdrop-blur-md uppercase tracking-wider">
                        Truth {item.number}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h2 className="text-2xl font-light text-white group-hover:text-[#FFCC00] transition-colors duration-300">
                        {item.title}
                      </h2>
                      <p className="text-gray-300 leading-relaxed font-light text-sm sm:text-base group-hover:text-white transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Image 2: Mid-Page Divider Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-64 sm:h-80 rounded-3xl overflow-hidden border border-[#D4A359]/30 hover:border-[#FFCC00] shadow-[0_0_35px_rgba(0,0,0,0.6)] group my-8"
          >
            <Image
              src="/belief-2.jpg"
              alt="Empowered Worship"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-75 group-hover:opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#120E0B]/90 via-[#120E0B]/40 to-transparent" />
            <div className="absolute inset-y-0 left-8 sm:left-12 z-10 flex flex-col justify-center max-w-md space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#FFCC00] bg-[#120E0B]/80 px-3.5 py-1.5 rounded-full border border-[#FFCC00]/30 backdrop-blur-md w-max">
                Spirit & Power
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-white">
                Empowered for Service
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light">
                Walking in spiritual gifts, healing, and the hope of Christ's return.
              </p>
            </div>
          </motion.div>

          {/* Next 4 Beliefs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beliefsList.slice(4, 8).map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative bg-[#1A1410]/80 p-8 rounded-3xl border border-[#D4A359]/30 hover:border-[#FFCC00] shadow-xl hover:shadow-[0_0_25px_rgba(255,204,0,0.2)] overflow-hidden transition-all duration-500 flex flex-col justify-between backdrop-blur-xl"
                >
                  <div className="relative z-10 space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-[#241C15] border border-[#FFCC00]/40 text-[#FFCC00] group-hover:border-[#FFCC00] group-hover:shadow-[0_0_15px_rgba(255,204,0,0.4)] flex items-center justify-center transition-all duration-500">
                        <Icon size={22} />
                      </div>
                      <span className="text-xs font-semibold text-[#FFCC00] bg-[#FFCC00]/10 border border-[#FFCC00]/20 px-3.5 py-1.5 rounded-full backdrop-blur-md uppercase tracking-wider">
                        Truth {item.number}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h2 className="text-2xl font-light text-white group-hover:text-[#FFCC00] transition-colors duration-300">
                        {item.title}
                      </h2>
                      <p className="text-gray-300 leading-relaxed font-light text-sm sm:text-base group-hover:text-white transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A1410]/90 border border-[#FFCC00]/30 hover:border-[#FFCC00] text-white p-8 sm:p-10 rounded-3xl text-center space-y-4 shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-500"
          >
            <h3 className="text-2xl sm:text-3xl font-light text-white">
              Want to learn more about our Community?
            </h3>
            <p className="text-gray-300 text-sm font-light max-w-xl mx-auto">
              Discover the Kingdom Community Hub and see how these beliefs come to life through action and care.
            </p>
            <div className="pt-2">
              <Link
                href="/hub"
                className="inline-block bg-[#FFCC00] hover:bg-[#e6b800] text-[#120E0B] px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-[0_0_20px_rgba(255,204,0,0.3)] hover:shadow-[0_0_30px_rgba(255,204,0,0.5)]"
              >
                Explore Community Hub
              </Link>
            </div>
          </motion.div>
        </main>

        <Footer />
      </div>
    </div>
  );
}