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
    color: "text-[#ee8733]",
    subtext: "Campaigns managed across Real Estate, Lead Gen & eCommerce.",
    badge: "Validated audit trail",
    icon: ShieldCheck,
    aura: "bg-[#ee8733]/15",
  },
  {
    label: "Portfolio Returns",
    value: "4.8x",
    color: "text-[#ffffff]",
    subtext: "Average High-Scale ROAS via hyper-segmented Paid Search & Meta.",
    badge: "Granular unit economics",
    icon: BarChart3,
    aura: "bg-[#3f1e15]/40",
  },
  {
    label: "Efficiency Index",
    value: "85%",
    color: "text-[#367cf1]",
    subtext: "End-to-End Operational Tasks Automated via AI Funnel Systems.",
    badge: "Zero-latency lead triage",
    icon: Zap,
    aura: "bg-[#367cf1]/15",
  },
  {
    label: "Client Retention",
    value: "94%",
    color: "text-[#ffaa66]",
    subtext: "Long-term growth partnership continuity across high-scale clients.",
    badge: "Dedicated engineering",
    icon: Award,
    aura: "bg-[#ee8733]/15",
  },
];

const VERTICALS = [
  { name: "Luxury Real Estate", icon: Building2, color: "text-[#ee8733]" },
  { name: "D2C Apparel & Wellness", icon: ShoppingBag, color: "text-[#ffffff]" },
  { name: "B2B Enterprise SaaS", icon: Cloud, color: "text-[#367cf1]" },
  { name: "High-Ticket Coaching", icon: GraduationCap, color: "text-[#ffaa66]" },
];

export default function SocialProof() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#ee8733] uppercase tracking-widest mb-3">
          PROVEN RESULTS ACROSS HIGH-STAKES VERTICALS
        </span>
        <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ffffff] tracking-tight">
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
              className="p-6 sm:p-7 rounded-2xl bg-[#171c29]/75 border border-white/[0.08] backdrop-blur-xl shadow-lg relative overflow-hidden flex flex-col justify-between group hover:border-[#ee8733]/40 transition-all duration-300"
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
                <p className="font-['Inter'] text-xs text-[#dcdfe3] leading-relaxed mb-6">
                  {stat.subtext}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-['Plus_Jakarta_Sans']">
                <span className="text-[#94A3B8] font-medium">{stat.badge}</span>
                <Icon className={`w-4 h-4 ${stat.color}`} />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Industry Verticals Bar */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.5 }}
        className="w-full p-4 sm:p-6 rounded-2xl bg-[#171c29]/50 border border-white/[0.06] backdrop-blur-md flex flex-wrap items-center justify-around gap-4"
      >
        <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
          Active Industry Deployments:
        </span>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {VERTICALS.map((vert) => {
            const Icon = vert.icon;
            return (
              <div
                key={vert.name}
                className="flex items-center gap-2 font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-semibold text-[#dcdfe3] hover:text-white transition-colors"
              >
                <Icon className={`w-4 h-4 ${vert.color}`} />
                <span>{vert.name}</span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
