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
    tagColor: "bg-[#00FF87]/15 text-[#60ff98] border-[#00FF87]/30",
    icon: Megaphone,
    iconColor: "text-[#00FF87]",
    hoverGlow: "hover:shadow-[0_0_35px_rgba(0,255,135,0.22)] hover:border-[#00FF87]/40",
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
    tagColor: "bg-[#7701d0]/25 text-[#dcb8ff] border-[#8A2BE2]/40",
    icon: Bot,
    iconColor: "text-[#dcb8ff]",
    hoverGlow: "hover:shadow-[0_0_35px_rgba(138,43,226,0.28)] hover:border-[#8A2BE2]/40",
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
    tagColor: "bg-[#60efff]/15 text-[#60efff] border-[#60efff]/30",
    icon: BrainCircuit,
    iconColor: "text-[#60efff]",
    hoverGlow: "hover:shadow-[0_0_35px_rgba(96,239,255,0.22)] hover:border-[#60efff]/40",
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
    tagColor: "bg-[#00FF87]/15 text-[#60ff98] border-[#00FF87]/30",
    icon: TrendingUp,
    iconColor: "text-[#00FF87]",
    hoverGlow: "hover:shadow-[0_0_35px_rgba(0,255,135,0.22)] hover:border-[#00FF87]/40",
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
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181c24] text-[#00FF87] border border-white/[0.08] font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
          <Layers className="w-3.5 h-3.5" />
          Full-Stack Acquisition Framework
        </div>
        <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#dfe2ee] tracking-tight max-w-3xl leading-tight">
          Precision Growth Engines Engineered for Non-Linear Scale
        </h2>
        <p className="font-['Inter'] text-base sm:text-lg text-[#94A3B8] max-w-2xl mt-4 leading-relaxed">
          Bespoke acquisition pipelines merging empirical media buying, behavioral
          psychology, and LLM automation.
        </p>
      </div>

      {/* Grid of 4 Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {SERVICES.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              id={service.id === "ai-systems" ? "ai-systems" : undefined}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-2xl bg-[#1c2028]/60 border border-white/[0.08] backdrop-blur-xl shadow-lg transition-all duration-300 flex flex-col justify-between group ${service.hoverGlow}`}
            >
              <div>
                {/* Card Top: Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#262a33] flex items-center justify-center border border-white/[0.06] group-hover:scale-110 transition-transform">
                    <Icon className={`w-6 h-6 ${service.iconColor}`} />
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full border text-[11px] font-['Plus_Jakarta_Sans'] font-semibold ${service.tagColor}`}
                  >
                    {service.tag}
                  </span>
                </div>

                {/* Card Headline & Copy */}
                <h3 className="font-['Space_Grotesk'] text-xl font-bold text-[#dfe2ee] mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="font-['Inter'] text-sm text-[#94A3B8] leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Deliverables Box */}
              <div className="pt-4 border-t border-white/[0.06] bg-[#0a0e16]/50 rounded-xl p-3.5 flex flex-col gap-2.5">
                <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#dfe2ee] uppercase tracking-wider">
                  Key Deliverables
                </span>
                <ul className="flex flex-col gap-2 font-['Inter'] text-xs text-[#94A3B8]">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2
                        className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${service.iconColor}`}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
