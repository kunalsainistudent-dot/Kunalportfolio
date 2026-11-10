"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Rocket,
  Lock,
} from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [result, setResult] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setResult("");

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);

    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      "9877d527-dab2-42dc-9488-76ebb9a38df4";
    formData.append("access_key", accessKey);
    formData.append("subject", "New Growth Audit Submission from Portfolio");
    formData.append("from_name", "Kunal Portfolio Diagnostic Form");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setResult("Form Submitted Successfully! Kunal will review your telemetry and respond within 24 hours.");
        formElement.reset();
      } else {
        setStatus("error");
        setResult(data.message || "Failed to submit. Please try again.");
      }
    } catch (err: any) {
      setStatus("error");
      setResult("Network connection error. Please try again or reach out directly.");
    }
  };

  return (
    <section
      id="audit-form"
      className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32"
    >
      {/* Background ambient pool */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#ee8733]/8 blur-[150px] rounded-full -z-10" />

      {/* Section Header */}
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center mb-12">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#ffffff] border-2 border-[#ee8733] text-[#0c0a09] font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
          <Rocket className="w-3.5 h-3.5 text-[#ee8733]" />
          Accelerate Growth
        </div>
        <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-extrabold text-[#0c0a09] tracking-tight leading-[1.1]">
          LET&apos;S SCALE YOUR ACQUISITION. <br />
          <span className="text-[#ee8733]">CLAIM YOUR AUDIT.</span>
        </h2>
        <p className="font-['Inter'] text-base sm:text-lg font-medium text-[#57534e] mt-4 leading-relaxed">
          Fill out the strategic diagnostic below for your 1-on-1 performance audit, or{" "}
          <a
            href="https://calendar.app.google/gAb9osZfSYNnnoLa8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ee8733] hover:text-[#ff6a1a] hover:underline font-bold inline-flex items-center gap-1"
          >
            book your call directly on Google Calendar &rarr;
          </a>
        </p>
      </div>

      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="max-w-xl mx-auto"
      >
        <form
          onSubmit={handleSubmit}
          className="space-y-5 p-7 sm:p-10 rounded-3xl bg-[#ffffff] border border-[#eaddcf] shadow-md"
        >
          <div className="space-y-1.5 text-left">
            <label
              htmlFor="name"
              className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider text-[#0c0a09]"
            >
              Your Name *
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="e.g. Alex Rivera"
              required
              className="w-full p-4 rounded-xl bg-[#fcf2e8] text-[#0c0a09] placeholder:text-[#a8a29e] border border-[#eaddcf] focus:border-[#ee8733] focus:ring-1 focus:ring-[#ee8733] outline-none transition-all text-sm font-['Inter'] font-medium"
            />
          </div>

          <div className="space-y-1.5 text-left">
            <label
              htmlFor="email"
              className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider text-[#0c0a09]"
            >
              Your Business Email *
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="alex@company.com"
              required
              className="w-full p-4 rounded-xl bg-[#fcf2e8] text-[#0c0a09] placeholder:text-[#a8a29e] border border-[#eaddcf] focus:border-[#ee8733] focus:ring-1 focus:ring-[#ee8733] outline-none transition-all text-sm font-['Inter'] font-medium"
            />
          </div>

          <div className="space-y-1.5 text-left">
            <label
              htmlFor="service"
              className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider text-[#0c0a09]"
            >
              Target Service Focus *
            </label>
            <select
              id="service"
              name="service"
              className="w-full p-4 rounded-xl bg-[#fcf2e8] text-[#0c0a09] border border-[#eaddcf] focus:border-[#ee8733] focus:ring-1 focus:ring-[#ee8733] outline-none transition-all text-sm font-['Inter'] font-medium"
            >
              <option value="Paid Ads" className="bg-[#ffffff] text-[#0c0a09]">
                Meta &amp; Google Ads Funnels
              </option>
              <option value="AI Automation" className="bg-[#ffffff] text-[#0c0a09]">
                AI Systems &amp; Automation
              </option>
              <option value="Full Growth" className="bg-[#ffffff] text-[#0c0a09]">
                Full Funnel &amp; CRO
              </option>
              <option value="All-In-One Growth Retainer" className="bg-[#ffffff] text-[#0c0a09]">
                All-In-One Growth Retainer
              </option>
            </select>
          </div>

          <div className="space-y-1.5 text-left">
            <label
              htmlFor="message"
              className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider text-[#0c0a09]"
            >
              Project Details / Goals *
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us about your current bottlenecks, target ROAS, and scaling goals..."
              rows={4}
              required
              className="w-full p-4 rounded-xl bg-[#fcf2e8] text-[#0c0a09] placeholder:text-[#a8a29e] border border-[#eaddcf] focus:border-[#ee8733] focus:ring-1 focus:ring-[#ee8733] outline-none transition-all text-sm font-['Inter'] font-medium"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-4 bg-[#ee8733] text-[#ffffff] font-['Plus_Jakarta_Sans'] font-bold rounded-full orange-glow hover:bg-[#ff6a1a] active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm disabled:opacity-75 disabled:cursor-not-allowed shadow-md"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Sending....</span>
              </>
            ) : (
              <>
                <span>Send Message / Claim Audit</span>
                <Send className="w-4 h-4 stroke-[2.5]" />
              </>
            )}
          </button>

          {result && (
            <div
              className={`p-4 rounded-xl text-xs flex items-center justify-center gap-2 text-center font-['Plus_Jakarta_Sans'] font-bold ${
                status === "success"
                  ? "bg-[#fff2e6] border border-[#ee8733]/40 text-[#c86314]"
                  : status === "error"
                  ? "bg-red-50 border border-red-200 text-red-700"
                  : "bg-white text-[#57534e]"
              }`}
            >
              {status === "success" && <CheckCircle2 className="w-4 h-4 text-[#ee8733] shrink-0" />}
              {status === "error" && <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />}
              <span>{result}</span>
            </div>
          )}

          <div className="pt-2 flex items-center justify-center gap-2 text-[#78716c] font-['Inter'] text-[11px] text-center font-medium">
            <Lock className="w-3.5 h-3.5 text-[#ee8733] shrink-0" />
            <span>100% Confidential • Direct analysis response within 24 hours</span>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
