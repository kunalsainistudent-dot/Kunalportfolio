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
      {/* Ambient background glow layers (Burnt Orange, Deep Navy, Warm Amber) */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-[#ee8733]/15 blur-[150px] rounded-full -z-10" />
      <div className="pointer-events-none absolute top-48 left-1/2 -translate-x-1/2 w-[520px] h-[260px] bg-[#367cf1]/10 blur-[130px] rounded-full -z-10" />
      <div className="pointer-events-none absolute top-72 left-1/3 -translate-x-1/2 w-[420px] h-[200px] bg-[#3f1e15]/30 blur-[120px] rounded-full -z-10" />

      {/* Top Tagline Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#3f1e15]/70 border border-[#ee8733]/40 shadow-[0_0_24px_rgba(238,135,51,0.22)] mb-6"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ee8733] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ee8733] shadow-[0_0_8px_#ee8733]"></span>
        </span>
        <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#ffd4b2] tracking-widest uppercase">
          ⚡ PERFORMANCE MARKETING MEETS AI SYSTEMS
        </span>
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#ffffff] max-w-5xl leading-[1.1] mb-6"
      >
        Scaling Brands Through{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ee8733] via-[#ffaa66] to-[#ffffff]">
          Performance Ads
        </span>
        , Marketing Psychology &amp; AI Automation
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-['Inter'] text-lg sm:text-xl text-[#dcdfe3] max-w-3xl leading-relaxed mb-10"
      >
        Helping high-growth businesses acquire high-intent leads and scale eCommerce
        revenue with 100+ data-driven Meta &amp; Google ad campaigns.
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
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-['Plus_Jakarta_Sans'] text-base font-bold text-[#ffffff] bg-[#ee8733] orange-glow hover:bg-[#ff9747] hover:brightness-110 active:scale-95 transition-all duration-200 shadow-xl"
        >
          <span>View Pricing &amp; Book</span>
          <CreditCard className="w-4 h-4 stroke-[2.5]" />
        </a>
        <a
          href="https://calendar.app.google/gAb9osZfSYNnnoLa8"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-['Plus_Jakarta_Sans'] text-base font-semibold text-[#ffffff] bg-[#171c29]/90 border border-[#ee8733]/30 backdrop-blur-xl hover:border-[#ee8733] hover:text-[#ee8733] hover:bg-[#202738] transition-all duration-200"
        >
          <span>Book Strategy Call</span>
          <Calendar className="w-4 h-4 stroke-[2.5]" />
        </a>
        <a
          href="#services"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-['Plus_Jakarta_Sans'] text-base font-semibold text-[#dcdfe3] bg-transparent border border-white/10 hover:text-white hover:border-white/30 transition-all duration-200"
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
        className="flex flex-wrap items-center justify-center gap-y-3 gap-x-5 py-3 px-6 rounded-full bg-[#171c29]/80 border border-white/[0.08] backdrop-blur-md shadow-lg mb-16"
      >
        <div className="flex items-center gap-2">
          <BadgeCheck className="w-4 h-4 text-[#ee8733]" />
          <span className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-medium text-[#ffffff]">
            100+ Campaigns Managed
          </span>
        </div>
        <span className="w-1.5 h-1.5 rounded-full bg-[#ee8733] shadow-[0_0_6px_#ee8733]"></span>
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-[#367cf1]" />
          <span className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-medium text-[#ffffff]">
            Lead Generation &amp; eCommerce
          </span>
        </div>
        <span className="w-1.5 h-1.5 rounded-full bg-[#ee8733] shadow-[0_0_6px_#ee8733]"></span>
        <div className="flex items-center gap-2">
          <Bot className="w-4 h-4 text-[#ffaa66]" />
          <span className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-medium text-[#ffffff]">
            Marketing Psychology &amp; AI Systems
          </span>
        </div>
      </motion.div>

      {/* Live Telemetry Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="w-full max-w-4xl p-6 sm:p-8 rounded-2xl bg-[#171c29]/75 border border-white/[0.1] backdrop-blur-2xl shadow-[0_16px_50px_rgba(0,0,0,0.7)] flex flex-col gap-6 text-left relative overflow-hidden"
      >
        {/* Subtle accent border glow on top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ee8733] to-transparent opacity-80" />

        {/* Telemetry Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-white/[0.06]">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ee8733] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ee8733] shadow-[0_0_10px_#ee8733]"></span>
            </span>
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#ee8733] uppercase tracking-wider">
              Live Ad Network Telemetry
            </span>
            <span className="text-xs text-[#94A3B8] font-['Inter']">
              • 30-Day Aggregated Cohorts
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#232a3d] text-[#ee8733] font-['Plus_Jakarta_Sans'] text-xs font-semibold border border-[#ee8733]/30">
            <Database className="w-3.5 h-3.5 text-[#ee8733]" />
            <span>API Synced</span>
          </div>
        </div>

        {/* 3 Metric Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Metric 1 */}
          <div className="p-5 rounded-xl bg-[#0c0e14]/80 border border-white/[0.06] shadow-inner flex flex-col gap-1.5 hover:border-[#ee8733]/40 transition-colors">
            <div className="flex items-center justify-between">
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider">
                Average ROAS
              </span>
              <span className="text-[#ee8733] font-['Plus_Jakarta_Sans'] text-xs font-semibold flex items-center bg-[#ee8733]/15 px-2 py-0.5 rounded-full">
                <ArrowUp className="w-3 h-3 mr-0.5 stroke-[3]" /> +32.4% MoM
              </span>
            </div>
            <div className="font-['Space_Grotesk'] text-4xl font-bold text-[#ee8733] tracking-tight mt-1">
              +412%
            </div>
            <p className="font-['Inter'] text-xs text-[#94A3B8] mt-1">
              Blended cross-platform attribution
            </p>
          </div>

          {/* Metric 2 */}
          <div className="p-5 rounded-xl bg-[#0c0e14]/80 border border-white/[0.06] shadow-inner flex flex-col gap-1.5 hover:border-[#367cf1]/40 transition-colors">
            <div className="flex items-center justify-between">
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider">
                Ad Spend Scaled
              </span>
              <span className="text-[#367cf1] font-['Plus_Jakarta_Sans'] text-xs font-semibold flex items-center bg-[#367cf1]/20 px-2 py-0.5 rounded-full">
                <Activity className="w-3 h-3 mr-1" /> Meta • Google
              </span>
            </div>
            <div className="font-['Space_Grotesk'] text-4xl font-bold text-[#ffffff] tracking-tight mt-1">
              $2.4M+
            </div>
            <p className="font-['Inter'] text-xs text-[#94A3B8] mt-1">
              Zero unverified ad spend waste
            </p>
          </div>

          {/* Metric 3 */}
          <div className="p-5 rounded-xl bg-[#0c0e14]/80 border border-white/[0.06] shadow-inner flex flex-col gap-1.5 hover:border-[#ffaa66]/40 transition-colors">
            <div className="flex items-center justify-between">
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider">
                Lead Quality Index
              </span>
              <span className="text-[#ffaa66] font-['Plus_Jakarta_Sans'] text-xs font-semibold flex items-center bg-[#ffaa66]/15 px-2 py-0.5 rounded-full">
                <CheckCircle2 className="w-3 h-3 mr-0.5" /> AI Scored
              </span>
            </div>
            <div className="font-['Space_Grotesk'] text-4xl font-bold text-[#ffaa66] tracking-tight mt-1">
              99.4%
            </div>
            <p className="font-['Inter'] text-xs text-[#94A3B8] mt-1">
              Pre-qualified via conversational bots
            </p>
          </div>
        </div>

        {/* Live Sparkline Graph */}
        <div className="pt-2 flex flex-col gap-2">
          <div className="flex items-center justify-between font-['Plus_Jakarta_Sans'] text-[11px] font-semibold text-[#94A3B8] uppercase tracking-wider">
            <span>REAL-TIME SCALING TRAJECTORY (Meta CAPI &amp; Google Enhanced Conversions)</span>
            <span className="text-[#ee8733] flex items-center gap-1 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ee8733] animate-pulse"></span>
              Live Feed
            </span>
          </div>
          <div className="w-full h-16 bg-[#0c0e14]/90 rounded-xl p-2 flex items-end border border-white/[0.05] relative overflow-hidden">
            <svg
              className="w-full h-full text-[#ee8733]"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 700 60"
            >
              <defs>
                <linearGradient id="metricGlow" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#ee8733" stopOpacity="0.45" />
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
