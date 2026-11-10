"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RazorpayModal from "@/components/RazorpayModal";
import {
  PRICING_SERVICES,
  THREE_PHASE_MODEL,
  AD_SPEND_FRAMEWORK,
  COMMERCIAL_TERMS,
  ServiceItem,
} from "@/data/pricingData";
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  Layers,
  HelpCircle,
  FileText,
  Search,
  Cpu,
  TrendingUp,
  Clock,
  ArrowUpRight,
} from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "All Services" },
  { id: "audits", label: "Funnel & Ads Audits" },
  { id: "ai-systems", label: "AI-Integrated Systems" },
  { id: "retainers", label: "Monthly Retainers" },
  { id: "consultation", label: "1-on-1 Consultation" },
];

const FAQS = [
  {
    q: "How does the 10% booking deposit work?",
    a: "When you select any service, you have the option to pay a 10% token deposit upfront. This secures your priority spot on Kunal's calendar, initiates preliminary account and tracking analysis, and locks in the agreed scope. The remaining 90% balance is invoiced as per the signed project milestone agreement.",
  },
  {
    q: "Which payment methods are supported via Razorpay?",
    a: "Through Razorpay, you can pay via UPI (Google Pay, PhonePe, Paytm, BHIM), Indian & International Debit/Credit Cards (Visa, MasterCard, RuPay, Amex), NetBanking across 50+ banks, and popular digital wallets.",
  },
  {
    q: "Are advertising media budgets included in these fees?",
    a: "No. Advertising spend is paid directly by your business to the advertising platforms (Meta, Google, YouTube). Management and audit fees cover strategic architecture, media buying execution, creative engineering, tracking, and daily algorithmic optimization.",
  },
  {
    q: "What happens immediately after I complete my booking?",
    a: "You will receive an instant digital receipt and reference ID. Within minutes, you'll be prompted to connect directly on WhatsApp with Kunal to schedule your kickoff call and share secure ad account delegate access.",
  },
];

