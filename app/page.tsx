import { Hero } from "@/components/sections/Hero"
import { ProofStrip } from "@/components/sections/ProofStrip"
import { Bridge } from "@/components/sections/Bridge"
import { Quiz } from "@/components/sections/Quiz"
import { Pathways } from "@/components/sections/Pathways"
import { Methodology } from "@/components/sections/Methodology"
import { Testimonials } from "@/components/sections/Testimonials"
import { Founder } from "@/components/sections/Founder"
import { FeaturedContent } from "@/components/sections/FeaturedContent"
import { BookFeature } from "@/components/sections/BookFeature"
import { ShopPreview } from "@/components/sections/ShopPreview"
import { EmailOptIn } from "@/components/sections/EmailOptIn"
import { ClosingStatement } from "@/components/sections/ClosingStatement"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <ProofStrip />
      <Bridge />
      <Quiz />
      <Pathways />
      <Methodology />
      <Testimonials />
      <Founder />
      <FeaturedContent />
      <BookFeature />
      <ShopPreview />
      <EmailOptIn />
      <ClosingStatement />
      <Footer />
    </main>
  )
}
