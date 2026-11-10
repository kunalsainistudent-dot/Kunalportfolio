"use client";

import React from "react";
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
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20 lg:pt-36 lg:pb-32 flex flex-col items-center text-center">
      {/* Ambient background glow layers */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-[#ee8733]/12 blur-[150px] rounded-full -z-10" />
      <div className="pointer-events-none absolute top-48 left-1/2 -translate-x-1/2 w-[520px] h-[260px] bg-[#ff7a1a]/8 blur-[130px] rounded-full -z-10" />

      {/* Top Tagline Badge - styled exactly like the slide pill (border-2 border-orange, black font) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#ffffff] border-2 border-[#ee8733] shadow-[0_4px_16px_rgba(238,135,51,0.15)] mb-6"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ee8733] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ee8733]"></span>
        </span>
        <span className="font-['Plus_Jakarta_Sans'] text-xs font-extrabold text-[#0c0a09] tracking-wider uppercase">
          PERFORMANCE MARKETING • CREATIVE STRATEGY
        </span>
      </motion.div>

      {/* Main Headline - Black and Orange font pair sequence */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-['Space_Grotesk'] text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#0c0a09] max-w-5xl leading-[1.08] mb-6"
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
        className="relative -mt-2 mb-8 flex justify-center"
      >
        <svg
          width="260"
          height="16"
          viewBox="0 0 260 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#ee8733]"
        >
          <path
            d="M2 12C70 3 190 3 258 12"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Subheadline - High contrast warm charcoal */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="font-['Inter'] text-lg sm:text-xl font-medium text-[#44403c] max-w-3xl leading-relaxed mb-10"
      >
        Helping visionary founders acquire high-intent buyers and compound eCommerce
        revenue with <span className="font-bold text-[#0c0a09]">100+ algorithmic ad campaigns</span> across Meta &amp; Google.
      </motion.p>

      {/* Dual CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-14"
      >
        <a
          href="/pricing"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-['Plus_Jakarta_Sans'] text-base font-bold text-[#ffffff] bg-[#ee8733] orange-glow hover:bg-[#ff6a1a] active:scale-95 transition-all duration-200 shadow-xl"
        >
          <span>View Pricing &amp; Book</span>
          <CreditCard className="w-4 h-4 stroke-[2.5]" />
        </a>
        <a
          href="https://calendar.app.google/gAb9osZfSYNnnoLa8"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-['Plus_Jakarta_Sans'] text-base font-bold text-[#0c0a09] bg-[#ffffff] border-2 border-[#0c0a09] hover:bg-[#f7ece0] hover:border-[#ee8733] hover:text-[#ee8733] transition-all duration-200 shadow-sm"
        >
          <span>Book Strategy Call</span>
          <Calendar className="w-4 h-4 stroke-[2.5]" />
        </a>
        <a
          href="#services"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-['Plus_Jakarta_Sans'] text-base font-semibold text-[#57534e] bg-[#ffffff]/70 border border-[#eaddcf] hover:text-[#0c0a09] hover:bg-[#ffffff] transition-all duration-200"
        >
          <span>Explore AI Workflows</span>
          <Network className="w-4 h-4" />
        </a>
      </motion.div>

      {/* Trust & Proof Bar */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex flex-wrap items-center justify-center gap-y-3 gap-x-6 py-3.5 px-8 rounded-full bg-[#ffffff] border border-[#eaddcf] shadow-sm mb-16"
      >
        <div className="flex items-center gap-2">
          <BadgeCheck className="w-4 h-4 text-[#ee8733]" />
          <span className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-bold text-[#0c0a09]">
            100+ Campaigns Managed
          </span>
        </div>
        <span className="w-1.5 h-1.5 rounded-full bg-[#ee8733]"></span>
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-[#ee8733]" />
          <span className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-bold text-[#0c0a09]">
            Lead Generation &amp; eCommerce
          </span>
        </div>
        <span className="w-1.5 h-1.5 rounded-full bg-[#ee8733]"></span>
        <div className="flex items-center gap-2">
          <Bot className="w-4 h-4 text-[#ee8733]" />
          <span className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-bold text-[#0c0a09]">
            Marketing Psychology &amp; AI Systems
          </span>
        </div>
      </motion.div>

      {/* Live Telemetry Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="w-full max-w-4xl p-6 sm:p-8 rounded-3xl bg-[#ffffff] border border-[#eaddcf] shadow-[0_16px_50px_rgba(0,0,0,0.06)] flex flex-col gap-6 text-left relative overflow-hidden"
      >
        {/* Top Accent Orange Border */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#ee8733] to-transparent opacity-90" />

        {/* Telemetry Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#eaddcf]">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ee8733] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ee8733]"></span>
            </span>
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#0c0a09] uppercase tracking-wider">
              Live Ad Network Telemetry
            </span>
            <span className="text-xs text-[#78716c] font-['Inter']">
              • 30-Day Aggregated Cohorts
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fff2e6] text-[#ee8733] font-['Plus_Jakarta_Sans'] text-xs font-bold border border-[#ee8733]/30">
            <Database className="w-3.5 h-3.5 text-[#ee8733]" />
            <span>API Synced</span>
          </div>
        </div>

        {/* 3 Metric Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Metric 1 */}
          <div className="p-5 rounded-2xl bg-[#fcf2e8]/70 border border-[#eaddcf] shadow-sm flex flex-col gap-1.5 hover:border-[#ee8733]/50 transition-colors">
            <div className="flex items-center justify-between">
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#57534e] uppercase tracking-wider">
                Average ROAS
              </span>
              <span className="text-[#ee8733] font-['Plus_Jakarta_Sans'] text-xs font-bold flex items-center bg-[#ffffff] px-2 py-0.5 rounded-full border border-[#ee8733]/20 shadow-xs">
                <ArrowUp className="w-3 h-3 mr-0.5 stroke-[3]" /> +32.4% MoM
              </span>
            </div>
            <div className="font-['Space_Grotesk'] text-4xl font-extrabold text-[#ee8733] tracking-tight mt-1">
              +412%
            </div>
            <p className="font-['Inter'] text-xs text-[#57534e] mt-1">
              Blended cross-platform attribution
            </p>
          </div>

          {/* Metric 2 */}
          <div className="p-5 rounded-2xl bg-[#fcf2e8]/70 border border-[#eaddcf] shadow-sm flex flex-col gap-1.5 hover:border-[#ee8733]/50 transition-colors">
            <div className="flex items-center justify-between">
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#57534e] uppercase tracking-wider">
                Ad Spend Scaled
              </span>
              <span className="text-[#2563eb] font-['Plus_Jakarta_Sans'] text-xs font-bold flex items-center bg-[#ffffff] px-2 py-0.5 rounded-full border border-[#2563eb]/20 shadow-xs">
                <Activity className="w-3 h-3 mr-1" /> Meta • Google
              </span>
            </div>
            <div className="font-['Space_Grotesk'] text-4xl font-extrabold text-[#0c0a09] tracking-tight mt-1">
              $2.4M+
            </div>
            <p className="font-['Inter'] text-xs text-[#57534e] mt-1">
              Zero unverified ad spend waste
            </p>
          </div>

          {/* Metric 3 */}
          <div className="p-5 rounded-2xl bg-[#fcf2e8]/70 border border-[#eaddcf] shadow-sm flex flex-col gap-1.5 hover:border-[#ee8733]/50 transition-colors">
            <div className="flex items-center justify-between">
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#57534e] uppercase tracking-wider">
                Lead Quality Index
              </span>
              <span className="text-[#ee8733] font-['Plus_Jakarta_Sans'] text-xs font-bold flex items-center bg-[#ffffff] px-2 py-0.5 rounded-full border border-[#ee8733]/20 shadow-xs">
                <CheckCircle2 className="w-3 h-3 mr-0.5" /> AI Scored
              </span>
            </div>
            <div className="font-['Space_Grotesk'] text-4xl font-extrabold text-[#ee8733] tracking-tight mt-1">
              99.4%
            </div>
            <p className="font-['Inter'] text-xs text-[#57534e] mt-1">
              Pre-qualified via conversational bots
            </p>
          </div>
        </div>

        {/* Live Sparkline Graph */}
        <div className="pt-2 flex flex-col gap-2">
          <div className="flex items-center justify-between font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#57534e] uppercase tracking-wider">
            <span>REAL-TIME SCALING TRAJECTORY (Meta CAPI &amp; Google Enhanced Conversions)</span>
            <span className="text-[#ee8733] flex items-center gap-1 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ee8733] animate-pulse"></span>
              Live Feed
            </span>
          </div>
          <div className="w-full h-16 bg-[#fcf2e8] rounded-xl p-2 flex items-end border border-[#eaddcf] relative overflow-hidden">
            <svg
              className="w-full h-full text-[#ee8733]"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 700 60"
            >
              <defs>
                <linearGradient id="metricGlow" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#ee8733" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#ee8733" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              <path
                d="M0,50 Q40,45 80,38 T160,34 T240,42 T320,24 T400,28 T480,14 T560,18 T640,6 T700,2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              />
              <path
                d="M0,50 Q40,45 80,38 T160,34 T240,42 T320,24 T400,28 T480,14 T560,18 T640,6 T700,2 L700,60 L0,60 Z"
                fill="url(#metricGlow)"
              />
            </svg>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
