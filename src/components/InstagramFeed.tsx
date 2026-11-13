"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Sparkles,
  Layers,
  Flame,
  Bookmark,
  Share2,
  ExternalLink,
  Bot,
  Megaphone,
  Code2,
  TrendingUp,
} from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const INSTAGRAM_POSTS = [
  {
    id: "repos",
    category: "GITHUB • AI • 2026",
    headlineBlack: "5 GITHUB REPOS",
    headlineOrange: "FOR MORE POWERFUL AI.",
    subtitle: "Save this for your next build. Top open-source frameworks transforming agentic AI.",
    tag: "AI Architecture",
    icon: Code2,
    badge: "SWIPE →",
    link: "https://instagram.com/digitalkunalsaini",
  },
  {
    id: "claude-code",
    category: "AI TOOLS • TUTORIAL",
    headlineBlack: "RUN CLAUDE CODE",
    headlineOrange: "FOR FREE.",
    subtitle: "Using NVIDIA Free Key. Step-by-step setup to bypass rate limits and code without friction.",
    tag: "Claude Code + NVIDIA",
    icon: Bot,
    badge: "WATCH REEL →",
    link: "https://instagram.com/digitalkunalsaini",
  },
  {
    id: "agency-checks",
    category: "AGENCY TELEMETRY",
    headlineBlack: "AGENCY CHECKS",
    headlineOrange: "ONCE A WEEK.",
    subtitle: "₹1,240 wasted while nobody looks. Why unmanaged ad budgets bleed margin silently.",
    tag: "Paid Ads Audit",
    icon: Megaphone,
    badge: "AUDIT DATA →",
    link: "https://instagram.com/digitalkunalsaini",
  },
  {
    id: "same-ad",
    category: "META ADS • CREATIVE STRATEGY",
    headlineBlack: "STOP RUNNING",
    headlineOrange: "THE SAME AD.",
    subtitle: "ONE HOOK = ONE CREATIVE. Deconstructing behavioral ad fatigue and scalable angle matrices.",
    tag: "Creative Strategy",
    icon: TrendingUp,
    badge: "SWIPE →",
    link: "https://instagram.com/digitalkunalsaini",
  },
  {
    id: "interests-meta",
    category: "META ADS • 2026",
    headlineBlack: "STOP PICKING",
    headlineOrange: "INTERESTS ON META.",
    subtitle: "YOUR CREATIVE IS YOUR TARGETING. Algorithmic audience filtering via video retention.",
    tag: "Targeting Framework",
    icon: Layers,
    badge: "READ GUIDE →",
    link: "https://instagram.com/digitalkunalsaini",
  },
  {
    id: "n8n-workflows",
    category: "AUTOMATION ARCHITECTURE",
    headlineBlack: "N8N MINDBLOWN",
    headlineOrange: "WORKFLOWS.",
    subtitle: "7 OF THEM USED BY TOP MNCs. Autonomous data sync, lead triage, and attribution webhooks.",
    tag: "n8n Systems",
    icon: Bot,
    badge: "GET TEMPLATES →",
    link: "https://instagram.com/digitalkunalsaini",
  },
];

