import { Twitter, Instagram, Facebook, Mail, MapPin, Globe, Phone, ChevronRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#225555] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {/* Logo & Description */}
          <div>
            <a href="/" className="inline-block mb-6">
              <img src="/Footer-logoo.svg" alt="City Dental Care" className="h-auto w-[140px]" />
            </a>
            <p className="mb-6 leading-relaxed">
              At City Dental Clinic, our mission is to enhance your denture experience by providing excellent denture
              care.
            </p>
            <a href="#" className="flex font-semibold items-center text-sm uppercase hover:underline">
              MORE ABOUT <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          {/* Quick Links */}
          <div className="md:ml-[100px]">
            <h3 className="text-[30px] font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-center hover:underline transition">
                  <ChevronRight className="mr-2 h-4 w-4" /> Home
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:underline transition">
                  <ChevronRight className="mr-2 h-4 w-4" /> About
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:underline transition">
                  <ChevronRight className="mr-2 h-4 w-4" /> Services
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:underline transition">
                  <ChevronRight className="mr-2 h-4 w-4" /> For Patients
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:underline transition">
                  <ChevronRight className="mr-2 h-4 w-4" /> Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-[30px] font-semibold mb-6">Working Time</h3>
            <ul className="space-y-4">
              <li>Monday-Friday: 8AM-8PM</li>
              <li>Saturday: 9AM-6PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[30px] font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>
                  9 Earl Grey St, <br /> Edinburgh EH3 9BN, United Kingdom
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>info@citydentalcare.co.uk</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>01312282442</span>
              </li>
              <li className="flex items-center space-x-2">
                <Globe className="h-5 w-5" />
                <span>https://citydentalcare.co.uk/</span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-[#316161] bg-opacity-70 hover:bg-opacity-100 transition"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-[#316161] bg-opacity-70 hover:bg-opacity-100 transition"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full bg-[#316161] bg-opacity-70 hover:bg-opacity-100 transition"
              >
                <Instagram className="h-4 w-4" />
              </a>
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

