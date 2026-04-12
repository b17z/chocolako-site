# Chocolako.com Redesign — Look & Feel Demo

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild the chocolako-site homepage to match Chocolako's updated 15-section copy architecture and editorial design direction (warm, photographic, Meghan Currie-inspired), and add an /invest landing page. This is a visual demo for client approval before a WordPress rebuild.

**Architecture:** Overhaul the existing Next.js 16 app in-place. Replace the dark/ethereal/Three.js aesthetic with a warm, white-background editorial design using full-bleed photography placeholders. Rewrite all section components with her exact copy. Add /invest as a new route. No backend, no working forms — pure visual demo.

**Tech Stack:** Next.js 16, React 19, TailwindCSS 4, Framer Motion, TypeScript. Remove Three.js/R3F dependencies (no longer needed).

---

## Phase 1: Foundation — Theme, Nav, Layout

### Task 1: Update color palette and typography in globals.css

**Files:**
- Modify: `app/globals.css`

**Context:** The current theme is dark-mode-first with gold glows and particle effects. The new design is light-mode-first: white/bone backgrounds, warm brown (#482b17) text, gold (#a67951) as a subtle accent. Inspired by meghancurrieyoga.com's warm minimalism.

**Step 1: Rewrite the CSS theme**

Replace the entire `globals.css` with the new editorial theme:

```css
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  /* Brand colors — Innergy by Chocolako (Editorial Warm) */
  --color-cacao: #482b17;
  --color-espresso: #33281C;
  --color-warm-brown: #482b17;
  --color-gold: #a67951;
  --color-rust: #8B5E3C;
  --color-bone: #FAF8F5;
  --color-sand: #EDE8E0;
  --color-cream: #F5F1EB;
  --color-sage: #92A05F;
  --color-jungle: #3B5A47;

  /* shadcn/ui theme tokens */
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
  --font-serif: var(--font-cormorant), ui-serif, Georgia, serif;
  --font-mono: ui-monospace, SFMono-Regular, monospace;
  --color-sidebar-ring: var(--sidebar-ring);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar: var(--sidebar);
  --color-chart-5: var(--chart-5);
  --color-chart-4: var(--chart-4);
  --color-chart-3: var(--chart-3);
  --color-chart-2: var(--chart-2);
  --color-chart-1: var(--chart-1);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --radius-2xl: calc(var(--radius) + 8px);
  --radius-3xl: calc(var(--radius) + 12px);
  --radius-4xl: calc(var(--radius) + 16px);
}

:root {
  --radius: 0.625rem;
  --background: #FAF8F5; /* bone — light, warm white */
  --foreground: #482b17; /* warm brown — primary text */
  --card: #FFFFFF;
  --card-foreground: #482b17;
  --popover: #FFFFFF;
  --popover-foreground: #482b17;
  --primary: #482b17; /* warm brown */
  --primary-foreground: #FAF8F5;
  --secondary: #F5F1EB; /* cream */
  --secondary-foreground: #482b17;
  --muted: #EDE8E0; /* sand */
  --muted-foreground: #6B5744;
  --accent: #a67951; /* gold/tan accent */
  --accent-foreground: #FFFFFF;
  --destructive: oklch(0.577 0.245 27.325);
  --border: #E5DED4;
  --input: #E5DED4;
  --ring: #a67951;
  --chart-1: #482b17;
  --chart-2: #3B5A47;
  --chart-3: #a67951;
  --chart-4: #92A05F;
  --chart-5: #8B5E3C;
  --sidebar: #F5F1EB;
  --sidebar-foreground: #482b17;
  --sidebar-primary: #482b17;
  --sidebar-primary-foreground: #FAF8F5;
  --sidebar-accent: #a67951;
  --sidebar-accent-foreground: #482b17;
  --sidebar-border: #E5DED4;
  --sidebar-ring: #a67951;
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  body {
    @apply bg-background text-foreground;
  }
}

/* Editorial utilities */
@layer utilities {
  .section-padding {
    @apply px-6 md:px-12 lg:px-24 py-20 md:py-28 lg:py-36;
  }

  .editorial-narrow {
    @apply max-w-2xl mx-auto;
  }

  .editorial-wide {
    @apply max-w-6xl mx-auto;
  }
}
```

Remove all glow effects, particle animations, sacred geometry animations, and dark mode overrides. The site is light-mode only.

**Step 2: Verify the build compiles**

Run: `pnpm build`
Expected: Compiles (may have warnings from components not yet updated, that's fine)

**Step 3: Commit**

```bash
git add app/globals.css
git commit -m "feat: overhaul theme to warm editorial palette (bone/brown/gold)"
```

---

### Task 2: Remove Three.js dependencies and sacred geometry

**Files:**
- Delete: `components/three/SacredGeometry.tsx`
- Delete: `components/shared/ParticleField.tsx`
- Delete: `components/shared/GlowText.tsx`
- Delete: `components/shared/BreathingElement.tsx`
- Delete: `components/shared/SectionDivider.tsx`
- Modify: `package.json` (remove @react-three/drei, @react-three/fiber, three, @types/three)

**Step 1: Delete the files**

```bash
rm components/three/SacredGeometry.tsx
rm components/shared/ParticleField.tsx
rm components/shared/GlowText.tsx
rm components/shared/BreathingElement.tsx
rm components/shared/SectionDivider.tsx
rmdir components/three
```

**Step 2: Remove Three.js packages**

```bash
pnpm remove @react-three/drei @react-three/fiber three @types/three
```

**Step 3: Commit**

```bash
git add -A
git commit -m "chore: remove Three.js, particle effects, and ethereal utilities"
```

---

### Task 3: Rewrite Navigation to match new structure

**Files:**
- Modify: `components/shared/Navigation.tsx`

**Context:** Chocolako's spec:
- Logo centered: "INNERGY BY CHOCOLAKO" (with registered trademark)
- Left nav: IN-PERSON (dropdown) | ONLINE (dropdown)
- Right nav: SHOP | WORK WITH ME
- Sticky, clean, editorial. White bg when scrolled. Transparent initially.
- Dropdown items per her PDF spec.

**Step 1: Rewrite Navigation.tsx**

Update the nav links to match her exact structure:

```typescript
const inPersonLinks = [
  { href: "/womb-wisdom-morocco", label: "Womb Wisdom YTT — Morocco (August 2026)" },
  { href: "/womb-wisdom-bali", label: "Womb Wisdom YTT — Bali (October 2026)" },
  { href: "/cacao-training", label: "Cacao Ceremony Facilitation Training" },
  { href: "/sfi-immersions", label: "SFI Immersions and Retreats" },
  { href: "/speaking", label: "Speaking & Workshops" },
]

const onlineLinks = [
  { href: "/morphing", label: "Morphing™ Private Membership" },
  { href: "/sfi-certification", label: "SFI Masterclasses and Certifications" },
  { href: "/resources", label: "Resources & Writings" },
  { href: "/book", label: "Book" },
]
```

Change the nav styling from dark (espresso/bone) to editorial light:
- Default: transparent with warm-brown text
- Scrolled: white/bone bg with subtle shadow, warm-brown text
- Dropdown: white bg, warm-brown text, gold hover
- Logo text: `INNERGY BY CHOCOLAKO®` in serif font, warm-brown

The mobile menu should also switch to light bg (bone/white) with warm-brown text.

**Step 2: Verify navigation renders correctly**

Run: `pnpm dev`
Check: Navigation shows with correct links, light theme, logo centered

**Step 3: Commit**

```bash
git add components/shared/Navigation.tsx
git commit -m "feat: update navigation to match new editorial structure and light theme"
```

---

## Phase 2: Homepage Sections (Top Half)

### Task 4: Rewrite Hero section (Section 01)

**Files:**
- Rewrite: `components/sections/Hero.tsx`

**Context:** Per Chocolako's spec: "Full-bleed image or cinematic video loop. Chocolako in Ubud or in ceremony, not posing. Warm, editorial, textural. Text overlaid on semi-transparent warm wash." Remove Three.js canvas, particles, etc.

**Design:**
- Full-viewport height
- Background: warm-toned placeholder image area (gray placeholder with text "Photo: Chocolako in ceremony") with a semi-transparent warm overlay
- Centered text: "INNERGY BY CHOCOLAKO®" (small caps label), "Journey Back to Yourself." (large serif headline), "Where the science of health meets the soul of healing." (italic serif subhead)
- Body copy from her spec (the "High performance taught you..." paragraph)
- Pull quote: "Is this actually it?" with a left gold border
- Two CTAs: "Find Your Path" (scrolls to quiz) and "Explore the Work" (scrolls to paths)
- Fade-in animations on scroll

**Step 1: Write the new Hero component**

Full rewrite replacing all Three.js and particle code with editorial layout. Use a placeholder div for the background image (styled as a warm-toned rectangle) since we don't have her photos yet.

**Step 2: Verify it renders**

Run: `pnpm dev`, check localhost — hero should show warm editorial layout with her copy

**Step 3: Commit**

```bash
git add components/sections/Hero.tsx
git commit -m "feat: rewrite Hero as editorial layout with Chocolako's copy"
```

---

### Task 5: Add Proof Strip section (Section 02)

**Files:**
- Create: `components/sections/ProofStrip.tsx`
- Modify: `app/page.tsx` (add import and placement)

**Context:** "Two rows. Muted. Quiet confidence. Not a flashy badge wall." Features "As Seen In" press mentions and "Partners & Affiliations" plus training credentials.

**Design:**
- Light muted background (sand/cream)
- "AS SEEN IN" label in small caps, followed by: The Guardian, Well+Good, Elephant Journal (italic serif)
- "PARTNERS & AFFILIATIONS" label, followed by partner names with interpuncts
- "Trained at:" credential line
- All text muted, editorial weight — not attention-grabbing, just credible

**Step 1: Create ProofStrip.tsx**

Build the component with the exact copy from the PDF.

**Step 2: Add to page.tsx**

Import and place after Hero.

**Step 3: Verify and commit**

```bash
git add components/sections/ProofStrip.tsx app/page.tsx
git commit -m "feat: add Proof Strip section with press, partners, credentials"
```

---

### Task 6: Add Bridge / Recognition Block (Section 03)

**Files:**
- Create: `components/sections/Bridge.tsx`
- Modify: `app/page.tsx`

**Context:** "Full-width text. No image. Warm background. This is the moment she realizes the page was written for her specifically." Replaces the old Problem section accordion.

**Design:**
- Warm cream/sand background
- Centered editorial text, generous line-height
- Large serif headline: "You got here by being exceptional."
- Body paragraphs from her spec, centered
- Final paragraph about Innergy and SFI/Womb Wisdom
- No images, no cards — just beautiful typography and whitespace

**Step 1: Create Bridge.tsx with her exact copy**

**Step 2: Add to page.tsx after ProofStrip, remove old Problem import**

**Step 3: Commit**

```bash
git add components/sections/Bridge.tsx app/page.tsx
git commit -m "feat: add Bridge recognition block, remove old Problem accordion"
```

---

### Task 7: Add Quiz section (Section 04)

**Files:**
- Create: `components/sections/Quiz.tsx`
- Modify: `app/page.tsx`

**Context:** "Interactive 5-question quiz. Warm card design. Matches her to one of the four paths." Inspired by Jenna Kutcher. This is a visual demo — the quiz should be interactive (click through questions, see progress) but doesn't need real backend/email logic.

**Design:**
- White/bone background
- Headline: "Not sure where to begin?" in serif
- Subhead about 90 seconds / five questions
- Card-based question display, one question at a time
- Progress bar (gold fill) showing 1/5 through 5/5
- Multiple choice options as warm-toned cards/buttons
- On completion: show a "results" screen with email capture UI (non-functional)
- Conversational, warm feel — not clinical

**Step 1: Create Quiz.tsx**

Build a client component with useState to track current question and selected answers. All 5 questions with their 4 options from the PDF. Progress bar. Animated transitions between questions.

**Step 2: Add to page.tsx after Bridge**

**Step 3: Commit**

```bash
git add components/sections/Quiz.tsx app/page.tsx
git commit -m "feat: add interactive quiz section (visual demo, no backend)"
```

---

### Task 8: Rewrite Pathways as "Choose Your Path" (Section 05)

**Files:**
- Rewrite: `components/sections/Pathways.tsx`

**Context:** Expanded from 3 cards to 5 paths. "Four distinct panels. Warm card backgrounds, gold numbering, rust CTA links." (PDF says four but actually lists five paths including the shop.)

**Design:**
- Section header: "Wealth. Wellness. Worthiness." (bold italic) + philosophy quote + "Where do you want to begin?" (serif italic headline)
- 5 path cards in a responsive grid (2 columns on desktop for first 4, full-width for SFI cert):
  1. "Live the Practice Every Day" — The Innergy Shop (from $45)
  2. "Understand Your Body" — Morphing™ ($97/mo)
  3. "Transform Your Practice" — Morocco YTT (application call)
  4. "Learn to Hold Ceremony" — Cacao Training (inquiry)
  5. "Build With This Work" — SFI Certification ($15k–$25k)
- Each card: gold number (01-05), uppercase label, serif title, description, "For:" italic line, price, rust-colored arrow CTA
- Warm card backgrounds (alternating cream/sand), subtle border
- Also include the Bali YTT as a sub-card under Morocco (03b)

**Step 1: Rewrite Pathways.tsx with all 5 paths and Chocolako's exact copy**

**Step 2: Verify and commit**

```bash
git add components/sections/Pathways.tsx
git commit -m "feat: rewrite Pathways to 5-path Choose Your Path with full copy"
```

---

## Phase 3: Homepage Sections (Bottom Half)

### Task 9: Rewrite Methodology section (Section 06)

**Files:**
- Rewrite: `components/sections/Methodology.tsx`

**Context:** "Three-column grid on desktop. Single column on mobile. Cinematic, editorial background." Three pillars: The Science, The Lineage, The Application.

**Design:**
- Dark warm background (espresso) — one of the few dark sections for contrast
- Cream/bone text
- Headline: "Somatic Feminine Intelligence™" in large serif
- Intro paragraph
- 3-column grid:
  - THE SCIENCE — polyvagal theory, interoception, etc.
  - THE LINEAGE — womb-centered practices, cultural memory
  - THE APPLICATION — boardroom presence, executive resilience
- Closing italic: "Embodiment is not escape. It is strategy."
- CTA: "Read the Full SFI Framework"

**Step 1: Rewrite Methodology.tsx**

**Step 2: Commit**

```bash
git add components/sections/Methodology.tsx
git commit -m "feat: rewrite Methodology as editorial 3-column with dark background"
```

---

### Task 10: Rewrite Testimonials section (Section 07)

**Files:**
- Rewrite: `components/sections/Testimonials.tsx`

**Context:** "Single testimonial per slide or card. Video testimonial if available." Update to use the exact testimonials from Chocolako's PDF with full attribution.

**Design:**
- White/bone background
- "What women say." headline in serif
- Large italic serif quotes with left gold border
- Full attribution: name, title, country
- Carousel or stacked cards (stacked for demo simplicity is fine)
- 5 testimonials from the PDF

**Step 1: Rewrite Testimonials.tsx with her exact quotes and attributions**

**Step 2: Commit**

```bash
git add components/sections/Testimonials.tsx
git commit -m "feat: update testimonials with Chocolako's exact quotes and attributions"
```

---

### Task 11: Rewrite Founder section (Section 08)

**Files:**
- Rewrite: `components/sections/Founder.tsx`

**Context:** "Portrait image, editorial quality. Split layout on desktop: image left, text right." This is the homepage preview — full bio on About page.

**Design:**
- White background
- Two-column layout: image placeholder (left), text (right)
- Over image text: "Your body has been keeping score. I teach women how to read it."
- Headline: "There is something you should know about the woman behind this work."
- Her full founder copy from the PDF (arranged marriage, fibroids, global journey, credentials)
- Closing italic: "She doesn't teach what she studied. She teaches what she survived, integrated, and transformed."
- Two CTAs: "Read the Full Story" and "Work With Chocolako"

**Step 1: Rewrite Founder.tsx with her exact copy**

**Step 2: Commit**

```bash
git add components/sections/Founder.tsx
git commit -m "feat: rewrite Founder section with full editorial bio and split layout"
```

---

### Task 12: Add Featured Content / Journal section (Section 09)

**Files:**
- Create: `components/sections/FeaturedContent.tsx`
- Modify: `app/page.tsx`

**Context:** "Three cards. One clinical, one personal, one cultural." Shows she's a thinker.

**Design:**
- Light cream background
- "The work, in writing." headline
- Subtitle about ideas with depth
- 3 editorial cards in a row:
  1. "What Your Cortisol Is Actually Telling You About Your Cycle"
  2. "The Day I Gave Notice at Massachusetts General Hospital"
  3. "Why Western Wellness Doesn't Work for Every Woman's Body"
- Each card: title + excerpt + implied link
- CTA: "Read More on the Journal"

**Step 1: Create FeaturedContent.tsx**

**Step 2: Add to page.tsx**

**Step 3: Commit**

```bash
git add components/sections/FeaturedContent.tsx app/page.tsx
git commit -m "feat: add Featured Content journal section with 3 editorial cards"
```

---

### Task 13: Add Book Feature section (Section 10)

**Files:**
- Create: `components/sections/BookFeature.tsx`
- Modify: `app/page.tsx`

**Context:** "Book cover image on one side, copy on the other. Warm background."

**Design:**
- Sand/cream warm background
- Two-column: book cover placeholder (left), copy (right)
- Headline: "The book that started where the silence ended."
- Book title in italic: "NEVER THE SAME WOMAN TWICE: The Science and Heart of Evolving into Yourself"
- Description copy from PDF
- CTA: "Get the Book"

**Step 1: Create BookFeature.tsx**

**Step 2: Add to page.tsx**

**Step 3: Commit**

```bash
git add components/sections/BookFeature.tsx app/page.tsx
git commit -m "feat: add Book Feature section"
```

---

### Task 14: Rewrite Shop Preview section (Section 11)

**Files:**
- Rewrite: `components/sections/ShopPreview.tsx`

**Context:** "Four product category tiles. Minimal, editorial, textural. Not a grid of SKUs."

**Design:**
- White background
- "Tools for the practice." headline
- Subtitle about items belonging to the work
- 4 category tiles in a 2x2 grid:
  1. CEREMONIAL CACAO
  2. AURA INNERGY OILS
  3. INNERGY ADORNMENT
  4. YOGA & SWIMWEAR
- Each tile: placeholder image area, gold uppercase label, description text
- CTA: "Visit the Innergy Shop"

**Step 1: Rewrite ShopPreview.tsx**

**Step 2: Commit**

```bash
git add components/sections/ShopPreview.tsx
git commit -m "feat: rewrite Shop Preview as 4 editorial category tiles"
```

---

### Task 15: Add Email Opt-in section (Section 12)

**Files:**
- Create: `components/sections/EmailOptIn.tsx`
- Modify: `app/page.tsx`

**Context:** "Full-width warm section. One offer. No clutter." Free guide download.

**Design:**
- Warm sand/cream background
- "What your body already knows." headline
- Subtitle about cyclical intelligence
- "FREE DOWNLOAD" label
- Guide title: "What Your Womb Already Knows: A Public Health Perspective on Cyclical Intelligence"
- Email form UI (non-functional): first name + email fields, "Send me the guide" button
- Clean, generous whitespace

**Step 1: Create EmailOptIn.tsx**

**Step 2: Add to page.tsx**

**Step 3: Commit**

```bash
git add components/sections/EmailOptIn.tsx app/page.tsx
git commit -m "feat: add Email Opt-in section with free guide offer"
```

---

### Task 16: Add Closing Statement (Section 13) and update Footer

**Files:**
- Create: `components/sections/ClosingStatement.tsx`
- Rewrite: `components/sections/Footer.tsx`
- Modify: `app/page.tsx`

**Context:** Closing statement is a warm, cinematic final moment. Footer uses espresso background with updated nav, social, and legal.

**Closing Statement Design:**
- Dark warm background (espresso) or warm image background
- Large centered serif italic: "You don't have to choose between who you've built yourself to be and who your body has always known you are."
- "Both live here." in larger text
- Two CTAs: "Find Your Path" and "Book a Discovery Call"

**Footer Design:**
- Espresso background, cream/bone text
- Top line: "Get transmission notes on embodied presence. [Subscribe]"
- Three columns: Navigate, Follow, Legal
- Navigate: In-Person, Online, Shop, Work With Me, Book, About, Press, Contact
- Follow: TikTok, Facebook, Instagram @chocolako, LinkedIn, YouTube, Spotify, Pinterest
- Legal: trademark notice + copyright 2018-2026 Innergy Global Enterprises, LLC

**Step 1: Create ClosingStatement.tsx**

**Step 2: Rewrite Footer.tsx with updated structure**

**Step 3: Update page.tsx with final section order, remove WhoThisIsFor import**

Final page.tsx section order:
```
Hero → ProofStrip → Bridge → Quiz → Pathways → Methodology → Testimonials → Founder → FeaturedContent → BookFeature → ShopPreview → EmailOptIn → ClosingStatement → Footer
```

**Step 4: Commit**

```bash
git add components/sections/ClosingStatement.tsx components/sections/Footer.tsx app/page.tsx
git commit -m "feat: add Closing Statement, update Footer, finalize homepage section order"
```

---

## Phase 4: Delete Unused Components

### Task 17: Clean up removed sections

**Files:**
- Delete: `components/sections/Problem.tsx`
- Delete: `components/sections/WhoThisIsFor.tsx`

**Step 1: Delete unused section files**

```bash
rm components/sections/Problem.tsx
rm components/sections/WhoThisIsFor.tsx
```

**Step 2: Verify build**

Run: `pnpm build`
Expected: Clean compile with no import errors

**Step 3: Commit**

```bash
git add -A
git commit -m "chore: remove unused Problem and WhoThisIsFor sections"
```

---

## Phase 5: /invest Landing Page

### Task 18: Create the /invest page

**Files:**
- Create: `app/invest/page.tsx`
- Create: `components/invest/InvestHero.tsx`
- Create: `components/invest/InvestContent.tsx`

**Context:** This is an investor-facing landing page with different tone (business-forward). Currently lives at a separate Gamma domain. All copy is from the "Website Invest Landing Page Copy" PDF.

**Design:** Single long-scroll page with these sections:
1. **Hero** — "She didn't discover a market gap. She lived it." with cinematic photo placeholder
2. **Origin Story** — methodology background, academic credentials, convergence narrative
3. **Market Thesis** — "The world has shifted. Women are leading at every level." + nervous system cost
4. **Testimonials** — 4 quotes from the invest PDF (Varda, Cece, Coralie, Juliel)
5. **Who She Is** — two-column credentials layout
6. **Traction** — 4 metric boxes (65K followers, 160 women/class, 25+ countries, 3 trademarks)
7. **What's Coming 2026** — Morocco, Bali, Cacao, Kenya, Book, Morphing™ details
8. **The Missing Piece** — infrastructure gap narrative
9. **The Partnership** — Rachelle Starr as Integrator, end-of-2026 goals
10. **The Ask** — $200K line of credit with terms table
11. **What This Capital Funds** — 6-box grid (operational, brand, team, capital, leadership, events)
12. **Why This Why Now** — closing argument
13. **Connect** — contact info and CTA

**Design notes:**
- Darker, more business-forward than homepage but same typography
- Alternating dark (espresso) and light (bone) sections
- Data/metrics in clean grid layouts
- More structured, less flowing than homepage
- Still warm and editorial, not corporate-cold

**Step 1: Create the invest page layout and all sub-components**

Split into InvestHero (the cinematic hero) and InvestContent (everything else) to keep files manageable, or a single page component if it stays under 500 lines.

**Step 2: Verify at localhost:3000/invest**

**Step 3: Commit**

```bash
git add app/invest/page.tsx components/invest/
git commit -m "feat: add /invest landing page with full investor copy"
```

---

## Phase 6: Polish and Verify

### Task 19: Responsive design pass

**Files:**
- Modify: All section components as needed

**Step 1: Check all sections at mobile (375px), tablet (768px), and desktop (1440px)**

Verify:
- Hero text is readable on mobile
- Quiz cards stack properly
- Pathways cards go single-column on mobile
- Methodology columns stack on mobile
- Founder split layout stacks on mobile (image on top)
- Footer columns stack on mobile
- /invest page metrics grid wraps properly
- Navigation hamburger works with updated links

**Step 2: Fix any responsive issues found**

**Step 3: Commit**

```bash
git add -A
git commit -m "fix: responsive design adjustments across all sections"
```

---

### Task 20: Final build verification and cleanup

**Files:**
- Modify: `app/layout.tsx` (update metadata if needed)

**Step 1: Update metadata**

```typescript
export const metadata: Metadata = {
  title: "Innergy by Chocolako® | Where the Science of Health Meets the Soul of Healing",
  description: "Journey back to yourself. Somatic Feminine Intelligence™, Womb Wisdom™, and embodied leadership for high-performing women.",
}
```

**Step 2: Run final build**

```bash
pnpm build
```

Expected: Clean build, no errors

**Step 3: Run dev server and do visual spot-check**

```bash
pnpm dev
```

Check: Homepage flows through all 14 sections smoothly. /invest page renders fully.

**Step 4: Commit**

```bash
git add -A
git commit -m "chore: update metadata and final build verification"
```

---

## Summary

| Phase | Tasks | What |
|-------|-------|------|
| 1: Foundation | 1-3 | Theme overhaul, remove Three.js, rewrite nav |
| 2: Homepage Top | 4-8 | Hero, Proof Strip, Bridge, Quiz, Pathways |
| 3: Homepage Bottom | 9-16 | Methodology, Testimonials, Founder, Content, Book, Shop, Email, Closing, Footer |
| 4: Cleanup | 17 | Delete unused components |
| 5: /invest | 18 | Full investor landing page |
| 6: Polish | 19-20 | Responsive pass, final verification |

**Total: 20 tasks across 6 phases**

Each task produces a working commit. The site remains buildable after every task.
