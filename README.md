# Process Impact Website

Official website for Process Impact LLC - ICS Offensive Security & Training

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Email:** Resend
- **Hosting:** Vercel

## Brand Colors

- **Primary Red:** #a51a15 (Process Impact brand color)
- **Background Neutrals:** #dcd6d1, #dbd6d0, #d3cdc8
- **Accent:** #d4cec9

## Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/process-impact-website.git
cd process-impact-website
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and fill in your values:
- `RESEND_API_KEY` - Get from https://resend.com/api-keys
- `NEXT_PUBLIC_CONTACT_EMAIL` - Your email for receiving contact form submissions

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
process-impact-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout with Header/Footer
│   │   ├── page.tsx           # Homepage
│   │   ├── contact/           # Contact page
│   │   ├── consulting/        # Consulting services page
│   │   ├── academy/           # Training academy page
│   │   ├── blog/              # Blog index
│   │   ├── about/             # About page
│   │   └── api/               # API routes
│   │       └── contact/       # Contact form API
│   ├── components/
│   │   ├── layout/            # Layout components (Header, Footer)
│   │   ├── features/          # Feature components (Hero, ContactForm, etc.)
│   │   └── ui/                # shadcn/ui components
│   ├── lib/                   # Utility functions
│   │   ├── utils.ts          # General utilities
│   │   └── mdx.ts            # MDX/blog utilities
│   ├── content/               # MDX content
│   │   ├── blog/             # Blog posts
│   │   └── case-studies/     # Case studies
│   └── styles/
│       └── globals.css       # Global styles
├── public/                    # Static assets
├── .env.local                # Local environment variables (not committed)
├── .env.example              # Environment variables template
└── tailwind.config.ts        # Tailwind configuration with brand colors
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

Required environment variables:

- `RESEND_API_KEY` - Resend API key for email functionality
- `NEXT_PUBLIC_CONTACT_EMAIL` - Email address to receive contact form submissions
- `NEXT_PUBLIC_SITE_URL` - Your site URL (for SEO and metadata)

## Features

### Phase 1 (Current)
- ✅ Responsive header with mobile menu
- ✅ Homepage with hero section
- ✅ Services preview cards
- ✅ Contact form with email integration
- ✅ Footer with navigation
- ✅ Brand color scheme applied
- ✅ Placeholder pages for all sections

### Phase 2 (Upcoming)
- Detailed consulting services pages
- Case studies
- Blog functionality with MDX
- Enhanced SEO

### Phase 3 (Future)
- Training academy enrollment
- Course management
- Payment processing (Stripe)
- Student dashboard

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy!

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm run start
```

## Custom Domain Setup

Once deployed to Vercel:

1. Go to your project settings in Vercel
2. Navigate to Domains
3. Add `processimpact.io`
4. Follow DNS configuration instructions
5. Add these DNS records at your domain registrar

## Contributing

This is a private project for Process Impact LLC.

## License

Copyright © 2025 Process Impact LLC. All rights reserved.

## Contact

For questions about this project, contact: contact@processimpact.io

## Notes

- The contact form requires a Resend API key to function
- All pages are server-side rendered for optimal SEO
- The site uses Next.js 14+ App Router with React Server Components
- Tailwind CSS is configured with custom brand colors
- shadcn/ui components are copied into the project (not installed as dependencies)
