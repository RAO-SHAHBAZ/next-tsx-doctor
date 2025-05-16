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
           {/* Fixed Get Appointment Sidebar */}
      <div className="fixed right-5 top-[40%] transform -translate-y-1/2 z-50 hidden md:block">
        <Link href='https://citydentalcare.portal.dental/' target="_blank" className="bg-[#37FFDB] text-[#1D5C5C] flex flex-wrap font-bold py-5 px-8 rounded rotate-[-90deg] origin-right whitespace-nowrap">
          <CalendarCheck className="w-8 h-6" />
          <span className="ml-2">GET APPOINTMENT</span>
        </Link>
      </div>

      {/* Mobile Get Appointment Sidebar */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 md:hidden">
        <div className="bg-[#37FFDB] py-3 px-3 rounded rotate-[-90deg] origin-right whitespace-nowrap">
          <Link href='https://citydentalcare.portal.dental/ ' target="_blank">
          <CalendarCheck className="text-[#1D5C5C]"  /></Link>
        </div>
      </div>
                <Footer/>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
import Link from "next/link"
import { CalendarCheck, Clock1 } from "lucide-react"


