# Womb Wisdom YTT Landing Page — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a dedicated `/womb-wisdom-yoga-training` landing page that merges Chocolako's existing page content with her new editorial design direction, optimized for converting visitors into Morocco YTT application calls.

**Architecture:** Single long-form editorial page at `app/womb-wisdom-yoga-training/page.tsx` (server component with metadata) rendering 17 client components from `components/ytt/`. Reuses existing design system (colors, typography, animations from `lib/animations.ts`) and shared components (`SectionWrapper` from `components/shared/motion.tsx`, `Footer`). A sticky CTA bar appears on scroll.

**Tech Stack:** Next.js 16 (App Router), React 19, TailwindCSS 4, Framer Motion, TypeScript

**Design Reference:** `docs/plans/2026-04-12-womb-wisdom-ytt-design.md`

**Frontend Design Skill Principles:** Editorial/magazine aesthetic. Warm, photographic, generous whitespace. Cormorant Garamond serif headings, Inter sans body. Staggered scroll reveals via Framer Motion. Asymmetric layouts where appropriate. This should feel like a high-end retreat brochure, not a course sales page.

---

### Task 1: Route + Page Shell + YTTHero

**Files:**
- Create: `app/womb-wisdom-yoga-training/page.tsx`
- Create: `components/ytt/YTTHero.tsx`

**Context:**
- Follow the pattern from `app/invest/page.tsx` for the route (server component with metadata export)
- Follow `components/invest/InvestHero.tsx` for the hero pattern (full-viewport, warm overlay, stagger animations)
- Import animations from `@/lib/animations` (staggerContainer, staggerItem)
- All components are `"use client"`

**Step 1: Create the route page**

```tsx
// app/womb-wisdom-yoga-training/page.tsx
import type { Metadata } from "next"
import { YTTHero } from "@/components/ytt/YTTHero"
import { Footer } from "@/components/sections/Footer"

export const metadata: Metadata = {
  title: "Womb Wisdom & Wellbeing YTT — Morocco | Innergy by Chocolako®",
  description:
    "A Yoga Alliance-recognized 200-hour Feminine Focused Yoga Teacher Training. 7 days online + 14 days in Ourika Valley, Morocco. August 1-22, 2026.",
}

export default function WombWisdomYTTPage() {
  return (
    <main>
      <YTTHero />
      <Footer />
    </main>
  )
}
```

**Step 2: Create YTTHero component**

Full-viewport hero with warm photo overlay. Key details:
- Small caps label: "THE RETURN HOME"
- Main heading: "Womb Wisdom & Wellbeing YTT"
- Subheading: "A Yoga Alliance-recognized 200-hour Feminine Focused Yoga Teacher Training"
- Detail pill/line: "7 days online + 14 days in Morocco · August 1-22, 2026"
- Body copy: "Success taught you to silence your body. Now it's time to listen."
- CTA button: "Book Your Application Call"
- Photo placeholder with warm gradient overlay (cacao/espresso tones, NOT dark espresso like InvestHero — warmer)

```tsx
// components/ytt/YTTHero.tsx
"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

export function YTTHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Photo placeholder background */}
      <div className="absolute inset-0 bg-cacao">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-bone/30 text-sm tracking-widest uppercase">
            Photo: Ourika Valley, Morocco
          </p>
        </div>
      </div>

      {/* Warm overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cacao/70 via-cacao/50 to-cacao/80" />

      {/* Content */}
      <motion.div
        className="relative z-10 px-6 py-24 max-w-3xl mx-auto text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={staggerItem}
          className="uppercase tracking-[0.3em] text-xs text-gold font-sans mb-8"
        >
          The Return Home
        </motion.p>

        <motion.h1
          variants={staggerItem}
          className="font-serif text-4xl md:text-5xl lg:text-6xl text-bone leading-tight mb-6"
        >
          Womb Wisdom &amp; Wellbeing YTT
        </motion.h1>

        <motion.p
          variants={staggerItem}
          className="font-sans text-sm md:text-base text-sand/90 tracking-wide mb-8"
        >
          A Yoga Alliance-recognized 200-hour Feminine Focused Yoga Teacher Training
        </motion.p>

        <motion.div
          variants={staggerItem}
          className="inline-flex items-center gap-2 bg-bone/10 backdrop-blur-sm border border-bone/20 rounded-full px-6 py-2 mb-10"
        >
          <span className="font-sans text-sm text-bone/90">
            7 days online + 14 days in Morocco
          </span>
          <span className="text-gold">·</span>
          <span className="font-sans text-sm text-gold font-medium">
            August 1–22, 2026
          </span>
        </motion.div>

        <motion.p
          variants={staggerItem}
          className="font-serif italic text-lg md:text-xl text-sand/80 mb-12 max-w-xl mx-auto"
        >
          Success taught you to silence your body. Now it&apos;s time to listen.
        </motion.p>

        <motion.div variants={staggerItem}>
          <a
            href="#registration"
            className="inline-block bg-gold hover:bg-gold/90 text-espresso font-sans font-medium px-10 py-4 rounded-full transition-colors text-sm uppercase tracking-wider"
          >
            Book Your Application Call
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade to bone */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bone to-transparent pointer-events-none" />
    </section>
  )
}
```

**Step 3: Verify it builds**

