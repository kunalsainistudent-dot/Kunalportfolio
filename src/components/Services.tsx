"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Megaphone,
  Bot,
  BrainCircuit,
  TrendingUp,
  CheckCircle2,
  Layers,
  ArrowRight,
  Sparkles,
  Zap,
  Activity,
  Cpu,
  ShieldCheck,
  Terminal,
  MessageSquare,
  BarChart3,
  Network,
} from "lucide-react";

/**
 * Ported & adapted from:
 * 1. Launch UI (components/sections/items/default.tsx - Bento Grid Architecture)
 * 2. Page UI (templates/landing-page-templates/template/gnomie-ai/bricks/3-product-tour.tsx - AI Product Tour)
 * Inherits brand tokens: #171c29 canvas, #0c0e14 cards, #ee8733 accents, #ffffff/#dcdfe3 typography.
 */

const AI_TOUR_STEPS = [
  {
    id: "step-1",
    tabTitle: "01. Autonomous Lead Triage",
    title: "Autonomous LLM Lead Qualification Agent",
    description:
      "Eliminate response latency. Our conversational AI agent interfaces with incoming paid traffic on WhatsApp & Web, scores buyer intent, and books verified high-value meetings 24/7.",
    stats: "2.4s Response Latency • 99.4% Qualification Accuracy",
    codePreview: {
      type: "whatsapp",
      messages: [
        { sender: "Lead", text: "Hi, I saw your ad on Meta about scaling our brand's acquisition." },
        { sender: "Kunal AI Agent", text: "Hey! Glad you reached out. To ensure we're the right fit, what is your current monthly ad spend across Meta and Google?" },
        { sender: "Lead", text: "Currently at $35,000/month, looking to break into $100k/mo without ROAS compression." },
        { sender: "Kunal AI Agent", text: "Verified: Enterprise Tier. Routing you directly to Kunal's priority calendar for a 1-on-1 architecture call...", highlight: true },
      ],
      status: "Lead Qualified • Tier A ($35k/mo) • Calendar Scheduled",
    },
  },
  {
    id: "step-2",
    tabTitle: "02. Offline Signal Sync",
    title: "Meta CAPI & Google Offline Conversion Engine",
    description:
      "Standard client-side pixels miss up to 35% of purchases due to ad-blockers and iOS restrictions. We feed high-value closed CRM deals directly back to Meta and Google algorithms via server webhooks.",
    stats: "+32% Signal Fidelity • Zero Ad-Spend Bleed",
    codePreview: {
      type: "terminal",
      lines: [
        "[webhook_listen] Receiving CRM stage_changed -> 'Contract Signed: $14,200'",
        "[capi_sync] Hashing user payload (SHA256: email, phone, ip_address)",
        "[capi_sync] Dispatching to Meta Conversions API (v20.0)... Status: 200 OK",
        "[google_enhanced] Dispatching Google Ads Enhanced Conversion... Synced",
        "[attribution_engine] ROAS adjusted dynamically: 4.8x -> 6.2x",
      ],
      status: "Server-side event confirmed: 100% Attribution Accuracy",
    },
  },
  {
    id: "step-3",
    tabTitle: "03. Creative Matrix",
    title: "Rapid-Iteration AI Creative Testing Matrix",
    description:
      "Ad fatigue kills scale. We deploy a systematic testing framework producing 30+ ad hooks weekly across 4 consumer psychological archetypes (FOMO, Greed, Social Proof, Risk Inversion).",
    stats: "30+ Weekly Angles • 72% Average 3s Hook Rate",
    codePreview: {
      type: "matrix",
      variants: [
        { angle: "Angle A: 'Stop Running The Same Ad'", hookRate: "78.4%", ctr: "3.8%", status: "Winner (Scaling)" },
        { angle: "Angle B: 'Agency Checks Once A Week'", hookRate: "69.2%", ctr: "2.9%", status: "Iterating" },
        { angle: "Angle C: '5 AI Repos For Growth'", hookRate: "82.1%", ctr: "4.4%", status: "Winner (Scaling)" },
      ],
      status: "Algorithmic budget reallocation directed to high-performing creatives",
    },
  },
  {
    id: "step-4",
    tabTitle: "04. Multi-Channel Recovery",
    title: "Zero-Dropoff Multi-Channel Nurture Workflows",
    description:
      "Recover high-intent abandoners without annoying spam. Automated cross-channel sequences re-engage warm prospects on WhatsApp, SMS, and Email tailored to their exact point of drop-off.",
    stats: "92.6% Recovery Rate • Sub-second trigger speed",
    codePreview: {
      type: "terminal",
      lines: [
        "[trigger] Checkout drop-off detected at Step 2 (Phone verified)",
        "[condition] No completed purchase within 8 minutes",
        "[dispatch] Sending WhatsApp personalized offer voucher with 1-click buy",
        "[customer_action] WhatsApp clicked -> payment completed via UPI",
        "[pipeline] Order confirmed: Drive access granted automatically",
      ],
      status: "Abandoned revenue successfully salvaged and attributed",
    },
  },
];

