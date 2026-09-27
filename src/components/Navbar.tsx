"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";

const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "AI Systems", href: "#ai-systems" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "About Me", href: "#about" },
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
          ? "bg-[#0a0e16]/85 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.7)] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="relative">
            <img
              src="https://lh3.googleusercontent.com/aida/AEtjO1WX1mg66dqCZAhLp1aoBOem3_fzPHB_BWqiDDtLDPSPsMDyEq3GX7fw3sKEPaH9q30isxYws6rLQ8GwwiAcCxCcwzcoRsyjvS-lnEY784PE_wOpk-ZuwYGro7f5vE7XUAVp2cKNUfT41Fj_bjucEwbREDvhU7FYx_jB1BNjWqRzUcjki8uFt32D-e9vBQLsREeerx8m2OA0Z5sMkPvH7YIMQXk7sIXyvpzBdJNHatBbNhWdfctN77AlACmL"
              alt="Kunal M Saini Logo"
              className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#00FF87] shadow-[0_0_8px_#00FF87]"></span>
          </div>
          <div className="flex flex-col">
            <span className="font-['Space_Grotesk'] text-lg font-bold text-[#dfe2ee] tracking-tight group-hover:text-white transition-colors">
              Kunal M Saini
            </span>
            <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-semibold tracking-wider uppercase text-[#b9cbb9] flex items-center gap-1">
              Performance & AI
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0a0e16]/70 border border-white/[0.08] backdrop-blur-xl shadow-[0_0_20px_rgba(0,0,0,0.5)]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 rounded-full font-['Plus_Jakarta_Sans'] text-sm font-medium text-[#94A3B8] hover:text-[#dfe2ee] hover:bg-white/[0.06] transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action & Profile */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="#audit-form"
            className="relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#003919] bg-[#00FF87] emerald-glow hover:brightness-110 active:scale-95 transition-all duration-200"
          >
            <span>Book Strategy Call</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </a>
          <a
            href="#about"
            className="relative block w-9 h-9 rounded-full overflow-hidden ring-2 ring-[#00FF87]/40 shadow-[0_0_12px_rgba(0,255,135,0.3)] hover:ring-[#00FF87] transition-all"
            title="Kunal M Saini"
          >
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuChNQ6EhDnduAe7OANNru152JW_gu5zsoYBBFAFCCNoiS2j6hxKjNzbeayYtpmkEdRU58BW_zWZMvEnJdJOWBTpvaj4PQHlAbmzCKQGNyd5Se9-OoiXapsQGoJeIbFONvXYHR0vQMHvBjXnVfTKE7gd2CYcGo2EIZkGVIT0pRgB7eRDhVL8No2uMykyjA259qE4ZqreJ5lDBV5VqVQMJKn8ejM1mHo1jcEjQ93dF_HghpN07HVwNMHm0A"
              alt="Kunal M Saini Avatar"
              className="w-full h-full object-cover"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-3">
          <a
            href="#audit-form"
            className="px-4 py-2 rounded-full font-['Plus_Jakarta_Sans'] text-xs font-bold text-[#003919] bg-[#00FF87] emerald-glow"
          >
            Book Call
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-[#181c24] text-[#dfe2ee] hover:text-white border border-white/10"
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
            className="sm:hidden px-6 pt-3 pb-6 bg-[#0a0e16]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
          >
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-base font-medium text-[#dfe2ee] hover:bg-white/[0.05] hover:text-[#00FF87] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#audit-form"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 py-3 rounded-full font-['Plus_Jakarta_Sans'] text-sm font-bold text-[#003919] bg-[#00FF87] emerald-glow"
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
