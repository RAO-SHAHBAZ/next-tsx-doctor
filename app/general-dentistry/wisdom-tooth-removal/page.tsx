"use client";

import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import FaqSection from "@/components/faqs";
import BredCrumbServices from "@/components/BreadCrumbServices";

export default function WisdomToothRemoval() {
  const faqs = [
    {
      question: "Is wisdom tooth removal painful?",
      answer:
        "Wisdom tooth removal is performed under local anesthesia, so you will not feel pain during the procedure. Mild discomfort may occur post-surgery.",
    },
    {
      question: "How long does recovery take after wisdom tooth removal?",
      answer:
        "Most patients recover within 1-2 weeks, though full healing can take several months.",
    },
    {
      question: "Do I need to remove all my wisdom teeth?",
      answer:
        "Not necessarily. We’ll assess your situation and recommend the best approach based on the positioning of your wisdom teeth.",
    },
    // You can add more FAQs specific to wisdom tooth removal here
  ];

  return (
    <>
      <BredCrumbServices
        title="Wisdom Tooth Removal"
        subtitle={
          <span>
            <Link className="hover:underline" href="/general-dentistry">
              General Dentistry
            </Link>{" "}
            - <span>Wisdom Tooth Removal</span>
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
                  "Dental Checkups",
                  "Teeth Cleaning",
                  "Dental Fillings",
                  "Tooth Extractions",
                  "Gum Disease Treatment",
                  // Add other general dentistry services here
                ].map((service, i) => {
                  const serviceSlug = service
                    .toLowerCase()
                    .replace(/\s+/g, "-");
                  return (
                    <Link
                      key={i}
                      href={`/general-dentistry/${serviceSlug}`} // Assuming these are under a general dentistry category
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
              alt="Wisdom Tooth Removal"
              className="rounded-2xl w-full max-h-[500px] object-cover"
            />

            <div>
              <h1 className="text-4xl lg:text-5xl text-center mb-3 lg:text-left">
                Wisdom Tooth Removal in Edinburgh
              </h1>
              <h2 className="text-2xl lg:text-left text-center mb-2">
                Expert Wisdom Tooth Removal in Edinburgh
              </h2>
              <p className="leading-relaxed">
                If you’re experiencing pain or discomfort from wisdom teeth, City
                Dental Care offers safe and effective wisdom tooth removal in
                Edinburgh. Our experienced team ensures a comfortable,
                stress-free procedure that relieves pain and prevents future
                complications.
              </p>
            </div>

            <div>
              <h3 className="text-xl lg:text-left text-center mt-4 mb-1">
                What is Wisdom Tooth Removal?
              </h3>
              <p>
                Wisdom tooth removal is a common procedure to extract one or more
                of your wisdom teeth. These teeth emerge between the ages of 17
                and 25. If they cause pain, misalignment, or other dental
                issues, removal is often necessary.
              </p>
            </div>

            <div>
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                Why You Might Need Wisdom Tooth Removal
              </h2>
              <ul className="list-disc list-inside">
                {[
                  "Experience pain in the back of your mouth",
                  "Have crowded or misaligned teeth due to impaction",
                  "Face infection or swelling around the wisdom teeth",
                  "Experience gum disease or tooth decay in the area",
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
                Our Approach to Wisdom Tooth Removal in Edinburgh
              </h2>
              <p>
                We use modern techniques and technology to make wisdom tooth
                removal as comfortable and efficient as possible. We ensure
                minimal discomfort and provide personalized aftercare
                instructions for a smooth recovery.
              </p>
            </div>

            <div>
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                Benefits of Choosing Us
              </h2>
              {[
                {
                  title: "Experienced Team:",
                  desc: "We have a team of skilled dentists with years of expertise",
                },
                {
                  title: "Advanced Technology:",
                  desc: "Our state-of-the-art equipment ensures precision",
                },
                {
                  title: "Gentle Approach:",
                  desc:
                    "We are providing a comfortable environment and a relaxed experience.",
                },
                {
                  title: "Comprehensive Care:",
                  desc:
                    "Our full support before, during, and after the procedure gives comprehensive care.",
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
              Book Your Wisdom Tooth Removal Appointment Today!


              </h2>
              <p>
              If you’re experiencing pain or discomfort from your wisdom teeth, schedule an appointment today and get the relief you need.

              </p>
              </div>

            <div className="flex justify-center md:justify-start">
              <button
                className="mt-4 bg-[#1D5C5C] text-white px-6 py-2 rounded "
                onClick={() => console.log("Book Wisdom Tooth Removal")}
              >
                Relieve Pain Now
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