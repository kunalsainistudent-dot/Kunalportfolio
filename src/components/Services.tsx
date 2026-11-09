"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Megaphone,
  Bot,
  BrainCircuit,
  TrendingUp,
  CheckCircle2,
  Layers,
  ArrowRight,
} from "lucide-react";

const SERVICES = [
  {
    id: "ads-funnels",
    title: "Meta & Google Ads Funnels",
    tag: "Scale & Acquire",
    tagColor: "bg-[#ee8733]/15 text-[#ee8733] border-[#ee8733]/30",
    icon: Megaphone,
    iconColor: "text-[#ee8733]",
    hoverGlow: "hover:shadow-[0_0_35px_rgba(238,135,51,0.22)] hover:border-[#ee8733]/40",
    description:
      "High-converting paid acquisition, lead gen, and scaling eCommerce stores through granular audience segmentation and ruthless attribution.",
    deliverables: [
      "Multi-tier cold & warm retargeting architectures",
      "High-intent Search & YouTube keyword dominance",
      "Custom Meta CAPI + Offline Google Sync",
    ],
  },
  {
    id: "ai-systems",
    title: "AI Systems & Marketing Automation",
    tag: "Next-Gen Automations",
    tagColor: "bg-[#367cf1]/15 text-[#367cf1] border-[#367cf1]/30",
    icon: Bot,
    iconColor: "text-[#367cf1]",
    hoverGlow: "hover:shadow-[0_0_35px_rgba(54,124,241,0.25)] hover:border-[#367cf1]/40",
    description:
      "Building modern AI workflows, chat funnels, and automated asset creation to scale output while dramatically lowering CPA.",
    deliverables: [
      "Autonomous LLM lead qualification agents",
      "Dynamic multi-channel WhatsApp & SMS nurturing",
      "Rapid-iteration AI generative creative testing matrix",
    ],
  },
  {
    id: "psychology",
    title: "Consumer & Marketing Psychology",
    tag: "Creative Strategy",
    tagColor: "bg-[#ffaa66]/15 text-[#ffaa66] border-[#ffaa66]/30",
    icon: BrainCircuit,
    iconColor: "text-[#ffaa66]",
    hoverGlow: "hover:shadow-[0_0_35px_rgba(238,135,51,0.2)] hover:border-[#ffaa66]/40",
    description:
      "Deconstructing buying behavior to craft high-CTR ad creatives & angles that trigger genuine, non-coercive purchase urgency.",
    deliverables: [
      "Systematic hook rate & 3-second retention tuning",
      "Cognitive bias modeling targeting friction barriers",
      "High-velocity objection destruction video frameworks",
    ],
  },
  {
    id: "cro-funnels",
    title: "CRO & Growth Funnels",
    tag: "ROAS Maximizer",
    tagColor: "bg-[#ee8733]/15 text-[#ee8733] border-[#ee8733]/30",
    icon: TrendingUp,
    iconColor: "text-[#ee8733]",
    hoverGlow: "hover:shadow-[0_0_35px_rgba(238,135,51,0.22)] hover:border-[#ee8733]/40",
    description:
      "Optimizing landing pages and acquisition funnels for maximum ROAS and ruthless friction elimination across desktop and mobile.",
    deliverables: [
      "Heatmap, scroll-depth & drop-off diagnostic analysis",
      "Rapid A/B testing on lander headlines and offer hooks",
      "Sub-second loading mobile-first checkout flows",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28"
    >
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#171c29] text-[#ee8733] border border-[#ee8733]/30 font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
          <Layers className="w-3.5 h-3.5" />
          Full-Stack Acquisition Framework
        </div>
        <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ffffff] tracking-tight max-w-3xl leading-tight">
          Precision Growth Engines Engineered for Non-Linear Scale
        </h2>
        <p className="font-['Inter'] text-base sm:text-lg text-[#dcdfe3] max-w-2xl mt-4 leading-relaxed">
          Bespoke acquisition pipelines merging empirical media buying, behavioral
          psychology, and LLM automation.
        </p>
      </div>

      {/* 4 Service Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICES.map((srv, idx) => {
          const Icon = srv.icon;
          return (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-8 rounded-2xl bg-[#171c29]/75 border border-white/[0.08] backdrop-blur-2xl shadow-xl transition-all duration-300 flex flex-col justify-between ${srv.hoverGlow}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`p-3 rounded-xl bg-[#0c0e14]/90 border border-white/[0.06] ${srv.iconColor}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-['Plus_Jakarta_Sans'] font-bold uppercase tracking-wider border ${srv.tagColor}`}
                  >
                    {srv.tag}
                  </span>
                </div>

                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#ffffff] mb-3">
                  {srv.title}
                </h3>
                <p className="font-['Inter'] text-sm sm:text-base text-[#dcdfe3] leading-relaxed mb-6">
                  {srv.description}
                </p>
              </div>

              <div>
                <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#94A3B8] uppercase tracking-wider block mb-3">
                  Core Engineering Deliverables:
                </span>
                <ul className="flex flex-col gap-2.5">
                  {srv.deliverables.map((del, dIdx) => (
                    <li
                      key={dIdx}
                      className="flex items-center gap-2.5 text-xs sm:text-sm font-['Inter'] text-[#ffffff]"
                    >
                      <CheckCircle2 className={`w-4 h-4 shrink-0 ${srv.iconColor}`} />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Pricing Menu Callout Banner */}
      <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#171c29]/85 border border-white/[0.08] backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="flex flex-col text-center sm:text-left">
          <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#ee8733] uppercase tracking-wider mb-1">
            Transparent Pricing &amp; Retainer Packages
          </span>
          <h4 className="font-['Space_Grotesk'] text-xl font-bold text-[#ffffff]">
            Looking for specific audit fees, AI systems, or monthly retainer models?
          </h4>
          <p className="font-['Inter'] text-xs sm:text-sm text-[#dcdfe3] mt-1">
            Review the full service rate card with instant 10% deposit or full Razorpay checkout.
          </p>
        </div>
        <a
          href="/pricing"
          className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#ffffff] bg-[#ee8733] orange-glow hover:bg-[#ff9747] active:scale-95 transition-all"
        >
          <span>View Pricing &amp; Packages</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </a>
      </div>
    </section>
  );
}
