"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Heart, Calendar, MapPin, Users, ArrowLeft, Sparkles } from "lucide-react";
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
    <div className="min-h-screen flex flex-col bg-[#F3EFE0]">
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
            Our Journey
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-light text-[#1C2D42]"
          >
            Our Story & Leadership
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#5A6A80] text-sm sm:text-base font-light"
          >
            Faithful stewardship, community impact, and decades of ministry dedicated to Jesus Christ.
          </motion.p>
        </div>

        {/* Leadership Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#E6DEC8]/60 border border-[#D0C4A8] rounded-3xl p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-5 relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-[#1C2D42]/10 border border-[#D0C4A8]">
            <Image
              src="/images/pastors.jpg"
              alt="Ps. & Mrs. Dilini Wijesekara"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-[#C59B27] text-xs font-semibold uppercase tracking-widest bg-[#1C2D42]/5 px-3 py-1 rounded-full">
                Lead Pastors
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#1C2D42]">
                Ps. & Mrs. Dilini Wijesekara
              </h2>
            </div>

            <p className="text-[#4A5568] leading-relaxed font-light text-sm sm:text-base">
              Serving the Lord with dedication since 1992, Ps. and Mrs. Dilini Wijesekara have led with a heart for evangelism, discipleship, and community care. In 2014, they followed God's calling to Kandy to establish Kandy Community Church, pioneering a place where lives are transformed by the Holy Spirit.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#F3EFE0] border border-[#D0C4A8] space-y-1">
                <span className="text-2xl font-light text-[#1C2D42]">30+ Years</span>
                <p className="text-xs text-[#C59B27] font-medium uppercase">In Full-Time Ministry</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#F3EFE0] border border-[#D0C4A8] space-y-1">
                <span className="text-2xl font-light text-[#1C2D42]">2014</span>
                <p className="text-xs text-[#C59B27] font-medium uppercase">Established in Kandy</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline Section */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-light text-[#1C2D42]">
              Milestones of Grace
            </h2>
            <p className="text-[#5A6A80] text-sm font-light">
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
                className="group relative bg-[#E6DEC8]/60 p-8 rounded-3xl border border-[#D0C4A8] shadow-sm overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between"
              >
                <div className="absolute inset-0 bg-[#FFCC00] translate-y-full group-hover:translate-y-0 transition-transform duration-[700ms] ease-[cubic-bezier(0.25,1,0.3,1)] z-0 pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-light text-[#1C2D42] group-hover:text-[#1C2D42]">
                      {event.year}
                    </span>
                    <Calendar size={20} className="text-[#C59B27] group-hover:text-[#1C2D42]" />
                  </div>

                  <h3 className="text-xl font-light text-[#1C2D42] transition-colors duration-500">
                    {event.title}
                  </h3>

                  <p className="text-[#4A5568] group-hover:text-[#1C2D42] font-light text-sm leading-relaxed transition-colors duration-500">
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
          className="bg-[#1C2D42] text-white p-8 sm:p-10 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg border border-[#1C2D42]"
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
            className="bg-[#FFCC00] hover:bg-[#e6b800] text-[#1C2D42] px-8 py-3 rounded-xl font-semibold text-sm transition-all shadow-md whitespace-nowrap"
          >
            Visit Community Hub
          </Link>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
} 