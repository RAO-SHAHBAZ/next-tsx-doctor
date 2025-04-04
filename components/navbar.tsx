"use client";

import { Clock, Phone, MapPin, Menu, ChevronDown, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({
    aboutUs: false,
    cosmeticDentistry: false,
    generalDentistry: false,
    patientFeedback: false,
  });
  const [activeMenu, setActiveMenu] = useState("Home");

  // Handle click outside to close the dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".dropdown")) {
        setMobileDropdownOpen((prev) => ({
          ...prev,
          aboutUs: false,
          cosmeticDentistry: false,
          generalDentistry: false,
          patientFeedback: false,
        }));
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleDropdown = (menu: string) => {
    setMobileDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <>
      {/* Contact Info Section */}
      <div className="w-full border-b border-gray-300 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center py-4">
          <Link href="/" className="hidden md:block">
            <Image
              src="/City-Dental-Care.svg"
              alt="City Dental Care"
              width={120}
              height={40}
            />
          </Link>
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
      <div className="w-full py-3 sticky top-0 z-50 bg-[#f5f5f5] shadow-md">
        <div className="container mx-auto px-4 py-4">
          {/* Mobile Logo and Menu Button */}
          <div className="flex items-center justify-between md:hidden">
            <Link href="/">
              <Image
                src="/City-Dental-Care.svg"
                alt="City Dental Care"
                width={80}
                height={30}
              />
            </Link>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <X className="h-8 w-8 text-[#1d5c5c]" />
              ) : (
                <Menu className="h-8 w-8 text-[#1d5c5c]" />
              )}
            </button>
          </div>

          {/* Desktop Navigation and Button */}
          <div className="hidden md:flex w-full items-center justify-between">
            <nav className="flex items-center space-x-8 relative">
              {/* Home */}
              <Link
                href="/"
                onClick={() => setActiveMenu("Home")}
                className={`text-[15px] font-medium pb-1 border-b-2 ${
                  activeMenu === "Home" ? "border-[#40E0D0]" : "border-transparent"
                } hover:border-[#40E0D0]`}
              >
                Home
              </Link>

              {/* About Us Dropdown */}
              <div className="relative dropdown group">
                <div className="flex items-center gap-1">
                  <Link
                    href="/about-us"
                    onClick={() => setActiveMenu("About Us")}
                    className={`text-[15px] font-medium pb-1 border-b-2 ${
                      activeMenu === "About Us"
                        ? "border-[#40E0D0]"
                        : "border-transparent"
                    } hover:border-[#40E0D0]`}
                  >
                    About Us
                  </Link>
                  <ChevronDown className="h-4 w-4 text-gray-600 transition-transform" />
                </div>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 hidden group-hover:block">
                  <Link
                    href="/staff"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Staff
                  </Link>
                  <Link
                    href="/blogs"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Blogs
                  </Link>
                  <Link
                    href="/aboutus/pricing"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white"
                  >
                    Pricing
                  </Link>
                </div>
              </div>

              {/* Cosmetic Dentistry Dropdown */}
              <div className="relative dropdown group">
                <div className="flex items-center gap-1">
                  <Link
                    href="/cosmetic-dentistry"
                    onClick={() => setActiveMenu("Cosmetic Dentistry")}
                    className={`text-[15px] font-medium pb-1 border-b-2 ${
                      activeMenu === "Cosmetic Dentistry"
                        ? "border-[#40E0D0]"
                        : "border-transparent"
                    } hover:border-[#40E0D0]`}
                  >
                    Cosmetic Dentistry
                  </Link>
                  <ChevronDown className="h-4 w-4 text-gray-600 transition-transform" />
                </div>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 hidden group-hover:block">
                  <Link
                    href="/cosmeticdentistry/compositebonding"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Composite Bonding
                  </Link>
                  <Link
                    href="/cosmeticdentistry/porcelainveneers"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Porcelain Veneers
                  </Link>
                  <Link
                    href="/cosmeticdentistry/bespokesmiledesign"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Bespoke Smile Design
                  </Link>
                  <Link
                    href="/cosmeticdentistry/cosmeticorthodontics"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Cosmetic Orthodontics
                  </Link>
                  <Link
                    href="/cosmeticdentistry/teethwhitening"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Teeth Whitening
                  </Link>
                  <Link
                    href="/cosmeticdentistry/stainremoval"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Stain Removal
                  </Link>
                  <Link
                    href="/cosmeticdentistry/facialaesthetics"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Facial Aesthetics
                  </Link>
                  <Link
                    href="/cosmeticdentistry/dermalfillers"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Dermal Fillers
                  </Link>
                  <Link
                    href="/cosmeticdentistry/invisiblefilling"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white"
                  >
                    Invisible Filling
                  </Link>
                </div>
              </div>

              {/* General Dentistry Dropdown */}
              <div className="relative dropdown group">
                <div className="flex items-center gap-1">
                  <Link
                    href="/general-dentistry"
                    onClick={() => setActiveMenu("General Dentistry")}
                    className={`text-[15px] font-medium pb-1 border-b-2 ${
                      activeMenu === "General Dentistry"
                        ? "border-[#40E0D0]"
                        : "border-transparent"
                    } hover:border-[#40E0D0]`}
                  >
                    General Dentistry
                  </Link>
                  <ChevronDown className="h-4 w-4 text-gray-600 transition-transform" />
                </div>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 hidden group-hover:block">
                  <Link
                    href="/generaldentistry/dentalconsultation"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Dental Consultation
                  </Link>
                  <Link
                    href="/generaldentistry/samedayemergencyappointments"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Same-Day Emergency Appointments
                  </Link>
                  <Link
                    href="/generaldentistry/hygieneservices"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Hygiene Services
                  </Link>
                  <Link
                    href="/generaldentistry/implantconsultations"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Implant Consultations
                  </Link>
                  <Link
                    href="/generaldentistry/wisdomtoothremoval"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Wisdom Tooth Removal
                  </Link>
                  <Link
                    href="/generaldentistry/childsmile"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Child Smile
                  </Link>
                  <Link
                    href="/generaldentistry/orthodontics"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Orthodontics
                  </Link>
                  <Link
                    href="/generaldentistry/endodonticrootcanals"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Endodontic Root Canals
                  </Link>
                  <Link
                    href="/generaldentistry/dentalbridges"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white"
                  >
                    Dental Bridges
                  </Link>
                </div>
              </div>

              {/* Invisalign */}
              <Link
                href="/invisalign"
                onClick={() => setActiveMenu("Invisalign")}
                className={`text-[15px] font-medium pb-1 border-b-2 ${
                  activeMenu === "Invisalign" ? "border-[#40E0D0]" : "border-transparent"
                } hover:border-[#40E0D0]`}
              >
                Invisalign
              </Link>

              {/* Patient Feedback Dropdown */}
              <div className="relative dropdown group">
                <div className="flex items-center gap-1">
                  <Link
                    href="/patient-feedback"
                    onClick={() => setActiveMenu("Patient Feedback")}
                    className={`text-[15px] font-medium pb-1 border-b-2 ${
                      activeMenu === "Patient Feedback"
                        ? "border-[#40E0D0]"
                        : "border-transparent"
                    } hover:border-[#40E0D0]`}
                  >
                    Patient Feedback
                  </Link>
                  <ChevronDown className="h-4 w-4 text-gray-600 transition-transform" />
                </div>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50 hidden group-hover:block">
                  <Link
                    href="/testimonials"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Testimonials
                  </Link>
                  <Link
                    href="/patientfeedback/smilegallery"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white"
                  >
                    Smile Gallery
                  </Link>
                </div>
              </div>

              {/* Contact Us */}
              <Link
                href="/contact-us"
                onClick={() => setActiveMenu("Contact Us")}
                className={`text-[15px] font-medium pb-1 border-b-2 ${
                  activeMenu === "Contact Us" ? "border-[#40E0D0]" : "border-transparent"
                } hover:border-[#40E0D0]`}
              >
                Contact Us
              </Link>
            </nav>

            {/* Desktop Appointment Button */}
            <Link
              href="#"
              className="hidden md:block bg-[#1d5c5c] text-white px-4 py-3 text-sm uppercase text-center"
            >
              GET APPOINTMENT
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 w-3/4 h-full bg-white transform transition-transform ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } shadow-md md:hidden`}
        >
          <div className="p-4">
            <nav>
              {/* Home */}
              <Link
                href="/"
                onClick={() => {
                  setActiveMenu("Home");
                  setMobileMenuOpen(false);
                }}
                className="block py-3 text-lg font-medium"
              >
                Home
              </Link>

              {/* About Us */}
              <div className="dropdown">
                <div className="flex items-center justify-between w-full py-3">
                  <Link
                    href="/about-us"
                    onClick={() => {
                      setActiveMenu("About Us");
                      setMobileMenuOpen(false);
                    }}
                    className="text-lg font-medium"
                  >
                    About Us
                  </Link>
                  <button onClick={() => toggleDropdown("aboutUs")}>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-600 transition-transform ${
                        mobileDropdownOpen.aboutUs ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {mobileDropdownOpen.aboutUs && (
                  <div className="pl-4">
                    <Link
                      href="/staff"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                    >
                      Staff
                    </Link>
                    <Link
                      href="/blogs"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                    >
                      Blogs
                    </Link>
                    <Link
                      href="/aboutus/pricing"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white"
                    >
                      Pricing
                    </Link>
                  </div>
                )}
              </div>

              {/* Cosmetic Dentistry */}
              <div className="dropdown">
                <div className="flex items-center justify-between w-full py-3">
                  <Link
                    href="/cosmetic-dentistry"
                    onClick={() => {  
                      setActiveMenu("Cosmetic Dentistry");
                      setMobileMenuOpen(false);
                    }}
                    className="text-lg font-medium"
                  >
                    Cosmetic Dentistry
                  </Link>
                  <button onClick={() => toggleDropdown("cosmeticDentistry")}>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-600 transition-transform ${
                        mobileDropdownOpen.cosmeticDentistry ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {mobileDropdownOpen.cosmeticDentistry && (
                  <div className="pl-4">
                    <a
                      href="/cosmeticdentistry/compositebonding"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                    >
                      Composite Bonding
                    </a>
                    <a
                      href="/cosmeticdentistry/porcelainveneers"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                    >
                      Porcelain Veneers
                    </a>
                    <a
                      href="/cosmeticdentistry/bespokesmiledesign"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                    >
                      Bespoke Smile Design
                    </a>
                    <a
                      href="/cosmeticdentistry/cosmeticorthodontics"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                    >
                      Cosmetic Orthodontics
                    </a>
                    <a
                      href="/cosmeticdentistry/teethwhitening"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                    >
                      Teeth Whitening
                    </a>
                    <a
                      href="/cosmeticdentistry/stainremoval"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                    >
                      Stain Removal
                    </a>
                    <a
                      href="/cosmeticdentistry/facialaesthetics"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                    >
                      Facial Aesthetics
                    </a>
                    <a
                      href="/cosmeticdentistry/dermalfillers"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                    >
                      Dermal Fillers
                    </a>
                    <a
                      href="/cosmeticdentistry/invisiblefilling"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white"
                    >
                      Invisible Filling
                    </a>
                  </div>
                )}
              </div>

              {/* General Dentistry */}
              <div className="dropdown">
                <div className="flex items-center justify-between w-full py-3">
                  <a
                    href="/general-dentistry"
                    onClick={() => {
                      setActiveMenu("General Dentistry");
                      setMobileMenuOpen(false);
                    }}
                    className="text-lg font-medium"
                  >
                    General Dentistry
                  </a>
                  <button onClick={() => toggleDropdown("generalDentistry")}>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-600 transition-transform ${
                        mobileDropdownOpen.generalDentistry ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {mobileDropdownOpen.generalDentistry && (
                  <div className="pl-4">
                    <a
                      href="/generaldentistry/dentalconsultation"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                    >
                      Dental Consultation
                    </a>
                    <a
                      href="/generaldentistry/samedayemergencyappointments"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                    >
                      Same-Day Emergency Appointments
                    </a>
                    <a
                      href="/generaldentistry/hygieneservices"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                    >
                      Hygiene Services
                    </a>
                    <a
                      href="/generaldentistry/implantconsultations"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                    >
                      Implant Consultations
                    </a>
                    <a
                      href="/generaldentistry/wisdomtoothremoval"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                    >
                      Wisdom Tooth Removal
                    </a>
                    <a
                      href="/generaldentistry/childsmile"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                    >
                      Child Smile
                    </a>
                    <a
                      href="/generaldentistry/orthodontics"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                    >
                      Orthodontics
                    </a>
                    <a
                      href="/generaldentistry/endodonticrootcanals"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                    >
                      Endodontic Root Canals
                    </a>
                    <a
                      href="/generaldentistry/dentalbridges"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white"
                    >
                      Dental Bridges
                    </a>
                  </div>
                )}
              </div>

              {/* Invisalign */}
              <Link
                href="/invisalign"
                onClick={() => {
                  setActiveMenu("Invisalign");
                  setMobileMenuOpen(false);
                }}
                className="block py-3 text-lg font-medium"
              >
                Invisalign
              </Link>

              {/* Patient Feedback */}
              <div className="dropdown">
                <div className="flex items-center justify-between w-full py-3">
                  <a
                    href="/patient-feedback"
                    onClick={() => {
                      setActiveMenu("Patient Feedback");
                      setMobileMenuOpen(false);
                    }}
                    className="text-lg font-medium"
                  >
                    Patient Feedback
                  </a>
                  <button onClick={() => toggleDropdown("patientFeedback")}>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-600 transition-transform ${
                        mobileDropdownOpen.patientFeedback ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {mobileDropdownOpen.patientFeedback && (
                  <div className="pl-4">
                    <Link
                      href="/testimonials"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                    >
                      Testimonials
                    </Link>
                    <a
                      href="/patientfeedback/smilegallery"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white"
                    >
                      Smile Gallery
                    </a>
                  </div>
                )}
              </div>

              {/* Contact Us */}
              <a
                href="/contact-us"
                onClick={() => {
                  setActiveMenu("Contact Us");
                  setMobileMenuOpen(false);
                }}
                className="block py-3 text-lg font-medium"
              >
                Contact Us
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}