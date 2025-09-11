"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: "Home", labelMr: "होम", href: "#home" },
    { label: "About", labelMr: "आमच्याबद्दल", href: "#about" },
    { label: "Products", labelMr: "उत्पादने", href: "#products" },
    { label: "Franchise", labelMr: "फ्रँचायझी", href: "#franchise" },
    { label: "Gallery", labelMr: "गॅलरी", href: "#gallery" },
    { label: "Contact", labelMr: "संपर्क", href: "#contact" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">श्री</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg text-foreground">Shree Madhur</span>
              <span className="font-display text-sm text-muted-foreground">Amruttulya</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors group"
              >
                <span className="block">{item.label}</span>
                <span className="block text-xs text-muted-foreground font-display">{item.labelMr}</span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Order Now
            </Button>
            <Button size="sm">Franchise Enquiry</Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="block">{item.label}</span>
                  <span className="block text-xs text-muted-foreground font-display">{item.labelMr}</span>
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm">
                  Order Now
                </Button>
                <Button size="sm">Franchise Enquiry</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
