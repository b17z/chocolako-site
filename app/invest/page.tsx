import type { Metadata } from "next"
import { InvestHero } from "@/components/invest/InvestHero"
import { InvestContent } from "@/components/invest/InvestContent"

export const metadata: Metadata = {
  title: "Invest in Innergy by Chocolako® | Innergy Global",
  description:
    "The methodology is proven. The market is ready. The build-out to expand is what's next.",
}

export default function InvestPage() {
  return (
    <main>
      <InvestHero />
      <InvestContent />
    </main>
  )
}
