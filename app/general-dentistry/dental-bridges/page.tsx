"use client";

import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import FaqSection from "@/components/faqs";
import BredCrumbServices from "@/components/BreadCrumbServices";

export default function DentalBridges() {
  const faqs = [
    {
      question: "How long do dental bridges last?",
      answer: "With proper care, dental bridges can last 10-15 years or longer.",
    },
    {
      question: "Is the procedure for dental bridges painful?",
      answer:
        "The procedure is minimally invasive, and local anesthesia is used to ensure comfort.",
    },
    {
      question: "Can dental bridges be removed?",
      answer:
        "No, dental bridges are fixed in place and provide a permanent solution to missing teeth.",
    },
    // You can add more FAQs specific to dental bridges here
  ];

  return (
    <>
      <BredCrumbServices
        title="Dental Bridges"
        subtitle={
          <span>
            <Link className="hover:underline" href="/restorative-dentistry">
              Restorative Dentistry
            </Link>{" "}
            - <span>Dental Bridges</span>
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
                  "Same Day Emergency",
                  "Hygiene Services",
                  "Implant Consultations",
                  "Wisdom Tooth Removal",
                  "Child Smile",
                  "Orthodontics",
                  "Endodontic Root Canals",
                  // Add other restorative dentistry services here
                ].map((service, i) => {
                  const serviceSlug = service
                    .toLowerCase()
                    .replace(/\s+/g, "-");
                  return (
                    <Link
                      key={i}
                      href={`/restorative-dentistry/${serviceSlug}`} // Assuming these are under a restorative dentistry category
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
              alt="Dental Bridges"
              className="rounded-2xl w-full max-h-[500px] object-cover"
            />

            <div>
              <h1 className="text-4xl lg:text-5xl text-center mb-3 lg:text-left">
                Dental Bridges in Edinburgh              </h1>
              <h2 className="text-2xl lg:text-left text-center mb-2">
                Restore Your Smile with Dental Bridges in Edinburgh
              </h2>
              <p className="leading-relaxed">
                If you’re missing one or more teeth, a dental bridge could be the
                solution to restore your smile and functionality. At City Dental
                Care, we offer durable, natural-looking dental bridges tailored to
                your needs.
              </p>
            </div>

            <div>
              <h3 className="text-xl lg:text-left text-center mt-4 mb-1">
                What are Dental Bridges?
              </h3>
              <p>
                A dental bridge is a prosthetic device used to fill the gap
                created by one or more missing teeth. It is anchored to adjacent
                teeth, providing a secure and comfortable solution that restores
                both the appearance and function of your smile.
              </p>
            </div>

            <div>
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                Why You Might Need a Dental Bridge
              </h2>
              <ul className="list-disc list-inside">
                {[
                  "One or more missing teeth",
                  "Difficulty chewing or speaking due to gaps",
                  "Teeth shifting due to missing teeth",
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
                Our Approach to Dental Bridges in Edinburgh
              </h2>
              <p>
                Our team creates <strong>custom dental bridges</strong> that seamlessly blend with
                your natural teeth. We ensure a secure fit and optimal comfort,
                helping you regain full functionality and confidence in your
                smile.
              </p>
            </div>

            <div>
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                Benefits of Choosing Us
              </h2>
              {[
                {
                  title: "Custom-Made:",
                  desc: "The Bridges are designed to match your natural teeth",
                },
                {
                  title: "Durable Solutions:",
                  desc: "We provide Long-lasting results with proper care",
                },
                {
                  title: "Improved Functionality:",
                  desc: "The ability to restore your ability to chew and speak comfortably",
                },
                {
                  title: "Experienced Care:",
                  desc: "Our Skilled professionals ensure a perfect fit",
                },
              ].map((item, index) => (
                <div key={index} className="mb-3">
                  <h3 className="text-lg text-center lg:text-left ">
                    {item.title}
                  </h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
              <div>
                <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                Restore Your Smile with Dental Bridges!
                </h2>
    
                <p>
                Book your consultation today and take the first step toward a complete smile with our <strong>custom dental bridges</strong>.
                </p>
              </div>
            <div className="flex justify-center md:justify-start">
              <button
                className="mt-4 bg-[#1D5C5C] text-white px-6 py-2 rounded "
                onClick={() => console.log("Book Dental Bridge Consultation")}
              >
                Restore Your Smile Now
              </button>
            </div>

            <hr className="text-gray-500 mt-6" />

            <div className="mt-6">
              <p className="mb-2">Follow Us:</p>
              <div className="flex gap-4 text-[#1D5C5C]">
                <Facebook className=" cursor-pointer w-5 h-5" />
                <Twitter className=" cursor-pointer w-5 h-5" />
                <Instagram className=" cursor-pointer w-5 h-5" />
                <Youtube className=" cursor-pointer w-5 h-5" />
              </div>
            </div>
          </main>
        </div>
      </div>

      <FaqSection faqs={faqs} imageSrc="/Faq's.webp" />
    </>
  );
}