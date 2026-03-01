# Innergy by Chocolako Homepage Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a cinematic, editorial homepage that establishes the Innergy by Chocolako brand expression.

**Architecture:** Next.js 14 App Router with Tailwind CSS for styling, shadcn/ui for component primitives, and Framer Motion for cinematic scroll animations. Each homepage section is a separate component composed in the main page. Brand tokens defined in CSS variables.

**Tech Stack:** Next.js 14, Tailwind CSS, shadcn/ui, Framer Motion, TypeScript, Vercel

---

## Task 1: Scaffold Next.js Project

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `tailwind.config.ts`
- Create: `next.config.ts`
- Create: `app/layout.tsx`
- Create: `app/page.tsx`
- Create: `app/globals.css`

**Step 1: Initialize Next.js with TypeScript and Tailwind**

Run:
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --use-pnpm
```

Expected: Project scaffolded with App Router structure

**Step 2: Verify the dev server runs**

Run: `pnpm dev`
Expected: Server starts at http://localhost:3000

**Step 3: Commit scaffold**

```bash
git init
git add .
git commit -m "chore: scaffold Next.js 14 with Tailwind"
```

---

## Task 2: Install Dependencies

**Files:**
- Modify: `package.json`

**Step 1: Install Framer Motion**

Run: `pnpm add framer-motion`

**Step 2: Install shadcn/ui CLI and initialize**

Run:
```bash
pnpm dlx shadcn@latest init
```

When prompted:
- Style: Default
- Base color: Neutral
- CSS variables: Yes

**Step 3: Add shadcn/ui button component**

Run: `pnpm dlx shadcn@latest add button`

**Step 4: Verify installation**

Run: `pnpm dev`
Expected: No errors, server starts

**Step 5: Commit dependencies**

```bash
git add .
git commit -m "chore: add framer-motion and shadcn/ui"
```

---

## Task 3: Configure Brand Tokens

**Files:**
- Modify: `app/globals.css`
- Modify: `tailwind.config.ts`

**Step 1: Add brand CSS variables to globals.css**

Replace the `:root` section in `app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    /* Brand Colors */
    --cacao: 24 35% 27%;
    --espresso: 20 33% 14%;
    --jungle: 144 17% 29%;
    --sage: 118 18% 67%;
    --gold: 27 52% 46%;
    --blush: 18 44% 66%;
    --bone: 38 38% 94%;
    --sand: 30 24% 83%;

    /* shadcn/ui overrides */
    --background: 38 38% 94%;
    --foreground: 20 33% 14%;
    --primary: 24 35% 27%;
    --primary-foreground: 38 38% 94%;
    --secondary: 144 17% 29%;
    --secondary-foreground: 38 38% 94%;
    --accent: 27 52% 46%;
    --accent-foreground: 38 38% 94%;
    --muted: 30 24% 83%;
    --muted-foreground: 24 35% 27%;
    --border: 30 24% 83%;
    --ring: 27 52% 46%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 20 33% 14%;
    --foreground: 38 38% 94%;
    --primary: 38 38% 94%;
    --primary-foreground: 20 33% 14%;
    --muted: 24 35% 27%;
    --muted-foreground: 30 24% 83%;
    --border: 24 35% 27%;
  }
}

@layer base {
  body {
    @apply bg-background text-foreground;
    font-feature-settings: "rlig" 1, "calt" 1;
  }
}
```

**Step 2: Extend Tailwind config with brand colors**

Update `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cacao: "hsl(var(--cacao))",
        espresso: "hsl(var(--espresso))",
        jungle: "hsl(var(--jungle))",
        sage: "hsl(var(--sage))",
        gold: "hsl(var(--gold))",
        blush: "hsl(var(--blush))",
        bone: "hsl(var(--bone))",
        sand: "hsl(var(--sand))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
```

**Step 3: Verify colors work**

Update `app/page.tsx` temporarily:

```tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-espresso text-bone p-8">
      <h1 className="text-4xl text-gold">Innergy by Chocolako</h1>
      <p className="text-sand mt-4">Brand tokens working</p>
    </main>
  )
}
```

Run: `pnpm dev`
Expected: Dark background (#2d1f1a), gold heading (#b87333)

**Step 4: Commit brand tokens**

```bash
git add .
git commit -m "feat: configure brand color tokens"
```

---

## Task 4: Configure Typography

**Files:**
- Modify: `app/layout.tsx`
- Create: `lib/fonts.ts`

**Step 1: Create fonts configuration**

Create `lib/fonts.ts`:

```typescript
import { Cormorant_Garabono as Cormorant, Inter } from "next/font/google"

export const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
})

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})
```

**Step 2: Update layout with fonts**

Update `app/layout.tsx`:

```tsx
import type { Metadata } from "next"
import { cormorant, inter } from "@/lib/fonts"
import "./globals.css"

