import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SocialProof from "@/components/SocialProof";
import CaseStudies from "@/components/CaseStudies";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0B0F17] text-[#dfe2ee] flex flex-col overflow-x-hidden">
      {/* Global Background Ambient Luminescence */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#7701d0]/15 blur-[130px]" />
        <div className="absolute top-1/4 -right-40 w-96 h-96 rounded-full bg-[#00FF87]/10 blur-[130px]" />
        <div className="absolute top-2/3 -left-40 w-96 h-96 rounded-full bg-[#7701d0]/10 blur-[140px]" />
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 rounded-full bg-[#00FF87]/10 blur-[150px]" />
      </div>

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 w-full flex-1">
        <Hero />
        <Services />
        <SocialProof />
        <CaseStudies />
        <About />
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
