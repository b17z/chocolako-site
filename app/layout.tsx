import type { Metadata } from "next"
import { cormorant, inter } from "@/lib/fonts"
import { Navigation } from "@/components/shared/Navigation"
import "./globals.css"

export const metadata: Metadata = {
  title: "Innergy by Chocolako® | Where the Science of Health Meets the Soul of Healing",
  description: "Journey back to yourself. Somatic Feminine Intelligence™, Womb Wisdom™, and embodied leadership for high-performing women.",
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
