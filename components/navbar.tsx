"use client";

import { Clock, Phone, MapPin, Menu, ChevronDown, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Home");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".dropdown")) {
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
              src="/City-Dental-Care.svg"
              alt="City Dental Care"
              width={120}
              height={40}
            />
          </a>

          {/* Contact Details */}
          <div className="flex flex-wrap md:flex-row gap-4 md:gap-6 mt-4 md:mt-0">
            <div className="flex items-center gap-2">
              <div className="bg-[#1d5c5c] p-2 rounded">
                <Clock className="text-white h-3 w-3 md:h-5 md:w-5" />
              </div>
              <div>
                <span className="text-[14px] text-gray-500">Opening Time</span>
                <br />
                <span className="text-[16px] md:text-sm">
                  Mon - Fri 8AM - 7PM
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-[#1d5c5c] p-2 rounded">
                <Phone className="text-white h-3 w-3 md:h-5 md:w-5" />
              </div>
              <div>
                <span className="text-[14px] text-gray-500">Phone</span>
                <br />
                <span className="text-[16px] md:text-sm">01312282442</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-2">
              <div className="bg-[#1d5c5c] p-2 rounded">
                <MapPin className="text-white h-5 w-5" />
              </div>
              <div>
                <span className="text-[14px] text-gray-500">Location</span>
                <br />
                <span className="text-[16px] md:text-sm">
                  9 Earl Grey St ,United Kingdom
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <div className="w-full py-2 sticky top-0 z-50 bg-[#f5f5f5] shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center py-4">
          {/* Mobile Logo */}
          <a href="/" className="md:hidden">
            <Image
              src="/City-Dental-Care.svg"
              alt="City Dental Care"
              width={80}
              height={30}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 relative">
            <a
              href="/home"
              onClick={() => setActiveMenu("Home")}
              className={`text-[15px] font-medium pb-1 border-b-2 ${
                activeMenu === "Home" ? "border-[#40E0D0]" : "border-transparent"
              } hover:border-[#40E0D0]`}
            >
              Home
            </a>

            <a
              href="/aboutus"
              onClick={() => setActiveMenu("About us")}
              className={`text-[15px] font-medium pb-1 border-b-2 ${
                activeMenu === "About us"
                  ? "border-[#40E0D0]"
                  : "border-transparent"
              } hover:border-[#40E0D0]`}
            >
              About us
            </a>

            <a
              href="/cosmeticdentistry"
              onClick={() => setActiveMenu("Cosmetic Dentistry")}
              className={`text-[15px] font-medium pb-1 border-b-2 ${
                activeMenu === "Cosmetic Dentistry"
                  ? "border-[#40E0D0]"
                  : "border-transparent"
              } hover:border-[#40E0D0]`}
            >
              Cosmetic Dentistry
            </a>

            <a
              href="/generaldentistry"
              onClick={() => setActiveMenu("General Dentistry")}
              className={`text-[15px] font-medium pb-1 border-b-2 ${
                activeMenu === "General Dentistry"
                  ? "border-[#40E0D0]"
                  : "border-transparent"
              } hover:border-[#40E0D0]`}
            >
              General Dentistry
            </a>

            <a
              href="/invisalign"
              onClick={() => setActiveMenu("Invisalign")}
              className={`text-[15px] font-medium pb-1 border-b-2 ${
                activeMenu === "Invisalign"
                  ? "border-[#40E0D0]"
                  : "border-transparent"
              } hover:border-[#40E0D0]`}
            >
              Invisalign
            </a>

            <a
              href="/patientsfeedback"
              onClick={() => setActiveMenu("Patients Feedback")}
              className={`text-[15px] font-medium pb-1 border-b-2 ${
                activeMenu === "Patients Feedback"
                  ? "border-[#40E0D0]"
                  : "border-transparent"
              } hover:border-[#40E0D0]`}
            >
              Patients Feedback
            </a>

            {/* Dropdown */}
            <div className="relative dropdown">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`text-[15px] font-medium flex items-center gap-1 pb-1 border-b-2 ${
                  activeMenu === "Services"
                    ? "border-[#40E0D0]"
                    : "border-transparent"
                } hover:border-[#40E0D0]`}
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 text-gray-600 transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                  <a
                    href="/services/dentist"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Dentist
                  </a>
                  <a
                    href="/services/therapist"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Therapist
                  </a>
                  <a
                    href="/services/neurologist"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Neurologist
                  </a>
                </div>
              )}
            </div>

            <a
              href="/contactus"
              onClick={() => setActiveMenu("Contact us")}
              className={`text-[15px] font-medium pb-1 border-b-2 ${
                activeMenu === "Contact us"
                  ? "border-[#40E0D0]"
                  : "border-transparent"
              } hover:border-[#40E0D0]`}
            >
              Contact us
            </a>
          </nav>

          {/* Desktop Appointment Button */}
          <a
            href="#"
            className="hidden md:block bg-[#1d5c5c] text-white px-4 py-3 text-sm uppercase text-center"
          >
            GET APPOINTMENT
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-8 w-8 text-[#1d5c5c]" />
            ) : (
              <Menu className="h-8 w-8 text-[#1d5c5c]" />
            )}
          </button>
        </div>

        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-60 transition-opacity ${
            mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        ></div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 w-3/4 h-full bg-white transform transition-transform ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } shadow-lg z-50 p-6`}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="h-8 w-8 text-[#1d5c5c]" />
          </button>

          {/* Mobile Menu Items */}
          <nav className="mt-10 space-y-6">
            <a href="/home" className="block text-lg font-medium hover:text-[#1d5c5c]">
              Home
            </a>
            <a href="/aboutus" className="block text-lg font-medium hover:text-[#1d5c5c]">
              About us
            </a>
            <a href="/cosmeticdentistry" className="block text-lg font-medium hover:text-[#1d5c5c]">
              Cosmetic Dentistry
            </a>
            <a href="/generaldentistry" className="block text-lg font-medium hover:text-[#1d5c5c]">
              General Dentistry
            </a>
            <a href="/invisalign" className="block text-lg font-medium hover:text-[#1d5c5c]">
              Invisalign
            </a>
            <a href="/patientsfeedback" className="block text-lg font-medium hover:text-[#1d5c5c]">
              Patients Feedback
            </a>

            {/* Mobile Dropdown */}
            <div className="relative">
              <button
                className="w-full text-left text-lg font-medium flex justify-between items-center hover:text-[#1d5c5c]"
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              >
                Services <ChevronDown className={`h-6 w-6 ${mobileDropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileDropdownOpen && (
                <div className="mt-2 bg-gray-100 shadow-md rounded-md p-2">
                  <a href="/services/dentist" className="block p-2 hover:bg-gray-200">
                    Dentist
                  </a>
                  <a href="/services/therapist" className="block p-2 hover:bg-gray-200">
                    Therapist
                  </a>
                  <a href="/services/neurologist" className="block p-2 hover:bg-gray-200">
                    Neurologist
                  </a>
                </div>
              )}
            </div>

            <a href="/contactus" className="block text-lg font-medium hover:text-[#1d5c5c]">
              Contact us
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
