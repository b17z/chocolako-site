"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Instagram, Youtube, Mail } from "lucide-react"

const programLinks = [
  { label: "Masterclass", href: "#" },
  { label: "SFI Training", href: "#" },
  { label: "Retreats", href: "#" },
  { label: "Morphing Membership", href: "#" },
]

const companyLinks = [
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Press", href: "#" },
  { label: "Speaking", href: "#" },
]

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Mail, label: "Email", href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-espresso text-bone">
      {/* Email Signup Section */}
      <div className="border-b border-bone/10">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-4">
              Receive Transmission Notes
            </h2>
            <p className="text-sand/80 mb-8">
              Essays on embodied leadership, nervous system wisdom, and the
              feminine path to power.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-bone/10 border-bone/20 text-bone placeholder:text-bone/50 focus-visible:border-gold focus-visible:ring-gold/30"
              />
              <Button className="bg-gold hover:bg-gold/90 text-espresso font-medium px-6">
                Subscribe
              </Button>
            </form>
            <p className="text-sand/60 text-sm mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-serif text-2xl text-bone">Innergy</h3>
            <p className="text-gold text-sm mt-1">by Chocolako</p>
            <p className="text-sand/70 text-sm mt-4 leading-relaxed">
              Somatic intelligence for the feminine leader.
            </p>
          </div>

          {/* Programs Column */}
          <div>
            <h4 className="text-gold uppercase tracking-wider text-xs font-medium mb-4">
              Programs
            </h4>
            <ul className="space-y-3">
              {programLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sand/80 hover:text-bone transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-gold uppercase tracking-wider text-xs font-medium mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sand/80 hover:text-bone transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-gold uppercase tracking-wider text-xs font-medium mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-sand/80 hover:text-gold transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-bone/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sand/60 text-sm">
              &copy; 2026 Innergy by Chocolako. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-sand/60 hover:text-bone transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sand/60 hover:text-bone transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
