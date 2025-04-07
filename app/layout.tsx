import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata = {
  title: "City Dental Care - Edinburgh's Top Dental Clinic",
  description:
    "City Dental Care in Edinburgh offers high-quality dental services including Invisalign, teeth whitening, and smile makeovers.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Navbar/>
          {children}
                <Footer/>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'


