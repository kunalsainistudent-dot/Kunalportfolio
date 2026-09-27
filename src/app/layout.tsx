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
    "CRO",
  ],
  authors: [{ name: "Kunal M Saini" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B0F17",
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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0B0F17] text-[#dfe2ee] font-sans antialiased min-h-screen selection:bg-[#00FF87] selection:text-[#003919] relative overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
