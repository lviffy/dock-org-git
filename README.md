# Dock Foundation – NGO Website

A premium NGO website inspired by leading non-profits (UNICEF, World Vision, Save the Children, Charity: Water), themed with the Dock Consulting palette (deep navy + warm orange).

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS** with a custom design system

## Highlights

- Design tokens (CSS variables) for one-place re-theming: `app/globals.css` + `tailwind.config.ts`
- Scroll-reveal animations (`components/Reveal.tsx`) and animated impact counters (`components/AnimatedCounter.tsx`)
- Interactive donation widget with tier selection (`components/DonationWidget.tsx`)
- Partner marquee, micro-interactions, soft shadows and gradient accents
- SEO: rich metadata + Open Graph (`app/layout.tsx`), `app/sitemap.ts`, `app/robots.ts`
- Accessibility: skip link, semantic landmarks, labeled forms, `prefers-reduced-motion` support

## Pages

| Route | Description |
|---|---|
| `/` | Hero, impact stats, mission & vision, programs, success story, donation, testimonials, volunteer CTA, partners, news, donate banner |
| `/about` | Mission, vision, values, team |
| `/programs` | Six focus-area programs |
| `/news` | News & stories listing |
| `/get-involved` | Volunteer / partner / fundraise + signup form |
| `/donate` | Donation tiers + custom amount |
| `/contact` | Contact details + form |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Notes

- Images use [picsum.photos](https://picsum.photos) placeholders; replace with real photography.
- The donate flow is a UI demo; connect a payment gateway (Razorpay/Stripe) for real donations.
- Sample content lives in `lib/data.ts` for easy editing.
