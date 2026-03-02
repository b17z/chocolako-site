"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const inPersonLinks = [
  { href: "/retreats", label: "Retreats" },
  { href: "/womb-wisdom-ytt", label: "Womb Wisdom YTT" },
]

const onlineLinks = [
  { href: "/masterclass", label: "Masterclass" },
  { href: "/sfi-training", label: "SFI Training" },
  { href: "/morphing-membership", label: "Morphing Membership" },
]

interface DropdownMenuProps {
  label: string
  links: { href: string; label: string }[]
  isOpen: boolean
  onToggle: () => void
}

function DropdownMenu({ label, links, isOpen, onToggle }: DropdownMenuProps) {
  return (
    <div className="relative group">
      <button
        onClick={onToggle}
        className="flex items-center gap-1 text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold"
      >
        {label}
        <ChevronDown
          className={`size-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 min-w-48 bg-espresso/95 backdrop-blur-md rounded-lg border border-sand/10 shadow-lg overflow-hidden"
          >
            <div className="py-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-sm text-bone/90 hover:text-gold hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement
      if (!target.closest(".dropdown-container")) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-espresso/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Navigation - Desktop */}
          <div className="hidden lg:flex items-center gap-8 dropdown-container">
            <DropdownMenu
              label="In-Person"
              links={inPersonLinks}
              isOpen={openDropdown === "in-person"}
              onToggle={() =>
                setOpenDropdown(openDropdown === "in-person" ? null : "in-person")
              }
            />
            <DropdownMenu
              label="Online"
              links={onlineLinks}
              isOpen={openDropdown === "online"}
              onToggle={() =>
                setOpenDropdown(openDropdown === "online" ? null : "online")
              }
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 -ml-2 text-current hover:text-gold transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>

          {/* Center Logo */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 font-serif text-2xl md:text-3xl tracking-wide"
          >
            <span className="font-medium">Innergy</span>
          </Link>

          {/* Right Navigation - Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              href="/shop"
              className="text-sm font-medium tracking-wide uppercase hover:text-gold transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium tracking-wide uppercase hover:text-gold transition-colors"
            >
              About
            </Link>
            <Button
              asChild
              className="bg-gold text-espresso hover:bg-gold/90 font-medium tracking-wide uppercase text-sm"
            >
              <Link href="/work-with-me">Work With Me</Link>
            </Button>
          </div>

          {/* Placeholder for mobile to balance the layout */}
          <div className="lg:hidden w-10" />
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-espresso/95 backdrop-blur-md border-t border-sand/10 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 space-y-6">
              {/* In-Person Section */}
              <div className="space-y-3">
                <p className="text-xs font-medium tracking-widest uppercase text-sand/60">
                  In-Person
                </p>
                <div className="space-y-2">
                  {inPersonLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-bone/90 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Online Section */}
              <div className="space-y-3">
                <p className="text-xs font-medium tracking-widest uppercase text-sand/60">
                  Online
                </p>
                <div className="space-y-2">
                  {onlineLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-bone/90 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Other Links */}
              <div className="space-y-2 pt-4 border-t border-sand/10">
                <Link
                  href="/shop"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-bone/90 hover:text-gold transition-colors"
                >
                  Shop
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-bone/90 hover:text-gold transition-colors"
                >
                  About
                </Link>
              </div>

              {/* CTA Button */}
              <Button
                asChild
                className="w-full bg-gold text-espresso hover:bg-gold/90 font-medium tracking-wide uppercase text-sm"
              >
                <Link href="/work-with-me" onClick={() => setMobileMenuOpen(false)}>
                  Work With Me
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
