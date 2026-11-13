"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * Pulse Footer Architecture
 * - Darkest surface (var(--color-bg-darkest)) with hairline border
 * - Status indicator pill & multi-column navigation
 * - Pure brand.css variables (0 hardcoded hex colors)
 * - Retains all capability links, booking links, and contact channels
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
    <footer className="relative z-10 w-full bg-[var(--color-bg-darkest)] border-t border-[var(--color-border-hairline)] mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-12 border-b border-[var(--color-border)]">
          {/* Brand Identity & Mission */}
          <div className="sm:col-span-2 flex flex-col justify-between space-y-4">
            <div>
              <a href="/" className="flex items-center gap-3 group mb-3">
                <img
                  src="/logo.png"
                  alt="Kunal M Saini Logo"
                  className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
                />
                <div className="flex flex-col">
                  <span className="font-['Inter'] text-lg font-bold text-[var(--color-text)]">
                    Kunal M Saini
                  </span>
                  <span className="font-['Inter'] text-xs font-bold text-[var(--color-accent)]">
                    @digitalkunalsaini
                  </span>
                </div>
              </a>

              <p className="font-['Inter'] text-xs sm:text-sm text-[var(--color-text-secondary)] max-w-sm leading-relaxed mb-4">
                Architecting hyper-scaled acquisition funnels, algorithmic ad execution, and
                bespoke enterprise AI systems for visionary founders.
              </p>
            </div>

            {/* System Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] text-[11px] font-['Inter'] font-bold text-[var(--color-text)] w-fit shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-accent)]"></span>
              </span>
              <span>All Systems Nominal &bull; Global Availability</span>
            </div>
          </div>

          {/* Navigation Columns */}
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="flex flex-col space-y-3">
              <h4 className="font-['Inter'] text-xs font-bold uppercase tracking-wider text-[var(--color-text)]">
                {column.title}
              </h4>
              <ul className="flex flex-col space-y-2 font-['Inter'] text-xs text-[var(--color-text-secondary)]">
                {column.links.map((link) => (
                  <li key={link.text}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="hover:text-[var(--color-accent)] transition-colors inline-flex items-center gap-1"
                    >
                      <span>{link.text}</span>
                      {link.external && <ArrowUpRight className="w-3 h-3 text-[var(--color-accent)]" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-['Inter'] text-[var(--color-text-secondary)]">
          <div className="flex flex-wrap items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Kunal M Saini. All Rights Reserved.</span>
            <span className="hidden sm:inline">&bull;</span>
            <span className="font-medium">Performance Marketing &amp; AI Engineering</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a href="/pricing" className="hover:text-[var(--color-accent)] transition-colors">
              Terms &amp; Rates
            </a>
            <span>&bull;</span>
            <a
              href="https://calendar.app.google/gAb9osZfSYNnnoLa8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-accent-hover)] font-bold text-[var(--color-accent)] transition-colors"
            >
              Book Strategy Call
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
