"use client";

import React from "react";
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
import PulseCard from "@/components/PulseCard";
import ScrollReveal from "@/components/ScrollReveal";

/**
 * Pulse Social Proof & Validation Architecture
 * - Feature cards with 6px lift, 40% accent border, cursor-following glow (18% orange)
 * - Responsive: Under 960px cards go to 1 column
 * - Pure brand.css variables (0 hardcoded hex colors)
 * - Retains all client stats, metrics, and copy
 */

const STATS = [
  {
    label: "Campaign Volume",
    value: "100+",
    accent: true,
    subtext: "Live algorithmic campaigns deployed across Real Estate, High-Ticket Lead Gen & eCommerce.",
    badge: "Verified Audit Trail",
    icon: ShieldCheck,
  },
  {
    label: "Portfolio Returns",
    value: "4.8x",
    accent: false,
    subtext: "Average High-Scale ROAS via hyper-segmented Paid Search & Meta Conversions API.",
    badge: "Granular Unit Economics",
    icon: BarChart3,
  },
  {
    label: "Efficiency Index",
    value: "85%",
    accent: true,
    subtext: "End-to-End manual workflows automated via 24/7 conversational AI agents and server sync.",
    badge: "Zero-Latency Lead Triage",
    icon: Zap,
  },
  {
    label: "Client Retention",
    value: "94%",
    accent: false,
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
      {/* Header */}
      <ScrollReveal className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--color-card-surface)] border-2 border-[var(--color-accent)] text-[var(--color-text)] font-['Inter'] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-[var(--color-accent)]" />
          <span>PROVEN RESULTS ACROSS HIGH-STAKES VERTICALS</span>
        </div>
        <h2 className="font-['Inter'] text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--color-text)] tracking-tight leading-[1.1]">
          DATA-DRIVEN VALIDATION. <br />
          <span className="text-[var(--color-accent)]">PROVEN RETURNS.</span>
        </h2>
        <p className="font-['Inter'] text-sm sm:text-base text-[var(--color-text-secondary)] max-w-2xl mt-4">
          Every ad dollar is accounted for with mathematical rigor, deterministic server-side attribution, and AI-driven efficiency.
        </p>
      </ScrollReveal>

      {/* 4 Stat Cards (Responsive: Under 960px 1 column per Pulse spec) */}
      <div className="grid grid-cols-1 min-[960px]:grid-cols-4 gap-5 sm:gap-6 mb-16 w-full">
        {STATS.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <ScrollReveal key={stat.label} stagger={(idx + 1) as 1 | 2 | 3 | 4}>
              <PulseCard className="p-7 sm:p-8 flex flex-col justify-between h-full">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-['Inter'] text-xs font-bold text-[var(--color-text-secondary)] uppercase tracking-wider">
                      {stat.label}
                    </span>
                    <div className="p-2 rounded-xl bg-[var(--color-bg)] text-[var(--color-accent)] border border-[var(--color-border)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-bg)] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div
                    className={`font-['Inter'] text-5xl lg:text-6xl font-extrabold tracking-tight leading-none mb-4 ${
                      stat.accent ? "text-[var(--color-accent)]" : "text-[var(--color-text)]"
                    }`}
                  >
                    {stat.value}
                  </div>
                  <p className="font-['Inter'] text-xs font-medium text-[var(--color-text-secondary)] leading-relaxed mb-6">
                    {stat.subtext}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between text-xs font-['Inter']">
                  <span className="text-[var(--color-text-secondary)] font-bold">{stat.badge}</span>
                  <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></span>
                </div>
              </PulseCard>
            </ScrollReveal>
          );
        })}
      </div>

      {/* High-Stakes Verticals Grid */}
      <ScrollReveal stagger={2}>
        <div className="p-8 sm:p-10 rounded-3xl bg-[var(--color-card-surface)] border border-[var(--color-border)] shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[var(--color-border)]">
            <div>
              <span className="font-['Inter'] text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider block mb-1">
                Sector Dominance
              </span>
              <h3 className="font-['Inter'] text-2xl font-bold text-[var(--color-text)]">
                Specialized Industry Playbooks
              </h3>
            </div>
            <a
              href="https://calendar.app.google/gAb9osZfSYNnnoLa8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-['Inter'] font-bold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
            >
              <span>Consult on Your Vertical</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Verticals 4-Column Grid (Responsive: Under 960px 1 column) */}
          <div className="grid grid-cols-1 min-[960px]:grid-cols-4 gap-4">
            {VERTICALS.map((vertical) => {
              const Icon = vertical.icon;
              return (
                <div
                  key={vertical.name}
                  className="p-5 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-[var(--color-accent-border-40)] transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-xl bg-[var(--color-card-surface)] text-[var(--color-accent)] border border-[var(--color-border)]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-mono font-bold text-[var(--color-accent)] bg-[var(--color-accent-subtle)] px-2 py-0.5 rounded-full border border-[var(--color-accent-border-40)]">
                        {vertical.tag}
                      </span>
                    </div>
                    <h4 className="font-['Inter'] text-sm font-bold text-[var(--color-text)] mb-1">
                      {vertical.name}
                    </h4>
                    <p className="font-['Inter'] text-xs text-[var(--color-text-secondary)] leading-relaxed">
                      {vertical.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
