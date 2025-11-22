# PayLTR - Cashflow-as-a-Service Platform

A modern B2B BNPL (Buy Now Pay Later) platform delivering "Cashflow-as-a-Service" to Dutch entrepreneurs and SMEs.

## Overview 

PayLTR provides flexible financing solutions integrated with three trusted third-party services:
- **Ponto** - PSD2 bank connection for real-time cashflow analysis
- **Algoan** - AI-driven credit scoring with 24-hour decisions
- **Qred** - Flexible financing up to €500,000

## Tech Stack

- **Frontend:** React 18 + TypeScript
- **Build Tool:** Vite 3
- **Styling:** Component-scoped CSS
- **Language:** Dutch (Netherlands market)

## Features

✅ **Modern Landing Page**
- Hero section with compelling value proposition
- Social proof stats (€50M+ funding, 1,200+ businesses)
- Product showcase for all three integrations
- 3-step "How It Works" process flow
- Trust-building benefits section
- Professional footer with partner badges

✅ **Fully Responsive Design**
- Mobile-first approach
- Hamburger menu navigation for mobile devices
- Responsive grids and typography

✅ **Conversion Optimized**
- Clean, Playter-inspired design language
- Strong calls-to-action throughout
- Clear value propositions
- Trust signals and transparency

## Project Structure

```
src/
├── components/
│   ├── Hero.tsx/.css - Navigation, hero section, stats
│   ├── Products.tsx/.css - Integration cards (Ponto, Algoan, Qred)
│   ├── HowItWorks.tsx/.css - 3-step process flow
│   ├── Benefits.tsx/.css - Trust signals and value props
│   ├── CTA.tsx/.css - Call-to-action section
│   └── Footer.tsx/.css - Footer with partner badges
├── App.tsx - Main app component
├── App.css - Global styles
└── index.tsx - Entry point
```

## Getting Started

### Run the Application
Simply hit the "Run" button in Replit, or use:
```bash
npm run dev
```

The application will be available on port 5000.

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Recent Updates

**November 20, 2025**
- ✅ Complete front-end implementation with all components
- ✅ Fixed Vite configuration for Replit environment (port 5000)
- ✅ Resolved WebSocket/HMR connection issues
- ✅ Added mobile-responsive navigation with hamburger menu
- ✅ Implemented all three integration partners in UX
- ✅ Professional Dutch language content throughout

## Configuration Notes

The Vite configuration has been optimized for Replit:
- Host: `0.0.0.0` (allows Replit proxy)
- Port: `5000` (required for webview)
- HMR: Disabled (to avoid WebSocket errors in Replit environment)
- Note: Manual page refresh required to see code changes during development

## Next Steps

Future enhancements could include:
- OAuth integration flows for Ponto, Algoan, and Qred
- Multi-step application form with wizard interface
- Customer dashboard for approved users
- Real-time API integrations with partners
- Testimonials and case studies section
- FAQ section
- Analytics tracking
- SEO optimization for Dutch market

## Learn More

- [React Documentation](https://reactjs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)