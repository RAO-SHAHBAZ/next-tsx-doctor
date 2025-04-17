"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  CheckCircle,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import BredCrumb from "@/components/BredCrumb";
import Faqs from "@/components/faqs";

// List of valid services
const services = [
  "Braces & Aligners",
  "Teeth Whitening",
  "Dental Implant",
  "Dental Floss",
  "Wisdom Teeth",
  "Molar Crown",
] as const;

type Service = (typeof services)[number];
type ContentData = Record<
  Service,
  {
    title: string;
    description: string;
    benefits: string[];
    image: string;
    detailedContent: string;
  }
>;

const contentData: ContentData = {
  "Braces & Aligners": {
    title: "Braces & Aligners",
    description: "Align and enhance your smile...",
    benefits: [
      "Invisible and traditional options available",
      "Quick and effective results",
      "Custom treatment plans",
    ],
    image: "A7402951.jpg",
    detailedContent: "Braces and aligners are common orthodontic treatments...",
  },
  "Teeth Whitening": {
    title: "Teeth Whitening",
    description: "Brighten your smile safely...",
    benefits: [
      "Instant visible results",
      "Long-lasting brightness",
      "Safe for enamel and gums",
    ],
    image: "A7402954.jpg",
    detailedContent: "Teeth whitening is a popular cosmetic dental procedure...",
  },
  "Dental Implant": {
    title: "Dental Implant",
    description: "Restore your smile permanently...",
    benefits: [
      "Look and feel like real teeth",
      "Promotes bone health",
      "Long-term dental solution",
    ],
    image: "A7402957.jpg",
    detailedContent: "Dental implants are a revolutionary solution...",
  },
  "Dental Floss": {
    title: "Dental Floss",
    description: "Maintain your oral health...",
    benefits: [
      "Removes plaque and food particles",
      "Prevents gum disease",
      "Easy daily routine",
    ],
    image: "A7402987.jpg",
    detailedContent: "Dental floss is an essential part of oral hygiene...",
  },
  "Wisdom Teeth": {
    title: "Wisdom Teeth",
    description: "Gentle and effective wisdom tooth extraction...",
    benefits: [
      "Expert surgical removal",
      "Quick recovery",
      "Prevents crowding and infection",
    ],
    image: "A7402990.jpg",
    detailedContent: "Wisdom teeth removal is a common procedure...",
  },
  "Molar Crown": {
    title: "Molar Crown",
    description: "Protect and restore damaged molars...",
    benefits: [
      "Durable and long-lasting",
      "Matches natural tooth color",
      "Restores function",
    ],
    image: "A7402987.jpg",
    detailedContent: "A molar crown is used to protect weakened teeth...",
  },
};

const getServiceFromSlug = (slug: string): Service | null => {
  const match = services.find(
    (service) =>
      service.toLowerCase().replace(/[^a-z]/g, "") ===
      slug.toLowerCase().replace(/[^a-z]/g, "")
  );
  return match ?? null;
};

export default function ServicePage() {
  const { slug } = useParams();
  const router = useRouter();

  const [activeService, setActiveService] = useState<Service | null>(null);

  useEffect(() => {
    if (typeof slug === "string") {
      const matchedService = getServiceFromSlug(slug);
      if (matchedService) {
        setActiveService(matchedService);
      } else {
        router.push("/not-found");
      }
    }
  }, [slug, router]);

  if (!activeService) return null;

  return (
    <>
      <BredCrumb title="Service Details" />

      <div className="container mx-auto px-4 py-8 mb-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/3">
            <div className="bg-[#F5F5F5] shadow rounded p-10 ">
              <h2 className="text-lg  mb-4">Other Services</h2>
              <div className="flex flex-col gap-3">
                {services.map((service) => (
                  <button
                    key={service}
                    className={`text-left px-4 py-2 rounded-xl border transition ${
                      activeService === service
                        ? "bg-[#1D5C5C] text-white"
                        : "text-[#1D5C5C] border-[#1D5C5C] hover:bg-[#f0fdfa]"
                    }`}
                    onClick={() =>
                      router.push(`/${service.toLowerCase().replace(/\s+/g, "-")}`)
                    }
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>
            <br />
            <div className="bg-[#F5F5F5] rounded shadow-md p-6  text-center mx-auto">
              <div className="text-[#1D5C5C] text-sm font-medium uppercase mb-2">
                Online Appointment
              </div>
              <h2 className="text-xl  mb-2 leading-snug">
                Enhance Your Smile with <br className="hidden sm:block" />
                Professional Whitening
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                Lobortis ut aptent metus hac ad. Risus morbi ut tellus
                suspendisse lectus platea.
              </p>
              <button
                className="bg-[#1D5C5C] text-white px-5 py-2 rounded font-medium hover:bg-[#174a4a] transition"
                onClick={() => console.log("Make Appointment Clicked")}
              >
                Make Appointment
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="w-full lg:w-3/4 flex flex-col gap-6 ">
            <img
              src={contentData[activeService].image}
              alt={contentData[activeService].title}
              className="rounded-2xl w-full max-h-[400px] object-cover"
            />

            <div>
              <h2 className="text-3xl font-semibold mb-3">
                {contentData[activeService].title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {contentData[activeService].description}
              </p>
            </div>

            <div>
              <h3 className="font-medium text-xl mb-2">Details:</h3>
              <p className="text-gray-700 whitespace-pre-line">
                {contentData[activeService].detailedContent}
              </p>
            </div>

            <div>
              <h3 className="font-medium text-xl mb-2">The Benefits:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
                {contentData[activeService].benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="text-[#1D5C5C] w-5 h-5 mt-1" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <hr className="text-gray-500" />

            {/* Social Links */}
            <div className="mt-6">
              <p className="mb-2">Follow Us:</p>
              <div className="flex gap-4 text-[#1D5C5C]">
                <Facebook className="hover:text-[#174a4a] cursor-pointer w-5 h-5" />
                <Twitter className="hover:text-[#174a4a] cursor-pointer w-5 h-5" />
                <Instagram className="hover:text-[#174a4a] cursor-pointer w-5 h-5" />
                <Youtube className="hover:text-[#174a4a] cursor-pointer w-5 h-5" />
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* FAQ Section */}
      <Faqs />
    </>
  );
}
