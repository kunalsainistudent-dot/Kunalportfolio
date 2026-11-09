"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  ArrowUpRight,
  Sparkles,
  Building,
  ShoppingBag,
  Cpu,
  CheckCircle2,
  BarChart,
  Layers,
} from "lucide-react";

const CASE_STUDIES = [
  {
    id: "real-estate",
    category: "Luxury Real Estate",
    client: "PrimeEstates Luxury Living",
    icon: Building,
    accentColor: "text-[#ee8733]",
    badgeBg: "bg-[#3f1e15]/70 text-[#ffd4b2] border-[#ee8733]/35",
    headline: "$14.2M High-Intent Pipeline Generated with Autonomous Qualification",
    summary:
      "Engineered a closed-loop Meta CAPI acquisition pipeline paired with an autonomous 24/7 conversational AI agent that pre-qualified luxury property buyers before booking in-person viewings.",
    metrics: [
      { label: "Pipeline Value", value: "$14.2M", sub: "Verified sales contracts" },
      { label: "Blended ROAS", value: "6.2x", sub: "Across Meta & Paid Search" },
      { label: "Tour Booking CPA", value: "-54%", sub: "Drop in acquisition cost" },
    ],
    strategy: [
      "Algorithmic audience exclusions filtering out sub-tier financial demographics",
      "Dynamic Meta CAPI offline conversion signal sync with CRM closures",
      "Autonomous WhatsApp AI bot verifying proof of liquidity and auto-scheduling tours",
    ],
    techStack: ["Meta Ads", "Google Search", "Meta CAPI", "WhatsApp AI Agent", "HubSpot CRM"],
  },
  {
    id: "ecommerce",
    category: "D2C Apparel & Wellness",
    client: "Aura Botanicals & Lifestyle",
    icon: ShoppingBag,
    accentColor: "text-[#ffffff]",
    badgeBg: "bg-[#171c29] text-[#ffffff] border-white/20",
    headline: "Scaled Revenue from $180k/mo to $650k/mo at 4.4x Blended ROAS",
    summary:
      "Implemented a rapid-iteration creative testing matrix rooted in behavioral consumer psychology, unlocking viral UGC angles and sub-second checkout conversion rates.",
    metrics: [
      { label: "Monthly Revenue", value: "3.6x", sub: "$180k/mo to $650k/mo" },
      { label: "Blended ROAS", value: "4.4x", sub: "Maintained at 4x spend" },
      { label: "Lander Hook Rate", value: "+72%", sub: "3-second video retention" },
    ],
    strategy: [
      "Deconstructed consumer cognitive purchase barriers through video objection destruction",
      "Iterated 30+ ad creatives weekly across Meta and TikTok Spark feeds",
      "Full mobile CRO redesign with friction-free one-click upsells",
    ],
    techStack: ["Meta Ads", "TikTok Ads", "Shopify Plus", "Creative Matrix", "Klaviyo"],
  },
  {
    id: "b2b-saas",
    category: "B2B Enterprise SaaS",
    client: "NeuralScale AI Infrastructure",
    icon: Cpu,
    accentColor: "text-[#367cf1]",
    badgeBg: "bg-[#367cf1]/15 text-[#367cf1] border-[#367cf1]/30",
    headline: "-68% Demo CPA with High-Intent Commercial Search Dominance",
    summary:
      "Captured high-intent search traffic targeting enterprise engineering leaders and converted prospects through personalized, interactive pipeline funnels.",
    metrics: [
      { label: "Demo CPA Reduction", value: "-68%", sub: "From $320 to $102/demo" },
      { label: "Booked Demos", value: "380+", sub: "Direct calendar meetings" },
      { label: "Pipeline ACV", value: "$4.8M", sub: "Enterprise contract value" },
    ],
    strategy: [
      "Hyper-targeted Google Search & YouTube campaigns targeting exact tech stack keywords",
      "Dynamic interactive ROI calculator lander eliminating tire-kickers",
      "Automated lead enrichment & routing directly into executive SDR calendars",
    ],
    techStack: ["Google Ads", "YouTube Ads", "Next.js Lander", "Clearbit", "Salesforce"],
  },
];

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState(0);
  const activeStudy = CASE_STUDIES[activeTab];
  const Icon = activeStudy.icon;

  return (
    <section
      id="case-studies"
      className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28"
    >
      {/* Background ambient light */}
      <div className="pointer-events-none absolute top-1/2 left-1/3 w-[600px] h-[300px] bg-[#ee8733]/10 blur-[140px] rounded-full -z-10" />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#171c29] text-[#ee8733] border border-[#ee8733]/30 font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
          <BarChart className="w-3.5 h-3.5" />
          Verified Empirical Case Studies
        </div>
        <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ffffff] tracking-tight max-w-3xl leading-tight">
          Algorithmic Execution. Predictable Returns.
        </h2>
        <p className="font-['Inter'] text-base sm:text-lg text-[#dcdfe3] max-w-2xl mt-4 leading-relaxed">
          Detailed breakdowns of real client engagements where empirical attribution and AI systems drove non-linear scale.
        </p>

        {/* Tab Selectors */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
          {CASE_STUDIES.map((study, idx) => {
            const TabIcon = study.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={study.id}
                onClick={() => setActiveTab(idx)}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-full font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  isActive
                    ? "bg-[#ee8733] text-white border-[#ee8733] shadow-[0_0_20px_rgba(238,135,51,0.35)]"
                    : "bg-[#171c29]/70 text-[#dcdfe3] border-white/[0.08] hover:bg-[#202738] hover:text-white"
                }`}
              >
                <TabIcon className="w-4 h-4" />
                <span>{study.category}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Case Study Detail Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStudy.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          className="p-8 sm:p-12 rounded-3xl bg-[#171c29]/80 border border-white/[0.08] backdrop-blur-2xl shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Top Accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ee8733] to-transparent opacity-70" />

          {/* Header Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-[#0c0e14]/90 border border-white/[0.06] text-[#ee8733]">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider text-[#94A3B8] block">
                  Client Partner
                </span>
                <span className="font-['Space_Grotesk'] text-lg font-bold text-[#ffffff]">
                  {activeStudy.client}
                </span>
              </div>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-['Plus_Jakarta_Sans'] font-bold uppercase tracking-wider border ${activeStudy.badgeBg}`}
            >
              {activeStudy.category}
            </span>
          </div>

          {/* Headline & Summary */}
          <div className="my-8">
            <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#ffffff] tracking-tight leading-tight mb-4">
              {activeStudy.headline}
            </h3>
            <p className="font-['Inter'] text-sm sm:text-base text-[#dcdfe3] leading-relaxed max-w-4xl">
              {activeStudy.summary}
            </p>
          </div>

          {/* 3 Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
            {activeStudy.metrics.map((m) => (
              <div
                key={m.label}
                className="p-5 rounded-2xl bg-[#0c0e14]/85 border border-white/[0.06] flex flex-col gap-1 shadow-inner"
              >
                <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#94A3B8] uppercase tracking-wider">
                  {m.label}
                </span>
                <div
                  className={`font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold ${activeStudy.accentColor} tracking-tight mt-1`}
                >
                  {m.value}
                </div>
                <span className="font-['Inter'] text-xs text-[#dcdfe3] mt-1">{m.sub}</span>
              </div>
            ))}
          </div>

          {/* Strategy Checklist */}
          <div className="mb-10">
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#ee8733] uppercase tracking-widest block mb-4">
              ENGINEERED IMPLEMENTATION TACTICS
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {activeStudy.strategy.map((strat, sIdx) => (
                <div
                  key={sIdx}
                  className="p-4 rounded-xl bg-[#0c0e14]/60 border border-white/[0.05] flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#ee8733] mt-0.5 shrink-0" />
                  <span className="font-['Inter'] text-xs sm:text-sm text-[#ffffff] leading-relaxed">
                    {strat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & CTA */}
          <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#94A3B8] uppercase mr-2">
                Tech Stack:
              </span>
              {activeStudy.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-[#232a3d]/70 border border-white/[0.08] text-xs font-['Plus_Jakarta_Sans'] text-[#ffffff]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href="#audit-form"
              className="inline-flex items-center gap-1.5 font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-bold text-[#ee8733] hover:text-[#ff9747] transition-colors"
            >
              <span>Replicate these results for your brand</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
