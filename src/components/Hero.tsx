"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Network,
  BadgeCheck,
  TrendingUp,
  Bot,
  ArrowUpRight,
  ArrowUp,
  Activity,
  CheckCircle2,
  Database,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20 lg:pt-36 lg:pb-32 flex flex-col items-center text-center">
      {/* Ambient background glow layers */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[360px] bg-[#8A2BE2]/15 blur-[140px] rounded-full -z-10" />
      <div className="pointer-events-none absolute top-48 left-1/2 -translate-x-1/2 w-[460px] h-[240px] bg-[#00FF87]/10 blur-[110px] rounded-full -z-10" />

      {/* Top Tagline Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#7701d0]/15 border border-[#8A2BE2]/30 shadow-[0_0_24px_rgba(0,255,135,0.15)] mb-6"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF87] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF87] shadow-[0_0_8px_#00FF87]"></span>
        </span>
        <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#60ff98] tracking-widest uppercase">
          ⚡ PERFORMANCE MARKETING MEETS AI SYSTEMS
        </span>
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-['Space_Grotesk'] text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-[#dfe2ee] max-w-5xl leading-[1.1] mb-6"
      >
        Scaling Brands Through{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF87] via-[#f1ffef] to-[#dcb8ff]">
          Performance Ads
        </span>
        , Marketing Psychology &amp; AI Automation
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-['Inter'] text-lg sm:text-xl text-[#94A3B8] max-w-3xl leading-relaxed mb-10"
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
          href="#audit-form"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-['Plus_Jakarta_Sans'] text-base font-bold text-[#003919] bg-[#00FF87] emerald-glow hover:brightness-110 active:scale-95 transition-all duration-200"
        >
          <span>Book Strategy Call</span>
          <Calendar className="w-4 h-4 stroke-[2.5]" />
        </a>
        <a
          href="#services"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-['Plus_Jakarta_Sans'] text-base font-semibold text-[#dfe2ee] bg-[#262a33]/60 border border-white/10 backdrop-blur-xl hover:bg-[#31353e] hover:text-[#00FF87] hover:border-[#00FF87]/40 shadow-[0_0_24px_rgba(119,1,208,0.2)] transition-all duration-200"
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
        className="flex flex-wrap items-center justify-center gap-y-3 gap-x-5 py-3 px-6 rounded-full bg-[#0a0e16]/85 border border-white/[0.08] backdrop-blur-md shadow-lg mb-16"
      >
        <div className="flex items-center gap-2">
          <BadgeCheck className="w-4 h-4 text-[#00FF87]" />
          <span className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-medium text-[#dfe2ee]">
            100+ Campaigns Managed
          </span>
        </div>
        <span className="w-1.5 h-1.5 rounded-full bg-[#00FF87] shadow-[0_0_6px_#00ff87]"></span>
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-[#dcb8ff]" />
          <span className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-medium text-[#dfe2ee]">
            Lead Generation &amp; eCommerce
          </span>
        </div>
        <span className="w-1.5 h-1.5 rounded-full bg-[#00FF87] shadow-[0_0_6px_#00ff87]"></span>
        <div className="flex items-center gap-2">
          <Bot className="w-4 h-4 text-[#60efff]" />
          <span className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-medium text-[#dfe2ee]">
            Marketing Psychology &amp; AI Systems
          </span>
        </div>
      </motion.div>

      {/* Live Telemetry Glass Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="w-full max-w-4xl p-6 sm:p-8 rounded-2xl bg-[#1c2028]/60 border border-white/[0.1] backdrop-blur-2xl shadow-[0_16px_50px_rgba(0,0,0,0.7)] flex flex-col gap-6 text-left relative overflow-hidden"
      >
        {/* Subtle accent border glow on top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00FF87] to-transparent opacity-60" />

        {/* Telemetry Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-2 border-b border-white/[0.06]">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF87] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00FF87] shadow-[0_0_10px_#00ff87]"></span>
            </span>
            <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#60ff98] uppercase tracking-wider">
              Live Ad Network Telemetry
            </span>
            <span className="text-xs text-[#94A3B8] font-['Inter']">
              • 30-Day Aggregated Cohorts
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#31353e]/80 text-[#60ff98] font-['Plus_Jakarta_Sans'] text-xs font-semibold border border-[#00FF87]/20">
            <Database className="w-3.5 h-3.5 text-[#00FF87]" />
            <span>API Synced</span>
          </div>
        </div>

        {/* 3 Metric Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Metric 1 */}
          <div className="p-5 rounded-xl bg-[#0a0e16]/80 border border-white/[0.05] shadow-inner flex flex-col gap-1.5 hover:border-[#00FF87]/30 transition-colors">
            <div className="flex items-center justify-between">
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider">
                Average ROAS
              </span>
              <span className="text-[#00FF87] font-['Plus_Jakarta_Sans'] text-xs font-semibold flex items-center bg-[#00FF87]/10 px-2 py-0.5 rounded-full">
                <ArrowUp className="w-3 h-3 mr-0.5 stroke-[3]" /> +32.4% MoM
              </span>
            </div>
            <div className="font-['Space_Grotesk'] text-4xl font-bold text-[#00FF87] tracking-tight mt-1">
              +412%
            </div>
            <p className="font-['Inter'] text-xs text-[#94A3B8] mt-1">
              Blended cross-platform attribution
            </p>
          </div>

          {/* Metric 2 */}
          <div className="p-5 rounded-xl bg-[#0a0e16]/80 border border-white/[0.05] shadow-inner flex flex-col gap-1.5 hover:border-[#8A2BE2]/30 transition-colors">
            <div className="flex items-center justify-between">
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider">
                Ad Spend Scaled
              </span>
              <span className="text-[#dcb8ff] font-['Plus_Jakarta_Sans'] text-xs font-semibold flex items-center bg-[#7701d0]/20 px-2 py-0.5 rounded-full">
                <Activity className="w-3 h-3 mr-1" /> Meta • Google
              </span>
            </div>
            <div className="font-['Space_Grotesk'] text-4xl font-bold text-[#dfe2ee] tracking-tight mt-1">
              $2.4M+
            </div>
            <p className="font-['Inter'] text-xs text-[#94A3B8] mt-1">
              Zero unverified ad spend waste
            </p>
          </div>

          {/* Metric 3 */}
          <div className="p-5 rounded-xl bg-[#0a0e16]/80 border border-white/[0.05] shadow-inner flex flex-col gap-1.5 hover:border-[#60efff]/30 transition-colors">
            <div className="flex items-center justify-between">
              <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider">
                Lead Quality Index
              </span>
              <span className="text-[#60efff] font-['Plus_Jakarta_Sans'] text-xs font-semibold flex items-center bg-[#60efff]/15 px-2 py-0.5 rounded-full">
                <CheckCircle2 className="w-3 h-3 mr-0.5" /> AI Scored
              </span>
            </div>
            <div className="font-['Space_Grotesk'] text-4xl font-bold text-[#60efff] tracking-tight mt-1">
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
            <span className="text-[#00FF87] flex items-center gap-1 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF87] animate-pulse"></span>
              Live Feed
            </span>
          </div>
          <div className="w-full h-16 bg-[#0a0e16]/90 rounded-xl p-2 flex items-end border border-white/[0.05] relative overflow-hidden">
            <svg
              className="w-full h-full text-[#00FF87]"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 700 60"
            >
              <defs>
                <linearGradient id="metricGlow" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#00FF87" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#00FF87" stopOpacity="0.0" />
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
