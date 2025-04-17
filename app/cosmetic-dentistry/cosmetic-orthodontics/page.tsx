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

export default function CosmeticOrthodontics() {
  const faqsCosmetic = [
    {
      question: "What is cosmetic orthodontics?",
      answer:
        "It includes Braces and Clear Aligners to make teeth straight and enhance appearance.",
    },
    {
      question: "How Long Does It Take To Treat With Clear Aligners?",
      answer: "The misalignment can last 6 to 18 months for treatment.",
    },
    {
      question: "Are clear braces visible?",
      answer:
        "Almost invisible, they are an excellent choice for adults and teenagers who want a less noticeable option.",
    },
    {
      question: "What are the advantages of getting Invisalign?",
      answer:
        "Invisalign aligners are removable, comfortable, and virtually invisible aligners that straighten teeth.",
    },
    {
      question: "Are you able to eat and drink with Invisalign?",
      answer:
        "While Invisalign aligners are removable, you can eat and drink as you please. However, you should always remove them before eating.",
    },
    {
      question: "Does orthodontic treatment hurt?",
      answer:
        "Some mild discomfort might initially be felt, but this soon subsides as the aligners settle into your teeth.",
    },
  ];

  return (
    <>
      <BredCrumbServices title="Cosmetic Orthodontics" subtitle={(
        <span>
          <Link className="hover:underline" href="/cosmetic-dentistry">Cosmetic Dentistry</Link> -{' '}
          <span>Cosmetic Orthodontics</span>
        </span>
      )} />

      <div className="container mx-auto px-4 py-8 mb-20">
        <div className="flex flex-col-reverse lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/3 flex lg:flex-col flex-col-reverse ">
            <div className="bg-[#F5F5F5] shadow rounded p-10">
              <h2 className="text-lg mb-4">Other Services</h2>
              <div className="flex flex-col gap-3">
                {[
                  "Stain Removal",
                  "Facial Aesthetics",
                  "Dermal Fillers",
                  "Invisible Filling",
                  "Composite Bonding",
                  "Porcelain Veneers",
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

            <br />

            <div className="bg-[#F5F5F5] rounded shadow-md p-6 text-center mx-auto">
              <div className="text-[#1D5C5C] text-sm f uppercase mb-2">
                Online Appointment
              </div>
              <h2 className="text-xl mb-2 leading-snug">
                Enhance Your Smile with <br className="hidden sm:block" />
                Professional Whitening
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                Lobortis ut aptent metus hac ad. Risus morbi ut tellus
                suspendisse lectus platea.
              </p>
              <button
                className="bg-[#1D5C5C] text-white px-5 py-2 rounded font-medium hover:bg-[#174a4a] transition"
                onClick={() => console.log("Make Appointment Clicked")}
              >
                Make Appointment
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="w-full lg:w-3/4 flex flex-col gap-6">
            <img
              src="/A7402954.jpg"
              alt="Cosmetic Orthodontics"
              className="rounded-2xl w-full max-h-[500px] object-cover"
            />

            <div>
              <h1 className="text-4xl lg:text-5xl text-center mb-3 lg:text-left">
                Cosmetic Orthodontics for Straighter Teeth in Edinburgh
              </h1>
              <h2 className="text-2xl lg:text-left text-center mb-2">
                Cosmetic Orthodontics delivers perfect smiles to patients.
              </h2>
              <p className=" leading-relaxed">
                Have you ever wanted to obtain a gorgeous, aligned smile that functions without dealing with traditional brace systems?
                 People seeking cosmetic orthodontic treatment at City Dental Care in Edinburgh discover an excellent method to get perfectly straight teeth that delivers comfort, efficiency, and total concealment.
                  Our clear and unobtrusive aligner system benefits patients from the teenage to adult ages.
              </p>
            </div>

            <div>
              <h3 className="text-xl lg:text-left text-center mt-4 mb-1">
                What is Cosmetic Orthodontics?
              </h3>
              <p >
                It is for the appearance and function of your teeth. This treatment involves teeth straightening with clear aligners or transparent braces.
                 It is not the typical aesthetics of metal braces. This is a nice, discreet, comfortable way of getting your straighter smile.
              </p>
            </div>

            <div>
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                Why Choose Cosmetic Orthodontics?
              </h2>

              {[
                {
                  title: "Invisibility",
                  desc: "The clear aligner system lets you discreetly fix your teeth since it remains almost unnoticeable.",
                },
                {
                  title: "Comfort:",
                  desc: "Clear aligners provide superior comfort because braces have no metal components.",
                },
                {
                  title: "Faster Results:",
                  desc: "Correcting your teeth's alignment takes fewer days than wearing dental braces.",
                },
                 {
                  title: "Boosted Confidence:",
                  desc: "Cosmetic orthodontics brings you confidence in all settings of your life.",
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
                How Cosmetic Orthodontics Works?
              </h2>
              {[
                {
                  title: "Initial Consultation:",
                  desc: "You start your treatment at City Dental Care with an entire evaluation. We examine your dental condition and discuss your desires to determine whether clear aligners will work well.",
                },
                {
                  title: "Custom Treatment Plan:",
                  desc: "Our practice develops a treatment approach based on exact details from digital scans that match your requirements.",
                },
                {
                  title: "Wearing Your Aligners:",
                  desc: "You must always keep your clear aligners except when you eat, drink, and maintain oral hygiene.",
                },
                {
                  title: "Regular Check-Ups:",
                  desc: "Your aligners will move your teeth as they should, and we will adjust them based on your progress.",
                },
                {
                  title: "Final Result:",
                  desc: "The treatment outcomes create a perfect smile that improves your self-esteem.",
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
                Benefits of Choosing Clear Aligners for Straighter Teeth
              </h2>
              {[
                {
                  title: "Discreet Treatment:",
                  desc: "Virtually invisible are clear aligners that straighten your teeth.",
                },
                {
                  title: "Comfortable Fit:",
                  desc: "Custom-made to fit comfortably, they have no sharp metal wires.",
                },
                {
                  title: "Improved Oral Health:",
                  desc: "Straight teeth improve oral hygiene because they are simpler to maintain clean, which reduces cavities and gum diseases.",
                },
                 {
                  title: "Convenient:",
                  desc: "Clear aligners provide better convenience because, unlike traditional braces, they can be removed instead of staying in place permanently.",
                },
              ].map((item, index) => (
                <div key={index} className="mb-3">
                  <h3 className="text-lg text-center lg:text-left">{item.title}</h3>
                  <p >{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex  flex-col items-center">
              <h2 className="text-2xl text-center lg:text-left  mb-2">
                Ready for Straighter Teeth? Book Your Consultation Today!
              </h2>
              <p >
                Cosmetic orthodontics provides you with a beautiful, straight smile.
                 It can lead to your journey of having a straight and nice-looking smile with cosmetic orthodontics at City Dental Care.
                  Living in Edinburgh, our team is ready and able to offer you individualised care and the newest orthodontic solutions to change your smile.
              </p>
              <button className="mt-4 bg-[#1D5C5C] text-white px-6 py-2 rounded  ">
                Reserve Your Smile Consultation!
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
        faqs={faqsCosmetic}
        imageSrc="/Faq's.png" /* Update with the actual image source path */
      />
    </>
  );
}


export function TeethWhitening() {
  const faqsWhitening = [
    {
      question: "How long do teeth whitening results stay effective?",
      answer:
        "Whitening results stay effective for 1-2 years unless you return to previous behaviours.",
    },
    {
      question: "Is teeth whitening safe?",
      answer: "A qualified dentist provides safe and successful teeth whitening services.",
    },
    {
      question: "What price will teeth whitening services demand from you?",
      answer:
        "The price depends on the teeth-whitening method you select since in-office treatments cost more than take-home solutions.",
    },
    {
      question: "Can teeth whitening damage enamel?",
      answer: "You will not harm your enamel during teeth whitening from a dentist.",
    },
    {
      question: "Does the teeth whitening process allow for multiple distinct shades of lightening?",
      answer: "The whitening process produces shade alteration between 3 and 8 levels.",
    },
  ];

  return (
    <>
      <BredCrumbServices title="Teeth Whitening" subtitle={(
        <span>
          <Link className="hover:underline" href="/cosmetic-dentistry">Cosmetic Dentistry</Link> -{' '}
          <span>Teeth Whitening</span>
        </span>
      )} />

      <div className="container mx-auto px-4 py-8 mb-20">
        <div className="flex flex-col-reverse lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/3 flex lg:flex-col flex-col-reverse ">
            <div className="bg-[#F5F5F5] shadow rounded p-10">
              <h2 className="text-lg mb-4">Other Services</h2>
              <div className="flex flex-col gap-3">
                {[
                  "Braces & Aligners",
                  "Teeth Whitening",
                  "Dental Implant",
                  "Dental Floss",
                  "Wisdom Teeth",
                  "Molar Crown",
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

            <br />

            <div className="bg-[#F5F5F5] rounded shadow-md p-6 text-center mx-auto">
              <div className="text-[#1D5C5C] text-sm f uppercase mb-2">
                Online Appointment
              </div>
              <h2 className="text-xl mb-2 leading-snug">
                Enhance Your Smile with <br className="hidden sm:block" />
                Professional Whitening
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                Lobortis ut aptent metus hac ad. Risus morbi ut tellus
                suspendisse lectus platea.
              </p>
              <button
                className="bg-[#1D5C5C] text-white px-5 py-2 rounded font-medium hover:bg-[#174a4a] transition"
                onClick={() => console.log("Make Appointment Clicked")}
              >
                Make Appointment
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="w-full lg:w-3/4 flex flex-col gap-6">
            <img
              src="/A7402954.jpg"
              alt="Teeth Whitening"
              className="rounded-2xl w-full max-h-[500px] object-cover"
            />

            <div>
              <h1 className="text-4xl lg:text-5xl text-center mb-3 lg:text-left">
                Teeth Whitening to Brighten Your Smile in Edinburgh
              </h1>
              <h2 className="text-2xl lg:text-left text-center mb-2">
                Achieve a Dazzling, White Smile with Professional Teeth Whitening
              </h2>
              <p className=" leading-relaxed">
                The Edinburgh practice of City Dental Care provides patients with safe, efficient, and rapid teeth-whitening procedures.
                 Our treatments are ideal for people who have staining or wish to brighten their smiles.
                  Your smile will become brighter through our treatments regardless of staining from food consumption, drinks, or natural ageing processes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                Why Choose Professional Teeth Whitening?
              </h2>

              {[
                {
                  title: "Safe and Effective:",
                  desc: "Professional whitening treatments deliver more effective results than OTC products without endangering your tooth enamel.",
                },
                {
                  title: "Fast Results:",
                  desc: "Your smile will show remarkable improvement during your single-session appointment, allowing you to feel confident about your dazzling teeth.",
                },
                {
                  title: "Long-Lasting:",
                  desc: "Our whitening treatments work longer than over-the-counter options in the market.",
                },
                 {
                  title: "Customisable Treatment:",
                  desc: "We service what you need and provide the most effective whitening service.",
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
                How Teeth Whitening Works at City Dental Care
              </h2>
              <p >
                Our City Dental Care has the best, advanced whitening technology, and it is safe and effective. Here's how the process works:
              </p>
              {[
                {
                  title: "Consultation:",
                  desc: "We also conduct a pre-treatment assessment to understand the teeth's status and recommend the most appropriate whitening process.",
                },
                {
                  title: "Preparation:",
                  desc: "During the treatment, your gums and the surrounding area are carefully kept from pain.",
                },
                {
                  title: "Whitening Treatment:",
                  desc: "Applying a professional-grade whitening gel that contains a special light which triggers the breakdown of stains and brightens your teeth.",
                },
                {
                  title: "Aftercare Advice:",
                  desc: "We provide guidance on maintaining your new, bright smile with good oral hygiene and follow-up care.",
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
                Benefits of Teeth Whitening at City Dental Care
              </h2>
              {[
                {
                  title: "Fast and Reliable Results:",
                  desc: "After one session, you get visible results.",
                },
                {
                  title: "No Sensitivity:",
                  desc: "We use advanced methods to minimise sensitivity during and after treatment.",
                },
                {
                  title: "Improved Confidence:",
                  desc: "It also changes your appearance and increases your self-esteem with a brighter smile.",
                },
                 {
                  title: "Safe for Your Teeth:",
                  desc: "Our dental team applies proven industrial standards for tooth whitening that guarantee safety.",
                },
              ].map((item, index) => (
                <div key={index} className="mb-3">
                  <h3 className="text-lg text-center lg:text-left">{item.title}</h3>
                  <p >{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex  flex-col items-center">
              <h2 className="text-2xl text-center lg:text-left  mb-2">
                Get the Bright Smile You Deserve
              </h2>
              <p >
                Are you looking to get a sparkling white smile? If you visit the City Dental Care Clinic, you can do it orally.
                 There is no reason to wait any longer to bring out your best smile and feel confident about your teeth whitening.
                  If you are in Edinburgh, plan a visit to City Dental Care and speak to us about planning your perfect smile transformation today.
              </p>
              <button className="mt-4 bg-[#1D5C5C] text-white px-6 py-2 rounded  ">
                Book Your Teeth Whitening Appointment Now
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
        faqs={faqsWhitening}
        imageSrc="/Faq's.png" /* Update with the actual image source path */
      />
    </>
  );
}