"use client";

import React from "react";
import { ArrowUpRight, CreditCard } from "lucide-react";

/**
 * Pulse Mobile Sticky Conversion Bar
 * - Fixed bottom bar with hairline border & backdrop blur
 * - Dark text on orange background (var(--color-bg) on var(--color-accent))
 * - Pure brand.css variables (0 hardcoded hex colors)
 */

export default function MobileStickyCTA() {
  return (
    <aside
      aria-label="Mobile Quick Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-card-surface)]/95 backdrop-blur-xl border-t border-[var(--color-border-hairline)] py-2.5 px-4 shadow-[0_-4px_25px_rgba(0,0,0,0.5)]"
    >
      <div className="max-w-md mx-auto flex items-center gap-2.5">
        <a
          href="/pricing"
          className="flex-1 py-2.5 px-3 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text)] font-['Inter'] text-xs font-bold text-center flex items-center justify-center gap-1.5 active:scale-95 transition-transform hover:border-[var(--color-accent-border-40)]"
        >
          <CreditCard className="w-3.5 h-3.5 text-[var(--color-accent)]" />
          <span>View Rates</span>
        </a>

        <a
          href="https://calendar.app.google/gAb9osZfSYNnnoLa8"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-full bg-[var(--color-accent)] text-[var(--color-bg)] hover:bg-[var(--color-accent-hover)] font-['Inter'] text-xs font-bold text-center flex items-center justify-center gap-1.5 active:scale-95 transition-transform shadow-[0_4px_16px_var(--color-accent-glow)]"
        >
          <span>Book Call</span>
          <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </a>
      </div>
    </aside>
  );
}
