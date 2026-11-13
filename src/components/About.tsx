"use client";

import React from "react";
import {
  Terminal,
  CheckCircle2,
  Award,
  BadgeCheck,
  Cpu,
  Layers,
} from "lucide-react";
import PulseCard from "@/components/PulseCard";
import ScrollReveal from "@/components/ScrollReveal";

/**
 * Pulse About Architecture
 * - 2-column layout (stacks under 960px)
 * - Pure brand.css variables (0 hardcoded hex colors)
 * - Retains profile image, experience badge, certifications, and methodology copy
 */

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 lg:py-28"
    >
      <div className="grid grid-cols-1 min-[960px]:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Portrait & Badges (min-[960px]:col-span-5) */}
        <ScrollReveal stagger={1} className="min-[960px]:col-span-5 relative flex justify-center">
          {/* Subtle Ambient Glow at 18% opacity */}
          <div className="absolute inset-0 bg-[var(--color-accent)] opacity-[0.18] blur-[60px] rounded-3xl -z-10 transform -rotate-2 scale-95" />

          <div className="relative w-full max-w-md p-4 rounded-3xl bg-[var(--color-card-surface)] border border-[var(--color-border)] shadow-md">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-inner bg-[var(--color-bg)]">
              <img
                src="/profile.png"
                alt="Kunal M Saini — Performance Marketing Specialist & AI Systems Expert"
                className="w-full h-full object-cover object-center filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              {/* Experience badge overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[var(--color-card-surface)]/95 border border-[var(--color-border)] backdrop-blur-xl shadow-lg flex items-center justify-between">
                <div>
                  <div className="font-['Inter'] text-xl font-bold text-[var(--color-text)]">
                    7+ Years
                  </div>
                  <div className="font-['Inter'] text-xs font-bold text-[var(--color-accent)]">
                    Digital Growth &amp; Systems
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent-subtle)] border border-[var(--color-accent-border-40)] flex items-center justify-center text-[var(--color-accent)] shadow-xs">
                  <Award className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Micro verified tag row */}
            <div className="mt-4 p-2 flex items-center justify-around font-['Inter'] text-xs font-bold text-[var(--color-text-secondary)]">
              <div className="flex items-center gap-1.5">
                <BadgeCheck className="w-4 h-4 text-[var(--color-accent)]" />
                <span>Meta Certified</span>
              </div>
              <div className="flex items-center gap-1.5">
                <BadgeCheck className="w-4 h-4 text-[var(--color-accent)]" />
                <span>Google Ads Partner</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Cpu className="w-4 h-4 text-[var(--color-accent)]" />
                <span>AI Architecture</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Column: Bio & Methodology (min-[960px]:col-span-7) */}
        <ScrollReveal stagger={2} className="min-[960px]:col-span-7 flex flex-col">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--color-card-surface)] text-[var(--color-text)] border-2 border-[var(--color-accent)] font-['Inter'] text-xs font-bold uppercase tracking-wider mb-4 self-start shadow-xs">
            <Terminal className="w-3.5 h-3.5 text-[var(--color-accent)]" />
            ARCHITECTURAL METHODOLOGY
          </div>

          <h2 className="font-['Inter'] text-3xl sm:text-5xl font-extrabold text-[var(--color-text)] tracking-tight mb-6 leading-[1.1]">
            BRIDGING THE GAP BETWEEN <br />
            <span className="text-[var(--color-accent)]">RUTHLESS ADS &amp; AI SYSTEMS.</span>
          </h2>

          <div className="flex flex-col gap-4 text-[var(--color-text-secondary)] font-['Inter'] text-base sm:text-lg mb-8 leading-relaxed">
            <p>
              In an era where generic ad tactics are becoming commoditized, Kunal M Saini
              architects acquisition engines combining data-driven paid advertising with
              cognitive marketing psychology and cutting-edge autonomous AI workflows.
            </p>
            <p className="text-sm sm:text-base text-[var(--color-text-secondary)]">
              Having orchestrated over 100+ ad campaigns across demanding verticals like
              Real Estate, eCommerce, and B2B Lead Generation, Kunal works directly with
              founders to eliminate lead leakage and build self-reinforcing unit economics.
            </p>
          </div>

          {/* Core Philosophy Cards (PulseCard style, stacks under 960px) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <PulseCard className="p-6 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm font-['Inter'] font-bold text-[var(--color-text)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--color-accent)]" />
                <span>First-Principles Media Buying</span>
              </div>
              <p className="font-['Inter'] text-xs text-[var(--color-text-secondary)] leading-relaxed">
                No spray-and-pray ad accounts. Every rupee is deployed toward hyper-validated audience segments and algorithmic conversion tracking.
              </p>
            </PulseCard>

            <PulseCard className="p-6 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm font-['Inter'] font-bold text-[var(--color-text)]">
                <Cpu className="w-4 h-4 text-[var(--color-accent)]" />
                <span>Autonomous LLM Ops</span>
              </div>
              <p className="font-['Inter'] text-xs text-[var(--color-text-secondary)] leading-relaxed">
                Custom conversational agents filtering tire-kickers and auto-booking calendar meetings 24/7 without human intervention.
              </p>
            </PulseCard>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
