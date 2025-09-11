import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  const quickLinks = [
    { label: "Home", labelMr: "होम", href: "#home" },
    { label: "About", labelMr: "आमच्याबद्दल", href: "#about" },
    { label: "Products", labelMr: "उत्पादने", href: "#products" },
    { label: "Franchise", labelMr: "फ्रँचायझी", href: "#franchise" },
    { label: "Contact", labelMr: "संपर्क", href: "#contact" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">श्री</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg">Shree Madhur</span>
                <span className="font-display text-sm opacity-80">Amruttulya</span>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed text-pretty">
              Bringing you the authentic taste of premium Indian tea with traditional recipes and modern franchise
              opportunities. Join our family today.
            </p>
            <p className="text-sm font-display opacity-80 leading-relaxed text-pretty">
              प्रामाणिक भारतीय चहाची चव आणि आधुनिक फ्रँचायझी संधी. आजच आमच्या कुटुंबात सामील व्हा.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-lg">
              <span className="block">Quick Links</span>
              <span className="block text-sm font-display opacity-80">त्वरित दुवे</span>
            </h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <a key={link.href} href={link.href} className="block text-sm hover:opacity-80 transition-opacity group">
                  <span className="block">{link.label}</span>
                  <span className="block text-xs font-display opacity-70">{link.labelMr}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="font-serif font-semibold text-lg">
              <span className="block">Contact Us</span>
              <span className="block text-sm font-display opacity-80">आमच्याशी संपर्क साधा</span>
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 opacity-80" />
                <div className="text-sm">
                  <p>Shop No. 15, Tea Plaza, MG Road</p>
                  <p>Mumbai, Maharashtra 400001</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 opacity-80" />
                <span className="text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 opacity-80" />
                <span className="text-sm">info@shreemadhur.com</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-4">
              <div className="flex space-x-4">
                <a href="#" className="text-sm hover:opacity-80 transition-opacity">
                  Instagram
                </a>
                <a href="#" className="text-sm hover:opacity-80 transition-opacity">
                  YouTube
                </a>
                <a href="#" className="text-sm hover:opacity-80 transition-opacity">
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-80">
            © 2025 Shree Madhur Amruttulya. All Rights Reserved. | Made with ❤️ for Tea Lovers
          </p>
        </div>
      </div>
    </footer>
  )
}
