# YTT Landing Page Copy Update — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rewrite the `/womb-wisdom-yoga-training` landing page to match the March 2026 PDF copy direction exactly — updating existing components, adding new ones, and removing obsolete ones.

**Architecture:** 16 sections total. Each is a standalone React component in `components/ytt/`. The page route at `app/womb-wisdom-yoga-training/page.tsx` imports and renders them in order. All components use `"use client"`, Framer Motion for scroll-triggered animations, and the existing design system (cacao/gold/bone/sand/cream color palette, Cormorant Garamond + Inter typography).

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, TailwindCSS 4, Framer Motion

**Key patterns to follow:**
- Import animations from `@/lib/animations` — use `staggerContainer`, `staggerItem`, `fadeInUp`
- Section padding: `py-24 md:py-32`
- Max widths: `max-w-3xl` for text-heavy, `max-w-4xl`/`max-w-5xl` for multi-column
- Labels: `uppercase tracking-[0.2em] text-xs text-gold font-sans mb-4`
- Headings: `font-serif text-3xl md:text-4xl text-cacao`
- Body: `font-sans text-base text-cacao/80 leading-relaxed`
- NO HTML entities in JS string literals — use plain characters (`'`, `&`, `—`)
- NO co-author line in commits. Format: `(feat): short description\nsecond line if needed`
- Stripe links stubbed as `#`
- Verify each task with `npx next build`

---

### Task 1: Update YTTHero copy

**Files:**
- Modify: `components/ytt/YTTHero.tsx`

**Step 1: Update the component copy**

Replace current hero text with PDF copy. Key changes:
- H1: "Womb Wisdom & Wellbeing Yoga Teacher Training" (full name, not abbreviated)
- Subtitle moves above tagline: "A Yoga Alliance-recognized 200-hour certification for women to stop shrinking and start trusting inner wisdom."
- Date pill: "7 days online & 14 days in Ourika Valley, Morocco · August 1–22, 2026"
- Tagline stays: "Success taught you to silence your body. Now it's time to listen."
- CTA href changes from `#registration` to `#application`

```tsx
"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

export function YTTHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/ytt/morocco-hero.jpg"
          alt="Chocolako on the sand dunes of Morocco"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-cacao/70 via-cacao/50 to-cacao/80" />

      <motion.div
        className="relative z-10 px-6 py-24 max-w-3xl mx-auto text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={staggerItem}
          className="uppercase tracking-[0.3em] text-xs text-gold font-sans mb-10"
        >
          The Return Home
        </motion.p>

        <motion.h1
          variants={staggerItem}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-bone leading-tight mb-6"
        >
          Womb Wisdom & Wellbeing Yoga Teacher Training
        </motion.h1>

        <motion.p
          variants={staggerItem}
          className="font-serif text-lg md:text-xl text-sand/90 mb-8"
        >
          A Yoga Alliance-recognized 200-hour certification for women to stop
          shrinking and start trusting inner wisdom.
        </motion.p>

        <motion.div
          variants={staggerItem}
          className="inline-block rounded-full bg-bone/10 backdrop-blur-sm border border-bone/20 px-6 py-3 mb-10"
        >
          <p className="text-sm text-bone/90 font-sans tracking-wide">
            7 days online & 14 days in Ourika Valley, Morocco &middot; August
            1&ndash;22, 2026
          </p>
        </motion.div>

        <motion.p
          variants={staggerItem}
          className="font-serif italic text-lg md:text-xl text-sand/80 mb-12 max-w-xl mx-auto"
        >
          Success taught you to silence your body. Now it's time to listen.
        </motion.p>

        <motion.a
          variants={staggerItem}
          href="#application"
          className="inline-block bg-gold text-bone font-sans text-sm uppercase tracking-widest px-10 py-4 rounded-full hover:bg-gold/90 transition-colors duration-300"
        >
          Book Your Application Call
        </motion.a>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bone to-transparent pointer-events-none" />
    </section>
  )
}
```

**Step 2: Verify build**

Run: `npx next build`
Expected: Compiled successfully

**Step 3: Commit**

```bash
git add components/ytt/YTTHero.tsx
git commit -m "(feat): update hero copy to match PDF direction"
```

---

### Task 2: Create YTTIntro (replaces YTTFeminineBody + YTTWombCenter)

**Files:**
- Create: `components/ytt/YTTIntro.tsx`
- Delete: `components/ytt/YTTFeminineBody.tsx`
- Delete: `components/ytt/YTTWombCenter.tsx`

**Step 1: Create YTTIntro component**

```tsx
"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

export function YTTIntro() {
  return (
    <section className="bg-bone py-24 md:py-32">
      <motion.div
        className="max-w-3xl mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.p
          variants={staggerItem}
          className="font-serif text-xl md:text-2xl text-cacao leading-relaxed mb-8"
        >
          Imagine waking up and feeling safe in your body, seen in your truth,
          and free to build a life rooted in meaning, not just momentum.
        </motion.p>

        <motion.p
          variants={staggerItem}
          className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed mb-8"
        >
          If health is the highest form of wealth, how do you choose to invest
          the energy of this one life?
        </motion.p>

        <motion.p
          variants={staggerItem}
          className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed mb-8"
        >
          Your body knows the answer. Your radiance is the evidence. And
          everything that broke you open is not the wound — it's the wisdom.
        </motion.p>

        <motion.p
          variants={staggerItem}
          className="font-serif italic text-xl md:text-2xl text-rust leading-relaxed"
        >
          Your Return Home is more than a destination. It's a remembering of
          who you are becoming along the way.
        </motion.p>
      </motion.div>
    </section>
  )
}
```

**Step 2: Delete old components**

```bash
rm components/ytt/YTTFeminineBody.tsx components/ytt/YTTWombCenter.tsx
```

**Step 3: Verify build (will fail — page.tsx still imports deleted components). Do NOT update page.tsx yet — that happens in Task 12.**

Skip build verification for this task. The page.tsx update in Task 12 will wire everything together.

**Step 4: Commit**

