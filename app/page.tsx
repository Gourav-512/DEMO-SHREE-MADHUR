import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { FranchiseSection } from "@/components/franchise-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GallerySection } from "@/components/gallery-section"
import { VideoGallerySection } from "@/components/video-gallery-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <FranchiseSection />
        <TestimonialsSection />
        <GallerySection />
        <VideoGallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
