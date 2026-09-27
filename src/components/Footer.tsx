import React from "react";

export default function Footer() {
  return (
    <footer className="relative z-10 w-full bg-[#0a0e16]/95 border-t border-white/[0.08] backdrop-blur-2xl mt-auto shadow-[0_-1px_24px_rgba(0,0,0,0.7)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand & Mission */}
          <div className="flex flex-col gap-2 max-w-lg">
            <div className="flex items-center gap-3">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1WX1mg66dqCZAhLp1aoBOem3_fzPHB_BWqiDDtLDPSPsMDyEq3GX7fw3sKEPaH9q30isxYws6rLQ8GwwiAcCxCcwzcoRsyjvS-lnEY784PE_wOpk-ZuwYGro7f5vE7XUAVp2cKNUfT41Fj_bjucEwbREDvhU7FYx_jB1BNjWqRzUcjki8uFt32D-e9vBQLsREeerx8m2OA0Z5sMkPvH7YIMQXk7sIXyvpzBdJNHatBbNhWdfctN77AlACmL"
                alt="Kunal M Saini Logo"
                className="h-7 w-auto object-contain"
              />
              <span className="font-['Space_Grotesk'] text-lg font-bold text-[#dfe2ee]">
                Kunal M Saini
              </span>
              <span className="text-[#475569] font-['Inter'] text-sm">|</span>
              <span className="font-['Inter'] text-sm text-[#00e478] font-medium">
                digitalkunalsaini
              </span>
            </div>
            <p className="font-['Inter'] text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Architecting hyper-scaled acquisition funnels, algorithmic ad execution, and
              bespoke enterprise AI systems for visionary founders.
            </p>
          </div>

          {/* Social Profiles */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://linkedin.com/in/digitalkunalsaini786"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#1c2028] hover:bg-[#262a33] text-[#94A3B8] hover:text-[#00FF87] border border-white/[0.06] font-['Plus_Jakarta_Sans'] text-xs font-semibold transition-all duration-200"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/digitalkunalsaini"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#1c2028] hover:bg-[#262a33] text-[#94A3B8] hover:text-[#00FF87] border border-white/[0.06] font-['Plus_Jakarta_Sans'] text-xs font-semibold transition-all duration-200"
            >
              Instagram
            </a>
            <a
              href="mailto:contact@digitalkunalsaini.com"
              className="px-4 py-2 rounded-full bg-[#1c2028] hover:bg-[#262a33] text-[#94A3B8] hover:text-[#00FF87] border border-white/[0.06] font-['Plus_Jakarta_Sans'] text-xs font-semibold transition-all duration-200"
            >
              Webmail Contact
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.06] text-[#94A3B8] font-['Inter'] text-xs">
          <span>&copy; 2026 Kunal M Saini. All Rights Reserved.</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00FF87] shadow-[0_0_8px_#00FF87]"></span>
            <span className="font-['Plus_Jakarta_Sans'] text-[11px] font-bold uppercase tracking-wider text-[#94A3B8]">
              All Systems Nominal • Global Availability
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
