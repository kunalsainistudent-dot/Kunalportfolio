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
          <div className="absolute inset-0 bg-gradient-to-tr from-[#ee8733]/25 via-[#367cf1]/15 to-[#3f1e15]/30 blur-[60px] rounded-3xl -z-10 transform -rotate-3 scale-95" />

          <div className="relative w-full max-w-md p-3 rounded-2xl bg-[#171c29]/85 border border-white/[0.08] backdrop-blur-2xl shadow-[0_16px_48px_rgba(0,0,0,0.7)]">
            <div className="relative aspect-square w-full rounded-xl overflow-hidden shadow-inner bg-[#0c0e14]">
              <img
                src="/profile.png"
                alt="Kunal M Saini — Performance Marketing Specialist & AI Systems Expert"
                className="w-full h-full object-cover object-center filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14]/90 via-transparent to-transparent" />

              {/* Experience badge overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0c0e14]/90 border border-white/[0.08] backdrop-blur-xl shadow-lg flex items-center justify-between">
                <div>
                  <div className="font-['Space_Grotesk'] text-xl font-bold text-[#ffffff]">
                    7+ Years
                  </div>
                  <div className="font-['Plus_Jakarta_Sans'] text-xs font-semibold text-[#ee8733]">
                    Digital Growth &amp; Systems
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#ee8733]/20 border border-[#ee8733]/40 flex items-center justify-center text-[#ee8733] shadow-[0_0_14px_rgba(238,135,51,0.35)]">
                  <Award className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Micro verified tag row */}
            <div className="mt-3 p-2 flex items-center justify-around font-['Plus_Jakarta_Sans'] text-xs text-[#dcdfe3]">
              <div className="flex items-center gap-1.5">
                <BadgeCheck className="w-3.5 h-3.5 text-[#ee8733]" />
                <span>Meta Certified</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BadgeCheck className="w-3.5 h-3.5 text-[#ee8733]" />
                <span>Google Ads Partner</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#ee8733]" />
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#171c29] text-[#ee8733] border border-[#ee8733]/30 font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider mb-4 self-start">
            <Terminal className="w-3.5 h-3.5 text-[#ee8733]" />
            ARCHITECTURAL METHODOLOGY
          </div>

          <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ffffff] tracking-tight mb-6 leading-tight">
            Bridging the Gap Between Ruthless Paid Media &amp; Autonomous AI Systems
          </h2>

          <div className="flex flex-col gap-4 text-[#dcdfe3] font-['Inter'] text-base sm:text-lg mb-8 leading-relaxed">
            <p>
              In an era where generic ad tactics are becoming commoditized, Kunal M Saini
              architects acquisition engines combining data-driven paid advertising with
              cognitive marketing psychology and cutting-edge autonomous AI workflows.
            </p>
            <p className="text-sm sm:text-base">
              Having orchestrated over 100+ ad campaigns across demanding verticals like
              Real Estate, eCommerce, and B2B Lead Generation, Kunal works directly with
              founders to eliminate lead leakage and build self-reinforcing unit economics.
            </p>
          </div>

          {/* Core Philosophy Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-[#171c29]/70 border border-white/[0.06] flex flex-col gap-2 hover:border-[#ee8733]/40 transition-colors">
              <div className="flex items-center gap-2 text-sm font-['Space_Grotesk'] font-bold text-[#ffffff]">
                <CheckCircle2 className="w-4 h-4 text-[#ee8733]" />
                <span>First-Principles Media Buying</span>
              </div>
              <p className="font-['Inter'] text-xs text-[#94A3B8] leading-relaxed">
                No spray-and-pray ad accounts. Every rupee is deployed toward hyper-validated audience segments and algorithmic conversion tracking.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#171c29]/70 border border-white/[0.06] flex flex-col gap-2 hover:border-[#367cf1]/40 transition-colors">
              <div className="flex items-center gap-2 text-sm font-['Space_Grotesk'] font-bold text-[#ffffff]">
                <Cpu className="w-4 h-4 text-[#367cf1]" />
                <span>Autonomous LLM Ops</span>
              </div>
              <p className="font-['Inter'] text-xs text-[#94A3B8] leading-relaxed">
                Custom conversational agents filtering tire-kickers and auto-booking calendar meetings 24/7 without human intervention.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
