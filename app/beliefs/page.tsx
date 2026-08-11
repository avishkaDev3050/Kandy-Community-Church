"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import {
  BookOpen,
  Cross,
  HeartHandshake,
  Sparkles,
  Users,
  Flame,
  Globe,
  Sun,
} from "lucide-react";

const statementOfFaith = [
  {
    title: "The Holy Scriptures",
    desc: "We believe the Bible is the inspired, infallible, and authoritative Word of God, serving as our supreme guide for faith and Christian living.",
    icon: BookOpen,
  },
  {
    title: "The Triune God",
    desc: "We believe in one God, eternally existent in three persons: Father, Son, and Holy Spirit, co-equal in power and glory.",
    icon: Sun,
  },
  {
    title: "Jesus Christ & Salvation",
    desc: "We believe in the deity of Jesus Christ, His sinless life, His substitutionary death on the cross, His bodily resurrection, and salvation solely by grace through faith in Him.",
    icon: Cross,
  },
  {
    title: "The Holy Spirit",
    desc: "We believe in the present ministry of the Holy Spirit, who indwells, empowers, and equips believers for holy living, spiritual gifts, and effective witness.",
    icon: Flame,
  },
  {
    title: "The Church & Unity",
    desc: "We believe the Church is the body of Christ, called to gather for worship, prayer, fellowship, and mutual encouragement, standing united in love.",
    icon: Users,
  },
  {
    title: "The Great Commission",
    desc: "We believe in the calling given to every believer to proclaim the Gospel to all nations, making disciples and transforming communities.",
    icon: Globe,
  },
];

const cultureValues = [
  {
    title: "Unconditional Love",
    desc: "Welcoming everyone with open arms, regardless of background, reflecting Christ's unconditional grace.",
    icon: HeartHandshake,
  },
  {
    title: "Authentic Worship",
    desc: "Offering our lives and gatherings as genuine spiritual worship in spirit and truth.",
    icon: Sparkles,
  },
];

export default function BeliefsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6]">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero Section */}
        <section className="relative py-24 px-4 sm:px-6 bg-[#1C2D42] text-white overflow-hidden text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C59B27]/20 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-[#F6AD55] text-xs uppercase tracking-[0.25em] font-medium px-4 py-1.5 rounded-full bg-white/10 border border-white/10"
            >
              Our Foundation
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-6xl font-light tracking-wide text-white"
            >
              Beliefs & Core Values
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light"
            >
              Grounded in the truth of God's Word, guiding how we live, worship, and serve in Kandy and beyond.
            </motion.p>
          </div>
        </section>

        {/* Statement of Faith Cards Grid */}
        <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#C59B27] text-xs uppercase tracking-[0.25em] font-semibold px-3 py-1 rounded-full bg-[#C59B27]/10">
              Theological Pillar
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#1C2D42]">
              Statement of Faith
            </h2>
            <p className="text-[#718096] text-sm sm:text-base font-light">
              The essential doctrines that anchor our church family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {statementOfFaith.map((belief, index) => {
              const IconComp = belief.icon;
              return (
                <motion.div
                  key={belief.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group relative bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm overflow-hidden transition-all duration-1000 flex flex-col justify-between"
                >
                  {/* Dark Blue Water Fill Layer (Bottom to Top) */}
                  <div className="absolute inset-0 bg-[#1C2D42]/90 backdrop-blur-md translate-y-full group-hover:translate-y-0 transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.3,1)] z-0 pointer-events-none" />

                  {/* Card Content */}
                  <div className="relative z-10 space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#1C2D42] text-[#F6AD55] group-hover:bg-[#C59B27] group-hover:text-white flex items-center justify-center group-hover:scale-110 transition-all duration-[1000ms] shadow-md">
                      <IconComp size={24} />
                    </div>

                    <h3 className="text-xl font-medium text-[#1C2D42] group-hover:text-white transition-colors duration-[1000ms]">
                      {belief.title}
                    </h3>

                    <p className="text-sm text-[#718096] group-hover:text-gray-200 leading-relaxed font-light transition-colors duration-[1000ms]">
                      {belief.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Culture & Relational Values Section */}
        <section className="py-20 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-[#C59B27] text-xs uppercase tracking-[0.25em] font-semibold px-3 py-1 rounded-full bg-[#C59B27]/10">
                Church Culture
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#1C2D42]">
                Relational Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cultureValues.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    key={val.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className="p-8 rounded-3xl bg-[#FAF9F6] border border-gray-200/80 shadow-sm flex items-start gap-5"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#C59B27]/10 text-[#C59B27] flex items-center justify-center shrink-0">
                      <Icon size={26} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium text-[#1C2D42]">
                        {val.title}
                      </h3>
                      <p className="text-sm text-[#718096] leading-relaxed font-light">
                        {val.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}