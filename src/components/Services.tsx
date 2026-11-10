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
    tagColor: "bg-[#fff2e6] text-[#ee8733] border-[#ee8733]/30",
    icon: Megaphone,
    iconColor: "text-[#ee8733]",
    iconBg: "bg-[#fff2e6]",
    hoverGlow: "hover:shadow-[0_14px_40px_rgba(238,135,51,0.14)] hover:border-[#ee8733]",
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
    tagColor: "bg-[#f0f4ff] text-[#2563eb] border-[#2563eb]/30",
    icon: Bot,
    iconColor: "text-[#2563eb]",
    iconBg: "bg-[#f0f4ff]",
    hoverGlow: "hover:shadow-[0_14px_40px_rgba(37,99,235,0.14)] hover:border-[#2563eb]",
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
    tagColor: "bg-[#fff2e6] text-[#ee8733] border-[#ee8733]/30",
    icon: BrainCircuit,
    iconColor: "text-[#ee8733]",
    iconBg: "bg-[#fff2e6]",
    hoverGlow: "hover:shadow-[0_14px_40px_rgba(238,135,51,0.14)] hover:border-[#ee8733]",
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
    tagColor: "bg-[#fff2e6] text-[#ee8733] border-[#ee8733]/30",
    icon: TrendingUp,
    iconColor: "text-[#ee8733]",
    iconBg: "bg-[#fff2e6]",
    hoverGlow: "hover:shadow-[0_14px_40px_rgba(238,135,51,0.14)] hover:border-[#ee8733]",
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
      {/* Header with Black + Orange Font Pair */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#ffffff] text-[#0c0a09] border-2 border-[#ee8733] font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
          <Layers className="w-3.5 h-3.5 text-[#ee8733]" />
          Full-Stack Acquisition Framework
        </div>
        <h2 className="font-['Space_Grotesk'] text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0c0a09] tracking-tight max-w-3xl leading-[1.1]">
          PRECISION GROWTH ENGINES. <br />
          <span className="text-[#ee8733]">ENGINEERED FOR SCALE.</span>
        </h2>
        <p className="font-['Inter'] text-base sm:text-lg font-medium text-[#57534e] max-w-2xl mt-4 leading-relaxed">
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
              className={`p-8 rounded-3xl bg-[#ffffff] border border-[#eaddcf] shadow-sm transition-all duration-300 flex flex-col justify-between ${srv.hoverGlow}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`p-3 rounded-2xl ${srv.iconBg} border border-black/5 ${srv.iconColor}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span
                    className={`px-3.5 py-1 rounded-full text-xs font-['Plus_Jakarta_Sans'] font-bold uppercase tracking-wider border ${srv.tagColor}`}
                  >
                    {srv.tag}
                  </span>
                </div>

                <h3 className="font-['Space_Grotesk'] text-2xl font-bold text-[#0c0a09] mb-3">
                  {srv.title}
                </h3>
                <p className="font-['Inter'] text-sm sm:text-base text-[#57534e] leading-relaxed mb-6">
                  {srv.description}
                </p>
              </div>

              <div>
                <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#78716c] uppercase tracking-wider block mb-3">
                  Core Engineering Deliverables:
                </span>
                <ul className="flex flex-col gap-2.5">
                  {srv.deliverables.map((del, dIdx) => (
                    <li
                      key={dIdx}
                      className="flex items-center gap-2.5 text-xs sm:text-sm font-['Inter'] font-semibold text-[#1c1917]"
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
      <div className="mt-12 p-8 rounded-3xl bg-[#ffffff] border-2 border-[#ee8733] shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col text-center sm:text-left">
          <span className="font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#ee8733] uppercase tracking-wider mb-1">
            Transparent Pricing &amp; Retainer Packages
          </span>
          <h4 className="font-['Space_Grotesk'] text-xl font-bold text-[#0c0a09]">
            Looking for specific audit fees, AI systems, or monthly retainer models?
          </h4>
          <p className="font-['Inter'] text-xs sm:text-sm text-[#57534e] mt-1">
            Review the full service rate card with instant 10% deposit or full Razorpay checkout.
          </p>
        </div>
        <a
          href="/pricing"
          className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#ffffff] bg-[#ee8733] orange-glow hover:bg-[#ff6a1a] active:scale-95 transition-all shadow-md"
        >
          <span>View Pricing &amp; Packages</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </a>
      </div>
    </section>
  );
}
