/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === "development"
// Vercel sets VERCEL_ENV at build time: "production", "preview" or "development".
const isPreview = process.env.VERCEL_ENV === "preview"

// Domains the Vercel Toolbar needs on preview deployments.
// Source: https://vercel.com/docs/vercel-toolbar/managing-toolbar
const toolbar = {
  script: ["https://vercel.live"],
  connect: ["https://vercel.live", "wss://ws-us3.pusher.com"],
  img: ["https://vercel.live", "https://vercel.com"],
  frame: ["https://vercel.live"],
  style: ["https://vercel.live"],
  font: ["https://vercel.live", "https://assets.vercel.com"],
}
const extra = (key) => (isPreview ? toolbar[key] : [])

// Pages are statically generated, so per-request nonces aren't possible.
// 'unsafe-inline' is required for the inline scripts Next.js adds to every page.
// See https://nextjs.org/docs/app/guides/content-security-policy#without-nonces
const csp = {
  "default-src": ["'self'"],
  "script-src": ["'self'", "'unsafe-inline'", ...(isDev ? ["'unsafe-eval'"] : []), ...extra("script")],
  "style-src": ["'self'", "'unsafe-inline'", ...extra("style")],
  "img-src": ["'self'", "data:", "blob:", ...extra("img")],
  "font-src": ["'self'", ...extra("font")],
  "connect-src": ["'self'", ...extra("connect")],
  "frame-src": isPreview ? toolbar.frame : ["'none'"],
  "object-src": ["'none'"],
  "base-uri": ["'self'"],
  "form-action": ["'self'"],
  "frame-ancestors": ["'none'"],
}

const cspHeader = [
  ...Object.entries(csp).map(([directive, sources]) => `${directive} ${sources.join(" ")}`),
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ")

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: cspHeader },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000" },
        ],
      },
    ];
  },
}

module.exports = nextConfig
