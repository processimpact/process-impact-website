import type { Metadata } from "next";
import "../styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Process Impact - ICS Offensive Security & Training",
  description: "Expert ICS penetration testing, red team operations, and LOTL security training for critical infrastructure.",
  keywords: ["ICS security", "OT security", "penetration testing", "LOTL training", "industrial cybersecurity"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
