"use client"

import Link from "next/link"

const navigateLinks = [
  { label: "In-Person", href: "/in-person" },
  { label: "Online", href: "/online" },
  { label: "Shop", href: "/shop" },
  { label: "Work With Me", href: "/work-with-me" },
  { label: "Book", href: "/book" },
  { label: "About", href: "/about" },
  { label: "Press", href: "/press" },
  { label: "Contact", href: "/contact" },
]

const followLinks = [
  { label: "TikTok", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Instagram @chocolako", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "Spotify", href: "#" },
  { label: "Pinterest", href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-espresso text-bone/80 py-16 px-6 md:px-12 lg:px-24">
      {/* Subscribe Line */}
      <div className="border-b border-bone/10 pb-8 mb-12">
        <p className="text-center text-bone/80">
          Get transmission notes on embodied presence.{" "}
          <Link
            href="#subscribe"
            className="text-gold hover:text-gold/80 transition font-medium"
          >
            Subscribe
          </Link>
        </p>
      </div>

      {/* Three Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Navigate */}
        <div>
          <h4 className="text-bone font-medium uppercase tracking-widest text-xs mb-4">
            Navigate
          </h4>
          <p className="text-sm">
            {navigateLinks.map((link, i) => (
              <span key={link.label}>
                <Link
                  href={link.href}
                  className="text-bone/60 hover:text-gold transition text-sm"
                >
                  {link.label}
                </Link>
                {i < navigateLinks.length - 1 && (
                  <span className="text-bone/40"> · </span>
                )}
              </span>
            ))}
          </p>
        </div>

        {/* Follow */}
        <div>
          <h4 className="text-bone font-medium uppercase tracking-widest text-xs mb-4">
            Follow
          </h4>
          <p className="text-sm">
            {followLinks.map((link, i) => (
              <span key={link.label}>
                <Link
                  href={link.href}
                  className="text-bone/60 hover:text-gold transition text-sm"
                >
                  {link.label}
                </Link>
                {i < followLinks.length - 1 && (
                  <span className="text-bone/40"> · </span>
                )}
              </span>
            ))}
          </p>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-bone font-medium uppercase tracking-widest text-xs mb-4">
            Legal
          </h4>
          <p className="text-bone/40 text-xs leading-relaxed">
            Chocolako&reg;, Somatic Feminine Intelligence&trade; and Womb
            Wisdom&trade; are registered trademarks of Innergy Global
            Enterprises, LLC.
          </p>
          <p className="text-bone/40 text-xs mt-3">
            &copy; 2018&ndash;2026 Innergy Global Enterprises, LLC{" "}
            <span className="text-bone/30"> · </span>
            <Link
              href="/privacy"
              className="text-bone/40 hover:text-gold transition"
            >
              Privacy Policy
            </Link>
            <span className="text-bone/30"> · </span>
            <Link
              href="/terms"
              className="text-bone/40 hover:text-gold transition"
            >
              Terms
            </Link>
            <span className="text-bone/30"> · </span>
            <Link
              href="/press-kit"
              className="text-bone/40 hover:text-gold transition"
            >
              Press Kit
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
