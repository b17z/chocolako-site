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
  title: "Womb Wisdom & Wellbeing YTT — Morocco | Innergy by Chocolako\u00ae",
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
