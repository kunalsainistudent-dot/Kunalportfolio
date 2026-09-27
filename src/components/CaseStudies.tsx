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
    accentColor: "text-[#00FF87]",
    badgeBg: "bg-[#00FF87]/15 text-[#60ff98] border-[#00FF87]/30",
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
    accentColor: "text-[#dcb8ff]",
    badgeBg: "bg-[#7701d0]/25 text-[#dcb8ff] border-[#8A2BE2]/40",
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
    accentColor: "text-[#60efff]",
    badgeBg: "bg-[#60efff]/15 text-[#60efff] border-[#60efff]/30",
    headline: "-68% Demo CPA with High-Intent Commercial Search Dominance",
    summary:
      "Captured high-intent search traffic targeting enterprise engineering leaders and converted prospects through personalized, interactive interactive pipeline funnels.",
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
      <div className="pointer-events-none absolute top-1/2 left-1/3 w-[600px] h-[300px] bg-[#8A2BE2]/10 blur-[130px] rounded-full -z-10" />

      {/* Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181c24] text-[#00FF87] border border-white/[0.08] font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          Real-World Execution
        </div>
        <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#dfe2ee] tracking-tight max-w-3xl leading-tight">
          Case Studies &amp; Proven Growth Case Files
        </h2>
        <p className="font-['Inter'] text-base sm:text-lg text-[#94A3B8] max-w-2xl mt-4 leading-relaxed">
          How rigorous empirical ad testing, behavioral psychology, and custom AI systems
          drive outsized returns for visionary founders.
        </p>
      </div>

      {/* Case Study Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
        {CASE_STUDIES.map((study, idx) => {
          const TabIcon = study.icon;
          const isSelected = activeTab === idx;
          return (
            <button
              key={study.id}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2.5 px-5 py-2.5 rounded-full font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                isSelected
                  ? "bg-[#1c2028] text-white border-[#00FF87]/50 shadow-[0_0_20px_rgba(0,255,135,0.2)]"
                  : "bg-[#0a0e16]/60 text-[#94A3B8] border-white/[0.06] hover:text-[#dfe2ee] hover:bg-[#181c24]"
              }`}
            >
              <TabIcon
                className={`w-4 h-4 ${isSelected ? "text-[#00FF87]" : "text-[#94A3B8]"}`}
              />
              <span>{study.category}</span>
            </button>
          );
        })}
      </div>

      {/* Active Case Study Detail Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStudy.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35 }}
          className="p-6 sm:p-10 rounded-2xl bg-[#1c2028]/60 border border-white/[0.1] backdrop-blur-2xl shadow-[0_16px_48px_rgba(0,0,0,0.6)] flex flex-col gap-8 relative overflow-hidden"
        >
          {/* Subtle top indicator bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#262a33] flex items-center justify-center border border-white/10">
                <Icon className={`w-5 h-5 ${activeStudy.accentColor}`} />
              </div>
              <div>
                <span className="font-['Plus_Jakarta_Sans'] text-xs text-[#94A3B8] uppercase tracking-wider block">
                  {activeStudy.category}
                </span>
                <span className="font-['Space_Grotesk'] text-lg font-bold text-[#dfe2ee]">
                  {activeStudy.client}
                </span>
              </div>
            </div>
            <span
              className={`px-3.5 py-1 rounded-full text-xs font-['Plus_Jakarta_Sans'] font-semibold border ${activeStudy.badgeBg}`}
            >
              Verified Case File
            </span>
          </div>

          {/* Headline & Summary */}
          <div className="flex flex-col gap-3">
            <h3 className="font-['Space_Grotesk'] text-2xl sm:text-3xl font-bold text-[#dfe2ee] leading-snug">
              {activeStudy.headline}
            </h3>
            <p className="font-['Inter'] text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-4xl">
              {activeStudy.summary}
            </p>
          </div>

          {/* 3 Prominent Stat Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {activeStudy.metrics.map((metric, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-[#0a0e16]/80 border border-white/[0.06] flex flex-col gap-1 hover:border-[#00FF87]/30 transition-colors"
              >
                <span className="font-['Plus_Jakarta_Sans'] text-xs text-[#94A3B8] uppercase tracking-wider">
                  {metric.label}
                </span>
                <div
                  className={`font-['Space_Grotesk'] text-3xl sm:text-4xl font-bold ${activeStudy.accentColor} tracking-tight my-1`}
                >
                  {metric.value}
                </div>
                <span className="font-['Inter'] text-xs text-[#b9cbb9]">
                  {metric.sub}
                </span>
              </div>
            ))}
          </div>

          {/* Strategic Execution Pillars */}
          <div className="p-6 rounded-xl bg-[#0a0e16]/60 border border-white/[0.06] flex flex-col gap-3">
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#dfe2ee] uppercase tracking-wider">
              Strategic Execution Pillars
            </span>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-1">
              {activeStudy.strategy.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2
                    className={`w-4 h-4 mt-0.5 shrink-0 ${activeStudy.accentColor}`}
                  />
                  <p className="font-['Inter'] text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Action Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-['Plus_Jakarta_Sans'] text-xs text-[#94A3B8] mr-2">
                Tech Stack:
              </span>
              {activeStudy.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full bg-[#262a33]/60 border border-white/[0.06] text-xs font-['Plus_Jakarta_Sans'] text-[#dfe2ee]"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href="#audit-form"
              className="inline-flex items-center gap-1.5 font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-bold text-[#00FF87] hover:text-white transition-colors"
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
