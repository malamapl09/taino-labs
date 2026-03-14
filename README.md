# Taíno Labs

Marketing site for Taíno Labs — AI consulting and automation for businesses in the Dominican Republic.

## Stack

- **Framework**: Next.js 16 + TypeScript
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **i18n**: next-intl (Spanish default, English)
- **Fonts**: Instrument Serif + Geist

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  [locale]/
    layout.tsx          # Locale layout with fonts + providers
    page.tsx            # Landing page
components/
    nav.tsx             # Fixed nav with language switcher
    hero.tsx            # Hero section with watermark
    free-banner.tsx     # "Free quote" banner
    possibilities.tsx   # AI services grid (6 cards)
    trust.tsx           # Trust signals (4 stats)
    process.tsx         # How it works (4 steps)
    payment.tsx         # Payment terms (0/50/50)
    contact-form.tsx    # Contact form
    footer.tsx          # Footer
    reveal.tsx          # Scroll-reveal animation
    language-switcher.tsx
i18n/
    routing.ts          # Locale config (es default, as-needed prefix)
    request.ts          # Server request config
    navigation.ts       # createNavigation helpers
locales/
    es.json             # Spanish translations
    en.json             # English translations
```

## Deployment

Connected to Vercel with auto-deploy on push to `main`.

```bash
git push origin main
```
