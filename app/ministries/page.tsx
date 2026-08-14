"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import { Users, GraduationCap, Send, Heart, Flame, Sparkles, ArrowUpRight } from "lucide-react";

const ministriesList = [
  {
    title: "Reach the Unreached",
    tagline: "Evangelism & Compassion",
    desc: "Sharing the Gospel of Jesus Christ with love, urgency, and compassion across Kandy and surrounding communities through outreach initiatives.",
    icon: Users,
  },
  {
    title: "Raise Disciples",
    tagline: "Discipleship & Fellowship",
    desc: "Building strong, grounded believers through systematic Bible teaching, prayer gatherings, and life groups.",
    icon: GraduationCap,
  },
  {
    title: "Release Leaders",
    tagline: "Leadership Development",
    desc: "Equipping, mentoring, and commissioning believers into active ministry, marketplace influence, and church planting.",
    icon: Send,
  },
  {
    title: "Restore Communities",
    tagline: "Family Care & Support",
    desc: "Bringing healing to broken lives and families through counseling, community support, and practical care.",
    icon: Heart,
  },
  {
    title: "NextGen Youth & Children",
    tagline: "Youth & Kids Ministry",
    desc: "Investing in the next generation to raise spirit-led, grounded young people and children with high Christian values.",
    icon: Flame,
  },
  {
    title: "Worship & Creative Arts",
    tagline: "Saturating Spirit & Truth",
    desc: "Cultivating an atmosphere of genuine, spirit-filled worship through music, creative arts, and technical excellence.",
    icon: Sparkles,
  },
];

export default function MinistriesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <div className="min-h-screen flex flex-col bg-[#241C15] text-[#F4EBE1] selection:bg-yellow-400 selection:text-black">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
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
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/10 rounded-full blur-[120px] pointer-events-none" 
          />

          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-yellow-400 text-xs uppercase tracking-[0.25em] font-semibold px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30"
            >
              Our Mission In Action
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-6xl font-light tracking-wide text-white leading-tight"
            >
              What We Do
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-[#E2D4C7] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light"
            >
              Living out our calling through impactful ministries designed to serve, disciple, and restore.
            </motion.p>
          </div>
        </section>

        {/* Feature Image Banner */}
        <section className="py-12 px-4 sm:px-6 max-w-6xl mx-auto -mt-10 relative z-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[280px] sm:h-[380px] rounded-3xl overflow-hidden border border-[#D4A359]/30 shadow-2xl group"
          >
            <Image 
              src="/ministries.jpg" 
              alt="Kandy Community Church Ministries in Action" 
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A120B] via-[#1A120B]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between relative z-10">
              <div>
                <span className="text-yellow-400 text-xs uppercase tracking-widest font-semibold">Serving Kandy</span>
                <h3 className="text-xl sm:text-2xl font-light text-white">Impact, Outreach, & Transformation</h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-yellow-400 text-black flex items-center justify-center shadow-lg">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Ministries Grid Section */}
        <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-yellow-400 text-xs uppercase tracking-[0.25em] font-semibold px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/30">
              Active Ministries
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-white tracking-wide">
              How We Serve
            </h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {ministriesList.map((item) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative bg-[#34291F] p-8 rounded-3xl border border-[#D4A359]/30 shadow-2xl overflow-hidden transition-all duration-500 flex flex-col justify-between"
                >
                  {/* Fluid Yellow Liquid Fill Layer */}
                  <div className="absolute inset-0 bg-yellow-400 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] z-0 pointer-events-none" />

                  {/* Content */}
                  <div className="relative z-10 space-y-5">
                    <div className="w-13 h-13 rounded-2xl bg-yellow-400/10 text-yellow-400 group-hover:bg-black group-hover:text-yellow-400 flex items-center justify-center transition-colors duration-500 shadow-md">
                      <IconComp size={26} />
                    </div>

                    <div>
                      <span className="text-yellow-400 group-hover:text-black text-xs font-semibold tracking-wider uppercase transition-colors duration-500">
                        {item.tagline}
                      </span>
                      <h3 className="text-xl font-light text-white group-hover:text-black mt-1 transition-colors duration-500">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-sm text-[#E2D4C7] group-hover:text-black/90 leading-relaxed font-normal transition-colors duration-500">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}