export const metadata: Metadata = {
  title: "Innergy by Chocolako | Embodied Leadership",
  description: "Transform your relationship with power through somatic intelligence, feminine lineage, and ceremonial wisdom.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
```

**Step 3: Test typography**

Update `app/page.tsx`:

```tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-espresso text-bone p-8">
      <h1 className="font-serif text-5xl text-gold">Innergy by Chocolako</h1>
      <p className="font-sans text-lg text-sand mt-4">
        Transform your relationship with power through somatic intelligence.
      </p>
    </main>
  )
}
```

Run: `pnpm dev`
Expected: Serif heading (Cormorant), sans-serif body (Inter)

**Step 4: Commit typography**

```bash
git add .
git commit -m "feat: configure Cormorant and Inter typography"
```

---

## Task 5: Create Animation Utilities

**Files:**
- Create: `lib/animations.ts`
- Create: `components/shared/motion.tsx`

**Step 1: Create Framer Motion variants**

Create `lib/animations.ts`:

```typescript
import { Variants } from "framer-motion"

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export const scaleOnHover = {
  scale: 1.02,
  transition: { duration: 0.2 },
}

export const reduceMotion = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.01 } },
}
```

**Step 2: Create motion wrapper components**

Create `components/shared/motion.tsx`:

```tsx
"use client"

import { motion, useReducedMotion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, ReactNode } from "react"
import { fadeInUp, reduceMotion } from "@/lib/animations"

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function SectionWrapper({ children, className = "", delay = 0 }: SectionWrapperProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const shouldReduceMotion = useReducedMotion()

  const variants = shouldReduceMotion ? reduceMotion : fadeInUp

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.section>
  )
}

interface AnimatedTextProps {
  text: string
  className?: string
  as?: "h1" | "h2" | "h3" | "p" | "span"
}

export function AnimatedText({ text, className = "", as: Tag = "p" }: AnimatedTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return <Tag className={className}>{text}</Tag>
  }

  const words = text.split(" ")

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.4, delay: i * 0.05 }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  )
}
```

**Step 3: Verify animations work**

Update `app/page.tsx`:

```tsx
import { SectionWrapper, AnimatedText } from "@/components/shared/motion"

export default function Home() {
  return (
    <main className="min-h-screen bg-espresso text-bone">
      <SectionWrapper className="min-h-screen flex flex-col items-center justify-center p-8">
        <AnimatedText
          as="h1"
          text="Innergy by Chocolako"
          className="font-serif text-5xl md:text-7xl text-gold text-center"
        />
        <AnimatedText
          as="p"
          text="Transform your relationship with power through somatic intelligence."
          className="font-sans text-lg text-sand mt-6 text-center max-w-xl"
        />
      </SectionWrapper>
    </main>
  )
}
```

Run: `pnpm dev`
Expected: Text animates word-by-word on page load

**Step 4: Commit animation utilities**

```bash
git add .
git commit -m "feat: add Framer Motion animation utilities"
```

---

## Task 6: Build Hero Section

**Files:**
- Create: `components/sections/Hero.tsx`
- Modify: `app/page.tsx`

**Step 1: Create Hero component with parallax**

Create `components/sections/Hero.tsx`:

```tsx
"use client"

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { AnimatedText } from "@/components/shared/motion"

