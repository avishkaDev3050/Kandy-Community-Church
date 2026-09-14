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
            Vision in Action
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-light text-[#1C2D42]"
          >
            Kingdom Community Hub
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#5A6A80] text-sm sm:text-base font-light"
          >
            A physical center of hope, transformation, and holistic ministry in the heart of Kandy.
          </motion.p>
        </div>

        {/* Land Provision Story Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#1C2D42] text-white p-8 sm:p-12 rounded-3xl shadow-xl relative overflow-hidden space-y-4 border border-[#1C2D42]"
        >
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-[#FFCC00]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-center gap-2 text-[#FFCC00] text-xs uppercase tracking-widest font-semibold">
            <Sparkles size={16} />
            <span>God's Provision</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-light text-white">
            The Land Provision Story
          </h2>

          <p className="text-gray-300 text-sm sm:text-base font-light leading-relaxed max-w-3xl">
            Through God's miraculous provision and the generosity of partners, God opened doors for Kandy Community Church to secure land for the Kingdom Community Hub. This land serves as a permanent beacon for worship, education, relief, and discipleship.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#FFCC00]">
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
              <MapPin size={14} />
              <span>Kandy, Sri Lanka</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
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
                className="group relative bg-[#E6DEC8]/60 p-8 rounded-3xl border border-[#D0C4A8] shadow-sm overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between"
              >
                {/* Yellow Fill Layer on Hover */}
                <div className="absolute inset-0 bg-[#FFCC00] translate-y-full group-hover:translate-y-0 transition-transform duration-[700ms] ease-[cubic-bezier(0.25,1,0.3,1)] z-0 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#1C2D42] text-[#FFCC00] group-hover:bg-[#1C2D42] group-hover:scale-110 flex items-center justify-center shadow-md transition-all duration-500">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-semibold text-[#C59B27] group-hover:text-[#1C2D42] uppercase tracking-wider bg-[#1C2D42]/5 group-hover:bg-[#1C2D42]/10 px-3 py-1 rounded-full transition-colors duration-500">
                      Project 0{index + 1}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-2xl font-light text-[#1C2D42] transition-colors duration-500">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-[#C59B27] group-hover:text-[#1C2D42]/80 uppercase tracking-widest transition-colors duration-500">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-[#4A5568] group-hover:text-[#1C2D42] leading-relaxed font-light text-sm sm:text-base transition-colors duration-500">
                    {project.description}
                  </p>

                  <ul className="space-y-2 pt-2 border-t border-[#D0C4A8]/60 group-hover:border-[#1C2D42]/20 transition-colors duration-500">
                    {project.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-xs font-medium text-[#1C2D42]"
                      >
                        <CheckCircle2 size={14} className="text-[#C59B27] group-hover:text-[#1C2D42]" />
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
          className="bg-[#EFEAD8] border border-[#D0C4A8] p-8 sm:p-10 rounded-3xl text-center space-y-4 shadow-sm"
        >
          <h3 className="text-2xl font-light text-[#1C2D42]">
            Partner with Us in Building the Hub
          </h3>
          <p className="text-[#5A6A80] text-sm font-light max-w-xl mx-auto">
            Your prayers and contributions help expand our community initiatives and bring hope to many more lives in Sri Lanka.
          </p>
          <div className="pt-2">
            <Link
              href="/about"
              className="inline-block bg-[#1C2D42] hover:bg-[#283e5a] text-[#FFCC00] px-8 py-3 rounded-xl font-semibold text-sm transition-all shadow-md"
            >
              Learn More About Our Journey
            </Link>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}