"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { BookOpen, Heart, ShieldCheck, Sparkles, Anchor } from "lucide-react";

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
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6]">
      <Navbar />

      <main className="flex-1">
        {/* About Page Hero Section */}
        <section className="relative py-24 px-4 sm:px-6 bg-[#1C2D42] text-white overflow-hidden text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C59B27]/20 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-[#F6AD55] text-xs uppercase tracking-[0.25em] font-medium px-4 py-1.5 rounded-full bg-white/10 border border-white/10"
            >
              Who We Are
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-6xl font-light tracking-wide text-white"
            >
              Our Story & Beliefs
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light"
            >
              A Christ-centered community in Kandy dedicated to reaching the unreached, raising mature disciples, and restoring families.
            </motion.p>
          </div>
        </section>

        {/* Our Story / Founding Vision Section */}
        <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="bg-white p-8 sm:p-14 rounded-3xl border border-gray-200/80 shadow-sm space-y-8">
            <div className="space-y-3">
              <span className="text-[#C59B27] text-xs uppercase tracking-widest font-semibold">
                Our Journey
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#1C2D42]">
                Planted in the Heart of Kandy
              </h2>
            </div>

            <div className="prose prose-slate max-w-none text-[#718096] space-y-5 text-sm sm:text-base leading-relaxed font-light">
              <p>
                Kandy Community Church was established with a singular, heart-felt mission: to be a beacon of hope and spiritual transformation in Kandy and surrounding regions. We believe that the Gospel of Jesus Christ has the power to change hearts, restore broken relationships, and heal communities.
              </p>
              <p>
                From humble beginnings, our fellowship has grown into a vibrant family of believers who gather weekly to worship, study God’s Word, and serve one another. Our desire is to create a welcoming environment for people of every age and background to experience God's love and grace.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values Section with Blue Bottom-to-Top Water Fill Hover Effect */}
        <section className="py-20 px-4 sm:px-6 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-[#C59B27] text-xs uppercase tracking-[0.25em] font-semibold px-3 py-1 rounded-full bg-[#C59B27]/10">
                What Guides Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#1C2D42]">
                Our Core Values
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => {
                const IconComp = value.icon;
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                    className="group relative bg-[#FAF9F6] p-7 rounded-3xl border border-gray-200/80 shadow-sm overflow-hidden transition-all duration-1000 flex flex-col justify-between"
                  >
                    {/* Dark Blue Water Fill Layer (Bottom to Top) */}
                    <div className="absolute inset-0 bg-[#1C2D42]/90 backdrop-blur-md translate-y-full group-hover:translate-y-0 transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.3,1)] z-0 pointer-events-none" />

                    {/* Card Content */}
                    <div className="relative z-10 space-y-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#1C2D42] text-[#F6AD55] group-hover:bg-[#C59B27] group-hover:text-white flex items-center justify-center group-hover:scale-110 transition-all duration-[1000ms] shadow-md">
                        <IconComp size={24} />
                      </div>

                      <h3 className="text-lg font-medium text-[#1C2D42] group-hover:text-white transition-colors duration-[1000ms]">
                        {value.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#718096] group-hover:text-gray-200 leading-relaxed font-light transition-colors duration-[1000ms]">
                        {value.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Statement of Faith Summary */}
        <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="bg-[#1C2D42] text-white p-8 sm:p-12 rounded-3xl shadow-xl space-y-6 relative overflow-hidden">
            <div className="flex items-center gap-3">
              <ShieldCheck size={28} className="text-[#F6AD55]" />
              <h3 className="text-2xl sm:text-3xl font-light">
                Statement of Faith
              </h3>
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
              We hold to orthodox Christian beliefs: faith in the Trinity (God the Father, Son, and Holy Spirit), the supreme authority of Holy Scripture, salvation by grace alone through faith in Jesus Christ, and the active power of the Holy Spirit in the church today.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}