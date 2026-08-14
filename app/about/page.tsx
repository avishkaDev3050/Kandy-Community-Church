"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { BookOpen, Heart, ShieldCheck, Sparkles, Anchor, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const coreValues = [
  {
    title: "Gospel-Centered Living",
    desc: "The Gospel of Jesus Christ is the foundation of everything we do, teach, and believe.",
    icon: BookOpen,
  },
  {
    title: "Discipleship & Multiplication",
    desc: "We are called to make disciples who make disciples, raising mature believers grounded in God's Word.",
    icon: Anchor,
  },
  {
    title: "Compassion & Community Care",
    desc: "Reflecting God's love by reaching out to the hurting, restoring families, and building genuine fellowship.",
    icon: Heart,
  },
  {
    title: "Spirit-Led Mission",
    desc: "Relying on the Holy Spirit's guidance and power to release leaders for Kingdom impact locally and globally.",
    icon: Sparkles,
  },
];

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#241C15] text-[#F4EBE1] selection:bg-[#D4A359] selection:text-[#1A120B]">
      <Navbar />

      <main className="flex-1">
        {/* About Page Hero Section */}
        <section className="relative py-32 px-4 sm:px-6 bg-[#1A120B] text-white overflow-hidden text-center border-b border-[#D4A359]/10">
          {/* Glowing Radial Overlay Effect */}
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
              Who We Are
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-6xl font-light tracking-wide text-white leading-tight"
            >
              Our Story & Beliefs
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-[#E2D4C7] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light"
            >
              A Christ-centered community in Kandy dedicated to reaching the unreached, raising mature disciples, and restoring families.
            </motion.p>
          </div>
        </section>

        {/* Our Story / Founding Vision Section with image placement */}
        <section className="py-24 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Story Text Box */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="bg-[#34291F] p-8 sm:p-12 rounded-3xl border border-[#D4A359]/30 shadow-2xl space-y-6 relative overflow-hidden"
            >
              <div className="space-y-3">
                <span className="text-[#D4A359] text-xs uppercase tracking-widest font-semibold">
                  Our Journey
                </span>
                <h2 className="text-3xl sm:text-4xl font-light text-white leading-tight">
                  Planted in the Heart of Kandy
                </h2>
              </div>

              <div className="text-[#E2D4C7] space-y-4 text-sm sm:text-base leading-relaxed font-light">
                <p>
                  Kandy Community Church was established with a singular, heart-felt mission: to be a beacon of hope and spiritual transformation in Kandy and surrounding regions. We believe that the Gospel of Jesus Christ has the power to change hearts, restore broken relationships, and heal communities.
                </p>
                <p>
                  From humble beginnings, our fellowship has grown into a vibrant family of believers who gather weekly to worship, study God’s Word, and serve one another. Our desire is to create a welcoming environment for people of every age and background to experience God's love and grace.
                </p>
              </div>
            </motion.div>

            {/* Featured Image Frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative group rounded-3xl overflow-hidden border border-[#D4A359]/30 shadow-2xl h-[380px] sm:h-[460px]"
            >
              <Image 
                src="/about.jpg" 
                alt="Kandy Community Church Family" 
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A120B] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#241C15]/80 backdrop-blur-md border border-[#D4A359]/20 flex items-center justify-between">
                <div>
                  <h4 className="text-white text-sm font-medium">Community & Fellowship</h4>
                  <p className="text-xs text-[#D4A359]">Kandy, Sri Lanka</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#D4A359] text-[#1A120B] flex items-center justify-center">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-24 px-4 sm:px-6 bg-[#1A120B] border-y border-[#D4A359]/10 relative">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-[#D4A359] text-xs uppercase tracking-[0.25em] font-semibold px-4 py-1.5 rounded-full bg-[#D4A359]/15 border border-[#D4A359]/30">
                What Guides Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-white tracking-wide">
                Our Core Values
              </h2>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-80px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            >
              {coreValues.map((value) => {
                const IconComp = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    variants={itemVariants}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="group relative bg-[#34291F] p-7 rounded-3xl border border-[#D4A359]/30 shadow-2xl overflow-hidden transition-all duration-500 flex flex-col justify-between"
                  >
                    {/* Liquid Gold Hover Layer */}
                    <div className="absolute inset-0 bg-[#D4A359] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] z-0 pointer-events-none" />

                    {/* Card Content */}
                    <div className="relative z-10 space-y-4">
                      <div className="w-13 h-13 rounded-2xl bg-[#D4A359]/20 text-[#D4A359] group-hover:bg-[#1A120B] group-hover:text-[#D4A359] flex items-center justify-center transition-colors duration-500 shadow-md">
                        <IconComp size={26} />
                      </div>

                      <h3 className="text-xl font-light text-white group-hover:text-[#1A120B] transition-colors duration-500">
                        {value.title}
                      </h3>

                      <p className="text-sm text-[#E2D4C7] group-hover:text-[#1A120B] leading-relaxed font-normal transition-colors duration-500">
                        {value.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Statement of Faith Summary */}
        <section className="py-24 px-4 sm:px-6 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="bg-[#34291F] text-white p-8 sm:p-12 rounded-3xl border border-[#D4A359]/40 shadow-2xl space-y-6 relative overflow-hidden"
          >
            {/* Background Accent Glow */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#D4A359]/20 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center gap-3 relative z-10">
              <div className="p-3 rounded-2xl bg-[#D4A359]/20 text-[#D4A359]">
                <ShieldCheck size={30} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-light tracking-wide">
                Statement of Faith
              </h3>
            </div>
            
            <p className="text-[#E2D4C7] text-sm sm:text-base leading-relaxed font-light relative z-10">
              We hold to orthodox Christian beliefs: faith in the Trinity (God the Father, Son, and Holy Spirit), the supreme authority of Holy Scripture, salvation by grace alone through faith in Jesus Christ, and the active power of the Holy Spirit in the church today.
            </p>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}