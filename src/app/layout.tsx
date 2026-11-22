import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Self-hosted at build time by next/font: no request to Google from visitors' browsers.
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Process Impact - ICS/OT Offensive Security & Training",
  description: "Expert ICS/OT network penetration testing, device pentesting, purple team exercises, and LOTL security training for critical infrastructure.",
  keywords: ["ICS security", "OT security", "penetration testing", "LOTL training", "industrial cybersecurity"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
