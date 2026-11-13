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

/**
 * About Section
 * Inherits brand tokens: #171c29 canvas, #0c0e14 cards, #ee8733 accents, #ffffff/#dcdfe3 typography.
 */

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
          {/* Subtle Ambient Glow */}
          <div className="absolute inset-0 bg-[#ee8733]/15 blur-[50px] rounded-3xl -z-10 transform -rotate-2 scale-95" />

          <div className="relative w-full max-w-md p-4 rounded-3xl bg-[#0c0e14] border border-[rgba(220,223,227,0.12)] shadow-md">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-inner bg-[#171c29]">
              <img
                src="/profile.png"
                alt="Kunal M Saini — Performance Marketing Specialist & AI Systems Expert"
                className="w-full h-full object-cover object-center filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Experience badge overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#0c0e14]/95 border border-[rgba(220,223,227,0.12)] backdrop-blur-xl shadow-lg flex items-center justify-between">
                <div>
                  <div className="font-['Inter'] text-xl font-bold text-[#ffffff]">
                    7+ Years
                  </div>
                  <div className="font-['Inter'] text-xs font-bold text-[#ee8733]">
                    Digital Growth &amp; Systems
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-[rgba(238,135,51,0.15)] border border-[#ee8733]/40 flex items-center justify-center text-[#ee8733] shadow-xs">
                  <Award className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Micro verified tag row */}
            <div className="mt-4 p-2 flex items-center justify-around font-['Inter'] text-xs font-bold text-[#dcdfe3]">
              <div className="flex items-center gap-1.5">
                <BadgeCheck className="w-4 h-4 text-[#ee8733]" />
                <span>Meta Certified</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BadgeCheck className="w-4 h-4 text-[#ee8733]" />
                <span>Google Ads Partner</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-[#ee8733]" />
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
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0c0e14] text-[#ffffff] border-2 border-[#ee8733] font-['Inter'] text-xs font-bold uppercase tracking-wider mb-4 self-start shadow-sm">
            <Terminal className="w-3.5 h-3.5 text-[#ee8733]" />
            ARCHITECTURAL METHODOLOGY
          </div>

          <h2 className="font-['Inter'] text-3xl sm:text-5xl font-extrabold text-[#ffffff] tracking-tight mb-6 leading-[1.1]">
            BRIDGING THE GAP BETWEEN <br />
            <span className="text-[#ee8733]">RUTHLESS ADS &amp; AI SYSTEMS.</span>
          </h2>

          <div className="flex flex-col gap-4 text-[#dcdfe3] font-['Inter'] text-base sm:text-lg mb-8 leading-relaxed">
            <p>
              In an era where generic ad tactics are becoming commoditized, Kunal M Saini
              architects acquisition engines combining data-driven paid advertising with
              cognitive marketing psychology and cutting-edge autonomous AI workflows.
            </p>
            <p className="text-sm sm:text-base text-[#dcdfe3]">
              Having orchestrated over 100+ ad campaigns across demanding verticals like
              Real Estate, eCommerce, and B2B Lead Generation, Kunal works directly with
              founders to eliminate lead leakage and build self-reinforcing unit economics.
            </p>
          </div>

          {/* Core Philosophy Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-[#0c0e14] border border-[rgba(220,223,227,0.12)] shadow-sm flex flex-col gap-2 hover:border-[#ee8733] transition-colors">
              <div className="flex items-center gap-2 text-sm font-['Inter'] font-bold text-[#ffffff]">
                <CheckCircle2 className="w-4 h-4 text-[#ee8733]" />
                <span>First-Principles Media Buying</span>
              </div>
              <p className="font-['Inter'] text-xs text-[#dcdfe3] leading-relaxed">
                No spray-and-pray ad accounts. Every rupee is deployed toward hyper-validated audience segments and algorithmic conversion tracking.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0c0e14] border border-[rgba(220,223,227,0.12)] shadow-sm flex flex-col gap-2 hover:border-[#ee8733] transition-colors">
              <div className="flex items-center gap-2 text-sm font-['Inter'] font-bold text-[#ffffff]">
                <Cpu className="w-4 h-4 text-[#ee8733]" />
                <span>Autonomous LLM Ops</span>
              </div>
              <p className="font-['Inter'] text-xs text-[#dcdfe3] leading-relaxed">
                Custom conversational agents filtering tire-kickers and auto-booking calendar meetings 24/7 without human intervention.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
