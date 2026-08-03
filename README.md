# Brine Sea Marine Solutions — Website

Full Next.js 14 (App Router) + TypeScript + Tailwind CSS site, styled in a
navy/white corporate theme (matching bs-shipmanagement.com's visual
language, with Brine Sea's own content and sitemap).

## Setup steps

1. Copy this whole `brinesea` folder onto your machine and open it in VS Code.
2. Add your real logo image at `public/logo.jpeg` (any square-ish image works —
   the `LogoMark` component crops it into a circle).
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the dev server:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:3000` and check every route:
   - `/` Home
   - `/about`
   - `/services`
   - `/products`
   - `/industries`
   - `/projects`
   - `/gallery`
   - `/careers`
   - `/contact`

## What's still placeholder

- **Logo** — `public/logo.jpeg` is not included; add your real file.
- **Hero photography** — `HeroSlider.tsx` uses a gradient background. To use
  a real photo, add it to `public/` and follow the comment inside that file.
- **Contact details** — every phone/email/address/hotline field on
  `/contact` and the homepage `EmergencyCTA` is clearly marked
  `[to be provided]`. Search the codebase for `to be provided` to find every
  instance.
- **Contact form** — the form on `/contact` is UI-only; no submission
  handler is wired up yet (no backend/email API decided).
- **Gallery / Projects photography** — placeholder tiles, ready to swap for
  real images.
- **Careers listings** — no open roles listed; static "register your
  interest" copy for now.

## Brand tokens (tailwind.config.ts)

| Token | Hex | Use |
|---|---|---|
| `navy` | `#0A1F44` | headers, footer, dark sections |
| `navy-light` | `#123566` | secondary dark / hover |
| `accent` | `#1E63C7` | links, buttons, CTA band |
| `paper` | `#F5F7FA` | light section background |
| `ink` | `#131B2E` | body text |
| `muted` | `#5B6B85` | secondary text |
| `line` | `#E2E6EC` | borders/dividers |

## Structure

- `app/` — one folder per route, each page wrapped in `<PageShell>`
- `components/` — shared `TopBar`, `Footer`, `PageShell`, `PageHeader`, plus
  homepage sections (`HeroSlider`, `StatsBand`, `WelcomeSection`,
  `ImageShowcase`, `ServicesGrid`, `WhyChooseUs`, `PortsWeServe`,
  `EmergencyCTA`)
- Nav is a **sticky top navbar** (not a side rail) — logo left, horizontal
  menu, CTA button right, hamburger menu on mobile.

## If you hit a JSX/copy-paste error

If VS Code shows something like `Unexpected token. Did you mean {'>'}`:
1. Select all in the affected file, delete, and re-paste cleanly.
2. If it persists, paste through Notepad first, then copy from Notepad into
   VS Code (strips smart quotes/invisible characters).
3. Run **TypeScript: Restart TS Server** from the Command Palette
   (`Ctrl+Shift+P`).
