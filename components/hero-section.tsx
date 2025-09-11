"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Coffee } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted to-card"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-40 h-40 bg-accent rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-secondary rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated Tea Cup Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <Coffee className="w-16 h-16 text-primary animate-float" />
              {/* Steam Animation */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                <div className="w-1 h-4 bg-accent/60 rounded-full animate-steam"></div>
                <div
                  className="w-1 h-3 bg-accent/40 rounded-full animate-steam ml-2"
                  style={{ animationDelay: "0.5s" }}
                ></div>
                <div
                  className="w-1 h-5 bg-accent/50 rounded-full animate-steam -ml-1"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4 text-balance">
            <span className="block font-display text-3xl sm:text-4xl lg:text-5xl text-primary mb-2">
              श्री मधुर अमृततुल्य
            </span>
            Premium Tea & Franchise
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-2 font-display">चहाची परंपरा, प्रेमाचा स्वाद</p>
          <p className="text-xl sm:text-2xl text-foreground mb-8 font-medium text-pretty">
            A Cup of Tradition. A Sip of Warmth.
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed text-pretty">
            Experience the authentic taste of premium Indian tea with our carefully crafted blends. Join our growing
            franchise family and bring the warmth of tradition to your community.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 group">
              Order Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              Franchise Enquiry
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground font-display">Premium Varieties</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground font-display">Authentic Taste</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground font-display">Franchise Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
