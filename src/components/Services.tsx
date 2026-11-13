"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Megaphone,
  Bot,
  BrainCircuit,
  TrendingUp,
  CheckCircle2,
  Layers,
  ArrowRight,
  Sparkles,
  Network,
  Zap,
} from "lucide-react";
import PulseCard from "@/components/PulseCard";
import ScrollReveal from "@/components/ScrollReveal";

/**
 * Pulse Services & How It Works Architecture
 * - Feature cards with 6px hover lift, 40% accent border, cursor-following glow (18% orange)
 * - Horizontal "How It Works" steps joined by a line that draws on scroll
 * - Responsive: Under 960px cards go to 1 column
 * - Pure brand.css variables (0 hardcoded hex colors)
 * - Animate only transform and opacity, respects prefers-reduced-motion
 */

const AI_TOUR_STEPS = [
  {
    id: "step-1",
    stepNumber: "01",
    tabTitle: "01. Autonomous Lead Triage",
    title: "Autonomous LLM Lead Qualification Agent",
    description:
      "Eliminate response latency. Our conversational AI agent interfaces with incoming paid traffic on WhatsApp & Web, scores buyer intent, and books verified high-value meetings 24/7.",
    stats: "2.4s Response Latency • 99.4% Qualification Accuracy",
    codePreview: {
      type: "whatsapp",
      messages: [
        { sender: "Lead", text: "Hi, I saw your ad on Meta about scaling our brand's acquisition." },
        { sender: "Kunal AI Agent", text: "Hey! Glad you reached out. To ensure we're the right fit, what is your current monthly ad spend across Meta and Google?" },
        { sender: "Lead", text: "Currently at $35,000/month, looking to break into $100k/mo without ROAS compression." },
        { sender: "Kunal AI Agent", text: "Verified: Enterprise Tier. Routing you directly to Kunal's priority calendar for a 1-on-1 architecture call...", highlight: true },
      ],
      status: "Lead Qualified • Tier A ($35k/mo) • Calendar Scheduled",
    },
  },
  {
    id: "step-2",
    stepNumber: "02",
    tabTitle: "02. Offline Signal Sync",
    title: "Meta CAPI & Google Offline Conversion Engine",
    description:
      "Standard client-side pixels miss up to 35% of purchases due to ad-blockers and iOS restrictions. We feed high-value closed CRM deals directly back to Meta and Google algorithms via server webhooks.",
    stats: "+32% Signal Fidelity • Zero Ad-Spend Bleed",
    codePreview: {
      type: "terminal",
      lines: [
        "[webhook_listen] Receiving CRM stage_changed -> 'Contract Signed: $14,200'",
        "[capi_sync] Hashing user payload (SHA256: email, phone, ip_address)",
        "[capi_sync] Dispatching to Meta Conversions API (v20.0)... Status: 200 OK",
        "[google_enhanced] Dispatching Google Ads Enhanced Conversion... Synced",
        "[attribution_engine] ROAS adjusted dynamically: 4.8x -> 6.2x",
      ],
      status: "Server-side event confirmed: 100% Attribution Accuracy",
    },
  },
  {
    id: "step-3",
    stepNumber: "03",
    tabTitle: "03. Creative Matrix",
    title: "Rapid-Iteration AI Creative Testing Matrix",
    description:
      "Ad fatigue kills scale. We deploy a systematic testing framework producing 30+ ad hooks weekly across 4 consumer psychological archetypes (FOMO, Greed, Social Proof, Risk Inversion).",
    stats: "30+ Weekly Angles • 72% Average 3s Hook Rate",
    codePreview: {
      type: "matrix",
      variants: [
        { angle: "Angle A: 'Stop Running The Same Ad'", hookRate: "78.4%", ctr: "3.8%", status: "Winner (Scaling)" },
        { angle: "Angle B: 'Agency Checks Once A Week'", hookRate: "69.2%", ctr: "2.9%", status: "Iterating" },
        { angle: "Angle C: '5 AI Repos For Growth'", hookRate: "82.1%", ctr: "4.4%", status: "Winner (Scaling)" },
      ],
      status: "Algorithmic budget reallocation directed to high-performing creatives",
    },
  },
  {
    id: "step-4",
    stepNumber: "04",
    tabTitle: "04. Multi-Channel Recovery",
    title: "Zero-Dropoff Multi-Channel Nurture Workflows",
    description:
      "Recover high-intent abandoners without annoying spam. Automated cross-channel sequences re-engage warm prospects on WhatsApp, SMS, and Email tailored to their exact point of drop-off.",
    stats: "92.6% Recovery Rate • Sub-second trigger speed",
    codePreview: {
      type: "terminal",
      lines: [
        "[trigger] Checkout drop-off detected at Step 2 (Phone verified)",
        "[condition] No completed purchase within 8 minutes",
        "[dispatch] Sending WhatsApp personalized offer voucher with 1-click buy",
        "[customer_action] WhatsApp clicked -> payment completed via UPI",
        "[pipeline] Order confirmed: Drive access granted automatically",
      ],
      status: "Abandoned revenue successfully salvaged and attributed",
    },
  },
];

