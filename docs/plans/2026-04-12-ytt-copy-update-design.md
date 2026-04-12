# YTT Landing Page Copy Update — Design Document

**Date:** 2026-04-12
**Source of truth:** `/Users/be.nvy/Downloads/Womb Wisdom & Wellbeing YTT Copy for Landing Page March 2026.pdf`
**Route:** `/womb-wisdom-yoga-training`
**Approach:** In-place update — rewrite existing components, add new ones, remove unused ones

---

## Design System (unchanged)

- Colors: cacao, espresso, gold, bone, sand, cream, rust
- Typography: Cormorant Garamond (serif) + Inter (sans)
- Animations: Framer Motion stagger/fade patterns
- Spacing: py-24 md:py-32 section padding
- All Stripe payment links stubbed as `#` — real links for WordPress migration

---

## Page Structure (16 sections)

### Section 1: Hero (update YTTHero)

Full-bleed hero with morocco-hero.jpg background.

- Label: "THE RETURN HOME"
- H1: "Womb Wisdom & Wellbeing Yoga Teacher Training"
- Subtitle: "A Yoga Alliance-recognized 200-hour certification for women to stop shrinking and start trusting inner wisdom."
- Date pill: "7 days online & 14 days in Ourika Valley, Morocco · August 1–22, 2026"
- Tagline: "Success taught you to silence your body. Now it's time to listen."
- CTA: "Book Your Application Call" → #application

### Section 2: Intro Prose (new YTTIntro)

Replaces old YTTFeminineBody + YTTWombCenter. Centered editorial text on bone background.

4 paragraphs from PDF:
- "Imagine waking up and feeling safe in your body..."
- "If health is the highest form of wealth..."
- "Your body knows the answer..."
- "Your Return Home is more than a destination..."

### Section 3: Archetypes Accordion (rewrite YTTPainPoints → YTTArchetypes)

Cream background, accordion UI with gold accent on active item.

- Heading: "Does this sound familiar?"
- 5 expandable items:
  1. "The woman no longer defined by a diagnosis" (fibroids, endo, PCOS story)
  2. "The woman who built success and lost herself in it" (burnout, hustle culture)
  3. "The woman brave enough to meet herself again" (transition, becoming)
  4. "The woman rebuilding on her own terms" (trauma, returning to body)
  5. "The woman whose healing becomes another woman's roadmap" (teacher calling)
- Each has full story text from PDF + a bold closing question
- Closing: "If you felt seen and said that's me — welcome. You belong here."
- CTA: "Book Your Application Call"

### Section 4: Why Different (new YTTWhyDifferent)

Bone/white background.

- Heading: "Here's why this YTT is different & exists in a category of one."
- Opening paragraphs about most YTTs built for generic bodies
- 5 bullet differentiators:
  - Trauma-informed sequencing for the womb space
  - Menstrual cycle awareness as a practical teaching framework
  - Somatic practices for nervous system regulation through a feminine lens
  - Feminine archetypes as a living map for every wave of a woman's life
  - Sacred ritual as embodied devotion, not performance
- Closing: "These aren't modules added onto an existing YTT. They are the nucleus of everything we teach, and the reason this training exists in a category of one."
- CTA: "Click to learn more" → scrolls to #structure

### Section 5: Training Outcomes (rewrite YTTOverview → YTTOutcomes)

Sand background.

- Heading: "The Womb Wisdom & Wellbeing YTT is where feminine intelligence meets the embodied science of the female body."
- Subheading: "In this training you will:"
- 9 outcome items with gold `+` markers (full copy from PDF pages 5-6)
- Closing: "The Womb Wisdom Yoga Teacher Training is a transformation you move through in your body, your practice, and your purpose."
- Librette pull quote at bottom

### Section 6: Founder (update YTTFounder)

Cream background. Split layout — founder.jpg left, bio right.

- Label: "MEET YOUR LEAD TRAINER"
- Name: "Chocolako Agburu, MPH, MBA, E-RYT 500, YACEP"
- Subtitle: "Five years fibroid-free and counting."
- Full expanded bio from PDF page 7 (Harvard/GSK, arranged marriage, fibroids, wisdom keepers, Yoga Barn Bali, Fortune 500)
- Closing: "She doesn't teach what she studied. She teaches what she survived, integrated, and transformed. This training is the most complete expression of that work. She built it for you."

### Section 7: Container + Cohort (new YTTContainer)

Cream background.

- Block 1: "The container is intentional." — small cohort by design, 20 women, known by trainer
- Block 2: "The location is part of the curriculum." — why Bab Zouina, the land, North African lineage of women gathering
- Closing: "The 14 days you spend at Bab Zouina are not a backdrop for the training. They are part of what the training teaches."

### Section 8: Venue (update YTTVenue)

