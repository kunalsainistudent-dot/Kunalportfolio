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
    <div className="relative min-h-screen bg-[#0B0F17] text-[#dfe2ee] flex flex-col overflow-x-hidden">
      {/* Background Ambient Luminescence */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#7701d0]/15 blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-[#00FF87]/10 blur-[140px]" />
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 rounded-full bg-[#7701d0]/10 blur-[150px]" />
      </div>

      <Navbar />

      <main className="relative z-10 w-full flex-1 pt-28 sm:pt-36 pb-24">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7701d0]/20 border border-[#8A2BE2]/30 text-[#dcb8ff] font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-widest mb-5"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00FF87]" />
            OFFICIAL RATE CARD &amp; SERVICE CATALOG
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#dfe2ee] max-w-4xl mx-auto leading-tight mb-6"
          >
            Empirical Acquisition Systems. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF87] via-[#f1ffef] to-[#dcb8ff]">
              Zero Fluff, Transparent Pricing.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-['Inter'] text-base sm:text-lg text-[#94A3B8] max-w-2xl mx-auto leading-relaxed mb-8"
          >
            From forensic funnel leak diagnosis and autonomous AI lead systems to high-scale paid media management across Meta and Google Ads.
          </motion.p>

          {/* Payment Guarantee Notice */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-2.5 px-6 rounded-full bg-[#1c2028]/70 border border-white/[0.08] backdrop-blur-md text-xs font-['Plus_Jakarta_Sans'] text-[#dfe2ee]"
          >
            <div className="flex items-center gap-1.5">
              <CreditCard className="w-4 h-4 text-[#00FF87]" />
              <span>Razorpay Verified Gateway</span>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF87]"></span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#00FF87]" />
              <span>Book with 10% Deposit or 100% Upfront</span>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF87]"></span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#dcb8ff]" />
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
                className={`px-5 py-2.5 rounded-full font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  selectedCategory === cat.id
                    ? "bg-[#1c2028] text-white border-[#00FF87] shadow-[0_0_20px_rgba(0,255,135,0.25)] ring-1 ring-[#00FF87]"
                    : "bg-[#0a0e16]/70 text-[#94A3B8] border-white/[0.06] hover:text-[#dfe2ee] hover:bg-[#181c24]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* SERVICES PRICING GRID */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service, idx) => {
              const depositAmount = Math.round(service.basePrice * 0.1);
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`p-6 sm:p-7 rounded-2xl bg-[#1c2028]/60 border backdrop-blur-xl flex flex-col justify-between group transition-all duration-300 relative ${
                    service.highlight
                      ? "border-[#00FF87]/40 shadow-[0_0_35px_rgba(0,255,135,0.12)] hover:border-[#00FF87]"
                      : "border-white/[0.08] hover:border-white/25 hover:shadow-lg"
                  }`}
                >
                  {service.badge && (
                    <span className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-[#00FF87] text-[#003919] font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-wider shadow-[0_0_12px_rgba(0,255,135,0.4)]">
                      {service.badge}
                    </span>
                  )}

                  <div>
                    {/* Header: Title & Engagement */}
                    <div className="mb-4">
                      <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider block mb-1">
                        {service.typicalEngagement}
                      </span>
                      <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#dfe2ee] group-hover:text-white transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    {/* Price Block */}
                    <div className="pb-4 mb-4 border-b border-white/[0.08]">
                      <div className="flex items-baseline gap-1">
                        <span className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#00FF87]">
                          {service.priceDisplay}
                        </span>
                        {service.billingPeriod && service.billingPeriod !== "one-time" && (
                          <span className="font-['Inter'] text-sm text-[#94A3B8]">
                            {service.billingPeriod}
                          </span>
                        )}
                      </div>
                      <p className="font-['Inter'] text-xs text-[#94A3B8] mt-1.5 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Deliverables List */}
                    <div className="mb-6">
                      <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#dfe2ee] uppercase tracking-wider block mb-2.5">
                        Scope &amp; Deliverables:
                      </span>
                      <ul className="flex flex-col gap-2 font-['Inter'] text-xs text-[#94A3B8]">
                        {service.deliverables.map((del, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-[#00FF87] shrink-0" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Booking Action Footer */}
                  <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-3">
                    <div className="flex items-center justify-between text-xs font-['Inter'] text-[#94A3B8]">
                      <span>10% Kickoff Deposit:</span>
                      <span className="font-semibold text-[#00FF87]">
                        ₹{depositAmount.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <button
                      onClick={() => handleOpenBooking(service)}
                      className="w-full py-3.5 px-4 rounded-xl font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-bold text-[#003919] bg-[#00FF87] emerald-glow flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all"
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
          <div className="p-8 sm:p-12 rounded-3xl bg-[#1c2028]/70 border border-white/[0.08] backdrop-blur-2xl shadow-2xl">
            <div className="max-w-3xl mb-10">
              <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#60ff98] uppercase tracking-widest mb-2 block">
                STRATEGIC ROADMAP
              </span>
              <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold text-[#dfe2ee]">
                Recommended 3-Phase Client Engagement Model
              </h2>
              <p className="font-['Inter'] text-sm sm:text-base text-[#94A3B8] mt-2">
                For brands that need end-to-end compounding growth rather than isolated ad execution.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {THREE_PHASE_MODEL.map((phase, pIdx) => (
                <div
                  key={phase.phase}
                  className="p-6 rounded-2xl bg-[#0a0e16]/80 border border-white/[0.06] flex flex-col justify-between"
                >
                  <div>
                    <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#00FF87] tracking-wider block mb-2">
                      {phase.phase}
                    </span>
                    <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#dfe2ee] mb-1">
                      {phase.title}
                    </h3>
                    <div className="font-['Space_Grotesk'] text-lg font-semibold text-[#dcb8ff] mb-3">
                      {phase.fee}
                    </div>
                    <p className="font-['Inter'] text-xs text-[#94A3B8] leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center gap-1.5 text-[11px] text-[#00FF87] font-semibold">
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
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#60ff98] uppercase tracking-widest block mb-2">
              RETAINER GUIDELINES
            </span>
            <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-[#dfe2ee]">
              Suggested Ad-Spend Framework
            </h2>
            <p className="font-['Inter'] text-xs sm:text-sm text-[#94A3B8] mt-2">
              For smaller accounts, a fixed monthly retainer is recommended rather than a pure percentage-of-spend. For larger accounts, a hybrid structure applies.
            </p>
          </div>

          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/[0.08] bg-[#1c2028]/60 backdrop-blur-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left font-['Inter'] text-xs sm:text-sm">
                <thead>
                  <tr className="bg-[#0a0e16]/90 border-b border-white/[0.08] text-[#dfe2ee] font-['Plus_Jakarta_Sans'] uppercase tracking-wider text-xs">
                    <th className="py-4 px-6">Approx. Monthly Ad Spend</th>
                    <th className="py-4 px-6">Suggested Management Model</th>
                    <th className="py-4 px-6">Strategic Focus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06] text-[#94A3B8]">
                  {AD_SPEND_FRAMEWORK.map((row) => (
                    <tr key={row.spendTier} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 px-6 font-semibold text-[#dfe2ee]">
                        {row.spendTier}
                      </td>
                      <td className="py-4 px-6 text-[#00FF87] font-medium">
                        {row.model}
                      </td>
                      <td className="py-4 px-6">{row.suitability}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* TERMS & COMMERCIAL NOTES */}
        <section className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
          <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-[#0a0e16]/80 border border-white/[0.08]">
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-4 h-4 text-[#00FF87]" />
              <h3 className="font-['Space_Grotesk'] text-lg font-bold text-[#dfe2ee]">
                Terms &amp; Commercial Notes
              </h3>
            </div>
            <ul className="flex flex-col gap-2.5 font-['Inter'] text-xs text-[#94A3B8] leading-relaxed">
              {COMMERCIAL_TERMS.map((term, tIdx) => (
                <li key={tIdx} className="flex items-start gap-2">
                  <span className="text-[#00FF87] font-bold">•</span>
                  <span>{term}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="max-w-4xl mx-auto px-6 lg:px-12 mb-16">
          <div className="text-center mb-10">
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#60ff98] uppercase tracking-widest block mb-2">
              COMMON INQUIRIES
            </span>
            <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-[#dfe2ee]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {FAQS.map((faq, fIdx) => (
              <div
                key={fIdx}
                className="p-5 rounded-xl bg-[#1c2028]/60 border border-white/[0.08]"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-4 h-4 text-[#00FF87] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-['Space_Grotesk'] text-base font-bold text-[#dfe2ee] mb-1.5">
                      {faq.q}
                    </h4>
                    <p className="font-['Inter'] text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
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
