"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Check,
  Crown,
  Diamond,
  Star,
  Users,
  TrendingUp,
  Shield,
  Award,
  Phone,
  Mail,
  MapPin,
  Calculator,
  FileText,
  Download,
} from "lucide-react"
import { useState } from "react"

export function FranchiseSection() {
  const plans = [
    {
      id: "silver",
      name: "Silver",
      nameMr: "रजत",
      icon: Star,
      price: "₹75000",
      monthlyFee: "₹5,000",
      popular: false,
      roi: "12-15 months",
      areaRequired: "200-300 sq ft",
      features: [
        "Basic Setup Support",
        "Training for 2 Staff Members",
        "Initial Inventory Worth ₹50,000",
        "Marketing Materials",
        "Monthly Business Review",
        "6 Months Support",
        "Basic POS System",
        "Recipe Training",
      ],
      featuresMr: [
        "मूलभूत सेटअप सपोर्ट",
        "२ कर्मचाऱ्यांना प्रशिक्षण",
        "₹५०,००० चा प्रारंभिक स्टॉक",
        "मार्केटिंग साहित्य",
        "मासिक व्यवसाय पुनरावलोकन",
        "६ महिने सपोर्ट",
        "मूलभूत POS सिस्टम",
        "रेसिपी प्रशिक्षण",
      ],
      benefits: ["Low initial investment", "Quick setup process", "Proven business model", "Brand recognition"],
    },
    {
      id: "gold",
      name: "Gold",
      nameMr: "सुवर्ण",
      icon: Crown,
      price: "₹1,50,000",
      monthlyFee: "₹8,000",
      popular: true,
      roi: "10-12 months",
      areaRequired: "300-500 sq ft",
      features: [
        "Complete Setup & Interior Design",
        "Training for 4 Staff Members",
        "Initial Inventory Worth ₹1,00,000",
        "Digital Marketing Support",
        "Weekly Business Review",
        "12 Months Support",
        "Advanced POS System",
        "Online Ordering Platform",
        "Social Media Management",
      ],
      featuresMr: [
        "संपूर्ण सेटअप आणि इंटीरियर डिझाइन",
        "४ कर्मचाऱ्यांना प्रशिक्षण",
        "₹१,००,००० चा प्रारंभिक स्टॉक",
        "डिजिटल मार्केटिंग सपोर्ट",
        "साप्ताहिक व्यवसाय पुनरावलोकन",
        "१२ महिने सपोर्ट",
        "प्रगत POS सिस्टम",
        "ऑनलाइन ऑर्डरिंग प्लॅटफॉर्म",
        "सोशल मीडिया व्यवस्थापन",
      ],
      benefits: [
        "Complete business solution",
        "Digital presence included",
        "Higher profit margins",
        "Comprehensive training",
      ],
    },
    {
      id: "diamond",
      name: "Diamond",
      nameMr: "हीरा",
      icon: Diamond,
      price: "₹2,00,000",
      monthlyFee: "₹12,000",
      popular: false,
      roi: "8-10 months",
      areaRequired: "500+ sq ft",
      features: [
        "Premium Setup & Branding",
        "Training for 6 Staff Members",
        "Initial Inventory Worth ₹2,00,000",
        "Complete Digital Marketing",
        "Daily Business Support",
        "24 Months Support",
        "Advanced POS & Analytics",
        "Exclusive Territory Rights",
        "Custom Menu Development",
        "Delivery Partnership Setup",
      ],
      featuresMr: [
        "प्रीमियम सेटअप आणि ब्रँडिंग",
        "६ कर्मचाऱ्यांना प्रशिक्षण",
        "₹२,००,००० चा प्रारंभिक स्टॉक",
        "संपूर्ण डिजिटल मार्केटिंग",
        "दैनिक व्यवसाय सपोर्ट",
        "२४ महिने सपोर्ट",
        "प्रगत POS आणि विश्लेषण",
        "विशेष क्षेत्राधिकार",
        "कस्टम मेनू डेव्हलपमेंट",
        "डिलिव्हरी पार्टनरशिप सेटअप",
      ],
      benefits: [
        "Premium brand positioning",
        "Exclusive territory rights",
        "Maximum profit potential",
        "Complete business ecosystem",
      ],
    },
  ]

  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [showCalculator, setShowCalculator] = useState(false)
  const [calculatorData, setCalculatorData] = useState({
    investment: "",
    location: "",
    expectedSales: "",
  })
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    experience: "",
    investment: "",
    message: "",
  })

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Franchise enquiry submitted:", enquiryForm)
    // Handle form submission
  }

  const handleCalculatorSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("ROI calculation:", calculatorData)
    // Handle ROI calculation
  }

  return (
    <section id="franchise" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground text-balance">
            <span className="block font-display text-2xl text-primary mb-2">फ्रँचायझी योजना</span>
            Franchise Opportunities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join our growing family of successful franchise partners. Choose the plan that best fits your investment
            capacity and business goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg">
                  <Calculator className="w-4 h-4 mr-2" />
                  ROI Calculator
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Calculate Your ROI</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleCalculatorSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label>Investment Amount</Label>
                    <Input
                      placeholder="₹4,50,000"
                      value={calculatorData.investment}
                      onChange={(e) => setCalculatorData({ ...calculatorData, investment: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Location Type</Label>
                    <Input
                      placeholder="Commercial/Residential"
                      value={calculatorData.location}
                      onChange={(e) => setCalculatorData({ ...calculatorData, location: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Expected Daily Sales</Label>
                    <Input
                      placeholder="₹15,000"
                      value={calculatorData.expectedSales}
                      onChange={(e) => setCalculatorData({ ...calculatorData, expectedSales: e.target.value })}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Calculate ROI
                  </Button>
                </form>
              </DialogContent>
            </Dialog>

            <Button size="lg">
              <Download className="w-4 h-4 mr-2" />
              Download Brochure
            </Button>
          </div>
        </div>

        {/* Franchise Plans */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card
              key={plan.id}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                plan.popular ? "ring-2 ring-primary shadow-lg scale-105" : ""
              }`}
            >
              {plan.popular && (
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">Most Popular</Badge>
              )}

              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <plan.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-serif">
                  <span className="block">{plan.name}</span>
                  <span className="block text-lg font-display text-primary">{plan.nameMr}</span>
                </CardTitle>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-accent">{plan.price}</div>
                  <p className="text-sm text-muted-foreground">One-time Investment</p>
                  <p className="text-xs text-muted-foreground">+ {plan.monthlyFee}/month royalty</p>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-4 text-xs">
                  <div className="bg-muted/50 rounded p-2">
                    <div className="font-medium text-foreground">ROI Timeline</div>
                    <div className="text-primary">{plan.roi}</div>
                  </div>
                  <div className="bg-muted/50 rounded p-2">
                    <div className="font-medium text-foreground">Area Required</div>
                    <div className="text-primary">{plan.areaRequired}</div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div className="space-y-1">
                        <span className="text-sm text-foreground">{feature}</span>
                        <div className="text-xs text-primary font-display">{plan.featuresMr[featureIndex]}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-foreground">Key Benefits:</h4>
                  <div className="flex flex-wrap gap-1">
                    {plan.benefits.map((benefit, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className={`w-full ${plan.popular ? "bg-primary hover:bg-primary/90" : ""}`}
                        variant={plan.popular ? "default" : "outline"}
                        size="lg"
                        onClick={() => setSelectedPlan(plan.id)}
                      >
                        Get Started
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle>Franchise Enquiry - {plan.name} Plan</DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleEnquirySubmit} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Full Name</Label>
                            <Input
                              required
                              value={enquiryForm.name}
                              onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Phone Number</Label>
                            <Input
                              type="tel"
                              required
                              value={enquiryForm.phone}
                              onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Email Address</Label>
                          <Input
                            type="email"
                            required
                            value={enquiryForm.email}
                            onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>City</Label>
                            <Input
                              required
                              value={enquiryForm.city}
                              onChange={(e) => setEnquiryForm({ ...enquiryForm, city: e.target.value })}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Business Experience</Label>
                            <Input
                              placeholder="Years"
                              value={enquiryForm.experience}
                              onChange={(e) => setEnquiryForm({ ...enquiryForm, experience: e.target.value })}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Investment Capacity</Label>
                          <Input
                            placeholder="₹4,50,000"
                            value={enquiryForm.investment}
                            onChange={(e) => setEnquiryForm({ ...enquiryForm, investment: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Message</Label>
                          <Textarea
                            placeholder="Tell us about your requirements..."
                            value={enquiryForm.message}
                            onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                          />
                        </div>
                        <Button type="submit" className="w-full">
                          Submit Enquiry
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>

                  <Button variant="ghost" size="sm" className="w-full text-xs">
                    <FileText className="w-3 h-3 mr-1" />
                    View Detailed Plan
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stories */}
        <div className="mt-16 bg-card rounded-lg p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            <span className="block">Why Choose Our Franchise?</span>
            <span className="block text-base font-display text-primary">आमचे फ्रँचायझी का निवडावे?</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Successful Outlets</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-muted-foreground">Partner Satisfaction</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Business Support</div>
            </div>
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary">ROI</div>
              <div className="text-sm text-muted-foreground">Within 18 Months</div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center space-y-6">
          <p className="text-muted-foreground">
            Ready to start your tea business journey? Contact us for a detailed discussion about franchise
            opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8">
              <Phone className="w-4 h-4 mr-2" />
              Schedule a Meeting
            </Button>
            <Button variant="outline" size="lg" className="px-8 bg-transparent">
              <Mail className="w-4 h-4 mr-2" />
              Email Us
            </Button>
          </div>

          {/* Quick Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>franchise@shreemadhur.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Mumbai, Maharashtra</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
