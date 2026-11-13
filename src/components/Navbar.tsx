"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Calendar, Sparkles } from "lucide-react";

/**
 * Ported & adapted from Launch UI (components/sections/navbar/default.tsx & components/ui/navbar.tsx)
 * Inherits brand tokens: #171c29 canvas, #0c0e14 card/pill, #ee8733 accents, #ffffff/#dcdfe3 typography.
 */

const NAV_LINKS = [
  { name: "Services", href: "/#services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Instagram", href: "/#instagram-content" },
  { name: "Case Studies", href: "/#case-studies" },
  { name: "About Me", href: "/#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        scrolled
          ? "bg-[#171c29]/92 backdrop-blur-xl border-b border-[rgba(220,223,227,0.12)] shadow-[0_4px_25px_rgba(0,0,0,0.5)] py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Left: Brand Identity (Launch UI NavbarLeft pattern) */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/logo.png"
                alt="Kunal M Saini Logo"
                className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#ee8733] ring-2 ring-[#171c29] shadow-[0_0_8px_#ee8733]"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-['Inter'] text-base sm:text-lg font-bold text-[#ffffff] tracking-tight group-hover:text-[#ee8733] transition-colors">
                Kunal M Saini
              </span>
              <span className="font-['Inter'] text-[11px] font-semibold tracking-wider uppercase text-[#dcdfe3] flex items-center gap-1.5">
                <span>Performance &amp; AI</span>
                <span className="w-1 h-1 rounded-full bg-[#ee8733]"></span>
                <span className="text-[#ee8733] font-bold">@digitalkunalsaini</span>
              </span>
            </div>
          </a>
        </div>

        {/* Center: Desktop Navigation Bar (Launch UI Navigation pill) */}
        <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#0c0e14]/90 border border-[rgba(220,223,227,0.12)] backdrop-blur-xl shadow-xs">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full font-['Inter'] text-xs sm:text-sm font-semibold text-[#dcdfe3] hover:text-[#ffffff] hover:bg-[#171c29] transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Action Buttons (Launch UI NavbarRight pattern) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="/pricing"
            className="px-4 py-2 rounded-full font-['Inter'] text-xs sm:text-sm font-bold text-[#ffffff] bg-[#0c0e14] border border-[rgba(220,223,227,0.12)] hover:border-[#ee8733] hover:text-[#ee8733] transition-all duration-200 shadow-xs"
          >
            <span>Rate Card</span>
          </a>
          <a
            href="https://calendar.app.google/gAb9osZfSYNnnoLa8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-['Inter'] text-xs sm:text-sm font-bold text-[#171c29] bg-[#ee8733] orange-glow hover:bg-[#ed8532] active:scale-95 transition-all duration-200 shadow-sm"
          >
            <span>Book Strategy Call</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
          <a
            href="/#about"
            className="relative block w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden ring-2 ring-[#ee8733]/50 shadow-[0_0_10px_rgba(238,135,51,0.2)] hover:ring-[#ee8733] transition-all"
            title="About Kunal M Saini"
          >
            <img
              src="/profile.png"
              alt="Kunal M Saini Avatar"
              className="w-full h-full object-cover"
            />
          </a>
        </div>

        {/* Mobile Action & Menu Toggle */}
        <div className="flex sm:hidden items-center gap-2.5">
          <a
            href="https://calendar.app.google/gAb9osZfSYNnnoLa8"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 rounded-full font-['Inter'] text-xs font-bold text-[#171c29] bg-[#ee8733] orange-glow hover:bg-[#ed8532]"
          >
            Book Call
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-[#0c0e14] text-[#ffffff] hover:text-[#ee8733] border border-[rgba(220,223,227,0.12)] shadow-xs"
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
            className="sm:hidden px-6 pt-3 pb-6 bg-[#0c0e14]/98 backdrop-blur-2xl border-b border-[rgba(220,223,227,0.12)] shadow-xl"
          >
            <nav className="flex flex-col gap-1.5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-semibold text-[#dcdfe3] hover:bg-[#171c29] hover:text-[#ffffff] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 mt-2 border-t border-[rgba(220,223,227,0.12)] flex flex-col gap-2">
                <a
                  href="/pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-2.5 rounded-full font-['Inter'] text-xs font-bold text-[#ffffff] bg-[#171c29] border border-[rgba(220,223,227,0.12)]"
                >
                  <span>View Rates &amp; Packages</span>
                </a>
                <a
                  href="https://calendar.app.google/gAb9osZfSYNnnoLa8"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 rounded-full font-['Inter'] text-sm font-bold text-[#171c29] bg-[#ee8733] orange-glow hover:bg-[#ed8532]"
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
