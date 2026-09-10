# Arun Kumar Ghorse — Portfolio (React + Vite + Tailwind)

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Build for production

```bash
npm run build
npm run preview   # sanity-check the build
```

Output goes to `dist/`. Deploy `dist/` (or connect the repo directly) to Vercel/Netlify — same as your existing site.

## Edit content

All real content (bio, timeline, skills, projects, achievements, contact info) lives in one place:
`src/data.js`. Change values there — no need to touch component files for text edits.

## Structure

```
src/
  data.js              content — edit here
  App.jsx              layout + scroll-spy nav
  components/
    Sidebar.jsx         desktop left nav + socials
    MobileNav.jsx        mobile top bar
    Profile.jsx          hero
    Timeline.jsx          bio + education timeline
    Skills.jsx            grouped skill tags
    Projects.jsx           filterable project list
    Achievements.jsx        LeetCode stats
    Contact.jsx              contact block
    Footer.jsx
```

## Add your photo

Drop it in `public/profile.jpg` — it's shown as a large circular photo at the top of the hero section (`grayscale` applied). If the file isn't there, it falls back to initials automatically.

## Dark / light mode

Toggle button sits top-right on desktop, and next to the menu icon on mobile. All colors are CSS variables (`src/index.css`, `:root` for dark, `.light` for light) so every component stays in sync automatically — nothing to change in the component files.

## Add project links

Each project in `src/data.js` has `liveUrl` and `repoUrl` — both default to `'#'`. Fill in real links; the two icon buttons at the top of each project card (an `Activity` chart icon for the live demo, `Github` for source) point wherever you put them.

## Theme

Monochrome (near-black `#0B0B0B` / off-white `#F2F2F0`) with a single red accent (`#FF383C`) used only for the status dot and hover states — Nothing-style restraint. Headings use Fraunces (serif); body is IBM Plex Sans; small tags/labels use IBM Plex Mono.

## Next steps worth doing before you call this "MAANG ready"

- Swap generic project descriptions for ones with a concrete metric or outcome per project (e.g. "reduced X", "handled Y requests") — recruiters skim for signal, not adjectives.
- Add a resume PDF link (`public/resume.pdf`, then link it from `Profile.jsx`).
- Fill in the real `liveUrl` / `repoUrl` values in `data.js`.
- Consider a proper OG image + `<meta property="og:*">` tags in `index.html` for link previews when you share it.
