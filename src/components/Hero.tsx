"use client";

import React, { useState } from "react";
import {
  Calendar,
  Network,
  BadgeCheck,
  TrendingUp,
  Bot,
  ArrowUp,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  CreditCard,
  Layers,
  Zap,
  Activity,
  Workflow,
  Cpu,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

/**
 * Pulse Hero Section
 * - Two-column layout: text left, tilted glass window right
 * - Lead-qualification workflow with connector paths and flowing dots (HTML/CSS/SVG only)
 * - Subtle geometric grid background
 * - Responsive: stacks under 960px
 * - Pure brand.css variables (0 hardcoded hex colors)
 * - Animate only transform and opacity, respects prefers-reduced-motion
 */

export default function Hero() {
  const [activeWorkflowTab, setActiveWorkflowTab] = useState<"live" | "7d" | "30d">("live");

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 overflow-hidden">
      {/* 1. Subtle Grid Background Behind Hero (Pulse specification) */}
      <div className="pointer-events-none absolute inset-0 hero-grid-bg -z-10" />

      {/* 2. Brand Ambient Glows at 18% Opacity (Pulse specification) */}
      <div className="pointer-events-none absolute -top-20 left-1/4 w-[600px] h-[360px] bg-[var(--color-accent)] opacity-[0.18] blur-[150px] rounded-full -z-10" />
      <div className="pointer-events-none absolute top-1/2 right-10 w-[480px] h-[300px] bg-[var(--color-accent)] opacity-[0.12] blur-[140px] rounded-full -z-10" />

      {/* 3. Two-Column Layout (Responsive: Under 960px hero stacks per Pulse spec) */}
      <div className="grid grid-cols-1 min-[960px]:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Text & Content (min-[960px]:col-span-6 lg:col-span-7) */}
        <div className="min-[960px]:col-span-6 lg:col-span-7 flex flex-col items-start text-left">
          {/* Outlined Pill Badge */}
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-[var(--color-card-surface)] border-2 border-[var(--color-accent)] shadow-[0_4px_16px_var(--color-accent-glow)] mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]"></span>
              </span>
              <span className="font-['Inter'] text-xs font-extrabold text-[var(--color-text)] tracking-wider uppercase">
                PERFORMANCE MARKETING • CREATIVE STRATEGY
              </span>
            </div>
          </ScrollReveal>

          {/* Main Headline */}
          <ScrollReveal stagger={1}>
            <h1 className="font-['Inter'] text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--color-text)] leading-[1.08] mb-3 sm:mb-4">
              STOP RUNNING BLIND. <br />
              <span className="text-[var(--color-accent)]">
                SCALE WITH DATA &amp; AI.
              </span>
            </h1>
          </ScrollReveal>

          {/* Curved Swoosh Underline Accent */}
          <ScrollReveal stagger={2}>
            <div className="relative mb-6 sm:mb-7">
              <svg
                width="240"
                height="14"
                viewBox="0 0 240 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[var(--color-accent)] w-44 sm:w-56"
              >
                <path
                  d="M2 11C65 3 175 3 238 11"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </ScrollReveal>

          {/* Subheadline Copy */}
          <ScrollReveal stagger={3}>
            <p className="font-['Inter'] text-base sm:text-lg lg:text-xl font-medium text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-2xl">
              Helping visionary founders acquire high-intent buyers and compound eCommerce
              revenue with <span className="font-bold text-[var(--color-text)]">100+ algorithmic ad campaigns</span> across Meta &amp; Google.
            </p>
          </ScrollReveal>

          {/* Dual / Triple CTA Buttons */}
          <ScrollReveal stagger={4}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-10">
              <a
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-['Inter'] text-sm sm:text-base font-bold text-[var(--color-bg)] bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] active:scale-95 transition-all shadow-[0_4px_20px_var(--color-accent-glow)] text-center"
              >
                <span>View Pricing &amp; Book</span>
                <CreditCard className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href="https://calendar.app.google/gAb9osZfSYNnnoLa8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-['Inter'] text-sm sm:text-base font-bold text-[var(--color-text)] bg-[var(--color-card-surface)] border-2 border-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-bg)] active:scale-95 transition-all shadow-xs text-center"
              >
                <span>Book Strategy Call</span>
                <Calendar className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-['Inter'] text-sm font-semibold text-[var(--color-text-secondary)] bg-[var(--color-card-surface)] border border-[var(--color-border)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg)] transition-all text-center"
              >
                <span>Explore AI Workflows</span>
                <Network className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>

          {/* Trust & Verification Band */}
          <ScrollReveal stagger={5}>
            <div className="flex flex-wrap items-center gap-y-2.5 gap-x-4 sm:gap-x-6 py-2.5 px-4 sm:px-6 rounded-full bg-[var(--color-card-surface)] border border-[var(--color-border)] shadow-xs">
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-[var(--color-accent)]" />
                <span className="font-['Inter'] text-xs sm:text-sm font-bold text-[var(--color-text)]">
                  100+ Campaigns Managed
                </span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] hidden sm:inline-block"></span>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[var(--color-accent)]" />
                <span className="font-['Inter'] text-xs sm:text-sm font-bold text-[var(--color-text)]">
                  Lead Generation &amp; eCommerce
                </span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] hidden sm:inline-block"></span>
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-[var(--color-accent)]" />
                <span className="font-['Inter'] text-xs sm:text-sm font-bold text-[var(--color-text)]">
                  Marketing Psychology &amp; AI Systems
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Tilted Glass Window Showing Lead-Qualification Workflow (min-[960px]:col-span-6 lg:col-span-5) */}
        <div className="min-[960px]:col-span-6 lg:col-span-5 w-full">
          <ScrollReveal stagger={2}>
            <div className="hero-tilted-window w-full rounded-3xl bg-[var(--color-glass-window)] backdrop-blur-2xl border border-[var(--color-border)] shadow-[0_24px_60px_rgba(0,0,0,0.65)] overflow-hidden text-left relative">
              {/* Window Header Chrome */}
              <div className="px-5 py-3.5 bg-[var(--color-bg-darkest)] border-b border-[var(--color-border)] flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-[var(--color-accent)]"></span>
                  <span className="w-3 h-3 rounded-full bg-[var(--color-accent-hover)] opacity-70"></span>
                  <span className="w-3 h-3 rounded-full bg-[var(--color-border)]"></span>
                  <span className="ml-2 font-mono text-[11px] font-medium text-[var(--color-text-secondary)]">
                    lead-qualification.workflow
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)]">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse"></span>
                  <span className="text-[10px] font-['Inter'] font-bold text-[var(--color-text)] uppercase tracking-wider">
                    Active Runtime
                  </span>
                </div>
              </div>

              {/* Window Body: Lead Qualification Workflow with Flowing Dots & Connector Paths */}
              <div className="p-5 sm:p-6 space-y-4">
                {/* Node 1: Inbound Lead Ingestion */}
                <div className="relative p-3.5 sm:p-4 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)]">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[var(--color-accent-subtle)] text-[var(--color-accent)] flex items-center justify-center">
                        <Activity className="w-4 h-4" />
                      </div>
                      <span className="font-['Inter'] text-xs font-bold text-[var(--color-text)]">
                        01. Inbound Traffic &amp; CAPI Trigger
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[var(--color-accent)] bg-[var(--color-accent-subtle)] px-2 py-0.5 rounded-full border border-[var(--color-accent-border-40)]">
                      Captured
                    </span>
                  </div>
                  <p className="font-['Inter'] text-[11px] text-[var(--color-text-secondary)] pl-9">
                    Meta Ads &bull; Google Search &bull; WhatsApp Webhook (SHA256 Encrypted)
                  </p>
                </div>

                {/* SVG Connector Path 1 with Flowing Dot */}
                <div className="relative h-6 flex items-center justify-center">
                  <svg className="w-full h-6" viewBox="0 0 300 24" fill="none">
                    <path
                      d="M150 0 L150 24"
                      stroke="var(--color-workflow-path)"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                  </svg>
                  {/* Flowing Animated Dot */}
                  <div
                    className="flowing-dot absolute w-2 h-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)]"
                    style={{ "--flow-x": "0px", "--flow-y": "20px" } as React.CSSProperties}
                  />
                </div>

                {/* Node 2: Autonomous LLM Qualification */}
                <div className="relative p-3.5 sm:p-4 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-accent-border-40)] shadow-[0_4px_20px_var(--color-accent-glow)]">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[var(--color-accent)] text-[var(--color-bg)] flex items-center justify-center font-bold">
                        <Bot className="w-4 h-4" />
                      </div>
                      <span className="font-['Inter'] text-xs font-bold text-[var(--color-text)]">
                        02. Autonomous LLM Intent Scoring
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[var(--color-bg)] bg-[var(--color-accent)] px-2 py-0.5 rounded-full">
                      Score: 94/100
                    </span>
                  </div>
                  <div className="font-mono text-[11px] text-[var(--color-text-secondary)] pl-9 space-y-1">
                    <div className="text-[var(--color-accent)]">&gt; Querying buyer liquidity &amp; monthly budget...</div>
                    <div className="text-[var(--color-text)] font-semibold">&gt; Verified: Enterprise Tier ($35,000/mo)</div>
                  </div>
                </div>

                {/* SVG Connector Path 2 with Flowing Dot */}
                <div className="relative h-6 flex items-center justify-center">
                  <svg className="w-full h-6" viewBox="0 0 300 24" fill="none">
                    <path
                      d="M150 0 L150 24"
                      stroke="var(--color-workflow-path)"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                    />
                  </svg>
                  {/* Flowing Animated Dot */}
                  <div
                    className="flowing-dot absolute w-2 h-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)]"
                    style={{ "--flow-x": "0px", "--flow-y": "20px", animationDelay: "1.2s" } as React.CSSProperties}
                  />
                </div>

                {/* Node 3: Autonomous Conversion Routing */}
                <div className="relative p-3.5 sm:p-4 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)]">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[var(--color-link-subtle)] text-[var(--color-link)] flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <span className="font-['Inter'] text-xs font-bold text-[var(--color-text)]">
                        03. Executive Calendar &amp; CRM Sync
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[var(--color-link)] bg-[var(--color-link-subtle)] px-2 py-0.5 rounded-full border border-[var(--color-link)]/30">
                      Auto-Booked
                    </span>
                  </div>
                  <p className="font-['Inter'] text-[11px] text-[var(--color-text-secondary)] pl-9">
                    Google Calendar slot reserved &bull; HubSpot stage updated &bull; Zero human latency
                  </p>
                </div>

                {/* Telemetry Stats Band inside Window */}
                <div className="pt-3 border-t border-[var(--color-border)] grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-xl bg-[var(--color-card-surface)] border border-[var(--color-border)]">
                    <span className="font-mono text-[10px] text-[var(--color-text-secondary)] block">ROAS</span>
                    <span className="font-['Inter'] text-sm sm:text-base font-extrabold text-[var(--color-accent)]">
                      4.8x
                    </span>
                  </div>
                  <div className="p-2 rounded-xl bg-[var(--color-card-surface)] border border-[var(--color-border)]">
                    <span className="font-mono text-[10px] text-[var(--color-text-secondary)] block">LATENCY</span>
                    <span className="font-['Inter'] text-sm sm:text-base font-extrabold text-[var(--color-text)]">
                      2.4s
                    </span>
                  </div>
                  <div className="p-2 rounded-xl bg-[var(--color-card-surface)] border border-[var(--color-border)]">
                    <span className="font-mono text-[10px] text-[var(--color-text-secondary)] block">ACCURACY</span>
                    <span className="font-['Inter'] text-sm sm:text-base font-extrabold text-[var(--color-accent)]">
                      99.4%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