export function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const shouldReduceMotion = useReducedMotion()

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with parallax */}
      <motion.div
        className="absolute inset-0 bg-espresso"
        style={{ y: shouldReduceMotion ? 0 : y }}
      >
        {/* Placeholder for hero image - add actual image later */}
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-espresso/60 to-espresso" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl"
        style={{ opacity: shouldReduceMotion ? 1 : opacity }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gold uppercase tracking-[0.3em] text-sm mb-6"
        >
          Somatic Feminine Intelligence
        </motion.p>

        <AnimatedText
          as="h1"
          text="Reclaim the Body as Sacred Ground for Leadership"
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-bone leading-tight"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-sand text-lg md:text-xl mt-8 max-w-2xl mx-auto"
        >
          Transform your relationship with power through somatic intelligence,
          feminine lineage, and ceremonial wisdom.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <Button
            size="lg"
            className="bg-gold hover:bg-gold/90 text-espresso font-medium px-8"
          >
            Work With Me
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-bone/30 text-bone hover:bg-bone/10 px-8"
          >
            Explore Programs
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-bone/30 flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-bone/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
```

**Step 2: Update page to use Hero**

Update `app/page.tsx`:

```tsx
import { Hero } from "@/components/sections/Hero"

export default function Home() {
  return (
    <main>
      <Hero />
      {/* Placeholder for scroll testing */}
      <div className="h-screen bg-bone" />
    </main>
  )
}
```

**Step 3: Verify Hero renders**

Run: `pnpm dev`
Expected: Full-screen hero with animated text, parallax on scroll

**Step 4: Commit Hero section**

```bash
git add .
git commit -m "feat: add Hero section with parallax"
```

---

## Task 7: Build Problem Section

**Files:**
- Create: `components/sections/Problem.tsx`
- Modify: `app/page.tsx`

**Step 1: Create expandable Problem component**

Create `components/sections/Problem.tsx`:

```tsx
"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { SectionWrapper } from "@/components/shared/motion"
import { ChevronDown } from "lucide-react"

const problems = [
  {
    id: "external",
    title: "The External Problem",
    summary: "The systems weren't built for you.",
    content:
      "You've achieved everything you were told would bring fulfillment—the title, the recognition, the influence. But the corporate playbook was written by and for a different kind of leader. You've adapted, performed, succeeded. And something essential got lost along the way.",
  },
  {
    id: "internal",
    title: "The Internal Problem",
    summary: "Your body keeps the score.",
    content:
      "The anxiety that wakes you at 3am. The tension you carry in your shoulders. The way you disconnect from your body to push through another impossible day. Your nervous system is screaming what your calendar won't allow you to say: this pace is not sustainable.",
  },
  {
    id: "inherited",
    title: "The Inherited Problem",
    summary: "Generations of silenced wisdom.",
    content:
      "The feminine ways of knowing—intuition, emotion, cyclical rhythm, embodied wisdom—were systematically devalued. You inherited a world that taught you to override your body's intelligence. Reclaiming it isn't just personal healing. It's ancestral completion.",
  },
]

function ProblemCard({
  problem,
  isOpen,
  onToggle,
}: {
  problem: (typeof problems)[0]
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <motion.div
      className="border-b border-bone/10 last:border-b-0"
      initial={false}
    >
      <button
        onClick={onToggle}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <div>
          <h3 className="font-serif text-2xl md:text-3xl text-bone group-hover:text-gold transition-colors">
            {problem.title}
          </h3>
          <p className="text-sand/70 mt-2">{problem.summary}</p>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-gold ml-4"
        >
          <ChevronDown size={24} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="text-bone/80 text-lg leading-relaxed pb-8 max-w-3xl">
              {problem.content}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function Problem() {
  const [openId, setOpenId] = useState<string | null>("external")

  return (
    <SectionWrapper className="bg-espresso py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4">
          The Problem
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-bone mb-12">
          Success shouldn't cost you your body.
        </h2>

        <div className="mt-12">
          {problems.map((problem) => (
            <ProblemCard
              key={problem.id}
              problem={problem}
              isOpen={openId === problem.id}
              onToggle={() =>
                setOpenId(openId === problem.id ? null : problem.id)
              }
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
```

**Step 2: Add lucide-react for icons**

Run: `pnpm add lucide-react`

**Step 3: Update page**

Update `app/page.tsx`:

```tsx
import { Hero } from "@/components/sections/Hero"
import { Problem } from "@/components/sections/Problem"

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      {/* More sections coming */}
      <div className="h-screen bg-bone" />
    </main>
  )
}
```

**Step 4: Verify Problem section**

Run: `pnpm dev`
Expected: Expandable accordion with smooth height animation

**Step 5: Commit Problem section**

```bash
git add .
git commit -m "feat: add Problem section with expandable content"
```

---

## Task 8: Build Pathways Section

**Files:**
- Create: `components/sections/Pathways.tsx`
- Modify: `app/page.tsx`

**Step 1: Create Pathways component with staggered cards**

Create `components/sections/Pathways.tsx`:

```tsx
"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { staggerContainer, staggerItem, reduceMotion } from "@/lib/animations"

const pathways = [
  {
    title: "The Masterclass",
    subtitle: "Begin the Journey",
    price: "$297",
    description:
      "A potent introduction to Somatic Feminine Intelligence. Learn the foundational practices for nervous system regulation and embodied presence.",
    cta: "Enroll Now",
    featured: false,
  },
  {
    title: "SFI Training",
    subtitle: "9-Month Certification",
    price: "$18,000",
    description:
      "Become a certified practitioner of Somatic Feminine Intelligence. Deep immersion in somatic practices, feminine lineage teachings, and facilitation mastery.",
    cta: "Apply Now",
    featured: true,
  },
  {
    title: "Immersions",
    subtitle: "Transformational Retreats",
    price: "From $4,500",
    description:
      "Journey to sacred lands—Egypt, Portugal, Kenya, Morocco. Experience ceremonial cacao, womb wisdom practices, and sisterhood in transformative settings.",
    cta: "View Retreats",
    featured: false,
  },
]

function PathwayCard({
  pathway,
  index,
}: {
  pathway: (typeof pathways)[0]
  index: number
}) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      variants={shouldReduceMotion ? reduceMotion : staggerItem}
      whileHover={shouldReduceMotion ? {} : { y: -8, transition: { duration: 0.2 } }}
      className={`
        relative p-8 md:p-10 rounded-lg
        ${pathway.featured
          ? "bg-jungle text-bone ring-2 ring-gold/30"
          : "bg-sand/50 text-espresso"
        }
      `}
    >
      {pathway.featured && (
        <span className="absolute -top-3 left-8 bg-gold text-espresso text-xs uppercase tracking-wider px-3 py-1 rounded-full">
          Most Popular
        </span>
      )}

      <p className="text-sm uppercase tracking-wider opacity-70">
        {pathway.subtitle}
      </p>
      <h3 className="font-serif text-3xl md:text-4xl mt-2">{pathway.title}</h3>
      <p className="text-2xl font-serif mt-4">{pathway.price}</p>

      <p className="mt-6 leading-relaxed opacity-80">{pathway.description}</p>

      <Button
        className={`
          mt-8 w-full
          ${pathway.featured
            ? "bg-gold hover:bg-gold/90 text-espresso"
            : "bg-cacao hover:bg-cacao/90 text-bone"
          }
        `}
      >
        {pathway.cta}
      </Button>
    </motion.div>
  )
}

export function Pathways() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4">
            Your Path Forward
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-espresso">
            Three Pathways to Embodied Leadership
          </h2>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={shouldReduceMotion ? reduceMotion : staggerContainer}
          className="grid md:grid-cols-3 gap-6 md:gap-8"
        >
          {pathways.map((pathway, i) => (
            <PathwayCard key={pathway.title} pathway={pathway} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 2: Update page**

Update `app/page.tsx`:

```tsx
import { Hero } from "@/components/sections/Hero"
import { Problem } from "@/components/sections/Problem"
import { Pathways } from "@/components/sections/Pathways"

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Pathways />
      {/* More sections coming */}
      <div className="h-screen bg-espresso" />
    </main>
  )
}
```

**Step 3: Verify Pathways section**

Run: `pnpm dev`
Expected: Three cards with staggered entrance, hover lift effect

**Step 4: Commit Pathways section**

```bash
git add .
git commit -m "feat: add Pathways section with staggered cards"
```

---

## Task 9: Build Who This Is For Section

**Files:**
- Create: `components/sections/WhoThisIsFor.tsx`
- Modify: `app/page.tsx`

**Step 1: Create WhoThisIsFor component**

Create `components/sections/WhoThisIsFor.tsx`:

```tsx
"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { Check, X } from "lucide-react"
import { staggerContainer, staggerItem, reduceMotion } from "@/lib/animations"

const qualifyIn = [
  "You're a high-achieving woman in leadership who's accomplished everything 'right'—but something essential feels missing",
  "You sense there's a more sustainable, embodied way to lead but haven't found the roadmap",
  "You're ready to stop overriding your body's wisdom and start leading from wholeness",
  "You're called to reclaim practices your lineage may have lost",
  "You're willing to do the deep work—not just learn concepts, but transform how you inhabit your body",
]

const qualifyOut = [
  "You're looking for quick fixes or surface-level self-care",
  "You're not ready to examine the patterns that got you here",
  "You want someone to tell you what to do rather than guide you to your own knowing",
  "You're seeking purely intellectual understanding without embodiment",
  "You're not willing to prioritize your nervous system alongside your goals",
]

export function WhoThisIsFor() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="bg-sand py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4">
            Is This You?
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-espresso">
            Who This Work Is For
          </h2>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={shouldReduceMotion ? reduceMotion : staggerContainer}
          className="grid md:grid-cols-2 gap-8 md:gap-12"
        >
          {/* This is for you */}
          <motion.div
            variants={shouldReduceMotion ? reduceMotion : staggerItem}
            className="bg-bone p-8 md:p-10 rounded-lg"
          >
            <h3 className="font-serif text-2xl text-jungle mb-6">
              This is for you if...
            </h3>
            <ul className="space-y-4">
              {qualifyIn.map((item, i) => (
                <motion.li
                  key={i}
                  variants={shouldReduceMotion ? reduceMotion : staggerItem}
                  className="flex gap-3"
                >
                  <Check className="w-5 h-5 text-jungle flex-shrink-0 mt-1" />
                  <span className="text-espresso/80">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* This is not for you */}
          <motion.div
            variants={shouldReduceMotion ? reduceMotion : staggerItem}
            className="bg-bone p-8 md:p-10 rounded-lg"
          >
            <h3 className="font-serif text-2xl text-cacao mb-6">
              This isn't for you if...
            </h3>
            <ul className="space-y-4">
              {qualifyOut.map((item, i) => (
                <motion.li
                  key={i}
                  variants={shouldReduceMotion ? reduceMotion : staggerItem}
                  className="flex gap-3"
                >
                  <X className="w-5 h-5 text-cacao/60 flex-shrink-0 mt-1" />
                  <span className="text-espresso/70">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 2: Update page**

Update `app/page.tsx`:

```tsx
import { Hero } from "@/components/sections/Hero"
import { Problem } from "@/components/sections/Problem"
import { Pathways } from "@/components/sections/Pathways"
import { WhoThisIsFor } from "@/components/sections/WhoThisIsFor"

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Pathways />
      <WhoThisIsFor />
      {/* More sections coming */}
      <div className="h-screen bg-espresso" />
    </main>
  )
}
```

**Step 3: Verify section**

Run: `pnpm dev`
Expected: Two-column layout with check/x icons, staggered list animation

**Step 4: Commit**

```bash
git add .
git commit -m "feat: add Who This Is For qualification section"
```

---

## Task 10: Build Methodology Section

**Files:**
- Create: `components/sections/Methodology.tsx`
- Modify: `app/page.tsx`

**Step 1: Create Methodology component**

Create `components/sections/Methodology.tsx`:

```tsx
"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { SectionWrapper } from "@/components/shared/motion"
import { staggerContainer, staggerItem, reduceMotion } from "@/lib/animations"

const pillars = [
  {
    number: "01",
    title: "Science",
    subtitle: "Somatic Intelligence",
    description:
      "Grounded in neuroscience and nervous system research. Polyvagal theory, interoception, and the science of embodiment inform every practice. This isn't woo—it's evidence-based transformation.",
  },
  {
    number: "02",
    title: "Lineage",
    subtitle: "Feminine Wisdom Traditions",
    description:
      "Drawing from ancient feminine wisdom traditions—womb practices, ceremonial cacao, cyclical living. Honoring what was suppressed and reclaiming what was lost.",
  },
  {
    number: "03",
    title: "Application",
    subtitle: "Leadership Integration",
    description:
      "Not just healing work—leadership work. Every practice is designed to translate directly into how you show up in boardrooms, negotiations, and high-stakes moments.",
  },
]

export function Methodology() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="bg-espresso py-24 md:py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <SectionWrapper className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4">
            The Method
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-bone">
            Somatic Feminine Intelligence
          </h2>
          <p className="text-sand/80 text-lg mt-6 max-w-2xl mx-auto">
            A methodology that weaves together three essential threads for
            embodied transformation.
          </p>
        </SectionWrapper>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={shouldReduceMotion ? reduceMotion : staggerContainer}
          className="grid md:grid-cols-3 gap-px bg-bone/10 rounded-lg overflow-hidden"
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              variants={shouldReduceMotion ? reduceMotion : staggerItem}
              className="bg-espresso p-8 md:p-10"
            >
              <span className="text-gold/50 font-serif text-5xl">
                {pillar.number}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-bone mt-4">
                {pillar.title}
              </h3>
              <p className="text-gold text-sm uppercase tracking-wider mt-2">
                {pillar.subtitle}
              </p>
              <p className="text-sand/70 mt-6 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 2: Update page**

Update `app/page.tsx`:

```tsx
import { Hero } from "@/components/sections/Hero"
import { Problem } from "@/components/sections/Problem"
import { Pathways } from "@/components/sections/Pathways"
import { WhoThisIsFor } from "@/components/sections/WhoThisIsFor"
import { Methodology } from "@/components/sections/Methodology"

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Pathways />
      <WhoThisIsFor />
      <Methodology />
      {/* More sections coming */}
      <div className="h-screen bg-bone" />
    </main>
  )
}
```

**Step 3: Verify section**

Run: `pnpm dev`
Expected: Three-column grid with numbered pillars, staggered animation

**Step 4: Commit**

```bash
git add .
git commit -m "feat: add Methodology section with SFI pillars"
```

---

## Task 11: Build Testimonials Section

**Files:**
- Create: `components/sections/Testimonials.tsx`
- Modify: `app/page.tsx`

**Step 1: Create Testimonials component with crossfade**

Create `components/sections/Testimonials.tsx`:

```tsx
"use client"

import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { useState, useEffect } from "react"
import { SectionWrapper } from "@/components/shared/motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote:
      "This work fundamentally changed how I lead. I used to push through exhaustion as a badge of honor. Now I lead from a regulated nervous system, and paradoxically, I'm more effective than ever.",
    name: "Sarah Chen",
    title: "CEO, Tech Startup",
  },
  {
    quote:
      "I came for the business tools, but what I found was a complete recalibration of my relationship with power. The feminine leadership model isn't soft—it's sustainable strength.",
    name: "Maria Santos",
    title: "Partner, Global Consulting Firm",
  },
  {
    quote:
      "The SFI training gave me language and practices for what I'd always intuited but couldn't articulate. I now facilitate this work with my own executive clients.",
    name: "Dr. Aisha Williams",
    title: "Executive Coach",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [isPaused])

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="bg-jungle py-24 md:py-32">
      <SectionWrapper className="max-w-4xl mx-auto px-6">
        <p className="text-sage uppercase tracking-[0.2em] text-sm mb-4 text-center">
          Testimonials
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-bone text-center mb-16">
          What Leaders Are Saying
        </h2>

        <div
          className="relative min-h-[300px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <blockquote className="font-serif text-2xl md:text-3xl text-bone/90 leading-relaxed italic">
                "{testimonials[current].quote}"
              </blockquote>
              <div className="mt-8">
                <p className="text-gold font-medium">
                  {testimonials[current].name}
                </p>
                <p className="text-sage/70 text-sm mt-1">
                  {testimonials[current].title}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              onClick={prev}
              className="p-2 text-bone/50 hover:text-bone transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === current ? "bg-gold" : "bg-bone/30"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 text-bone/50 hover:text-bone transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </SectionWrapper>
    </section>
  )
}
```

**Step 2: Update page**

Update `app/page.tsx`:

```tsx
import { Hero } from "@/components/sections/Hero"
import { Problem } from "@/components/sections/Problem"
import { Pathways } from "@/components/sections/Pathways"
import { WhoThisIsFor } from "@/components/sections/WhoThisIsFor"
import { Methodology } from "@/components/sections/Methodology"
import { Testimonials } from "@/components/sections/Testimonials"

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Pathways />
      <WhoThisIsFor />
      <Methodology />
      <Testimonials />
      {/* More sections coming */}
      <div className="h-screen bg-bone" />
    </main>
  )
}
```

**Step 3: Verify section**

Run: `pnpm dev`
Expected: Auto-rotating testimonials with crossfade, pause on hover

**Step 4: Commit**

```bash
git add .
git commit -m "feat: add Testimonials section with crossfade carousel"
```

---

## Task 12: Build Founder Section

**Files:**
- Create: `components/sections/Founder.tsx`
- Modify: `app/page.tsx`

**Step 1: Create Founder component**

Create `components/sections/Founder.tsx`:

```tsx
"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { fadeInUp, reduceMotion } from "@/lib/animations"

export function Founder() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="bg-bone py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={shouldReduceMotion ? reduceMotion : fadeInUp}
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          {/* Image placeholder */}
          <div className="relative aspect-[4/5] bg-sand rounded-lg overflow-hidden order-2 md:order-1">
            {/* Placeholder - replace with actual portrait */}
            <div className="absolute inset-0 bg-gradient-to-br from-cacao/20 to-jungle/20 flex items-center justify-center">
              <span className="text-espresso/30 text-sm">Portrait</span>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4">
              The Founder
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-espresso">
              Chocolako
            </h2>
            <p className="text-cacao font-serif text-xl mt-2">
              Somatic Leadership Guide & SFI Creator
            </p>

            <div className="mt-8 space-y-4 text-espresso/80 leading-relaxed">
              <p>
                Chocolako spent two decades in high-performance environments—from
                corporate boardrooms to international stages—before her body
                finally demanded she find another way.
              </p>
              <p>
                What emerged from that reckoning became Somatic Feminine
                Intelligence: a methodology weaving neuroscience, feminine wisdom
                traditions, and leadership application into a path for women
                ready to lead without burning out.
              </p>
              <p>
                She has guided thousands of women across six continents through
                retreats, trainings, and transformational programs. Her work has
                been featured in Forbes, Vogue, and TEDx stages worldwide.
              </p>
            </div>

            <Button
              variant="outline"
              className="mt-8 border-cacao text-cacao hover:bg-cacao hover:text-bone"
            >
              Learn More About Chocolako
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
```

**Step 2: Update page**

Update `app/page.tsx`:

```tsx
import { Hero } from "@/components/sections/Hero"
import { Problem } from "@/components/sections/Problem"
import { Pathways } from "@/components/sections/Pathways"
import { WhoThisIsFor } from "@/components/sections/WhoThisIsFor"
import { Methodology } from "@/components/sections/Methodology"
import { Testimonials } from "@/components/sections/Testimonials"
import { Founder } from "@/components/sections/Founder"

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Pathways />
      <WhoThisIsFor />
      <Methodology />
      <Testimonials />
      <Founder />
      {/* More sections coming */}
      <div className="h-screen bg-espresso" />
    </main>
  )
}
```

**Step 3: Verify section**

Run: `pnpm dev`
Expected: Two-column layout with image placeholder and bio text

**Step 4: Commit**

```bash
git add .
git commit -m "feat: add Founder section with bio"
```

---

## Task 13: Build Shop Preview Section

**Files:**
- Create: `components/sections/ShopPreview.tsx`
- Modify: `app/page.tsx`

**Step 1: Create ShopPreview component (stubbed)**

Create `components/sections/ShopPreview.tsx`:

```tsx
"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { SectionWrapper } from "@/components/shared/motion"
import { staggerContainer, staggerItem, reduceMotion } from "@/lib/animations"

const products = [
  {
    name: "Chakra Healing Oils",
    description: "Seven sacred oils for energy center activation",
    price: "$78",
    image: null, // Placeholder
  },
  {
    name: "Ceremonial Cacao",
    description: "100% pure, ethically sourced Guatemalan cacao",
    price: "$45",
    image: null,
  },
  {
    name: "Embodiment Yoga Wear",
    description: "Designed for movement and ceremony",
    price: "From $95",
    image: null,
  },
  {
    name: "Soulfelt Jewelry",
    description: "Handcrafted pieces carrying sacred geometry",
    price: "From $125",
    image: null,
  },
]

function ProductCard({ product }: { product: (typeof products)[0] }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      variants={shouldReduceMotion ? reduceMotion : staggerItem}
      whileHover={shouldReduceMotion ? {} : { y: -4, transition: { duration: 0.2 } }}
      className="group"
    >
      {/* Image placeholder */}
      <div className="aspect-square bg-sand rounded-lg overflow-hidden mb-4">
        <div className="w-full h-full bg-gradient-to-br from-cacao/10 to-jungle/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
          <span className="text-espresso/30 text-sm">Product Image</span>
        </div>
      </div>

      <h3 className="font-serif text-xl text-espresso">{product.name}</h3>
      <p className="text-espresso/60 text-sm mt-1">{product.description}</p>
      <p className="text-gold font-medium mt-2">{product.price}</p>
    </motion.div>
  )
}

export function ShopPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="bg-bone py-24 md:py-32 border-t border-sand">
      <div className="max-w-6xl mx-auto px-6">
        <SectionWrapper className="text-center mb-16">
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4">
            The Shop
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-espresso">
            Tools for Your Practice
          </h2>
          <p className="text-espresso/70 mt-4">
            Curated items to support your embodiment journey
          </p>
        </SectionWrapper>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={shouldReduceMotion ? reduceMotion : staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-cacao text-cacao hover:bg-cacao hover:text-bone"
          >
            Visit Shop — Coming Soon
          </Button>
        </div>
      </div>
    </section>
  )
}
```

**Step 2: Update page**

Update `app/page.tsx`:

```tsx
import { Hero } from "@/components/sections/Hero"
import { Problem } from "@/components/sections/Problem"
import { Pathways } from "@/components/sections/Pathways"
import { WhoThisIsFor } from "@/components/sections/WhoThisIsFor"
import { Methodology } from "@/components/sections/Methodology"
import { Testimonials } from "@/components/sections/Testimonials"
import { Founder } from "@/components/sections/Founder"
import { ShopPreview } from "@/components/sections/ShopPreview"

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Pathways />
      <WhoThisIsFor />
      <Methodology />
      <Testimonials />
      <Founder />
      <ShopPreview />
      {/* Footer coming next */}
      <div className="h-32 bg-espresso" />
    </main>
  )
}
```

**Step 3: Verify section**

Run: `pnpm dev`
Expected: 4-column product grid with hover effects, "Coming Soon" CTA

**Step 4: Commit**

```bash
git add .
git commit -m "feat: add Shop Preview section (stubbed)"
```

---

## Task 14: Build Footer Section

**Files:**
- Create: `components/sections/Footer.tsx`
- Modify: `app/page.tsx`

**Step 1: Create Footer component**

Create `components/sections/Footer.tsx`:

```tsx
"use client"

import { motion } from "framer-motion"
import { Instagram, Youtube, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const navigation = {
  programs: [
    { name: "Masterclass", href: "#" },
    { name: "SFI Training", href: "#" },
    { name: "Retreats", href: "#" },
    { name: "Morphing Membership", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Press", href: "#" },
    { name: "Speaking", href: "#" },
  ],
  social: [
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "YouTube", href: "#", icon: Youtube },
    { name: "Email", href: "#", icon: Mail },
  ],
}

export function Footer() {
  return (
    <footer className="bg-espresso pt-20 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Email signup */}
        <div className="text-center pb-16 border-b border-bone/10">
          <h3 className="font-serif text-2xl md:text-3xl text-bone">
            Receive Transmission Notes
          </h3>
          <p className="text-sand/70 mt-2 max-w-md mx-auto">
            Essays on embodied leadership, nervous system wisdom, and the
            feminine path to power.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-8"
          >
            <Input
              type="email"
              placeholder="Your email"
              className="bg-bone/10 border-bone/20 text-bone placeholder:text-bone/40 focus:border-gold"
            />
            <Button className="bg-gold hover:bg-gold/90 text-espresso whitespace-nowrap">
              Subscribe
            </Button>
          </form>
          <p className="text-bone/40 text-xs mt-3">
            No spam. Unsubscribe anytime.
          </p>
        </div>

        {/* Navigation grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="font-serif text-2xl text-bone">Innergy</h4>
            <p className="text-bone/50 text-sm mt-2">by Chocolako</p>
            <p className="text-sand/60 text-sm mt-4 leading-relaxed">
              Somatic Feminine Intelligence for embodied leadership.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h5 className="text-bone font-medium mb-4">Programs</h5>
            <ul className="space-y-3">
              {navigation.programs.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sand/70 hover:text-gold transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-bone font-medium mb-4">Company</h5>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sand/70 hover:text-gold transition-colors text-sm"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h5 className="text-bone font-medium mb-4">Connect</h5>
            <div className="flex gap-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sand/70 hover:text-gold transition-colors"
                  aria-label={item.name}
                >
                  <item.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-bone/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-bone/40 text-sm">
            © {new Date().getFullYear()} Innergy by Chocolako. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-bone/40 hover:text-bone/60 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-bone/40 hover:text-bone/60 transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

**Step 2: Add shadcn/ui Input component**

Run: `pnpm dlx shadcn@latest add input`

**Step 3: Update page with complete homepage**

Update `app/page.tsx`:

```tsx
import { Hero } from "@/components/sections/Hero"
import { Problem } from "@/components/sections/Problem"
import { Pathways } from "@/components/sections/Pathways"
import { WhoThisIsFor } from "@/components/sections/WhoThisIsFor"
import { Methodology } from "@/components/sections/Methodology"
import { Testimonials } from "@/components/sections/Testimonials"
import { Founder } from "@/components/sections/Founder"
import { ShopPreview } from "@/components/sections/ShopPreview"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Pathways />
      <WhoThisIsFor />
      <Methodology />
      <Testimonials />
      <Founder />
      <ShopPreview />
      <Footer />
    </main>
  )
}
```

**Step 4: Verify complete homepage**

Run: `pnpm dev`
Expected: All 9 sections render, scroll through entire page smoothly

**Step 5: Commit Footer and complete homepage**

```bash
git add .
git commit -m "feat: add Footer section, complete homepage structure"
```

---

## Task 15: Add Navigation Header

**Files:**
- Create: `components/shared/Navigation.tsx`
- Modify: `app/layout.tsx`

**Step 1: Create Navigation component**

Create `components/shared/Navigation.tsx`:

```tsx
"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  {
    label: "In-Person",
    href: "#",
    children: [
      { label: "Retreats", href: "#" },
      { label: "Womb Wisdom YTT", href: "#" },
    ],
  },
  {
    label: "Online",
    href: "#",
    children: [
      { label: "Masterclass", href: "#" },
      { label: "SFI Training", href: "#" },
      { label: "Morphing Membership", href: "#" },
    ],
  },
  { label: "Shop", href: "#" },
  { label: "About", href: "#" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    return scrollY.on("change", (y) => {
      setIsScrolled(y > 50)
    })
  }, [scrollY])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-espresso/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left nav (desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.slice(0, 2).map((item) => (
            <div key={item.label} className="relative group">
              <a
                href={item.href}
                className="text-bone/80 hover:text-bone text-sm tracking-wide transition-colors"
              >
                {item.label}
              </a>
              {item.children && (
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="bg-espresso/95 backdrop-blur-md rounded-lg py-2 min-w-[180px] shadow-xl">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-bone/70 hover:text-bone hover:bg-bone/5 text-sm transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Logo */}
        <a href="/" className="font-serif text-2xl text-bone">
          Innergy
        </a>

        {/* Right nav (desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.slice(2).map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-bone/80 hover:text-bone text-sm tracking-wide transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button
            size="sm"
            className="bg-gold hover:bg-gold/90 text-espresso text-sm"
          >
            Work With Me
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-bone"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="md:hidden overflow-hidden bg-espresso/95 backdrop-blur-md"
      >
        <div className="px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <div key={item.label}>
              <a
                href={item.href}
                className="block text-bone/80 hover:text-bone py-2"
              >
                {item.label}
              </a>
              {item.children && (
                <div className="pl-4 space-y-2 mt-2">
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block text-bone/60 hover:text-bone text-sm py-1"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Button className="w-full bg-gold hover:bg-gold/90 text-espresso mt-4">
            Work With Me
          </Button>
        </div>
      </motion.div>
    </motion.header>
  )
}
```

**Step 2: Add Navigation to layout**

Update `app/layout.tsx`:

```tsx
import type { Metadata } from "next"
import { cormorant, inter } from "@/lib/fonts"
import { Navigation } from "@/components/shared/Navigation"
import "./globals.css"

export const metadata: Metadata = {
  title: "Innergy by Chocolako | Embodied Leadership",
  description: "Transform your relationship with power through somatic intelligence, feminine lineage, and ceremonial wisdom.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  )
}
```

**Step 3: Verify navigation**

Run: `pnpm dev`
Expected: Fixed header, transparent on hero, blurred on scroll, dropdown menus work

**Step 4: Commit navigation**

```bash
git add .
git commit -m "feat: add Navigation with dropdowns and mobile menu"
```

---

## Task 16: Deploy to Vercel

**Files:**
- No file changes

**Step 1: Push to GitHub**

```bash
git remote add origin git@github.com:USERNAME/chocolako-site.git
git push -u origin main
```

(Replace USERNAME with actual GitHub username)

**Step 2: Deploy via Vercel CLI or dashboard**

Option A - Vercel CLI:
```bash
pnpm add -g vercel
vercel
```

Option B - Vercel Dashboard:
1. Go to vercel.com/new
2. Import the GitHub repository
3. Accept defaults, deploy

**Step 3: Verify deployment**

Expected: Site live at `chocolako-site.vercel.app` (or similar)

**Step 4: Commit any Vercel config changes**

```bash
git add .
git commit -m "chore: configure Vercel deployment"
git push
```

---

## Task 17: Final QA & Polish

**Files:**
- Various touch-ups

**Step 1: Test responsive design**

Check on:
- iPhone SE (375px)
- iPhone 14 (390px)
- iPad (768px)
- Desktop (1280px+)

**Step 2: Test accessibility**

- Tab through all interactive elements
- Check color contrast (WCAG AA)
- Verify prefers-reduced-motion works

**Step 3: Run Lighthouse audit**

Run: Chrome DevTools > Lighthouse > Mobile/Desktop
Expected: Performance > 90, Accessibility > 90

**Step 4: Fix any issues found**

(Address as needed)

**Step 5: Final commit**

```bash
git add .
git commit -m "chore: QA fixes and polish"
git push
```

---

## Summary

**17 tasks** total:
1. Scaffold Next.js
2. Install dependencies
3. Configure brand tokens
4. Configure typography
5. Create animation utilities
6. Build Hero section
7. Build Problem section
8. Build Pathways section
9. Build Who This Is For section
10. Build Methodology section
11. Build Testimonials section
12. Build Founder section
13. Build Shop Preview section
14. Build Footer section
15. Add Navigation header
16. Deploy to Vercel
17. Final QA & polish

**Estimated commits:** 17+
**Key files:** ~20 components/configs
