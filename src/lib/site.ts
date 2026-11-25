export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.processimpact.io").replace(/\/$/, "");
export const SITE_NAME = "Process Impact";
export const SITE_DESCRIPTION =
  "Expert ICS/OT network penetration testing, device pentesting, purple team exercises, and LOTL security training for critical infrastructure.";
export const CONTACT_EMAIL = "contact@processimpact.io";

// Every public page, used by the sitemap.
export const ROUTES = [
  "/",
  "/services",
  "/services/network-penetration-testing",
  "/services/device-penetration-testing",
  "/services/purple-team-exercises",
  "/academy",
  "/resources",
  "/blog",
  "/about",
  "/contact",
  "/privacy",
] as const;

const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Process Impact: ICS/OT Offensive Security & Training",
};

// Per-page metadata with canonical URL, Open Graph and Twitter card.
// Page-level openGraph replaces the root one, so the share image is set here too.
export function pageMetadata(route: string, title: string, description: string) {
  return {
    title,
    description,
    alternates: { canonical: route },
    openGraph: { type: "website" as const, siteName: SITE_NAME, url: route, title, description, images: [OG_IMAGE] },
    twitter: { card: "summary_large_image" as const, title, description, images: [OG_IMAGE.url] },
  };
}
