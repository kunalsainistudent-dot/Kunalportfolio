import React from "react";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full bg-[#f7ece0] border-t border-[#eaddcf] mt-auto shadow-sm">
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
              <span className="font-['Space_Grotesk'] text-lg font-bold text-[#0c0a09]">
                Kunal M Saini
              </span>
              <span className="text-[#a8a29e] font-['Inter'] text-sm">|</span>
              <span className="font-['Inter'] text-sm text-[#ee8733] font-bold">
                @digitalkunalsaini
              </span>
            </div>
            <p className="font-['Inter'] text-xs sm:text-sm text-[#57534e] leading-relaxed">
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
              className="px-5 py-2.5 rounded-full bg-[#ee8733] hover:bg-[#ff6a1a] text-white font-['Plus_Jakarta_Sans'] text-xs font-bold transition-all duration-200 shadow-sm"
            >
              Book Strategy Call
            </a>
            <a
              href="/pricing"
              className="px-4 py-2 rounded-full bg-[#ffffff] hover:bg-[#fcf2e8] text-[#0c0a09] hover:text-[#ee8733] border border-[#eaddcf] font-['Plus_Jakarta_Sans'] text-xs font-bold transition-all duration-200"
            >
              Services &amp; Pricing
            </a>
            <a
              href="https://instagram.com/digitalkunalsaini"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#ffffff] hover:bg-[#fcf2e8] text-[#0c0a09] hover:text-[#ee8733] border border-[#eaddcf] font-['Plus_Jakarta_Sans'] text-xs font-bold transition-all duration-200"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com/in/digitalkunalsaini786"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#ffffff] hover:bg-[#fcf2e8] text-[#0c0a09] hover:text-[#ee8733] border border-[#eaddcf] font-['Plus_Jakarta_Sans'] text-xs font-bold transition-all duration-200"
            >
              LinkedIn
            </a>
            <a
              href="mailto:contact@digitalkunalsaini.com"
              className="px-4 py-2 rounded-full bg-[#ffffff] hover:bg-[#fcf2e8] text-[#0c0a09] hover:text-[#ee8733] border border-[#eaddcf] font-['Plus_Jakarta_Sans'] text-xs font-bold transition-all duration-200"
            >
              Webmail Contact
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#eaddcf] text-[#78716c] font-['Inter'] text-xs">
          <span>&copy; 2026 Kunal M Saini. All Rights Reserved.</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ee8733]"></span>
            <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-wider text-[#57534e]">
              All Systems Nominal • Global Availability
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
