# Rahul Gupta — Portfolio

A responsive personal portfolio built with React + Vite, styled with CSS Modules, and animated with Framer Motion. Recreated from a `webapp.png` UI mockup with a light/day and dark/night theme, day/night profile photo switching, and a Dynamic-Island-inspired floating nav.

## Stack

- React 19 + Vite
- CSS Modules + CSS custom properties for theming (no CSS framework)
- Framer Motion for spring-based interactions
- Hand-rolled inline SVG icon set (no icon library dependency)

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint      # run oxlint
```

## Project structure

```
src/
  components/
    Navbar/         sticky header, mobile menu, active-link tracking
    DynamicIsland/   floating pill: contextual section label, quick nav, toasts (real Dynamic Island devices only)
    Hero/            intro copy + CTAs
    Profile/         day/night portrait crossfade
    About/           bio + animated stat counters
    Projects/        featured project cards
    Skills/          skill category cards
    Experience/      career timeline
    Contact/         contact channels + copy-to-clipboard email
    Footer/
    ui/              shared primitives (Button, SectionHeading, Reveal, ThemeToggle, Logo, SocialLinks)
    icons/           inline SVG icon set
  context/           ThemeContext (light/dark), IslandContext (scroll state + island state machine)
  hooks/             useActiveSection, useCountUp, usePrefersReducedMotion, useLockBodyScroll, useHasDynamicIsland
  data/              all copy/content in one place (portfolio.js)
  utils/             scrollToSection helper
```

## Notes

- Theme follows the OS preference on first visit, then remembers an explicit toggle in `localStorage`.
- **The Dynamic Island only renders on devices that actually have one** (iPhone 14 Pro/Pro Max, the 15 line, the 16 line). `useHasDynamicIsland` detects this client-side by checking for an iPhone user agent with a 59pt top safe-area inset — the value unique to those models (notch-only iPhones top out at 50pt, non-notch phones at 0-20pt). There's no direct "hasDynamicIsland" browser API, so this is the standard proxy for it. Everywhere else — desktop, Android, non-Pro iPhones, iPad — the navbar renders on its own with no reserved space and no toasts; `IslandContext` still tracks scroll/active-section for the navbar's own active-link highlighting, it just never mounts the visual pill.
- Where it does render, the island tracks scroll position, offers a quick-jump menu, and surfaces short-lived status toasts (theme changes, email copied, a one-time welcome message). It respects `prefers-reduced-motion`.
- Profile photos (`profile-day.jpg` / `profile-night.jpg`) live in `src/assets/images` and crossfade based on the active theme.
