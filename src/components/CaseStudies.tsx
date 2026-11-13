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
import PulseCard from "@/components/PulseCard";
import ScrollReveal from "@/components/ScrollReveal";

/**
 * Pulse Case Studies Architecture
 * - Feature cards with 6px hover lift, 40% accent border, cursor-following glow (18% orange)
 * - Responsive: Under 960px stacks to 1 column
 * - Pure brand.css variables (0 hardcoded hex colors)
 * - Retains all client case studies, statistics, and testimonials
 */

const CASE_STUDIES = [
  {
    id: "real-estate",
    category: "Luxury Real Estate",
    client: "PrimeEstates Luxury Living",
    icon: Building,
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
      {/* Background ambient lighting at 18% opacity */}
      <div className="pointer-events-none absolute top-1/2 left-1/3 w-[600px] h-[300px] bg-[var(--color-accent)] opacity-[0.10] blur-[140px] rounded-full -z-10" />

      {/* Header */}
      <ScrollReveal className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--color-card-surface)] border-2 border-[var(--color-accent)] text-[var(--color-text)] font-['Inter'] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[var(--color-accent)]" />
          <span>PROVEN IMPACT &bull; AUDITED PORTFOLIO RESULTS</span>
        </div>
        <h2 className="font-['Inter'] text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--color-text)] tracking-tight leading-[1.1]">
          SYSTEMIC BREAKTHROUGHS. <br />
          <span className="text-[var(--color-accent)]">VERIFIED ATTRIBUTION.</span>
        </h2>
        <p className="font-['Inter'] text-sm sm:text-base text-[var(--color-text-secondary)] max-w-2xl mt-4">
          Real client engagements with deterministic attribution, rigorous unit economics, and custom AI systems.
        </p>
      </ScrollReveal>

      {/* Case Study Category Tabs */}
      <ScrollReveal stagger={1} className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
        {CASE_STUDIES.map((study, idx) => (
          <button
            key={study.id}
            onClick={() => setActiveTab(idx)}
            className={`px-5 py-2.5 rounded-full font-['Inter'] text-xs sm:text-sm font-bold transition-all duration-200 border flex items-center gap-2 ${
              activeTab === idx
                ? "bg-[var(--color-accent)] text-[var(--color-bg)] border-[var(--color-accent)] shadow-[0_4px_16px_var(--color-accent-glow)]"
                : "bg-[var(--color-card-surface)] text-[var(--color-text-secondary)] border-[var(--color-border)] hover:border-[var(--color-accent-border-40)] hover:text-[var(--color-text)]"
            }`}
          >
            <span>{study.category}</span>
          </button>
        ))}
      </ScrollReveal>

      {/* Active Case Study Showcase (Responsive: Under 960px 1 column) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStudy.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
        >
          <PulseCard className="p-8 sm:p-12">
            <div className="grid grid-cols-1 min-[960px]:grid-cols-12 gap-8 lg:gap-12">
              {/* Left Column: Problem, Solution & Metrics */}
              <div className="min-[960px]:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-[var(--color-bg)] text-[var(--color-accent)] border border-[var(--color-border)]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-['Inter'] font-bold uppercase tracking-wider border border-[var(--color-accent-border-40)] bg-[var(--color-accent-subtle)] text-[var(--color-accent)]">
                      {activeStudy.client}
                    </span>
                  </div>

                  <h3 className="font-['Inter'] text-2xl sm:text-3xl font-extrabold text-[var(--color-text)] leading-tight mb-4">
                    {activeStudy.headline}
                  </h3>

                  <p className="font-['Inter'] text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                    {activeStudy.summary}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    <div className="p-4 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)]">
                      <span className="font-['Inter'] text-xs font-bold text-[var(--color-accent)] uppercase block mb-1">
                        The Bottleneck
                      </span>
                      <p className="font-['Inter'] text-xs text-[var(--color-text-secondary)] leading-relaxed">
                        {activeStudy.problem}
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-accent-border-40)]">
                      <span className="font-['Inter'] text-xs font-bold text-[var(--color-accent)] uppercase block mb-1">
                        Engineering Solution
                      </span>
                      <p className="font-['Inter'] text-xs text-[var(--color-text)] font-medium leading-relaxed">
                        {activeStudy.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3 Metric Cards */}
                <div className="grid grid-cols-3 gap-3 pt-6 border-t border-[var(--color-border)]">
                  {activeStudy.metrics.map((m, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] text-center">
                      <span className="text-[11px] font-['Inter'] font-bold text-[var(--color-text-secondary)] block mb-1">
                        {m.label}
                      </span>
                      <span className="font-['Inter'] text-xl sm:text-2xl font-extrabold text-[var(--color-accent)] block">
                        {m.value}
                      </span>
                      <span className="text-[10px] text-[var(--color-text-secondary)] truncate block">
                        {m.sub}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Execution Strategy & Testimonial Quote */}
              <div className="min-[960px]:col-span-5 flex flex-col justify-between space-y-6 pt-4 lg:pt-0 lg:border-l border-[var(--color-border)] lg:pl-10">
                <div>
                  <h4 className="font-['Inter'] text-xs font-bold uppercase tracking-wider text-[var(--color-accent)] mb-4 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    Key Architecture Deployed
                  </h4>
                  <ul className="space-y-3 mb-6">
                    {activeStudy.strategy.map((item, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--color-text)]">
                        <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {activeStudy.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-[11px] font-mono bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-secondary)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] relative">
                  <Quote className="w-6 h-6 text-[var(--color-accent)] opacity-40 absolute top-4 right-4" />
                  <p className="font-['Inter'] text-xs sm:text-sm italic text-[var(--color-text-secondary)] leading-relaxed mb-3">
                    &ldquo;{activeStudy.quote}&rdquo;
                  </p>
                  <span className="font-['Inter'] text-xs font-bold text-[var(--color-accent)] block">
                    &mdash; Executive Leadership, {activeStudy.client}
                  </span>
                </div>
              </div>
            </div>
          </PulseCard>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
