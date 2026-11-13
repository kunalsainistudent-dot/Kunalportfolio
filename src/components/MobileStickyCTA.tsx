"use client";

import React from "react";
import { ArrowUpRight, Calendar, CreditCard } from "lucide-react";

/**
 * Mobile Sticky CTA bar (ported from Launch UI mobile sticky conversion pattern)
 * Surfaces high-conviction actions on small viewports with zero friction.
 * Inherits brand tokens: #171c29 canvas, #0c0e14 bar, #ee8733 accents, #171c29 text on orange.
 */

export default function MobileStickyCTA() {
  return (
    <aside
      aria-label="Mobile Quick Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0c0e14]/95 backdrop-blur-xl border-t border-[rgba(220,223,227,0.12)] py-2.5 px-4 shadow-[0_-4px_25px_rgba(0,0,0,0.5)]"
    >
      <div className="max-w-md mx-auto flex items-center gap-2.5">
        <a
          href="/pricing"
          className="flex-1 py-2.5 px-3 rounded-full bg-[#171c29] border border-[rgba(220,223,227,0.12)] text-[#ffffff] font-['Inter'] text-xs font-bold text-center flex items-center justify-center gap-1.5 active:scale-95 transition-transform hover:border-[#ee8733]"
        >
          <CreditCard className="w-3.5 h-3.5 text-[#ee8733]" />
          <span>View Rates</span>
        </a>

        <a
          href="https://calendar.app.google/gAb9osZfSYNnnoLa8"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-full bg-[#ee8733] text-[#171c29] orange-glow hover:bg-[#ed8532] font-['Inter'] text-xs font-bold text-center flex items-center justify-center gap-1.5 active:scale-95 transition-transform shadow-sm"
        >
          <span>Book Call</span>
          <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </a>
      </div>
    </aside>
  );
}
