"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2, Sparkles } from "lucide-react";

export default function HomeContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({ name: "", contact: "", message: "" });

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
    <section className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto text-white">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[250px] bg-[#FFCC00]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-xl mx-auto space-y-6 bg-[#1A1410]/80 border border-[#D4A359]/30 hover:border-[#FFCC00]/50 p-8 sm:p-10 rounded-3xl backdrop-blur-xl shadow-[0_0_35px_rgba(0,0,0,0.6)] transition-all duration-500">
        {/* Form Header */}
        <div className="text-center space-y-3">
          <span className="inline-flex items-center gap-2 text-[#FFCC00] text-xs uppercase tracking-[0.25em] font-semibold px-4 py-1.5 rounded-full bg-[#FFCC00]/10 border border-[#FFCC00]/20 backdrop-blur-md">
            <Sparkles size={14} className="text-[#FFCC00] animate-pulse" />
            <span>Connect With Us</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-light text-white tracking-wide">
            Send a Prayer Request
          </h2>
          <p className="text-sm text-gray-300 font-light">
            Our team stands ready to intercede with you.
          </p>
        </div>

        {formSubmitted ? (
          <div className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 p-6 rounded-2xl text-center space-y-2 backdrop-blur-md shadow-lg">
            <CheckCircle2 className="mx-auto text-emerald-400" size={32} />
            <h4 className="font-medium text-white">Request Received</h4>
            <p className="text-xs text-emerald-300">
              Our intercessory team will be praying for your request.
            </p>
            <button
              onClick={() => setFormSubmitted(false)}
              className="text-xs text-[#FFCC00] underline hover:text-white transition-colors mt-2 inline-block"
            >
              Send another request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            {errorMsg && (
              <div className="p-3 bg-red-950/60 border border-red-500/40 text-red-300 text-xs rounded-xl text-center backdrop-blur-md">
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
                className="w-full px-4 py-3.5 bg-[#241C15]/90 border border-[#D4A359]/30 rounded-xl text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#FFCC00] focus:ring-1 focus:ring-[#FFCC00] transition-all duration-300"
              />
            </div>
            <div>
              <input
                type="text"
                required
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                placeholder="Your Email or Phone"
                className="w-full px-4 py-3.5 bg-[#241C15]/90 border border-[#D4A359]/30 rounded-xl text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#FFCC00] focus:ring-1 focus:ring-[#FFCC00] transition-all duration-300"
              />
            </div>
            <div>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="How can we pray for you?"
                className="w-full px-4 py-3.5 bg-[#241C15]/90 border border-[#D4A359]/30 rounded-xl text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#FFCC00] focus:ring-1 focus:ring-[#FFCC00] transition-all duration-300 resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#FFCC00] hover:bg-[#e6b800] text-[#120E0B] py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,204,0,0.3)] hover:shadow-[0_0_30px_rgba(255,204,0,0.5)] disabled:opacity-50"
            >
              {loading ? (
                <Loader2 size={18} className="animate-spin text-[#120E0B]" />
              ) : (
                <>
                  <Send size={18} />
                  <span>Submit Request</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}