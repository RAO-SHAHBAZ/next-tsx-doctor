"use client";
import React from "react";
import {
  ChevronRight,
  Facebook,
  Instagram,
  MoveRight,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import FaqSection from "@/components/faqs";
import Image from "next/image";
import BredCrumbServices from "@/components/BreadCrumbServices";

export default function DentalConsultation() {
  const faqs = [
    {
      question: "How much time will Invisalign treatment take?",
      answer:
        "Invisalign can treat a range of cases, changing how each is treated based on its complexity, and it typically takes around 6 to 18 months.",
    },
    {
      question: "Is Invisalign Painful?",
      answer:
        "Unlike traditional braces, you should find Invisalign to be more comfortable and experience less pain.",
    },
    {
      question: "How Much Does Invisalign Cost?",
      answer:
        "The expenses for Invisalign therapy depend on the specific treatment design. City Dental Care offers lower prices for patients who need flexible payment options. You can learn about our 0% interest financing choices by visiting us during your meeting.",
    },
    {
      question: "How Do I Get Started with Invisalign?",
      answer:
        "Visitors can book their consultation by visiting our website, while our experts will assist them throughout the process.",
    },
    // You can add more FAQs specific to child dental care here
  ];

  return (
    <>
     <BredCrumbServices
        title="Dental Consultation"
        subtitle={
          <span>
            <Link className="hover:underline" href="/general-dentistry">
            General Dentistry
            </Link>{" "}
            - <span>Dental Consultation</span>
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
                      href={`/general-dentistry/${serviceSlug}`} // Assuming these are under a restorative dentistry category
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
              Professional Dental Consultation in Edinburgh
              </h1>
              <p className="leading-relaxed">
              Take the first step toward a healthier smile with a <strong>dental consultation in Edinburgh</strong> at City Dental Care. Our expert team offers comprehensive assessments to ensure you receive the best care tailored to your needs.
              </p>
            </div>

            <div>
              <h2 className="text-2xl lg:text-left text-center mt-4 mb-1">
              What is a Dental Consultation?
              </h2>
              <p>
              A <strong>dental consultation</strong> is an in-depth examination of your oral health, including teeth, gums, and bite. This allows us to assess your needs and create a personalized treatment plan for either routine maintenance or specific concerns.
              </p>
            </div>
            <div className="bg-[#F5F5F5] p-10">
              <h2 className="text-2xl lg:text-left text-center mt-4 mb-1 ">
              Why You Might Need a Dental Consultation
              </h2>
              <p>
              You might need a <strong>dental consultation</strong> if you:
              </p>

              <div className="text-xl lg:text-left text-center mt-4 mb-1 flex gap-2 md:gap-4  ">
                <MoveRight /> <span>Experience tooth pain or discomfort</span>
              </div>

              <div className="text-xl lg:text-left text-center mt-4 mb-1 flex gap-2 md:gap-4">
                <MoveRight /> <span>Have concerns about your smile’s appearance</span>
              </div>

              <div className="text-xl lg:text-left text-center mt-4 mb-1 flex gap-2 md:gap-4">
                <MoveRight /> <span>Require routine check-ups for long-term health</span>
              </div>
              <div className="text-xl lg:text-left text-center mt-4 mb-1 flex gap-2 md:gap-4">
                <MoveRight /> <span>Want to explore options for cosmetic or restorative dental treatments in Edinburgh</span>
              </div>


            </div>
            <img
              src="/A7402954.jpg" // Use the same image as requested
              alt="Child Smile Program"
              className="rounded-2xl w-full max-h-[500px] object-cover"
            />


              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
               Benefits of Choosing Us
              </h2>

            <div>
              <h3 className="text-xl lg:text-left text-center mt-4 mb-1 inline-flex items-center gap-2">
                <Image
                  src="/forward-icon.webp"
                  alt="Forward Icon"
                  width={15}
                  height={15}
                  className="w-[15px] h-[15px]"
                />
                Experienced Dentists:
              </h3>
              <p>
              Skilled team with years of expertise.
              </p>
            </div>
            <div>
            <h3 className="text-xl lg:text-left text-center mt-4 mb-1 inline-flex items-center gap-2">
                <Image
                  src="/forward-icon.webp"
                  alt="Forward Icon"
                  width={15}
                  height={15}
                  className="w-[15px] h-[15px]"
                />
                Comprehensive Care:
              </h3>
              <p>
              Full range of <b>dental treatments in Edinburgh</b>
              </p>
            </div>
            <div>
            <h3 className="text-xl lg:text-left text-center mt-4 mb-1 inline-flex items-center gap-2">
                <Image
                  src="/forward-icon.webp"
                  alt="Forward Icon"
                  width={15}
                  height={15}
                  className="w-[15px] h-[15px]"
                />
               Personalized Advice:
              </h3>
                
              <p>
              Tailored recommendations based on your needs
              </p>
            </div>
            <div>
            <h3 className="text-xl lg:text-left text-center mt-4 mb-1 inline-flex items-center gap-2">
                <Image
                  src="/forward-icon.webp"
                  alt="Forward Icon"
                  width={15}
                  height={15}
                  className="w-[15px] h-[15px]"
                />
                 Convenient Location:
              </h3>
             
              <p>
              Easy access to our clinic in <b>Edinburgh</b>
              </p>
            </div>

            
            <div>
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
              Our Approach to Dental Consultation in Edinburgh
              </h2>
              <p>
              At City Dental Care, we prioritize your comfort and care. Our team listens to your concerns and provides a thorough examination. We explain all available treatment options to help you make informed decisions about your <b>dental health</b>.
              </p>
            </div>

            <div className="flex justify-center md:justify-start">
              <button
                className="mt-4 bg-[#1D5C5C] text-white px-6 py-2 rounded "
                onClick={() => console.log("Book Child Dental Appointment")}
              >
                Book Your Consultation Now!
              </button>
            </div>

            <hr className="text-gray-500 mt-6" />

            <div className="mt-6 md:flex md:gap-4">
              <p className="mb-2">Follow Us :</p>
              <div className="flex gap-4 text-[#1D5C5C]">
                <Link href='https://www.facebook.com/citydentalcareedinburgh' target="blank">
                <Facebook className=" cursor-pointer w-5 h-5" /></Link>
                <Twitter className=" cursor-pointer w-5 h-5" />
               <Link href='https://www.instagram.com/citydentalcare.edin/' target="blank">
               <Instagram className=" cursor-pointer w-5 h-5" /></Link>
                {/* <Youtube className=" cursor-pointer w-5 h-5" /> */}
              </div>
            </div>
            <hr className="text-gray-500 " />
          </main>
        </div>
      </div>

      <FaqSection faqs={faqs} imageSrc="/Faq's.webp" />
    </>
  );
}
