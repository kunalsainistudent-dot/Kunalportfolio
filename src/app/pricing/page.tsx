"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RazorpayModal from "@/components/RazorpayModal";
import PulseCard from "@/components/PulseCard";
import ScrollReveal from "@/components/ScrollReveal";
import {
  PRICING_SERVICES,
  THREE_PHASE_MODEL,
  AD_SPEND_FRAMEWORK,
  COMMERCIAL_TERMS,
  ServiceItem,
} from "@/data/pricingData";
import {
  CircleCheckBig,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  HelpCircle,
  FileText,
  Clock,
  Zap,
} from "lucide-react";

/**
 * Pulse Three-Tier Pricing Architecture
 * - Feature cards with 6px lift, 40% accent border, cursor-following glow (18% orange)
 * - Three-tier pricing with middle tier highlighted and tagged
 * - Responsive: Under 960px cards go to 1 column
 * - Pure brand.css variables (0 hardcoded hex colors)
 * - Retains all services, pricing, rate card, 10% token deposit, and Razorpay details
 */

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
  const [paymentPreference, setPaymentPreference] = useState<"deposit" | "full">("deposit");

  const filteredServices =
    selectedCategory === "all"
      ? PRICING_SERVICES
      : PRICING_SERVICES.filter((s) => s.category === selectedCategory);

  const handleOpenBooking = (service: ServiceItem) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] flex flex-col overflow-x-hidden">
      {/* Background Ambient Luminescence at 18% opacity */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[var(--color-accent)] opacity-[0.18] blur-[150px]" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-[var(--color-accent)] opacity-[0.10] blur-[140px]" />
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 rounded-full bg-[var(--color-card-surface)] opacity-[0.50] blur-[160px]" />
      </div>

      <Navbar />

      <main className="relative z-10 w-full flex-1 pt-12 sm:pt-20 pb-24">
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center mb-12 sm:mb-16">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--color-card-surface)] border-2 border-[var(--color-accent)] text-[var(--color-text)] font-['Inter'] text-xs font-bold uppercase tracking-wider mb-5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[var(--color-accent)]" />
              OFFICIAL RATE CARD &bull; TRANSPARENT PRICING
            </div>
          </ScrollReveal>

          <ScrollReveal stagger={1}>
            <h1 className="font-['Inter'] text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--color-text)] max-w-4xl mx-auto leading-[1.08] mb-6">
              EMPIRICAL ACQUISITION. <br className="hidden sm:inline" />
              <span className="text-[var(--color-accent)]">ZERO FLUFF PRICING.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal stagger={2}>
            <p className="font-['Inter'] text-base sm:text-lg font-medium text-[var(--color-text-secondary)] max-w-2xl mx-auto leading-relaxed mb-8">
              From forensic funnel leak diagnosis and autonomous AI lead systems to high-scale paid media management across Meta and Google Ads.
            </p>
          </ScrollReveal>

          {/* Payment Guarantee Notice */}
          <ScrollReveal stagger={3}>
            <div className="inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-3 px-6 sm:px-8 rounded-full bg-[var(--color-card-surface)] border border-[var(--color-border)] shadow-xs text-xs font-['Inter'] text-[var(--color-text)] font-bold">
              <div className="flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-[var(--color-accent)]" />
                <span>Razorpay Verified Gateway</span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] hidden sm:inline-block"></span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[var(--color-accent)]" />
                <span>10% Token Deposit Option Available</span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] hidden sm:inline-block"></span>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[var(--color-accent)]" />
                <span>Direct Founder Execution</span>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* PRICING TOGGLE BANNER */}
        <section className="max-w-md mx-auto px-4 mb-10">
          <div className="p-1.5 rounded-full bg-[var(--color-card-surface)] border border-[var(--color-border)] shadow-xs flex items-center justify-between text-xs font-['Inter'] font-bold">
            <button
              onClick={() => setPaymentPreference("deposit")}
              className={`flex-1 py-2 px-3 rounded-full transition-all duration-200 ${
                paymentPreference === "deposit"
                  ? "bg-[var(--color-accent)] text-[var(--color-bg)] shadow-[0_4px_16px_var(--color-accent-glow)]"
                  : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
              }`}
            >
              10% Token Deposit
            </button>
            <button
              onClick={() => setPaymentPreference("full")}
              className={`flex-1 py-2 px-3 rounded-full transition-all duration-200 ${
                paymentPreference === "full"
                  ? "bg-[var(--color-accent)] text-[var(--color-bg)] shadow-[0_4px_16px_var(--color-accent-glow)]"
                  : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
              }`}
            >
              100% Full Upfront
            </button>
          </div>
        </section>

        {/* CATEGORY SELECTOR TABS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2 rounded-full font-['Inter'] text-xs sm:text-sm font-bold transition-all duration-200 border ${
                  selectedCategory === cat.id
                    ? "bg-[var(--color-accent)] text-[var(--color-bg)] border-[var(--color-accent)] shadow-xs"
                    : "bg-[var(--color-card-surface)] text-[var(--color-text-secondary)] border-[var(--color-border)] hover:border-[var(--color-accent-border-40)] hover:text-[var(--color-text)]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* THREE-TIER PRICING SERVICES CATALOG (Pulse Three-Tier Specification)
            - Responsive: under 960px 1 column, min-[960px]:grid-cols-3
            - Middle tier highlighted and tagged
            - Feature card 6px lift, 40% accent border, cursor-following glow
        */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-24">
          <div className="grid grid-cols-1 min-[960px]:grid-cols-3 gap-6">
            {filteredServices.map((service, idx) => {
              const depositAmount = Math.round(service.basePrice * 0.1);
              // Middle tier or explicit highlight gets highlighted and tagged per Pulse spec
              const isMiddleTier =
                service.highlight ||
                service.badge !== undefined ||
                service.id.includes("growth") ||
                service.id.includes("xray");

              return (
                <ScrollReveal key={service.id} stagger={((idx % 3) + 1) as 1 | 2 | 3}>
                  <PulseCard
                    highlight={isMiddleTier}
                    className="p-7 sm:p-8 flex flex-col justify-between h-full relative"
                  >
                    {/* Middle Tier Tag / Badge (Pulse Three-Tier Specification) */}
                    {isMiddleTier && (
                      <div className="absolute top-0 right-0 bg-[var(--color-accent)] text-[var(--color-bg)] text-[10px] font-['Inter'] font-extrabold uppercase tracking-wider py-1 px-4 rounded-bl-xl shadow-xs">
                        {service.badge || "Most Popular Plan"}
                      </div>
                    )}

                    <div>
                      {/* Header: Title & Category */}
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <span className="font-['Inter'] text-[11px] font-bold text-[var(--color-text)] uppercase tracking-wider bg-[var(--color-bg)] px-3 py-1 rounded-full border border-[var(--color-accent-border-40)]">
                          {service.typicalEngagement || "Standard Engagement"}
                        </span>
                      </div>

                      <h3 className="font-['Inter'] text-xl font-bold text-[var(--color-text)] mb-2 leading-tight">
                        {service.title}
                      </h3>

                      {/* Price Tag with Deposit calculation */}
                      <div className="mb-4 pb-4 border-b border-[var(--color-border)]">
                        <div className="flex items-baseline gap-2">
                          <span className="font-['Inter'] text-3xl font-extrabold text-[var(--color-text)]">
                            {paymentPreference === "deposit"
                              ? `₹${depositAmount.toLocaleString("en-IN")}`
                              : service.priceDisplay}
                          </span>
                          <span className="font-['Inter'] text-xs font-bold text-[var(--color-accent)]">
                            {paymentPreference === "deposit"
                              ? "(10% Kickoff Deposit)"
                              : service.billingPeriod && service.billingPeriod !== "one-time"
                              ? service.billingPeriod
                              : "(Full Price)"}
                          </span>
                        </div>
                        <p className="font-['Inter'] text-xs text-[var(--color-text-secondary)] mt-2 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Deliverables List */}
                      <div className="mb-6">
                        <span className="font-['Inter'] text-[11px] font-bold text-[var(--color-text)] uppercase tracking-wider block mb-2.5">
                          Deliverables &amp; Scope:
                        </span>
                        <ul className="flex flex-col gap-2 font-['Inter'] text-xs text-[var(--color-text-secondary)] font-semibold">
                          {service.deliverables.map((del, dIdx) => (
                            <li key={dIdx} className="flex items-start gap-2">
                              <CircleCheckBig className="w-3.5 h-3.5 mt-0.5 text-[var(--color-accent)] shrink-0" />
                              <span>{del}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Booking Action Footer */}
                    <div className="pt-4 border-t border-[var(--color-border)] flex flex-col gap-3">
                      <div className="flex items-center justify-between text-xs font-['Inter'] text-[var(--color-text-secondary)] font-semibold">
                        <span>Full Scope Investment:</span>
                        <span className="font-bold text-[var(--color-text)]">
                          {service.priceDisplay}
                        </span>
                      </div>

                      <button
                        onClick={() => handleOpenBooking(service)}
                        className="w-full py-3.5 px-4 rounded-xl font-['Inter'] text-xs sm:text-sm font-bold text-[var(--color-bg)] bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] active:scale-[0.98] transition-all shadow-[0_4px_16px_var(--color-accent-glow)] flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>
                          {paymentPreference === "deposit"
                            ? `Book with 10% Deposit (₹${depositAmount.toLocaleString("en-IN")})`
                            : `Book Full Service (${service.priceDisplay})`}
                        </span>
                        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                      </button>
                    </div>
                  </PulseCard>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* 3-PHASE CLIENT ENGAGEMENT MODEL */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-24">
          <ScrollReveal>
            <div className="p-8 sm:p-12 rounded-3xl bg-[var(--color-card-surface)] border border-[var(--color-border)] shadow-xs">
              <div className="max-w-3xl mb-10">
                <span className="font-['Inter'] text-xs font-extrabold text-[var(--color-accent)] uppercase tracking-widest mb-2 block">
                  STRATEGIC ROADMAP
                </span>
                <h2 className="font-['Inter'] text-3xl sm:text-4xl font-extrabold text-[var(--color-text)]">
                  Recommended 3-Phase Client Engagement Model
                </h2>
                <p className="font-['Inter'] text-sm sm:text-base text-[var(--color-text-secondary)] mt-2">
                  For brands that need end-to-end compounding growth rather than isolated ad execution.
                </p>
              </div>

              <div className="grid grid-cols-1 min-[960px]:grid-cols-3 gap-6">
                {THREE_PHASE_MODEL.map((phase, pIdx) => (
                  <div
                    key={phase.phase}
                    className="p-6 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-['Inter'] text-xs font-bold text-[var(--color-accent)] tracking-wider block mb-2">
                        {phase.phase}
                      </span>
                      <h3 className="font-['Inter'] text-xl font-bold text-[var(--color-text)] mb-1">
                        {phase.title}
                      </h3>
                      <div className="font-['Inter'] text-lg font-extrabold text-[var(--color-accent)] mb-3">
                        {phase.fee}
                      </div>
                      <p className="font-['Inter'] text-xs text-[var(--color-text-secondary)] leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-[var(--color-border)] flex items-center gap-1.5 text-[11px] text-[var(--color-accent)] font-bold">
                      <span>Phase Step 0{pIdx + 1}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* AD SPEND FRAMEWORK TABLE */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-24">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="font-['Inter'] text-xs font-extrabold text-[var(--color-accent)] uppercase tracking-widest block mb-2">
                RETAINER GUIDELINES
              </span>
              <h2 className="font-['Inter'] text-3xl font-extrabold text-[var(--color-text)]">
                Suggested Ad-Spend Framework
              </h2>
              <p className="font-['Inter'] text-xs sm:text-sm text-[var(--color-text-secondary)] mt-2">
                For smaller accounts, a fixed monthly retainer is recommended rather than a pure percentage-of-spend. For larger accounts, a hybrid structure applies.
              </p>
            </div>

            <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-[var(--color-border)] bg-[var(--color-card-surface)] shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left font-['Inter'] text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-[var(--color-bg)] border-b border-[var(--color-border)] text-[var(--color-text)] font-['Inter'] uppercase tracking-wider text-xs font-bold">
                      <th className="py-4 px-6">Approx. Monthly Ad Spend</th>
                      <th className="py-4 px-6">Suggested Management Model</th>
                      <th className="py-4 px-6">Strategic Focus</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[var(--color-border)] text-[var(--color-text-secondary)]">
                    {AD_SPEND_FRAMEWORK.map((row) => (
                      <tr key={row.spendTier} className="hover:bg-[var(--color-bg)] transition-colors">
                        <td className="py-4 px-6 font-bold text-[var(--color-text)]">
                          {row.spendTier}
                        </td>
                        <td className="py-4 px-6 text-[var(--color-accent)] font-bold">
                          {row.model}
                        </td>
                        <td className="py-4 px-6 font-medium">{row.suitability}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* TERMS & COMMERCIAL NOTES */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mb-24">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto p-8 rounded-3xl bg-[var(--color-card-surface)] border border-[var(--color-border)] shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-4 h-4 text-[var(--color-accent)]" />
                <h3 className="font-['Inter'] text-lg font-bold text-[var(--color-text)]">
                  Terms &amp; Commercial Notes
                </h3>
              </div>
              <ul className="flex flex-col gap-2.5 font-['Inter'] text-xs text-[var(--color-text-secondary)] leading-relaxed">
                {COMMERCIAL_TERMS.map((term, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-2">
                    <span className="text-[var(--color-accent)] font-bold">&bull;</span>
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 mb-16">
          <ScrollReveal className="text-center mb-10">
            <span className="font-['Inter'] text-xs font-extrabold text-[var(--color-accent)] uppercase tracking-widest block mb-2">
              COMMON INQUIRIES
            </span>
            <h2 className="font-['Inter'] text-3xl font-extrabold text-[var(--color-text)]">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>

          <div className="flex flex-col gap-4">
            {FAQS.map((faq, fIdx) => (
              <ScrollReveal key={fIdx} stagger={((fIdx % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="p-6 rounded-2xl bg-[var(--color-card-surface)] border border-[var(--color-border)] shadow-xs">
                  <div className="flex items-start gap-3">
                    <HelpCircle className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-['Inter'] text-base font-bold text-[var(--color-text)] mb-1.5">
                        {faq.q}
                      </h4>
                      <p className="font-['Inter'] text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
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
