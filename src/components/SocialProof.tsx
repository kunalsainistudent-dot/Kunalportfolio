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
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

/**
 * Ported & adapted from:
 * 1. Vontext Webpage Templates (templates/landing/pirsch - Data-driven analytics stats cards)
 * 2. Launch UI (components/sections/stats/default.tsx - Stats grid architecture)
 * Inherits brand tokens: #171c29 canvas, #0c0e14 cards, #ee8733 accents, #ffffff/#dcdfe3 typography.
 */

const STATS = [
  {
    label: "Campaign Volume",
    value: "100+",
    color: "text-[#ee8733]",
    subtext: "Live algorithmic campaigns deployed across Real Estate, High-Ticket Lead Gen & eCommerce.",
    badge: "Verified Audit Trail",
    icon: ShieldCheck,
  },
  {
    label: "Portfolio Returns",
    value: "4.8x",
    color: "text-[#ffffff]",
    subtext: "Average High-Scale ROAS via hyper-segmented Paid Search & Meta Conversions API.",
    badge: "Granular Unit Economics",
    icon: BarChart3,
  },
  {
    label: "Efficiency Index",
    value: "85%",
    color: "text-[#ee8733]",
    subtext: "End-to-End manual workflows automated via 24/7 conversational AI agents and server sync.",
    badge: "Zero-Latency Lead Triage",
    icon: Zap,
  },
  {
    label: "Client Retention",
    value: "94%",
    color: "text-[#ffffff]",
    subtext: "Long-term partnership continuity sustained across multi-million dollar portfolio brands.",
    badge: "Dedicated Growth Desk",
    icon: Award,
  },
];

const VERTICALS = [
  {
    name: "Luxury Real Estate",
    icon: Building2,
    tag: "$14.2M Pipeline",
    description: "High-ticket buyer qualification with autonomous WhatsApp tours.",
  },
  {
    name: "D2C Apparel & Wellness",
    icon: ShoppingBag,
    tag: "4.4x Blended ROAS",
    description: "Psychological UGC matrix and frictionless mobile checkouts.",
  },
  {
    name: "B2B Enterprise SaaS",
    icon: Cloud,
    tag: "-68% Demo CPA",
    description: "High-intent search keyword dominance and interactive landers.",
  },
  {
    name: "High-Ticket Coaching",
    icon: GraduationCap,
    tag: "99.4% Scored Leads",
    description: "Multi-tier qualification funnels eliminating tire-kickers.",
  },
];

export default function SocialProof() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 lg:py-28">
      {/* Header with White + Orange Font Pair */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0c0e14] border-2 border-[#ee8733] text-[#ffffff] font-['Inter'] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[#ee8733]" />
          <span>PROVEN RESULTS ACROSS HIGH-STAKES VERTICALS</span>
        </div>
        <h2 className="font-['Inter'] text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#ffffff] tracking-tight leading-[1.1]">
          DATA-DRIVEN VALIDATION. <br />
          <span className="text-[#ee8733]">PROVEN RETURNS.</span>
        </h2>
        <p className="font-['Inter'] text-sm sm:text-base text-[#dcdfe3] max-w-2xl mt-4">
          Every ad dollar is accounted for with mathematical rigor, deterministic server-side attribution, and AI-driven efficiency.
        </p>
      </div>

      {/* 4 Stat Display Cards (Vontext Pirsch stats card pattern) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-16 w-full">
        {STATS.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-7 sm:p-8 rounded-3xl bg-[#0c0e14] border border-[rgba(220,223,227,0.12)] shadow-xs relative overflow-hidden flex flex-col justify-between group hover:border-[#ee8733] hover:shadow-[0_16px_40px_rgba(238,135,51,0.12)] transition-all duration-300"
            >
              <div className="flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-['Inter'] text-xs font-bold text-[#dcdfe3] uppercase tracking-wider">
                    {stat.label}
                  </span>
                  <div className="p-2 rounded-xl bg-[#171c29] text-[#ee8733] border border-[rgba(220,223,227,0.12)] group-hover:bg-[#ee8733] group-hover:text-[#171c29] transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div
                  className={`font-['Inter'] text-5xl lg:text-6xl font-extrabold ${stat.color} tracking-tight leading-none mb-4`}
                >
                  {stat.value}
                </div>
                <p className="font-['Inter'] text-xs font-medium text-[#dcdfe3] leading-relaxed mb-6">
                  {stat.subtext}
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(220,223,227,0.12)] flex items-center justify-between text-xs font-['Inter']">
                <span className="text-[#dcdfe3] font-bold">{stat.badge}</span>
                <span className="w-2 h-2 rounded-full bg-[#ee8733]"></span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* High-Stakes Verticals Grid */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#0c0e14] border border-[rgba(220,223,227,0.12)] shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[rgba(220,223,227,0.12)]">
          <div>
            <span className="font-['Inter'] text-xs font-bold text-[#ee8733] uppercase tracking-wider block mb-1">
              Sector Dominance
            </span>
            <h3 className="font-['Inter'] text-2xl font-bold text-[#ffffff]">
              Specialized Industry Playbooks
            </h3>
          </div>
          <a
            href="https://calendar.app.google/gAb9osZfSYNnnoLa8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-['Inter'] font-bold text-[#367cf1] hover:text-[#ee8733] transition-colors"
          >
            <span>Request Sector Case Breakdown</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VERTICALS.map((vert) => {
            const Icon = vert.icon;
            return (
              <div
                key={vert.name}
                className="p-5 rounded-2xl bg-[#171c29]/50 border border-[rgba(220,223,227,0.12)] flex flex-col justify-between hover:border-[#ee8733]/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-[#0c0e14] text-[#ee8733] border border-[rgba(220,223,227,0.12)]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-['Inter'] font-bold uppercase bg-[rgba(238,135,51,0.15)] text-[#ee8733] border border-[#ee8733]/30">
                      {vert.tag}
                    </span>
                  </div>
                  <h4 className="font-['Inter'] text-base font-bold text-[#ffffff] mb-1.5">
                    {vert.name}
                  </h4>
                  <p className="font-['Inter'] text-xs text-[#dcdfe3] leading-relaxed">
                    {vert.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
