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

  // Handle click outside to close the dropdowns in mobile view
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

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Contact Info Section */}
      <div className="w-full border-b border-gray-300 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center py-4">
          <Link href="/" className="hidden lg:block">
            <Image
              src="/City-Dental-Care.svg"
              alt="City Dental Care"
              width={120}
              height={40}
              priority
            />
          </Link>
          <div className="flex flex-wrap lg:flex-row gap-4 md:gap-6 mt-4 md:mt-0">
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

            <div className="hidden lg:flex items-center gap-2">
              <div className="bg-[#1d5c5c] p-2 rounded">
                <MapPin className="text-white h-5 w-5" />
              </div>
              <div>
                <span className="text-[14px] text-gray-500">Location</span>
                <br />
                <span className="text-[16px] md:text-sm">
                  9 Earl Grey St, United Kingdom
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
          <div className="flex items-center justify-between lg:hidden">
            <Link href="/">
              <Image
                src="/City-Dental-Care.svg"
                alt="City Dental Care"
                width={80}
                height={30}
                priority
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
          <div className="hidden lg:flex w-full items-center justify-between">
            <nav className="flex items-center space-x-8 relative">
              {/* Home */}
              <div className="pb-3">
                <Link
                  href="/"
                  onClick={() => setActiveMenu("Home")}
                  className={`text-[15px] font-medium pb-1 border-b-2 ${
                    activeMenu === "Home"
                      ? "border-[#40E0D0]"
                      : "border-transparent"
                  } hover:border-[#40E0D0]`}
                >
                  Home
                </Link>
              </div>

              {/* About Us Dropdown */}
              <div className="relative dropdown group pb-2">
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
                <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-md z-50 hidden group-hover:block">
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
                    href="/about-us/pricing"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white"
                  >
                    Pricing
                  </Link>
                </div>
              </div>

              {/* Cosmetic Dentistry Dropdown */}
              <div className="relative dropdown group pb-2">
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
                <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-md z-50 hidden group-hover:block">
                  <Link
                    href="/cosmetic-dentistry/composite-bonding"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Composite Bonding
                  </Link>
                  <Link
                    href="/cosmetic-dentistry/porcelain-veneers"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Porcelain Veneers
                  </Link>
                  <Link
                    href="/cosmetic-dentistry/bespoke-smile-design"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Bespoke Smile Design
                  </Link>
                  <Link
                    href="/cosmetic-dentistry/cosmetic-orthodontics"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Cosmetic Orthodontics
                  </Link>
                  <Link
                    href="/cosmetic-dentistry/teeth-whitening"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Teeth Whitening
                  </Link>
                  <Link
                    href="/cosmetic-dentistry/stain-removal"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Stain Removal
                  </Link>
                  <Link
                    href="/cosmetic-dentistry/facial-aesthetics"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Facial Aesthetics
                  </Link>
                  <Link
                    href="/cosmetic-dentistry/dermal-fillers"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Dermal Fillers
                  </Link>
                  <Link
                    href="/cosmetic-dentistry/invisible-filling"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white"
                  >
                    Invisible Filling
                  </Link>
                </div>
              </div>

              {/* General Dentistry Dropdown */}
              <div className="relative dropdown group pb-2">
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
                <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-md z-50 hidden group-hover:block">
                  <Link
                    href="/dental-treatments"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Dental Consultation
                  </Link>
                  <Link
                    href="/general-dentistry/same-day-emergency-appointments"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Same-Day Emergency Appointments
                  </Link>
                  <Link
                    href="/general-dentistry/hygiene-services"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Hygiene Services
                  </Link>
                  <Link
                    href="/general-dentistry/implant-consultations"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Implant Consultations
                  </Link>
                  <Link
                    href="/general-dentistry/wisdom-tooth-removal"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Wisdom Tooth Removal
                  </Link>
                  <Link
                    href="/general-dentistry/child-smile"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Child Smile
                  </Link>
                  <Link
                    href="/general-dentistry/orthodontics"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Orthodontics
                  </Link>
                  <Link
                    href="/general-dentistry/endodontic-root-canals"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Endodontic Root Canals
                  </Link>
                  <Link
                    href="/general-dentistry/dental-bridges"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white"
                  >
                    Dental Bridges
                  </Link>
                </div>
              </div>

              {/* Invisalign */}
              <div className="pb-3">
                <Link
                  href="/invisalign"
                  onClick={() => setActiveMenu("Invisalign")}
                  className={`text-[15px] font-medium pb-1 border-b-2 ${
                    activeMenu === "Invisalign"
                      ? "border-[#40E0D0]"
                      : "border-transparent"
                  } hover:border-[#40E0D0]`}
                >
                  Invisalign
                </Link>
              </div>

              {/* Patient Feedback Dropdown */}
              <div className="relative dropdown group pb-2">
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
                <div className="absolute left-0 top-full w-48 bg-white shadow-lg rounded-md z-50 hidden group-hover:block">
                  <Link
                    href="/testimonials"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                  >
                    Testimonials
                  </Link>
                  <Link
                    href="/smile-gallery"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white"
                  >
                    Smile Gallery
                  </Link>
                </div>
              </div>

              {/* Contact Us */}
              <div className="pb-3">
                <Link
                  href="/contact-us"
                  onClick={() => setActiveMenu("Contact Us")}
                  className={`text-[15px] font-medium pb-1 border-b-2 ${
                    activeMenu === "Contact Us"
                      ? "border-[#40E0D0]"
                      : "border-transparent"
                  } hover:border-[#40E0D0]`}
                >
                  Contact Us
                </Link>
              </div>
            </nav>

            {/* Desktop Appointment Button */}
            <Link
              href="/appointment"
              className="hidden lg:block bg-[#1d5c5c] text-white px-4 py-3 text-sm uppercase text-center"
            >
              Get Appointment
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 w-3/4 h-full bg-white transform transition-transform ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } shadow-lg lg:hidden z-50`}
        >
          <div className="p-4">
            <nav>
              {/* Home */}
              <Link
                href="/"
                onClick={() => handleMenuClick("Home")}
                className="block py-3 text-lg font-medium"
              >
                Home
              </Link>

              {/* About Us */}
              <div className="dropdown">
                <div className="flex items-center justify-between w-full py-3">
                  <Link
                    href="/about-us"
                    onClick={() => handleMenuClick("About Us")}
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
                      href="/about-us/pricing"
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
                    onClick={() => handleMenuClick("Cosmetic Dentistry")}
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
                    <Link
                      href="/cosmetic-dentistry/composite-bonding"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                    >
                      Composite Bonding
                    </Link>
                    <Link
                      href="/cosmetic-dentistry/porcelain-veneers"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                    >
                      Porcelain Veneers
                    </Link>
                    <Link
                      href="/cosmetic-dentistry/bespoke-smile-design"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                    >
                      Bespoke Smile Design
                    </Link>
                    <Link
                      href="/cosmetic-dentistry/cosmetic-orthodontics"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                    >
                      Cosmetic Orthodontics
                    </Link>
                    <Link
                      href="/cosmetic-dentistry/teeth-whitening"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                    >
                      Teeth Whitening
                    </Link>
                    <Link
                      href="/cosmetic-dentistry/stain-removal"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                    >
                      Stain Removal
                    </Link>
                    <Link
                      href="/cosmetic-dentistry/facial-aesthetics"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                    >
                      Facial Aesthetics
                    </Link>
                    <Link
                      href="/cosmetic-dentistry/dermal-fillers"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                    >
                      Dermal Fillers
                    </Link>
                    <Link
                      href="/cosmetic-dentistry/invisible-filling"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white"
                    >
                      Invisible Filling
                    </Link>
                  </div>
                )}
              </div>

              {/* General Dentistry */}
              <div className="dropdown">
                <div className="flex items-center justify-between w-full py-3">
                  <Link
                    href="/general-dentistry"
                    onClick={() => handleMenuClick("General Dentistry")}
                    className="text-lg font-medium"
                  >
                    General Dentistry
                  </Link>
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
                    <Link
                      href="/dental-treatments"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                    >
                      Dental Consultation
                    </Link>
                    <Link
                      href="/general-dentistry/same-day-emergency-appointments"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                    >
                      Same-Day Emergency Appointments
                    </Link>
                    <Link
                      href="/general-dentistry/hygiene-services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                    >
                      Hygiene Services
                    </Link>
                    <Link
                      href="/general-dentistry/implant-consultations"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                    >
                      Implant Consultations
                    </Link>
                    <Link
                      href="/general-dentistry/wisdom-tooth-removal"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                    >
                      Wisdom Tooth Removal
                    </Link>
                    <Link
                      href="/general-dentistry/child-smile"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                    >
                      Child Smile
                    </Link>
                    <Link
                      href="/general-dentistry/orthodontics"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                    >
                      Orthodontics
                    </Link>
                    <Link
                      href="/general-dentistry/endodontic-root-canals"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white border-b border-gray-200"
                    >
                      Endodontic Root Canals
                    </Link>
                    <Link
                      href="/general-dentistry/dental-bridges"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white"
                    >
                      Dental Bridges
                    </Link>
                  </div>
                )}
              </div>

              {/* Invisalign */}
              <Link
                href="/invisalign"
                onClick={() => handleMenuClick("Invisalign")}
                className="block py-3 text-lg font-medium"
              >
                Invisalign
              </Link>

              {/* Patient Feedback */}
              <div className="dropdown">
                <div className="flex items-center justify-between w-full py-3">
                  <Link
                    href="/patient-feedback"
                    onClick={() => handleMenuClick("Patient Feedback")}
                    className="text-lg font-medium"
                  >
                    Patient Feedback
                  </Link>
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
                    <Link
                      href="/smile-gallery"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-[#1D5C5C] hover:text-white"
                    >
                      Smile Gallery
                    </Link>
                  </div>
                )}
              </div>

              {/* Contact Us */}
              <Link
                href="/contact-us"
                onClick={() => handleMenuClick("Contact Us")}
                className="block py-3 text-lg font-medium"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
} 