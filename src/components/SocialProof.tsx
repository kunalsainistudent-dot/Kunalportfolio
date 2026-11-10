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
  },
  {
    label: "Portfolio Returns",
    value: "4.8x",
    color: "text-[#0c0a09]",
    subtext: "Average High-Scale ROAS via hyper-segmented Paid Search & Meta.",
    badge: "Granular unit economics",
    icon: BarChart3,
  },
  {
    label: "Efficiency Index",
    value: "85%",
    color: "text-[#ee8733]",
    subtext: "End-to-End Operational Tasks Automated via AI Funnel Systems.",
    badge: "Zero-latency lead triage",
    icon: Zap,
  },
  {
    label: "Client Retention",
    value: "94%",
    color: "text-[#0c0a09]",
    subtext: "Long-term growth partnership continuity across high-scale clients.",
    badge: "Dedicated engineering",
    icon: Award,
  },
];

const VERTICALS = [
  { name: "Luxury Real Estate", icon: Building2, color: "text-[#ee8733]" },
  { name: "D2C Apparel & Wellness", icon: ShoppingBag, color: "text-[#0c0a09]" },
  { name: "B2B Enterprise SaaS", icon: Cloud, color: "text-[#ee8733]" },
  { name: "High-Ticket Coaching", icon: GraduationCap, color: "text-[#0c0a09]" },
];

export default function SocialProof() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28">
      {/* Header with Black + Orange Font Pair */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#ffffff] border-2 border-[#ee8733] text-[#0c0a09] font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
          <span>PROVEN RESULTS ACROSS HIGH-STAKES VERTICALS</span>
        </div>
        <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0c0a09] tracking-tight leading-[1.1]">
          DATA-DRIVEN VALIDATION. <br />
          <span className="text-[#ee8733]">PROVEN RETURNS.</span>
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
              className="p-7 rounded-3xl bg-[#ffffff] border border-[#eaddcf] shadow-sm relative overflow-hidden flex flex-col justify-between group hover:border-[#ee8733] hover:shadow-[0_16px_40px_rgba(238,135,51,0.12)] transition-all duration-300"
            >
              <div className="flex flex-col">
                <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#78716c] uppercase tracking-wider mb-2">
                  {stat.label}
                </span>
                <div
                  className={`font-['Space_Grotesk'] text-5xl lg:text-6xl font-extrabold ${stat.color} tracking-tight leading-none mb-4`}
                >
                  {stat.value}
                </div>
                <p className="font-['Inter'] text-xs font-medium text-[#57534e] leading-relaxed mb-6">
                  {stat.subtext}
                </p>
              </div>

              <div className="pt-4 border-t border-[#eaddcf] flex items-center justify-between text-xs font-['Plus_Jakarta_Sans']">
                <span className="text-[#78716c] font-bold">{stat.badge}</span>
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
        className="w-full p-5 sm:p-6 rounded-2xl bg-[#ffffff] border border-[#eaddcf] shadow-sm flex flex-wrap items-center justify-around gap-4"
      >
        <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider text-[#78716c]">
          Active Industry Deployments:
        </span>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {VERTICALS.map((vert) => {
            const Icon = vert.icon;
            return (
              <div
                key={vert.name}
                className="flex items-center gap-2 font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-bold text-[#0c0a09] hover:text-[#ee8733] transition-colors"
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
