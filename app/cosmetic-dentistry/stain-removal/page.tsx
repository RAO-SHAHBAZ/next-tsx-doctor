"use client";

import React from "react";
import { Facebook, Instagram, Mail, MoveRight, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import FaqSection from "@/components/faqs";
import BredCrumbServices from "@/components/BreadCrumbServices";
import Image from "next/image";

export default function StainRemoval() {
  const faqsStainRemoval = [
    {
      question: "Does stain removal require a certain amount of time?",
      answer:
        "Stain removal typically needs a treatment time of up to an hour.",
    },
    {
      question: "How do Stain removal processes make your teeth whiter?",
      answer:
        "The treatment can enhance tooth brightness by getting rid of blemishes.",
    },
    {
      question: "Is stain removal painful?",
      answer: "The process does not hurt and feels pleasant to clients.",
    },
    {
      question: "At what intervals should I choose stain removal treatment?",
      answer:
        "Your lifestyle determines how often you should get the procedure, but most people need it once every six to twelve months.",
    },
    {
      question: "Can stain removal be done for all types of stains?",
      answer:
        "Even surface stains can be removed, but more extensive stains require further treatment.",
    },
    {
      question: "What happens after stain removal?",
      answer:
        "The teeth will be brighter, and you will have fresh breath and a clean smile.",
    },
  ];

  return (
    <>
      <BredCrumbServices
        title="Stain Removal"
        subtitle={
          <span>
            <Link className="hover:underline" href="/cosmetic-dentistry">
              Cosmetic Dentistry
            </Link>{" "}
            - <span>Stain Removal</span>
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
                  "Facial Aesthetics",
                  "Dermal Fillers",
                  "Invisible Fillings",
                  "Composite Bonding",
                  "Porcelain Veneers",
                  "Bespoke Smile Design",
                  "Cosmetic Orthodontics",
                  "Teeth Whitening",
                ].map((service, i) => {
                  const serviceSlug = service
                    .toLowerCase()
                    .replace(/\s+/g, "-"); /* Convert service name to slug */
                  return (
                    <Link
                      key={i}
                      href={`/cosmetic-dentistry/${serviceSlug}`} /* Link now includes the parent category */
                      className="text-left px-4 py-2 rounded-xl border text-[#1D5C5C] border-[#1D5C5C] hover:bg-[#f0fdfa] transition"
                    >
                      {service}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="md:mx-auto md:sticky md:top-24 md:z-10">
              <br />
              <div className="bg-[#F5F5F5] rounded shadow-md p-6 text-center mx-auto">
                <div className="text-[#1D5C5C] text-sm f uppercase mb-2">
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
              alt="Stain Removal"
              className="rounded-2xl w-full max-h-[500px] object-cover"
            />

            <div>
              <h1 className="text-4xl lg:text-5xl text-center mb-3 lg:text-left">
                Stain Removal for a Fresh Smile in Edinburgh
              </h1>
              <br />
              <h2 className="text-2xl lg:text-left text-center mb-2">
                Refresh Your Smile with Professional Stain Removal
              </h2>
              <p className=" leading-relaxed">
                City Dental Care in Edinburgh delivers professional treatments
                for stain removal that help patients regain their teeth's
                natural white colour. Our quick stain removal service
                efficiently treats discolouration from coffee, tea, and tobacco
                staining. You will soon regain a confident smile.
              </p>
            </div>

            <div>
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                Why Choose Professional Stain Removal?
              </h2>
              <br />

              {[
                {
                  title: "Effective Treatment:",
                  desc: "Our stain removal treatments are more noticeable than an at-home solution since they target deep stains and the struggle of getting stains out of clothes all over.",
                },
                {
                  title: "Safe for Teeth:",
                  desc: "Using gentle, high-technology techniques, we won't destroy your enamel.",
                },
                {
                  title: "Long-Lasting Results:",
                  desc: "Enjoy a brighter, fresher smile that lasts longer than other over-the-counter options.",
                },
                {
                  title: "Quick and Convenient:",
                  desc: "We move quickly, and if we don't have the smile you want within the time you can dedicate to a fresh smile, keep on doing what you're doing.",
                },
              ].map((item, index) => (
                <div key={index} className="mb-3">
                  <h3 className="text-lg text-center lg:text-left inline-flex gap-2 items-center justify-center">
                  <Image src="/forward-icon.webp"
                                      alt="Forward Icon"
                                      width={15}
                                      height={15}
                                      className="w-[15px] h-[15px]"
                                    /> {item.title}
                  </h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#F5F5F5] p-10">
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                How Stain Removal Works at City Dental Care?
              </h2>
              <p>
                What we are known for is using the latest techniques and dental
                technology to remove stains from your teeth. Here's how the
                process works:
              </p>
              {[
                {
                  title: "Consultation:",
                  desc: "We start by offering a consultation so that we can gauge your level of staining and recommend the best treatment or set of treatments that may be most suitable for you.",
                },
                {
                  title: "Professional Cleaning:",
                  desc: "Deep cleaning also removes surface stains.",
                },
                {
                  title: "Whitening Treatment:",
                  desc: "If needed, we apply a professional whitening gel to the deeper stains.",
                },
                {
                  title: "Aftercare Tips:",
                  desc: "We advise you to maintain your bright smile with proper oral hygiene and make changes in your lifestyle.",
                },
              ].map((step, index) => (
                <div key={index} className="mb-3">
                  <h3 className="text-lg lg:text-left text-center inline-flex gap-2 ">
                  <MoveRight /> {step.title}
                  </h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>

            <img
              src="/A7402954.jpg"
              alt="Stain Removal"
              className="rounded-2xl w-full max-h-[500px] object-cover"
            />

            <div>
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                The Benefits of Stain Removal
              </h2>
              {[
                {
                  title: "Improved Appearance:",
                  desc: "Stop the unsightly stains and bring your teeth back to their natural whiteness.",
                },
                {
                  title: "Enhanced Confidence:",
                  desc: "You will appear with a brighter smile in social and professional situations.",
                },
                {
                  title: "Preserved Oral Health:",
                  desc: "Also, regular stain removal is helpful in aiding good oral hygiene as it prevents the buildup of plaque and tooth decay.",
                },
              ].map((item, index) => (
                <div key={index} className="mb-3">
                  <h3 className="text-lg text-center lg:text-left inline-flex gap-2 items-center justify-center">
                  <Image src="/forward-icon.webp"
                                      alt="Forward Icon"
                                      width={15}
                                      height={15}
                                      className="w-[15px] h-[15px]"
                                    />{item.title}
                  </h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#F5F5F5] p-10">
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                Why Choose City Dental Care for Stain Removal?
              </h2>
              <p>
                Our highest priority is your comfort and satisfaction. Our
                team's use of advanced technology results in safety,
                effectiveness, and a personalised stain removal experience.
                <br />
                 We
                need to spend that time getting to know your goals and come up
                with a treatment plan centred around you.
              </p>
              <br />
              {[
                {
                  title: "Experienced Team:",
                  desc: "The dental professionals who work at this clinic are experienced and highly trained in teeth whitening and stain removal.",
                },
                {
                  title: "State-of-the-Art Technology:",
                  desc: "Our newest equipment and best techniques ensure we deliver the best results with little or no discomfort.",
                },
                {
                  title: "Friendly and Caring Environment:",
                  desc: "You always feel at ease and expect comfort, and every visit is stress-free.",
                },
              ].map((item, index) => (
                <div key={index} className="mb-3">
                  <h3 className="text-lg text-center lg:text-left inline-flex gap-2">
                    {item.title}
                  </h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
            <h2 className="text-2xl text-center lg:text-left  mb-2">
              Make your stain removal booking right now at City Dental Care
              Edinburgh.
            </h2>
            <p>
              Ready for a fresh, bright smile? Call City Dental Care in
              Edinburgh to secure your professional stain removal appointment
              right now. Our team will help you achieve your dream of a shiny,
              confident smile.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="mt-4 bg-[#1D5C5C] text-white px-6 py-2 rounded  ">
                Brighten Your Smile – Book Now!
              </button>
            </div>

            <hr className="text-gray-500 mt-6" />

            <div className="mt-6">
              <p className="mb-2">Follow Us:</p>
              <div className="flex gap-4 text-[#1D5C5C]">
              <Link href='https://www.facebook.com/citydentalcareedinburgh'><Facebook className=" cursor-pointer w-5 h-5" /></Link>
<Link href='mailto:info@citydentalcare.co.uk'><Mail className=" cursor-pointer w-5 h-5" /></Link>
<Link href='https://www.instagram.com/citydentalcare.edin/'><Instagram className=" cursor-pointer w-5 h-5" /></Link>
              </div>
            </div>
          </main>
        </div>
      </div>

      <FaqSection
        faqs={faqsStainRemoval}
        imageSrc="/Faq's.webp" /* Update with the actual image source path */
      />
    </>
  );
}
