"use client";

import { motion } from "framer-motion";
import { Globe, Users, Award, HeartHandshake, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    id: "reach",
    title: "Reach the Unreached",
    description: "Sharing the Gospel of Jesus Christ with love, compassion, and urgency to those who have not yet heard.",
    icon: Globe,
    badge: "Evangelism",
  },
  {
    id: "raise",
    title: "Raise Disciples",
    description: "Building strong believers through the Word of God, prayer, fellowship, and the empowerment of the Holy Spirit.",
    icon: Users,
    badge: "Discipleship",
  },
  {
    id: "release",
    title: "Release Leaders",
    description: "Equipping, empowering, and sending believers into ministry, missions, and marketplace influence locally and globally.",
    icon: Award,
    badge: "Leadership",
  },
  {
    id: "restore",
    title: "Restore Communities",
    description: "Believing in the transforming power of Jesus Christ to heal lives, families, and society.",
    icon: HeartHandshake,
    badge: "Community Care",
  },
];

export default function MinistryExpressions() {
  return (
    <section className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto space-y-16 text-white">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-[#FFCC00]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 text-center max-w-2xl mx-auto space-y-3">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 text-[#FFCC00] text-xs uppercase tracking-[0.25em] font-semibold px-4 py-1.5 rounded-full bg-[#FFCC00]/10 border border-[#FFCC00]/20 backdrop-blur-md shadow-[0_0_15px_rgba(255,204,0,0.1)]"
        >
          <Sparkles size={14} className="text-[#FFCC00] animate-pulse" />
          <span>What We Do</span>
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-light text-white tracking-wide"
        >
          Ministry Expressions
        </motion.h2>
      </div>

      {/* Pillars Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {pillars.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#1A1410]/80 p-8 sm:p-10 rounded-3xl border border-[#D4A359]/30 hover:border-[#FFCC00] shadow-xl hover:shadow-[0_0_30px_rgba(255,204,0,0.2)] overflow-hidden transition-all duration-500 flex flex-col justify-between backdrop-blur-xl"
            >
              {/* Subtle Ambient Glow inside Card */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFCC00]/5 rounded-full blur-2xl group-hover:bg-[#FFCC00]/15 transition-all duration-500 pointer-events-none" />

              {/* Content Layer */}
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#241C15] border border-[#FFCC00]/40 text-[#FFCC00] group-hover:border-[#FFCC00] group-hover:shadow-[0_0_15px_rgba(255,204,0,0.4)] flex items-center justify-center transition-all duration-500">
                    <Icon size={26} />
                  </div>
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#FFCC00] bg-[#FFCC00]/10 border border-[#FFCC00]/20 px-3.5 py-1.5 rounded-full backdrop-blur-md">
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-light text-white group-hover:text-[#FFCC00] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed font-light text-sm sm:text-base group-hover:text-white transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Values CTA Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 bg-[#1A1410]/90 border border-[#FFCC00]/30 hover:border-[#FFCC00] p-8 sm:p-10 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_25px_rgba(0,0,0,0.5)] hover:shadow-[0_0_35px_rgba(255,204,0,0.25)] backdrop-blur-xl transition-all duration-500"
      >
        <div className="space-y-1.5 text-center sm:text-left">
          <h3 className="text-2xl sm:text-3xl font-light text-white">Our Core Values & Beliefs</h3>
          <p className="text-gray-300 text-sm font-light">
            Relational, Missional, Charismatic, and Kingdom Orientated.
          </p>
        </div>
        <Link
          href="/values"
          className="bg-[#FFCC00] hover:bg-[#e6b800] text-[#120E0B] px-7 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-[0_0_15px_rgba(255,204,0,0.3)] hover:shadow-[0_0_25px_rgba(255,204,0,0.5)] flex items-center gap-2 whitespace-nowrap"
        >
          <span>Explore Values</span>
          <ArrowRight size={16} />
        </Link>
      </motion.div>
    </section>
  );
}