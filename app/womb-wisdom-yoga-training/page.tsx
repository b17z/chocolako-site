import type { Metadata } from "next"
import { YTTHero } from "@/components/ytt/YTTHero"
import { YTTPainPoints } from "@/components/ytt/YTTPainPoints"
import { YTTFeminineBody } from "@/components/ytt/YTTFeminineBody"
import { YTTWombCenter } from "@/components/ytt/YTTWombCenter"
import { YTTOverview } from "@/components/ytt/YTTOverview"
import { YTTFounder } from "@/components/ytt/YTTFounder"
import { YTTFaculty } from "@/components/ytt/YTTFaculty"
import { YTTModules } from "@/components/ytt/YTTModules"
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
      <Footer />
    </main>
  )
}
