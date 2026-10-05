"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const timelineEvents = [
  {
    year: "1992",
    title: "Beginning of Ministry Journey",
    description:
      "Ps. & Mrs. Dilini Wijesekara started their full-time pastoral ministry with a passion to reach the unreached and spread the Gospel of Jesus Christ.",
  },
  {
    year: "2014",
    title: "Relocation & Plant in Kandy",
    description:
      "Following God's call, they moved to Kandy to establish Kandy Community Church—building a vibrant, Christ-centered, and missional community.",
  },
  {
    year: "Present",
    title: "Expansion & Community Care",
    description:
      "Today, the ministry continues to grow through the Kingdom Community Hub, educational centers, and dedicated relief projects like the Kidney Patient Ministry.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#120E0B] text-white selection:bg-[#FFCC00] selection:text-[#120E0B] relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FFCC00]/10 blur-[140px] rounded-full" />
        <div className="absolute top-3/4 -left-32 w-80 h-80 bg-[#D4A359]/10 blur-[120px] rounded-full" />
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
              <span>Our Journey</span>
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-light text-white tracking-wide"
            >
              Our Story & Leadership
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-sm sm:text-base font-light"
            >
              Faithful stewardship, community impact, and decades of ministry dedicated to Jesus Christ.
            </motion.p>
          </div>

          {/* Leadership Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A1410]/80 border border-[#D4A359]/30 hover:border-[#FFCC00]/60 rounded-3xl p-8 sm:p-12 shadow-[0_0_30px_rgba(0,0,0,0.6)] backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-all duration-500"
          >
            <div className="lg:col-span-5 relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-[#241C15] border border-[#FFCC00]/30 shadow-lg group">
              <Image
                src="/images/pastors.jpeg"
                alt="Ps. & Mrs. Dilini Wijesekara"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120E0B] via-transparent to-transparent opacity-60" />
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-[#FFCC00] text-xs font-semibold uppercase tracking-widest bg-[#FFCC00]/10 border border-[#FFCC00]/20 px-3.5 py-1.5 rounded-full">
                  Lead Pastors
                </span>
                <h2 className="text-2xl sm:text-4xl font-light text-white tracking-wide">
                  Ps. & Mrs. Dilini Wijesekara
                </h2>
              </div>

              <p className="text-gray-300 leading-relaxed font-light text-sm sm:text-base">
                Serving the Lord with dedication since 1992, Ps. and Mrs. Dilini Wijesekara have led with a heart for evangelism, discipleship, and community care. In 2014, they followed God's calling to Kandy to establish Kandy Community Church, pioneering a place where lives are transformed by the Holy Spirit.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#241C15]/90 border border-[#D4A359]/30 space-y-1">
                  <span className="text-2xl font-light text-[#FFCC00]">30+ Years</span>
                  <p className="text-xs text-gray-300 font-medium uppercase">In Full-Time Ministry</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#241C15]/90 border border-[#D4A359]/30 space-y-1">
                  <span className="text-2xl font-light text-[#FFCC00]">2014</span>
                  <p className="text-xs text-gray-300 font-medium uppercase">Established in Kandy</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline Section */}
          <div className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="text-2xl sm:text-3xl font-light text-white tracking-wide">
                Milestones of Grace
              </h2>
              <p className="text-gray-400 text-sm font-light">
                How God has faithfully guided our steps over the years.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-[#1A1410]/80 p-8 rounded-3xl border border-[#D4A359]/30 hover:border-[#FFCC00] shadow-xl hover:shadow-[0_0_25px_rgba(255,204,0,0.2)] overflow-hidden transition-all duration-500 flex flex-col justify-between backdrop-blur-xl"
                >
                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-light text-[#FFCC00]">
                        {event.year}
                      </span>
                      <Calendar size={20} className="text-[#FFCC00]" />
                    </div>

                    <h3 className="text-xl font-light text-white group-hover:text-[#FFCC00] transition-colors duration-300">
                      {event.title}
                    </h3>

                    <p className="text-gray-300 group-hover:text-white font-light text-sm leading-relaxed transition-colors duration-300">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Location & Service Info Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A1410]/90 border border-[#FFCC00]/30 hover:border-[#FFCC00] text-white p-8 sm:p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-500"
          >
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[#FFCC00] text-xs font-semibold uppercase tracking-widest">
                Join Us This Sunday
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-white">
                Worship Service at 12:00 PM
              </h3>
              <p className="text-gray-300 text-sm font-light flex items-center justify-center md:justify-start gap-2">
                <MapPin size={16} className="text-[#FFCC00]" />
                <span>26 Colombo St, Kandy 20000, Sri Lanka</span>
              </p>
            </div>

            <Link
              href="/hub"
              className="bg-[#FFCC00] hover:bg-[#e6b800] text-[#120E0B] px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-[0_0_20px_rgba(255,204,0,0.3)] hover:shadow-[0_0_30px_rgba(255,204,0,0.5)] whitespace-nowrap"
            >
              Visit Community Hub
            </Link>
          </motion.div>
        </main>

        <Footer />
      </div>
    </div>
  );
}