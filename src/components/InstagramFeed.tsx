"use client";

import React, { useState } from "react";
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
import PulseCard from "@/components/PulseCard";
import ScrollReveal from "@/components/ScrollReveal";

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
    tag: "n8n Workflows",
    icon: Flame,
    badge: "TUTORIAL →",
    link: "https://instagram.com/digitalkunalsaini",
  },
];

const CATEGORIES = ["All Insights", "AI Architecture", "Creative Strategy", "Paid Ads"];

export default function InstagramFeed() {
  const [selectedFilter, setSelectedFilter] = useState("All Insights");

  const filteredPosts =
    selectedFilter === "All Insights"
      ? INSTAGRAM_POSTS
      : INSTAGRAM_POSTS.filter((post) =>
          selectedFilter === "AI Architecture"
            ? post.tag.includes("AI") || post.tag.includes("n8n")
            : selectedFilter === "Creative Strategy"
            ? post.tag.includes("Creative") || post.tag.includes("Targeting")
            : post.tag.includes("Paid") || post.tag.includes("Audit")
        );

  return (
    <section
      id="instagram-content"
      className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 lg:py-28"
    >
      {/* Background ambient lighting at 18% opacity */}
      <div className="pointer-events-none absolute top-1/3 right-1/4 w-[500px] h-[300px] bg-[var(--color-accent)] opacity-[0.10] blur-[140px] rounded-full -z-10" />

      {/* Header */}
      <ScrollReveal className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[var(--color-card-surface)] border-2 border-[var(--color-accent)] text-[var(--color-text)] font-['Inter'] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
          <InstagramIcon className="w-3.5 h-3.5 text-[var(--color-accent)]" />
          <span>ORGANIC INSTAGRAM TELEMETRY &bull; @DIGITALKUNALSAINI</span>
        </div>
        <h2 className="font-['Inter'] text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--color-text)] tracking-tight leading-[1.1]">
          HIGH-SIGNAL KNOWLEDGE. <br />
          <span className="text-[var(--color-accent)]">FIELD-TESTED FRAMEWORKS.</span>
        </h2>
        <p className="font-['Inter'] text-sm sm:text-base text-[var(--color-text-secondary)] max-w-2xl mt-4">
          Visual breakdowns, ad creative tear-downs, and production AI workflows published weekly for 10,000+ ambitious founders.
        </p>

        {/* Instagram Profile Follow Pill */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://instagram.com/digitalkunalsaini"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-card-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)] text-xs sm:text-sm font-['Inter'] font-bold text-[var(--color-text)] shadow-xs transition-all"
          >
            <InstagramIcon className="w-4 h-4 text-[var(--color-accent)]" />
            <span>Follow @digitalkunalsaini</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[var(--color-accent)]" />
          </a>
        </div>
      </ScrollReveal>

      {/* Filter Tabs */}
      <ScrollReveal stagger={1} className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedFilter(cat)}
            className={`px-4 py-2 rounded-full text-xs font-['Inter'] font-bold transition-all border ${
              selectedFilter === cat
                ? "bg-[var(--color-accent)] text-[var(--color-bg)] border-[var(--color-accent)] shadow-[0_4px_16px_var(--color-accent-glow)]"
                : "bg-[var(--color-card-surface)] text-[var(--color-text-secondary)] border-[var(--color-border)] hover:border-[var(--color-accent-border-40)] hover:text-[var(--color-text)]"
            }`}
          >
            {cat}
          </button>
        ))}
      </ScrollReveal>

      {/* Posts Grid (Responsive: Under 960px 1 column per Pulse spec) */}
      <div className="grid grid-cols-1 min-[960px]:grid-cols-3 gap-6">
        {filteredPosts.map((post, idx) => {
          const Icon = post.icon;
          return (
            <ScrollReveal key={post.id} stagger={((idx % 3) + 1) as 1 | 2 | 3}>
              <PulseCard className="p-6 sm:p-7 flex flex-col justify-between h-full">
                <div>
                  {/* Category Pill */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-['Inter'] text-[11px] font-extrabold uppercase tracking-wider text-[var(--color-accent)] bg-[var(--color-accent-subtle)] px-2.5 py-1 rounded-full border border-[var(--color-accent-border-40)]">
                      {post.category}
                    </span>
                    <div className="p-2 rounded-xl bg-[var(--color-bg)] text-[var(--color-accent)] border border-[var(--color-border)] group-hover:bg-[var(--color-accent)] group-hover:text-[var(--color-bg)] transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* High-Contrast Bold Headline */}
                  <div className="mb-3">
                    <div className="font-['Inter'] text-xl sm:text-2xl font-extrabold text-[var(--color-text)] tracking-tight leading-tight">
                      {post.headlineBlack}
                    </div>
                    <div className="font-['Inter'] text-xl sm:text-2xl font-extrabold text-[var(--color-accent)] tracking-tight leading-tight">
                      {post.headlineOrange}
                    </div>
                  </div>

                  <p className="font-['Inter'] text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
                    {post.subtitle}
                  </p>
                </div>

                {/* Card Footer with Link */}
                <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between">
                  <span className="text-[11px] font-['Inter'] font-semibold text-[var(--color-text-secondary)]">
                    {post.tag}
                  </span>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-['Inter'] font-bold text-[var(--color-bg)] bg-[var(--color-accent)] px-3 py-1.5 rounded-full hover:bg-[var(--color-accent-hover)] transition-colors shadow-xs"
                  >
                    <span>{post.badge}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </PulseCard>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
