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
  ArrowRight,
  ShieldCheck,
  Quote,
} from "lucide-react";

/**
 * Ported & adapted from Page UI (components/landing/showcase/LandingShowcase.tsx & LandingProductProblemSolution.tsx)
 * Inherits brand tokens: #171c29 canvas, #0c0e14 cards, #ee8733 accents, #ffffff/#dcdfe3 typography.
 */

const CASE_STUDIES = [
  {
    id: "real-estate",
    category: "Luxury Real Estate",
    client: "PrimeEstates Luxury Living",
    icon: Building,
    accentColor: "text-[#ee8733]",
    badgeBg: "bg-[rgba(238,135,51,0.15)] text-[#ee8733] border-[#ee8733]/30",
    headline: "$14.2M High-Intent Pipeline Generated with Autonomous WhatsApp Qualification",
    summary:
      "Engineered a closed-loop Meta CAPI acquisition pipeline paired with an autonomous 24/7 conversational AI agent that pre-qualified luxury property buyers before booking in-person viewings.",
    problem: "Previous agency generated high lead volume, but 80%+ were unqualified tire-kickers wasting broker time with low viewing attendance.",
    solution: "Deployed Meta CAPI offline conversion signals back to Meta, paired with an autonomous WhatsApp SDR that filtered buyers by liquidity.",
    metrics: [
      { label: "Pipeline Value", value: "$14.2M", sub: "Verified sales contracts" },
      { label: "Blended ROAS", value: "6.2x", sub: "Meta CAPI & Paid Search" },
      { label: "Tour Booking CPA", value: "-54%", sub: "Drop in acquisition cost" },
    ],
    strategy: [
      "Algorithmic audience exclusions filtering out sub-tier financial demographics",
      "Dynamic Meta CAPI offline conversion signal sync with CRM closures",
      "Autonomous WhatsApp AI bot verifying proof of liquidity and auto-scheduling tours",
    ],
    techStack: ["Meta Ads", "Google Search", "Meta CAPI", "WhatsApp AI Agent", "HubSpot CRM"],
    quote: "Kunal eliminated tire-kickers entirely. Our sales directors only meet buyers who have passed algorithmic liquidity checks.",
  },
  {
    id: "ecommerce",
    category: "D2C Apparel & Lifestyle",
    client: "Aura Botanicals & Lifestyle",
    icon: ShoppingBag,
    accentColor: "text-[#ffffff]",
    badgeBg: "bg-[#171c29] text-[#ffffff] border-[rgba(220,223,227,0.12)]",
    headline: "Scaled Revenue from $180k/mo to $650k/mo at 4.4x Blended ROAS",
    summary:
      "Implemented a rapid-iteration creative testing matrix rooted in behavioral consumer psychology, unlocking viral UGC angles and sub-second mobile checkout conversion rates.",
    problem: "Ad fatigue throttled scale at $180k/mo. Increasing ad spend compressed ROAS below breakeven due to repetitive creative hooks.",
    solution: "Built a 30-angle weekly UGC testing matrix targeting 4 distinct psychological buyer archetypes with 1-click mobile upsells.",
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
    quote: "Our blended ROAS held steady at 4.4x even as we quadrupled monthly spend. The creative matrix framework solved our ad fatigue.",
  },
  {
    id: "b2b-saas",
    category: "B2B Enterprise SaaS",
    client: "NeuralScale AI Infrastructure",
    icon: Cpu,
    accentColor: "text-[#367cf1]",
    badgeBg: "bg-[rgba(54,124,241,0.15)] text-[#367cf1] border-[#367cf1]/30",
    headline: "-68% Demo CPA with High-Intent Commercial Search Dominance",
    summary:
      "Captured high-intent search traffic targeting enterprise engineering leaders and converted prospects through personalized, interactive pipeline funnels.",
    problem: "Enterprise demo costs averaged $320/demo with high drop-off on static lead capture forms.",
    solution: "Redesigned acquisition around high-intent long-tail keywords and replaced static forms with an interactive ROI calculator.",
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
    quote: "Kunal cut our cost per qualified enterprise demo by more than two-thirds within the first 60 days of taking over paid search.",
  },
];

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState(0);
  const activeStudy = CASE_STUDIES[activeTab];
  const Icon = activeStudy.icon;

  return (
    <section
      id="case-studies"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 lg:py-28"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/3 w-[600px] h-[300px] bg-[#ee8733]/8 blur-[140px] rounded-full -z-10" />

      {/* Header with White + Orange Font Pair */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0c0e14] border-2 border-[#ee8733] text-[#ffffff] font-['Inter'] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#ee8733]" />
          <span>PROVEN IMPACT &bull; AUDITED PORTFOLIO RESULTS</span>
        </div>
        <h2 className="font-['Inter'] text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#ffffff] tracking-tight leading-[1.1]">
          SYSTEMIC BREAKTHROUGHS. <br />
          <span className="text-[#ee8733]">VERIFIED ATTRIBUTION.</span>
        </h2>
        <p className="font-['Inter'] text-sm sm:text-base text-[#dcdfe3] max-w-2xl mt-4">
          Real client engagements with deterministic attribution, rigorous unit economics, and custom AI systems.
        </p>
      </div>

      {/* Case Study Vertical Selector Tabs (Page UI Showcase Tabs) */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
        {CASE_STUDIES.map((study, idx) => (
          <button
            key={study.id}
            onClick={() => setActiveTab(idx)}
            className={`px-5 py-2.5 rounded-full font-['Inter'] text-xs sm:text-sm font-bold transition-all duration-200 border flex items-center gap-2 ${
              activeTab === idx
                ? "bg-[#ee8733] text-[#171c29] border-[#ee8733] orange-glow-sm shadow-xs"
                : "bg-[#0c0e14] text-[#dcdfe3] border-[rgba(220,223,227,0.12)] hover:border-[#ee8733] hover:text-[#ffffff]"
            }`}
          >
            <span>{study.category}</span>
          </button>
        ))}
      </div>

      {/* Active Case Study Showcase (Page UI Showcase Layout: Split 2 Columns) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStudy.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          className="p-8 sm:p-12 rounded-3xl bg-[#0c0e14] border border-[rgba(220,223,227,0.12)] shadow-xs"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Problem, Solution & Metrics */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Meta Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-[#171c29] text-[#ee8733] border border-[rgba(220,223,227,0.12)]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-['Inter'] font-bold uppercase tracking-wider border ${activeStudy.badgeBg}`}>
                    {activeStudy.client}
                  </span>
                </div>

                <h3 className="font-['Inter'] text-2xl sm:text-3xl font-extrabold text-[#ffffff] leading-tight mb-4">
                  {activeStudy.headline}
                </h3>

                <p className="font-['Inter'] text-sm sm:text-base text-[#dcdfe3] leading-relaxed mb-6">
                  {activeStudy.summary}
                </p>

                {/* Problem vs Solution Callout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="p-4 rounded-2xl bg-[#171c29]/70 border border-[rgba(220,223,227,0.12)]">
                    <span className="font-['Inter'] text-xs font-bold text-[#ee8733] uppercase block mb-1">
                      The Bottleneck
                    </span>
                    <p className="font-['Inter'] text-xs text-[#dcdfe3] leading-relaxed">
                      {activeStudy.problem}
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[rgba(238,135,51,0.1)] border border-[#ee8733]/30">
                    <span className="font-['Inter'] text-xs font-bold text-[#ee8733] uppercase block mb-1">
                      Engineering Solution
                    </span>
                    <p className="font-['Inter'] text-xs text-[#ffffff] font-medium leading-relaxed">
                      {activeStudy.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* 3 Metric Badges */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[rgba(220,223,227,0.12)]">
                {activeStudy.metrics.map((metric, mIdx) => (
                  <div key={mIdx} className="p-3.5 rounded-2xl bg-[#171c29]/50 border border-[rgba(220,223,227,0.12)] text-center">
                    <div className="font-['Inter'] text-2xl sm:text-3xl font-extrabold text-[#ee8733] leading-none mb-1">
                      {metric.value}
                    </div>
                    <div className="font-['Inter'] text-[11px] font-bold text-[#ffffff]">
                      {metric.label}
                    </div>
                    <div className="font-['Inter'] text-[10px] text-[#dcdfe3] mt-0.5">
                      {metric.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Execution Checklist, Tech Stack & Testimonial */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-[#171c29]/40 p-6 sm:p-8 rounded-2xl border border-[rgba(220,223,227,0.12)]">
              <div>
                <span className="font-['Inter'] text-xs font-bold text-[#ee8733] uppercase tracking-wider block mb-3">
                  Architectural Execution Plan:
                </span>
                <ul className="space-y-3 font-['Inter'] text-xs text-[#ffffff] font-semibold mb-6">
                  {activeStudy.strategy.map((item, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#ee8733] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <span className="font-['Inter'] text-xs font-bold text-[#dcdfe3] uppercase tracking-wider block mb-2">
                  Integrated Stack:
                </span>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {activeStudy.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-[#0c0e14] border border-[rgba(220,223,227,0.12)] text-[11px] font-['Inter'] font-semibold text-[#dcdfe3]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial Quote */}
              <div className="p-4 rounded-xl bg-[#0c0e14] border border-[rgba(220,223,227,0.12)] shadow-2xs">
                <Quote className="w-4 h-4 text-[#ee8733] mb-1.5" />
                <p className="font-['Inter'] text-xs text-[#dcdfe3] italic mb-2 leading-relaxed">
                  &ldquo;{activeStudy.quote}&rdquo;
                </p>
                <span className="font-['Inter'] text-[11px] font-bold text-[#ffffff]">
                  Verified Client Executive &bull; {activeStudy.category}
                </span>
              </div>

              <a
                href="https://calendar.app.google/gAb9osZfSYNnnoLa8"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-['Inter'] text-xs font-bold text-[#171c29] bg-[#ee8733] orange-glow hover:bg-[#ed8532] transition-all shadow-sm"
              >
                <span>Book Similar Strategy Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
