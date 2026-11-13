"use client";

import React from "react";
import { ArrowUpRight, ShieldCheck, Sparkles, Heart } from "lucide-react";

/**
 * Ported & adapted from Launch UI (components/sections/footer/default.tsx & components/ui/footer.tsx)
 * Inherits brand tokens: #171c29 canvas, #08090d footer, #ee8733 accents, #ffffff/#dcdfe3 typography.
 */

const FOOTER_COLUMNS = [
  {
    title: "Capabilities",
    links: [
      { text: "Meta & Google Ads Funnels", href: "/#services" },
      { text: "AI Systems & LLM Triage", href: "/#services" },
      { text: "Creative Strategy & Hook Matrix", href: "/#services" },
      { text: "Mobile CRO & Funnel Audits", href: "/#services" },
      { text: "Instagram Content & Tutorials", href: "/#instagram-content" },
    ],
  },
  {
    title: "Engagement",
    links: [
      { text: "Official Rate Card & Pricing", href: "/pricing" },
      { text: "10% Token Deposit Option", href: "/pricing" },
      { text: "Case Studies & Attribution", href: "/#case-studies" },
      { text: "About Kunal M Saini", href: "/#about" },
      { text: "Diagnostic Audit Form", href: "/#audit-form" },
    ],
  },
  {
    title: "Connect",
    links: [
      { text: "Book Strategy Call (Google Calendar)", href: "https://calendar.app.google/gAb9osZfSYNnnoLa8", external: true },
      { text: "Instagram: @digitalkunalsaini", href: "https://instagram.com/digitalkunalsaini", external: true },
      { text: "LinkedIn Profile", href: "https://linkedin.com/in/digitalkunalsaini786", external: true },
      { text: "Webmail: contact@digitalkunalsaini.com", href: "mailto:contact@digitalkunalsaini.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative z-10 w-full bg-[#08090d] border-t border-[rgba(220,223,227,0.12)] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
        {/* Main Footer Multi-Column Grid (Launch UI FooterContent pattern) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-12 border-b border-[rgba(220,223,227,0.12)]">
          {/* Brand Identity & Mission (Col Span 2 on large screens) */}
          <div className="sm:col-span-2 flex flex-col justify-between space-y-4">
            <div>
              <a href="/" className="flex items-center gap-3 group mb-3">
                <img
                  src="/logo.png"
                  alt="Kunal M Saini Logo"
                  className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
                />
                <div className="flex flex-col">
                  <span className="font-['Inter'] text-lg font-bold text-[#ffffff]">
                    Kunal M Saini
                  </span>
                  <span className="font-['Inter'] text-xs font-bold text-[#ee8733]">
                    @digitalkunalsaini
                  </span>
                </div>
              </a>

              <p className="font-['Inter'] text-xs sm:text-sm text-[#dcdfe3] max-w-sm leading-relaxed mb-4">
                Architecting hyper-scaled acquisition funnels, algorithmic ad execution, and
                bespoke enterprise AI systems for visionary founders.
              </p>
            </div>

            {/* System Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#171c29] border border-[rgba(220,223,227,0.12)] text-[11px] font-['Inter'] font-bold text-[#ffffff] w-fit shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ee8733] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ee8733]"></span>
              </span>
              <span>All Systems Nominal &bull; Global Availability</span>
            </div>
          </div>

          {/* Navigation Columns */}
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="flex flex-col space-y-3">
              <h4 className="font-['Inter'] text-xs font-bold uppercase tracking-wider text-[#ffffff]">
                {column.title}
              </h4>
              <ul className="flex flex-col space-y-2 font-['Inter'] text-xs text-[#dcdfe3]">
                {column.links.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="hover:text-[#ee8733] transition-colors inline-flex items-center gap-1"
                    >
                      <span>{link.text}</span>
                      {link.external && <ArrowUpRight className="w-3 h-3 text-[#ee8733]" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Sub-Footer (Launch UI FooterBottom pattern) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-['Inter'] text-[#dcdfe3]">
          <div className="flex flex-wrap items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Kunal M Saini. All Rights Reserved.</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="font-medium">Performance Marketing &amp; AI Engineering</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a href="/pricing" className="hover:text-[#ee8733] transition-colors">
              Terms &amp; Rates
            </a>
            <span>&bull;</span>
            <a
              href="https://calendar.app.google/gAb9osZfSYNnnoLa8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ed8532] font-bold text-[#ee8733] transition-colors"
            >
              Book Strategy Call
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
