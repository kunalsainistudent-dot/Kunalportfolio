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
    headlineWhite: "5 GITHUB REPOS",
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
    headlineWhite: "Run Claude Code",
    headlineOrange: "for Free",
    subtitle: "Using NVIDIA Free Key. Step-by-step setup to bypass rate limits and code without friction.",
    tag: "Claude Code + NVIDIA",
    icon: Bot,
    badge: "WATCH REEL →",
    link: "https://instagram.com/digitalkunalsaini",
  },
  {
    id: "creative-strategy",
    category: "META ADS • CREATIVE STRATEGY",
    headlineWhite: "STOP RUNNING",
    headlineOrange: "THE SAME AD.",
    subtitle: "ONE HOOK = ONE CREATIVE. Why ad fatigue destroys your blended ROAS and how to rotate.",
    tag: "Creative Matrix",
    icon: Megaphone,
    badge: "SWIPE →",
    link: "https://instagram.com/digitalkunalsaini",
  },
  {
    id: "meta-targeting",
    category: "META ADS • 2026",
    headlineWhite: "STOP PICKING",
    headlineOrange: "INTERESTS ON META.",
    subtitle: "YOUR CREATIVE IS YOUR TARGETING. Why broad algorithm targeting beats outdated interest clusters.",
    tag: "Algorithmic Media Buying",
    icon: TrendingUp,
    badge: "SWIPE →",
    link: "https://instagram.com/digitalkunalsaini",
  },
  {
    id: "agency-checks",
    category: "PERFORMANCE AUDIT",
    headlineWhite: "AGENCY CHECKS",
    headlineOrange: "ONCE A WEEK.",
    subtitle: "Wasted ₹1,240 while nobody looks. Forensic auditing to uncover silent budget bleed.",
    tag: "Forensic Audit",
    icon: Layers,
    badge: "WATCH REEL →",
    link: "https://instagram.com/digitalkunalsaini",
  },
  {
    id: "n8n-workflows",
    category: "AI AUTOMATIONS",
    headlineWhite: "N8N MINDBLOWN",
    headlineOrange: "WORKFLOWS",
    subtitle: "7 OF THEM USED BY TOP MNCs. Zero-latency lead qualification and automated sync.",
    tag: "Enterprise n8n",
    icon: Bot,
    badge: "SWIPE →",
    link: "https://instagram.com/digitalkunalsaini",
  },
];

