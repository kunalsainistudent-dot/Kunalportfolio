"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Network,
  BadgeCheck,
  TrendingUp,
  Bot,
  ArrowUp,
  Activity,
  CheckCircle2,
  Database,
  CreditCard,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

/**
 * Ported & adapted from:
 * 1. Launch UI (components/sections/hero/default.tsx & components/ui/mockup.tsx)
 * 2. Vontext Webpage Templates (templates/landing/pirsch/src/components/Dashboard.tsx)
 * Inherits brand tokens: #fcf2e8 canvas, #ffffff cards, #ee8733 accents, bold black/orange font sequence.
 */

export default function Hero() {
  const [activeMetricTab, setActiveMetricTab] = useState<"30d" | "7d" | "live">("30d");

  // Telemetry chart bar mock data (inspired by Vontext Pirsch Dashboard chart)
  const chartBars = [
    { height: 42, label: "01" },
    { height: 55, label: "02" },
    { height: 48, label: "03" },
    { height: 68, label: "04" },
    { height: 62, label: "05" },
    { height: 80, label: "06" },
    { height: 74, label: "07" },
    { height: 92, label: "08" },
    { height: 85, label: "09" },
    { height: 96, label: "10" },
    { height: 88, label: "11" },
    { height: 100, label: "12" },
  ];

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-24 sm:pt-32 pb-16 sm:pb-24 flex flex-col items-center text-center">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-[#ee8733]/12 blur-[150px] rounded-full -z-10" />
      <div className="pointer-events-none absolute top-48 left-1/2 -translate-x-1/2 w-[520px] h-[260px] bg-[#ff7a1a]/8 blur-[130px] rounded-full -z-10" />

      {/* Outlined Pill Badge (Launch UI Badge + Brand Slide Style) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[#ffffff] border-2 border-[#ee8733] shadow-[0_4px_16px_rgba(238,135,51,0.15)] mb-6"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ee8733] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ee8733]"></span>
        </span>
        <span className="font-['Plus_Jakarta_Sans'] text-xs font-extrabold text-[#0c0a09] tracking-wider uppercase">
          PERFORMANCE MARKETING • CREATIVE STRATEGY
        </span>
      </motion.div>

      {/* Main Headline (High Contrast Black + Orange Sequence) */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-['Space_Grotesk'] text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0c0a09] max-w-5xl leading-[1.08] mb-4 sm:mb-6"
      >
        STOP RUNNING BLIND. <br className="hidden sm:inline" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5500] via-[#ee8733] to-[#ff7a1a]">
          SCALE WITH DATA &amp; AI.
        </span>
      </motion.h1>

      {/* Curved Swoosh Underline Accent */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative -mt-2 mb-6 sm:mb-8 flex justify-center"
      >
        <svg
          width="260"
          height="16"
          viewBox="0 0 260 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#ee8733] w-48 sm:w-64"
        >
          <path
            d="M2 12C70 3 190 3 258 12"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="font-['Inter'] text-base sm:text-xl font-medium text-[#44403c] max-w-3xl leading-relaxed mb-8 sm:mb-10 px-2"
      >
        Helping visionary founders acquire high-intent buyers and compound eCommerce
        revenue with <span className="font-bold text-[#0c0a09]">100+ algorithmic ad campaigns</span> across Meta &amp; Google.
      </motion.p>

      {/* Dual CTA Buttons (Launch UI LinkButton Pattern) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto mb-12 sm:mb-16"
      >
        <a
          href="/pricing"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full font-['Plus_Jakarta_Sans'] text-base font-bold text-[#ffffff] bg-[#ee8733] orange-glow hover:bg-[#ff6a1a] active:scale-95 transition-all duration-200 shadow-xl"
        >
          <span>View Pricing &amp; Book</span>
          <CreditCard className="w-4 h-4 stroke-[2.5]" />
        </a>
        <a
          href="https://calendar.app.google/gAb9osZfSYNnnoLa8"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-full font-['Plus_Jakarta_Sans'] text-base font-bold text-[#0c0a09] bg-[#ffffff] border-2 border-[#0c0a09] hover:bg-[#f7ece0] hover:border-[#ee8733] hover:text-[#ee8733] transition-all duration-200 shadow-xs"
        >
          <span>Book Strategy Call</span>
          <Calendar className="w-4 h-4 stroke-[2.5]" />
        </a>
        <a
          href="#services"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-4 rounded-full font-['Plus_Jakarta_Sans'] text-sm sm:text-base font-semibold text-[#57534e] bg-[#ffffff]/80 border border-[#eaddcf] hover:text-[#0c0a09] hover:bg-[#ffffff] transition-all duration-200"
        >
          <span>Explore AI Workflows</span>
          <Network className="w-4 h-4" />
        </a>
      </motion.div>

      {/* Trust & Verification Band */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-wrap items-center justify-center gap-y-2.5 gap-x-5 sm:gap-x-8 py-3 px-6 sm:px-8 rounded-full bg-[#ffffff] border border-[#eaddcf] shadow-xs mb-14 text-center"
      >
        <div className="flex items-center gap-2">
          <BadgeCheck className="w-4 h-4 text-[#ee8733]" />
          <span className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-bold text-[#0c0a09]">
            100+ Campaigns Managed
          </span>
        </div>
        <span className="w-1.5 h-1.5 rounded-full bg-[#ee8733] hidden sm:inline-block"></span>
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-[#ee8733]" />
          <span className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-bold text-[#0c0a09]">
            Lead Generation &amp; eCommerce
          </span>
        </div>
        <span className="w-1.5 h-1.5 rounded-full bg-[#ee8733] hidden sm:inline-block"></span>
        <div className="flex items-center gap-2">
          <Bot className="w-4 h-4 text-[#ee8733]" />
          <span className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-bold text-[#0c0a09]">
            Marketing Psychology &amp; AI Systems
          </span>
        </div>
      </motion.div>

      {/* HERO MOCKUP CONTAINER (Launch UI MockupFrame + Vontext Pirsch Dashboard) */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="w-full max-w-5xl rounded-3xl bg-[#ffffff] border border-[#eaddcf] shadow-[0_20px_60px_rgba(12,10,9,0.06)] overflow-hidden text-left relative"
      >
        {/* Top Accent Orange Border */}
        <div className="h-1 bg-gradient-to-r from-[#ff5500] via-[#ee8733] to-[#ff7a1a]" />

        {/* Dashboard Frame Header (Vontext & Launch UI Mockup Header) */}
        <div className="px-5 sm:px-8 py-4 bg-[#fcf2e8]/60 border-b border-[#eaddcf] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-[#ee8733]/80"></span>
            <span className="w-3 h-3 rounded-full bg-[#ffaa55]/70"></span>
            <span className="w-3 h-3 rounded-full bg-[#eaddcf]"></span>
            <span className="ml-3 font-mono text-xs font-medium text-[#78716c]">
              telemetry.digitalkunalsaini.com/live
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffffff] border border-[#eaddcf] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#ee8733] animate-pulse"></span>
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#0c0a09]">
                Meta CAPI &bull; Google Enhanced Sync
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-1 bg-[#ffffff] border border-[#eaddcf] rounded-lg p-0.5 text-xs font-['Plus_Jakarta_Sans'] font-semibold">
              <button
                onClick={() => setActiveMetricTab("30d")}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  activeMetricTab === "30d" ? "bg-[#ee8733] text-white" : "text-[#78716c] hover:text-[#0c0a09]"
                }`}
              >
                30D
              </button>
              <button
                onClick={() => setActiveMetricTab("7d")}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  activeMetricTab === "7d" ? "bg-[#ee8733] text-white" : "text-[#78716c] hover:text-[#0c0a09]"
                }`}
              >
                7D
              </button>
              <button
                onClick={() => setActiveMetricTab("live")}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  activeMetricTab === "live" ? "bg-[#ee8733] text-white" : "text-[#78716c] hover:text-[#0c0a09]"
                }`}
              >
                LIVE
              </button>
            </div>
          </div>
        </div>

        {/* Dashboard Inner Body */}
        <div className="p-5 sm:p-8 space-y-6">
          {/* 4-Stat Metric Cards Grid (Vontext Pirsch stats grid pattern) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <div className="p-4 sm:p-5 rounded-2xl bg-[#fcf2e8]/50 border border-[#eaddcf] shadow-2xs flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#78716c] uppercase tracking-wider">
                  Blended ROAS
                </span>
                <span className="text-[#ee8733] font-['Plus_Jakarta_Sans'] text-[11px] font-bold flex items-center bg-[#ffffff] px-2 py-0.5 rounded-full border border-[#ee8733]/20 shadow-2xs">
                  <ArrowUp className="w-3 h-3 mr-0.5 stroke-[3]" /> +32.4%
                </span>
              </div>
              <div className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-extrabold text-[#ee8733] tracking-tight">
                4.8x
              </div>
              <p className="font-['Inter'] text-xs text-[#78716c] mt-1">
                Cross-platform attribution
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#fcf2e8]/50 border border-[#eaddcf] shadow-2xs flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#78716c] uppercase tracking-wider">
                  Ad Spend Scaled
                </span>
                <span className="text-[#2563eb] font-['Plus_Jakarta_Sans'] text-[11px] font-bold flex items-center bg-[#ffffff] px-2 py-0.5 rounded-full border border-[#2563eb]/20 shadow-2xs">
                  <Activity className="w-3 h-3 mr-0.5" /> Meta &bull; Google
                </span>
              </div>
              <div className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-extrabold text-[#0c0a09] tracking-tight">
                $2.4M+
              </div>
              <p className="font-['Inter'] text-xs text-[#78716c] mt-1">
                Zero budget waste
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#fcf2e8]/50 border border-[#eaddcf] shadow-2xs flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#78716c] uppercase tracking-wider">
                  Lead Quality Index
                </span>
                <span className="text-[#ee8733] font-['Plus_Jakarta_Sans'] text-[11px] font-bold flex items-center bg-[#ffffff] px-2 py-0.5 rounded-full border border-[#ee8733]/20 shadow-2xs">
                  <CheckCircle2 className="w-3 h-3 mr-0.5" /> AI Scored
                </span>
              </div>
              <div className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-extrabold text-[#ee8733] tracking-tight">
                99.4%
              </div>
              <p className="font-['Inter'] text-xs text-[#78716c] mt-1">
                Pre-qualified via LLM
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#fcf2e8]/50 border border-[#eaddcf] shadow-2xs flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#78716c] uppercase tracking-wider">
                  Ops Automated
                </span>
                <span className="text-[#0c0a09] font-['Plus_Jakarta_Sans'] text-[11px] font-bold flex items-center bg-[#ffffff] px-2 py-0.5 rounded-full border border-[#eaddcf] shadow-2xs">
                  <Bot className="w-3 h-3 mr-0.5 text-[#ee8733]" /> 24/7 Agent
                </span>
              </div>
              <div className="font-['Space_Grotesk'] text-3xl sm:text-4xl font-extrabold text-[#0c0a09] tracking-tight">
                85%
              </div>
              <p className="font-['Inter'] text-xs text-[#78716c] mt-1">
                Instant CRM sync
              </p>
            </div>
          </div>

          {/* Interactive Chart Area (Vontext Pirsch Dashboard chart bars & sparkline) */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#fcf2e8]/40 border border-[#eaddcf]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ee8733]"></span>
                <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#0c0a09] uppercase tracking-wider">
                  Conversion &amp; Revenue Velocity
                </span>
              </div>
              <span className="text-xs text-[#78716c] font-['Inter']">
                Peak: +412% over historical baseline
              </span>
            </div>

            {/* Chart Graphic */}
            <div className="h-36 sm:h-44 w-full flex items-end justify-between gap-1.5 sm:gap-3 pt-4 border-b border-[#eaddcf]/80 pb-2">
              {chartBars.map((bar, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                  <div
                    className="w-full bg-gradient-to-t from-[#ee8733]/70 to-[#ee8733] rounded-t-md transition-all duration-300 group-hover:from-[#ff5500] group-hover:to-[#ff5500] group-hover:scale-y-105 origin-bottom relative"
                    style={{ height: `${bar.height}%` }}
                  >
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-8 left-1/2 -translate-x-1/2 bg-[#0c0a09] text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap pointer-events-none">
                      {bar.height * 14} conv
                    </div>
                  </div>
                  <span className="text-[10px] text-[#a8a29e] font-mono">{bar.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Breakdown Bands (Vontext Pirsch Top Referrers & Pages pattern) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#ffffff] border border-[#eaddcf] flex flex-col justify-between">
              <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#78716c] uppercase tracking-wider mb-2">
                Top Media Channels
              </span>
              <div className="space-y-1.5 text-xs font-['Inter']">
                <div className="flex justify-between items-center text-[#1c1917]">
                  <span className="font-semibold">Meta Ads (CAPI Integrated)</span>
                  <span className="font-mono font-bold text-[#ee8733]">54.2%</span>
                </div>
                <div className="flex justify-between items-center text-[#57534e]">
                  <span>Google High-Intent Search</span>
                  <span className="font-mono">31.8%</span>
                </div>
                <div className="flex justify-between items-center text-[#57534e]">
                  <span>YouTube Video Hooks</span>
                  <span className="font-mono">14.0%</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#ffffff] border border-[#eaddcf] flex flex-col justify-between">
              <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#78716c] uppercase tracking-wider mb-2">
                Conversion Latency
              </span>
              <div className="space-y-1.5 text-xs font-['Inter']">
                <div className="flex justify-between items-center text-[#1c1917]">
                  <span className="font-semibold">Lead to WhatsApp Triage</span>
                  <span className="font-mono font-bold text-[#ee8733]">&lt; 2.4s</span>
                </div>
                <div className="flex justify-between items-center text-[#57534e]">
                  <span>Offline CRM Signal Sync</span>
                  <span className="font-mono">Instant (Webhooks)</span>
                </div>
                <div className="flex justify-between items-center text-[#57534e]">
                  <span>Checkout Drop-off Recovery</span>
                  <span className="font-mono">92.6%</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#ffffff] border border-[#eaddcf] flex flex-col justify-between">
              <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#78716c] uppercase tracking-wider mb-2">
                Active Automation Stack
              </span>
              <div className="space-y-1.5 text-xs font-['Inter']">
                <div className="flex justify-between items-center text-[#1c1917]">
                  <span className="font-semibold">Autonomous SDR Agent</span>
                  <span className="font-mono font-bold text-[#2563eb]">Online</span>
                </div>
                <div className="flex justify-between items-center text-[#57534e]">
                  <span>Weekly Creative Matrix</span>
                  <span className="font-mono">30+ Angles/wk</span>
                </div>
                <div className="flex justify-between items-center text-[#57534e]">
                  <span>Fraud &amp; Bot Traffic Filter</span>
                  <span className="font-mono">Active (100%)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
