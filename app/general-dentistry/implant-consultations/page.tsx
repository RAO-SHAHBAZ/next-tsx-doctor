"use client";

import React from "react";
import { Facebook, Instagram, Mail, MoveRight, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import FaqSection from "@/components/faqs";
import BredCrumbServices from "@/components/BreadCrumbServices";

export default function ImplantConsultations() {
  const faqs = [
    {
      question: "Are dental implants painful?",
      answer:
        "Dental implant procedures are performed under local anesthesia, ensuring you’re comfortable throughout.",
    },
    {
      question: "How long do implants last?",
      answer: "With proper care, dental implants can last a lifetime.",
    },
    {
      question: "How long is the implant process?",
      answer:
        "The entire process, including the healing time, typically takes several months, but we’ll guide you through every step.",
    },
    // You can add more FAQs specific to implant consultations here
  ];

  return (
    <>
      <BredCrumbServices
        title="Implant Consultations"
        subtitle={
          <span>
           <Link className="hover:underline" href="/general-dentistry">
              General Dentistry
            </Link>{" "}
            - <span>Implant Consultations</span>
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
                 
                 "Wisdom Tooth Removal",
                 "Child Smile",
                 "Orthodontics",
                 "Endodontic Root Canals",
                 "Dental Bridges",
                 "Same Day Emergency",
                 "Hygiene Services",
                  // Add other dental implant related services here
                ].map((service, i) => {
                  const serviceSlug = service
                    .toLowerCase()
                    .replace(/\s+/g, "-");
                  return (
                    <Link
                      key={i}
                      href={`/general-dentistry/${serviceSlug}`} // Assuming these are under a dental implants category
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
              alt="Dental Implant Consultation"
              className="rounded-2xl w-full max-h-[500px] object-cover"
            />

            <div>
              <h1 className="text-4xl lg:text-5xl text-center mb-3 lg:text-left">
                Implant Consultations in Edinburgh
              </h1><br />
              <h2 className="text-2xl lg:text-left text-center mb-2">
                Dental Implant Consultations in Edinburgh
              </h2>
              <p className="leading-relaxed">
                Missing teeth? At City Dental Care, we offer professional
                consultations for dental implants in Edinburgh to restore your
                smile with permanent, natural-looking solutions.
              </p>
            </div>

            <div>
              <h3 className="text-xl lg:text-left text-center mt-4 mb-1">
                What is a Dental Implant Consultation?
              </h3>
              <p>
                A dental implant consultation involves a detailed assessment of
                your oral health to determine if implants are the right solution
                for replacing missing teeth. We discuss your needs and develop a
                personalized treatment plan.
              </p>
            </div>

            <div>
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                Why You Might Need a Dental Implant Consultation
              </h2>
              <ul className="list-disc list-inside">
                {[
                  "Have missing or damaged teeth",
                  "Have difficulty chewing or speaking",
                  "Want to restore a gap in your smile",
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
                Our Approach to Implant Consultation in Edinburgh
              </h2>
              <p>
                We provide a thorough, personalized consultation, including
                advanced imaging to assess your suitability for implants. Our
                team explains the procedure, expected outcomes, and answers all
                your questions.
              </p>
            </div>

            <div className="bg-[#F5F5F5] p-10">
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                Benefits of Choosing Us
              </h2>
              {[
                {
                  title: "Advanced Technology:",
                  desc: "You can get Precision planning with 3D scans",
                },
                {
                  title: "Experienced Team:",
                  desc: "We have a Skilled professionals with years of expertise",
                },
                {
                  title: "Personalized Care:",
                  desc: "Our Custom treatment plans based on your needs",
                },
                {
                  title: "Long-Term Results:",
                  desc: "The Implants results of us that can last a lifetime",
                },
              ].map((item, index) => (
                <div key={index} className="mb-3">
                  <h3 className="text-lg text-center lg:text-left  inline-flex gap-2">
                  <MoveRight /> {item.title}
                  </h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                Book Your Implant Consultation Today!
              </h2>
              <p>
                Get started on your <b>smile restoration</b> with{" "}
                <b>dental implants</b>. Schedule your consultation today!
              </p>
            </div>
            <div className="flex justify-center md:justify-start">
              <button
                className="mt-4 bg-[#1D5C5C] text-white px-6 py-2 rounded "
                onClick={() => console.log("Book Implant Consultation")}
              >
                Book Your Appointment Now
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
