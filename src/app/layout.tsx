import type { Metadata, Viewport } from "next";
import "./brand.css";
import "./globals.css";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export const metadata: Metadata = {
  title: "Kunal M Saini — Performance Marketing Specialist & AI Systems Expert",
  description:
    "Scaling Brands Through Performance Ads, Marketing Psychology & AI Automation. Helping high-growth businesses acquire high-intent leads and scale eCommerce revenue.",
  keywords: [
    "Performance Marketing",
    "AI Systems",
    "Meta Ads",
    "Google Ads",
    "Marketing Automation",
    "Growth Marketing",
    "Kunal M Saini",
    "digitalkunalsaini",
    "CRO",
  ],
  authors: [{ name: "Kunal M Saini" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#171c29",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#171c29] text-[#ffffff] font-sans antialiased min-h-screen selection:bg-[#ee8733] selection:text-[#171c29] relative overflow-x-hidden pb-14 md:pb-0">
        {children}
        <MobileStickyCTA />
      </body>
    </html>
  );
}
