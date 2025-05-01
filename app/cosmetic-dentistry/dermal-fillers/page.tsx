"use client";

import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import FaqSection from "@/components/faqs";
import BredCrumbServices from "@/components/BreadCrumbServices";

export default function DermalFillers() {
  const faqsDermalFillers = [
    {
      question: "What are dermal fillers?",
      answer:
        "Doctors can establish dermal fillers as injectable compounds meant to both restore facial volume and minimise facial wrinkles.",
    },
    {
      question: "Are dermal fillers safe?",
      answer:
        "Dermal fillers become safe treatments under the administration of qualified dermatologists and plastic surgeons.",
    },
    {
      question: "How long does dermal filling treatment keep its effects?",
      answer:
        "The condition of treated skin lasts between 6 and 18 months, depending on filler selection.",
    },
    {
      question: "Are there any periods of healing after dermal fillers?",
      answer:
        "The treatment does not involve repression, as most people can return to their daily activities within a short time.",
    },
    {
      question:
        "What is the possibility of using dermal fillers with additional cosmetic procedures?",
      answer:
        "Several cosmetic procedures, including Botox injections, can be used together with dermal fillers to achieve better effects.",
    },
    {
      question: "Is getting dermal fillers a painful procedure?",
      answer:
        "The procedure causes mild discomfort that the numbing cream successfully reduces.",
    },
  ];

  return (
    <>
      <BredCrumbServices
        title="Dermal Fillers"
        subtitle={
          <span>
            <Link className="hover:underline" href="/cosmetic-dentistry">
              Cosmetic Dentistry
            </Link>{" "}
            - <span>Dermal Fillers</span>
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
                  "Invisible Fillings",
                  "Composite Bonding",
                  "Porcelain Veneers",
                  "Bespoke Smile Design",
                  "Cosmetic Orthodontics",
                  "Teeth Whitening",
                  "Stain Removal",
                  "Facial Aesthetics",
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
              alt="Dermal Fillers"
              className="rounded-2xl w-full max-h-[500px] object-cover"
            />

            <div>
              <h1 className="text-4xl lg:text-5xl text-center mb-3 lg:text-left">
                Dermal Fillers to Enhance Your Smile in Edinburgh
              </h1>
              <h2 className="text-2xl lg:text-left text-center mb-2">
                Achieve a Youthful, Refreshed Look with Dermal Fillers
              </h2>
              <p className=" leading-relaxed">
                The personnel at City Dental Care's Edinburgh location deliver
                dermal filler treatment, which enhances the beauty of a natural
                smile. People select dermal fillers because they deliver a
                non-surgical treatment option that both removes wrinkles and
                restores natural facial volume, reducing signs of ageing. Dermal
                fillers provide an excellent avenue for people who want to
                restore vitality to their look during their smile rejuvenation
                journey.
              </p>
            </div>

            <div>
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                Why Choose Dermal Fillers for Facial Enhancement?
              </h2>

              {[
                {
                  title: "Instant Results:",
                  desc: "You will see better facial volume while your skin becomes softer right away during your treatment.",
                },
                {
                  title: "Non-Surgical Treatment:",
                  desc: "Patients can try dermal fillers as non-surgical cosmetic treatments that need minimal recovery time.",
                },
                {
                  title: "Long-Lasting Effects:",
                  desc: "The dental results stay effective for several months to improve the smile's look and appearance.",
                },
                {
                  title: "Customisable To You:",
                  desc: "With delicate care, we ensure that all the treatments suit your face and the appearance you wish to achieve.",
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
                How Dermal Fillers Enhance Your Smile
              </h2>
              <p>
                Not only do dermal fillers improve your skin's look, but they
                also enhance the look of your smile. Here's how:
              </p>
              {[
                {
                  title: "Fill Nasolabial Folds:",
                  desc: "Dermal fillers fill in lines of the upper part of the face, smoothing out laugh lines and creating a more youthful look.",
                },
                {
                  title: "Fill Nasolabial Folds:",
                  desc: "Dermal fillers help erase marks under the eye area while bringing back a young facial look.",
                },
                {
                  title: "Restore Lip Volume:",
                  desc: "The injection process enhances your lips so they look proportionate and rounded.",
                },
                {
                  title: "Lift Cheeks and Jawline:",
                  desc: "Rephrase the natural curves of your cheeks and define your jawline to bring out the best results in your smile.",
                },
                {
                  title: "Smooth Wrinkles Around the Mouth:",
                  desc: "The process diminishes small lines around your mouth while enhancing your youthful appearance.",
                },
              ].map((step, index) => (
                <div key={index} className="mb-3">
                  <h3 className="text-lg lg:text-left text-center ">
                    {step.title}
                  </h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                The Dermal Filler Procedure
              </h2>
              <p>
                The dental practice at City Dental Care guarantees both safety
                and comfort. The treatment process for dermal fillers functions
                in the following manner:
              </p>
              {[
                {
                  title: "Consultation:",
                  desc: "At your beginning meeting, our dental experts view your face and smile to plan your dental needs.",
                },
                {
                  title: "Personalised Treatment Plan:",
                  desc: "Our specialised plan relies on premium filler products that we select to match your needs.",
                },
                {
                  title: "Injection Session:",
                  desc: "The treatment's duration is short, while its comfort level stays minimal. We inject the filler into specific areas to restore volume and smooth effects.",
                },
                {
                  title: "Post-Treatment Care:",
                  desc: "Patients can return to typical activities immediately after the treatment, and slight swelling and redness naturally fade away rapidly.",
                },
              ].map((step, index) => (
                <div key={index} className="mb-3">
                  <h3 className="text-lg lg:text-left text-center ">
                    {step.title}
                  </h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                Why Choose City Dental Care for Derma Fillers?
              </h2>
              <p>
                City Dental Care unites its cosmetic dentistry knowledge with
                Dermal filler practices to provide exceptional dental outcomes
                to patients. The clinic provides treatments that deliver both
                inner and outer rejuvenation so you can experience enhanced
                confidence along with a younger-looking appearance. The
                following reasons demonstrate why City Dental Care serves as
                your premier option for dermal fillers across Edinburgh.
              </p>
              {[
                {
                  title: "Experienced Professionals:",
                  desc: "Our organisation combines extensive experience in dental and aesthetic practices to deliver top-notch patient care.",
                },
                {
                  title: "Advanced Techniques:",
                  desc: "The clinic delivers safe results with a natural appearance through our use of the newest techniques and products.",
                },
                {
                  title: "Personalised Care:",
                  desc: "We personalise every treatment to match your requirements so you obtain optimal results for your teeth and facial appearance.",
                },
                {
                  title: "Comfortable Environment:",
                  desc: "The clinic has designed a soothing environment that promotes comfort for all patients during their treatments.",
                },
              ].map((item, index) => (
                <div key={index} className="mb-3">
                  <h3 className="text-lg text-center lg:text-left">
                    {item.title}
                  </h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>

            
              <h2 className="text-2xl text-center lg:text-left  mb-2">
                Ready for a Beautiful, Refreshed Smile?
              </h2>
              <p>
                Dermal fillers are the ideal treatment for enhancing your smile
                with facial rejuvenation. We offer a range of facial aesthetic
                treatments for both men and women in Edinburgh. At City Dental
                Care, we aim to provide a first-class service. Visit our clinic
                now and book a consultation to improve your looks and smile.
              </p>
              <div className="flex justify-center md:justify-start">
              <button className="mt-4 bg-[#1D5C5C] text-white px-6 py-2 rounded  ">
                Book Your Dermal Filler Session Today!
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
        faqs={faqsDermalFillers}
        imageSrc="/Faq's.webp" /* Update with the actual image source path */
      />
    </>
  );
}
