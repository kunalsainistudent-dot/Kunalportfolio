import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import InstagramFeed from "@/components/InstagramFeed";
import SocialProof from "@/components/SocialProof";
import CaseStudies from "@/components/CaseStudies";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] flex flex-col overflow-x-hidden">
      {/* Global Background Ambient Luminescence (Orange glows at 18% opacity per Pulse spec) */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[var(--color-accent)] opacity-[0.18] blur-[150px]" />
        <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-[var(--color-accent)] opacity-[0.10] blur-[140px]" />
        <div className="absolute top-2/3 -left-40 w-[500px] h-[500px] rounded-full bg-[var(--color-accent)] opacity-[0.10] blur-[150px]" />
        <div className="absolute -bottom-40 right-1/4 w-[500px] h-[500px] rounded-full bg-[var(--color-card-surface)] opacity-[0.50] blur-[160px]" />
      </div>

      {/* Sticky Glass Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 w-full flex-1">
        <Hero />
        <Services />
        <InstagramFeed />
        <SocialProof />
        <CaseStudies />
        <About />
        <ContactForm />
      </main>

      {/* Dark Footer */}
      <Footer />
    </div>
  );
}
