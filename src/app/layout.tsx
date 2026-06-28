import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Performance Marketer & Creative Designer | Portfolio",
  description: "Portfolio of a Performance Marketer & Creative Designer specializing in Google Ads, Meta Ads, LinkedIn Ads, Creative Design, SEO Content, and Data-Driven Growth.",
  keywords: [
    "Performance Marketer",
    "Creative Designer",
    "Google Ads",
    "Meta Ads",
    "LinkedIn Ads",
    "SEO",
    "Graphic Design",
    "Portfolio"
  ],
  authors: [{ name: "Professional Portfolio" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} dark scroll-smooth`}
    >
      <body className="bg-[#030014] text-[#E2E8F0] font-sans antialiased overflow-x-hidden selection:bg-[#4F46E5]/30 selection:text-cyan-400 min-h-screen">
        {children}
      </body>
    </html>
  );
}
