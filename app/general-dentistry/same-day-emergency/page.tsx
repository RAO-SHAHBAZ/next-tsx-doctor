"use client";

import React from "react";
import { Facebook, Instagram, Mail, MoveRight, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import FaqSection from "@/components/faqs";
import BredCrumbServices from "@/components/BreadCrumbServices";

export default function SameDayEmergency() {
  const faqs = [
    {
      question: "What qualifies as a dental emergency?",
      answer:
        "Severe tooth pain, trauma to teeth, or infections are considered dental emergencies.",
    },
    {
      question: "Will I be seen right away?",
      answer: "Yes, we prioritize same-day appointments for all urgent dental needs.",
    },
    {
      question: "What should I do if my tooth is knocked out?",
      answer:
        "Keep the tooth moist and try to reinsert it into the socket. If that's not possible, store it in milk and come to our clinic immediately.",
    },
    // You can add more FAQs specific to emergency dental care here
  ];

  return (
    <>
      <BredCrumbServices
        title="Same Day Emergency Appointments"
        subtitle={
          <span>
              <Link className="hover:underline" href="/general-dentistry">
              General Dentistry
            </Link>{" "}
            - <span>Same Day Emergency Appointments</span>
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
                  "Hygiene Services",
                  "Implant Consultations",
                  "Wisdom Tooth Removal",
                  "Child Smile",
                  "Orthodontics",
                  "Endodontic Root Canals",
                  "Dental Bridges",
                ].map((service, i) => {
                  const serviceSlug = service
                    .toLowerCase()
                    .replace(/\s+/g, "-");
                  return (
                    <Link
                      key={i}
                      href={`/general-dentistry/${serviceSlug}`} // Assuming these are under a cosmetic dentistry category
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
              src="/A7402954.jpg"
              alt="Emergency Dental Care"
              className="rounded-2xl w-full max-h-[500px] object-cover"
            />

            <div>
              <h1 className="text-4xl lg:text-5xl text-center mb-3 lg:text-left">
                Same-Day Emergency Appointments in Edinburgh
              </h1><br />
              <h2 className="text-2xl lg:text-left text-center mb-2">
                Same-Day Emergency Dental Care in Edinburgh
              </h2>
              <p className="leading-relaxed">
              Dental emergencies can happen unexpectedly. At City Dental Care, we provide <strong>same-day emergency appointments in Edinburgh</strong> to offer immediate relief when you need it most.
              </p>
            </div>

            <div>
              <h3 className="text-xl lg:text-left text-center mt-4 mb-1">
              What is a Same-Day Emergency Appointment?
              </h3>
              <p>
              A <strong>same-day emergency appointment</strong> treats urgent dental issues like severe tooth pain, broken teeth, or mouth injuries. We offer immediate care to relieve discomfort and address dental emergencies promptly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
              Why You Might Need a Same-Day Emergency Appointment
              </h2>
              <span>You may need emergency care if you experience:</span>
              <br />
              <ul className="list-disc list-inside">
                {[
                  "Severe tooth pain",
                  "Broken or knocked-out teeth",
                  "Swollen gums or jaw",
                  "Lost fillings or crowns causing pain",
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
              Our Approach to Emergency Dental Care in Edinburgh
              </h2>
              <p>
              We make your urgent dental care our priority. Our team provides <strong>immediate relief for dental pain</strong>, performs thorough examinations, and delivers effective treatment for all emergencies.
              </p>
            </div>

            <div className="bg-[#F5F5F5] p-10">
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
              Benefits of Choosing Us
              </h2>

              {[
                {
                  title: "Fast Relief:",
                  desc: "We take Immediate appointments for urgent care.",
                },
                {
                  title: "Experienced Team:",
                  desc: "You can get the services of skilled professionals who manage all emergencies.",
                },
                {
                  title: "Comforting Care:",
                  desc: "Our Compassionate and understanding approach to ease your anxiety",
                },
                {
                  title: "Convenient Location:",
                  desc: "We are easily accessible for quick appointments in Edinburgh.",
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
              <h3 className="text-2xl lg:text-left text-center mt-6 mb-2">
              Need Emergency Dental Care? Book Today!
              </h3>
              <p>
              Contact us immediately for <strong>same-day emergency dental appointments in Edinburgh</strong>. Don’t wait — get the care you need now!
              </p>
            </div>

            <div className="flex justify-center md:justify-start">
              <button className="mt-4 bg-[#1D5C5C] text-white px-6 py-2 rounded ">
              Emergency? Get Seen Today!
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