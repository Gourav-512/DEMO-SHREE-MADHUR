import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Playfair_Display, Baloo_2, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import WhatsAppButton from "@/components/ui/whatsapp-button";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
})

const baloo2 = Baloo_2({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-baloo-2",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Shree Madhur Amruttulya - Premium Tea & Franchise",
  description: "श्री मधुर चहा - A Cup of Tradition. A Sip of Warmth. Premium tea brand with franchise opportunities.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${playfairDisplay.variable} ${baloo2.variable} ${poppins.variable}`}
      >
        {/* ✅ फक्त एकदाच children render */}
        <Suspense fallback={null}>{children}</Suspense>
        
        {/* Analytics + Floating WhatsApp Button */}
        <Analytics />
        <WhatsAppButton />
      </body>
    </html>
  )
}
