# Hanane Spiers — hanane.pro

Production-ready personal brand site for **Hanane Spiers**: international TV Presenter, Emcee, Model, and Coach. Built with Next.js 14 (App Router), TypeScript, Tailwind, Framer Motion, and Resend.

## Stack
- Next.js 14 (App Router)
- TypeScript (strict)
- Tailwind CSS + CSS variables
- Framer Motion
- Lucide React icons
- Resend (booking enquiry email)
- next/image for all imagery
- Google Fonts: Playfair Display + Jost

## Local development

```bash
npm install
cp .env.local.example .env.local   # then fill in RESEND_API_KEY
npm run dev
```

Open http://localhost:3000

## Build

```bash
npm run build
npm start
```

## Environment variables

| Key | Description |
| --- | --- |
| `RESEND_API_KEY` | Resend API key. If unset, the /api/contact handler logs payloads to the server and returns 200 (dev fallback). |
| `CONTACT_TO_EMAIL` | Inbox that receives enquiries. Defaults to `hello@hanane.pro`. |
| `CONTACT_FROM_EMAIL` | Verified sender on Resend. Defaults to `noreply@hanane.pro`. |

## Replacing the placeholder imagery

The site currently renders with SVG placeholders so the design can be reviewed immediately.

To go live:
1. Drop real `.jpg` files into `/public/images/` using the same basenames listed in `public/images/README.txt`.
2. In `lib/data.ts`, change the six `image:` paths under `services` and `eventCategories` from `.svg` to `.jpg`.
3. In `components/sections/Hero.tsx` and `components/sections/About.tsx`, change `hero.svg`/`about.svg` to `hero.jpg`/`about.jpg`.
4. Add `og-image.jpg` (1200×630) for social previews.
5. Optional: remove `dangerouslyAllowSVG` from `next.config.mjs` once placeholders are gone.

## Project structure

```
app/
  layout.tsx       fonts, metadata
  page.tsx         section assembly
  globals.css      design tokens
  api/contact/route.ts   Resend handler
components/
  sections/        Nav, Hero, AwardBanner, Stats, Services,
                   EventsGrid, About, Showreel, Testimonials,
                   Clients, Press, Contact, Footer
  ui/              FadeIn, Eyebrow, Button
lib/
  data.ts          all editorial content
  types.ts         shared interfaces
public/
  images/          portraits + event grid
  logos/           press outlets (add SVGs)
```

## Deployment (Vercel)
1. Push to GitHub.
2. Import in Vercel.
3. Add env vars from the table above.
4. Deploy. Point `hanane.pro` at the project.

## Design system at a glance

| Token | Value |
| --- | --- |
| `--white` | `#FFFFFF` |
| `--off-white` | `#F9F8F6` |
| `--pearl` | `#F2F0EC` |
| `--ink` | `#1C1C1C` |
| `--charcoal` | `#3D3D3D` |
| `--stone` | `#8C8884` |
| `--warm-gold` | `#B89A6A` (used sparingly — accent only) |
| `--border` | `#E8E6E1` |

Typography: **Playfair Display** for editorial display + section titles, **Jost** for body, UI and captions. No gradients, no shadows beyond a 1px subtle card shadow, no border radius on buttons or cards.
