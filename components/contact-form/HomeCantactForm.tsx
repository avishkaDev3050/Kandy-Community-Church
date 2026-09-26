"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

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
    <section className="py-16 px-4 sm:px-6 bg-[#EFEAD8] border-t border-[#D0C4A8]">
      <div className="max-w-xl mx-auto space-y-6 bg-[#FAF6ED] border border-[#D0C4A8] p-8 sm:p-10 rounded-3xl shadow-sm">
        <div className="text-center space-y-2">
          <span className="text-[#C59B27] text-xs uppercase tracking-[0.2em] font-semibold px-3 py-1 rounded-full bg-[#C59B27]/10">
            Connect With Us
          </span>
          <h2 className="text-2xl sm:text-3xl font-light text-[#1C2D42]">
            Send a Prayer Request
          </h2>
          <p className="text-sm text-[#5A6A80] font-light">
            Our team stands ready to intercede with you.
          </p>
        </div>

        {formSubmitted ? (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center space-y-2">
            <CheckCircle2 className="mx-auto text-emerald-600" size={32} />
            <h4 className="font-medium">Request Received</h4>
            <p className="text-xs text-emerald-700">
              Our intercessory team will be praying for your request.
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
              />
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
      </div>
    </section>
  );
}