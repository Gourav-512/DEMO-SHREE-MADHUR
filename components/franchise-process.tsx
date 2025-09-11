import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Users, Wrench, TrendingUp, CheckCircle } from "lucide-react"

export function FranchiseProcess() {
  const steps = [
    {
      step: 1,
      title: "Initial Enquiry",
      titleMr: "प्रारंभिक चौकशी",
      description: "Submit your franchise application with basic details and investment capacity.",
      descriptionMr: "मूलभूत तपशील आणि गुंतवणूक क्षमतेसह आपला फ्रँचायझी अर्ज सबमिट करा.",
      icon: FileText,
      duration: "1-2 days",
      color: "bg-blue-500",
    },
    {
      step: 2,
      title: "Meeting & Discussion",
      titleMr: "बैठक आणि चर्चा",
      description: "Detailed discussion about business model, expectations, and location analysis.",
      descriptionMr: "व्यवसाय मॉडेल, अपेक्षा आणि स्थान विश्लेषणाबद्दल तपशीलवार चर्चा.",
      icon: Users,
      duration: "3-5 days",
      color: "bg-green-500",
    },
    {
      step: 3,
      title: "Setup & Training",
      titleMr: "सेटअप आणि प्रशिक्षण",
      description: "Complete outlet setup, staff training, and operational guidance.",
      descriptionMr: "संपूर्ण आउटलेट सेटअप, कर्मचारी प्रशिक्षण आणि ऑपरेशनल मार्गदर्शन.",
      icon: Wrench,
      duration: "15-30 days",
      color: "bg-orange-500",
    },
    {
      step: 4,
      title: "Launch & Support",
      titleMr: "लॉन्च आणि सपोर्ट",
      description: "Grand opening support and ongoing business assistance.",
      descriptionMr: "भव्य उद्घाटन सपोर्ट आणि चालू व्यवसाय सहाय्य.",
      icon: TrendingUp,
      duration: "Ongoing",
      color: "bg-purple-500",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground text-balance">
            <span className="block font-display text-2xl text-primary mb-2">फ्रँचायझी प्रक्रिया</span>
            Franchise Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Simple 4-step process to become our franchise partner and start your tea business journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card
                key={step.step}
                className="relative overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6 text-center space-y-4">
                  {/* Step Number */}
                  <div className="relative">
                    <div
                      className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl`}
                    >
                      {step.step}
                    </div>
                    <step.icon className="w-8 h-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm text-primary font-display">{step.titleMr}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    <p className="text-xs text-primary font-display leading-relaxed">{step.descriptionMr}</p>
                  </div>

                  {/* Duration */}
                  <Badge variant="outline" className="text-xs">
                    {step.duration}
                  </Badge>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-3 w-6 h-0.5 bg-border"></div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Success Guarantee */}
          <div className="mt-16 bg-card rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Success Guarantee</h3>
            <p className="text-muted-foreground mb-4">
              We provide complete support until your outlet becomes profitable. Our success is tied to your success.
            </p>
            <p className="text-sm text-primary font-display">
              आम्ही तुमचे आउटलेट फायदेशीर होईपर्यंत संपूर्ण सपोर्ट देतो. आमचे यश तुमच्या यशाशी जोडलेले आहे.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
