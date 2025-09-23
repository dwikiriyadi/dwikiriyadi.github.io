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

## Customize and Reuse as a Template

You can quickly adapt this codebase for your own portfolio with minimal changes.

1) Portfolio data
   - Duplicate src/data/portfolio.template.ts to src/data/portfolio.ts
   - Follow the inline comments to add your projects.
   - Place screenshots in public/portfolio/<your_project>/ ... (absolute paths starting with "/" or relative paths work)

2) About section
   - Duplicate src/data/about.template.ts to src/data/about.ts
   - Edit OVERVIEW_TEXT, EXPERIENCES, and SKILLS. Icons come from @phosphor-icons/react and can be changed.

3) Site-wide config (Header, logos, downloads)
   - Duplicate src/data/site.template.ts to src/data/site.ts
   - Update your name, role, short brand, logo paths, GitHub URL, and the resume/portfolio PDF paths.
   - Header, mobile brand, and About download links read from this file.

4) Social links
   - Edit src/data/socials.ts to add/remove social profiles. These render in the Contact section.

5) Navigation
   - Edit src/data/navigation.ts to adjust section labels or order. SECTION_IDS controls scroll-spy.

6) Medium articles
   - Option A: set NEXT_PUBLIC_MEDIUM_USERNAME in .env.local (e.g. echo "NEXT_PUBLIC_MEDIUM_USERNAME=your_handle" >> .env.local)
   - Option B: duplicate src/data/articles.template.ts to src/data/articles.ts and set mediumUsername or rssUrl there.
   - Articles component paginates client-side and will read from your Medium feed.

7) Contact form
   - Option A: set NEXT_PUBLIC_FORMSUBMIT_ENDPOINT in .env.local (e.g. echo "NEXT_PUBLIC_FORMSUBMIT_ENDPOINT=https://formsubmit.co/ajax/you@example.com" >> .env.local)
   - Option B: duplicate src/data/contact.template.ts to src/data/contact.ts and set formEndpoint, messages, or disable the form (enabled: false).
   - Social links are controlled via src/data/socials.ts.

8) Run locally

   npm run dev

Open http://localhost:3000 and verify your About, Portfolio, Articles, and Contact sections.

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
