"use client";

import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import FaqSection from "@/components/faqs";
import BredCrumbServices from "@/components/BreadCrumbServices";

export default function Orthodontics() {
  const faqs = [
    {
      question: "How long does orthodontic treatment take?",
      answer:
        "Treatment time typically ranges from 12 months to 3 years, depending on the complexity of the case.",
    },
    {
      question: "Are clear aligners as effective as traditional braces?",
      answer:
        "Yes, clear aligners are highly effective, especially for mild to moderate misalignment, and are often preferred for their discreet appearance.",
    },
    {
      question: "Do braces hurt?",
      answer:
        "Some discomfort may occur after adjustments, but it typically subsides within a few days. Your orthodontist will guide you on managing any discomfort.",
    },
    // You can add more FAQs specific to orthodontics here
  ];

  return (
    <>
      <BredCrumbServices
        title="Orthodontics"
        subtitle={
          <span>
            <Link className="hover:underline" href="/cosmetic-dentistry">
              Cosmetic Dentistry
            </Link>{" "}
            - <span>Orthodontics</span>
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
                  "Teeth Whitening",
                  "Stain Removal",
                  "Invisible Fillings",
                  "Composite Bonding",
                  "Porcelain Veneers",
                  "Bespoke Smile Design",
                  "Facial Aesthetics",
                  "Dermal Fillers",
                  // Add other cosmetic dentistry services here
                ].map((service, i) => {
                  const serviceSlug = service
                    .toLowerCase()
                    .replace(/\s+/g, "-");
                  return (
                    <Link
                      key={i}
                      href={`/cosmetic-dentistry/${serviceSlug}`} // Assuming these are under a cosmetic dentistry category
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
              alt="Orthodontic Treatment"
              className="rounded-2xl w-full max-h-[500px] object-cover"
            />

            <div>
              <h1 className="text-4xl lg:text-5xl text-center mb-3 lg:text-left">
                Orthodontics in Edinburgh
              </h1>
              <h2 className="text-2xl lg:text-left text-center mb-2">
                Achieve a Straighter Smile with Orthodontics in Edinburgh
              </h2>
              <p className="leading-relaxed">
                Whether you’re a child or an adult, our orthodontic treatments
                in Edinburgh can help you achieve a beautiful, aligned smile. We
                offer discreet, effective treatments that fit your lifestyle.
              </p>
            </div>

            <div>
              <h3 className="text-xl lg:text-left text-center mt-4 mb-1">
                What is Orthodontics?
              </h3>
              <p>
                Orthodontics is a dental specialty focused on correcting the
                alignment of your teeth and jaws. Using braces, clear aligners,
                or other devices, orthodontic treatments improve bite and
                appearance.
              </p>
            </div>

            <div>
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                Why You Might Need Orthodontic Treatment
              </h2>
              <ul className="list-disc list-inside">
                {[
                  "Crooked or misaligned teeth",
                  "Bite issues such as overbite or underbite",
                  "Difficulty chewing or speaking",
                  "Jaw pain due to misalignment",
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
                Our Approach to Orthodontic Care in Edinburgh
              </h2>
              <p>
                We offer both traditional braces and clear aligners like
                Invisalign. Our orthodontists take a personalized approach to
                treatment, using the latest technology to design the most
                effective plan for your smile.
              </p>
            </div>

            <div>
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                Benefits of Choosing Us
              </h2>
              {[
                {
                  title: "Experienced Orthodontists:",
                  desc:
                    "We have a Skilled team in both traditional and modern techniques",
                },
                {
                  title: "Clear Aligners:",
                  desc: "Our Discreet and comfortable options like Invisalign",
                },
                {
                  title: "Effective Results:",
                  desc: "You can get Treatment plans tailored to your goals.",
                },
                {
                  title: "Convenient Care:",
                  desc:
                    "Our Regular monitoring and adjustments ensure the best outcome",
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
            {/* CTA SECTION */}

              <div>
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
              Start Your Journey to a Straighter Smile!
              </h2>
              <p>
              Contact us today to schedule your consultation and take the first step toward a healthier, more beautiful smile.
              </p>
              </div>

            <div className="flex justify-center md:justify-start">
              <button
                className="mt-4 bg-[#1D5C5C] text-white px-6 py-2 rounded "
                onClick={() => console.log("Book Orthodontic Consultation")}
              >
                Get Straight Teeth
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