Run: `pnpm build`
Expected: Clean build with new route `/womb-wisdom-yoga-training`

**Step 4: Commit**

```bash
git add app/womb-wisdom-yoga-training/page.tsx components/ytt/YTTHero.tsx
git commit -m "(feat): add YTT page route and hero section"
```

---

### Task 2: YTTPainPoints + YTTFeminineBody + YTTWombCenter

**Files:**
- Create: `components/ytt/YTTPainPoints.tsx`
- Create: `components/ytt/YTTFeminineBody.tsx`
- Create: `components/ytt/YTTWombCenter.tsx`
- Modify: `app/womb-wisdom-yoga-training/page.tsx` (add imports and render)

**Context:**
- These are the emotional recognition sections that come right after the hero
- Use `SectionWrapper` from `@/components/shared/motion` for scroll-triggered fade-in
- Use `staggerContainer` / `staggerItem` from `@/lib/animations` for list items
- Backgrounds alternate: cream → sand → bone
- Pain points from existing chocolako.com page (11 items)
- Feminine body expressions: 4 poetic lines as large italic serif
- Womb center: short powerful section with scroll CTA

**Step 1: Create YTTPainPoints**

```tsx
// components/ytt/YTTPainPoints.tsx
"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const painPoints = [
  "I have cysts, fibroids, or a diagnosis my doctors say there's nothing more they can do about",
  "I'm burned out from constantly producing, performing, and pushing through — and my body is showing it",
  "I feel disconnected from my womb, my cycle, and the deeper intelligence of my feminine body",
  "I've done every self-care routine, but I'm still exhausted at a level sleep doesn't fix",
  "I carry womb trauma — miscarriage, abortion, assault — and I've never had a safe space to process it through my body",
  "I inherited generational patterns of silence, sacrifice, and pushing through pain",
  "I want to teach yoga but every training I've seen feels performative, not embodied",
  "I know something is off in my body but Western medicine keeps telling me I'm fine",
  "I've been successful by every external measure and still feel like something fundamental is missing",
  "I'm in a life transition and my body feels like unfamiliar territory",
  "I'm ready to stop managing my health and start understanding it",
]

export function YTTPainPoints() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-cacao mb-16"
        >
          Do any of these sound familiar?
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-6"
        >
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="border-l-2 border-gold/40 pl-6"
            >
              <p className="font-serif italic text-base md:text-lg text-cacao/80 leading-relaxed">
                &ldquo;{point}&rdquo;
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 2: Create YTTFeminineBody**

```tsx
// components/ytt/YTTFeminineBody.tsx
"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const expressions = [
  "She craves cycles",
  "She thrives on rest",
  "She needs to feel safe, sacred and held",
  "She longs to be recognized and revered",
]

