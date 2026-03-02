"use client"

import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { useState, useEffect, useCallback } from "react"
import { SectionWrapper } from "@/components/shared/motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { SectionDivider } from "@/components/shared/SectionDivider"

interface Testimonial {
  id: string
  quote: string
  name: string
  title: string
}

const testimonials: Testimonial[] = [
  {
    id: "ceo",
    quote:
      "I came to Chocolako running on fumes and calling it leadership. I left with a nervous system that could finally register safety. That shifted everything.",
    name: "Founder & CEO",
    title: "Tech Startup",
  },
  {
    id: "vp",
    quote:
      "This isn't yoga teacher training. This is the missing infrastructure for women leading at scale.",
    name: "VP of Strategy",
    title: "Fortune 500",
  },
  {
    id: "director",
    quote:
      "I've spent $50K on executive coaching. This was the first time someone addressed the body I was leading from.",
    name: "Policy Director",
    title: "Government Agency",
  },
]

const crossfadeVariants = {
  enter: {
    opacity: 0,
    y: 20,
  },
  center: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -20,
  },
}

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  const goToIndex = useCallback((index: number) => {
    setCurrentIndex(index)
  }, [])

  // Auto-rotate every 6 seconds, pause on hover
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      goToNext()
    }, 6000)

    return () => clearInterval(interval)
  }, [isPaused, goToNext])

  const currentTestimonial = testimonials[currentIndex]
  const animationDuration = shouldReduceMotion ? 0 : 0.5

  return (
    <>
      <SectionDivider
        variant="curve"
        colorFrom="var(--color-espresso)"
        colorTo="var(--color-jungle)"
      />
      <SectionWrapper className="py-20 md:py-32 bg-jungle relative overflow-hidden">
        {/* Ethereal background elements */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at 50% 20%, rgba(212,175,55,0.15) 0%, transparent 50%)",
          }}
        />

        {/* Decorative quote marks - MORE VISIBLE */}
        <div
          className="absolute top-10 left-1/2 -translate-x-1/2 font-serif text-[25rem] leading-none pointer-events-none select-none"
          style={{
            color: "rgba(212,175,55,0.08)",
            textShadow: "0 0 100px rgba(212,175,55,0.1)",
          }}
        >
          &ldquo;
        </div>

        <div
          className="container mx-auto px-6 relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gold uppercase tracking-[0.3em] text-sm mb-12 md:mb-16 text-center"
              style={{ textShadow: "0 0 30px rgba(212,175,55,0.5), 0 0 60px rgba(212,175,55,0.3)" }}
            >
              Voices of Transformation
            </motion.p>

            {/* Testimonial Carousel */}
            <div className="relative min-h-[280px] md:min-h-[240px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial.id}
                  variants={crossfadeVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: animationDuration, ease: "easeInOut" }}
                  className="text-center"
                >
                  {/* Quote */}
                  <blockquote
                    className="font-serif text-xl md:text-2xl lg:text-3xl text-bone leading-relaxed mb-8 md:mb-10 italic"
                    style={{ textShadow: "0 0 40px rgba(255,255,255,0.15), 0 0 80px rgba(255,255,255,0.1)" }}
                  >
                    &ldquo;{currentTestimonial.quote}&rdquo;
                  </blockquote>

                  {/* Attribution with decorative line */}
                  <div className="flex flex-col items-center">
                    <div
                      className="w-20 h-px mb-6"
                      style={{
                        background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.8), transparent)",
                        boxShadow: "0 0 10px rgba(212,175,55,0.5)",
                      }}
                    />
                    <p className="text-gold font-medium text-lg mb-1">
                      {currentTestimonial.name}
                    </p>
                    <p className="text-sage/70 text-sm tracking-wide">
                      {currentTestimonial.title}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-8 mt-12">
              {/* Previous Button */}
              <motion.button
                onClick={goToPrev}
                aria-label="Previous testimonial"
                className="p-2 text-bone/60 hover:text-bone transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              {/* Dot Indicators */}
              <div className="flex gap-3">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-gold w-8"
                        : "bg-bone/30 hover:bg-bone/50 w-2"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    style={
                      index === currentIndex
                        ? { boxShadow: "0 0 10px rgba(212,175,55,0.5)" }
                        : {}
                    }
                  />
                ))}
              </div>

              {/* Next Button */}
              <motion.button
                onClick={goToNext}
                aria-label="Next testimonial"
                className="p-2 text-bone/60 hover:text-bone transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
