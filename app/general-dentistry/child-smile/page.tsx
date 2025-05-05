"use client";

import React from "react";
import { Facebook, Instagram, MoveRight, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import FaqSection from "@/components/faqs";
import BredCrumbServices from "@/components/BreadCrumbServices";

export default function ChildSmile() {
  const faqs = [
    {
      question: "At what age should my child first visit the dentist?",
      answer:
        "A: It’s recommended to schedule your child’s first dental visit by age 1 or within six months after their first tooth appears.",
    },
    {
      question: "Are the treatments safe for young children?",
      answer: "Yes, all treatments are safe and tailored to your child’s age and needs.",
    },
    {
      question: "What can I do to help my child with dental anxiety?",
      answer:
        "Our team is trained to make dental visits a positive experience for your child. We focus on calming techniques to ensure they feel at ease.",
    },
    // You can add more FAQs specific to child dental care here
  ];

  return (
    <>
      <BredCrumbServices
        title="Child Smile"
        subtitle={
          <span>
            <Link className="hover:underline" href="/general-dentistry">
              General Dentistry
            </Link>{" "}
            - <span>Child Smile Program</span>
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
                  "Orthodontics",
                 "Endodontic Root Canals",
                 "Dental Bridges",
                 "Same Day Emergency",
                 "Hygiene Services",
                 "Implant Consultations",
                 "Wisdom Tooth Removal",
                ].map((service, i) => {
                  const serviceSlug = service
                    .toLowerCase()
                    .replace(/\s+/g, "-");
                  return (
                    <Link
                      key={i}
                      href={`/general-dentistry/${serviceSlug}`} // Adjust link if Orthodontics has its own category
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
              alt="Child Smile Program"
              className="rounded-2xl w-full max-h-[500px] object-cover"
            />

            <div>
              <h1 className="text-4xl lg:text-5xl text-center mb-3 lg:text-left">
                Child Smile in Edinburgh
              </h1>
              <h2 className="text-2xl lg:text-left text-center mb-2">
                Child Smile Program in Edinburgh
              </h2>
              <p className="leading-relaxed">
                Give your child the best start with our Child Smile Program at
                City Dental Care. We provide pediatric dental care designed to
                keep your child’s smile healthy and bright from their very first
                tooth through their teenage years.
              </p>
            </div>

            <div>
              <h3 className="text-xl lg:text-left text-center mt-4 mb-1">
                What is the Child Smile Program?
              </h3>
              <p>
                Our Child Smile Program offers preventive care and education to
                help your child maintain excellent oral health. We focus on
                establishing healthy dental habits early on, with age-appropriate
                treatments and advice.
              </p>
            </div>

            <div>
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                Why Your Child Needs a Dental Visit
              </h2>
              <ul className="list-disc list-inside">
                {[
                  "Prevent tooth decay and cavities",
                  "Establish healthy brushing and flossing habits",
                  "Monitor the development of their teeth and gums",
                  "Treat issues like thumb sucking, teeth grinding, or alignment problems",
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
                Our Approach to Child Smile Care in Edinburgh
              </h2>
              <p>
                Our pediatric dental team ensures a comfortable, friendly
                environment for your child. We educate and guide them through
                the importance of oral health while providing gentle care and
                treatment.
              </p>
            </div>

            <div className="bg-[#F5F5F5] p-10">
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                Benefits of Choosing Us
              </h2>
              {[
                {
                  title: "Kid-Friendly Team:",
                  desc:
                    "Our Caring, gentle professionals focus on your child’s comfort",
                },
                {
                  title: "Preventive Care:",
                  desc: "The early intervention to avoid future dental problems",
                },
                {
                  title: "Positive Experience:",
                  desc: "We make dental visits fun and stress-free",
                },
                {
                  title: "Educational Support:",
                  desc: "Teach kids healthy dental habits for life",
                },
              ].map((item, index) => (
                <div key={index} className="mb-3">
                  <h3 className="text-lg text-center lg:text-left inline-flex gap-2">
                  <MoveRight />{item.title}
                  </h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
            <div>
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
              Schedule Your Child’s Dental Appointment Today!

              </h2>
              <p>
              Give your child the gift of a healthy smile. <strong>Book your child’s dental appointment</strong> today and set them on the path to a lifetime of good oral health.

              </p>
              </div>

            <div className="flex justify-center md:justify-start">
              <button
                className="mt-4 bg-[#1D5C5C] text-white px-6 py-2 rounded "
                onClick={() => console.log("Book Child Dental Appointment")}
              >
                Book Your Smile Today
              </button>
            </div>

            <hr className="text-gray-500 mt-6" />

            <div className="mt-6">
              <p className="mb-2">Follow Us:</p>
              <div className="flex gap-4 text-[#1D5C5C]">
                <Facebook className=" cursor-pointer w-5 h-5" />
                <Twitter className=" cursor-pointer w-5 h-5" />
                <Instagram className=" cursor-pointer w-5 h-5" />
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