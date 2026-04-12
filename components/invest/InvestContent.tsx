"use client"

import { motion } from "framer-motion"
import { staggerContainer, staggerItem } from "@/lib/animations"
import { SectionWrapper } from "@/components/shared/motion"

/* ============================================================
   InvestContent — all sections below the hero
   ============================================================ */

export function InvestContent() {
  return (
    <>
      {/* ── Origin Story ── */}
      <SectionWrapper className="bg-bone py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-cacao mb-12 text-center">
            Origin Story
          </h2>
          <div className="space-y-8 text-cacao/90 font-sans text-base md:text-lg leading-relaxed">
            <p>
              Chocolako Agburu didn&apos;t build Innergy Global, LLC around a
              vision board. She built it through burnout, surgery, divorce, a
              career shift, and a life she relocated entirely.
            </p>
            <p>
              What emerged wasn&apos;t a pivot. It was a reckoning with the
              distance between ambition and the body asked to carry it.
            </p>
            <p>
              The moment Chocolako stopped optimizing her performance and started
              rebuilding her foundation from the ground up, a methodology was
              born. Not from theory. From necessity.
            </p>
            <p className="font-serif italic text-xl md:text-2xl text-rust">
              What she built doesn&apos;t fit an existing market category.
              That&apos;s the opportunity.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Methodology ── */}
      <SectionWrapper className="bg-cream py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-cacao mb-12 text-center">
            The Methodology
          </h2>
          <div className="space-y-8 text-cacao/90 font-sans text-base md:text-lg leading-relaxed">
            <p>
              Somatic Feminine Intelligence&trade; sits at the intersection of
              behavioral psychology, nervous system science, and executive
              leadership development. It&apos;s not a wellness offering bolted
              onto professional credentials. It&apos;s a methodology that
              emerges from where those disciplines actually converge, and that
              convergence has no dominant player.
            </p>
            <p>
              Chocolako&apos;s academic formation spans Vanderbilt University, UC
              Berkeley, and Bayes Business School in London. Her practical
              formation spans nearly two decades inside embodiment practice,
              studying how the body holds stress, stores identity, and either
              enables or quietly undermines sustained performance. That
              combination is rare. The strategist who can speak to a board and a
              nervous system in the same breath.
            </p>
            <p>
              Most leadership development frameworks treat the body as a variable
              to manage. Most wellness offerings lack the institutional rigor to
              reach high-capacity professionals at scale. Chocolako built the
              system that lives between those two gaps, and she built it because
              neither side was effective alone.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Market Thesis ── */}
      <SectionWrapper className="bg-espresso py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-bone mb-4">
            The world has shifted.
          </h2>
          <h3 className="font-serif text-2xl md:text-3xl text-gold mb-4">
            Women are leading at every level.
          </h3>
          <p className="font-serif italic text-lg md:text-xl text-sand mb-12">
            However, their nervous systems are still absorbing the cost of
            success.
          </p>
          <div className="space-y-8 text-sand/90 font-sans text-base md:text-lg leading-relaxed text-left">
            <p>
              High-achieving women are running companies, managing capital,
              raising families, and shaping culture while operating from chronic
              stress physiology. They are succeeding publicly but suffering
              privately. They have purchasing power, discernment, and an acute
              sensitivity to what is real versus what is repackaged. Until now,
              there has been no integrated framework that addresses leadership,
              legacy, and the female body as one system.
            </p>
            <p>
              This methodology is real. And it was built by someone who needed it
              first, then spent two decades making it teachable.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Testimonials ── */}
      <SectionWrapper className="bg-bone py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-cacao mb-4 text-center">
            What women say when they discover her
          </h2>
          <div className="h-px bg-gold/30 w-24 mx-auto mb-16" />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                quote:
                  "I came to Chocolako running on fumes and calling it leadership. I left with a nervous system that could finally register safety. That shifted everything.",
                name: "Varda",
                title: "Founder & CEO, Armenia",
              },
              {
                quote:
                  "I've spent over $50K on executive coaching and personal development. This was the first time I addressed the body I was leading from.",
                name: "Cece",
                title: "Executive Coach, Kenya",
              },
              {
                quote:
                  "I thought I needed to choose between being a powerful leader and being an embodied woman. Somatic Feminine Intelligence™ showed me they're the same thing.",
                name: "Coralie",
                title: "COO, Egypt & London",
              },
              {
                quote:
                  "This work gave me the language to bring embodiment into my organisation without it being dismissed as soft skills. Game-changing.",
                name: "Juliel",
                title: "Cloud Engineer, Kuwait Government",
              },
            ].map((t) => (
              <motion.blockquote
                key={t.name}
                variants={staggerItem}
                className="border-l-4 border-gold pl-6"
              >
                <p className="font-serif italic text-lg text-cacao/90 mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="font-sans text-sm text-rust">
                  &mdash; {t.name}, {t.title}
                </footer>
              </motion.blockquote>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* ── Who She Is ── */}
      <SectionWrapper className="bg-cream py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-cacao mb-2 text-center">
            Who she is
          </h2>
          <p className="text-center font-sans text-sm text-rust tracking-wide mb-16">
            Chocolako Agburu, MPH, MBA, E-RYT 500, YACEP
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* Credentials column */}
            <div>
              <h3 className="font-serif text-xl text-cacao mb-6">
                Credentials
              </h3>
              <ul className="space-y-3 font-sans text-cacao/90 text-sm md:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">&#9670;</span>
                  Master of Public Health (MPH) &mdash; UC Berkeley
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">&#9670;</span>
                  Master of Business Admin (MBA) &mdash; Bayes Business School
                  London
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">&#9670;</span>
                  Bachelor of Science (BSc) &mdash; Vanderbilt University
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">&#9670;</span>
                  20+ years somatic embodiment practices
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">&#9670;</span>
                  Resident Teacher Trainer at The Yoga Barn in Bali, Indonesia
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold mt-1">&#9670;</span>
                  Former Executive &mdash; Harvard&apos;s Massachusetts General
                  Hospital &amp; GlaxoSmithKline Pharmaceuticals in London &amp;
                  Nigeria
                </li>
              </ul>
            </div>

            {/* Narrative column */}
            <div className="space-y-6 font-sans text-cacao/90 text-base leading-relaxed">
              <p>
                Two master&apos;s degrees. Over 1,500 hours of clinical training
                in yoga, meditation, and nervous system regulation.
              </p>
              <p>
                20 years hands-on training &amp; teaching somatic embodiment
                across four continents.
              </p>
              <p>
                She is the first woman in her Nigerian lineage to refuse an
                arranged marriage, relocate internationally, and build a
                credential set that doesn&apos;t exist anywhere else in this
                space.
              </p>
              <p className="font-serif italic text-lg text-rust">
                First-mover behavior runs through her biography.
              </p>
              <p>
                At 37, she had surgery to remove 25 fibroids. She has remained
                tumor-free for over five years. She didn&apos;t distance herself
                from that experience. She investigated it, and her findings
                became the research foundation for her most proprietary work in
                women&apos;s somatic health.
              </p>
              <p>
                She turned her academics and lived experiences into a scalable
                methodology now reaching thousands of women worldwide, addressing
                a problem no existing framework has solved: how high-capacity
                women lead sustainably without burning out the biology driving
                their performance.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Traction ── */}
      <SectionWrapper className="bg-espresso py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-bone mb-16 text-center">
            Traction
          </h2>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { metric: "65K", label: "Instagram Followers" },
              {
                metric: "160",
                label: "Women Per Class",
                sub: "Classes of 25 to 160 women — every week",
              },
              { metric: "25+", label: "Countries" },
              {
                metric: "3",
                label: "Trademarks",
                sub: "Held in The U.S., Indonesia and Nigeria",
              },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={staggerItem}
                className="border border-gold/30 rounded-lg p-4 md:p-6 text-center"
              >
                <p className="font-serif text-3xl md:text-5xl text-gold mb-2">
                  {item.metric}
                </p>
                <p className="font-sans text-sm text-bone/90">{item.label}</p>
                {item.sub && (
                  <p className="font-sans text-xs text-sand/60 mt-1">
                    {item.sub}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>

          <p className="font-sans text-lg text-bone font-bold text-center mb-2">
            The community exists. The methodology is proven. The demand is
            already there.
          </p>
          <p className="font-serif italic text-sand/80 text-center">
            She just needs the infrastructure to meet it.
          </p>
        </div>
      </SectionWrapper>

      {/* ── What's Coming 2026 ── */}
      <SectionWrapper className="bg-bone py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-cacao mb-2 text-center">
            What&apos;s coming in 2026
          </h2>
          <p className="text-center font-sans text-rust mb-16">
            This is not a startup pitch. This is a scaling pitch.
          </p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                title: "Morocco",
                body: "Womb Wisdom Teacher Training, August 1–22. 21 days. Hybrid. 25 women.",
                price: "$6,000 – $8,500 USD",
              },
              {
                title: "Bali",
                body: "Womb Wisdom Teacher Training, October 22 – Nov 5. 21 days. Hybrid. 25 women.",
                price: "$4,000 – $5,000 USD",
              },
              {
                title: "Cacao Facilitator Training",
                body: "3–5 days. 10–15 students.",
                price: "$2,000 – $3,500 USD",
              },
              {
                title: "Kenya",
                body: "Safari & Lamu Cultural Festival Retreat, November. 7–10 days. 15 participants.",
                price: "$5,000 – $9,000 USD",
              },
              {
                title: "The Book",
                body: '"Never the Same Woman Twice" — "The book finds her. Morphing™ keeps her."',
                price: null,
              },
              {
                title: "Morphing™",
                body: "Online membership. Recurring revenue. Scalable delivery. Zero geographic constraint.",
                price: null,
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                variants={staggerItem}
                className="bg-cream rounded-lg p-6 border border-sand"
              >
                <h3 className="font-serif text-xl text-cacao mb-3">
                  {card.title}
                </h3>
                <p className="font-sans text-sm text-cacao/80 leading-relaxed mb-2">
                  {card.body}
                </p>
                {card.price && (
                  <p className="font-sans text-sm font-semibold text-gold">
                    {card.price}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>

          <p className="font-serif italic text-center text-rust text-lg">
            These programs alone project $250,000–$350,000 in 2026 revenue.
          </p>
        </div>
      </SectionWrapper>

      {/* ── The Partnership ── */}
      <SectionWrapper className="bg-cream py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-cacao mb-12 text-center">
            The Partnership
          </h2>
          <div className="space-y-6 font-sans text-cacao/90 text-base md:text-lg leading-relaxed">
            <p>
              <strong>Rachelle Starr</strong> joins as Integrator &amp; Chief
              Brand Strategist.
            </p>
            <p>
              Her role: take Chocolako&apos;s vision and build the machine around
              it.
            </p>
            <p className="font-serif italic text-xl text-rust">
              Think Emma Grede and Kim Kardashian.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="font-serif text-xl text-cacao mb-6">
              Together, by end of 2026:
            </h3>
            <ul className="space-y-3 font-sans text-cacao/90 text-base">
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">&#9670;</span>
                Full brand relaunch and digital infrastructure in place
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">&#9670;</span>
                Three flagship programs executed (Morocco, Bali, Kenya)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">&#9670;</span>
                Morphing&trade; membership platform live and generating recurring
                revenue
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">&#9670;</span>
                Book manuscript completed and in pre-launch marketing phase
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">&#9670;</span>
                Institutional research partnership initiated
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gold mt-1">&#9670;</span>
                Revenue on track for $250K–$350K
              </li>
            </ul>
            <p className="font-sans text-cacao font-semibold mt-8">
              2027 mapped and ready.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* ── The Ask ── */}
      <SectionWrapper className="bg-espresso py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl text-bone mb-8 text-center">
            The Ask
          </h2>
          <p className="font-sans text-bone/90 text-lg text-center mb-6">
            An investment of $200,000 accelerates three strategic priorities:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {[
              "Institutional research partnerships",
              "Digital infrastructure and curriculum scaling",
              "Strategic brand positioning",
            ].map((item) => (
              <span
                key={item}
                className="bg-gold/10 border border-gold/30 text-sand font-sans text-sm px-4 py-2 rounded-full text-center"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="font-serif text-4xl md:text-5xl lg:text-6xl text-gold text-center mb-4">
            $200,000 USD
          </p>
          <p className="font-sans text-sand/80 text-center mb-16">
            Not a grant. Not equity. A structured line of credit, drawn down as
            needed. Interest only on what&apos;s used.
          </p>

          {/* Terms grid */}
          <div className="max-w-2xl mx-auto">
            <h3 className="font-serif text-xl text-bone mb-8 text-center">
              Terms
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gold/20 rounded-lg overflow-hidden">
              {[
                { label: "Facility", value: "$200,000 USD" },
                {
                  label: "Structure",
                  value: "Line of credit — drawn as needed",
                },
                {
                  label: "Interest",
                  value: "8% per annum on drawn amounts only",
                },
                { label: "Repayment-free", value: "First 5–6 months" },
                {
                  label: "Repayments begin",
                  value: "September / October 2026",
                },
                { label: "L.O.C Term", value: "Maximum 24 months" },
              ].map((row) => (
                <div key={row.label} className="bg-espresso p-5">
                  <p className="font-sans text-xs text-gold uppercase tracking-wider mb-1">
                    {row.label}
                  </p>
                  <p className="font-sans text-bone text-sm">{row.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── What This Capital Funds ── */}
      <SectionWrapper className="bg-bone py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-cacao mb-2 text-center">
            What this capital funds
          </h2>
          <p className="text-center font-sans text-rust mb-16">
            The infrastructure that turns a movement into a global business.
          </p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              {
                title: "Operational setup",
                desc: "Systems, CRM, automations, funnels",
              },
              {
                title: "Brand & digital",
                desc: "Website relaunch, content, designer",
              },
              {
                title: "The team",
                desc: "To run the engine room day-to-day",
              },
              {
                title: "Working capital",
                desc: "Room to move fast without hesitation",
              },
              {
                title: "Strategic leadership",
                desc: "Rachelle's bootcamp and retainer",
              },
              {
                title: "Event readiness",
                desc: "Buffers for Morocco and Bali",
              },
            ].map((box) => (
              <motion.div
                key={box.title}
                variants={staggerItem}
                className="bg-cream rounded-lg p-6 border border-sand"
              >
                <h3 className="font-serif text-lg text-cacao mb-2">
                  {box.title}
                </h3>
                <p className="font-sans text-sm text-cacao/70">{box.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <p className="font-serif italic text-center text-rust text-lg">
            This isn&apos;t overhead. This is the springboard.
          </p>
        </div>
      </SectionWrapper>

      {/* ── Why This Why Now ── */}
      <SectionWrapper className="bg-cream py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-serif text-3xl md:text-4xl text-cacao mb-12 text-center">
            Why This. Why Now.
          </h2>
          <div className="space-y-6 font-sans text-cacao/90 text-base md:text-lg leading-relaxed text-center">
            <p>The wellness industry is at an inflection point.</p>
            <p>
              Women are rejecting the masculine model of success that burns them
              out.
            </p>
            <p>
              They&apos;re looking for leaders who have lived what they teach.
            </p>
            <p>
              Chocolako has spent 20+ years becoming the person the world needs
              right now.
            </p>
            <p>
              She has the methodology. The community. The credibility. The
              vision.
            </p>
          </div>
          <p className="font-serif text-xl md:text-2xl text-gold font-bold text-center mt-12 mb-4">
            2026 is the year Innergy by Chocolako&reg; goes global.
          </p>
          <p className="font-serif italic text-rust text-center">
            This line of credit is the bridge that gets her there.
          </p>
        </div>
      </SectionWrapper>

      {/* ── Connect ── */}
      <section className="bg-espresso py-24 md:py-32">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="font-serif text-2xl text-bone mb-2">
            Chocolako Agburu, MPH, MBA
          </p>
          <p className="font-sans text-sand/80 mb-12">
            Founder &amp; CEO, Innergy Global, LLC
          </p>
          <a
            href="mailto:hello@chocolako.com"
            className="inline-block bg-gold hover:bg-gold/90 text-espresso font-sans font-medium px-10 py-4 rounded-full transition-colors text-lg"
          >
            Contact Chocolako
          </a>
          <p className="font-sans text-sand/60 text-sm mt-8">
            www.chocolako.com
          </p>
        </div>
      </section>
    </>
  )
}
