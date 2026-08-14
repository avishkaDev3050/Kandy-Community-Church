"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  BookOpen,
  Cross,
  HeartHandshake,
  Sparkles,
  Users,
  Flame,
  Globe,
  Sun,
  ArrowUpRight,
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] as const },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#241C15] text-[#F4EBE1] selection:bg-[#D4A359] selection:text-[#1A120B]">
      <Navbar />

      <main className="flex-1">
        {/* Page Hero Section */}
        <section className="relative py-32 px-4 sm:px-6 bg-[#1A120B] text-white overflow-hidden text-center border-b border-[#D4A359]/10">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4A359]/20 rounded-full blur-[120px] pointer-events-none"
          />

          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-[#D4A359] text-xs uppercase tracking-[0.25em] font-semibold px-4 py-1.5 rounded-full bg-[#D4A359]/15 border border-[#D4A359]/30"
            >
              Our Foundation
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-6xl font-light tracking-wide text-white leading-tight"
            >
              Beliefs & Core Values
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-[#E2D4C7] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light"
            >
              Grounded in the truth of God's Word, guiding how we live, worship, and serve in Kandy and beyond.
            </motion.p>
          </div>
        </section>

        {/* Feature Image Banner 1 */}
        <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto -mt-10 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[280px] sm:h-[380px] rounded-3xl overflow-hidden border border-[#D4A359]/30 shadow-2xl group"
          >
            <Image
              src="/beliefs-1.jpg"
              alt="Scripture Study & Faith Foundation"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A120B] via-[#1A120B]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="text-[#D4A359] text-xs uppercase tracking-widest font-semibold">Unshakable Truth</span>
                <h3 className="text-xl sm:text-2xl font-light text-white">Anchored in the Word of God</h3>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Statement of Faith Cards Grid */}
        <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#D4A359] text-xs uppercase tracking-[0.25em] font-semibold px-4 py-1.5 rounded-full bg-[#D4A359]/15 border border-[#D4A359]/30">
              Theological Pillar
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-white tracking-wide">
              Statement of Faith
            </h2>
            <p className="text-[#E2D4C7] text-sm sm:text-base font-light">
              The essential doctrines that anchor our church family.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {statementOfFaith.map((belief) => {
              const IconComp = belief.icon;
              return (
                <motion.div
                  key={belief.title}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative bg-[#34291F] p-8 rounded-3xl border border-[#D4A359]/30 shadow-2xl overflow-hidden transition-all duration-500 flex flex-col justify-between"
                >
                  {/* Liquid Gold Fill Layer */}
                  <div className="absolute inset-0 bg-[#D4A359] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] z-0 pointer-events-none" />

                  {/* Card Content */}
                  <div className="relative z-10 space-y-4">
                    <div className="w-13 h-13 rounded-2xl bg-[#D4A359]/20 text-[#D4A359] group-hover:bg-[#1A120B] group-hover:text-[#D4A359] flex items-center justify-center transition-colors duration-500 shadow-md">
                      <IconComp size={26} />
                    </div>

                    <h3 className="text-xl font-light text-white group-hover:text-[#1A120B] transition-colors duration-500">
                      {belief.title}
                    </h3>

                    <p className="text-sm text-[#E2D4C7] group-hover:text-[#1A120B] leading-relaxed font-normal transition-colors duration-500">
                      {belief.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* Culture & Relational Values Section */}
        <section className="py-24 px-4 sm:px-6 bg-[#1A120B] border-t border-[#D4A359]/10">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-[#D4A359] text-xs uppercase tracking-[0.25em] font-semibold px-4 py-1.5 rounded-full bg-[#D4A359]/15 border border-[#D4A359]/30">
                Church Culture
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-white tracking-wide">
                Relational Values
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Image 2 Frame */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, margin: "-80px" }}
                transition={{ duration: 0.8 }}
                className="relative h-[340px] rounded-3xl overflow-hidden border border-[#D4A359]/30 shadow-2xl group lg:col-span-1"
              >
                <Image
                  src="/beliefs-2.jpg"
                  alt="Authentic Worship & Community"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A120B] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#241C15]/80 backdrop-blur-md border border-[#D4A359]/20 flex items-center justify-between">
                  <div>
                    <h4 className="text-white text-sm font-medium">Genuine Fellowship</h4>
                    <p className="text-xs text-[#D4A359]">Living in Unity</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#D4A359] text-[#1A120B] flex items-center justify-center">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </motion.div>

              {/* Culture Cards */}
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {cultureValues.map((val, idx) => {
                  const Icon = val.icon;
                  return (
                    <motion.div
                      key={val.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false, margin: "-80px" }}
                      transition={{ duration: 0.6, delay: idx * 0.15 }}
                      className="p-8 rounded-3xl bg-[#34291F] border border-[#D4A359]/30 shadow-2xl space-y-4 flex flex-col justify-between"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-[#D4A359]/20 text-[#D4A359] flex items-center justify-center shrink-0">
                        <Icon size={26} />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-light text-white">
                          {val.title}
                        </h3>
                        <p className="text-sm text-[#E2D4C7] leading-relaxed font-light">
                          {val.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}