export default function InstagramFeed() {
  const [activeFilter, setActiveFilter] = useState<"all" | "ads" | "ai">("all");

  const filteredPosts =
    activeFilter === "all"
      ? INSTAGRAM_POSTS
      : activeFilter === "ads"
      ? INSTAGRAM_POSTS.filter((p) => p.tag.includes("Ads") || p.tag.includes("Creative") || p.tag.includes("Targeting"))
      : INSTAGRAM_POSTS.filter((p) => p.tag.includes("AI") || p.tag.includes("Claude") || p.tag.includes("n8n"));

  return (
    <section
      id="instagram-content"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 lg:py-28"
    >
      {/* Background glow pool */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#ee8733]/8 blur-[150px] rounded-full -z-10" />

      {/* Header with White + Orange Font Pair */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0c0e14] border-2 border-[#ee8733] text-[#ffffff] font-['Inter'] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
          <InstagramIcon className="w-3.5 h-3.5 text-[#ee8733]" />
          <span>ORGANIC CONTENT &bull; @DIGITALKUNALSAINI</span>
        </div>
        <h2 className="font-['Inter'] text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#ffffff] tracking-tight max-w-3xl leading-[1.1]">
          AS SEEN ON FEED. <br />
          <span className="text-[#ee8733]">REAL GROWTH BREAKDOWNS.</span>
        </h2>
        <p className="font-['Inter'] text-base sm:text-lg font-medium text-[#dcdfe3] max-w-2xl mt-4 leading-relaxed">
          Tactical performance engineering, creative psychology, and AI automation tutorials published weekly.
        </p>

        {/* Filter Controls & Direct Instagram Link */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <div className="inline-flex p-1 rounded-full bg-[#0c0e14] border border-[rgba(220,223,227,0.12)] shadow-sm">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-6 py-2 rounded-full font-['Inter'] text-xs font-bold transition-all duration-200 ${
                activeFilter === "all"
                  ? "bg-[#ee8733] text-[#171c29] shadow-[0_4px_15px_rgba(238,135,51,0.3)]"
                  : "text-[#dcdfe3] hover:text-[#ffffff]"
              }`}
            >
              All Content
            </button>
            <button
              onClick={() => setActiveFilter("ads")}
              className={`px-6 py-2 rounded-full font-['Inter'] text-xs font-bold transition-all duration-200 ${
                activeFilter === "ads"
                  ? "bg-[#ee8733] text-[#171c29] shadow-[0_4px_15px_rgba(238,135,51,0.3)]"
                  : "text-[#dcdfe3] hover:text-[#ffffff]"
              }`}
            >
              Paid Ads &amp; Creative
            </button>
            <button
              onClick={() => setActiveFilter("ai")}
              className={`px-6 py-2 rounded-full font-['Inter'] text-xs font-bold transition-all duration-200 ${
                activeFilter === "ai"
                  ? "bg-[#ee8733] text-[#171c29] shadow-[0_4px_15px_rgba(238,135,51,0.3)]"
                  : "text-[#dcdfe3] hover:text-[#ffffff]"
              }`}
            >
              AI &amp; Automations
            </button>
          </div>

          <a
            href="https://instagram.com/digitalkunalsaini"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-['Inter'] text-xs font-bold text-[#ffffff] bg-[#0c0e14] hover:bg-[#171c29] border-2 border-[#ffffff] hover:border-[#ee8733] hover:text-[#ee8733] transition-all duration-200 group shadow-sm"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-[#ee8733] group-hover:scale-110 transition-transform" />
            <span>Follow @digitalkunalsaini</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#ee8733]" />
          </a>
        </div>
      </div>

      {/* Grid of Instagram Content Cards Styled Exactly Like the 3x3 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post, idx) => {
          const Icon = post.icon;
          return (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="group relative p-7 rounded-3xl bg-[#0c0e14] border border-[rgba(220,223,227,0.12)] shadow-sm flex flex-col justify-between hover:border-[#ee8733] hover:shadow-[0_16px_40px_rgba(238,135,51,0.12)] transition-all duration-300 overflow-hidden"
            >
              {/* Top Accent Orange Border */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#ee8733] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Category Pill with Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-['Inter'] text-[11px] font-bold text-[#ffffff] uppercase tracking-wider bg-[#171c29] px-3 py-1 rounded-full border border-[#ee8733]/40">
                    {post.category}
                  </span>
                  <div className="p-2 rounded-xl bg-[rgba(238,135,51,0.15)] text-[#ee8733] border border-[#ee8733]/20">
                    <Icon className="w-4 h-4 text-[#ee8733]" />
                  </div>
                </div>

                {/* Big Bold Headline Pair: White + Orange */}
                <h3 className="font-['Inter'] text-2xl font-extrabold tracking-tight text-[#ffffff] leading-tight mb-3">
                  {post.headlineBlack} <br />
                  <span className="text-[#ee8733]">{post.headlineOrange}</span>
                </h3>

                {/* Subtitle */}
                <p className="font-['Inter'] text-xs sm:text-sm text-[#dcdfe3] leading-relaxed mb-6">
                  {post.subtitle}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-[rgba(220,223,227,0.12)] flex items-center justify-between">
                <span className="text-xs font-['Inter'] font-bold text-[#dcdfe3]">
                  {post.tag}
                </span>

                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full font-['Inter'] text-xs font-bold text-[#171c29] bg-[#ee8733] hover:bg-[#ed8532] transition-all shadow-xs"
                >
                  <span>{post.badge}</span>
                  <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Embedded Creator Profile Banner */}
      <div className="mt-14 max-w-4xl mx-auto rounded-3xl overflow-hidden border border-[rgba(220,223,227,0.12)] bg-[#0c0e14] shadow-lg p-5 sm:p-7">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-[#ee8733] shadow-md">
                <img
                  src="/profile.png"
                  alt="Kunal M Saini Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#ee8733] ring-2 ring-[#0c0e14] flex items-center justify-center">
                <Sparkles className="w-2.5 h-2.5 text-[#171c29]" />
              </span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-['Inter'] text-lg font-bold text-[#ffffff]">
                  Kunal M Saini
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[rgba(238,135,51,0.15)] text-[#ee8733] border border-[#ee8733]/30 font-['Inter'] text-[10px] font-bold">
                  Verified Creator
                </span>
              </div>
              <span className="font-['Inter'] text-xs text-[#ee8733] font-bold">
                @digitalkunalsaini
              </span>
              <p className="font-['Inter'] text-xs text-[#dcdfe3] mt-1">
                AI Automations &bull; Performance Media &bull; Growth Systems
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/digitalkunalsaini"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full font-['Inter'] text-xs font-bold text-[#171c29] bg-[#ee8733] orange-glow hover:bg-[#ed8532] active:scale-95 transition-all shadow-md flex items-center gap-2"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Follow on Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
