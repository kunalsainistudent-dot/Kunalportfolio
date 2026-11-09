"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0c0e14]/90 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.7)] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="/" className="flex items-center gap-3.5 group">
          <div className="relative">
            <img
              src="/logo.png"
              alt="Kunal M Saini Logo"
              className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#ee8733] shadow-[0_0_8px_#ee8733]"></span>
          </div>
          <div className="flex flex-col">
            <span className="font-['Space_Grotesk'] text-lg font-bold text-[#ffffff] tracking-tight group-hover:text-[#ff9747] transition-colors">
              Kunal M Saini
            </span>
            <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold tracking-wider uppercase text-[#dcdfe3] flex items-center gap-1.5">
              <span>Performance &amp; AI</span>
              <span className="w-1 h-1 rounded-full bg-[#ee8733]"></span>
              <span className="text-[#ee8733]">@digitalkunalsaini</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#171c29]/80 border border-white/[0.08] backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 rounded-full font-['Plus_Jakarta_Sans'] text-sm font-medium text-[#dcdfe3] hover:text-[#ffffff] hover:bg-white/[0.06] transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action & Profile */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="https://calendar.app.google/gAb9osZfSYNnnoLa8"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#ffffff] bg-[#ee8733] orange-glow hover:bg-[#ff9747] hover:brightness-110 active:scale-95 transition-all duration-200 shadow-lg"
          >
            <span>Book Strategy Call</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
          <a
            href="/#about"
            className="relative block w-9 h-9 rounded-full overflow-hidden ring-2 ring-[#ee8733]/50 shadow-[0_0_12px_rgba(238,135,51,0.35)] hover:ring-[#ee8733] transition-all"
            title="Kunal M Saini"
          >
            <img
              src="/profile.png"
              alt="Kunal M Saini Avatar"
              className="w-full h-full object-cover"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-3">
          <a
            href="/pricing"
            className="px-4 py-2 rounded-full font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#ffffff] bg-[#ee8733] orange-glow"
          >
            Pricing
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#171c29] text-[#dcdfe3] hover:text-white border border-white/10"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="sm:hidden px-6 pt-3 pb-6 bg-[#0c0e14]/98 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
          >
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-base font-medium text-[#dcdfe3] hover:bg-white/[0.05] hover:text-[#ee8733] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://calendar.app.google/gAb9osZfSYNnnoLa8"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 py-3 rounded-full font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#ffffff] bg-[#ee8733] orange-glow"
              >
                <span>Book Strategy Call</span>
                <Sparkles className="w-4 h-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