```bash
git add components/ytt/YTTIntro.tsx
git add components/ytt/YTTFeminineBody.tsx components/ytt/YTTWombCenter.tsx
git commit -m "(feat): add YTTIntro, remove YTTFeminineBody and YTTWombCenter
new intro prose section from PDF replaces two old sections"
```

---

### Task 3: Create YTTArchetypes (replaces YTTPainPoints)

**Files:**
- Create: `components/ytt/YTTArchetypes.tsx`
- Delete: `components/ytt/YTTPainPoints.tsx`

**Step 1: Create the accordion component**

This is the most complex new component — an accordion with 5 expandable archetype stories. Uses React `useState` for open/close state. Only one item open at a time.

```tsx
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const archetypes = [
  {
    title: "The woman no longer defined by a diagnosis",
    story: [
      "You were handed a word. Fibroids. Endometriosis. PCOS. Adenomyosis. PMDD. And with it, a plan. Monitor this. Medicate that. Come back in six months.",
      "Somewhere between the ultrasounds and the prescription refills, you started relating to your womb the way the system does — as a problem rather than a source.",
      "Your womb has been trying to tell you something no scan was designed to hear.",
    ],
    closing:
      "What if the most important conversation with your body hasn't happened in a doctor's office?",
  },
  {
    title: "The woman who built success and lost herself in it",
    story: [
      "You've done it. The career, the income, the reputation, and the discipline to hold it all together. Society sees success. You see a woman who can't remember the last time she felt like herself.",
      "Nobody asks what it costs you because you make it look easy. You've been running on discipline so long you forgot there was another way to move through the world.",
      "Hustle culture didn't take your softness. You set it down because the world didn't reward it. But if the body keeps the score, then yours has been quietly asking for a different kind of strength. One that flows instead of forces, receives as well as leads, and knows rest is part of ambition, not the enemy of it.",
      "Something in you is tired of doing life without the part of you that makes it meaningful.",
    ],
    closing:
      "What more becomes possible when your feminine energy is as strong as your drive?",
  },
  {
    title: "The woman brave enough to meet herself again",
    story: [
      "Something ended. A relationship, a career, a version of yourself that made sense until it didn't. Now you're in the space between what was and what comes next, and nobody warned you how disorienting that in-between would feel.",
      "You're not falling apart. But you're not whole either.",
      "You don't need advice or a five-step plan. You need to be witnessed while you discover who's coming next. You need women around you who understand that this kind of not-knowing isn't a crisis.",
      "It's a becoming.",
      "The woman arriving on the other side of this transition is braver, softer, and more certain of herself than the one who walked in. She doesn't need to be built. She needs to be uncovered.",
      "You want to move through this with your feet on the ground and your body as a compass, not just survive it until it's over.",
    ],
    closing:
      "What if the woman you're becoming has been waiting for you to stop rushing and finally let her arrive?",
  },
  {
    title: "The woman rebuilding on her own terms",
    story: [
      "Something was done to your body without your permission. And no matter how much time has passed, part of you is still finding your way back to it.",
      "You survived and you kept moving. From the outside you look fine, and you've worked hard to keep it that way.",
      "But you know the part of you that went quiet. That learned to float above the feeling, to stay busy so the stillness couldn't catch up. Living above the neck became a survival skill.",
      "And it's costing you.",
      "Your body isn't the enemy. It never was. While you were gone, it kept going. It carried you through the worst of it, faithfully, without asking anything back. And now, quietly, without judgment, it's asking you to return.",
      "Not to what happened, but to your full self. To the softness, the safety, and the aliveness of your entire being.",
    ],
    closing:
      "What would it feel like to finally stop running from the one place that never abandoned you?",
  },
  {
    title: "The woman whose healing becomes another woman's roadmap",
    story: [
      "You've felt it for a while. That moment with a friend, client, or stranger at a retreat where you knew exactly what she needed. And before you could share it, doubt crept in. Who am I to take her there? Is my knowledge actually enough to help?",
      "Here's what that doubt never tells you: the women in your world aren't waiting for someone perfect. They're waiting for someone who has walked through the fire and knows the path well enough to guide others through it.",
      "You do the healing work, read the books, listen to podcasts, and somewhere along the way you stopped asking if this was something you wanted to do and started understanding that leadership was something you were born for.",
      "Womb healing has been one of the most powerful forces in your own life. And you want every woman around you to feel that same radiance, liberation, and deep exhale of finally returning home to herself.",
      "This training is the container you've been longing for. The credentials, the framework, and the lived experience in Africa to stop second-guessing and start leading.",
      "Your healing is never just for you. It's also the beginning of someone else's story.",
    ],
    closing:
      "What becomes possible for the women in your world when you finally say yes to the embodied leader your own healing made you?",
  },
]

export function YTTArchetypes() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          className="font-serif text-3xl md:text-4xl lg:text-5xl text-cacao mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Does this sound familiar?
        </motion.h2>

        <motion.div
          className="space-y-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {archetypes.map((item, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="border border-cacao/10 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-sand/50 transition-colors"
              >
                <span className="font-serif text-lg text-cacao pr-4">
                  {item.title}
                </span>
                <span
                  className={`text-gold text-xl flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-cacao/10 pt-4">
                      <div className="space-y-4">
                        {item.story.map((paragraph, j) => (
                          <p
                            key={j}
                            className="font-sans text-base text-cacao/80 leading-relaxed"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      <p className="font-serif italic text-lg text-rust mt-6">
                        {item.closing}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="font-serif italic text-xl text-cacao mb-10">
            If you felt seen and said that's me — welcome. You belong here.
          </p>
          <a
            href="#application"
            className="inline-block bg-gold hover:bg-gold/90 text-espresso font-sans font-medium px-10 py-4 rounded-full transition-colors text-sm uppercase tracking-wider"
          >
            Book Your Application Call
          </a>
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 2: Delete old component**

```bash
rm components/ytt/YTTPainPoints.tsx
```

**Step 3: Commit**

```bash
git add components/ytt/YTTArchetypes.tsx
git add components/ytt/YTTPainPoints.tsx
git commit -m "(feat): add YTTArchetypes accordion, remove YTTPainPoints
5 expandable archetype stories from PDF with animated open/close"
```

---

### Task 4: Create YTTWhyDifferent

**Files:**
- Create: `components/ytt/YTTWhyDifferent.tsx`

**Step 1: Create the component**

```tsx
"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const differentiators = [
  "Trauma-informed sequencing for the womb space.",
  "Menstrual cycle awareness as a practical teaching framework.",
  "Somatic practices for nervous system regulation through a feminine lens.",
  "Feminine archetypes as a living map for every wave of a woman's life.",
  "Sacred ritual as embodied devotion, not performance.",
]

export function YTTWhyDifferent() {
  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={staggerItem}
            className="font-serif text-3xl md:text-4xl text-cacao mb-8"
          >
            Here's why this YTT is different & exists in a category of one.
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed mb-6"
          >
            Most yoga teacher trainings are built for neutral, generic,
            unspecified bodies. Bodies without cycles. Without wombs. Without the
            particular grief that lives in the pelvis or the specific
            intelligence that pulses through the feminine nervous system.
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed mb-6"
          >
            You can complete a 200-hour training and never once be taught that
            your menstrual cycle is a map for energy and healing. That the womb
            holds somatic memory. That the female body processes trauma, stress,
            and transformation differently, and that every woman on your mat
            deserves a teacher who understands that distinction.
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="font-serif italic text-lg text-rust mb-10"
          >
            Womb Wisdom & Wellbeing YTT was built from that distinction.
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="font-sans font-bold text-sm uppercase tracking-wider text-cacao mb-6"
          >
            Our curriculum goes where others don't.
          </motion.p>

          <motion.ul variants={staggerItem} className="space-y-4 mb-10">
            {differentiators.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-gold flex-shrink-0 mt-1">&#9670;</span>
                <p className="font-sans text-base text-cacao/80 leading-relaxed">
                  {item}
                </p>
              </li>
            ))}
          </motion.ul>

          <motion.p
            variants={staggerItem}
            className="font-sans text-base text-cacao/80 leading-relaxed mb-10"
          >
            These aren't modules added onto an existing YTT. They are the
            nucleus of everything we teach, and the reason this training exists
            in a category of one.
          </motion.p>

          <motion.div variants={staggerItem} className="text-center">
            <a
              href="#structure"
              className="inline-block border border-gold text-gold hover:bg-gold/10 font-sans font-medium px-10 py-4 rounded-full transition-colors text-sm uppercase tracking-wider"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 2: Commit**

```bash
git add components/ytt/YTTWhyDifferent.tsx
git commit -m "(feat): add YTTWhyDifferent section
category-of-one differentiators from PDF"
```

---

### Task 5: Create YTTOutcomes (replaces YTTOverview)

**Files:**
- Create: `components/ytt/YTTOutcomes.tsx`
- Delete: `components/ytt/YTTOverview.tsx`

**Step 1: Create the component**

```tsx
"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const outcomes = [
  "Reconnect to the deep somatic intelligence of your womb and finally understand the signals your body communicates to you and through you",
  "Release stored grief, shame, and unprocessed experience living in your body through practices designed specifically for the female nervous system",
  "Replace chronic depletion with a feminine framework for energy that restores as powerfully as it generates",
  "Develop an unshakeable relationship with your own body — one built on trust, safety, and the kind of self-knowing that no external validation can touch",
  "Reclaim your emotional authority and stop abandoning yourself in the service of everyone else's needs",
  "Find your place inside a community of women doing real work — not a network, not a following, a genuine circle of belonging",
  "Move through your own cycle of womanhood with embodied tools that work at the level where real transformation lives",
  "Step into the fullest, most grounded expression of who you are and offer that same profound awakening to every woman around you",
  "Become a certified Yoga Teacher specializing in Feminine Embodiment and the intelligence of the womb",
]

export function YTTOutcomes() {
  return (
    <section className="bg-sand py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={staggerItem}
            className="font-serif text-2xl md:text-3xl text-cacao leading-snug mb-4"
          >
            The Womb Wisdom & Wellbeing YTT is where feminine intelligence
            meets the embodied science of the female body.
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="font-sans font-bold text-sm uppercase tracking-wider text-cacao mb-10"
          >
            In this training you will:
          </motion.p>

          <motion.div variants={staggerItem} className="space-y-6 mb-12">
            {outcomes.map((outcome, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-gold mt-1 text-lg flex-shrink-0">+</span>
                <p className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed">
                  {outcome}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.p
            variants={staggerItem}
            className="font-serif italic text-xl md:text-2xl text-cacao leading-relaxed mb-12"
          >
            The Womb Wisdom Yoga Teacher Training is a transformation you move
            through in your body, your practice, and your purpose.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="border-l-2 border-gold pl-6 md:pl-8"
          >
            <p className="text-lg md:text-xl font-serif italic leading-relaxed text-cacao mb-4">
              &ldquo;Most teacher trainings are what you do for a certificate.
              Chocolako's training is what you do for your life. She teaches you
              how to live yoga.&rdquo;
            </p>
            <footer>
              <span className="font-sans text-sm text-cacao/60">
                — Librette, USA
              </span>
            </footer>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 2: Delete old component**

```bash
rm components/ytt/YTTOverview.tsx
```

**Step 3: Commit**

```bash
git add components/ytt/YTTOutcomes.tsx
git add components/ytt/YTTOverview.tsx
git commit -m "(feat): add YTTOutcomes, remove YTTOverview
9 training outcomes with Librette testimonial pull quote"
```

---

### Task 6: Update YTTFounder copy

**Files:**
- Modify: `components/ytt/YTTFounder.tsx`

**Step 1: Rewrite the component with expanded PDF bio**

```tsx
"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

export function YTTFounder() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            className="relative aspect-[3/4] rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" as const }}
          >
            <Image
              src="/images/ytt/founder.jpg"
              alt="Chocolako Agburu in a vibrant dance pose"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p
              variants={staggerItem}
              className="uppercase tracking-[0.2em] text-xs text-gold font-sans mb-4"
            >
              Meet Your Lead Trainer
            </motion.p>

            <motion.h2
              variants={staggerItem}
              className="font-serif text-3xl md:text-4xl text-cacao leading-tight mb-2"
            >
              Chocolako Agburu, MPH, MBA, E-RYT 500, YACEP
            </motion.h2>

            <motion.p
              variants={staggerItem}
              className="font-serif italic text-lg text-gold mb-8"
            >
              Five years fibroid-free and counting.
            </motion.p>

            <motion.div variants={staggerItem} className="space-y-5">
              <p className="font-sans text-base text-cacao/80 leading-relaxed">
                Chocolako holds an MPH from UC Berkeley and an MBA from Cass
                Business School London. She devoted years managing the critical
                care division at Massachusetts General Hospital and leading
                pharmaceutical market access for GlaxoSmithKline across London
                and Lagos.
              </p>
              <p className="font-sans text-base text-cacao/80 leading-relaxed">
                She lived that world from the inside. Then she left and chose a
                different kind of authority. One rooted in the body, not the
                boardroom.
              </p>
              <p className="font-sans text-base text-cacao/80 leading-relaxed">
                She is the first woman in her lineage to say no to an arranged
                marriage. In doing so, she broke a generational pattern her womb
                was still carrying long after she walked away. What she
                discovered in the aftermath changed everything. Freedom without
                self-knowledge is just another kind of lostness.
              </p>
              <p className="font-sans text-base text-cacao/80 leading-relaxed">
                In 2021, twenty-five fibroids were removed from her womb.
                Instead of accepting the recommended hysterectomy, she chose to
                pay attention to her womb and wellbeing. That decision took her
                to wisdom keepers across Mexico, Peru, Kenya, Nigeria, Morocco,
                and Egypt — and became the living foundation of everything she
                now teaches.
              </p>
              <p className="font-sans text-base text-cacao/80 leading-relaxed">
                Today Chocolako is a resident teacher at The Yoga Barn in Ubud,
                Bali, guiding thousands of women and curating certification
                programs for Fortune 500 corporations across four continents.
                Her Womb Wisdom & Wellbeing methodology sits at the intersection
                of evidence-based health science and somatic feminine
                intelligence.
              </p>
              <p className="font-sans text-base text-cacao/80 leading-relaxed">
                She brings the rigor of a public health scientist, the strategy
                of an executive, and the wisdom of a woman who has walked every
                step of this path herself.
              </p>
            </motion.div>

            <motion.p
              variants={staggerItem}
              className="font-serif italic text-lg text-rust mt-8"
            >
              Chocolako doesn't teach what she studied. She teaches what she
              survived, integrated, and transformed. This training is the most
              complete expression of that work. She built it for you.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Verify build**

Run: `npx next build`

**Step 3: Commit**

```bash
git add components/ytt/YTTFounder.tsx
git commit -m "(feat): expand founder bio to match PDF copy
full story including arranged marriage, fibroids, Yoga Barn"
```

---

### Task 7: Create YTTContainer

**Files:**
- Create: `components/ytt/YTTContainer.tsx`

**Step 1: Create the component**

```tsx
"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

export function YTTContainer() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          <motion.div variants={staggerItem}>
            <h2 className="font-serif text-3xl md:text-4xl text-cacao mb-6">
              The container is intentional.
            </h2>
            <div className="space-y-5">
              <p className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed">
                This is a small cohort by design. The number of women in the
                room shapes the depth of what's possible in it. You won't be one
                of thirty. You'll be known by your lead trainer, cohort, and
                yourself in a way that large-format trainings simply can't
                offer.
              </p>
              <p className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed">
                The quality of the container is part of the certification.
                You'll learn to hold this for other women in part by having it
                held for you.{" "}
                <span className="font-bold text-cacao">20 women.</span>
              </p>
            </div>
          </motion.div>

          <motion.div variants={staggerItem}>
            <h2 className="font-serif text-3xl md:text-4xl text-cacao mb-6">
              The location is part of the curriculum.
            </h2>
            <div className="space-y-5">
              <p className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed">
                Bab Zouina was not chosen for its beauty alone, though it is
                stunning. It was chosen because the land does something to a
                woman that a studio simply cannot.
              </p>
              <p className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed">
                The Ourika Valley sits at the foot of the Atlas Mountains. The
                air is different there. The pace is different. The silence
                between practices has a quality that accelerates integration in
                ways that are difficult to explain before you've experienced
                them. Women have been gathering in North Africa to initiate,
                grieve, celebrate, and reclaim for thousands of years. That
                lineage is held sacredly in the earth there.
              </p>
              <p className="font-serif italic text-lg text-rust">
                The 14 days you spend at Bab Zouina are not a backdrop for the
                training. They are part of what the training teaches.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 2: Commit**

```bash
git add components/ytt/YTTContainer.tsx
git commit -m "(feat): add YTTContainer section
cohort intentionality and location-as-curriculum from PDF"
```

---

### Task 8: Update YTTVenue copy

**Files:**
- Modify: `components/ytt/YTTVenue.tsx`

**Step 1: Rewrite with expanded PDF copy**

```tsx
"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

export function YTTVenue() {
  return (
    <section className="bg-sand py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.2em] text-xs text-gold font-sans mb-4">
            The Location
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cacao mb-4">
            Bab Zouina means The Beautiful Door.
          </h2>
          <p className="font-sans text-base text-cacao/70">
            Ourika Valley, Atlas Mountains, Morocco
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[21/9] rounded-lg overflow-hidden mb-16"
        >
          <Image
            src="/images/ytt/closing-1.jpg"
            alt="Women gathered in ceremony at Bab Zouina"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-5 mb-16"
        >
          <motion.p
            variants={staggerItem}
            className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed"
          >
            That is what the name means in Moroccan Arabic. And when you arrive,
            you'll understand why it was named that.
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed"
          >
            Bab Zouina sits at the foot of the Atlas Mountains in the Ourika
            Valley — surrounded by olive trees, fruit trees, jasmine and
            bougainvillea, lavender and thyme hedges threading through a garden
            designed to hold you the moment you walk in. The air here carries
            the mountains. The light changes four times a day and every time it
            does, something shifts.
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed"
          >
            The property has two full yoga shalas, equipped for every style of
            practice you'll move through during the training. There are two
            rooftops facing the Atlas Mountains where morning practice happens
            against a sky that reminds you what scale actually feels like. There
            is a traditional hammam built from marble and Atlas clay that forms
            part of the ceremonial structure of the week. This is a genuine
            purification ritual.
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed"
          >
            Three meals per day are prepared from Bab Zouina's own vegetable
            garden and local Moroccan produce. You eat well, slowly, and with
            intention. Family style because the communal table is part of the
            African Way.
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed"
          >
            Bab Zouina was built first as a home. It grew into a retreat
            facility. That sequence matters. It is held with the warmth of a
            home — human equilibrium, community, and the kind of care for its
            land and the surrounding Ourika valley villages that you feel the
            moment you arrive.
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed"
          >
            It is an hour from Marrakesh. And a world away from everything
            you're carrying when you land.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="font-serif italic text-xl md:text-2xl text-cacao mb-2">
            You will not leave the same woman who arrived.
          </p>
          <p className="font-serif italic text-lg text-rust">
            Bab Zouina has never let anyone stay the same.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 2: Verify build**

Run: `npx next build`

**Step 3: Commit**

```bash
git add components/ytt/YTTVenue.tsx
git commit -m "(feat): expand venue copy to match PDF
full Bab Zouina description with garden, shalas, hammam details"
```

---

### Task 9: Create YTTWhatYouLeaveWith (replaces YTTGains)

**Files:**
- Create: `components/ytt/YTTWhatYouLeaveWith.tsx`
- Delete: `components/ytt/YTTGains.tsx`

**Step 1: Create the component**

```tsx
"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const credentialOutcomes = [
  {
    title: "Yoga Alliance-recognized 50-hour certification",
    description:
      "in Womb Wisdom & Wellbeing methodology.",
  },
  {
    title: "Legal standing",
    description:
      "to teach, insure your practice, and position yourself professionally in the growing women's wellness market.",
  },
  {
    title: "A complete, adaptable curriculum framework.",
    description:
      "You leave with a teaching system you can use immediately — with private clients, group classes, women's circles, your own retreats, or as an additional offering to deepen what you're already doing.",
  },
  {
    title: "A somatic toolkit unlike anything in standard YTT training.",
    description:
      "Trauma-informed sequencing for the womb space. Menstrual cycle integration. Nervous system regulation from a feminine framework. Feminine archetype mapping. Sacred ritual as a pedagogical tool. These are not concepts. By the time you leave Morocco, they are practices you have lived in your own body and are ready to guide others through.",
  },
  {
    title: "The professional positioning to charge what this work is worth.",
    description:
      "There is a growing market of women who need exactly what you'll be trained to offer. Women with diagnoses. Women in burnout. Women in transition. Women healing from trauma. Women who have tried everything else. Your certification is your authority in that space.",
  },
]

const personalOutcomes = [
  {
    title: "A somatic relationship with your own body you have never had before.",
    description:
      "Not because you haven't done the work. Because this is a different kind of work — lived in the body rather than processed through the mind.",
  },
  {
    title: "Language for what you've been living but couldn't name.",
    description:
      "The shift that happens when a woman finally has words for her own experience is irreversible. You'll have them.",
  },
  {
    title: "A cohort who has done real work alongside you.",
    description:
      "Not a Facebook group. Not a newsletter community. Women who have been through deep immersion with you in one of the most held environments on earth. That is a different kind of belonging.",
  },
  {
    title: "The Return Home.",
    description:
      "You'll know what this means when you land in Marrakesh and drive toward the mountains. And you'll know it again, differently, on the day you leave.",
  },
]

export function YTTWhatYouLeaveWith() {
  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="uppercase tracking-[0.2em] text-xs text-gold font-sans mb-4">
            The Outcomes
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-cacao mb-4">
            What you leave with.
          </h2>
          <p className="font-sans text-base text-cacao/70">
            Both columns matter. The credential and the personal. You need both
            to do this work at the level you're being called to.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={staggerItem}>
            <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-cacao mb-8">
              Your credential outcomes
            </h3>
            <div className="space-y-6">
              {credentialOutcomes.map((item, i) => (
                <div key={i}>
                  <p className="font-sans text-base text-cacao/80 leading-relaxed">
                    <span className="font-bold text-cacao">{item.title}</span>{" "}
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={staggerItem}>
            <h3 className="font-sans font-bold text-sm uppercase tracking-wider text-cacao mb-8">
              Your personal outcomes
            </h3>
            <div className="space-y-6">
              {personalOutcomes.map((item, i) => (
                <div key={i}>
                  <p className="font-sans text-base text-cacao/80 leading-relaxed">
                    <span className="font-bold text-cacao">{item.title}</span>{" "}
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 2: Delete old component**

```bash
rm components/ytt/YTTGains.tsx
```

**Step 3: Commit**

```bash
git add components/ytt/YTTWhatYouLeaveWith.tsx
git add components/ytt/YTTGains.tsx
git commit -m "(feat): add YTTWhatYouLeaveWith, remove YTTGains
two-column credential and personal outcomes from PDF"
```

---

### Task 10: Create YTTStructure (replaces YTTModules + YTTSchedule)

**Files:**
- Create: `components/ytt/YTTStructure.tsx`
- Delete: `components/ytt/YTTModules.tsx`
- Delete: `components/ytt/YTTSchedule.tsx`

**Step 1: Create the component**

```tsx
"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const phases = [
  {
    label: "Before Morocco",
    title: "Online Pre-Immersion",
    description:
      "You arrive at Bab Zouina prepared. The pre-immersion online modules introduce the Womb Wisdom methodology, the anatomical and energetic framework of the womb space, the principles of trauma-informed teaching, and the somatic vocabulary you'll work with throughout the training. You meet your cohort before you board a plane.",
  },
  {
    label: "The 14 Days at Bab Zouina",
    title: "August 8–22, 2026",
    description:
      "Each day is structured around morning practice, teaching methodology sessions, somatic immersion, embodiment practices, and integration. The rhythm is deliberate — physical depth in the morning, intellectual framework midday, somatic and ceremonial practices in the afternoon and evening. You are never overscheduled. The land and the body need space to do their work.",
    curriculum: [
      "Trauma-informed sequencing for the womb space",
      "Menstrual cycle as a teaching and healing framework",
      "Feminine archetypes and their embodied application",
      "Somatic nervous system regulation",
      "Womb-centered breathwork and meditation",
      "Sacred ritual as embodied practice",
      "Teaching methodology and client communication",
      "Practicum with peer teaching and feedback",
    ],
  },
  {
    label: "After Morocco",
    title: "Integration Support",
    description:
      "The integration period is where the training becomes teaching. Post-immersion support includes guidance on establishing your practice, positioning your certification, and navigating the transition from student to practitioner. You are not handed a certificate and sent home. You are supported through the becoming.",
  },
]

export function YTTStructure() {
  return (
    <section id="structure" className="bg-white py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.2em] text-xs text-gold font-sans mb-4">
            The Structure
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-cacao">
            How the training unfolds.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {phases.map((phase, i) => (
            <motion.div key={i} variants={staggerItem}>
              <p className="uppercase tracking-[0.2em] text-xs text-gold font-sans mb-2">
                {phase.label}
              </p>
              <h3 className="font-serif text-2xl text-cacao mb-4">
                {phase.title}
              </h3>
              <p className="font-sans text-base text-cacao/80 leading-relaxed">
                {phase.description}
              </p>
              {phase.curriculum && (
                <div className="mt-6">
                  <p className="font-sans font-bold text-sm uppercase tracking-wider text-cacao mb-4">
                    Curriculum includes:
                  </p>
                  <ul className="space-y-2">
                    {phase.curriculum.map((item, j) => (
                      <li
                        key={j}
                        className="font-sans text-sm text-cacao/70 flex items-start gap-3"
                      >
                        <span className="text-gold flex-shrink-0">
                          &#9670;
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 2: Delete old components**

```bash
rm components/ytt/YTTModules.tsx components/ytt/YTTSchedule.tsx
```

**Step 3: Commit**

```bash
git add components/ytt/YTTStructure.tsx
git add components/ytt/YTTModules.tsx components/ytt/YTTSchedule.tsx
git commit -m "(feat): add YTTStructure, remove YTTModules and YTTSchedule
before/during/after Morocco training phases from PDF"
```

---

### Task 11: Create YTTFit (replaces YTTWhoIsFor)

**Files:**
- Create: `components/ytt/YTTFit.tsx`
- Delete: `components/ytt/YTTWhoIsFor.tsx`

**Step 1: Create the component**

```tsx
"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const forYou = [
  "You are a woman ready to do real work. Not conceptual work. Not another workshop that processes from the neck up. Work that happens in the body, requires your full presence, and asks something genuine from you.",
  "You want a certification that reflects the depth of what you actually offer — whether you're new to teaching or deepening an existing practice.",
  "You are drawn to one or more of the five stories in the recognition section above and you know it isn't a coincidence.",
  "You can invest eight days in Morocco with the intention and focus this kind of training requires.",
  "You are willing to be changed, not just trained.",
]

const notForYou = [
  "You're looking for a relaxed retreat with light yoga and journaling. This is rigorous, structured, and held inside a framework that asks something real from you every day.",
  "You want a large cohort, a big-name venue, or a training designed around Instagram content. This is intentionally intimate, and it is designed for depth over optics.",
  "You're not ready to bring your own experience into the room. The personal transformation is not optional here. It is the methodology.",
]

export function YTTFit() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="uppercase tracking-[0.2em] text-xs text-gold font-sans mb-4">
            The Fit
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-cacao">
            Who this is for. Who it isn't.
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          <motion.div variants={staggerItem}>
            <h3 className="font-serif text-xl text-cacao mb-6">
              This training is for you if —
            </h3>
            <div className="space-y-4">
              {forYou.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-gold mt-1 flex-shrink-0">&#10003;</span>
                  <p className="font-sans text-base text-cacao/80 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={staggerItem}>
            <h3 className="font-serif text-xl text-cacao/70 mb-6">
              This training is not for you if —
            </h3>
            <div className="space-y-4">
              {notForYou.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-cacao/30 mt-1 flex-shrink-0">
                    &#10007;
                  </span>
                  <p className="font-sans text-base text-cacao/60 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.p
            variants={staggerItem}
            className="font-sans text-sm text-cacao/50 italic"
          >
            Both of these sections exist to protect your investment and ours. A
            training this held is only as good as the women in the container.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 2: Delete old component**

```bash
rm components/ytt/YTTWhoIsFor.tsx
```

**Step 3: Commit**

```bash
git add components/ytt/YTTFit.tsx
git add components/ytt/YTTWhoIsFor.tsx
git commit -m "(feat): add YTTFit, remove YTTWhoIsFor
for/not-for sections with protection framing from PDF"
```

---

### Task 12: Update YTTTestimonials copy

**Files:**
- Modify: `components/ytt/YTTTestimonials.tsx`

**Step 1: Replace testimonials with PDF versions**

```tsx
"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const testimonials = [
  {
    quote:
      "I arrived as a yoga teacher with ten years of experience. I left as a woman who finally understood what I'd been carrying in my own body — and how to hold that for other women. This training changed my practice, my client relationships, and honestly, my marriage. I didn't expect that last one.",
    name: "Certified Graduate",
    title: "Womb Wisdom & Wellbeing YTT",
  },
  {
    quote:
      "I've done 200-hour and 500-hour trainings. I've done retreats on three continents. Nothing has gone as deep as this. The combination of Chocolako's clinical background and her embodied practice is unlike anything I've found anywhere else. I refer to this training as my before and after.",
    name: "Women's Health Practitioner",
    title: "Canada",
  },
  {
    quote:
      "I came in as the high achiever who had done everything right and still felt empty. I left knowing exactly where I'd been putting myself last and with a practice that actually reaches the place I'd been trying to heal for fifteen years. Eight days. I know how that sounds. But ask any woman who's done this.",
    name: "Senior Director",
    title: "London",
  },
]

export function YTTTestimonials() {
  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="uppercase tracking-[0.2em] text-xs text-gold font-sans mb-4">
            From Past Participants
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-cacao">
            Testimonials
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="border-l-2 border-gold pl-6 md:pl-8"
            >
              <p className="text-lg md:text-xl font-serif italic leading-relaxed text-cacao mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer>
                <span className="font-sans font-bold text-cacao">{t.name}</span>
                {" "}
                &middot;
                {" "}
                <span className="font-sans text-rust/70">{t.title}</span>
              </footer>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 2: Verify build**

Run: `npx next build`

**Step 3: Commit**

```bash
git add components/ytt/YTTTestimonials.tsx
git commit -m "(feat): replace testimonials with PDF versions
longer quotes from certified graduate, practitioner, director"
```

---

### Task 13: Update YTTPricing

**Files:**
- Modify: `components/ytt/YTTPricing.tsx`

**Step 1: Update copy and add closing line from PDF**

Key changes:
- Label: "THE INVESTMENT"
- Heading: "The investment in this premium service:"
- Add closing: "Spots are limited. Applications reviewed on a rolling basis."
- All payment links stay as `#`

```tsx
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
    <section className="bg-sand py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[0.2em] text-xs text-gold font-sans mb-4">
            The Investment
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-cacao mb-4">
            The investment in this premium service:
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              className="bg-white rounded-lg p-8 border border-cacao/10 flex flex-col"
              variants={staggerItem}
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

        <p className="font-sans text-sm text-cacao/50 text-center">
          Spots are limited. Applications reviewed on a rolling basis.
        </p>
      </div>
    </section>
  )
}
```

**Step 2: Verify build**

Run: `npx next build`

**Step 3: Commit**

```bash
git add components/ytt/YTTPricing.tsx
git commit -m "(feat): update pricing section copy to match PDF
new heading and closing line, payment links stubbed"
```

---

### Task 14: Create YTTApplicationCall (replaces YTTRegistration)

**Files:**
- Create: `components/ytt/YTTApplicationCall.tsx`
- Delete: `components/ytt/YTTRegistration.tsx`

**Step 1: Create the component**

```tsx
"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

export function YTTApplicationCall() {
  return (
    <section id="application" className="bg-cream py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p
            variants={staggerItem}
            className="uppercase tracking-[0.2em] text-xs text-gold font-sans mb-4"
          >
            What Happens Next
          </motion.p>

          <motion.h2
            variants={staggerItem}
            className="font-serif text-3xl md:text-4xl text-cacao leading-tight mb-8"
          >
            The application call is thirty minutes with a member of The Innergy
            Global Sales Team
          </motion.h2>

          <motion.div variants={staggerItem} className="space-y-5 mb-12">
            <p className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed">
              You'll speak directly with Chocolako or a senior member of her
              team. You'll share your goals, and what you're building for your
              life. We'll tell you exactly what this training offers and whether
              the timing and the fit make sense for you right now.
            </p>
            <p className="font-sans text-base md:text-lg text-cacao/80 leading-relaxed">
              If it's right, we'll talk next steps. If it's not, we'll tell you
              that honestly — and point you toward what might be.
            </p>
            <p className="font-serif italic text-lg text-rust">
              This is not a sales call. It's a real conversation between two
              people who both want the outcome to be correct.
            </p>
          </motion.div>

          <motion.div variants={staggerItem} className="text-center">
            <a
              href="#"
              className="inline-block bg-gold hover:bg-gold/90 text-espresso font-sans font-medium px-10 py-4 rounded-full transition-colors text-sm uppercase tracking-wider mb-8"
            >
              Book Your Application Call
            </a>

            <div className="space-y-1">
              <p className="font-sans text-sm text-cacao/60">
                August 8–22, 2026 &nbsp;|&nbsp; Bab Zouina, Ourika Valley,
                Morocco
              </p>
              <p className="font-sans text-sm text-cacao/50">
                Online pre-immersion begins July 2026
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 2: Delete old component**

```bash
rm components/ytt/YTTRegistration.tsx
```

**Step 3: Commit**

```bash
git add components/ytt/YTTApplicationCall.tsx
git add components/ytt/YTTRegistration.tsx
git commit -m "(feat): add YTTApplicationCall, remove YTTRegistration
thirty-minute call description and honest fit framing from PDF"
```

---

### Task 15: Create YTTFAQ

**Files:**
- Create: `components/ytt/YTTFAQ.tsx`

**Step 1: Create the accordion FAQ component**

Same accordion pattern as YTTArchetypes.

```tsx
"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"

const faqs = [
  {
    question: "Do I need prior yoga teaching experience to enroll?",
    answer:
      "No. This training is open to women at all stages — those who are brand new to teaching, those deepening an existing practice, and experienced practitioners adding a specialized methodology. The pre-immersion online modules bring everyone to the same starting point before Morocco.",
  },
  {
    question: "Is this training spiritually or religiously specific?",
    answer:
      "It is not. The Womb Wisdom methodology draws from somatic science, nervous system research, feminine embodiment traditions, and the lived experience of women across cultures. There is no required spiritual belief system. The practices are grounded in the body first.",
  },
  {
    question:
      "What if I don't have a uterus or have had a hysterectomy?",
    answer:
      "You are welcome here. The womb space, as a center of somatic intelligence, creativity, and feminine authority, is not defined by anatomy alone. Women who have had hysterectomies and/or experienced surgical menopause consistently report some of the deepest experiences in this training. The work is for the body you are in.",
  },
  {
    question: "What does 'hybrid' mean practically?",
    answer:
      "You complete pre-immersion online modules in the weeks before August 1. These are self-paced within a set window and include Google Meet video instruction, reading, and cohort connection calls. The 14-day immersive training at Bab Zouina runs August 8-22, 2026 with full daily programming. Post-training integration support is delivered online after you return home.",
  },
  {
    question: "How is this different from a standard 200-hour YTT?",
    answer:
      "A standard 200-hour YTT qualifies you to teach general yoga. This training qualifies you to teach within a specialized methodology specifically designed for women's bodies, womb health, trauma-informed practice, and feminine embodiment. Many graduates of this training hold existing 200-hour certifications and describe this as the missing piece that made their existing credential make sense and meaningful.",
  },
  {
    question: "What is the investment?",
    answer:
      "Investment details are shared during your application call and included above. The program is positioned at the high-investment end of the market, reflecting the quality of the certification, the intimacy of the cohort, the depth of the location, and the transformation women consistently experience. Payment plans are available and discussed on the application call.",
  },
]

export function YTTFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="uppercase tracking-[0.2em] text-xs text-gold font-sans mb-4">
            Frequently Asked Questions
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-cacao">
            FAQs
          </h2>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="border border-cacao/10 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-bone/50 transition-colors"
              >
                <span className="font-sans font-medium text-base text-cacao pr-4">
                  {faq.question}
                </span>
                <span
                  className={`text-gold text-xl flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-cacao/10 pt-4">
                      <p className="font-sans text-base text-cacao/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 2: Commit**

```bash
git add components/ytt/YTTFAQ.tsx
git commit -m "(feat): add YTTFAQ accordion section
6 questions and answers from PDF"
```

---

### Task 16: Create YTTClosing

**Files:**
- Create: `components/ytt/YTTClosing.tsx`

**Step 1: Create the component**

```tsx
"use client"

import { motion } from "framer-motion"

export function YTTClosing() {
  return (
    <section className="bg-sand py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.p
          className="font-serif italic text-2xl md:text-3xl text-cacao leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          The Return Home was always available to you. This is simply the door.
        </motion.p>

        <motion.a
          href="#application"
          className="inline-block bg-gold hover:bg-gold/90 text-espresso font-sans font-medium px-10 py-4 rounded-full transition-colors text-sm uppercase tracking-wider mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Book Your Application Call
        </motion.a>

        <motion.p
          className="font-sans text-sm text-cacao/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Womb Wisdom & Wellbeing YTT &nbsp;|&nbsp; August 8&ndash;22, 2026
          &nbsp;|&nbsp; Bab Zouina, Morocco
        </motion.p>
      </div>
    </section>
  )
}
```

**Step 2: Commit**

```bash
git add components/ytt/YTTClosing.tsx
git commit -m "(feat): add YTTClosing section
final CTA and closing line from PDF"
```

---

### Task 17: Wire up page.tsx + update StickyCTA + delete unused components

**Files:**
- Modify: `app/womb-wisdom-yoga-training/page.tsx`
- Modify: `components/ytt/YTTStickyCTA.tsx`
- Delete: `components/ytt/YTTFaculty.tsx`
- Delete: `components/ytt/YTTInclusions.tsx`

**Step 1: Update page.tsx with new section order**

```tsx
import type { Metadata } from "next"
import { YTTHero } from "@/components/ytt/YTTHero"
import { YTTIntro } from "@/components/ytt/YTTIntro"
import { YTTArchetypes } from "@/components/ytt/YTTArchetypes"
import { YTTWhyDifferent } from "@/components/ytt/YTTWhyDifferent"
import { YTTOutcomes } from "@/components/ytt/YTTOutcomes"
import { YTTFounder } from "@/components/ytt/YTTFounder"
import { YTTContainer } from "@/components/ytt/YTTContainer"
import { YTTVenue } from "@/components/ytt/YTTVenue"
import { YTTWhatYouLeaveWith } from "@/components/ytt/YTTWhatYouLeaveWith"
import { YTTStructure } from "@/components/ytt/YTTStructure"
import { YTTFit } from "@/components/ytt/YTTFit"
import { YTTTestimonials } from "@/components/ytt/YTTTestimonials"
import { YTTPricing } from "@/components/ytt/YTTPricing"
import { YTTApplicationCall } from "@/components/ytt/YTTApplicationCall"
import { YTTFAQ } from "@/components/ytt/YTTFAQ"
import { YTTClosing } from "@/components/ytt/YTTClosing"
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
      <YTTIntro />
      <YTTArchetypes />
      <YTTWhyDifferent />
      <YTTOutcomes />
      <YTTFounder />
      <YTTContainer />
      <YTTVenue />
      <YTTWhatYouLeaveWith />
      <YTTStructure />
      <YTTFit />
      <YTTTestimonials />
      <YTTPricing />
      <YTTApplicationCall />
      <YTTFAQ />
      <YTTClosing />
      <YTTStickyCTA />
      <Footer />
    </main>
  )
}
```

**Step 2: Update StickyCTA anchor from `#registration` to `#application`**

In `components/ytt/YTTStickyCTA.tsx`, change:
```
href="#registration"
```
to:
```
href="#application"
```

**Step 3: Delete unused components**

```bash
rm components/ytt/YTTFaculty.tsx components/ytt/YTTInclusions.tsx
```

**Step 4: Verify build**

Run: `npx next build`
Expected: Compiled successfully

**Step 5: Commit**

```bash
git add app/womb-wisdom-yoga-training/page.tsx components/ytt/YTTStickyCTA.tsx
git add components/ytt/YTTFaculty.tsx components/ytt/YTTInclusions.tsx
git commit -m "(feat): wire up new page structure, remove unused components
16 sections in PDF order, update CTA anchors, delete Faculty and Inclusions"
```
