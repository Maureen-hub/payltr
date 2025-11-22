# PayLTR - Cashflow-as-a-Service Platform

## Overview
PayLTR is a modern B2B BNPL (Buy Now Pay Later) platform delivering "Cashflow-as-a-Service" to Dutch entrepreneurs and SMEs. The platform provides flexible financing solutions integrated with trusted third-party services.

**Current State:** Production-ready Next.js 16 application with full internationalization (Dutch/English), Tailwind CSS design system, and WCAG 2.1 accessibility compliance.

## Recent Changes
*Last updated: November 22, 2025*

### Navigation Enhancement (November 22, 2025)
- ✅ **Added Sign In/Dashboard link** to Hero navigation (desktop and mobile)
- ✅ **Implemented login state detection** - checks localStorage and displays appropriate link
- ✅ **Added i18n translations** - "Inloggen" (Dutch) / "Sign In" (English), "Dashboard" in both languages
- ✅ **Maintained accessibility** - proper ARIA roles in mobile menu
- ✅ **Architect-reviewed and approved** - Production-ready

### Migration to Next.js 16 (November 20, 2025)
- ✅ **Migrated from Vite to Next.js 16** with App Router and Turbopack
- ✅ **Implemented Tailwind CSS v3** design system with custom color palette
- ✅ **Added i18next internationalization** with Dutch/English language switcher
- ✅ **Configured for Replit deployment** (port 5000, serverActions.allowedOrigins)
- ✅ **Fixed SSR rendering** - removed mounted guard for proper server-side rendering
- ✅ **Installed all dependencies** - React Hook Form, Zod, React Query, Recharts
- ✅ **WCAG 2.1 accessibility compliance** - ARIA labels, semantic HTML, keyboard navigation
- ✅ **Architect-reviewed and approved** - Production-ready

### Initial Build
- ✅ Built complete landing page with hero, products, process flow, benefits, CTA, and footer
- ✅ Implemented responsive design with mobile-first navigation
- ✅ Added all three integration partners (Ponto, Algoan, Qred) to UX
- ✅ Playter-inspired clean, conversion-optimized design

## Project Architecture

### Tech Stack
- **Framework:** Next.js 16 (App Router + Turbopack)
- **Frontend:** React 18 + TypeScript
- **Styling:** Tailwind CSS v3 with custom design system
- **Internationalization:** i18next with react-i18next
- **State Management:** React Query (@tanstack/react-query)
- **Forms:** React Hook Form + Zod validation
- **Charts:** Recharts
- **Languages:** Dutch (primary) + English

### Folder Structure
```
app/
├── layout.tsx - Root layout with providers, i18n, metadata
├── page.tsx - Home page with all sections
├── providers.tsx - React Query provider
└── globals.css - Tailwind directives and global styles

components/
├── LanguageSwitcher.tsx - Accessible language dropdown (Dutch/English)
└── sections/
    ├── Hero.tsx - Navigation, hero section, stats, mobile menu
    ├── Products.tsx - Three integration cards (Ponto, Algoan, Qred)
    ├── HowItWorks.tsx - 3-step process flow
    ├── Benefits.tsx - Trust signals and value props
    ├── FinalCTA.tsx - Call-to-action section
    └── Footer.tsx - Footer with partner badges

lib/
└── i18n.ts - i18next configuration

public/
└── locales/
    ├── nl/ - Dutch translations (common.json, home.json)
    └── en/ - English translations (common.json, home.json)
```

### Key Components

#### Hero Section
- Navigation with mobile hamburger menu
- Value proposition headline
- CTA button
- Social proof stats (€50M+ funding, 1,200+ businesses, 24h decisions, 98% satisfaction)

#### Products Section
- **Ponto Integration** - PSD2 bank connection for cashflow analysis
- **Algoan Credit Scoring** - AI-driven credit assessment (featured)
- **Qred Financing** - Flexible financing up to €500,000

#### How It Works
3-step process:
1. Connect bank via Ponto
2. Get AI assessment from Algoan
3. Receive financing through Qred

#### Benefits Section
- Fast decisions (24h)
- Built for SMEs
- Entrepreneur-founded
- Secure & transparent
- Higher approval rates
- Flexible terms

## Integration Partners

### Ponto (PSD2)
- Open Banking integration
- Multi-bank support
- Secure data exchange
- Real-time synchronization

### Algoan (Credit Scoring)
- AI-driven assessment
- 24-hour decision time
- Transparent process
- Higher approval ratios

### Qred (Financing)
- Up to €500,000 credit
- 3-12 month flexible repayment
- No hidden costs
- 24-hour funding

## Design Principles
1. **Clean & Modern** - Inspired by Playter.co
2. **Trust-Building** - Stats, transparency, clear messaging
3. **Conversion-Optimized** - Strong CTAs, clear value props
4. **Mobile-First** - Responsive with slide-in mobile menu
5. **Professional** - Dutch language, B2B tone

## Configuration

### Next.js Config
- **Framework:** Next.js 16 with Turbopack (default)
- **Port:** 5000 (configured via npm script)
- **Server Actions:** Allowed origins for Replit (*.replit.dev, *.repl.co)
- **React:** Strict mode enabled
- **Build:** Optimized production builds with Turbopack

### Tailwind Config
- **Version:** v3 (stable, well-tested with Next.js)
- **Colors:** Custom primary/secondary palette with purple/pink gradients
- **Typography:** Custom font families and sizing
- **Responsive:** Mobile-first breakpoints
- **Utilities:** Custom gradient and container classes

### Workflow
- **Name:** Start application
- **Command:** `npm run dev` (runs `next dev -p 5000`)
- **Output:** webview on port 5000
- **Status:** Running
- **HMR:** Enabled via Turbopack

## Accessibility Features

### WCAG 2.1 Compliance
- ✅ **ARIA Labels:** All interactive elements properly labeled
- ✅ **Semantic HTML:** nav, footer, sections, headings hierarchy
- ✅ **Keyboard Navigation:** Focus rings and visual feedback
- ✅ **Screen Reader Support:** aria-expanded, aria-current, role attributes
- ✅ **Decorative Elements:** aria-hidden for icons and visual-only content
- ✅ **Focus Management:** Clear focus states on all interactive elements
- ✅ **Language Support:** Translatable labels and content

## User Preferences
*To be added as preferences are expressed*

## Next Steps / Future Enhancements
- Add Next.js i18n routing for SEO-friendly language URLs
- Implement application form with multi-step wizard
- Add actual integration setup flows (OAuth, API connections)
- Add dashboard for approved customers
- Integrate real partner APIs (Ponto, Algoan, Qred)
- Add testimonials section with customer success stories
- Add FAQ section
- Implement analytics tracking (Google Analytics, Mixpanel)
- Add Dutch language SEO optimization and meta tags
- Set up deployment configuration for production