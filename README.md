# Dr. LOKI's Dental & Orthodontic Centre

Marketing website for Dr. LOKI's Dental & Orthodontic Centre, Mogappair West, Chennai. Built by [Buildify](https://buildify-web.com).

## Tech Stack

- Next.js (Pages Router) + TypeScript
- Tailwind CSS, Framer Motion, Keen Slider
- EmailJS (contact form), Google Analytics 4

## Features

- Hero, services, team, clinic gallery and testimonials
- Teeth alignment section with WhatsApp consultation CTA
- Online consultation calendar that routes the booking to WhatsApp
- Get-in-touch form (EmailJS) and floating WhatsApp button
- SEO metadata, favicon set, social thumbnail, GA4 tracking

## Getting Started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
```

## Project Structure

```
public/assets/   Logos, favicons, photos, thumbnail
src/pages/       index.tsx, _app.tsx (GA4), _document.tsx
src/components/  Footer, GetInTouch, OnlineConsultation, TeethAlignment
src/styles/      globals.css
```

## Configuration

- WhatsApp number: `919840184964` (used across `src/pages/index.tsx` and `src/components/`)
- Contact email: smiles@drlokis.in
- EmailJS service/template/public key: `src/components/GetInTouch.tsx`
- GA4 measurement ID: `src/pages/_app.tsx`

## Deployment

Deploy on Vercel or any Node host that supports Next.js.

## Credits

Designed and developed by [Buildify](https://buildify-web.com).
