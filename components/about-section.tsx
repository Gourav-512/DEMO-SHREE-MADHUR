import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Heart, Shield, Users, Coffee } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Shield,
      title: "Ethical Business",
      titleMr: "नैतिक व्यवसाय",
      description: "We believe in honest and transparent business practices with all our partners and customers.",
    },
    {
      icon: CheckCircle,
      title: "Transparent Dealing",
      titleMr: "पारदर्शक व्यवहार",
      description: "Complete transparency in all our franchise operations and business relationships.",
    },
    {
      icon: Heart,
      title: "Authentic Taste",
      titleMr: "अस्सल चव",
      description: "Traditional recipes and premium ingredients ensure the authentic taste in every cup.",
    },
    {
      icon: Users,
      title: "Franchise Support",
      titleMr: "फ्रँचायझी सपोर्ट",
      description: "24/7 support system to help our franchise partners succeed and grow their business.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground text-balance">
                <span className="block font-display text-2xl text-primary mb-2">आमच्याबद्दल</span>
                About Shree Madhur Amruttulya
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                Founded with a passion for authentic Indian tea culture, Shree Madhur Amruttulya has been serving
                premium quality tea that brings families together. Our journey began with a simple belief - every cup
                should tell a story of tradition, warmth, and genuine hospitality.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed text-pretty">
                आमची चहाची दुकान ही फक्त एक व्यवसाय नाही, तर एक परंपरा आहे. आम्ही प्रत्येक कपात प्रेम आणि आदर मिसळून देतो. आमच्या
                फ्रँचायझी पार्टनर्ससोबत आम्ही हा अनुभव सर्वत्र पोहोचवत आहोत.
              </p>
            </div>
          </div>

          {/* Right Image */}
       {/* Right Image */}
<div className="relative">
  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
    <img 
      src="/logo.png"  // put your image here
      alt="Premium Tea"
      className="w-full h-full object-cover"
    />
  </div>
</div>

        </div>

        {/* Features Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-primary font-display">{feature.titleMr}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
