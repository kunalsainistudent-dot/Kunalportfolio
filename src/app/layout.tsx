import type { Metadata, Viewport } from "next";
import "./globals.css";

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
  themeColor: "#0c0e14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Poppins:wght@600;700;800;900&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0c0e14] text-[#ffffff] font-sans antialiased min-h-screen selection:bg-[#ee8733] selection:text-[#ffffff] relative overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
