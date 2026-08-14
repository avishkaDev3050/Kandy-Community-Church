"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  MapPin,
  Heart,
  MessageSquare,
  Send,
  Users,
  Building2,
  CheckCircle2,
  Loader2,
} from "lucide-react";

const schedule = [
  {
    day: "Sunday Service",
    time: "9:00 AM - 11:30 AM",
    location: "Main Sanctuary, Kandy",
    desc: "Join us for spirit-filled worship, prayer, and an empowering message from God's Word.",
  },
  {
    day: "Wednesday Prayer Gathering",
    time: "6:30 PM - 8:00 PM",
    location: "Online & Fellowship Hall",
    desc: "A focused time of prayer and intercession for our community, church family, and nation.",
  },
  {
    day: "Friday Life Groups",
    time: "6:30 PM - 8:00 PM",
    location: "Various Homes across Kandy",
    desc: "Smaller home gatherings for deeper fellowship, Bible study, and genuine community.",
  },
];

export default function HubPage() {
  const [activeTab, setActiveTab] = useState<"prayer" | "volunteer" | "donate">("prayer");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/send-prayer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormSubmitted(true);
        setFormData({ name: "", contact: "", message: "" });
      } else {
        setErrorMsg("Failed to send request. Please try again.");
      }
    } catch (err) {
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F3EFE0]">
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
              Connect & Belong
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-6xl font-light tracking-wide text-white"
            >
              Community Hub
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light"
            >
              Find service times, request prayer, discover ways to serve, or support our ongoing mission in Kandy.
            </motion.p>
          </div>
        </section>

        {/* Weekly Gathering Times Section */}
        <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[#C59B27] text-xs uppercase tracking-[0.25em] font-semibold px-3 py-1 rounded-full bg-[#C59B27]/10">
              Gather With Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#1C2D42]">
              Weekly Schedule
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {schedule.map((item, index) => (
              <motion.div
                key={item.day}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="group relative bg-[#E6DEC8]/60 p-8 rounded-3xl border border-[#D0C4A8] shadow-sm overflow-hidden transition-all duration-700 flex flex-col justify-between"
              >
                {/* Yellow Fill Layer (Bottom to Top) */}
                <div className="absolute inset-0 bg-[#FFCC00] translate-y-full group-hover:translate-y-0 transition-transform duration-[700ms] ease-[cubic-bezier(0.25,1,0.3,1)] z-0 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 space-y-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#1C2D42] text-[#F6AD55] group-hover:bg-[#1C2D42] group-hover:text-[#F6AD55] flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-md">
                    <Calendar size={22} />
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-[#1C2D42] group-hover:text-[#1C2D42] transition-colors duration-500">
                      {item.day}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-[#C59B27] group-hover:text-[#1C2D42] mt-2 font-semibold transition-colors duration-500">
                      <Clock size={14} />
                      <span>{item.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-600 group-hover:text-[#1C2D42]/80 mt-1 transition-colors duration-500">
                      <MapPin size={14} />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <p className="text-sm text-[#4A5568] group-hover:text-[#1C2D42] leading-relaxed font-light transition-colors duration-500">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Interactive Action Hub (Tabs Section) */}
        <section id="donate" className="py-20 px-4 sm:px-6 bg-[#EFEAD8] border-t border-[#D0C4A8]">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-[#C59B27] text-xs uppercase tracking-[0.25em] font-semibold px-3 py-1 rounded-full bg-[#C59B27]/10">
                Engage & Support
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#1C2D42]">
                Take the Next Step
              </h2>
            </div>

            {/* Custom Interactive Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-3 p-1.5 bg-[#E6DEC8] border border-[#D0C4A8] rounded-2xl max-w-md mx-auto">
              <button
                onClick={() => setActiveTab("prayer")}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  activeTab === "prayer"
                    ? "bg-[#1C2D42] text-white shadow-md"
                    : "text-[#5A6A80] hover:text-[#1C2D42]"
                }`}
              >
                <MessageSquare size={16} />
                <span>Prayer</span>
              </button>

              <button
                onClick={() => setActiveTab("volunteer")}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  activeTab === "volunteer"
                    ? "bg-[#1C2D42] text-white shadow-md"
                    : "text-[#5A6A80] hover:text-[#1C2D42]"
                }`}
              >
                <Users size={16} />
                <span>Serve</span>
              </button>

              <button
                onClick={() => setActiveTab("donate")}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  activeTab === "donate"
                    ? "bg-[#1C2D42] text-white shadow-md"
                    : "text-[#5A6A80] hover:text-[#1C2D42]"
                }`}
              >
                <Heart size={16} />
                <span>Donate</span>
              </button>
            </div>

            {/* Dynamic Tab Content Box */}
            <div className="bg-[#FAF6ED] border border-[#D0C4A8] p-8 sm:p-12 rounded-3xl shadow-sm min-h-[380px]">
              {/* Tab 1: Prayer Request */}
              {activeTab === "prayer" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6 max-w-xl mx-auto"
                >
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-light text-[#1C2D42]">
                      Send a Prayer Request
                    </h3>
                    <p className="text-sm text-[#5A6A80] font-light">
                      Our prayer team stands ready to intercede with you. Requests are kept strictly confidential.
                    </p>
                  </div>

                  {formSubmitted ? (
                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-2">
                      <CheckCircle2 className="mx-auto text-emerald-600" size={32} />
                      <h4 className="font-medium">Prayer Request Received</h4>
                      <p className="text-xs text-emerald-700">
                        Thank you for sharing. Our intercessory team will be praying for your request.
                      </p>
                      <button
                        onClick={() => setFormSubmitted(false)}
                        className="text-xs text-[#C59B27] underline mt-2 inline-block"
                      >
                        Send another request
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {errorMsg && (
                        <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-xs rounded-xl text-center">
                          {errorMsg}
                        </div>
                      )}
                      <div>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full px-4 py-3 bg-[#F3EFE0] border border-[#D0C4A8] rounded-xl text-sm focus:outline-none focus:border-[#C59B27] transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          required
                          value={formData.contact}
                          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                          placeholder="Your Email or Phone"
                          className="w-full px-4 py-3 bg-[#F3EFE0] border border-[#D0C4A8] rounded-xl text-sm focus:outline-none focus:border-[#C59B27] transition-colors"
                        />
                      </div>
                      <div>
                        <textarea
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="How can we pray for you?"
                          className="w-full px-4 py-3 bg-[#F3EFE0] border border-[#D0C4A8] rounded-xl text-sm focus:outline-none focus:border-[#C59B27] transition-colors resize-none"
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#1C2D42] text-white py-3 rounded-xl text-sm font-medium hover:bg-[#1C2D42]/90 transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50"
                      >
                        {loading ? (
                          <Loader2 size={16} className="animate-spin" />
                        ) : (
                          <>
                            <Send size={16} />
                            <span>Submit Request</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </motion.div>
              )}

              {/* Tab 2: Volunteer / Serve */}
              {activeTab === "volunteer" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6 max-w-xl mx-auto text-center"
                >
                  <div className="space-y-2">
                    <h3 className="text-2xl font-light text-[#1C2D42]">
                      Get Involved in Ministry
                    </h3>
                    <p className="text-sm text-[#5A6A80] font-light">
                      God has given every believer gifts to build up the church. Discover where you can serve.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                    {["Worship & Music", "Media & Sound", "Kids & Youth", "Ushering & Hospitality", "Community Outreach", "Prayer Team"].map((role) => (
                      <div key={role} className="bg-[#F3EFE0] border border-[#D0C4A8] p-4 rounded-xl flex items-center gap-3">
                        <CheckCircle2 size={18} className="text-[#C59B27]" />
                        <span className="text-sm text-[#1C2D42] font-medium">{role}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-[#5A6A80] pt-2">
                    Speak to our team during Sunday Service or drop a message to get started.
                  </p>
                </motion.div>
              )}

              {/* Tab 3: Donations / Support */}
              {activeTab === "donate" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6 max-w-xl mx-auto text-center"
                >
                  <div className="space-y-2">
                    <h3 className="text-2xl font-light text-[#1C2D42]">
                      Support the Mission
                    </h3>
                    <p className="text-sm text-[#5A6A80] font-light">
                      Your generosity enables us to continue reaching the unreached and serving families across Kandy.
                    </p>
                  </div>

                  {/* Bank Details Card */}
                  <div className="bg-[#F3EFE0] border border-[#D0C4A8] p-6 rounded-2xl text-left space-y-4 shadow-sm">
                    <div className="flex items-center gap-3 pb-3 border-b border-[#D0C4A8]">
                      <Building2 className="text-[#C59B27]" size={22} />
                      <h4 className="font-medium text-[#1C2D42]">Direct Bank Transfer</h4>
                    </div>

                    <div className="space-y-2 text-xs sm:text-sm text-[#2D3748]">
                      <div className="flex justify-between py-1 border-b border-[#D0C4A8]/40">
                        <span className="text-gray-500">Account Name:</span>
                        <span className="font-semibold text-[#1C2D42]">Kandy Community Church</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#D0C4A8]/40">
                        <span className="text-gray-500">Bank:</span>
                        <span className="font-semibold text-[#1C2D42]">Commercial Bank Sri Lanka</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-[#D0C4A8]/40">
                        <span className="text-gray-500">Branch:</span>
                        <span className="font-semibold text-[#1C2D42]">Kandy Main Branch</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-gray-500">Account Number:</span>
                        <span className="font-mono font-bold text-[#C59B27]">800100200300</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-gray-500 font-light">
                    "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." — 2 Corinthians 9:7
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}