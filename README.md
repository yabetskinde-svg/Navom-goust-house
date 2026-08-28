# Navom Guest House — Landing Page

A modern, mobile-first, accessible landing page for Navom Guest House
(Hossana, Ethiopia), built with React, Tailwind CSS and `lucide-react`
icons. No backend, no pricing — every booking action opens a pre-filled
Telegram message instead.

## What to edit before you launch

Open **`src/siteConfig.js`** — it's the single source of truth for
contact info, location, and SEO metadata:

```js
export const TELEGRAM_URL = "https://t.me/basiliel_won";
export const PHONE_NUMBERS = ["0461780003", "0912686368"];
export const ROOM_COUNT = 18;

export const LOCATION_SHORT = "Hossana, Ethiopia";
export const LOCATION_FULL =
  "Hossana, Ethiopia — located directly behind Nock Gas Station.";
export const LANDMARK_NAME = "Nock Gas Station";

export const SITE_TITLE = "Navom Guest House — Guest House in Hossana, Ethiopia";
export const SITE_DESCRIPTION = "…";
export const SITE_URL = "https://navomguesthouse.example.com";
```

Every Telegram button on the site (nav, hero, each room card, the room
detail dialog, the sticky mobile CTA, the Find Us section, and the
footer) is generated from this file — the "ask about this room" links
even carry a pre-filled message naming the specific room, e.g.:

> "Hello Navom Guest House, I would like to ask about availability for
> the Garden View Room."

The "Ask for Directions" button carries its own pre-filled message:

> "Hello Navom Guest House, I'm trying to find your location. Could you
> please send me directions?"

There's also a `telegramStayUrl()` helper ready for a future date/guest
picker, which builds a message with room, check-in, check-out and guest
count — no price field, by design.

### No map, by design

The exact location is hard to pin down accurately on Google Maps, so the
site intentionally does **not** embed a map or link to GPS coordinates —
that risk of misleading a guest matters more than the convenience. The
Find Us section instead leans on the landmark guests already use in
person (`LANDMARK_NAME`, currently "Nock Gas Station") plus a one-tap
"Ask for Directions" Telegram button, so a real person closes the gap a
map can't.

If you'd like to add a Google Maps link back once you have verified,
exact coordinates, that would go in `siteConfig.js` as a new constant
and a corresponding link in `LocationSection.jsx` — it isn't there today
on purpose.

### Before deploying: update SEO/OG values

- `SITE_URL` in `siteConfig.js` and the `canonical`/`og:url` tags in
  `index.html` currently use a placeholder domain — swap in the real one.
- `public/og-image.jpg` is a copy of the exterior photo used for social
  link previews (Open Graph/Twitter Card). Replace it with a different
  image if you'd like.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

Outputs a static site to `dist/` — deploy anywhere (Netlify, Vercel,
GitHub Pages, any static host).

## Project structure

```
navom-guest-house/
├── index.html               # SEO meta, Open Graph, JSON-LD LodgingBusiness schema
├── public/og-image.jpg      # social-preview image
├── package.json / tailwind.config.js / postcss.config.js / vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx               # section order + skip link
    ├── index.css             # fonts, color tokens, focus states, reduced-motion
    ├── siteConfig.js         # ← edit this: contact, location, SEO, Telegram links
    ├── assets/                # the 7 property photos, renamed
    └── components/
        ├── Navbar.jsx          # Rooms / About / Location / Contact + Telegram CTA
        ├── Hero.jsx             # full-screen exterior.jpg hero, stat cards
        ├── RoomsSection.jsx     # 5 room cards + "ask about a room" modal
        ├── RoomModal.jsx        # room detail dialog (image, amenities, CTA)
        ├── VibeSection.jsx      # "the kind of quiet…" — hallway photo + trust points
        ├── PhotoGallery.jsx     # masonry gallery of all 7 real photos + lightbox
        ├── AboutSection.jsx     # "Why Navom" — 4 trust points
        ├── LocationSection.jsx  # Find Us: landmark route, contact card, Ask for Directions
        ├── Footer.jsx           # nav, contact, final CTA, copyright
        ├── StickyMobileCta.jsx  # unobtrusive bottom CTA, mobile only
        ├── Modal.jsx            # shared accessible dialog shell (Escape, focus, scroll-lock)
        └── Reveal.jsx           # scroll-in-view fade animation (IntersectionObserver)
```

## Design notes

- **Palette:** espresso ink (`#211a16`), warm linen background
  (`#f7f2ea`), brass accent (`#ac8a4e`), and a burgundy signature accent
  (`#6b1f2a`) pulled from the sash draped across the beds in the photos.
- **Type:** Fraunces (display/headlines) paired with Work Sans
  (body/UI), loaded via Google Fonts in `src/index.css`.
- **No prices anywhere.** Every CTA — "Check Availability", "Ask About
  a Room", "Book on Telegram" — routes to Telegram instead. The site was
  swept for price-related text before shipping; the only "price" mention
  is a non-numeric `"Contact for availability"` value in the JSON-LD
  schema, which search engines expect but never displays a figure.
- **Room detail experience:** clicking a room card's photo or title
  opens `RoomModal` — a larger image, full description, amenities, and
  an "Ask About Availability" button pre-filled with that room's name.
- **Real photo gallery:** `PhotoGallery` shows all 7 property photos in
  a masonry grid; clicking one opens a lightbox with next/previous,
  keyboard arrow-key navigation, Escape to close, and touch-swipe on
  mobile.
- **Sticky mobile CTA:** a slim "Check Availability →" bar appears on
  phones once you scroll past the hero, and hides itself again near the
  footer (which already has its own large CTA) so it never feels pushy.
- **Accessibility:** a "Skip to main content" link, visible focus rings
  on every interactive element (`:focus-visible`), `aria-label`s on
  icon-only buttons, `aria-modal`/`role="dialog"` + Escape + scroll-lock
  on both modals, decorative icons marked `aria-hidden`, and full
  `prefers-reduced-motion` support.
- **SEO:** descriptive `<title>`, meta description, canonical tag, Open
  Graph + Twitter Card tags, and a `LodgingBusiness` JSON-LD block with
  the real name, location and phone numbers.
- **Performance:** the hero image loads eagerly with `fetchpriority="high"`
  (it's the largest visible element on load); every other photo uses
  `loading="lazy"`; images carry explicit `width`/`height` to reduce
  layout shift.
- Animations use a lightweight `IntersectionObserver` wrapper
  (`Reveal.jsx`) — no extra animation library required.

## Photos used

| File in `src/assets/` | Original upload | Used in                                  |
| ---------------------- | ---------------- | ------------------------------------------ |
| `exterior.jpg`         | `seven.jpg`       | Hero background, gallery, OG image        |
| `hallway.jpg`          | `six.jpg`         | "The Vibe" section, gallery               |
| `room-1.jpg`           | `one.jpg`         | Garden View Room card + gallery           |
| `room-2.jpg`           | `two.jpg`         | Deluxe Mirror Room card + gallery         |
| `room-3.jpg`           | `three.jpg`       | Executive Comfort Room card + gallery     |
| `room-4.jpg`           | `four.jpg`        | Classic Wood Room card + gallery          |
| `room-5.jpg`           | `five.jpg`        | Twin Comfort Room card + gallery          |
