"use client"

import type React from "react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  QrCode,
  Share2,
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
  CreditCard,
  Smartphone,
  Wallet,
  Copy,
  ExternalLink,
  Calendar,
} from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    subject: "",
    preferredContact: "phone",
    businessType: "",
    location: "",
    urgency: "normal",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const paymentMethods = [
    {
      name: "Google Pay",
      upiId: "shreemadhur@gpay",
      qrCode: "/placeholder.svg?key=gpay-qr",
      color: "bg-blue-600",
      icon: "📱",
    },
    {
      name: "PhonePe",
      upiId: "shreemadhur@ybl",
      qrCode: "/placeholder.svg?key=phonepe-qr",
      color: "bg-purple-600",
      icon: "💜",
    },
    {
      name: "Paytm",
      upiId: "shreemadhur@paytm",
      qrCode: "/placeholder.svg?key=paytm-qr",
      color: "bg-blue-500",
      icon: "💙",
    },
    {
      name: "UPI",
      upiId: "shreemadhur@upi",
      qrCode: "/placeholder.svg?key=upi-qr",
      color: "bg-orange-600",
      icon: "🏦",
    },
  ]

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    if (!formData.message.trim()) newErrors.message = "Message is required"

    // Phone validation
    const phoneRegex = /^[+]?[1-9][\d]{9,14}$/
    if (formData.phone && !phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number"
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Handle form submission
      console.log("Form submitted:", formData)

      setSubmitStatus("success")
      // Reset form after successful submission
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        subject: "",
        preferredContact: "phone",
        businessType: "",
        location: "",
        urgency: "normal",
      })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello! I am interested in Shree Madhur Amruttulya franchise/products. Please provide more information.",
    )
    window.open(`https://wa.me/919876543210?text=${message}`, "_blank")
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground text-balance">
            <span className="block font-display text-2xl text-primary mb-2">संपर्क साधा</span>
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ready to start your tea business journey or have questions about our products? We're here to help you every
            step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Enhanced Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-serif">
                <span className="block">Send us a Message</span>
                <span className="block text-base font-display text-primary">आम्हाला संदेश पाठवा</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject / विषय</Label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                  >
                    <option value="">Select a subject</option>
                    <option value="franchise">Franchise Enquiry</option>
                    <option value="products">Product Information</option>
                    <option value="bulk-order">Bulk Order</option>
                    <option value="support">Customer Support</option>
                    <option value="partnership">Business Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name / नाव *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className={errors.name ? "border-red-500" : ""}
                      required
                    />
                    {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone / फोन *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 98765 43210"
                      className={errors.phone ? "border-red-500" : ""}
                      required
                    />
                    {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email / ईमेल *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className={errors.email ? "border-red-500" : ""}
                    required
                  />
                  {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location / स्थान</Label>
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="City, State"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="businessType">Business Type / व्यवसाय प्रकार</Label>
                    <select
                      id="businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                    >
                      <option value="">Select type</option>
                      <option value="new-franchise">New Franchise</option>
                      <option value="existing-business">Existing Business</option>
                      <option value="individual">Individual Customer</option>
                      <option value="corporate">Corporate</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message / संदेश *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your requirements or questions..."
                    rows={4}
                    className={errors.message ? "border-red-500" : ""}
                    required
                  />
                  {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label>Preferred Contact Method / पसंतीचा संपर्क माध्यम</Label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === "phone"}
                        onChange={handleInputChange}
                        className="text-primary"
                      />
                      <span className="text-sm">Phone</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === "email"}
                        onChange={handleInputChange}
                        className="text-primary"
                      />
                      <span className="text-sm">Email</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="whatsapp"
                        checked={formData.preferredContact === "whatsapp"}
                        onChange={handleInputChange}
                        className="text-primary"
                      />
                      <span className="text-sm">WhatsApp</span>
                    </label>
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                {submitStatus === "success" && (
                  <div className="flex items-center gap-2 text-green-600 bg-green-50 p-3 rounded-md">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm">Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-md">
                    <AlertCircle className="w-5 h-5" />
                    <span className="text-sm">Failed to send message. Please try again or contact us directly.</span>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Enhanced Payment */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-serif">
                  <span className="block">Contact Information</span>
                  <span className="block text-base font-display text-primary">संपर्क माहिती</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div className="flex-1">
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-sm text-muted-foreground">
                      Shop No. 15, Tea Plaza, MG Road
                      <br />
                      Mumbai, Maharashtra 400001
                    </p>
                    <Button variant="ghost" size="sm" className="mt-1 p-0 h-auto text-primary">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      View on Map
                    </Button>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div className="flex-1">
                    <p className="font-medium text-foreground">Phone</p>
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-muted-foreground">+91 98765 43210</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-1 h-auto"
                        onClick={() => copyToClipboard("+919876543210")}
                      >
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div className="flex-1">
                    <p className="font-medium text-foreground">Email</p>
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-muted-foreground">info@shreemadhur.com</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-1 h-auto"
                        onClick={() => copyToClipboard("info@shreemadhur.com")}
                      >
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Business Hours</p>
                    <p className="text-sm text-muted-foreground">
                      Mon - Sun: 6:00 AM - 11:00 PM
                      <br />
                      Always Fresh, Always Open
                    </p>
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <Button onClick={openWhatsApp} className="w-full bg-green-600 hover:bg-green-700" size="sm">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </Button>

                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm">
                      <Phone className="w-4 h-4 mr-1" />
                      Call Now
                    </Button>
                    <Button variant="outline" size="sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      Book Meeting
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Payment Methods */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-serif">
                  <span className="block">Payment Methods</span>
                  <span className="block text-base font-display text-primary">पेमेंट पद्धती</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {paymentMethods.map((method, index) => (
                    <Dialog key={index}>
                      <DialogTrigger asChild>
                        <Card className="cursor-pointer hover:shadow-md transition-shadow">
                          <CardContent className="p-4 text-center space-y-2">
                            <div
                              className={`w-12 h-12 ${method.color} rounded-lg flex items-center justify-center mx-auto text-white text-xl`}
                            >
                              {method.icon}
                            </div>
                            <p className="text-sm font-medium">{method.name}</p>
                            <p className="text-xs text-muted-foreground">Tap to view QR</p>
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="max-w-sm">
                        <DialogHeader>
                          <DialogTitle className="text-center">{method.name} Payment</DialogTitle>
                        </DialogHeader>
                        <div className="text-center space-y-4">
                          <div className="w-48 h-48 bg-muted rounded-lg flex items-center justify-center mx-auto">
                            <QrCode className="w-24 h-24 text-muted-foreground" />
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm font-medium">UPI ID:</p>
                            <div className="flex items-center justify-center gap-2">
                              <code className="text-sm bg-muted px-2 py-1 rounded">{method.upiId}</code>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="p-1 h-auto"
                                onClick={() => copyToClipboard(method.upiId)}
                              >
                                <Copy className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                          <p className="text-xs text-muted-foreground">Scan QR code or use UPI ID to make payment</p>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Accepted Payment Methods:</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      <CreditCard className="w-3 h-3 mr-1" />
                      Cards
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      <Smartphone className="w-3 h-3 mr-1" />
                      UPI
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      <Wallet className="w-3 h-3 mr-1" />
                      Wallets
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Net Banking
                    </Badge>
                  </div>

                  <div className="pt-4 space-y-3">
                    <Button variant="outline" className="w-full bg-transparent" size="sm">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share Payment Details
                    </Button>

                    <div className="flex justify-center space-x-4 text-sm">
                      <a href="#" className="text-primary hover:text-primary/80 flex items-center gap-1">
                        <ExternalLink className="w-3 h-3" />
                        Instagram
                      </a>
                      <a href="#" className="text-primary hover:text-primary/80 flex items-center gap-1">
                        <ExternalLink className="w-3 h-3" />
                        YouTube
                      </a>
                      <a href="#" className="text-primary hover:text-primary/80 flex items-center gap-1">
                        <ExternalLink className="w-3 h-3" />
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-serif">
                  <span className="block">Find Us</span>
                  <span className="block text-sm font-display text-primary">आम्हाला शोधा</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <MapPin className="w-8 h-8 text-muted-foreground mx-auto" />
                    <p className="text-sm text-muted-foreground">Interactive Map</p>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Open in Google Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
