"use client";

import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import FaqSection from "@/components/faqs";
import BredCrumbServices from "@/components/BreadCrumbServices";

export default function PorcelainVeneers() {
  const faqs = [
    {
      question: "What exactly does porcelain veneer consist of?",
      answer:
        "Porcelain veneers are made of high-quality and very durable ceramic material, appearing as much like oral tissue as possible.",
    },
    {
      question: "For how many years will porcelain veneers retain their condition?",
      answer:
        "The porcelain veneers give the patients ten to fifteen years, provided they care for it.",
    },
    {
      question: "Do porcelain veneers harm your teeth?",
      answer:
        "Porcelain veneers work safely because they touch only the outermost layer of your tooth.",
    },
    {
      question: "Are veneers reversible?",
      answer:
        "The treatment requires reducing tooth size, so it cannot be undone.",
    },
    {
      question: "How much does porcelain veneer treatment usually cost?",
      answer:
        "The price is determined by the number of veneers required, but the astounding results make the cost worth it.",
    },
  ];

  return (
    <>
      <BredCrumbServices title="Porcelain Veneers"  subtitle={
        <span>
          <Link className="hover:underline" href="/cosmetic-dentistry">Cosmetic Dentistry</Link> -{' '}
          <span>Porcelain Veneers</span>
        </span>
      } />

      <div className="container mx-auto px-4 py-8 mb-20">
        <div className="flex flex-col-reverse lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/3 flex lg:flex-col flex-col-reverse ">
            <div className="bg-[#F5F5F5] shadow rounded p-10">
              <h2 className="text-lg mb-4">Other Services</h2>
              <div className="flex flex-col gap-3">
                {[
                  "Bespoke Smile Design",
                  "Cosmetic Orthodontics",
                  "Teeth Whitening",
                  "Stain Removal",
                  "Facial Aesthetics",
                  "Dermal Fillers",
                  "Invisible Fillings",
                  "Composite Bonding",
                ].map((service, i) => {
                  const serviceSlug = service
                    .toLowerCase()
                    .replace(/\s+/g, "-"); // Convert service name to slug
                  return (
                    <Link
                      key={i}
                      href={`/cosmetic-dentistry/${serviceSlug}`} // Link now includes the parent category
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
              alt="Porcelain Veneers"
              className="rounded-2xl w-full max-h-[500px] object-cover"
            />

            <div>
              <h1 className="text-4xl lg:text-5xl text-center mb-3 lg:text-left">
                Porcelain Veneers for a Picture-Perfect Smile in Edinburgh
              </h1>
              <h2 className="text-2xl lg:text-left text-center mb-2">
                Achieve a Flawless, Natural-Looking Smile with Porcelain Veneers
              </h2>
              <p className=" leading-relaxed">
                A smile with porcelain veneers creates a perfect appearance that
                builds up your personality through confidence. The treatment of
                porcelain veneers presents itself as a fitting solution. City
                Dental Care in Edinburgh develops beautiful smiles for patients
                through custom porcelain veneer design. Natural teeth gain their
                dream smile through ultra-thin porcelain shells that conceal
                existing flaws.
              </p>
            </div>

            <div>
              <h3 className="text-xl lg:text-left text-center mt-4 mb-1">
                What Are Porcelain Veneers?
              </h3>
              <p >
                Custom-made porcelain shells function as thin coverages which
                doctors place on teeth surfaces to improve their appearance. The
                durable, high-quality porcelain material used for veneers allows
                the correction of several dental conditions, including:
              </p>
              <ul className="list-disc pl-5 ">
                <li>Discolouration</li>
                <li>Chips</li>
                <li>Cracks</li>
                <li>Misalignment</li>
                <li>Uneven teeth</li>
              </ul>
              <p className="mt-2">
                The result? Your overall looks benefit from the enhancement of
                your natural, bright, perfectly aligned smile.
              </p>
            </div>

            <div>
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                Why Choose Porcelain Veneers?
              </h2>

              {[
                {
                  title: "Long-Lasting Results:",
                  desc: "Proper care of porcelain veneers enables their durability to reach beyond ten years.",
                },
                {
                  title: "Natural Appearance:",
                  desc: "Your teeth gain a natural-looking translucence from the porcelain material, which perfectly resembles their natural appearance.",
                },
                {
                  title: "Stain-Resistant:",
                  desc: "Even though natural teeth are prone to staining from coffee, wine, and other foods, porcelain veneers are safe from such discolouration.",
                },
                {
                  title: "Quick Treatment:",
                  desc: "The complete treatment involves only two office visits, including a consultation appointment and the placement procedure, to achieve quick results for smile transformation.",
                },
              ].map((item, index) => (
                <div key={index} className="mb-3">
                  <h3 className="text-lg text-center lg:text-left ">{item.title}</h3>
                  <p >{item.desc}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                The Process of Getting Porcelain Veneers
              </h2>
              <p >
                During the porcelain veneer process, we guide you at City Dental
                Care every step of the way so you feel comfortable.
              </p>
              {[
                {
                  title: "Consultation:",
                  desc: "The consultation starts, after which we analyse your dental requirements, determine your smile objectives & check your X-ray report.",
                },
                {
                  title: "Preparation:",
                  desc: "On the second visit, we continue to prepare your teeth by lightly etching the surface to guarantee the veneers' good attachment.",
                },
                {
                  title: "Custom Veneer Fabrication:",
                  desc: "We base the mockup products on your tooth impressions, which will be custom-made to fit your natural teeth' shape, colour, and size.",
                },
                {
                  title: "Placement:",
                  desc: "Your veneers will be professionally placed after completion before we make final adjustments to achieve optimal fit.",
                },
                {
                  title: "Final Touch:",
                  desc: "When veneers are correctly set, we finish them with a polish that restores your smile to its beautifully shiny and smooth final form.",
                },
              ].map((step, index) => (
                <div key={index} className="mb-3">
                  <h3 className="text-lg lg:text-left text-center ">{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                Why Choose City Dental Care for Porcelain Veneers?
              </h2>
              <p >
                The staff members at City Dental Care in Edinburgh bring their
                extensive experience to design aesthetically flawless and
                organic-focused smiles. Here's why we stand out:
              </p>
              {[
                {
                  title: "Experienced Dentists:",
                  desc: "Our professional cosmetic dentists employ the best technique for crafting veneers to craft a beautiful smile that fits your personality.",
                },
                {
                  title: "State-of-the-Art Technology:",
                  desc: "For this reason, we incorporate up-to-date technological tools in determining measurements and placement.",
                },
                {
                  title: "Personalised Care:",
                  desc: "Each treatment plan is customised to meet your needs and get the best results.",
                },
                {
                  title: "Trustworthy Results:",
                  desc: "We provide safe and effective treatments so you can be comfortable and smile for a long time.",
                },
              ].map((item, index) => (
                <div key={index} className="mb-3">
                  <h3 className="text-lg text-center lg:text-left">{item.title}</h3>
                  <p >{item.desc}</p>
                </div>
              ))}
            </div>


              <h2 className="text-2xl text-center lg:text-left  mb-2">
                Book Your Consultation Today!
              </h2>
              <p >
                Do our teeth require porcelain veneers to improve their
                appearance? Call City Dental Care now for a free consultation.
                The welcoming team at Joy Dental will use extra care to make
                your dream smile a reality.
              </p>
              <div className="flex justify-center md:justify-start">
              <button className="mt-4 bg-[#1D5C5C] text-white px-6 py-2 rounded  ">
                Get the Smile You Deserve!
              </button>
            </div>

            <hr className="text-gray-500 mt-6" />

            <div className="mt-6">
              <p className="mb-2">Follow Us:</p>
              <div className="flex gap-4 text-[#1D5C5C]">
                <Facebook className="  cursor-pointer w-5 h-5" />
                <Twitter className=" cursor-pointer w-5 h-5" />
                <Instagram className=" cursor-pointer w-5 h-5" />
                <Youtube className=" cursor-pointer w-5 h-5" />
              </div>
            </div>
          </main>
        </div>
      </div>

      <FaqSection
        faqs={faqs}
        imageSrc="/Faq's.webp" // Update with the actual image source path
      />
    </>
  );
}