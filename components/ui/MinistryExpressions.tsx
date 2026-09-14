"use client";

import { motion } from "framer-motion";
import { Globe, Users, Award, HeartHandshake, ArrowRight } from "lucide-react";
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
    <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto space-y-16">
      {/* Section Title */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#C59B27] text-xs uppercase tracking-[0.25em] font-semibold px-3 py-1 rounded-full bg-[#C59B27]/10"
        >
          What We Do
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-light text-[#1C2D42]"
        >
          Ministry Expression
        </motion.h2>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {pillars.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#E6DEC8]/60 p-8 rounded-3xl border border-[#D0C4A8] shadow-sm overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between"
            >
              {/* Yellow Fill Overlay on Hover */}
              <div className="absolute inset-0 bg-[#FFCC00] translate-y-full group-hover:translate-y-0 transition-transform duration-[700ms] ease-[cubic-bezier(0.25,1,0.3,1)] z-0 pointer-events-none" />

              {/* Content Layer */}
              <div className="relative z-10 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#1C2D42] text-[#FFCC00] group-hover:bg-[#1C2D42] group-hover:scale-110 flex items-center justify-center shadow-md transition-all duration-500">
                    <Icon size={24} />
                  </div>
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#C59B27] group-hover:text-[#1C2D42] bg-[#1C2D42]/5 group-hover:bg-[#1C2D42]/10 px-3 py-1 rounded-full transition-colors duration-500">
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-light text-[#1C2D42] transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-[#4A5568] group-hover:text-[#1C2D42] leading-relaxed font-light text-sm sm:text-base transition-colors duration-500">
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
        className="bg-[#1C2D42] text-white p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg border border-[#1C2D42] hover:border-[#FFCC00]/40 transition-colors duration-500"
      >
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-2xl font-light text-white">Our Core Values & Beliefs</h3>
          <p className="text-gray-300 text-sm font-light">
            Relational, Missional, Charismatic, and Kingdom Orientated.
          </p>
        </div>
        <Link
          href="/values"
          className="bg-[#FFCC00] hover:bg-[#e6b800] text-[#1C2D42] px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-md flex items-center gap-2 whitespace-nowrap"
        >
          <span>Explore Values</span>
          <ArrowRight size={16} />
        </Link>
      </motion.div>
    </section>
  );
}