export default function Services() {
  const [activeTourIndex, setActiveTourIndex] = useState(0);
  const activeStep = AI_TOUR_STEPS[activeTourIndex];

  return (
    <section
      id="services"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 lg:py-28"
    >
      {/* Header with White + Orange Font Pair */}
      <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0c0e14] text-[#ffffff] border-2 border-[#ee8733] font-['Inter'] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
          <Layers className="w-3.5 h-3.5 text-[#ee8733]" />
          Full-Stack Acquisition Framework
        </div>
        <h2 className="font-['Inter'] text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#ffffff] tracking-tight max-w-4xl leading-[1.1]">
          PRECISION GROWTH ENGINES. <br />
          <span className="text-[#ee8733]">ENGINEERED FOR SCALE.</span>
        </h2>
        <p className="font-['Inter'] text-base sm:text-lg font-medium text-[#dcdfe3] max-w-2xl mt-4 leading-relaxed">
          Bespoke acquisition pipelines merging empirical media buying, behavioral
          psychology, and LLM automation.
        </p>
      </div>

      {/* 1. ASYMMETRIC SERVICES BENTO GRID (Ported from Launch UI Items & Bento Grid Pattern) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {/* Bento 1: Meta & Google Ads Funnels (Span 2 Columns on desktop) */}
        <div className="md:col-span-2 p-8 sm:p-10 rounded-3xl bg-[#0c0e14] border border-[rgba(220,223,227,0.12)] shadow-xs flex flex-col justify-between hover:border-[#ee8733] hover:shadow-[0_16px_40px_rgba(238,135,51,0.12)] transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="p-3.5 rounded-2xl bg-[rgba(238,135,51,0.15)] text-[#ee8733] border border-[#ee8733]/20">
                <Megaphone className="w-6 h-6" />
              </div>
              <span className="px-3.5 py-1 rounded-full text-xs font-['Inter'] font-bold uppercase tracking-wider bg-[rgba(238,135,51,0.15)] text-[#ee8733] border border-[#ee8733]/30">
                Core Engine • Scale &amp; Acquire
              </span>
            </div>

            <h3 className="font-['Inter'] text-2xl sm:text-3xl font-extrabold text-[#ffffff] mb-3">
              Meta &amp; Google Ads Algorithmic Funnels
            </h3>
            <p className="font-['Inter'] text-sm sm:text-base text-[#dcdfe3] leading-relaxed mb-6 max-w-2xl">
              High-converting paid acquisition and revenue scaling for eCommerce and Lead Gen.
              We build multi-tier retargeting architectures, Google Search intent dominance, and CAPI telemetry that feeds machine learning engines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 border-t border-[rgba(220,223,227,0.12)]">
            <div className="p-3.5 rounded-2xl bg-[#171c29]/70 border border-[rgba(220,223,227,0.12)]">
              <span className="font-['Inter'] text-xs font-bold text-[#ee8733] uppercase block mb-1">
                Multi-Tier Retargeting
              </span>
              <p className="text-xs text-[#dcdfe3]">Granular cold, warm &amp; VIP segmentation</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#171c29]/70 border border-[rgba(220,223,227,0.12)]">
              <span className="font-['Inter'] text-xs font-bold text-[#ffffff] uppercase block mb-1">
                Search &amp; PMax Dominance
              </span>
              <p className="text-xs text-[#dcdfe3]">High-intent commercial keyword capture</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#171c29]/70 border border-[rgba(220,223,227,0.12)]">
              <span className="font-['Inter'] text-xs font-bold text-[#ee8733] uppercase block mb-1">
                Meta CAPI &amp; Signals
              </span>
              <p className="text-xs text-[#dcdfe3]">Server-side sync eliminating data loss</p>
            </div>
          </div>
        </div>

        {/* Bento 2: Consumer & Marketing Psychology */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0c0e14] border border-[rgba(220,223,227,0.12)] shadow-xs flex flex-col justify-between hover:border-[#ee8733] hover:shadow-[0_16px_40px_rgba(238,135,51,0.12)] transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="p-3.5 rounded-2xl bg-[rgba(238,135,51,0.15)] text-[#ee8733] border border-[#ee8733]/20">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <span className="px-3.5 py-1 rounded-full text-xs font-['Inter'] font-bold uppercase tracking-wider bg-[rgba(238,135,51,0.15)] text-[#ee8733] border border-[#ee8733]/30">
                Creative Strategy
              </span>
            </div>

            <h3 className="font-['Inter'] text-2xl font-extrabold text-[#ffffff] mb-3">
              Consumer Psychology &amp; Creative Strategy
            </h3>
            <p className="font-['Inter'] text-sm sm:text-base text-[#dcdfe3] leading-relaxed mb-6">
              Deconstructing buying behavior to craft high-CTR video angles and objection destruction frameworks that convert cold skeptics into eager buyers.
            </p>
          </div>

          <ul className="space-y-2.5 pt-4 border-t border-[rgba(220,223,227,0.12)]">
            <li className="flex items-center gap-2 text-xs font-['Inter'] font-semibold text-[#ffffff]">
              <CheckCircle2 className="w-4 h-4 text-[#ee8733] shrink-0" />
              <span>3-second hook rate &amp; retention optimization</span>
            </li>
            <li className="flex items-center gap-2 text-xs font-['Inter'] font-semibold text-[#ffffff]">
              <CheckCircle2 className="w-4 h-4 text-[#ee8733] shrink-0" />
              <span>Cognitive bias &amp; risk-reversal scripting</span>
            </li>
            <li className="flex items-center gap-2 text-xs font-['Inter'] font-semibold text-[#ffffff]">
              <CheckCircle2 className="w-4 h-4 text-[#ee8733] shrink-0" />
              <span>High-velocity UGC iteration matrix</span>
            </li>
          </ul>
        </div>

        {/* Bento 3: CRO & Growth Funnels */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0c0e14] border border-[rgba(220,223,227,0.12)] shadow-xs flex flex-col justify-between hover:border-[#ee8733] hover:shadow-[0_16px_40px_rgba(238,135,51,0.12)] transition-all duration-300">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="p-3.5 rounded-2xl bg-[rgba(238,135,51,0.15)] text-[#ee8733] border border-[#ee8733]/20">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="px-3.5 py-1 rounded-full text-xs font-['Inter'] font-bold uppercase tracking-wider bg-[rgba(238,135,51,0.15)] text-[#ee8733] border border-[#ee8733]/30">
                ROAS Maximizer
              </span>
            </div>

            <h3 className="font-['Inter'] text-2xl font-extrabold text-[#ffffff] mb-3">
              CRO &amp; Frictionless Funnels
            </h3>
            <p className="font-['Inter'] text-sm sm:text-base text-[#dcdfe3] leading-relaxed mb-6">
              Auditing every click from impression to post-purchase upsell. We eliminate drop-offs and build lightning-fast mobile checkouts.
            </p>
          </div>

          <ul className="space-y-2.5 pt-4 border-t border-[rgba(220,223,227,0.12)]">
            <li className="flex items-center gap-2 text-xs font-['Inter'] font-semibold text-[#ffffff]">
              <CheckCircle2 className="w-4 h-4 text-[#ee8733] shrink-0" />
              <span>Heatmap &amp; drop-off diagnostic analysis</span>
            </li>
            <li className="flex items-center gap-2 text-xs font-['Inter'] font-semibold text-[#ffffff]">
              <CheckCircle2 className="w-4 h-4 text-[#ee8733] shrink-0" />
              <span>Sub-second mobile landing page speed</span>
            </li>
            <li className="flex items-center gap-2 text-xs font-['Inter'] font-semibold text-[#ffffff]">
              <CheckCircle2 className="w-4 h-4 text-[#ee8733] shrink-0" />
              <span>Friction-free one-click upsells &amp; downsells</span>
            </li>
          </ul>
        </div>

        {/* Bento 4: Rate Card & Transparent Pricing Callout (Span 2 Columns on desktop) */}
        <div className="md:col-span-2 p-8 sm:p-10 rounded-3xl bg-[#0c0e14] border-2 border-[#ee8733] shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex flex-col text-center sm:text-left">
            <span className="font-['Inter'] text-xs font-bold text-[#ee8733] uppercase tracking-wider mb-1 flex items-center gap-1.5 justify-center sm:justify-start">
              <Sparkles className="w-3.5 h-3.5 text-[#ee8733]" />
              Official Service Rate Card
            </span>
            <h4 className="font-['Inter'] text-xl sm:text-2xl font-bold text-[#ffffff]">
              Transparent Retainer Packages &amp; Audits
            </h4>
            <p className="font-['Inter'] text-xs sm:text-sm text-[#dcdfe3] mt-1.5 max-w-xl">
              Lock in your project with a flexible 10% token deposit or full Razorpay checkout. Review our complete engagement catalog.
            </p>
          </div>
          <a
            href="/pricing"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-['Inter'] text-sm font-bold text-[#171c29] bg-[#ee8733] orange-glow hover:bg-[#ed8532] active:scale-95 transition-all shadow-md"
          >
            <span>View Pricing &amp; Packages</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>
      </div>

      {/* 2. DEDICATED AI SYSTEMS TOUR (Ported directly from Page UI Gnomie AI Product Tour Pattern) */}
      <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-[#0c0e14] border border-[rgba(220,223,227,0.12)] shadow-[0_16px_50px_rgba(0,0,0,0.5)]">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#171c29] border border-[#367cf1]/30 text-[#367cf1] font-['Inter'] text-xs font-bold uppercase tracking-wider mb-3">
            <Bot className="w-3.5 h-3.5 text-[#367cf1]" />
            Page UI Architectural Pattern &bull; AI Product Tour
          </div>
          <h3 className="font-['Inter'] text-3xl sm:text-4xl font-extrabold text-[#ffffff]">
            AUTONOMOUS REVENUE ARCHITECTURES. <br />
            <span className="text-[#ee8733]">POWERED BY PRODUCTION LLMS.</span>
          </h3>
          <p className="font-['Inter'] text-sm sm:text-base text-[#dcdfe3] max-w-2xl mt-3">
            Click through our 4-stage AI pipeline to see how autonomous workflows triage leads, feed closed signals back to ad platforms, and accelerate revenue without headcount.
          </p>
        </div>

        {/* Step Selector Tabs (Page UI Product Tour Tabs) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-8">
          {AI_TOUR_STEPS.map((step, idx) => (
            <button
              key={step.id}
              onClick={() => setActiveTourIndex(idx)}
              className={`p-3.5 rounded-2xl text-left transition-all duration-200 border ${
                activeTourIndex === idx
                  ? "bg-[rgba(238,135,51,0.15)] border-[#ee8733] shadow-xs text-[#ffffff]"
                  : "bg-[#171c29]/50 border-[rgba(220,223,227,0.12)] text-[#dcdfe3] hover:bg-[#171c29] hover:border-[#ee8733]/40"
              }`}
            >
              <span className={`text-[11px] font-['Inter'] font-bold uppercase block mb-1 ${
                activeTourIndex === idx ? "text-[#ee8733]" : "text-[#dcdfe3]"
              }`}>
                {step.tabTitle}
              </span>
              <span className="text-xs sm:text-sm font-semibold line-clamp-1">
                {step.title.split(" ")[0]} {step.title.split(" ")[1]}
              </span>
            </button>
          ))}
        </div>

        {/* Active Step Content (Split 2-Column Showcase) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
          {/* Left Column: Description & Metric Badges */}
          <div className="lg:col-span-5 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#171c29] border border-[rgba(220,223,227,0.12)] text-xs font-['Inter'] font-bold text-[#ee8733]">
              <Sparkles className="w-3.5 h-3.5 text-[#ee8733]" />
              <span>{activeStep.stats}</span>
            </div>

            <h4 className="font-['Inter'] text-2xl sm:text-3xl font-extrabold text-[#ffffff]">
              {activeStep.title}
            </h4>

            <p className="font-['Inter'] text-sm sm:text-base text-[#dcdfe3] leading-relaxed">
              {activeStep.description}
            </p>

            <div className="pt-2">
              <a
                href="https://calendar.app.google/gAb9osZfSYNnnoLa8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-['Inter'] text-xs sm:text-sm font-bold text-[#171c29] bg-[#ee8733] orange-glow hover:bg-[#ed8532] transition-all shadow-sm"
              >
                <span>Deploy this AI System in Your Business</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Live Interactive Telemetry Preview Window */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#08090d] text-[#ffffff] p-5 sm:p-6 shadow-xl border border-[rgba(220,223,227,0.12)] font-mono text-xs overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[rgba(220,223,227,0.12)]">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-[#ee8733]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#ed8532]"></span>
                  <span className="w-3 h-3 rounded-full bg-[rgba(220,223,227,0.3)]"></span>
                  <span className="ml-2 text-[#dcdfe3] text-[11px]">
                    kunalsaini.ai/workflow-engine
                  </span>
                </div>
                <span className="text-[10px] text-[#ee8733] font-bold uppercase tracking-wider bg-[rgba(238,135,51,0.15)] px-2 py-0.5 rounded border border-[#ee8733]/30">
                  Active Runtime
                </span>
              </div>

              {/* Dynamic View based on type */}
              {activeStep.codePreview.type === "whatsapp" && (
                <div className="space-y-3 font-sans text-xs">
                  {activeStep.codePreview.messages?.map((msg, mIdx) => (
                    <div
                      key={mIdx}
                      className={`flex flex-col max-w-[85%] p-3 rounded-xl ${
                        msg.sender === "Lead"
                          ? "bg-[#171c29] text-[#dcdfe3] self-start"
                          : msg.highlight
                          ? "bg-[#ee8733] text-[#171c29] self-end font-semibold shadow-md"
                          : "bg-[#0c0e14] text-[#ffffff] self-end border border-[rgba(220,223,227,0.12)]"
                      }`}
                    >
                      <span className="text-[10px] opacity-75 font-mono mb-1">{msg.sender}</span>
                      <span>{msg.text}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeStep.codePreview.type === "terminal" && (
                <div className="space-y-2 text-[#dcdfe3]">
                  {activeStep.codePreview.lines?.map((line, lIdx) => (
                    <div key={lIdx} className="flex items-start gap-2">
                      <span className="text-[#ee8733] select-none">&gt;</span>
                      <span className={line.includes("Synced") || line.includes("OK") ? "text-[#367cf1]" : ""}>
                        {line}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {activeStep.codePreview.type === "matrix" && (
                <div className="space-y-2.5 font-sans">
                  {activeStep.codePreview.variants?.map((v, vIdx) => (
                    <div
                      key={vIdx}
                      className="p-3 rounded-xl bg-[#171c29] border border-[rgba(220,223,227,0.12)] flex items-center justify-between text-xs"
                    >
                      <div>
                        <span className="text-[#ffffff] font-medium block">{v.angle}</span>
                        <span className="text-[#dcdfe3] text-[11px]">Hook Rate: {v.hookRate} &bull; CTR: {v.ctr}</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[rgba(238,135,51,0.15)] text-[#ee8733] border border-[#ee8733]/40">
                        {v.status}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Status footer bar */}
              <div className="mt-5 pt-3 border-t border-[rgba(220,223,227,0.12)] flex items-center justify-between text-[11px] text-[#dcdfe3]">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#367cf1] animate-pulse"></span>
                  {activeStep.codePreview.status}
                </span>
                <span className="text-[#dcdfe3] font-mono">v4.2-prod</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
