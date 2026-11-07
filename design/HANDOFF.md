# Portfolio redesign — implementation handoff

**For Claude Code.** Build the portfolio described here into this repo. `design-reference.dc.html` (next to this file) is the source of truth for the copy, layout, colours and data. It is written in a canvas component format, so treat it as a reference and don't copy it in as-is:

- `{{hole}}` → a value or prop
- `<sc-for list="{{x}}" as="y">` → `x.map(y => …)`
- `<sc-if value="{{c}}">` → `{c && …}`
- `renderVals()` → the page's data and state
- The `<helmet><style>` block → global CSS (keyframes, hover states, reduced-motion rules)
- Ignore `support.js`, `<x-dc>` and `data-props`.

## Target
- Stack: Next.js (App Router) + TypeScript. Use Tailwind if the repo already has it; otherwise use CSS Modules or global CSS. Follow the repo's existing setup if it differs.
- One page `/` with anchor sections: `#top`, `#work`, `#stack`, `#experience`, `#writing`, `#contact`.
- Make it statically renderable. Only the theme toggle and the blog filter are client components.

## Design tokens
Fonts (load with `next/font/google`):
- **Bricolage Grotesque** (weights 400/500/700/800, `opsz` axis): display and body text
- **JetBrains Mono** (weights 400/500/700): labels, metadata, code

Implement the colours as CSS variables on `:root` and `[data-theme="light"]`:

| token | dark | light |
|---|---|---|
| --bg | #0C0E0D | #F5F4EF |
| --surface | #111412 | #FFFFFF |
| --surface2 | #151916 | #EDECE6 |
| --line | #1E2320 | #E3E1D9 |
| --line2 | #262B28 | #D9D6CC |
| --line3 | #343B37 | #C2BEB2 |
| --ink | #ECEAE4 | #151716 |
| --body | #B9BDB7 | #3E4440 |
| --muted | #8E948F | #5C635E |
| --dot (hero dot grid) | #232825 | #D6D3C9 |
| --grid (card grid lines) | #1C211E | #E2E0D8 |
| --header | rgba(12,14,13,.82) | rgba(245,244,239,.85) |
| --acc | #C8F169 | #5A6C2F (the accent at 45% brightness) |
| --btn-bg / --btn-ink | #C8F169 / #0C0E0D | #151716 / #C8F169 |

- The `profile.ts` code card stays dark in both themes, with the accent at full brightness.
- Radii: buttons 10px, chips 8px or pill, cards 18–20px.
- Content max-width is 1200px. Side padding is `clamp(20px, 5vw, 56px)`.
- Section vertical padding is `clamp(64px, 9vw, 120px)`.

## Sections (in order)
1. **Sticky nav**, with a blurred background:
   - `~/sagnik_` logo with a blinking cursor
   - Links: work · stack · log · writing · contact
   - A 44×44 theme toggle button (sun/moon icons; the icon spins in when it changes)
2. **Hero**:
   - Pill reading "open to interesting projects", with a pulsing dot
   - H1 "Sagnik Ghosh." at `clamp(52px, 10vw, 128px)`, weight 800
   - Intro paragraph, then two calls to action: "See selected work" (filled) and "Get in touch" (outline)
   - Location and education line
   - The `profile.ts` code card on the right. It wraps below the text on narrow screens.
3. **Impact strip**: 4 stats in an auto-fit grid (min column 160px).
4. **About + Stack**: two columns that wrap. The stack is a list of rows, each with a category label and chips.
5. **Selected work**: 6 project cards in an auto-fit grid (min column 440px). Each card has a grid-pattern header with a big accent-coloured metric, then title, description, tech pills and a link.
6. **Experience**: a vertical timeline. The dot for the current role is filled and pulsing. The left column holds the résumé button and 2 certification cards (Credly links).
7. **Writing**:
   - Topic filter (All / AI / Backend / Performance), built as buttons with `aria-pressed`
   - A featured post card, then a list of rows
   - An empty-state message when a filter leaves only the featured post
   - An "all posts" link
8. **Contact**: big headline, the email as a large link, GitHub and LinkedIn buttons, footer.

## Behaviour
- **Theme**:
  - Default to the system preference (`prefers-color-scheme`); dark if there is none.
  - Store the choice in `localStorage` and apply it before first paint, with a small inline script in `<head>` that sets `data-theme`, so the page never flashes the wrong theme.
  - Colours, backgrounds and borders transition over 0.35s.
- **Load animation**: hero elements fade up 18px, staggered about 90ms apart. The code-card lines are staggered 80ms apart, starting at 500ms.
- **Scroll reveal**: use `animation-timeline: view()` inside `@supports`. An IntersectionObserver fallback is optional.
- **Hover**:
  - Cards lift by 4px, gain a shadow and their metric slides 4px.
  - Arrow icons nudge; nav links get an underline that grows in.
  - Chips rise 2px; outline buttons switch to the accent colour.
  - Blog rows get a background and an accent-coloured title.
- `prefers-reduced-motion: reduce` turns off all animations and transitions.
- Focus: show a visible `:focus-visible` outline in the accent colour. Touch targets must be at least 44px.

## Responsive
- No layout should depend on breakpoints. Use flex-wrap, auto-fit grids and `clamp()` type sizes, as in the reference.
- Check at 360, 390, 768, 1280, 1440 and 1920px wide: no horizontal scrolling, the nav wraps cleanly and the code card scrolls inside itself.

## Content to fill in (placeholders)
- Résumé PDF link. Put the file in `/public`. **Leave the phone number out of the site.**
- `href`s for the "case study" and "live site" links on the projects.
- Blog: the post titles are suggestions. Supply real posts, ideally as MDX in `content/posts/*.mdx` with frontmatter `title, date, tag, excerpt, readingTime`, rendered at `/writing/[slug]`, with "all posts" pointing to `/writing`. Replace the `[DATE]` and `[N] min read` placeholders.
- Pick one canonical domain: sagnikghosh.me or portfolio-sagnik.vercel.app.

## Done when
- The page matches the reference in both themes, has no layout shift when it loads, and has no console errors.
- Lighthouse scores are at least 95 for performance and at least 100 for accessibility on mobile.
- Metadata is set: title, description, Open Graph image and favicon.
