"use client";
import React, { useState } from "react";
import {
  CheckCircle,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

const services = [
  "Braces & Aligners",
  "Teeth Whitening",
  "Dental Implant",
  "Dental Floss",
  "Wisdom Teeth",
  "Molar Crown",
];

const contentData: Record<string, { title: string; description: string; benefits: string[] }> = {
  "Braces & Aligners": {
    title: "Braces & Aligners",
    description:
      "Align and enhance your smile using modern orthodontic solutions. Our approach ensures comfort and precision.",
    benefits: [
      "Invisible and traditional options available",
      "Quick and effective results",
      "Custom treatment plans",
    ],
  },
  "Teeth Whitening": {
    title: "Teeth Whitening",
    description:
      "Brighten your smile safely with our professional-grade whitening treatment, tailored to you.",
    benefits: [
      "Instant visible results",
      "Long-lasting brightness",
      "Safe for enamel and gums",
    ],
  },
  "Dental Implant": {
    title: "Dental Implant",
    description:
      "Restore your smile permanently with our natural-looking and durable dental implants.",
    benefits: [
      "Look and feel like real teeth",
      "Promotes bone health",
      "Long-term dental solution",
    ],
  },
  "Dental Floss": {
    title: "Dental Floss",
    description:
      "Keep your gums and teeth healthy with our professional flossing services and care advice.",
    benefits: [
      "Removes plaque between teeth",
      "Prevents gum diseases",
      "Improves breath and hygiene",
    ],
  },
  "Wisdom Teeth": {
    title: "Wisdom Teeth",
    description:
      "Gentle wisdom tooth removal with precision, safety, and fast recovery time.",
    benefits: [
      "Minimally invasive removal",
      "Quick healing process",
      "Expert surgical care",
    ],
  },
  "Molar Crown": {
    title: "Molar Crown",
    description:
      "Protect and restore damaged molars with custom-fit crowns made from strong, aesthetic materials.",
    benefits: [
      "Custom color-matching",
      "Durable and long-lasting",
      "Restores full function",
    ],
  },
};

export default function ServiceDetails() {
  const [activeService, setActiveService] = useState("Dental Implant");

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="flex flex-col gap-6 w-full lg:w-1/4">
          <div className="bg-white shadow-md rounded-md p-4">
            <h2 className="text-lg font-semibold mb-4">Other Services</h2>
            <div className="flex flex-col gap-3">
              {services.map((service) => (
                <button
                  key={service}
                  className={`text-left px-4 py-2 rounded-md border ${
                    activeService === service
                      ? "bg-[#1D5C5C] text-white"
                      : "text-[#1D5C5C] border-[#1D5C5C]"
                  }`}
                  onClick={() => setActiveService(service)}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Appointment Box */}
          <div className="bg-white shadow-md rounded-md p-4">
            <h3 className="text-sm text-[#1D5C5C] font-medium">ONLINE APPOINTMENT</h3>
            <h2 className="text-lg font-semibold mt-1">
              Enhance Your Smile with <br /> Professional Whitening
            </h2>
            <p className="text-sm mt-2">
              Lobortis ut atpent metus hac ad. Risus morbi ut tellus suspendisse lectus platea.
            </p>
            <button className="mt-4 bg-[#1D5C5C] text-white px-4 py-2 rounded-md">
              Make Appointment
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 flex flex-col gap-6">
          <img
            src="/dental-implant.jpg"
            alt={activeService}
            className="rounded-md w-full max-h-[400px] object-cover"
          />

          <div>
            <h2 className="text-3xl font-semibold mb-3">{contentData[activeService].title}</h2>
            <p className="text-gray-700 leading-relaxed">
              {contentData[activeService].description}
            </p>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="font-medium text-xl mb-2">The benefits :</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
              {contentData[activeService].benefits.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="text-[#1D5C5C] w-5 h-5 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Icons */}
          <div className="mt-6">
            <p className="mb-2">Follow Us :</p>
            <div className="flex gap-4 text-[#1D5C5C]">
              <Facebook className="hover:text-[#174a4a] cursor-pointer w-5 h-5" />
              <Twitter className="hover:text-[#174a4a] cursor-pointer w-5 h-5" />
              <Instagram className="hover:text-[#174a4a] cursor-pointer w-5 h-5" />
              <Youtube className="hover:text-[#174a4a] cursor-pointer w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
