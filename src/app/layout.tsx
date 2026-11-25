import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CONTACT_EMAIL, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

// Self-hosted at build time by next/font: no request to Google from visitors' browsers.
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Process Impact - ICS/OT Offensive Security & Training",
  description: SITE_DESCRIPTION,
  keywords: ["ICS security", "OT security", "penetration testing", "LOTL training", "industrial cybersecurity"],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: "/",
    title: "Process Impact - ICS/OT Offensive Security & Training",
    description: SITE_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Process Impact - ICS/OT Offensive Security & Training",
    description: SITE_DESCRIPTION,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Process Impact LLC",
  url: SITE_URL,
  logo: `${SITE_URL}/images/Process_Impact_Logo_Embedded_Clear_BG.svg`,
  email: CONTACT_EMAIL,
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased font-sans">
        <script
          type="application/ld+json"
          // Static, trusted object defined above; no user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
