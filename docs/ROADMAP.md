# Innergy by Chocolako - Website Roadmap

## Philosophy

**Nail the brand expression first.**

Building a full multi-page site before validating the visual direction leads to rework. We're starting with the homepage to establish the cinematic, editorial, otherworldly aesthetic that matches Chocolako's vision. Once she approves the vibe, we scale.

---

## Phase 1: Homepage (Current)

**Goal:** Establish the brand expression and visual identity

**What we're building:**
- Full homepage with all sections from the rebrand doc
- Cinematic motion (Framer Motion animations, parallax, scroll reveals)
- Brand color palette and typography system
- Responsive design (mobile-first)
- Stubbed CTAs (shop, booking, email signup)

**Sections:**
1. Hero (full-bleed image, headline, CTAs)
2. The Problem (expandable content)
3. Three Pathways to Embodied Leadership
4. Who This Is For (qualify in/out)
5. The Methodology (SFI framework)
6. Testimonials (carousel/slider)
7. The Founder (Chocolako bio)
8. Shop Preview (stubbed)
9. Footer (nav links, email signup, socials)

**Deliverable:** A live homepage on Vercel that captures the "timeless, otherworldly, editorial" aesthetic

**Success criteria:** Chocolako looks at it and says "This feels like me."

---

## Phase 2: Navigation & Core Pages

**Goal:** Build out the site structure

**Pages to add:**
- In-Person landing page (with links to individual offerings)
- Online landing page (with links to individual offerings)
- About / Founder page (expanded bio)
- Contact / Work With Me page

**Navigation:**
- Top bar: In-Person | [LOGO] | Online
- Dropdown menus per the rebrand doc
- Mobile hamburger menu with smooth animations

---

## Phase 3: Offering Pages

**Goal:** Individual pages for each program/retreat

**Pages:**
- Retreats (Egypt, Poland, Portugal, Kenya)
- Womb Wisdom YTT (Morocco, Bali)
- SFI 9-Month Training
- Cacao Facilitation Certification
- Speaking & Workshops
- Morphing Membership

**Each page includes:**
- Hero with dates/location
- Program description
- What's included
- Testimonials specific to that offering
- Pricing & CTA

---

## Phase 4: Integrations

**Goal:** Connect external services

- Shop integration (Shopify/Gumroad)
- Email signup (ConvertKit/Mailchimp)
- Calendly embeds for discovery calls
- Application forms (Typeform/Tally)
- Mighty Networks membership link

See `FEATURES.md` for full list of stubbed features.

---

## Phase 5: Polish & Launch

**Goal:** Final refinements and go-live

- Performance optimization (image compression, lazy loading)
- SEO setup (meta tags, OG images, sitemap)
- Analytics (Plausible, Fathom, or GA4)
- Final QA across devices
- Domain connection (chocolako.com)
- Launch!

---

## Content Management

Chocolako will update content using Claude Code (or Claude Desktop).

**Content lives in `/content` as MDX files:**
```
/content
  /retreats
    egypt-april-2026.mdx
    kenya-nov-2026.mdx
  /trainings
    womb-wisdom-ytt.mdx
    sfi-certification.mdx
  /testimonials.mdx
  /founder.mdx
```

See `PROMPTS.md` for how to ask Claude to update content.

---

## Timeline

We're intentionally **not** putting time estimates here. The phases flow naturally based on:
1. Chocolako's feedback on each phase
2. Availability for review sessions
3. Decisions on stubbed features (which platforms to use)

Move to the next phase when the current phase feels complete.

---

*Last updated: 2026-03-01*
