"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  BarChart3,
  Zap,
  Award,
  Building2,
  ShoppingBag,
  Cloud,
  GraduationCap,
} from "lucide-react";

const STATS = [
  {
    label: "Campaign Volume",
    value: "100+",
    color: "text-[#00FF87]",
    subtext: "Campaigns managed across Real Estate, Lead Gen & eCommerce.",
    badge: "Validated audit trail",
    icon: ShieldCheck,
    aura: "bg-[#00FF87]/10",
  },
  {
    label: "Portfolio Returns",
    value: "4.8x",
    color: "text-[#dcb8ff]",
    subtext: "Average High-Scale ROAS via hyper-segmented Paid Search & Meta.",
    badge: "Granular unit economics",
    icon: BarChart3,
    aura: "bg-[#8A2BE2]/15",
  },
  {
    label: "Efficiency Index",
    value: "85%",
    color: "text-[#60efff]",
    subtext: "End-to-End Operational Tasks Automated via AI Funnel Systems.",
    badge: "Zero-latency lead triage",
    icon: Zap,
    aura: "bg-[#60efff]/10",
  },
  {
    label: "Client Retention",
    value: "94%",
    color: "text-[#60ff98]",
    subtext: "Long-term growth partnership continuity across high-scale clients.",
    badge: "Dedicated engineering",
    icon: Award,
    aura: "bg-[#00FF87]/10",
  },
];

const VERTICALS = [
  { name: "Luxury Real Estate", icon: Building2, color: "text-[#00FF87]" },
  { name: "D2C Apparel & Wellness", icon: ShoppingBag, color: "text-[#dcb8ff]" },
  { name: "B2B Enterprise SaaS", icon: Cloud, color: "text-[#60efff]" },
  { name: "High-Ticket Coaching", icon: GraduationCap, color: "text-[#60ff98]" },
];

export default function SocialProof() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#60ff98] uppercase tracking-widest mb-3">
          PROVEN RESULTS ACROSS HIGH-STAKES VERTICALS
        </span>
        <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#dfe2ee] tracking-tight">
          DATA-DRIVEN VALIDATION
        </h2>
      </div>

      {/* 4 Stat Display Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 w-full">
        {STATS.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl bg-[#1c2028]/60 border border-white/[0.08] backdrop-blur-xl shadow-lg relative overflow-hidden flex flex-col justify-between group hover:border-white/20 transition-all duration-300"
            >
              {/* Top ambient glow */}
              <div
                className={`absolute -top-12 -right-12 w-32 h-32 ${stat.aura} blur-[40px] rounded-full pointer-events-none`}
              />

              <div className="flex flex-col">
                <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#94A3B8] uppercase tracking-wider mb-2">
                  {stat.label}
                </span>
                <div
                  className={`font-['Space_Grotesk'] text-5xl lg:text-6xl font-bold ${stat.color} tracking-tight leading-none mb-4`}
                >
                  {stat.value}
                </div>
                <p className="font-['Inter'] text-xs sm:text-sm text-[#dfe2ee] leading-relaxed">
                  {stat.subtext}
                </p>
              </div>

              {/* Bottom tag */}
              <div className="mt-6 pt-3 border-t border-white/[0.06] bg-[#0a0e16]/60 rounded-lg px-3 py-2 flex items-center gap-2 text-[#94A3B8] font-['Inter'] text-xs">
                <Icon className={`w-4 h-4 ${stat.color} shrink-0`} />
                <span>{stat.badge}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Specialized Verticals Ribbon */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="p-6 rounded-2xl bg-[#0a0e16]/80 border border-white/[0.08] backdrop-blur-md shadow-lg flex flex-col lg:flex-row items-center justify-between gap-6 w-full"
      >
        <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#94A3B8] uppercase tracking-wider shrink-0">
          Specialized Verticals:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 w-full lg:w-auto font-['Plus_Jakarta_Sans'] text-xs font-semibold text-[#dfe2ee]">
          {VERTICALS.map((vert) => {
            const VIcon = vert.icon;
            return (
              <div
                key={vert.name}
                className="px-5 py-2.5 rounded-full bg-[#1c2028] border border-white/[0.06] flex items-center justify-center gap-2.5 shadow-sm text-center hover:border-white/20 transition-colors"
              >
                <VIcon className={`w-4 h-4 ${vert.color}`} />
                <span>{vert.name}</span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
