"use client";

import React from "react";
import { Facebook, Instagram, MoveRight, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import FaqSection from "@/components/faqs";
import BredCrumbServices from "@/components/BreadCrumbServices";

export default function RootCanalTreatment() {
  const faqs = [
    {
      question: "Is a root canal painful?",
      answer:
        "A: Root canals are performed under local anesthesia, so you won’t feel pain during the procedure. Mild discomfort may occur afterward, but it can be managed with pain relief.",
    },
    {
      question: "How long does a root canal take?",
      answer:
        "The procedure typically takes 1-2 hours, depending on the complexity of the case.",
    },
    {
      question: "Can a tooth be saved after a root canal?",
      answer:
        "Yes, with proper care and restoration (like a crown), the tooth can last many years after a root canal.",
    },
    // You can add more FAQs specific to root canal treatment here
  ];

  return (
    <>
      <BredCrumbServices
        title="Endodontic Root Canals"
        subtitle={
          <span>
            <Link className="hover:underline" href="/general-dentistry">
              General Dentistry
            </Link>{" "}
            - <span>Endodontic Root Canals</span>
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
                  "Dental Bridges",
                     "Same Day Emergency",
                     "Hygiene Services",
                     "Implant Consultations",
                     "Wisdom Tooth Removal",
                     "Child Smile",
                     "Orthodontics",
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
              alt="Root Canal Treatment"
              className="rounded-2xl w-full max-h-[500px] object-cover"
            />

            <div>
              <h1 className="text-4xl lg:text-5xl text-center mb-3 lg:text-left">
                Endodontic Root Canals in Edinburgh
              </h1>
              <h2 className="text-2xl lg:text-left text-center mb-2">
                Expert Root Canal Treatment in Edinburgh
              </h2>
              <p className="leading-relaxed">
                If you're experiencing severe tooth pain, you may need a root
                canal. At City Dental Care in Edinburgh, we offer safe, effective
                root canal treatment that saves your natural tooth and relieves
                discomfort.
              </p>
            </div>

            <div>
              <h3 className="text-xl lg:text-left text-center mt-4 mb-1">
                What is a Root Canal?
              </h3>
              <p>
                A root canal is a procedure that treats infection or damage to
                the pulp inside a tooth. It involves removing the infected tissue
                and sealing the tooth to restore its function and appearance.
              </p>
            </div>

            <div>
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                Why You Might Need a Root Canal
              </h2>
              <ul className="list-disc list-inside">
                {[
                  "Persistent tooth pain, especially when chewing or touching the tooth",
                  "Swelling or tenderness in the gums",
                  "A deep cavity or cracked tooth that affects the pulp",
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
                Our Approach to Root Canal Treatment in Edinburgh
              </h2>
              <p>
                We use advanced techniques and tools to make the root canal
                procedure as comfortable and effective as possible. We ensure
                that you understand the process and provide aftercare
                instructions for a smooth recovery.
              </p>
            </div>

            <div className="bg-[#F5F5F5] p-10">
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                Benefits of Choosing Us
              </h2>
              {[
                {
                  title: "Pain Relief:",
                  desc: "Our immediate relief from severe tooth pain",
                },
                {
                  title: "Preserve Your Tooth:",
                  desc: "We save your natural tooth instead of extracting it",
                },
                {
                  title: "Advanced Techniques:",
                  desc: "Our precision treatment with modern technology",
                },
                {
                  title: "Comfort-Focused Care:",
                  desc: "We are ensuring a relaxed and pain-free experience",
                },
              ].map((item, index) => (
                <div key={index} className="mb-3">
                  <h3 className="text-lg text-center lg:text-left inline-flex gap-2">
                  <MoveRight /> {item.title}
                  </h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
            <div>
            <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
            Need Relief from Tooth Pain? Book Your Root Canal Appointment Today!

              </h2>
              <p> Contact us for an appointment and get the relief you need from dental pain with expert <strong>root canal treatment</strong>.
              </p>
            </div>

            <div className="flex justify-center md:justify-start">
              <button
                className="mt-4 bg-[#1D5C5C] text-white px-6 py-2 rounded "
                onClick={() => console.log("Book Root Canal Appointment")}
              >
                Save Your Tooth today
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