"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Calendar } from "lucide-react";

/**
 * Pulse Sticky Glass Navigation
 * - Backdrop blur with bottom hairline (var(--color-border-hairline))
 * - Center nav links hidden under 600px
 * - Pure brand.css variables (0 hardcoded hex colors)
 * - Retains business identity, links, booking URL, and logo
 */

const NAV_LINKS = [
  { name: "Services", href: "/#services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Instagram", href: "/#instagram-content" },
  { name: "Case Studies", href: "/#case-studies" },
  { name: "About Me", href: "/#about" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full glass-nav py-3 sm:py-3.5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Left: Brand Identity */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/logo.png"
                alt="Kunal M Saini Logo"
                className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[var(--color-accent)] ring-2 ring-[var(--color-bg)] shadow-[0_0_8px_var(--color-accent)]"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-['Inter'] text-base sm:text-lg font-bold text-[var(--color-text)] tracking-tight group-hover:text-[var(--color-accent)] transition-colors">
                Kunal M Saini
              </span>
              <span className="font-['Inter'] text-[11px] font-semibold tracking-wider uppercase text-[var(--color-text-secondary)] flex items-center gap-1.5">
                <span>Performance &amp; AI</span>
                <span className="w-1 h-1 rounded-full bg-[var(--color-accent)]"></span>
                <span className="text-[var(--color-accent)] font-bold">@digitalkunalsaini</span>
              </span>
            </div>
          </a>
        </div>

        {/* Center: Desktop Navigation Bar (Hidden under 600px per Pulse spec) */}
        <nav className="hidden min-[600px]:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[var(--color-card-surface)] border border-[var(--color-border)] backdrop-blur-xl shadow-xs">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full font-['Inter'] text-xs sm:text-sm font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-text)] hover:bg-[var(--color-bg)] transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="/pricing"
            className="px-4 py-2 rounded-full font-['Inter'] text-xs sm:text-sm font-bold text-[var(--color-text)] bg-[var(--color-card-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-200 shadow-xs"
          >
            <span>Rate Card</span>
          </a>
          <a
            href="https://calendar.app.google/gAb9osZfSYNnnoLa8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-['Inter'] text-xs sm:text-sm font-bold text-[var(--color-bg)] bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] active:scale-95 transition-all duration-200 shadow-[0_4px_16px_var(--color-accent-glow)]"
          >
            <span>Book Strategy Call</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
          <a
            href="/#about"
            className="relative block w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden ring-2 ring-[var(--color-accent-border-40)] hover:ring-[var(--color-accent)] transition-all"
            title="About Kunal M Saini"
          >
            <img
              src="/profile.png"
              alt="Kunal M Saini Avatar"
              className="w-full h-full object-cover"
            />
          </a>
        </div>

        {/* Mobile Action & Menu Toggle (For screens under 600px / small mobile) */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href="https://calendar.app.google/gAb9osZfSYNnnoLa8"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-full font-['Inter'] text-xs font-bold text-[var(--color-bg)] bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] shadow-xs"
          >
            Book Call
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[var(--color-card-surface)] text-[var(--color-text)] hover:text-[var(--color-accent)] border border-[var(--color-border)] shadow-xs"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu Sheet */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="sm:hidden px-6 pt-3 pb-6 bg-[var(--color-card-surface)] backdrop-blur-2xl border-b border-[var(--color-border)] shadow-xl"
          >
            <nav className="flex flex-col gap-1.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold text-[var(--color-text-secondary)] hover:bg-[var(--color-bg)] hover:text-[var(--color-text)] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 mt-2 border-t border-[var(--color-border)] flex flex-col gap-2">
                <a
                  href="/pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-full font-['Inter'] text-xs font-bold text-[var(--color-text)] bg-[var(--color-bg)] border border-[var(--color-border)]"
                >
                  <span>View Rates &amp; Packages</span>
                </a>
                <a
                  href="https://calendar.app.google/gAb9osZfSYNnnoLa8"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 rounded-full font-['Inter'] text-sm font-bold text-[var(--color-bg)] bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] shadow-md"
                >
                  <span>Book Strategy Call</span>
                  <Calendar className="w-4 h-4" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
