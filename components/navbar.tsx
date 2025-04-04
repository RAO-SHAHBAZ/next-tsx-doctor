"use client";

import { Clock, Phone, MapPin, Menu, ChevronDown, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image"; // Import the Image component

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");

  const menuItems = ["Home", "About us", "Our Staff", "Blogs", "Feedback", "FAQ's", "Services", "Contact us"];
  const serviceItems = ["Dentist", "Therapist", "Neurologist"];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!(event.target).closest(".dropdown")) {
        setDropdownOpen(false);
        setMobileDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      {/* Contact Info Section */}
      <div className="w-full border-b border-gray-300 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center py-2">
          {/* Logo */}
          <a href="/" className="hidden md:block">
            <Image
              src="/City-Dental-Care.svg" // Path relative to the `public` folder
              alt="City Dental Care"
              width={120} // Specify width
              height={40} // Specify height (adjust based on your SVG's aspect ratio)
            />
          </a>

          {/* Contact Details */}
          <div className="flex flex-wrap md:flex-row gap-4 md:gap-6 mt-4 md:mt-0">
            {[
              {
                icon: <Clock className="text-white h-3 w-3 md:h-5 md:w-5" />,
                label: "Opening Time",
                value: "Mon - Fri 8AM - 7PM",
              },
              { icon: <Phone className="text-white h-3 w-3 md:h-5 md:w-5" />, label: "Phone", value: "01312282442" },
              {
                icon: <MapPin className="text-white h-5 w-5" />,
                label: "Location",
                value: "9 Earl Grey St ,United Kingdom",
                hidden: true,
              },
            ].map((item, index) => (
              <div key={index} className={`flex items-center gap-2 ${item.hidden ? "hidden md:flex" : ""}`}>
                <div className="bg-[#1d5c5c] p-2 rounded">{item.icon}</div>
                <div>
                  <span className="text-[14px] text-gray-500">{item.label}</span> <br />
                  <span className="text-[16px] md:text-sm">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="w-full py-2 sticky top-0 z-50 bg-[#f5f5f5] shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          {/* Logo (Visible on Mobile) */}
          <a href="/" className="md:hidden">
            <Image
              src="/City-Dental-Care.svg" // Path relative to the `public` folder
              alt="City Dental Care"
              width={80} // Specify width
              height={30} // Specify height (adjust based on your SVG's aspect ratio)
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 relative">
            {menuItems.map((item) =>
              item === "Services" ? (
                <div key={item} className="relative dropdown">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`text-[15px] font-medium flex items-center gap-1 pb-1 border-b-2 ${
                      activeMenu === item ? "border-[#40E0D0]" : "border-transparent"
                    } hover:border-[#40E0D0]`}
                  >
                    {item}
                    <ChevronDown
                      className={`h-4 w-4 text-gray-600 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                      {serviceItems.map((service) => (
                        <a
                          key={service}
                          href={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {service}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item}
                  href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                  className={`text-[15px] font-medium pb-1 border-b-2 ${
                    activeMenu === item ? "border-[#40E0D0]" : "border-transparent"
                  } hover:border-[#40E0D0]`}
                  onClick={() => setActiveMenu(item)}
                >
                  {item}
                </a>
              )
            )}
          </nav>

          {/* Appointment Button (Desktop Only) */}
          <a href="#" className="hidden md:block bg-[#1d5c5c] text-white px-4 py-3 text-sm uppercase text-center">
            GET APPOINTMENT
          </a>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-8 w-8 text-[#1d5c5c]" /> : <Menu className="h-8 w-8 text-[#1d5c5c]" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-60 transition-opacity ${
            mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        ></div>

        <div
          className={`fixed top-0 right-0 w-3/4 h-full bg-white transform transition-transform ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } shadow-lg z-50 p-6`}
        >
          {/* Close Button */}
          <button className="absolute top-4 right-4" onClick={() => setMobileMenuOpen(false)}>
            <X className="h-8 w-8 text-[#1d5c5c]" />
          </button>

          {/* Mobile Menu Items */}
          <nav className="mt-10 space-y-6">
            {menuItems.map((item) =>
              item === "Services" ? (
                <div key={item} className="relative">
                  <button
                    className="w-full text-left text-lg font-medium flex justify-between items-center hover:text-[#1d5c5c]"
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  >
                    {item} <ChevronDown className={`h-6 w-6 ${mobileDropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  {mobileDropdownOpen && (
                    <div className="mt-2 bg-gray-100 shadow-md rounded-md p-2">
                      {serviceItems.map((service) => (
                        <a
                          key={service}
                          href={`/services/${service.toLowerCase()}`}
                          className="block p-2 hover:bg-gray-200"
                        >
                          {service}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="block text-lg font-medium hover:text-[#1d5c5c]"
                >
                  {item}
                </a>
              )
            )}
          </nav>
        </div>
      </div>
    </>
  );
}