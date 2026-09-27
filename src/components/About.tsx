"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  CheckCircle2,
  Award,
  BadgeCheck,
  Cpu,
  Layers,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-32"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Portrait & Badges */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 relative flex justify-center"
        >
          {/* Ambient Glowing Aura */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#7701d0]/30 to-[#00FF87]/20 blur-[60px] rounded-3xl -z-10 transform -rotate-3 scale-95" />

          <div className="relative w-full max-w-md p-3 rounded-2xl bg-[#1c2028]/80 border border-white/[0.08] backdrop-blur-2xl shadow-[0_16px_48px_rgba(0,0,0,0.7)]">
            <div className="relative aspect-square w-full rounded-xl overflow-hidden shadow-inner bg-[#0a0e16]">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1XxRrDNRjya-Rs_u5qs3f_tvyuizmAK44SIXF0jl31pkRWOaJMS0FuSBYM9ch9dbDdzL65NYCoCvt-OsqQDc18uvShyqmc93KgZgSQdOUdUcfXSoRt3bXjFbLmLfS5ot8tMOIau9E76soeBAmdjlL99Cpx1lzCYvLERDl2Ek_53AmnvSp_Q2RXTfuPy4zKKV0kfn2MnWxlIyhkiPgrSPbcpQZJXFklP-UAiFAmZVMXTtKSA_SpznpKRjgy9"
                alt="Kunal M Saini — Performance Marketing Specialist & AI Systems Expert"
                className="w-full h-full object-cover object-center filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e16]/90 via-transparent to-transparent" />

              {/* Experience badge overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0a0e16]/90 border border-white/[0.08] backdrop-blur-xl shadow-lg flex items-center justify-between">
                <div>
                  <div className="font-['Space_Grotesk'] text-xl font-bold text-[#dfe2ee]">
                    7+ Years
                  </div>
                  <div className="font-['Plus_Jakarta_Sans'] text-xs font-semibold text-[#00FF87]">
                    Digital Growth &amp; Systems
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#00FF87]/20 border border-[#00FF87]/40 flex items-center justify-center text-[#00FF87] shadow-[0_0_12px_rgba(0,255,135,0.3)]">
                  <Award className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Micro verified tag row */}
            <div className="mt-3 p-2 flex items-center justify-around font-['Plus_Jakarta_Sans'] text-xs text-[#94A3B8]">
              <div className="flex items-center gap-1.5">
                <BadgeCheck className="w-3.5 h-3.5 text-[#00FF87]" />
                <span>Meta Certified</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BadgeCheck className="w-3.5 h-3.5 text-[#00FF87]" />
                <span>Google Ads Partner</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#00FF87]" />
                <span>AI Architecture</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Bio & Methodology */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181c24] text-[#60ff98] border border-white/[0.08] font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider mb-4 self-start">
            <Terminal className="w-3.5 h-3.5 text-[#00FF87]" />
            ARCHITECTURAL METHODOLOGY
          </div>

          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#dfe2ee] tracking-tight mb-6 leading-tight">
            Bridging the Gap Between Ruthless Paid Media &amp; Autonomous AI Systems
          </h2>

          <div className="flex flex-col gap-4 text-[#94A3B8] font-['Inter'] text-base sm:text-lg mb-8 leading-relaxed">
            <p>
              In an era where generic ad tactics are becoming commoditized, Kunal M Saini
              architects acquisition engines combining data-driven paid advertising with
              cognitive marketing psychology and cutting-edge autonomous AI workflows.
            </p>
            <p className="text-sm sm:text-base">
              Having orchestrated over 100+ ad campaigns across demanding verticals like
              Real Estate, eCommerce, and B2B Lead Generation, Kunal works directly with
              founders and marketing heads to unlock predictable revenue without bloated
              agency overhead or sluggish communication.
            </p>
          </div>

          {/* Key Pillars */}
          <div className="flex flex-col gap-3.5 mb-8">
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#1c2028]/50 border border-white/[0.06]">
              <CheckCircle2 className="w-5 h-5 text-[#00FF87] shrink-0 mt-0.5" />
              <div>
                <div className="font-['Space_Grotesk'] text-base font-bold text-[#dfe2ee]">
                  Full-Funnel Paid Media Execution
                </div>
                <p className="font-['Inter'] text-xs sm:text-sm text-[#94A3B8]">
                  Surgical Meta, Google, and YouTube deployment backed by relentless creative split-testing.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#1c2028]/50 border border-white/[0.06]">
              <CheckCircle2 className="w-5 h-5 text-[#00FF87] shrink-0 mt-0.5" />
              <div>
                <div className="font-['Space_Grotesk'] text-base font-bold text-[#dfe2ee]">
                  Proprietary AI Lead Scoring &amp; Pipelines
                </div>
                <p className="font-['Inter'] text-xs sm:text-sm text-[#94A3B8]">
                  Custom conversational agents filtering tire-kickers and auto-booking calendar meetings.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#1c2028]/50 border border-white/[0.06]">
              <CheckCircle2 className="w-5 h-5 text-[#00FF87] shrink-0 mt-0.5" />
              <div>
                <div className="font-['Space_Grotesk'] text-base font-bold text-[#dfe2ee]">
                  Conversion-Engineered Creative Strategy
                </div>
                <p className="font-['Inter'] text-xs sm:text-sm text-[#94A3B8]">
                  Frameworks steeped in cognitive behavioral science to drive urgent, calculated action.
                </p>
              </div>
            </div>
          </div>

          {/* Credibility Note */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/[0.08]">
            <div className="w-12 h-12 rounded-full bg-[#262a33] border border-[#00FF87]/40 flex items-center justify-center font-['Space_Grotesk'] text-base text-[#00FF87] font-bold shadow-[0_0_12px_rgba(0,255,135,0.25)]">
              KM
            </div>
            <div className="flex flex-col">
              <span className="font-['Space_Grotesk'] text-lg font-bold text-[#dfe2ee]">
                Kunal M Saini
              </span>
              <span className="font-['Inter'] text-xs text-[#00e478] font-medium">
                @digitalkunalsaini • Direct Founder Engagements Only
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
