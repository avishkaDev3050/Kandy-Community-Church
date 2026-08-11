"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Users, GraduationCap, Send, Heart, Flame, Sparkles } from "lucide-react";

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
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6]">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 px-4 sm:px-6 bg-[#1C2D42] text-white overflow-hidden text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C59B27]/20 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-[#F6AD55] text-xs uppercase tracking-[0.25em] font-medium px-4 py-1.5 rounded-full bg-white/10 border border-white/10"
            >
              Our Mission In Action
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-6xl font-light tracking-wide text-white"
            >
              What We Do
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light"
            >
              Living out our calling through impactful ministries designed to serve, disciple, and restore.
            </motion.p>
          </div>
        </section>

        {/* Ministries Grid Section */}
        <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#C59B27] text-xs uppercase tracking-[0.25em] font-semibold px-3 py-1 rounded-full bg-[#C59B27]/10">
              Active Ministries
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#1C2D42]">
              How We Serve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ministriesList.map((item, index) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group relative bg-white p-8 rounded-3xl border border-gray-200/80 shadow-sm overflow-hidden transition-all duration-1000 flex flex-col justify-between"
                >
                  {/* Dark Blue Water Fill Layer (Bottom to Top) */}
                  <div className="absolute inset-0 bg-[#1C2D42]/90 backdrop-blur-md translate-y-full group-hover:translate-y-0 transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.3,1)] z-0 pointer-events-none" />

                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#1C2D42] text-[#F6AD55] group-hover:bg-[#C59B27] group-hover:text-white flex items-center justify-center group-hover:scale-110 transition-all duration-[1000ms] shadow-md">
                      <IconComp size={24} />
                    </div>

                    <div>
                      <span className="text-[#C59B27] group-hover:text-[#F6AD55] text-xs font-semibold tracking-wider uppercase transition-colors duration-[1000ms]">
                        {item.tagline}
                      </span>
                      <h3 className="text-xl font-medium text-[#1C2D42] group-hover:text-white mt-1 transition-colors duration-[1000ms]">
                        {item.title}
                      </h3>
                    </div>

                    <p className="text-sm text-[#718096] group-hover:text-gray-200 leading-relaxed font-light transition-colors duration-[1000ms]">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}