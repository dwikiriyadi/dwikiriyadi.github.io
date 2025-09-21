# Dwiki Riyadi — Personal Portfolio

A minimalist, responsive single-page portfolio built with Next.js (App Router), React, and TailwindCSS.

Tech highlights:
- Next.js 15 (App Router) + React 19
- TailwindCSS v4
- Fonts: Outfit (UI) and Fira Code (code)
- SPA-style navigation with smooth scrolling

## Quick Start

1. Install dependencies

   npm install

2. Run the dev server

   npm run dev

3. Open the site

   http://localhost:3000

## Configuration

- Medium articles: set your Medium handle via env var (optional)

  echo "NEXT_PUBLIC_MEDIUM_USERNAME=your_handle" >> .env.local

- Assets
  - Logo: public/logo.svg (provided). You can replace with your own logo file and update src/components/Header/Header.tsx if needed.
  - Portfolio images live in public/images.

## Project Structure

- src/app
  - layout.tsx — global layout, fonts, and styles
  - page.tsx — single-page composition (Hero, About, Portfolio, Articles, Contact)
- src/components
  - Header, About, Portfolio, Articles, Contact, Tab
- src/hooks
  - useMediumArticles.ts — fetch Medium RSS via rss2json, with client-side pagination
- src/types
  - article.d.ts, portfolio.d.ts

## Design & UX

- Brand colors
  - Primary: #C12323
  - Secondary: #212121
  - Background: #FFFFFF
- Mobile-first responsive layout
- Sticky header with hamburger menu
- Tabs for About and Portfolio sections
- Articles paginated (6 per page) with Previous/Next controls
- Contact with social icons and mailto link

## Notes

- This app uses public rss2json API to read Medium RSS feeds. You can swap to a self-hosted proxy if rate limits become an issue.
- Images are lightweight SVG placeholders for fast loads; replace them with real screenshots as needed.

## Build

npm run build
npm start
