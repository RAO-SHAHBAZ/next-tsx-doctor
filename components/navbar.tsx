"use client";

import { Clock, Phone, MapPin, Menu, ChevronDown, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

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
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center py-2">
          <a href="/" className="hidden md:block">
            <Image
              src="/City-Dental-Care.svg"
              alt="City Dental Care"
              width={120}
              height={40}
            />
          </a>
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
            {/* Home */}
            <a
              href="/home"
              onClick={() => setActiveMenu("Home")}
              className={`text-[15px] font-medium pb-1 border-b-2 ${
                activeMenu === "Home" ? "border-[#40E0D0]" : "border-transparent"
              } hover:border-[#40E0D0]`}
            >
              Home
            </a>

            {/* About Us Dropdown */}
            <div className="relative dropdown">
              <button
                onClick={() => toggleDropdown("aboutUs")}
                className={`text-[15px] font-medium flex items-center gap-1 pb-1 border-b-2 ${
                  activeMenu === "About Us"
                    ? "border-[#40E0D0]"
                    : "border-transparent"
                } hover:border-[#40E0D0]`}
              >
                About Us
                <ChevronDown
                  className={`h-4 w-4 text-gray-600 transition-transform ${
                    mobileDropdownOpen.aboutUs ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileDropdownOpen.aboutUs && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                  <a
                    href="/aboutus/staff"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Staff
                  </a>
                  <a
                    href="/aboutus/blogs"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Blogs
                  </a>
                  <a
                    href="/aboutus/pricing"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Pricing
                  </a>
                </div>
              )}
            </div>

            {/* Cosmetic Dentistry Dropdown */}
            <div className="relative dropdown">
              <button
                onClick={() => toggleDropdown("cosmeticDentistry")}
                className={`text-[15px] font-medium flex items-center gap-1 pb-1 border-b-2 ${
                  activeMenu === "Cosmetic Dentistry"
                    ? "border-[#40E0D0]"
                    : "border-transparent"
                } hover:border-[#40E0D0]`}
              >
                Cosmetic Dentistry
                <ChevronDown
                  className={`h-4 w-4 text-gray-600 transition-transform ${
                    mobileDropdownOpen.cosmeticDentistry ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileDropdownOpen.cosmeticDentistry && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                  <a
                    href="/cosmeticdentistry/compositebonding"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Composite Bonding
                  </a>
                  <a
                    href="/cosmeticdentistry/porcelainveneers"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Porcelain Veneers
                  </a>
                  <a
                    href="/cosmeticdentistry/bespokesmiledesign"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Bespoke Smile Design
                  </a>
                  <a
                    href="/cosmeticdentistry/cosmeticorthodontics"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Cosmetic Orthodontics
                  </a>
                  <a
                    href="/cosmeticdentistry/teethwhitening"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Teeth Whitening
                  </a>
                  <a
                    href="/cosmeticdentistry/stainremoval"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Stain Removal
                  </a>
                  <a
                    href="/cosmeticdentistry/facialaesthetics"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Facial Aesthetics
                  </a>
                  <a
                    href="/cosmeticdentistry/dermalfillers"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Dermal Fillers
                  </a>
                  <a
                    href="/cosmeticdentistry/invisiblefilling"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Invisible Filling
                  </a>
                </div>
              )}
            </div>

            {/* General Dentistry Dropdown */}
            <div className="relative dropdown">
              <button
                onClick={() => toggleDropdown("generalDentistry")}
                className={`text-[15px] font-medium flex items-center gap-1 pb-1 border-b-2 ${
                  activeMenu === "General Dentistry"
                    ? "border-[#40E0D0]"
                    : "border-transparent"
                } hover:border-[#40E0D0]`}
              >
                General Dentistry
                <ChevronDown
                  className={`h-4 w-4 text-gray-600 transition-transform ${
                    mobileDropdownOpen.generalDentistry ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileDropdownOpen.generalDentistry && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                  <a
                    href="/generaldentistry/dentalconsultation"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Dental Consultation
                  </a>
                  <a
                    href="/generaldentistry/samedayemergencyappointments"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Same-Day Emergency Appointments
                  </a>
                  <a
                    href="/generaldentistry/hygieneservices"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Hygiene Services
                  </a>
                  <a
                    href="/generaldentistry/implantconsultations"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Implant Consultations
                  </a>
                  <a
                    href="/generaldentistry/wisdomtoothremoval"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Wisdom Tooth Removal
                  </a>
                  <a
                    href="/generaldentistry/childsmile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Child Smile
                  </a>
                  <a
                    href="/generaldentistry/orthodontics"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Orthodontics
                  </a>
                  <a
                    href="/generaldentistry/endodonticrootcanals"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Endodontic Root Canals
                  </a>
                  <a
                    href="/generaldentistry/dentalbridges"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Dental Bridges
                  </a>
                </div>
              )}
            </div>

            {/* Invisalign */}
            <a
              href="/invisalign"
              onClick={() => setActiveMenu("Invisalign")}
              className={`text-[15px] font-medium pb-1 border-b-2 ${
                activeMenu === "Invisalign" ? "border-[#40E0D0]" : "border-transparent"
              } hover:border-[#40E0D0]`}
            >
              Invisalign
            </a>

            {/* Patient Feedback Dropdown */}
            <div className="relative dropdown">
              <button
                onClick={() => toggleDropdown("patientFeedback")}
                className={`text-[15px] font-medium flex items-center gap-1 pb-1 border-b-2 ${
                  activeMenu === "Patient Feedback"
                    ? "border-[#40E0D0]"
                    : "border-transparent"
                } hover:border-[#40E0D0]`}
              >
                Patient Feedback
                <ChevronDown
                  className={`h-4 w-4 text-gray-600 transition-transform ${
                    mobileDropdownOpen.patientFeedback ? "rotate-180" : ""
                  }`}
                />
              </button>
              {mobileDropdownOpen.patientFeedback && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                  <a
                    href="/patientfeedback/testimonials"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Testimonials
                  </a>
                  <a
                    href="/patientfeedback/smilegallery"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Smile Gallery
                  </a>
                </div>
              )}
            </div>

            {/* Contact Us */}
            <a
              href="/contactus"
              onClick={() => setActiveMenu("Contact Us")}
              className={`text-[15px] font-medium pb-1 border-b-2 ${
                activeMenu === "Contact Us" ? "border-[#40E0D0]" : "border-transparent"
              } hover:border-[#40E0D0]`}
            >
              Contact Us
            </a>
          </nav>

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

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 w-3/4 h-full bg-white transform transition-transform ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          } shadow-md md:hidden`}
        >
          <div className="p-4">
            <nav>
              {/* Home */}
              <a
                href="/home"
                onClick={() => {
                  setActiveMenu("Home");
                  setMobileMenuOpen(false);
                }}
                className="block py-3 text-lg font-medium"
              >
                Home
              </a>

              {/* About Us */}
              <div className="dropdown">
                <button
                  onClick={() => toggleDropdown("aboutUs")}
                  className="flex items-center justify-between w-full py-3 text-lg font-medium"
                >
                  About Us
                  <ChevronDown
                    className={`h-5 w-5 text-gray-600 transition-transform ${
                      mobileDropdownOpen.aboutUs ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileDropdownOpen.aboutUs && (
                  <div className="pl-4">
                    <a
                      href="/aboutus/staff"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Staff
                    </a>
                    <a
                      href="/aboutus/blogs"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Blogs
                    </a>
                    <a
                      href="/aboutus/pricing"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Pricing
                    </a>
                  </div>
                )}
              </div>

              {/* Cosmetic Dentistry */}
              <div className="dropdown">
                <button
                  onClick={() => toggleDropdown("cosmeticDentistry")}
                  className="flex items-center justify-between w-full py-3 text-lg font-medium"
                >
                  Cosmetic Dentistry
                  <ChevronDown
                    className={`h-5 w-5 text-gray-600 transition-transform ${
                      mobileDropdownOpen.cosmeticDentistry ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileDropdownOpen.cosmeticDentistry && (
                  <div className="pl-4">
                    <a
                      href="/cosmeticdentistry/compositebonding"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Composite Bonding
                    </a>
                    <a
                      href="/cosmeticdentistry/porcelainveneers"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Porcelain Veneers
                    </a>
                    <a
                      href="/cosmeticdentistry/bespokesmiledesign"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Bespoke Smile Design
                    </a>
                    <a
                      href="/cosmeticdentistry/cosmeticorthodontics"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Cosmetic Orthodontics
                    </a>
                    <a
                      href="/cosmeticdentistry/teethwhitening"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Teeth Whitening
                    </a>
                    <a
                      href="/cosmeticdentistry/stainremoval"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Stain Removal
                    </a>
                    <a
                      href="/cosmeticdentistry/facialaesthetics"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Facial Aesthetics
                    </a>
                    <a
                      href="/cosmeticdentistry/dermalfillers"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Dermal Fillers
                    </a>
                    <a
                      href="/cosmeticdentistry/invisiblefilling"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Invisible Filling
                    </a>
                  </div>
                )}
              </div>

              {/* General Dentistry */}
              <div className="dropdown">
                <button
                  onClick={() => toggleDropdown("generalDentistry")}
                  className="flex items-center justify-between w-full py-3 text-lg font-medium"
                >
                  General Dentistry
                  <ChevronDown
                    className={`h-5 w-5 text-gray-600 transition-transform ${
                      mobileDropdownOpen.generalDentistry ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileDropdownOpen.generalDentistry && (
                  <div className="pl-4">
                    <a
                      href="/generaldentistry/dentalconsultation"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Dental Consultation
                    </a>
                    <a
                      href="/generaldentistry/samedayemergencyappointments"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Same-Day Emergency Appointments
                    </a>
                    <a
                      href="/generaldentistry/hygieneservices"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Hygiene Services
                    </a>
                    <a
                      href="/generaldentistry/implantconsultations"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Implant Consultations
                    </a>
                    <a
                      href="/generaldentistry/wisdomtoothremoval"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Wisdom Tooth Removal
                    </a>
                    <a
                      href="/generaldentistry/childsmile"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Child Smile
                    </a>
                    <a
                      href="/generaldentistry/orthodontics"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Orthodontics
                    </a>
                    <a
                      href="/generaldentistry/endodonticrootcanals"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Endodontic Root Canals
                    </a>
                    <a
                      href="/generaldentistry/dentalbridges"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Dental Bridges
                    </a>
                  </div>
                )}
              </div>

              {/* Invisalign */}
              <a
                href="/invisalign"
                onClick={() => {
                  setActiveMenu("Invisalign");
                  setMobileMenuOpen(false);
                }}
                className="block py-3 text-lg font-medium"
              >
                Invisalign
              </a>

              {/* Patient Feedback */}
              <div className="dropdown">
                <button
                  onClick={() => toggleDropdown("patientFeedback")}
                  className="flex items-center justify-between w-full py-3 text-lg font-medium"
                >
                  Patient Feedback
                  <ChevronDown
                    className={`h-5 w-5 text-gray-600 transition-transform ${
                      mobileDropdownOpen.patientFeedback ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileDropdownOpen.patientFeedback && (
                  <div className="pl-4">
                    <a
                      href="/patientfeedback/testimonials"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Testimonials
                    </a>
                    <a
                      href="/patientfeedback/smilegallery"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Smile Gallery
                    </a>
                  </div>
                )}
              </div>

              {/* Contact Us */}
              <a
                href="/contactus"
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