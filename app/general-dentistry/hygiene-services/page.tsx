"use client";

import React from "react";
import { Facebook, Instagram, Mail, MoveRight, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import FaqSection from "@/components/faqs";
import BredCrumbServices from "@/components/BreadCrumbServices";

export default function HygieneServices() {
  const faqs = [
    {
      question: "How often should I get a cleaning?",
      answer: "It’s generally recommended every 6-12 months, depending on your needs.",
    },
    {
      question: "Is the cleaning procedure painful?",
      answer: "No, our hygienists are gentle and ensure you’re comfortable throughout.",
    },
    {
      question: "Can hygiene services prevent gum disease?",
      answer:
        "Yes, professional cleaning removes plaque and tartar buildup, which can prevent gum disease and other oral health issues.",
    },
    // You can add more FAQs specific to hygiene services here
  ];

  return (
    <>
      <BredCrumbServices
        title="Hygiene Services"
        subtitle={
          <span>
             <Link className="hover:underline" href="/general-dentistry">
              General Dentistry
            </Link>{" "}
            - <span>Hygiene Services</span>
          </span>
        }
      />

      <div className="container mx-auto px-4 py-8 mb-20">
        <div className="flex flex-col-reverse lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/3 flex lg:flex-col flex-col-reverse ">
            <div className="bg-[#F5F5F5] shadow rounded p-10">
              <h2 className="text-lg mb-4">Other Services</h2>
              <div className="flex flex-col gap-3">
                {[
      
                   "Implant Consultations",
                   "Wisdom Tooth Removal",
                   "Child Smile",
                   "Orthodontics",
                   "Endodontic Root Canals",
                   "Dental Bridges",
                   "Same Day Emergency",
                  // Add other preventive dentistry services here
                ].map((service, i) => {
                  const serviceSlug = service
                    .toLowerCase()
                    .replace(/\s+/g, "-");
                  return (
                    <Link
                      key={i}
                      href={`/general-dentistry/${serviceSlug}`} // Assuming these are under a preventive dentistry category
                      className="text-left px-4 py-2 rounded-xl border text-[#1D5C5C] border-[#1D5C5C] hover:bg-[#f0fdfa] transition"
                    >
                      {service}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Appointment Booking Section (Exact Same) */}
            <div className="md:mx-auto md:sticky md:top-24 md:z-10">
              <br />
              <div className="bg-[#F5F5F5] rounded shadow-md p-6 text-center mx-auto">
                <div className="text-[#1D5C5C] text-sm uppercase mb-2">
                  Online Appointment
                </div>
                <h2 className="text-xl mb-3">
                  Enhance Your Smile with <br className="hidden sm:block" />
                  Professional Care
                </h2>

                <p className="text-gray-600 text-sm mb-4">
                  Turn to the premier dental clinics for professional dental
                  services. Our services range from general check-ups and
                  cleaning services to other standard aesthetic procedures that
                  people seek. Can't visit in person? Get an online appointment
                  for emergency services! Book Your Appointment Today!
                </p>

                <button
                  className="bg-[#1D5C5C] text-white px-5 py-2 rounded "
                  onClick={() => console.log("Make Appointment Clicked")}
                >
                  Book Your Appointment Today
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="w-full lg:w-3/4 flex flex-col gap-6">
            <img
              src="/A7402954.jpg" // Use the same image as requested
              alt="Hygiene Services"
              className="rounded-2xl w-full max-h-[500px] object-cover"
            />

            <div>
              <h1 className="text-4xl lg:text-5xl text-center mb-3 lg:text-left ">
                Hygiene Services in Edinburgh
              </h1>
              <h2 className="text-2xl lg:text-left text-center ">
                Professional Hygiene Services in Edinburgh
              </h2>
              <p className="leading-relaxed">
                Keep your smile healthy with expert hygiene services in
                Edinburgh. Our professional cleaning and gum health treatments
                ensure your teeth stay bright and your gums stay healthy.
              </p>
            </div>

            <div>
              <h3 className="text-xl lg:text-left text-center mt-4 mb-1">
                What are Hygiene Services?
              </h3>
              <p>
                Hygiene services include deep cleanings, gum evaluations, and
                preventive care to remove plaque and tartar. This helps prevent
                gum disease, tooth decay, and ensures your smile stays fresh and
                clean.
              </p>
            </div>

            <div>
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                Why You Might Need Hygiene Services
              </h2>
              <ul className="list-disc list-inside">
                {[
                  "Haven’t had a professional cleaning recently",
                  "Have concerns about gum disease or plaque buildup",
                  "Want to maintain optimal oral health",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="mb-2 text-lg text-center lg:text-left"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                Our Approach to Hygiene Services in Edinburgh
              </h2>
              <p>
                Our hygienists are experts in gentle, thorough cleaning. We focus
                on preventative care while ensuring you’re comfortable. We offer
                personalized advice to help you maintain oral hygiene at home.
              </p>
            </div>

            <div className="bg-[#F5F5F5] p-10">
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                Benefits of Choosing Us
              </h2>
              {[
                {
                  title: "Expert Care:",
                  desc: "Get our Professional cleaning by skilled hygienists",
                },
                {
                  title: "Prevention Focus:",
                  desc: "We can keep your gums and teeth healthy",
                },
                {
                  title: "Customized Advice:",
                  desc: "Get the Personal oral hygiene tips for home care",
                },
                {
                  title: "Gentle and Caring:",
                  desc: "You can get comfort-focused treatments",
                },
              ].map((item, index) => (
                <div key={index} className="mb-3">
                  <h3 className="text-lg text-center lg:text-left inline-flex gap-2 ">
                  <MoveRight /> {item.title}
                  </h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
              Book Your Hygiene Appointment Today!
              </h2>
              <p>
              Schedule your professional hygiene appointment now and ensure your smile stays healthy and beautiful.
              </p>
            </div>

            <div className="flex justify-center md:justify-start">
              <button
                className="mt-4 bg-[#1D5C5C] text-white px-6 py-2 rounded "
                onClick={() => console.log("Book Hygiene Appointment")}
              >
                Refresh Your Smile Today
              </button>
            </div>

            <hr className="text-gray-500 mt-6" />

            <div className="mt-6">
              <p className="mb-2">Follow Us:</p>
              <div className="flex gap-4 text-[#1D5C5C]">
              <Link href='https://www.facebook.com/citydentalcareedinburgh' target="blank"><Facebook className=" cursor-pointer w-5 h-5" /></Link>
                <Link href='mailto:info@citydentalcare.co.uk' target="blank"><Mail className=" cursor-pointer w-5 h-5" /></Link>
                <Link href='https://www.instagram.com/citydentalcare.edin/' target="blank"><Instagram className=" cursor-pointer w-5 h-5" /></Link>
                {/* <Youtube className=" cursor-pointer w-5 h-5" /> */}
              </div>
            </div>
          </main>
        </div>
      </div>

      <FaqSection faqs={faqs} imageSrc="/Faq's.webp" />
    </>
  );
}