export default function InstagramFeed() {
  const [activeView, setActiveView] = useState<"cards" | "feed">("cards");

  return (
    <section
      id="instagram-content"
      className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#ee8733]/10 blur-[150px] rounded-full -z-10" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        {/* Instagram Tag Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#171c29] border border-[#ee8733]/30 text-[#ee8733] font-['Plus_Jakarta_Sans'] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
          <InstagramIcon className="w-3.5 h-3.5 text-[#ee8733]" />
          <span>As Seen on @digitalkunalsaini</span>
        </div>

        <h2 className="font-['Space_Grotesk'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#ffffff] tracking-tight max-w-3xl leading-tight">
          Organic Playbooks &amp; Real Growth Breakdowns
        </h2>
        <p className="font-['Inter'] text-base sm:text-lg text-[#dcdfe3] max-w-2xl mt-4 leading-relaxed">
          The exact same viral carousel frameworks and algorithmic case studies seen by thousands of founders and marketers on Instagram.
        </p>

        {/* View Switcher & Follow CTA Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <div className="inline-flex p-1 rounded-full bg-[#171c29] border border-white/[0.08]">
            <button
              onClick={() => setActiveView("cards")}
              className={`px-5 py-2 rounded-full font-['Plus_Jakarta_Sans'] text-xs font-bold transition-all duration-200 ${
                activeView === "cards"
                  ? "bg-[#ee8733] text-white shadow-[0_0_15px_rgba(238,135,51,0.3)]"
                  : "text-[#dcdfe3] hover:text-white"
              }`}
            >
              Featured Breakdowns
            </button>
            <button
              onClick={() => setActiveView("feed")}
              className={`px-5 py-2 rounded-full font-['Plus_Jakarta_Sans'] text-xs font-bold transition-all duration-200 ${
                activeView === "feed"
                  ? "bg-[#ee8733] text-white shadow-[0_0_15px_rgba(238,135,51,0.3)]"
                  : "text-[#dcdfe3] hover:text-white"
              }`}
            >
              Official Feed Grid
            </button>
          </div>

          <a
            href="https://instagram.com/digitalkunalsaini"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#ffffff] bg-[#171c29] hover:bg-[#202738] border border-[#ee8733]/40 hover:border-[#ee8733] transition-all duration-200 group"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-[#ee8733] group-hover:scale-110 transition-transform" />
            <span>Follow @digitalkunalsaini</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#ee8733]" />
          </a>
        </div>
      </div>

      {activeView === "cards" ? (
        /* 6 Carousel-Style Post Cards */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSTAGRAM_POSTS.map((post, idx) => {
            const Icon = post.icon;
            return (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="group relative p-6 sm:p-7 rounded-2xl bg-[#171c29]/80 border border-white/[0.08] backdrop-blur-xl shadow-xl flex flex-col justify-between hover:border-[#ee8733]/50 hover:shadow-[0_0_35px_rgba(238,135,51,0.2)] transition-all duration-300 overflow-hidden"
              >
                {/* Subtle top edge orange gradient */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ee8733] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Category & Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold text-[#ffd4b2] uppercase tracking-wider bg-[#3f1e15]/60 px-2.5 py-1 rounded-full border border-[#ee8733]/30">
                      {post.category}
                    </span>
                    <Icon className="w-4 h-4 text-[#ee8733]" />
                  </div>

                  {/* High-Impact Headline matching Instagram covers */}
                  <div className="mb-3">
                    <h3 className="font-['Space_Grotesk'] text-2xl font-bold tracking-tight text-[#ffffff] leading-tight">
                      {post.headlineWhite} <br />
                      <span className="text-[#ee8733]">{post.headlineOrange}</span>
                    </h3>
                  </div>

                  {/* Subtitle */}
                  <p className="font-['Inter'] text-xs sm:text-sm text-[#dcdfe3] leading-relaxed mb-6">
                    {post.subtitle}
                  </p>
                </div>

                {/* Footer with Swipe / Reel Action */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs font-['Plus_Jakarta_Sans'] font-semibold text-[#94A3B8]">
                    {post.tag}
                  </span>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-['Plus_Jakarta_Sans'] text-xs font-bold text-white bg-[#ee8733] group-hover:bg-[#ff9747] transition-all shadow-sm"
                  >
                    <span>{post.badge}</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        /* Authentic Instagram Grid Showcase */
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/[0.1] bg-[#171c29]/90 backdrop-blur-2xl shadow-2xl p-4 sm:p-6"
        >
          {/* Mock Instagram Header */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-[#ee8733]">
                <img
                  src="/profile.png"
                  alt="Kunal M Saini"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-['Space_Grotesk'] text-base font-bold text-white">
                    digitalkunalsaini
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#ee8733]"></span>
                </div>
                <span className="text-xs text-[#94A3B8] font-['Inter']">
                  AI Automations • Performance Ads • Growth Architecture
                </span>
              </div>
            </div>
            <a
              href="https://instagram.com/digitalkunalsaini"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 rounded-full font-['Plus_Jakarta_Sans'] text-xs font-bold text-white bg-[#ee8733] orange-glow hover:bg-[#ff9747] transition-all flex items-center gap-1.5"
            >
              <span>View Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Actual Feed Grid Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <img
              src="/instagram-grid.jpg"
              alt="Kunal Saini Instagram Grid Feed"
              className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.01]"
            />
            {/* Hover overlay with CTA */}
            <div className="absolute inset-0 bg-[#0c0e14]/75 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-all duration-300 flex flex-col items-center justify-center gap-4 p-6 text-center">
              <InstagramIcon className="w-12 h-12 text-[#ee8733]" />
              <div className="max-w-md">
                <h4 className="font-['Space_Grotesk'] text-2xl font-bold text-white">
                  Join the @digitalkunalsaini Community
                </h4>
                <p className="font-['Inter'] text-sm text-[#dcdfe3] mt-2">
                  Daily teardowns of Meta &amp; Google ad campaigns, agentic AI frameworks, and empirical conversion psychology.
                </p>
              </div>
              <a
                href="https://instagram.com/digitalkunalsaini"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full font-['Plus_Jakarta_Sans'] text-sm font-bold text-white bg-[#ee8733] orange-glow hover:bg-[#ff9747] transition-all"
              >
                Open Instagram Feed
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
