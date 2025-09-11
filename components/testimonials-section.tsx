"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useState, useEffect } from "react"

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Rajesh Patil",
      nameMr: "राजेश पाटील",
      location: "Mumbai",
      locationMr: "मुंबई",
      rating: 5,
      text: "The franchise support from Shree Madhur team is exceptional. My outlet has been profitable since month 6.",
      textMr: "श्री मधुर टीमचा फ्रँचायझी सपोर्ट अप्रतिम आहे. माझे आउटलेट ६व्या महिन्यापासून नफ्यात आहे.",
      role: "Franchise Partner",
    },
    {
      name: "Priya Sharma",
      nameMr: "प्रिया शर्मा",
      location: "Pune",
      locationMr: "पुणे",
      rating: 5,
      text: "Best tea quality and amazing customer service. My family loves the authentic taste of their chai.",
      textMr: "उत्कृष्ट चहाची गुणवत्ता आणि अप्रतिम ग्राहक सेवा. माझ्या कुटुंबाला त्यांच्या चहाची अस्सल चव आवडते.",
      role: "Regular Customer",
    },
    {
      name: "Amit Deshmukh",
      nameMr: "अमित देशमुख",
      location: "Nashik",
      locationMr: "नाशिक",
      rating: 5,
      text: "Started my franchise 2 years ago. The training and ongoing support helped me build a successful business.",
      textMr: "२ वर्षांपूर्वी माझे फ्रँचायझी सुरू केले. प्रशिक्षण आणि सतत सपोर्टमुळे मी यशस्वी व्यवसाय उभा केला.",
      role: "Franchise Partner",
    },
    {
      name: "Sunita Joshi",
      nameMr: "सुनिता जोशी",
      location: "Nagpur",
      locationMr: "नागपूर",
      rating: 5,
      text: "The kesar badam milk is absolutely delicious. Perfect place for evening tea with family.",
      textMr: "केसर बदाम दूध अतिशय स्वादिष्ट आहे. कुटुंबासोबत संध्याकाळी चहासाठी परफेक्ट जागा.",
      role: "Regular Customer",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground text-balance">
            <span className="block font-display text-2xl text-primary mb-2">ग्राहक अनुभव</span>
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Hear from our satisfied customers and successful franchise partners about their experience with us.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-card border-border">
                    <CardContent className="p-8 text-center space-y-6">
                      {/* Stars */}
                      <div className="flex justify-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <div className="space-y-4">
                        <blockquote className="text-lg text-foreground leading-relaxed text-pretty">
                          "{testimonial.text}"
                        </blockquote>
                        <blockquote className="text-base text-primary font-display leading-relaxed text-pretty">
                          "{testimonial.textMr}"
                        </blockquote>
                      </div>

                      {/* Customer Info */}
                      <div className="space-y-2">
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-primary font-display">{testimonial.nameMr}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role} • {testimonial.location}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-border"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Join thousands of satisfied customers and successful franchise partners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Start Your Franchise
            </button>
            <button className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors">
              Visit Our Store
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