export default function PricingPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredServices =
    selectedCategory === "all"
      ? PRICING_SERVICES
      : PRICING_SERVICES.filter((s) => s.category === selectedCategory);

  const handleOpenBooking = (service: ServiceItem) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[#fcf2e8] text-[#0c0a09] flex flex-col overflow-x-hidden">
      {/* Background Ambient Luminescence */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#ee8733]/10 blur-[150px]" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-[#ff7a1a]/8 blur-[140px]" />
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 rounded-full bg-[#f5d9bf]/30 blur-[160px]" />
      </div>

      <Navbar />

      <main className="relative z-10 w-full flex-1 pt-28 sm:pt-36 pb-24">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#ffffff] border-2 border-[#ee8733] text-[#0c0a09] font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider mb-5 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#ee8733]" />
            OFFICIAL RATE CARD &amp; SERVICE CATALOG
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Space_Grotesk'] text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0c0a09] max-w-4xl mx-auto leading-[1.08] mb-6"
          >
            EMPIRICAL ACQUISITION. <br className="hidden sm:inline" />
            <span className="text-[#ee8733]">ZERO FLUFF PRICING.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-['Inter'] text-base sm:text-lg font-medium text-[#57534e] max-w-2xl mx-auto leading-relaxed mb-8"
          >
            From forensic funnel leak diagnosis and autonomous AI lead systems to high-scale paid media management across Meta and Google Ads.
          </motion.p>

          {/* Payment Guarantee Notice */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-3 px-8 rounded-full bg-[#ffffff] border border-[#eaddcf] shadow-sm text-xs font-['Plus_Jakarta_Sans'] text-[#0c0a09] font-bold"
          >
            <div className="flex items-center gap-1.5">
              <CreditCard className="w-4 h-4 text-[#ee8733]" />
              <span>Razorpay Verified Gateway</span>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ee8733]"></span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#ee8733]" />
              <span>Book with 10% Deposit or 100% Upfront</span>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ee8733]"></span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#ee8733]" />
              <span>Direct Founder Engagement</span>
            </div>
          </motion.div>
        </section>

        {/* CATEGORY SELECTOR TABS */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-bold transition-all duration-200 border ${
                  selectedCategory === cat.id
                    ? "bg-[#ee8733] text-white border-[#ee8733] shadow-[0_4px_16px_rgba(238,135,51,0.3)]"
                    : "bg-[#ffffff] text-[#0c0a09] border-[#eaddcf] hover:border-[#ee8733] hover:text-[#ee8733]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* SERVICES CATALOG GRID */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, idx) => {
              const depositAmount = Math.round(service.basePrice * 0.1);

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="p-8 rounded-3xl bg-[#ffffff] border border-[#eaddcf] shadow-sm flex flex-col justify-between hover:border-[#ee8733] hover:shadow-[0_16px_40px_rgba(238,135,51,0.12)] transition-all duration-300 relative group overflow-hidden"
                >
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#ee8733] opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    {/* Header: Title & Category */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#0c0a09] uppercase tracking-wider bg-[#fcf2e8] px-3 py-1 rounded-full border border-[#ee8733]/40">
                        {service.typicalEngagement || "Standard Engagement"}
                      </span>
                    </div>

                    <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#0c0a09] mb-2 leading-tight">
                      {service.title}
                    </h3>

                    {/* Price Tag */}
                    <div className="mb-4 pb-4 border-b border-[#eaddcf]">
                      <div className="flex items-baseline gap-2">
                        <span className="font-['Space_Grotesk'] text-3xl font-extrabold text-[#0c0a09]">
                          {service.priceDisplay}
                        </span>
                        {service.billingPeriod && service.billingPeriod !== "one-time" && (
                          <span className="font-['Inter'] text-sm text-[#78716c] font-semibold">
                            {service.billingPeriod}
                          </span>
                        )}
                      </div>
                      <p className="font-['Inter'] text-xs text-[#57534e] mt-1.5 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Deliverables List */}
                    <div className="mb-6">
                      <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#0c0a09] uppercase tracking-wider block mb-2.5">
                        Scope &amp; Deliverables:
                      </span>
                      <ul className="flex flex-col gap-2 font-['Inter'] text-xs text-[#1c1917] font-semibold">
                        {service.deliverables.map((del, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-[#ee8733] shrink-0" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Booking Action Footer */}
                  <div className="pt-4 border-t border-[#eaddcf] flex flex-col gap-3">
                    <div className="flex items-center justify-between text-xs font-['Inter'] text-[#57534e] font-semibold">
                      <span>10% Kickoff Deposit:</span>
                      <span className="font-bold text-[#ee8733] text-sm">
                        ₹{depositAmount.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <button
                      onClick={() => handleOpenBooking(service)}
                      className="w-full py-3.5 px-4 rounded-xl font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-bold text-[#ffffff] bg-[#ee8733] orange-glow flex items-center justify-center gap-2 hover:bg-[#ff6a1a] active:scale-[0.98] transition-all shadow-sm"
                    >
                      <span>Book Service / Pay Deposit</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* 3-PHASE CLIENT ENGAGEMENT MODEL */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#ffffff] border border-[#eaddcf] shadow-sm">
            <div className="max-w-3xl mb-10">
              <span className="font-['Plus_Jakarta_Sans'] text-xs font-extrabold text-[#ee8733] uppercase tracking-widest mb-2 block">
                STRATEGIC ROADMAP
              </span>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-extrabold text-[#0c0a09]">
                Recommended 3-Phase Client Engagement Model
              </h2>
              <p className="font-['Inter'] text-sm sm:text-base text-[#57534e] mt-2">
                For brands that need end-to-end compounding growth rather than isolated ad execution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {THREE_PHASE_MODEL.map((phase, pIdx) => (
                <div
                  key={phase.phase}
                  className="p-6 rounded-2xl bg-[#fcf2e8] border border-[#eaddcf] flex flex-col justify-between"
                >
                  <div>
                    <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#ee8733] tracking-wider block mb-2">
                      {phase.phase}
                    </span>
                    <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#0c0a09] mb-1">
                      {phase.title}
                    </h3>
                    <div className="font-['Space_Grotesk'] text-lg font-extrabold text-[#ee8733] mb-3">
                      {phase.fee}
                    </div>
                    <p className="font-['Inter'] text-xs text-[#57534e] leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-[#eaddcf] flex items-center gap-1.5 text-[11px] text-[#ee8733] font-bold">
                    <span>Phase Step 0{pIdx + 1}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AD SPEND FRAMEWORK TABLE */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-extrabold text-[#ee8733] uppercase tracking-widest block mb-2">
              RETAINER GUIDELINES
            </span>
            <h2 className="font-['Space_Grotesk'] text-3xl font-extrabold text-[#0c0a09]">
              Suggested Ad-Spend Framework
            </h2>
            <p className="font-['Inter'] text-xs sm:text-sm text-[#57534e] mt-2">
              For smaller accounts, a fixed monthly retainer is recommended rather than a pure percentage-of-spend. For larger accounts, a hybrid structure applies.
            </p>
          </div>

          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-[#eaddcf] bg-[#ffffff] shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left font-['Inter'] text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#fcf2e8] border-b border-[#eaddcf] text-[#0c0a09] font-['Plus_Jakarta_Sans'] uppercase tracking-wider text-xs font-bold">
                    <th className="py-4 px-6">Approx. Monthly Ad Spend</th>
                    <th className="py-4 px-6">Suggested Management Model</th>
                    <th className="py-4 px-6">Strategic Focus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eaddcf] text-[#57534e]">
                  {AD_SPEND_FRAMEWORK.map((row) => (
                    <tr key={row.spendTier} className="hover:bg-[#fcf2e8]/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-[#0c0a09]">
                        {row.spendTier}
                      </td>
                      <td className="py-4 px-6 text-[#ee8733] font-bold">
                        {row.model}
                      </td>
                      <td className="py-4 px-6 font-medium">{row.suitability}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* TERMS & COMMERCIAL NOTES */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
          <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-[#ffffff] border border-[#eaddcf] shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-4 h-4 text-[#ee8733]" />
              <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#0c0a09]">
                Terms &amp; Commercial Notes
              </h3>
            </div>
            <ul className="flex flex-col gap-2.5 font-['Inter'] text-xs text-[#57534e] leading-relaxed">
              {COMMERCIAL_TERMS.map((term, tIdx) => (
                <li key={tIdx} className="flex items-start gap-2">
                  <span className="text-[#ee8733] font-bold">•</span>
                  <span>{term}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="max-w-4xl mx-auto px-6 lg:px-12 mb-16">
          <div className="text-center mb-10">
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-extrabold text-[#ee8733] uppercase tracking-widest block mb-2">
              COMMON INQUIRIES
            </span>
            <h2 className="font-['Space_Grotesk'] text-3xl font-extrabold text-[#0c0a09]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {FAQS.map((faq, fIdx) => (
              <div
                key={fIdx}
                className="p-6 rounded-2xl bg-[#ffffff] border border-[#eaddcf] shadow-xs"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-4 h-4 text-[#ee8733] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-['Space_Grotesk'] text-base font-bold text-[#0c0a09] mb-1.5">
                      {faq.q}
                    </h4>
                    <p className="font-['Inter'] text-xs sm:text-sm text-[#57534e] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* RAZORPAY CHECKOUT MODAL */}
      <RazorpayModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
      />

      <Footer />
    </div>
  );
}