export function YTTFeminineBody() {
  return (
    <section className="bg-sand py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl md:text-4xl text-cacao mb-16"
        >
          Have You Noticed the Expressions of Your Feminine Body?
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-8"
        >
          {expressions.map((line, i) => (
            <motion.p
              key={i}
              variants={staggerItem}
              className="font-serif italic text-2xl md:text-3xl lg:text-4xl text-cacao/70 leading-snug"
            >
              {line}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 3: Create YTTWombCenter**

```tsx
// components/ytt/YTTWombCenter.tsx
"use client"

import { motion } from "framer-motion"

export function YTTWombCenter() {
  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-cacao mb-8"
        >
          Your Womb Is Your Ultimate Creation Center
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          The same intelligence that moves ocean tides moves through you.
          Your womb is not just a reproductive organ — it is your body&apos;s
          deepest center of creativity, intuition, and power. This training
          teaches you how to access it.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a
            href="#registration"
            className="text-gold font-sans font-medium hover:underline underline-offset-4 transition-colors"
          >
            Start Your Journey →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 4: Update page.tsx to render all three**

```tsx
// app/womb-wisdom-yoga-training/page.tsx
import type { Metadata } from "next"
import { YTTHero } from "@/components/ytt/YTTHero"
import { YTTPainPoints } from "@/components/ytt/YTTPainPoints"
import { YTTFeminineBody } from "@/components/ytt/YTTFeminineBody"
import { YTTWombCenter } from "@/components/ytt/YTTWombCenter"
import { Footer } from "@/components/sections/Footer"

export const metadata: Metadata = {
  title: "Womb Wisdom & Wellbeing YTT — Morocco | Innergy by Chocolako®",
  description:
    "A Yoga Alliance-recognized 200-hour Feminine Focused Yoga Teacher Training. 7 days online + 14 days in Ourika Valley, Morocco. August 1-22, 2026.",
}

export default function WombWisdomYTTPage() {
  return (
    <main>
      <YTTHero />
      <YTTPainPoints />
      <YTTFeminineBody />
      <YTTWombCenter />
      <Footer />
    </main>
  )
}
```

**Step 5: Verify build**

Run: `pnpm build`
Expected: Clean build

**Step 6: Commit**

```bash
git add components/ytt/YTTPainPoints.tsx components/ytt/YTTFeminineBody.tsx components/ytt/YTTWombCenter.tsx app/womb-wisdom-yoga-training/page.tsx
git commit -m "(feat): add pain points, feminine body, and womb center sections"
```

---

### Task 3: YTTOverview + YTTFounder

**Files:**
- Create: `components/ytt/YTTOverview.tsx`
- Create: `components/ytt/YTTFounder.tsx`
- Modify: `app/womb-wisdom-yoga-training/page.tsx` (add imports and render)

**Context:**
- Overview: white background, editorial paragraphs describing the training transformation
- Founder: split layout (photo placeholder left, bio right) — follow the pattern from `components/sections/Founder.tsx` but with YTT-specific content
- Full credentials from existing chocolako.com page
- The "If you've made it this far..." closing line

**Step 1: Create YTTOverview**

```tsx
// components/ytt/YTTOverview.tsx
"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

export function YTTOverview() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-8"
        >
          <motion.h2
            variants={staggerItem}
            className="font-serif text-3xl md:text-4xl text-cacao mb-4"
          >
            This is where feminine wisdom meets embodiment and lifelong skills.
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed"
          >
            The Womb Wisdom &amp; Wellbeing Yoga Teacher Training is not a
            certification you hang on a wall. It is a transformation you carry
            in your body. Over 21 days — 7 online and 14 immersed in the Atlas
            Mountains of Morocco — you will learn to teach yoga from a place
            of somatic truth, not performative posture.
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed"
          >
            You will study anatomy through the lens of the feminine body. You
            will learn pelvic intelligence, nervous system regulation, and the
            sacred transitions of womanhood. You will practice holding space —
            for yourself first, and then for the women you are called to guide.
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="font-serif italic text-xl md:text-2xl text-rust"
          >
            You will leave as a different woman than the one who arrived. That
            is not a marketing promise. It is what happens when twenty women
            gather in Morocco with this level of intention.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 2: Create YTTFounder**

```tsx
// components/ytt/YTTFounder.tsx
"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

export function YTTFounder() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <div className="aspect-[3/4] bg-sand rounded-lg flex flex-col items-center justify-center">
              <span className="text-cacao/30 font-serif text-lg mb-2">
                Chocolako Agburu
              </span>
              <span className="text-cacao/20 font-sans text-sm">
                MPH, MBA, E-RYT 500, YACEP
              </span>
            </div>
          </motion.div>

          {/* Bio content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <motion.p
              variants={staggerItem}
              className="uppercase tracking-[0.2em] text-xs text-gold font-sans mb-4"
            >
              Your Lead Trainer
            </motion.p>

            <motion.h2
              variants={staggerItem}
              className="font-serif text-3xl md:text-4xl text-cacao leading-tight mb-8"
            >
              Chocolako Agburu, MPH, MBA, E-RYT 500, YACEP
            </motion.h2>

            <motion.div
              variants={staggerItem}
              className="space-y-5 font-sans text-base text-cacao/80 leading-relaxed"
            >
              <p>
                15 years guiding thousands of women globally through somatic
                embodiment, nervous system regulation, and feminine wisdom
                practices. 20+ years of traditional yoga practice.
              </p>
              <p>
                Studied with wisdom keepers across Mexico, Peru, Kenya,
                Indonesia, Morocco, and Egypt. Former marketing manager at
                GlaxoSmithKline. Former hospital administrator at Harvard&apos;s
                Massachusetts General Hospital.
              </p>
              <p>
                Education: Vanderbilt University (BS), UC Berkeley (MPH), Bayes
                Business School London (MBA). Over 1,200 yoga and meditation
                certification hours.
              </p>
              <p>
                In 2021, she had 25 fibroids removed from her womb. The
                surgeons recommended a hysterectomy. She said no. She chose
                womb-centered healing and has been fibroid-free for over five
                years. That experience became the living foundation of this
                training.
              </p>
            </motion.div>

            <motion.p
              variants={staggerItem}
              className="font-serif italic text-lg text-rust mt-8"
            >
              If you&apos;ve made it this far, you&apos;re not here for
              Instagram-worthy poses. You&apos;re here because something in your
              body recognized something in these words.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
```

**Step 3: Update page.tsx**

Add imports for `YTTOverview` and `YTTFounder`, render them between `YTTWombCenter` and `Footer`.

**Step 4: Verify build**

Run: `pnpm build`

**Step 5: Commit**

```bash
git add components/ytt/YTTOverview.tsx components/ytt/YTTFounder.tsx app/womb-wisdom-yoga-training/page.tsx
git commit -m "(feat): add training overview and founder bio sections"
```

---

### Task 4: YTTFaculty + YTTModules

**Files:**
- Create: `components/ytt/YTTFaculty.tsx`
- Create: `components/ytt/YTTModules.tsx`
- Modify: `app/womb-wisdom-yoga-training/page.tsx`

**Context:**
- Faculty: 6 guest experts in responsive grid. Data from existing chocolako.com page.
- Modules: 5 core learning modules with gold numbering (follow Pathways pattern). Data from existing page.

**Step 1: Create YTTFaculty**

```tsx
// components/ytt/YTTFaculty.tsx
"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const faculty = [
  {
    name: "Emma Perks",
    title: "Musculoskeletal & Women's Pelvic Health Physiotherapist",
  },
  {
    name: "Ibu Robin",
    title: "International Doula & Bumi Sehat Founder",
  },
  {
    name: "Dr. Michalina Drejza",
    title: "Obstetrics & Gynaecology, Cambridge University",
  },
  {
    name: "Rachel Ellery",
    title: "UK Osteopath & The Anatomy School Founder",
  },
  {
    name: "Jo Brown",
    title: "Somatic Counselor & Reproductive Health Sexologist",
  },
  {
    name: "Dr. Sujatha Kekada",
    title: "Head Physician, AmrtaSiddhi Ayurvedic Center",
  },
]

export function YTTFaculty() {
  return (
    <section className="bg-sand py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.2em] text-xs text-gold font-sans mb-4">
            Guest Faculty
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-cacao">
            Learn from women at the forefront of their fields
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {faculty.map((member) => (
            <motion.div
              key={member.name}
              variants={staggerItem}
              className="bg-white rounded-lg p-6 border border-cacao/10"
            >
              {/* Photo placeholder */}
              <div className="aspect-square bg-cream rounded-lg mb-4 flex items-center justify-center">
                <span className="text-cacao/20 font-sans text-xs uppercase tracking-wider">
                  Photo
                </span>
              </div>
              <h3 className="font-serif text-lg text-cacao mb-1">
                {member.name}
              </h3>
              <p className="font-sans text-sm text-cacao/60 leading-relaxed">
                {member.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 2: Create YTTModules**

```tsx
// components/ytt/YTTModules.tsx
"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const modules = [
  {
    number: "01",
    title: "Anatomy & Physiology",
    format: "Self-Guided Virtual",
    dates: "August 1–7",
    hours: "20 hours",
    description:
      "Learn the relationship between body structure and function with a UK Osteopath. Build the anatomical foundation you need to teach safely and intelligently.",
    bg: "bg-white",
  },
  {
    number: "02",
    title: "Pelvic Intelligence — The Womb as Portal",
    format: "Self-Guided + Virtual",
    dates: "August 1–7",
    hours: "20 hours",
    description:
      "Pelvic anatomy, physiology, and energetics. Sacred transitions throughout womanhood. Somatic techniques and rituals for womb reconnection.",
    bg: "bg-cream",
  },
  {
    number: "03",
    title: "Embodied Womb Wise Leader & Yoga Teacher",
    format: "Morocco Immersion",
    dates: "August 8–22",
    hours: "60 hours",
    description:
      "14 days anchored in the 8-limbs of yoga. Feminine wisdom leadership development. Teaching methodology rooted in somatic truth, not performance.",
    bg: "bg-white",
  },
  {
    number: "04",
    title: "8-Limbs of Yoga & Business of Yoga",
    format: "Morocco Immersion",
    dates: "August 8–22",
    hours: "50 hours",
    description:
      "Foundational philosophy study through the lens of the feminine body. Teaching framework, sequencing, and the business essentials of building a yoga practice.",
    bg: "bg-cream",
  },
  {
    number: "05",
    title: "Feminine Wellbeing Rituals",
    format: "Morocco Immersion",
    dates: "August 8–22",
    hours: "50 hours",
    description:
      "Moon ceremonies, womb wellness practices, cacao rituals. Daily practices honoring feminine cycles. The living traditions that anchor this work in lineage.",
    bg: "bg-white",
  },
]

export function YTTModules() {
  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.2em] text-xs text-gold font-sans mb-4">
            Curriculum
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-cacao">
            Five Core Learning Modules
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-6"
        >
          {modules.map((mod) => (
            <motion.div
              key={mod.number}
              variants={staggerItem}
              className={`${mod.bg} rounded-lg p-8 border border-cacao/10`}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Number */}
                <p className="font-serif text-4xl text-gold/60 leading-none md:w-16 flex-shrink-0">
                  {mod.number}
                </p>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="font-serif text-xl md:text-2xl text-cacao">
                      {mod.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="font-sans text-xs bg-gold/10 text-gold px-3 py-1 rounded-full">
                      {mod.format}
                    </span>
                    <span className="font-sans text-xs bg-cacao/5 text-cacao/60 px-3 py-1 rounded-full">
                      {mod.dates}
                    </span>
                    <span className="font-sans text-xs bg-cacao/5 text-cacao/60 px-3 py-1 rounded-full">
                      {mod.hours}
                    </span>
                  </div>
                  <p className="font-sans text-base text-cacao/80 leading-relaxed">
                    {mod.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 3: Update page.tsx** — add imports and render after YTTFounder

**Step 4: Verify build**

Run: `pnpm build`

**Step 5: Commit**

```bash
git add components/ytt/YTTFaculty.tsx components/ytt/YTTModules.tsx app/womb-wisdom-yoga-training/page.tsx
git commit -m "(feat): add guest faculty grid and curriculum modules sections"
```

---

### Task 5: YTTSchedule + YTTVenue

**Files:**
- Create: `components/ytt/YTTSchedule.tsx`
- Create: `components/ytt/YTTVenue.tsx`
- Modify: `app/womb-wisdom-yoga-training/page.tsx`

**Context:**
- Schedule: clean daily timeline from existing page (7am-7pm)
- Venue: Bab Zouina details with three sacred commitments and amenities
- These sections sell the experience — they should feel warm and inviting

**Step 1: Create YTTSchedule**

```tsx
// components/ytt/YTTSchedule.tsx
"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const schedule = [
  { time: "7:00 – 9:00am", activity: "Morning Embodiment Practice" },
  { time: "9:00 – 10:00am", activity: "Breakfast & Rest" },
  { time: "10:00am – 1:00pm", activity: "Morning Wisdom — Learning & Integration" },
  { time: "1:00 – 3:00pm", activity: "Lunch & Lounge" },
  { time: "3:00 – 6:00pm", activity: "Afternoon Wisdom" },
  { time: "6:00 – 7:00pm", activity: "Evening Integration" },
]

export function YTTSchedule() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.2em] text-xs text-gold font-sans mb-4">
            Daily Rhythm
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-cacao">
            A Day in Morocco
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-0"
        >
          {schedule.map((item, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="flex items-baseline gap-6 py-5 border-b border-cacao/10 last:border-b-0"
            >
              <span className="font-sans text-sm text-gold w-40 flex-shrink-0">
                {item.time}
              </span>
              <span className="font-serif text-lg text-cacao">
                {item.activity}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 2: Create YTTVenue**

```tsx
// components/ytt/YTTVenue.tsx
"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const commitments = [
  {
    title: "Human Equilibrium",
    description:
      "No aggressive early morning sessions. The pace matches the mountain rhythms. Your nervous system sets the tempo.",
  },
  {
    title: "Community Impact",
    description:
      "Meals support local Berber families. A portion of every enrollment funds education for mountain children.",
  },
  {
    title: "Sustainability",
    description:
      "Solar power, rainwater harvesting, organic gardens, zero waste practices. The land is honored, not consumed.",
  },
]

const amenities = [
  "Traditional Moroccan architecture",
  "Mountain views from practice spaces",
  "Hammam (steam bath)",
  "Rooftop terraces",
  "Farm-to-table meals",
  "Swimming pool",
  "Tennis court",
  "Walking distance to Berber villages",
]

export function YTTVenue() {
  return (
    <section className="bg-sand py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <p className="uppercase tracking-[0.2em] text-xs text-gold font-sans mb-4">
            The Setting
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cacao mb-4">
            Bab Zouina
          </h2>
          <p className="font-sans text-base text-cacao/70">
            Ourika Valley, Atlas Mountains, Morocco
          </p>
        </motion.div>

        {/* Photo placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="aspect-[21/9] bg-cream rounded-lg flex items-center justify-center">
            <span className="text-cacao/20 font-sans text-sm uppercase tracking-wider">
              Photo: Bab Zouina, Ourika Valley
            </span>
          </div>
        </motion.div>

        {/* Three Sacred Commitments */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {commitments.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              className="bg-white rounded-lg p-6 border border-cacao/10"
            >
              <h3 className="font-serif text-lg text-cacao mb-3">
                {item.title}
              </h3>
              <p className="font-sans text-sm text-cacao/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Amenities */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase tracking-[0.2em] text-xs text-cacao/50 font-sans mb-4 text-center">
            On the Grounds
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {amenities.map((item) => (
              <span
                key={item}
                className="font-sans text-sm bg-white text-cacao/70 px-4 py-2 rounded-full border border-cacao/10"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 3: Update page.tsx** — add imports and render after YTTModules

**Step 4: Verify build**

Run: `pnpm build`

**Step 5: Commit**

```bash
git add components/ytt/YTTSchedule.tsx components/ytt/YTTVenue.tsx app/womb-wisdom-yoga-training/page.tsx
git commit -m "(feat): add daily schedule and Bab Zouina venue sections"
```

---

### Task 6: YTTWhoIsFor + YTTGains + YTTTestimonials

**Files:**
- Create: `components/ytt/YTTWhoIsFor.tsx`
- Create: `components/ytt/YTTGains.tsx`
- Create: `components/ytt/YTTTestimonials.tsx`
- Modify: `app/womb-wisdom-yoga-training/page.tsx`

**Context:**
- These three sections build the final emotional case before pricing
- WhoIsFor: 6 ideal candidate traits
- Gains: 6 transformation outcomes
- Testimonials: Librette's quote + potentially others; use same gold-border blockquote style as homepage `components/sections/Testimonials.tsx`

**Step 1: Create YTTWhoIsFor**

```tsx
// components/ytt/YTTWhoIsFor.tsx
"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const traits = [
  "You feel done with performative yoga culture and want to teach from embodied truth",
  "You want to be student, healer, and guide simultaneously",
  "You yearn for a feminine-focused roadmap through the stages of your life",
  "You feel numb or disconnected from your womb and want to find your way back",
  "You thrive in women's community and learn best in sisterhood",
  "You're ready for the kind of training that changes your life, not just your resume",
]

export function YTTWhoIsFor() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl md:text-4xl text-cacao mb-16"
        >
          This training is for the woman who&hellip;
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-6"
        >
          {traits.map((trait, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="flex items-start gap-4"
            >
              <span className="text-gold mt-1 text-lg">&#9670;</span>
              <p className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed">
                {trait}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 2: Create YTTGains**

```tsx
// components/ytt/YTTGains.tsx
"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const gains = [
  "Daily embodiment practices synced with your inner seasons",
  "Renewed body communication and tools to rebuild safety in your nervous system",
  "Nervous system skills for authentic, grounded teaching",
  "A sisterhood of women doing this work at depth across the world",
  "Skills to recognize and release people-pleasing, self-abandonment, and over-giving",
  "Reclamation of your embodied femininity — not as concept, but as lived experience",
]

export function YTTGains() {
  return (
    <section className="bg-sand py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl md:text-4xl text-cacao mb-16"
        >
          What You&apos;ll Gain
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-6"
        >
          {gains.map((gain, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="flex items-start gap-4"
            >
              <span className="text-gold mt-1">&#10003;</span>
              <p className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed">
                {gain}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 3: Create YTTTestimonials**

```tsx
// components/ytt/YTTTestimonials.tsx
"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const testimonials = [
  {
    quote:
      "Most teacher trainings are what you do for a certificate. Chocolako's training is what you do for your life. She teaches you how to live yoga.",
    name: "Librette",
    title: "Mental Health Counselor, Womb Wisdom & Wellbeing YTT, USA",
  },
  {
    quote:
      "This is much more than yoga teacher training. Womb Wisdom is the missing piece for women living and leading at scale.",
    name: "Dr. Micha T, MD, PhD",
    title: "Oxford University, OB-GYN Department",
  },
  {
    quote:
      "I came to Chocolako running on fumes and calling it leadership. I left with a nervous system that could finally register safety. That shifted everything.",
    name: "Varda",
    title: "Founder & CEO, Tava Group, Armenia",
  },
]

export function YTTTestimonials() {
  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl md:text-4xl text-cacao mb-16"
        >
          What women say.
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-12"
        >
          {testimonials.map((t) => (
            <motion.blockquote
              key={t.name}
              variants={staggerItem}
              className="border-l-2 border-gold pl-6 md:pl-8"
            >
              <p className="text-lg md:text-xl font-serif italic leading-relaxed text-cacao mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="text-sm md:text-base">
                <span className="font-sans font-bold text-cacao">
                  {t.name}
                </span>
                <span className="font-sans text-rust/70">
                  {" "}&middot; {t.title}
                </span>
              </footer>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 4: Update page.tsx** — add imports and render after YTTVenue

**Step 5: Verify build**

Run: `pnpm build`

**Step 6: Commit**

```bash
git add components/ytt/YTTWhoIsFor.tsx components/ytt/YTTGains.tsx components/ytt/YTTTestimonials.tsx app/womb-wisdom-yoga-training/page.tsx
git commit -m "(feat): add who-is-for, gains, and testimonials sections"
```

---

### Task 7: YTTPricing + YTTInclusions

**Files:**
- Create: `components/ytt/YTTPricing.tsx`
- Create: `components/ytt/YTTInclusions.tsx`
- Modify: `app/womb-wisdom-yoga-training/page.tsx`

**Context:**
- Pricing: 3 room tiers at standard rates (past early bird). Side-by-side cards on desktop.
- Inclusions: two-column split — what's included vs not included
- These are the conversion-critical sections

**Step 1: Create YTTPricing**

```tsx
// components/ytt/YTTPricing.tsx
"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const tiers = [
  {
    name: "Sovereign Path",
    room: "Private Room with Ensuite",
    price: "$7,888",
    description:
      "Your own space. Private room with ensuite bathroom. For the woman who needs solitude to integrate.",
  },
  {
    name: "Sisterhood Suite",
    room: "Shared Double Room",
    price: "$7,288",
    description:
      "Share with one other woman. Connection and companionship through the journey.",
  },
  {
    name: "Shared Blossom",
    room: "Shared Triple Room",
    price: "$6,688",
    description:
      "The most communal option. Three women sharing space, stories, and the experience.",
  },
]

export function YTTPricing() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.2em] text-xs text-gold font-sans mb-4">
            Investment
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-cacao mb-4">
            Choose Your Room
          </h2>
          <p className="font-sans text-base text-cacao/60">
            All rates include tuition, accommodation, meals, and transportation. Payment plans available.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={staggerItem}
              className="bg-bone rounded-lg p-8 border border-cacao/10 flex flex-col"
            >
              <h3 className="font-serif text-xl text-cacao mb-1">
                {tier.name}
              </h3>
              <p className="font-sans text-sm text-cacao/50 mb-6">
                {tier.room}
              </p>
              <p className="font-serif text-4xl text-gold mb-6">
                {tier.price}
              </p>
              <p className="font-sans text-sm text-cacao/70 leading-relaxed mb-8 flex-1">
                {tier.description}
              </p>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-center bg-gold hover:bg-gold/90 text-espresso font-sans font-medium px-6 py-3 rounded-full transition-colors text-sm"
                >
                  Pay in Full
                </a>
                <a
                  href="#"
                  className="block text-center border border-gold text-gold hover:bg-gold/10 font-sans font-medium px-6 py-3 rounded-full transition-colors text-sm"
                >
                  Pay $1,000 Deposit
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-sans text-sm text-cacao/50 text-center"
        >
          Reserve your spot with a $1,000 deposit. Payment plans available on request.
          <br />
          Payment via Stripe (credit card).
        </motion.p>
      </div>
    </section>
  )
}
```

**Step 2: Create YTTInclusions**

```tsx
// components/ytt/YTTInclusions.tsx
"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const included = [
  "200-hour tuition & certification readiness",
  "Yoga Alliance & Innergy Collective certification",
  "250-page color teaching manual",
  "Sound healing & cacao ceremony",
  "Marrakech market tour & sightseeing",
  "Airport roundtrip transportation",
  "All excursion transportation",
  "Accommodation at Bab Zouina",
  "Vegetarian/plant-based meals & beverages",
  "Hammam, pool, tennis court, fire pit access",
  "Shiatsu massage availability",
]

const notIncluded = [
  "Flights to Marrakech (RAK airport)",
  "Visa costs & immigration fees",
  "Medical & travel insurance",
  "Activities outside the program",
  "Extra accommodation days before/after",
]

export function YTTInclusions() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl md:text-4xl text-cacao mb-16 text-center"
        >
          What&apos;s Included
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Included */}
          <motion.div variants={staggerItem}>
            <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-cacao mb-6">
              Included
            </h3>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-gold mt-0.5">&#10003;</span>
                  <span className="font-sans text-sm text-cacao/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not included */}
          <motion.div variants={staggerItem}>
            <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-cacao/60 mb-6">
              Not Included
            </h3>
            <ul className="space-y-3">
              {notIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-cacao/30 mt-0.5">&#10007;</span>
                  <span className="font-sans text-sm text-cacao/60">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 3: Update page.tsx** — add imports and render after YTTTestimonials

**Step 4: Verify build**

Run: `pnpm build`

**Step 5: Commit**

```bash
git add components/ytt/YTTPricing.tsx components/ytt/YTTInclusions.tsx app/womb-wisdom-yoga-training/page.tsx
git commit -m "(feat): add pricing tiers and inclusions sections"
```

---

### Task 8: YTTRegistration + YTTStickyCTA

**Files:**
- Create: `components/ytt/YTTRegistration.tsx`
- Create: `components/ytt/YTTStickyCTA.tsx`
- Modify: `app/womb-wisdom-yoga-training/page.tsx`

**Context:**
- Registration: 3-step process + passport requirements + refund policy + certification requirements. This is the `#registration` anchor target.
- StickyCTA: fixed bottom bar that appears after scrolling past hero, with useInView or scroll position tracking

**Step 1: Create YTTRegistration**

```tsx
// components/ytt/YTTRegistration.tsx
"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const steps = [
  {
    number: "01",
    title: "Submit Your Application",
    description: "Complete the YTT application form so we can understand where you are in your journey.",
  },
  {
    number: "02",
    title: "Book a Call with Chocolako's Team",
    description: "A personal Zoom conversation to answer your questions and ensure this training is right for you.",
  },
  {
    number: "03",
    title: "Secure Your Spot",
    description: "Pay your $1,000 deposit or the full amount to confirm your place in the cohort.",
  },
]

const requirements = [
  "Valid passport with 6+ months validity from travel date",
  "4-6 blank passport pages",
  "Research visa requirements for Morocco based on your nationality",
  "Written acceptance confirmation from our team",
  "Flights to Marrakech Menara Airport (RAK)",
]

const certificationReqs = [
  "At least 6 months of yoga practice with basic pose, meditation, and breathwork knowledge",
  "Ability to study independently and in groups",
  "Full schedule participation (or agreed make-up assignments)",
  "Meaningful practicum contribution",
  "Complete all Yoga Alliance & Innergy Collective assignments",
  "Submit feedback and evaluation at completion",
]

export function YTTRegistration() {
  return (
    <section id="registration" className="bg-sand py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.2em] text-xs text-gold font-sans mb-4">
            Next Steps
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-cacao">
            How to Join
          </h2>
        </motion.div>

        {/* 3 Steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={staggerItem}
              className="bg-white rounded-lg p-6 border border-cacao/10 text-center"
            >
              <p className="font-serif text-3xl text-gold/50 mb-3">
                {step.number}
              </p>
              <h3 className="font-serif text-lg text-cacao mb-3">
                {step.title}
              </h3>
              <p className="font-sans text-sm text-cacao/70 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <a
            href="#"
            className="inline-block bg-gold hover:bg-gold/90 text-espresso font-sans font-medium px-10 py-4 rounded-full transition-colors text-sm uppercase tracking-wider"
          >
            Book Your Application Call
          </a>
          <p className="font-sans text-sm text-cacao/50 mt-4">
            100% refund guaranteed before the cancellation deadline.
          </p>
        </motion.div>

        {/* Travel Requirements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div>
            <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-cacao mb-6">
              Travel Requirements
            </h3>
            <ul className="space-y-3">
              {requirements.map((req) => (
                <li key={req} className="flex items-start gap-3">
                  <span className="text-gold mt-0.5">&#9670;</span>
                  <span className="font-sans text-sm text-cacao/70">
                    {req}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-cacao mb-6">
              Certification Requirements
            </h3>
            <ul className="space-y-3">
              {certificationReqs.map((req) => (
                <li key={req} className="flex items-start gap-3">
                  <span className="text-gold mt-0.5">&#9670;</span>
                  <span className="font-sans text-sm text-cacao/70">
                    {req}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 2: Create YTTStickyCTA**

```tsx
// components/ytt/YTTStickyCTA.tsx
"use client"

import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"

export function YTTStickyCTA() {
  const [visible, setVisible] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show after scrolling past ~100vh (hero height)
    setVisible(latest > window.innerHeight)
  })

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={visible ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" as const }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-bone/90 backdrop-blur-md border-t border-cacao/10"
    >
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="hidden sm:block">
          <p className="font-serif text-sm text-cacao">
            Womb Wisdom &amp; Wellbeing YTT
          </p>
          <p className="font-sans text-xs text-cacao/50">
            Morocco · August 1–22, 2026
          </p>
        </div>
        <a
          href="#registration"
          className="inline-block bg-gold hover:bg-gold/90 text-espresso font-sans font-medium px-6 py-2.5 rounded-full transition-colors text-sm"
        >
          Book Your Application Call
        </a>
      </div>
    </motion.div>
  )
}
```

**Step 3: Update page.tsx — final version**

```tsx
// app/womb-wisdom-yoga-training/page.tsx
import type { Metadata } from "next"
import { YTTHero } from "@/components/ytt/YTTHero"
import { YTTPainPoints } from "@/components/ytt/YTTPainPoints"
import { YTTFeminineBody } from "@/components/ytt/YTTFeminineBody"
import { YTTWombCenter } from "@/components/ytt/YTTWombCenter"
import { YTTOverview } from "@/components/ytt/YTTOverview"
import { YTTFounder } from "@/components/ytt/YTTFounder"
import { YTTFaculty } from "@/components/ytt/YTTFaculty"
import { YTTModules } from "@/components/ytt/YTTModules"
import { YTTSchedule } from "@/components/ytt/YTTSchedule"
import { YTTVenue } from "@/components/ytt/YTTVenue"
import { YTTWhoIsFor } from "@/components/ytt/YTTWhoIsFor"
import { YTTGains } from "@/components/ytt/YTTGains"
import { YTTTestimonials } from "@/components/ytt/YTTTestimonials"
import { YTTPricing } from "@/components/ytt/YTTPricing"
import { YTTInclusions } from "@/components/ytt/YTTInclusions"
import { YTTRegistration } from "@/components/ytt/YTTRegistration"
import { YTTStickyCTA } from "@/components/ytt/YTTStickyCTA"
import { Footer } from "@/components/sections/Footer"

export const metadata: Metadata = {
  title: "Womb Wisdom & Wellbeing YTT — Morocco | Innergy by Chocolako®",
  description:
    "A Yoga Alliance-recognized 200-hour Feminine Focused Yoga Teacher Training. 7 days online + 14 days in Ourika Valley, Morocco. August 1-22, 2026.",
}

export default function WombWisdomYTTPage() {
  return (
    <main>
      <YTTHero />
      <YTTPainPoints />
      <YTTFeminineBody />
      <YTTWombCenter />
      <YTTOverview />
      <YTTFounder />
      <YTTFaculty />
      <YTTModules />
      <YTTSchedule />
      <YTTVenue />
      <YTTWhoIsFor />
      <YTTGains />
      <YTTTestimonials />
      <YTTPricing />
      <YTTInclusions />
      <YTTRegistration />
      <YTTStickyCTA />
      <Footer />
    </main>
  )
}
```

**Step 4: Verify build**

Run: `pnpm build`

**Step 5: Commit**

```bash
git add components/ytt/YTTRegistration.tsx components/ytt/YTTStickyCTA.tsx app/womb-wisdom-yoga-training/page.tsx
git commit -m "(feat): add registration process, sticky CTA, and complete page assembly"
```

---

### Task 9: Link Homepage to YTT Page

**Files:**
- Modify: `components/sections/Pathways.tsx` (line 52, update Morocco CTA href)
- Modify: `components/shared/Navigation.tsx` (update In-Person dropdown Morocco link)

**Context:**
- Pathways card 03 currently has `href="#"` — change to `/womb-wisdom-yoga-training`
- Navigation "In-Person" dropdown should have "Womb Wisdom YTT — Morocco" linking to `/womb-wisdom-yoga-training`

**Step 1: Update Pathways.tsx**

In the `paths` array, find the entry with `number: "03"` and update its CTA link. The `<a>` tag at line 184 uses `href="#"` — but we need to add an `href` prop to the PathCard interface or handle it differently. Since all cards use `href="#"`, add an `href` field to the PathCard interface and the paths data.

Add to PathCard interface:
```tsx
href?: string
```

Add to path 03:
```tsx
href: "/womb-wisdom-yoga-training",
```

Update the `<a>` tag to use `path.href || "#"`.

**Step 2: Update Navigation.tsx**

Find the "Womb Wisdom YTT — Morocco" link in the In-Person dropdown and update its href to `/womb-wisdom-yoga-training`.

**Step 3: Verify build**

Run: `pnpm build`

**Step 4: Commit**

```bash
git add components/sections/Pathways.tsx components/shared/Navigation.tsx
git commit -m "(feat): link homepage pathways and navigation to YTT page"
```

---

### Task 10: Final Build Verification

**Step 1: Run full build**

Run: `pnpm build`
Expected: Clean build with routes `/`, `/invest`, `/womb-wisdom-yoga-training`

**Step 2: Run dev server and manually verify**

Run: `pnpm dev`
Check: Navigate to `http://localhost:3000/womb-wisdom-yoga-training`
Verify:
- All 17 sections render
- Sticky CTA appears on scroll
- Scroll anchors work (#registration)
- Homepage Pathways card 03 links to the page
- Navigation In-Person dropdown links to the page
- No console errors
- Responsive layout works at 375px, 768px, 1280px

**Step 3: Commit any fixes if needed**
