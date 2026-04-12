# Womb Wisdom YTT Landing Page — Design Document

**Date:** 2026-04-12
**Route:** `/womb-wisdom-yoga-training`
**Purpose:** Dedicated sales/conversion page for the 200-hour Womb Wisdom & Wellbeing Yoga Teacher Training in Morocco (August 1-22, 2026). This is the highest-priority page — Chocolako has 4 months to fill the cohort. This page will also serve as the design blueprint for the WordPress migration.

**Content Sources:**
- Existing page: chocolako.com/womb-wisdom-yoga-training (18 sections of deep content)
- PDF copy direction: Chocolako_Homepage_FULL_2026.docx.pdf (Section 05, path 03 — editorial tone and messaging)
- Photo assets: Google Drive links from PDF (Morocco YTT photo, founder photos, album)

---

## Aesthetic Direction

**Tone:** Editorial/magazine meets luxury retreat brochure. Warm, photographic, generous whitespace. This should feel like a Condé Nast Traveler feature on a transformational experience, not a course sales page.

**Design System:** Inherits from the existing chocolako-site editorial system:
- **Colors:** cacao (#482b17), espresso (#33281C), gold (#a67951), bone (#FAF8F5), sand (#EDE8E0), cream (#F5F1EB), rust (#8B5E3C)
- **Typography:** Cormorant Garamond (serif/headings) + Inter (sans/body)
- **Animations:** Framer Motion — staggered reveals on scroll, subtle entrance animations
- **Spacing:** Generous section padding (py-24 md:py-32), editorial-width containers

**Differentiation:** Asymmetric layouts, full-bleed photo sections, warm overlay treatments. The page builds emotional trust through editorial pacing — each section answers the next objection the reader has, leading her naturally to the application call.

---

## Architecture

**Route:** `app/womb-wisdom-yoga-training/page.tsx` (server component with metadata)

**Components:** `components/ytt/` directory with one component per section:

```
components/ytt/
  YTTHero.tsx           — Full-bleed photo hero with warm overlay
  YTTPainPoints.tsx     — "Do any of these sound familiar?" recognition block
  YTTFeminineBody.tsx   — Poetic feminine body expressions
  YTTWombCenter.tsx     — "Your Womb Is Your Ultimate Creation Center"
  YTTOverview.tsx       — Training description and outcomes
  YTTFounder.tsx        — Chocolako's bio and credentials
  YTTFaculty.tsx        — 6 guest faculty grid
  YTTModules.tsx        — 5 core learning modules
  YTTSchedule.tsx       — Daily schedule in Morocco
  YTTVenue.tsx          — Bab Zouina venue details + sustainability
  YTTWhoIsFor.tsx       — Ideal candidate profile
  YTTGains.tsx          — What you'll gain
  YTTTestimonials.tsx   — YTT-specific testimonials
  YTTPricing.tsx        — 3 room tiers, standard rates, deposit info
  YTTInclusions.tsx     — Included / Not Included split
  YTTRegistration.tsx   — 3-step process + requirements
  YTTStickyCTA.tsx      — Fixed bottom bar on scroll
```

Reuses existing `Footer.tsx` and `Navigation.tsx` from homepage.

---

## Section Design

### 1. YTTHero
- Full-viewport height, photo placeholder with warm semi-transparent overlay
- Small caps: "THE RETURN HOME"
- Large serif heading: "Womb Wisdom & Wellbeing YTT"
- Subhead: "A Yoga Alliance-recognized 200-hour Feminine Focused Yoga Teacher Training"
- Detail line: "7 days online + 14 days in Morocco · August 1-22, 2026"
- Body: "Success taught you to silence your body. Now it's time to listen."
- Primary CTA button: "Book Your Application Call"
- Photo: drive.google.com/file/d/1rSWxCVpihSEiKo8cnAkckYxBRk-IqkPS

### 2. YTTPainPoints
- Cream background
- Heading: "Do any of these sound familiar?"
- 11 pain points as editorial list items with subtle left gold border
- Feels like reading her own journal, not a checklist

### 3. YTTFeminineBody
- Sand background
- Heading: "Have You Noticed the Expressions of Your Feminine Body?"
- 4 poetic lines as large italic serif, staggered animation:
  - "She craves cycles"
  - "She thrives on rest"
  - "She needs to feel safe, sacred and held"
  - "She longs to be recognized and revered"

### 4. YTTWombCenter
- Bone background
- Heading: "Your Womb Is Your Ultimate Creation Center"
- Body: "The same intelligence that moves ocean tides moves through you..."
- CTA: "Start Your Journey" (scrolls to registration)

### 5. YTTOverview
- White background
- Editorial paragraphs describing the training transformation
- What she'll learn and who she'll become

### 6. YTTFounder
- Split layout: photo placeholder left, editorial bio right
- Full credentials: MPH, MBA, E-RYT 500, YACEP
- Personal story: 15 years, 20+ years yoga, fibroids, global journey
- The "If you've made it this far..." closing
- Photos: drive.google.com/file/d/1tNIdy5ZMRycRqgkhGD0JUYDQ7tFRxte2 or 1KY2qcVacRrO-XYRmfY12RsTyRHDPeGTZ

### 7. YTTFaculty
- Sand background
- 6 guest faculty in responsive grid (1 col mobile, 2 col md, 3 col lg)
- Each card: photo placeholder, name, credential/title
- Emma Perks, Ibu Robin, Dr. Michalina Drejza, Rachel Ellery, Jo Brown, Dr. Sujatha Kekada

### 8. YTTModules
- Bone background
- 5 modules as numbered cards (gold numbering, matching Pathways pattern)
- Each: module number, title, format tag (Virtual/Morocco Immersion), hours, description
- Alternating white/cream card backgrounds

### 9. YTTSchedule
- White background
- "A Day in Morocco" heading
- Clean timeline: 7am-7pm schedule as styled table/list
- Warm, inviting — not clinical

### 10. YTTVenue
- Full-width section, sand background
- "Bab Zouina, Ourika Valley, Atlas Mountains" heading
- Photo placeholder (large)
- Three Sacred Commitments as 3-column grid:
  - Human Equilibrium
  - Community Impact
  - Sustainability
- Amenities as flowing tag/pill list below

### 11. YTTWhoIsFor
- Cream background
- "This training is for the woman who..." heading
- 6 bullet points as editorial list with warm markers

### 12. YTTGains
- Sand background
- "What You'll Gain" heading
- 6 transformation items with subtle gold markers

### 13. YTTTestimonials
- Bone background
- Primary: Librette's testimonial (already exists)
- Same left-gold-border blockquote style as homepage

### 14. YTTPricing
- White background
- 3 room tiers side-by-side (lg:grid-cols-3):
  - Sovereign Path (Private): $7,888
  - Sisterhood Suite (Double): $7,288
  - Shared Blossom (Triple): $6,688
- $1,000 deposit option on all tiers
- Payment CTAs for each
- Note: Standard rates (past early bird deadline)

### 15. YTTInclusions
- Cream background
- Two columns: "What's Included" | "Not Included"
- Clean lists with checkmarks / x markers

### 16. YTTRegistration
- Sand background
- 3-step numbered process: Apply → Book Call → Pay
- Requirements list (passport, visa, etc.)
- Refund policy: "100% refund guaranteed before April 1, 2026" (update as needed)
- Certification requirements folded in here

### 17. YTTStickyCTA
- Fixed bottom bar, appears after scrolling past hero
- Semi-transparent warm background with backdrop blur
- "Womb Wisdom YTT — Morocco, August 2026" + "Book Your Application Call" button
- Hides when hero is visible

---

## Linking

- Homepage Pathways card 03 CTA → `/womb-wisdom-yoga-training`
- Navigation "In-Person" dropdown item → `/womb-wisdom-yoga-training`
- All "Book Your Application Call" buttons on this page → `href="#"` (Calendly link TBD)
- "Start Your Journey" CTAs → scroll to `#registration` anchor

---

## Photo Assets (Google Drive)

| Asset | Drive Link |
|-------|-----------|
| Morocco YTT hero | 1rSWxCVpihSEiKo8cnAkckYxBRk-IqkPS |
| SFI photo | 1MXke1W1qRVKI_zXoLx8-Pl-x-KfFQlas |
| Founder option 1 | 1tNIdy5ZMRycRqgkhGD0JUYDQ7tFRxte2 |
| Founder option 2 | 1KY2qcVacRrO-XYRmfY12RsTyRHDPeGTZ |
| Full photo album | folder: 1GccTyuktMzkzhZClTOQP68fbaWlkiKhr |
| Closing photo 1 | 1zojTJtmCErz-ntWJs2M6HhBpSyKQlXJM |
| Closing photo 2 | 1SF2mOMXRB_YSXrDapthGsWGSj37zKQTk |
| Additional | 1qky3FnO5GB3dvCgEGagsfP7BiRrmR39D |
| Additional | 1ubhUYYohgjSelTd2hWWmqvczmErkNDuE |
| Additional | 1Sa9EXv3Wf7KxgukwMMBEB-RFBkEO1HmV |

All photos use placeholders for now. These will be downloaded and integrated during WordPress migration.

---

## WordPress Migration Notes

This page maps 1:1 to Gutenberg blocks:
- Each section = `wp:group` with `alignfull`
- Typography = theme.json font families
- Colors = theme.json palette
- Grid layouts = `wp:columns`
- The sticky CTA would be a custom block or Kadence element

The Next.js version serves as both the client demo and the implementation spec for WordPress.
