# PayLTR - Cashflow-as-a-Service Platform

## Overview
PayLTR is a modern B2B BNPL (Buy Now Pay Later) platform delivering "Cashflow-as-a-Service" to Dutch entrepreneurs and SMEs. The platform provides flexible financing solutions integrated with trusted third-party services.

**Current State:** Full front-end implementation complete with responsive design and mobile navigation.

## Recent Changes
*Last updated: November 20, 2025*

### Initial Build
- ✅ Configured Vite for Replit environment (port 5000, HMR over WSS)
- ✅ Built complete landing page with hero, products, process flow, benefits, CTA, and footer
- ✅ Implemented responsive design with mobile-first navigation
- ✅ Added all three integration partners (Ponto, Algoan, Qred) to UX
- ✅ Dutch language content throughout
- ✅ Playter-inspired clean, conversion-optimized design

## Project Architecture

### Tech Stack
- **Frontend:** React 18 + TypeScript
- **Build Tool:** Vite 3
- **Styling:** CSS Modules (component-scoped)
- **Language:** Dutch (Netherlands market)

### Folder Structure
```
src/
├── components/
│   ├── Hero.tsx/.css - Navigation, hero section, stats
│   ├── Products.tsx/.css - Three integration cards (Ponto, Algoan, Qred)
│   ├── HowItWorks.tsx/.css - 3-step process flow
│   ├── Benefits.tsx/.css - Trust signals and value props
│   ├── CTA.tsx/.css - Call-to-action section
│   └── Footer.tsx/.css - Footer with partner badges
├── App.tsx - Main app component
├── App.css - Global styles
└── index.tsx - Entry point
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

### Vite Config
- Host: 0.0.0.0 (allows Replit proxy)
- Port: 5000 (required for webview)
- Strict port enforcement
- Secure HMR (WSS on port 443)

### Workflow
- **Name:** Start application
- **Command:** `npm run dev`
- **Output:** webview on port 5000
- **Status:** Running

## User Preferences
*To be added as preferences are expressed*

## Next Steps / Future Enhancements
- Add actual integration setup flows (OAuth, API connections)
- Implement application form with multi-step wizard
- Add dashboard for approved customers
- Integrate real partner APIs
- Add testimonials section
- Add FAQ section
- Implement analytics tracking
- Add Dutch language SEO optimization