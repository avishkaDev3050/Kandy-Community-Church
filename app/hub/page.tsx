"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import {
  GraduationCap,
  HeartPulse,
  Home as HomeIcon,
  Users,
  MapPin,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const hubProjects = [
  {
    id: "bethel",
    title: "Bethel Education Centre",
    subtitle: "Empowering the Next Generation",
    icon: GraduationCap,
    description:
      "A dedicated learning space providing quality education, skill development, and spiritual guidance for children and youth in the community.",
    highlights: [
      "After-school tutoring & mentoring",
      "Youth leadership training",
      "Moral and spiritual foundation",
    ],
  },
  {
    id: "kidney",
    title: "Kidney Patient Ministry",
    subtitle: "Compassionate Care & Relief",
    icon: HeartPulse,
    description:
      "Extending practical help, financial support, and spiritual comfort to kidney disease patients and their families in Central Sri Lanka.",
    highlights: [
      "Medical & financial assistance",
      "Family counseling & prayer",
      "Community support network",
    ],
  },
  {
    id: "guestrooms",
    title: "Guest Rooms for Travellers",
    subtitle: "Hospitality & Rest",
    icon: HomeIcon,
    description:
      "Clean, comfortable, and affordable accommodation for visiting missionaries, pastors, and travellers serving in the region.",
    highlights: [
      "Peaceful & safe environment",
      "Close proximity to Kandy city",
      "Welcoming Kingdom hospitality",
    ],
  },
  {
    id: "community",
    title: "Community Care & Outreach",
    subtitle: "Restoring Lives",
    icon: Users,
    description:
      "Distributing relief packs, organizing medical camps, and creating sustainable empowerment projects for under-resourced families.",
    highlights: [
      "Emergency relief distribution",
      "Holistic community upliftment",
      "Relational care & support",
    ],
  },
];

export default function CommunityHubPage() {
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
              <span>Vision in Action</span>
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-light text-white tracking-wide"
            >
              Kingdom Community Hub
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-300 text-sm sm:text-base font-light"
            >
              A physical center of hope, transformation, and holistic ministry in the heart of Kandy.
            </motion.p>
          </div>

          {/* Top Hero Banner with Animated Ambient Glow */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-80 sm:h-[420px] rounded-3xl overflow-hidden border border-[#D4A359]/30 hover:border-[#FFCC00] shadow-[0_0_40px_rgba(0,0,0,0.8)] group transition-all duration-500"
          >
            <Image
              src="/images/hub/hub-hero.jpg"
              alt="Kingdom Community Hub Center"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#120E0B] via-[#120E0B]/40 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8 z-10 space-y-3 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#FFCC00] bg-[#120E0B]/80 px-4 py-1.5 rounded-full border border-[#FFCC00]/30 backdrop-blur-md inline-block">
                Community Center
              </span>
              <h2 className="text-2xl sm:text-4xl font-light text-white tracking-wide">
                A Beacon of Light in Kandy
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed hidden sm:block">
                Connecting resources, education, relief, and spiritual growth under one transformative center.
              </p>
            </div>
          </motion.div>

          {/* Land Provision Story Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#1A1410]/90 border border-[#FFCC00]/30 hover:border-[#FFCC00] text-white p-8 sm:p-12 rounded-3xl shadow-[0_0_35px_rgba(0,0,0,0.6)] backdrop-blur-xl relative overflow-hidden space-y-4 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-[#FFCC00]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-2 text-[#FFCC00] text-xs uppercase tracking-widest font-semibold">
              <Sparkles size={16} className="animate-pulse" />
              <span>God's Provision</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-light text-white">
              The Land Provision Story
            </h2>

            <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed max-w-3xl">
              Through God's miraculous provision and the generosity of partners, God opened doors for Kandy Community Church to secure land for the Kingdom Community Hub. This land serves as a permanent beacon for worship, education, relief, and discipleship.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#FFCC00]">
              <div className="flex items-center gap-1.5 bg-[#241C15] px-3.5 py-1.5 rounded-lg border border-[#D4A359]/30">
                <MapPin size={14} />
                <span>Kandy, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#241C15] px-3.5 py-1.5 rounded-lg border border-[#D4A359]/30">
                <Users size={14} />
                <span>Serving Hundreds Weekly</span>
              </div>
            </div>
          </motion.div>

          {/* Hub Pillars / Initiatives Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {hubProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-[#1A1410]/80 p-8 rounded-3xl border border-[#D4A359]/30 hover:border-[#FFCC00] shadow-xl hover:shadow-[0_0_25px_rgba(255,204,0,0.2)] overflow-hidden transition-all duration-500 flex flex-col justify-between backdrop-blur-xl"
                >
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-[#241C15] border border-[#FFCC00]/40 text-[#FFCC00] group-hover:border-[#FFCC00] group-hover:shadow-[0_0_15px_rgba(255,204,0,0.4)] flex items-center justify-center transition-all duration-500">
                        <Icon size={26} />
                      </div>
                      <span className="text-xs font-semibold text-[#FFCC00] uppercase tracking-wider bg-[#FFCC00]/10 border border-[#FFCC00]/20 px-3.5 py-1.5 rounded-full backdrop-blur-md">
                        Project 0{index + 1}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-2xl font-light text-white group-hover:text-[#FFCC00] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#FFCC00] uppercase tracking-widest">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-gray-300 leading-relaxed font-light text-sm sm:text-base group-hover:text-white transition-colors duration-300">
                      {project.description}
                    </p>

                    <ul className="space-y-2.5 pt-3 border-t border-[#D4A359]/20">
                      {project.highlights.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2.5 text-xs font-medium text-gray-200 group-hover:text-white transition-colors duration-300"
                        >
                          <CheckCircle2 size={16} className="text-[#FFCC00]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA / Partner Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#1A1410]/90 border border-[#FFCC00]/30 hover:border-[#FFCC00] text-white p-8 sm:p-10 rounded-3xl text-center space-y-4 shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-500"
          >
            <h3 className="text-2xl sm:text-3xl font-light text-white">
              Partner with Us in Building the Hub
            </h3>
            <p className="text-gray-300 text-sm font-light max-w-xl mx-auto">
              Your prayers and contributions help expand our community initiatives and bring hope to many more lives in Sri Lanka.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-block bg-[#FFCC00] hover:bg-[#e6b800] text-[#120E0B] px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-[0_0_20px_rgba(255,204,0,0.3)] hover:shadow-[0_0_30px_rgba(255,204,0,0.5)]"
              >
                Learn More About Our Journey
              </Link>
            </div>
          </motion.div>
        </main>

        <Footer />
      </div>
    </div>
  );
}