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
