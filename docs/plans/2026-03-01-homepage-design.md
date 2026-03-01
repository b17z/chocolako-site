# Innergy by Chocolako - Homepage Design

**Status:** Approved
**Date:** 2026-03-01

---

## Overview

Build Phase 1 of the Innergy by Chocolako website: a single-page homepage that establishes the brand expression before scaling to full site.

**Goal:** Chocolako looks at it and says "This feels like me."

---

## Tech Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | Next.js 14 (App Router) | Performance, DX, Vercel integration |
| Styling | Tailwind CSS + shadcn/ui | Rapid development, consistent design system |
| Animation | Framer Motion | Cinematic motion without Three.js complexity |
| Content | MDX files | Chocolako can update via Claude prompts |
| Hosting | Vercel | Zero-config deployment, preview URLs |

---

## Brand System

### Colors

```css
/* Primary */
--cacao-brown: #5c3d2e;
--espresso: #2d1f1a;

/* Secondary */
--jungle-green: #3e5648;
--sage: #a1b8a0;

/* Accent */
--oxidized-gold: #b87333;
--blush-pink: #d19a80;

/* Neutral */
--bone: #f5f0e8;
--sand: #e0d5c7;
```

### Typography

- **Headlines:** Cormorant Garamond (serif, editorial)
- **Body:** Inter (clean, readable)
- **Scale:** Fluid typography with clamp()

### Aesthetic

- Editorial, cinematic, textural
- "Timeless void" - darkness with warmth
- Otherworldly transmission feel
- High-end wellness/luxury brand positioning

---

## Homepage Sections

### 1. Hero
- Full-bleed background image with parallax on scroll
- Headline text fade-in with upward drift on load
- Two CTAs: "Work With Me" / "Explore Programs"
- Height: 100vh minimum

### 2. The Problem
- Three expandable panels: External, Internal, Inherited
- Click to expand with height animation + content fade
- Dark background, light text

### 3. Three Pathways to Embodied Leadership
- Three cards side-by-side (stacked on mobile)
- Staggered entrance animation (0.1s delay between)
- Each card: Masterclass ($297), SFI Training ($18K), Immersions
- Hover: subtle lift + shadow

### 4. Who This Is For
- Two columns: "This is for you if..." / "This isn't for you if..."
- Qualify in/out language
- Clean typography, minimal decoration

### 5. The Methodology
- SFI framework breakdown: Science, Lineage, Application
- Visual diagram or icon set
- Expandable sections for deeper content

### 6. Testimonials
- Single testimonial per slide (not carousel grid)
- Crossfade transition between slides
- Minimal: quote, name, title
- Auto-advance with pause on hover

### 7. The Founder
- Editorial portrait (offset/asymmetric layout)
- Short bio paragraph
- "Learn More" link (stubbed)

### 8. Shop Preview
- 4 product cards in grid
- Products: Chakra Healing Oils, Ceremonial Cacao, Yoga & Swimwear, Soulfelt Jewelry
- "Coming Soon" or link to external shop (stubbed)

### 9. Footer
- Three columns: Navigation, Contact, Social
- Email signup form (stubbed)
- Copyright + legal links

---

## Animation Strategy (Approach B: Cinematic Motion)

| Element | Animation |
|---------|-----------|
| Hero | Parallax scroll on background, text fade-in + drift up |
| Section reveals | Fade-in + slide-up on viewport entry (useInView) |
| Pathway cards | Staggered entrance (0.1s delay between) |
| Testimonials | Crossfade between slides |
| Text reveals | Headlines animate word-by-word on scroll |
| CTAs | Scale on hover, background transition |
| Navigation | Smooth dropdown, blur on scroll |
| Expand panels | Height animation + content fade |

### Performance Guardrails

- Use `will-change` sparingly (only during animation)
- Respect `prefers-reduced-motion` media query
- Lazy load images below the fold
- Interaction animations: < 300ms
- Reveal animations: < 600ms

---

## Stubbed Features

These render UI but don't function until Phase 4:

- Shop "Buy" buttons → placeholder or coming soon
- Email signup → form UI only, no submission
- "Book a Discovery Call" → placeholder link
- "Apply Now" → placeholder link
- Mighty Networks → not shown yet

See `docs/FEATURES.md` for full tracker.

---

## File Structure

```
/chocolako-site
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata
│   ├── page.tsx            # Homepage (imports sections)
│   └── globals.css         # Tailwind base + brand tokens
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── sections/           # Homepage sections
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Pathways.tsx
│   │   ├── WhoThisIsFor.tsx
│   │   ├── Methodology.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Founder.tsx
│   │   ├── ShopPreview.tsx
│   │   └── Footer.tsx
│   └── shared/             # Reusable components
│       ├── Button.tsx
│       ├── SectionWrapper.tsx
│       └── AnimatedText.tsx
├── content/                # MDX content (Phase 2+)
├── lib/
│   └── animations.ts       # Framer Motion variants
├── public/
│   └── images/             # Hero images, portraits
└── docs/
    ├── FEATURES.md
    ├── ROADMAP.md
    ├── PROMPTS.md
    └── plans/
        └── 2026-03-01-homepage-design.md
```

---

## Success Criteria

1. Homepage renders all 9 sections
2. Animations feel cinematic but not slow
3. Mobile responsive (works on iPhone SE to 4K)
4. Lighthouse performance > 90
5. Accessibility: keyboard nav, screen reader friendly
6. Brand colors and typography match rebrand doc
7. Chocolako approves the vibe

---

## Next Steps

1. Scaffold Next.js project with Tailwind + shadcn/ui
2. Configure brand tokens (colors, fonts)
3. Build sections top-to-bottom
4. Add Framer Motion animations
5. Deploy to Vercel for preview
6. Get Chocolako's feedback
7. Iterate until "This feels like me"

---

*Approved: 2026-03-01*
