"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Rocket,
  Lock,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Sparkles,
  Building2,
  ShoppingBag,
  Cpu,
  Layers,
} from "lucide-react";

/**
 * Ported & adapted from Page UI (website/demo/form-examples & components/shared/ui/form.tsx)
 * Implements an interactive 2-Step Diagnostic Form with Web3Forms submission and Google Calendar integration.
 * Inherits brand tokens: #fcf2e8 canvas, #ffffff cards, #ee8733 accents, bold black/orange font sequence.
 */

const VERTICAL_OPTIONS = [
  "eCommerce / D2C",
  "B2B SaaS / Tech",
  "Luxury Real Estate",
  "High-Ticket Services",
];

const BUDGET_OPTIONS = [
  "Under $5,000 / mo",
  "$5,000 - $20,000 / mo",
  "$20,000 - $50,000 / mo",
  "$50,000+ / mo",
];

const BOTTLENECK_OPTIONS = [
  "High CPA & Ad Creative Fatigue",
  "Attribution & CAPI Signal Loss",
  "Slow Lead Triage & Qualification",
  "Lander Drop-off & Checkout Friction",
];

export default function ContactForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [result, setResult] = useState<string>("");

  // Step 1 State
  const [vertical, setVertical] = useState("eCommerce / D2C");
  const [budget, setBudget] = useState("$5,000 - $20,000 / mo");
  const [bottleneck, setBottleneck] = useState("High CPA & Ad Creative Fatigue");

  // Step 2 State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setResult("");

    const formData = new FormData();
    const accessKey =
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      "9877d527-dab2-42dc-9488-76ebb9a38df4";
    formData.append("access_key", accessKey);
    formData.append("subject", `New 2-Step Growth Audit: ${name} (${vertical})`);
    formData.append("from_name", "Kunal Portfolio Diagnostic Form");
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("website", website || "N/A");
    formData.append("business_vertical", vertical);
    formData.append("monthly_ad_budget", budget);
    formData.append("primary_bottleneck", bottleneck);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setResult("Diagnostic submitted! Kunal will review your account telemetry and reach out within 24 hours.");
      } else {
        setStatus("error");
        setResult(data.message || "Failed to submit. Please try again or book directly via Google Calendar.");
      }
    } catch (err: any) {
      setStatus("error");
      setResult("Network connection error. Please try again or book directly via Google Calendar.");
    }
  };

  return (
    <section
      id="audit-form"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 lg:py-32"
    >
      {/* Background ambient light */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#ee8733]/8 blur-[150px] rounded-full -z-10" />

      {/* Section Header */}
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center mb-10 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#ffffff] border-2 border-[#ee8733] text-[#0c0a09] font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
          <Rocket className="w-3.5 h-3.5 text-[#ee8733]" />
          Accelerate Growth &bull; Diagnostic Audit
        </div>
        <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl font-extrabold text-[#0c0a09] tracking-tight leading-[1.1]">
          LET&apos;S SCALE YOUR ACQUISITION. <br />
          <span className="text-[#ee8733]">CLAIM YOUR AUDIT.</span>
        </h2>
        <p className="font-['Inter'] text-base sm:text-lg font-medium text-[#57534e] mt-4 leading-relaxed">
          Complete the 2-step diagnostic below for your forensic performance audit, or{" "}
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

      {/* 2-Step Form Card (Page UI 2-Step Form Pattern) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <div className="p-6 sm:p-10 rounded-3xl bg-[#ffffff] border border-[#eaddcf] shadow-md">
          {/* Stepper Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-xs font-['Plus_Jakarta_Sans'] font-bold text-[#78716c] uppercase mb-2">
              <span className={step === 1 ? "text-[#ee8733]" : "text-[#0c0a09]"}>
                Step 1: Growth Profile
              </span>
              <span className={step === 2 ? "text-[#ee8733]" : "text-[#78716c]"}>
                Step 2: Contact &amp; Schedule
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#fcf2e8] overflow-hidden border border-[#eaddcf]">
              <div
                className="h-full bg-gradient-to-r from-[#ff5500] to-[#ee8733] transition-all duration-300 rounded-full"
                style={{ width: step === 1 ? "50%" : "100%" }}
              />
            </div>
          </div>

          {status === "success" ? (
            <div className="p-8 rounded-2xl bg-[#fff2e6] border border-[#ee8733]/40 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#ee8733] text-white mx-auto flex items-center justify-center shadow-md">
                <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
              </div>
              <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#0c0a09]">
                Diagnostic Received!
              </h3>
              <p className="font-['Inter'] text-sm text-[#57534e] max-w-md mx-auto">
                {result}
              </p>
              <div className="pt-4">
                <a
                  href="https://calendar.app.google/gAb9osZfSYNnnoLa8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-['Plus_Jakarta_Sans'] text-xs font-bold text-white bg-[#ee8733] orange-glow hover:bg-[#ff6a1a] transition-all shadow-sm"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Lock In Calendar Slot Now</span>
                </a>
              </div>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              {step === 1 ? (
                /* STEP 1: Diagnostic Profile */
                <motion.form
                  key="step-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  onSubmit={handleNextStep}
                  className="space-y-6 text-left"
                >
                  {/* Business Vertical */}
                  <div className="space-y-2">
                    <label className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#0c0a09] uppercase tracking-wider block">
                      1. Primary Business Vertical
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {VERTICAL_OPTIONS.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setVertical(opt)}
                          className={`p-3 rounded-xl text-xs font-['Plus_Jakarta_Sans'] font-semibold text-left transition-all border ${
                            vertical === opt
                              ? "bg-[#fff2e6] border-[#ee8733] text-[#0c0a09] font-bold shadow-2xs"
                              : "bg-[#fcf2e8]/60 border-[#eaddcf] text-[#57534e] hover:bg-[#ffffff] hover:border-[#ee8733]/40"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Monthly Ad Budget */}
                  <div className="space-y-2">
                    <label className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#0c0a09] uppercase tracking-wider block">
                      2. Current Monthly Ad Budget
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {BUDGET_OPTIONS.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setBudget(opt)}
                          className={`p-3 rounded-xl text-xs font-['Plus_Jakarta_Sans'] font-semibold text-left transition-all border ${
                            budget === opt
                              ? "bg-[#fff2e6] border-[#ee8733] text-[#0c0a09] font-bold shadow-2xs"
                              : "bg-[#fcf2e8]/60 border-[#eaddcf] text-[#57534e] hover:bg-[#ffffff] hover:border-[#ee8733]/40"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Primary Growth Bottleneck */}
                  <div className="space-y-2">
                    <label className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#0c0a09] uppercase tracking-wider block">
                      3. Primary Growth Bottleneck
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {BOTTLENECK_OPTIONS.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setBottleneck(opt)}
                          className={`p-3 rounded-xl text-xs font-['Plus_Jakarta_Sans'] font-semibold text-left transition-all border ${
                            bottleneck === opt
                              ? "bg-[#fff2e6] border-[#ee8733] text-[#0c0a09] font-bold shadow-2xs"
                              : "bg-[#fcf2e8]/60 border-[#eaddcf] text-[#57534e] hover:bg-[#ffffff] hover:border-[#ee8733]/40"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-['Plus_Jakarta_Sans'] text-sm font-bold text-white bg-[#ee8733] orange-glow hover:bg-[#ff6a1a] transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Proceed to Step 2: Contact Details</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </motion.form>
              ) : (
                /* STEP 2: Founder Details & Submit */
                <motion.form
                  key="step-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleSubmit}
                  className="space-y-5 text-left"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#0c0a09] uppercase tracking-wider block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Kunal Saini"
                        className="w-full px-4 py-3 rounded-xl bg-[#fcf2e8]/50 border border-[#eaddcf] text-sm text-[#0c0a09] focus:outline-hidden focus:border-[#ee8733] focus:ring-1 focus:ring-[#ee8733] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#0c0a09] uppercase tracking-wider block">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#fcf2e8]/50 border border-[#eaddcf] text-sm text-[#0c0a09] focus:outline-hidden focus:border-[#ee8733] focus:ring-1 focus:ring-[#ee8733] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#0c0a09] uppercase tracking-wider block">
                        WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-[#fcf2e8]/50 border border-[#eaddcf] text-sm text-[#0c0a09] focus:outline-hidden focus:border-[#ee8733] focus:ring-1 focus:ring-[#ee8733] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#0c0a09] uppercase tracking-wider block">
                        Website / Ad Account URL
                      </label>
                      <input
                        type="text"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="https://yourbrand.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#fcf2e8]/50 border border-[#eaddcf] text-sm text-[#0c0a09] focus:outline-hidden focus:border-[#ee8733] focus:ring-1 focus:ring-[#ee8733] transition-all"
                      />
                    </div>
                  </div>

                  {status === "error" && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-medium flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{result}</span>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="py-3.5 px-5 rounded-xl font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#57534e] bg-[#fcf2e8] border border-[#eaddcf] hover:text-[#0c0a09] flex items-center justify-center gap-1.5 transition-all"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back to Step 1</span>
                    </button>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="flex-1 py-3.5 px-6 rounded-xl font-['Plus_Jakarta_Sans'] text-sm font-bold text-white bg-[#ee8733] orange-glow hover:bg-[#ff6a1a] disabled:opacity-50 transition-all flex items-center justify-center gap-2 shadow-sm"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Transmitting Telemetry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Diagnostic &amp; Claim Audit</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          )}

          {/* Privacy & Fast Lane Alternative */}
          <div className="mt-6 pt-5 border-t border-[#eaddcf] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#78716c]">
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#ee8733]" />
              <span>Strict NDA Confidentiality &bull; Zero Spam</span>
            </div>
            <a
              href="https://calendar.app.google/gAb9osZfSYNnnoLa8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ee8733] hover:underline font-bold inline-flex items-center gap-1"
            >
              <span>Instant Google Calendar Booking &rarr;</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