export default function Services() {
  const [activeTourIndex, setActiveTourIndex] = useState(0);
  const activeStep = AI_TOUR_STEPS[activeTourIndex];

  // Horizontal "How It Works" line draw on scroll
  const lineSectionRef = useRef<HTMLDivElement>(null);
  const [isLineDrawn, setIsLineDrawn] = useState(false);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsLineDrawn(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsLineDrawn(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentEl = lineSectionRef.current;
    if (currentEl) {
      observer.observe(currentEl);
    }

    return () => {
      if (currentEl) observer.unobserve(currentEl);
    };
  }, []);

  return (
    <section
      id="services"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 lg:py-28"
    >
      {/* Header */}
      <ScrollReveal className="flex flex-col items-center text-center mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--color-card-surface)] text-[var(--color-text)] border-2 border-[var(--color-accent)] font-['Inter'] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
          <Layers className="w-3.5 h-3.5 text-[var(--color-accent)]" />
          Full-Stack Acquisition Framework
        </div>
        <h2 className="font-['Inter'] text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--color-text)] tracking-tight max-w-4xl leading-[1.1]">
          PRECISION GROWTH ENGINES. <br />
          <span className="text-[var(--color-accent)]">ENGINEERED FOR SCALE.</span>
        </h2>
        <p className="font-['Inter'] text-base sm:text-lg font-medium text-[var(--color-text-secondary)] max-w-2xl mt-4 leading-relaxed">
          Bespoke acquisition pipelines merging empirical media buying, behavioral
          psychology, and LLM automation.
        </p>
      </ScrollReveal>

      {/* 1. PULSE FEATURE CARDS (Under 960px: 1 column per Pulse spec) */}
      <div className="grid grid-cols-1 min-[960px]:grid-cols-3 gap-6 mb-24">
        {/* Feature Card 1: Meta & Google Ads Funnels (Span 2 Columns on >=960px) */}
        <ScrollReveal stagger={1} className="min-[960px]:col-span-2">
          <PulseCard className="p-8 sm:p-10 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-[var(--color-accent-subtle)] text-[var(--color-accent)] border border-[var(--color-accent-border-40)]">
                  <Megaphone className="w-6 h-6" />
                </div>
                <span className="px-3.5 py-1 rounded-full text-xs font-['Inter'] font-bold uppercase tracking-wider bg-[var(--color-accent-subtle)] text-[var(--color-accent)] border border-[var(--color-accent-border-40)]">
                  Core Engine • Scale &amp; Acquire
                </span>
              </div>

              <h3 className="font-['Inter'] text-2xl sm:text-3xl font-extrabold text-[var(--color-text)] mb-3">
                Meta &amp; Google Ads Algorithmic Funnels
              </h3>
              <p className="font-['Inter'] text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed mb-6 max-w-2xl">
                High-converting paid acquisition and revenue scaling for eCommerce and Lead Gen.
                We build multi-tier retargeting architectures, Google Search intent dominance, and CAPI telemetry that feeds machine learning engines.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-6 border-t border-[var(--color-border)]">
              <div className="p-3.5 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)]">
                <span className="font-['Inter'] text-xs font-bold text-[var(--color-accent)] uppercase block mb-1">
                  Multi-Tier Retargeting
                </span>
                <p className="text-xs text-[var(--color-text-secondary)]">Granular cold, warm &amp; VIP segmentation</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)]">
                <span className="font-['Inter'] text-xs font-bold text-[var(--color-text)] uppercase block mb-1">
                  Search &amp; PMax Dominance
                </span>
                <p className="text-xs text-[var(--color-text-secondary)]">High-intent commercial keyword capture</p>
              </div>
              <div className="p-3.5 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)]">
                <span className="font-['Inter'] text-xs font-bold text-[var(--color-accent)] uppercase block mb-1">
                  Meta CAPI &amp; Signals
                </span>
                <p className="text-xs text-[var(--color-text-secondary)]">Server-side sync eliminating data loss</p>
              </div>
            </div>
          </PulseCard>
        </ScrollReveal>

        {/* Feature Card 2: Consumer & Marketing Psychology */}
        <ScrollReveal stagger={2}>
          <PulseCard className="p-8 sm:p-10 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-[var(--color-accent-subtle)] text-[var(--color-accent)] border border-[var(--color-accent-border-40)]">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <span className="px-3.5 py-1 rounded-full text-xs font-['Inter'] font-bold uppercase tracking-wider bg-[var(--color-accent-subtle)] text-[var(--color-accent)] border border-[var(--color-accent-border-40)]">
                  Creative Strategy
                </span>
              </div>

              <h3 className="font-['Inter'] text-2xl font-extrabold text-[var(--color-text)] mb-3">
                Consumer Psychology &amp; Creative Strategy
              </h3>
              <p className="font-['Inter'] text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                Deconstructing buying behavior to craft high-CTR video angles and objection destruction frameworks that convert cold skeptics into eager buyers.
              </p>
            </div>

            <ul className="space-y-2.5 pt-4 border-t border-[var(--color-border)]">
              <li className="flex items-center gap-2 text-xs font-['Inter'] font-semibold text-[var(--color-text)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                <span>3-second hook rate &amp; retention optimization</span>
              </li>
              <li className="flex items-center gap-2 text-xs font-['Inter'] font-semibold text-[var(--color-text)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                <span>Cognitive bias &amp; risk-reversal scripting</span>
              </li>
              <li className="flex items-center gap-2 text-xs font-['Inter'] font-semibold text-[var(--color-text)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                <span>High-velocity UGC iteration matrix</span>
              </li>
            </ul>
          </PulseCard>
        </ScrollReveal>

        {/* Feature Card 3: CRO & Growth Funnels */}
        <ScrollReveal stagger={3}>
          <PulseCard className="p-8 sm:p-10 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-[var(--color-accent-subtle)] text-[var(--color-accent)] border border-[var(--color-accent-border-40)]">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="px-3.5 py-1 rounded-full text-xs font-['Inter'] font-bold uppercase tracking-wider bg-[var(--color-accent-subtle)] text-[var(--color-accent)] border border-[var(--color-accent-border-40)]">
                  ROAS Maximizer
                </span>
              </div>

              <h3 className="font-['Inter'] text-2xl font-extrabold text-[var(--color-text)] mb-3">
                CRO &amp; Frictionless Funnels
              </h3>
              <p className="font-['Inter'] text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed mb-6">
                Auditing every click from impression to post-purchase upsell. We eliminate drop-offs and build lightning-fast mobile checkouts.
              </p>
            </div>

            <ul className="space-y-2.5 pt-4 border-t border-[var(--color-border)]">
              <li className="flex items-center gap-2 text-xs font-['Inter'] font-semibold text-[var(--color-text)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                <span>Heatmap &amp; drop-off diagnostic analysis</span>
              </li>
              <li className="flex items-center gap-2 text-xs font-['Inter'] font-semibold text-[var(--color-text)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                <span>Sub-second mobile landing page speed</span>
              </li>
              <li className="flex items-center gap-2 text-xs font-['Inter'] font-semibold text-[var(--color-text)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                <span>Friction-free one-click upsells &amp; downsells</span>
              </li>
            </ul>
          </PulseCard>
        </ScrollReveal>

        {/* Feature Card 4: Rate Card & Transparent Pricing Callout (Span 2 on >=960px) */}
        <ScrollReveal stagger={4} className="min-[960px]:col-span-2">
          <PulseCard highlight className="p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col text-center sm:text-left">
              <span className="font-['Inter'] text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider mb-1 flex items-center gap-1.5 justify-center sm:justify-start">
                <Sparkles className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                Official Service Rate Card
              </span>
              <h4 className="font-['Inter'] text-xl sm:text-2xl font-bold text-[var(--color-text)]">
                Transparent Retainer Packages &amp; Audits
              </h4>
              <p className="font-['Inter'] text-xs sm:text-sm text-[var(--color-text-secondary)] mt-1.5 max-w-xl">
                Lock in your project with a flexible 10% token deposit or full Razorpay checkout. Review our complete engagement catalog.
              </p>
            </div>
            <a
              href="/pricing"
              className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-['Inter'] text-sm font-bold text-[var(--color-bg)] bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] active:scale-95 transition-all shadow-[0_4px_16px_var(--color-accent-glow)]"
            >
              <span>View Pricing &amp; Packages</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </PulseCard>
        </ScrollReveal>
      </div>

      {/* 2. HORIZONTAL "HOW IT WORKS" STEPS JOINED BY A LINE THAT DRAWS ON SCROLL (Pulse specification) */}
      <div ref={lineSectionRef} className="mt-8 mb-24">
        <ScrollReveal className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-card-surface)] border border-[var(--color-border)] text-xs font-['Inter'] font-bold text-[var(--color-accent)] uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-[var(--color-accent)]" />
            Execution Architecture
          </div>
          <h3 className="font-['Inter'] text-3xl sm:text-4xl font-extrabold text-[var(--color-text)]">
            HOW IT WORKS. <span className="text-[var(--color-accent)]">STEP BY STEP.</span>
          </h3>
          <p className="font-['Inter'] text-sm sm:text-base text-[var(--color-text-secondary)] max-w-2xl mx-auto mt-2">
            The end-to-end framework transforming cold ad impressions into loyal high-LTV customers.
          </p>
        </ScrollReveal>

        {/* Steps Container with Joining Line (Desktop: horizontal, Under 960px: responsive stack) */}
        <div className="relative">
          {/* Horizontal Connecting Line (Draws on scroll via scaleX) */}
          <div className="hidden min-[960px]:block absolute top-7 left-12 right-12 h-[2px] bg-[var(--color-border)] z-0 overflow-hidden">
            <div
              className={`how-it-works-line h-full w-full bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent)] to-[var(--color-link)] ${
                isLineDrawn ? "is-drawn" : ""
              }`}
            />
          </div>

          {/* 4 Steps Grid (1 column under 960px, 4 columns on desktop) */}
          <div className="grid grid-cols-1 min-[960px]:grid-cols-4 gap-6 relative z-10">
            {AI_TOUR_STEPS.map((step, idx) => (
              <ScrollReveal key={step.id} stagger={(idx + 1) as 1 | 2 | 3 | 4}>
                <div
                  onClick={() => setActiveTourIndex(idx)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    activeTourIndex === idx
                      ? "bg-[var(--color-card-surface)] border-[var(--color-accent)] shadow-[0_12px_30px_var(--color-accent-glow)]"
                      : "bg-[var(--color-card-surface)] border-[var(--color-border)] hover:border-[var(--color-accent-border-40)]"
                  }`}
                >
                  {/* Step Header with Node Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-sm font-extrabold transition-all ${
                        activeTourIndex === idx
                          ? "bg-[var(--color-accent)] text-[var(--color-bg)] shadow-[0_0_12px_var(--color-accent)]"
                          : "bg-[var(--color-bg)] text-[var(--color-text)] border border-[var(--color-border)]"
                      }`}
                    >
                      {step.stepNumber}
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[var(--color-accent)]">
                      Stage 0{idx + 1}
                    </span>
                  </div>

                  <h4 className="font-['Inter'] text-base font-bold text-[var(--color-text)] mb-2">
                    {step.title.split(" ")[0]} {step.title.split(" ")[1]}
                  </h4>
                  <p className="font-['Inter'] text-xs text-[var(--color-text-secondary)] line-clamp-3 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-[var(--color-border)] flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[var(--color-accent)]">
                      {activeTourIndex === idx ? "Active View" : "Click to Inspect"}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--color-text-secondary)]" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* 3. DEDICATED LIVE RUNTIME PREVIEW (Inspect Active Step) */}
        <ScrollReveal stagger={2} className="mt-10">
          <div className="p-6 sm:p-8 rounded-3xl bg-[var(--color-card-surface)] border border-[var(--color-border)] shadow-xl">
            <div className="grid grid-cols-1 min-[960px]:grid-cols-12 gap-8 items-center">
              {/* Left Column: Description */}
              <div className="min-[960px]:col-span-5 space-y-4 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] text-xs font-['Inter'] font-bold text-[var(--color-accent)]">
                  <Sparkles className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  <span>{activeStep.stats}</span>
                </div>

                <h4 className="font-['Inter'] text-2xl font-extrabold text-[var(--color-text)]">
                  {activeStep.title}
                </h4>

                <p className="font-['Inter'] text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {activeStep.description}
                </p>

                <div className="pt-2">
                  <a
                    href="https://calendar.app.google/gAb9osZfSYNnnoLa8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-['Inter'] text-xs sm:text-sm font-bold text-[var(--color-bg)] bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] transition-all shadow-[0_4px_16px_var(--color-accent-glow)]"
                  >
                    <span>Deploy this AI System in Your Business</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </a>
                </div>
              </div>

              {/* Right Column: Live Telemetry Preview Window */}
              <div className="min-[960px]:col-span-7">
                <div className="rounded-2xl bg-[var(--color-bg-darkest)] text-[var(--color-text)] p-5 sm:p-6 shadow-xl border border-[var(--color-border)] font-mono text-xs overflow-hidden">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--color-border)]">
                    <div className="flex items-center space-x-2">
                      <span className="w-3 h-3 rounded-full bg-[var(--color-accent)]"></span>
                      <span className="w-3 h-3 rounded-full bg-[var(--color-accent-hover)] opacity-70"></span>
                      <span className="w-3 h-3 rounded-full bg-[var(--color-border)]"></span>
                      <span className="ml-2 text-[var(--color-text-secondary)] text-[11px]">
                        kunalsaini.ai/workflow-engine
                      </span>
                    </div>
                    <span className="text-[10px] text-[var(--color-accent)] font-bold uppercase tracking-wider bg-[var(--color-accent-subtle)] px-2 py-0.5 rounded border border-[var(--color-accent-border-40)]">
                      Active Runtime
                    </span>
                  </div>

                  {activeStep.codePreview.type === "whatsapp" && (
                    <div className="space-y-3 font-sans text-xs">
                      {activeStep.codePreview.messages?.map((msg, mIdx) => (
                        <div
                          key={mIdx}
                          className={`flex flex-col max-w-[85%] p-3 rounded-xl ${
                            msg.sender === "Lead"
                              ? "bg-[var(--color-bg)] text-[var(--color-text-secondary)] self-start"
                              : msg.highlight
                              ? "bg-[var(--color-accent)] text-[var(--color-bg)] self-end font-semibold shadow-md"
                              : "bg-[var(--color-card-surface)] text-[var(--color-text)] self-end border border-[var(--color-border)]"
                          }`}
                        >
                          <span className="text-[10px] opacity-75 font-mono mb-1">{msg.sender}</span>
                          <span>{msg.text}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeStep.codePreview.type === "terminal" && (
                    <div className="space-y-2 text-[var(--color-text-secondary)]">
                      {activeStep.codePreview.lines?.map((line, lIdx) => (
                        <div key={lIdx} className="flex items-start gap-2">
                          <span className="text-[var(--color-accent)] select-none">&gt;</span>
                          <span className={line.includes("Synced") || line.includes("OK") ? "text-[var(--color-link)]" : ""}>
                            {line}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeStep.codePreview.type === "matrix" && (
                    <div className="space-y-2.5 font-sans">
                      {activeStep.codePreview.variants?.map((v, vIdx) => (
                        <div
                          key={vIdx}
                          className="flex items-center justify-between p-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-xs"
                        >
                          <span className="font-semibold text-[var(--color-text)]">{v.angle}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-[var(--color-accent)] font-mono font-bold">{v.hookRate} Hook</span>
                            <span className="px-2 py-0.5 rounded bg-[var(--color-accent-subtle)] text-[var(--color-accent)] font-bold text-[10px]">
                              {v.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-4 pt-3 border-t border-[var(--color-border)] flex items-center justify-between text-[11px] text-[var(--color-text-secondary)] font-sans">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></span>
                      {activeStep.codePreview.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
