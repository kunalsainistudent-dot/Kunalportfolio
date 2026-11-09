import React from "react";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full bg-[#0c0e14]/98 border-t border-white/[0.08] backdrop-blur-2xl mt-auto shadow-[0_-1px_24px_rgba(0,0,0,0.7)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand & Mission */}
          <div className="flex flex-col gap-2 max-w-lg">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Kunal M Saini Logo"
                className="h-7 w-auto object-contain"
              />
              <span className="font-['Space_Grotesk'] text-lg font-bold text-[#ffffff]">
                Kunal M Saini
              </span>
              <span className="text-[#475569] font-['Inter'] text-sm">|</span>
              <span className="font-['Inter'] text-sm text-[#ee8733] font-semibold">
                @digitalkunalsaini
              </span>
            </div>
            <p className="font-['Inter'] text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Architecting hyper-scaled acquisition funnels, algorithmic ad execution, and
              bespoke enterprise AI systems for visionary founders.
            </p>
          </div>

          {/* Navigation & Social Profiles */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://calendar.app.google/gAb9osZfSYNnnoLa8"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#3f1e15]/70 hover:bg-[#3f1e15] text-[#ffd4b2] border border-[#ee8733]/40 font-['Plus_Jakarta_Sans'] text-xs font-semibold transition-all duration-200"
            >
              Book Strategy Call
            </a>
            <a
              href="/pricing"
              className="px-4 py-2 rounded-full bg-[#171c29] hover:bg-[#202738] text-[#dcdfe3] hover:text-[#ee8733] border border-white/[0.06] font-['Plus_Jakarta_Sans'] text-xs font-semibold transition-all duration-200"
            >
              Services &amp; Pricing
            </a>
            <a
              href="https://instagram.com/digitalkunalsaini"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#171c29] hover:bg-[#202738] text-[#dcdfe3] hover:text-[#ee8733] border border-white/[0.06] font-['Plus_Jakarta_Sans'] text-xs font-semibold transition-all duration-200"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com/in/digitalkunalsaini786"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#171c29] hover:bg-[#202738] text-[#dcdfe3] hover:text-[#ee8733] border border-white/[0.06] font-['Plus_Jakarta_Sans'] text-xs font-semibold transition-all duration-200"
            >
              LinkedIn
            </a>
            <a
              href="mailto:contact@digitalkunalsaini.com"
              className="px-4 py-2 rounded-full bg-[#171c29] hover:bg-[#202738] text-[#dcdfe3] hover:text-[#ee8733] border border-white/[0.06] font-['Plus_Jakarta_Sans'] text-xs font-semibold transition-all duration-200"
            >
              Webmail Contact
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.06] text-[#94A3B8] font-['Inter'] text-xs">
          <span>&copy; 2026 Kunal M Saini. All Rights Reserved.</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ee8733] shadow-[0_0_8px_#ee8733]"></span>
            <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">
              All Systems Nominal • Global Availability
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
