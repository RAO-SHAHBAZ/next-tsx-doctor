import { Twitter, Instagram, Facebook, Mail, MapPin, Globe, Phone, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#225555] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <img src="/Footer-logoo.svg" alt="City Dental Care" className="h-auto w-[140px]" />
            </Link>
            <p className="mb-6 leading-relaxed">
              At City Dental Clinic, our mission is to enhance your denture experience by providing excellent denture
              care.
            </p>
            <Link href="/" className="flex font-semibold items-center text-sm uppercase hover:underline">
              MORE ABOUT <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="md:ml-[100px]">
            <h3 className="text-[22px] font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="flex items-center hover:underline transition">
                  <ChevronRight className="mr-2 h-4 w-4" /> Home
                </Link>
              </li>
              <li>
                <Link href="about-us" className="flex items-center hover:underline transition">
                  <ChevronRight className="mr-2 h-4 w-4" /> About
                </Link>
              </li>
              <li>
                <Link href="/all-services" className="flex items-center hover:underline transition">
                  <ChevronRight className="mr-2 h-4 w-4" /> Services
                </Link>
              </li>
              <li>
                <Link href="patient-feedback" className="flex items-center hover:underline transition">
                  <ChevronRight className="mr-2 h-4 w-4" /> For Patients
                </Link>
              </li>
              <li>
                <Link href="contact-us" className="flex items-center hover:underline transition">
                  <ChevronRight className="mr-2 h-4 w-4" /> Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:ml-[20px]">
            <h3 className="text-[22px] font-semibold mb-6">Policy Pages</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy-policy" className="flex items-center hover:underline transition">
                  <ChevronRight className="mr-2 h-4 w-4" /> Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-&-conditions" className="flex items-center hover:underline transition">
                  <ChevronRight className="mr-2 h-4 w-4" /> Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/returns-&-refunds-policy" className="flex items-center hover:underline transition">
                  <ChevronRight className="mr-2 h-4 w-4" /> Return And Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/feedback-&-complaints" className="flex items-center hover:underline transition">
                  <ChevronRight className="mr-2 h-4 w-4" /> Feedback & Complaints
                </Link>
              </li>
            </ul>
          </div>


          {/* Contact Info */}
          <div>
            <h3 className="text-[22px] font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span className="hover:underline">
                  <Link href="https://maps.app.goo.gl/wtqznxrT44FBifxQ6">
                  9 Earl Grey St, <br /> Edinburgh EH3 9BN, United Kingdom</Link>
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span className="hover:underline"><Link href= "mailto:info@citydentalcare.co.uk">info@citydentalcare.co.uk</Link></span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <Link className="hover:underline" href="tel:+921312282442">
                <span>01312282442</span>
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <Globe className="h-5 w-5" />
                <span className="hover:underline"> 
                  https://citydentalcare.co.uk/</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <Link
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-[#316161] bg-opacity-70 hover:bg-opacity-100 transition"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-[#316161] bg-opacity-70 hover:bg-opacity-100 transition"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-[#316161] bg-opacity-70 hover:bg-opacity-100 transition"
              >
                <Instagram className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#173C3C] py-4 text-center text-[12px]">
        <div className="container mx-auto px-4">
          <span className="text-[16px]">
            Copyright © 2025 Theme. All rights reserved. Powered by City Dental Clinic.
          </span>
        </div>
      </div>
    </footer>
  )
}