Sand background. Keep closing-1.jpg image, commitment cards, amenity pills.

- Label: "THE LOCATION"
- Heading: "Bab Zouina means The Beautiful Door."
- Full PDF copy from pages 8-9 (yoga shalas, rooftops, hammam, garden, meals, communal table, built as home first)
- Closing: "You will not leave the same woman who arrived. Bab Zouina has never let anyone stay the same."

### Section 9: What You Leave With (rewrite YTTGains → YTTWhatYouLeaveWith)

Bone background. Two-column layout.

- Label: "THE OUTCOMES"
- Heading: "What you leave with."
- Intro: "Both columns matter. The credential and the personal."
- Left column: "Your credential outcomes" — 5 items (certification, legal standing, curriculum framework, somatic toolkit, professional positioning)
- Right column: "Your personal outcomes" — 4 items (somatic relationship, language, cohort belonging, The Return Home)

### Section 10: Training Structure (new YTTStructure)

White background. Replaces YTTModules + YTTSchedule.

- Label: "THE STRUCTURE"
- Heading: "How the training unfolds."
- 3 blocks:
  - Before Morocco — Online Pre-Immersion (methodology, anatomy, trauma-informed principles, meet cohort)
  - The 14 Days at Bab Zouina — August 8-22, 2026 (daily rhythm, full curriculum list)
  - After Morocco — Integration Support ("You are not handed a certificate and sent home.")

### Section 11: Who This Is For (rewrite YTTWhoIsFor → YTTFit)

Cream background.

- Label: "THE FIT"
- Heading: "Who this is for. Who it isn't."
- "This training is for you if —" (5 items)
- "This training is not for you if —" (3 items)
- Closing: "Both of these sections exist to protect your investment and ours."

### Section 12: Testimonials (update YTTTestimonials)

Bone background. Gold left-border blockquotes.

3 new testimonials from PDF page 13:
1. Certified Graduate — practice, client relationships, marriage transformation
2. Women's Health Practitioner, Canada — "my before and after"
3. Senior Director, London — high achiever who found depth in 8 days

### Section 13: Pricing (update YTTPricing)

Sand background. Keep 3-tier card layout.

- Triple / Double / Single occupancy
- All payment links stubbed as `#`
- Deposit button stubbed as `#`
- CTA: "Book Your Application Call"
- "Spots are limited. Applications reviewed on a rolling basis."

### Section 14: Application Call (new YTTApplicationCall, replaces YTTRegistration)

Cream background.

- Label: "WHAT HAPPENS NEXT"
- Heading: "The application call is thirty minutes with a member of The Innergy Global Sales Team"
- Copy about honest fit conversation, not a sales call
- CTA: "Book Your Application Call"
- Date line: "August 8-22, 2026 | Bab Zouina, Ourika Valley, Morocco"
- "Online pre-immersion begins July 2026"

### Section 15: FAQ (new YTTFAQ)

Bone/white background. Accordion UI (same pattern as Archetypes).

6 items:
1. Do I need prior yoga teaching experience to enroll?
2. Is this training spiritually or religiously specific?
3. What if I don't have a uterus or have had a hysterectomy?
4. What does 'hybrid' mean practically?
5. How is this different from a standard 200-hour YTT?
6. What is the investment?

### Section 16: Closing (new YTTClosing)

Sand background. Minimal, centered.

- "The Return Home was always available to you. This is simply the door."
- CTA: "Book Your Application Call"
- "Womb Wisdom & Wellbeing YTT | August 8–22, 2026 | Bab Zouina, Morocco"

---

## Components Removed

- **YTTFeminineBody** — absorbed into YTTIntro
- **YTTWombCenter** — absorbed into YTTIntro
- **YTTModules** — replaced by YTTStructure
- **YTTSchedule** — replaced by YTTStructure
- **YTTInclusions** — PDF doesn't have inclusions list
- **YTTFaculty** — PDF doesn't mention guest faculty

## Components Kept As-Is

- **YTTStickyCTA** — fixed bottom bar
- **Footer** — unchanged

## New Components

- **YTTIntro** — editorial prose after hero
- **YTTArchetypes** — accordion with 5 archetype stories (replaces YTTPainPoints)
- **YTTWhyDifferent** — category-of-one differentiators
- **YTTOutcomes** — 9 training outcomes (replaces YTTOverview)
- **YTTContainer** — cohort size + location intentionality
- **YTTWhatYouLeaveWith** — credential + personal outcomes (replaces YTTGains)
- **YTTStructure** — before/during/after Morocco (replaces YTTModules + YTTSchedule)
- **YTTFit** — for/not for (replaces YTTWhoIsFor)
- **YTTApplicationCall** — what happens next (replaces YTTRegistration)
- **YTTFAQ** — 6-item accordion
- **YTTClosing** — final CTA + closing line
