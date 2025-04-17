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

export default function ServicePage() {
    const faqs = [
        {
          question: "What is composite bonding?",
          answer:
            "The composite bonding process brings tooth-coloured resin to build cosmetic improvements on teeth.",
        },
        {
          question: "How many years will composite bonding stay effective?",
          answer:
            "Under good maintenance, composite bonding stays effective between 5 and 10 years.",
        },
        {
          question: "Is composite bonding painful?",
          answer:
            "Composite bonding works without hurting you because anaesthesia is unnecessary during the process.",
        },
        {
          question: "How much does composite bonding treatment cost completely?",
          answer:
            "Our final cost depends on how much bonding work needs to be done and remains affordable for our patients.",
        },
        {
          question: "How much time is needed to perform this work?",
          answer:
            "The composite treatment lasts thirty minutes to one hour, depending on the number of teeth involved.",
        },
      ];

  return (
    <>
      <BredCrumbServices title="Composite Bonding"   subtitle={
    <span>
      <Link className="hover:underline" href="/cosmetic-dentistry">Cosmetic Dentistry</Link> -{' '}
      <span>Composite Bonding</span>
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
                  "Braces & Aligners",
                  "Teeth Whitening",
                  "Dental Implant",
                  "Dental Floss",
                  "Wisdom Teeth",
                  "Molar Crown",
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
              alt="Composite Bonding"
              className="rounded-2xl w-full max-h-[500px] object-cover"
            />

            <div>
              <h1 className="text-4xl lg:text-5xl text-center mb-3 lg:text-left">
                Cosmetic Dentistry Services at City Dental Care
              </h1>
              <p className=" leading-relaxed">
                Enjoy a beautiful smile transformation through our high-end
                cosmetic dentistry at City Dental Care in Edinburgh. Our
                professional dentistry practice offers different cosmetic
                treatments, such as composite bonding, porcelain veneers, teeth
                whitening, and other options to give you your most beautiful
                smile. We offer solutions for cosmetic corrections where an
                individual needs a fill-up or a complete smile transformation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl lg:text-left text-center mb-2">
                Composite Bonding for a Perfect Smile in Edinburgh
              </h2>
              <h3 className="text-xl lg:text-left text-center mb-1">
                Achieve Your Dream Smile with Composite Bonding
              </h3>
              <p >
                According to the principles at City Dental Care, everyone should
                have access to an attractive, confident smile. Composite bonding
                is a quick and budget-friendly treatment that gives patients new
                smile possibilities for damaged teeth. That is why our dental
                dentists in Edinburgh incorporate the latest procedures and
                materials to leave our patients with natural, long-lasting
                smiles.
              </p>
            </div>

            <div>
              <h3 className="text-xl lg:text-left text-center mt-4 mb-1">
                What is Composite Bonding?
              </h3>
              <p >
                It is a cosmetic dental treatment that directly fixes any
                blemishes by applying a tooth-coloured resin to the tooth. This
                resin is fashioned and hardened to harmonise with your natural
                teeth. Composite bonding can enhance your smile temporarily or
                permanently at any point on your teeth.
              </p>
            </div>

            <div>
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                Why Choose Composite Bonding?
              </h2>

              {[
                {
                  title: "Fast and Effective:",
                  desc: "You can get results in one visit alone. There is no need for multiple visits or long waiting times.",
                },
                {
                  title: "Natural Look:",
                  desc: "The resin is close to your tooth colour, ensuring a perfect, neat, natural finish.",
                },
                {
                  title: "Minimal Invasive:",
                  desc: "Tooth removal is little to none, and your natural teeth are preserved.",
                },
                {
                  title: "Affordable:",
                  desc: "Achieve a beautiful smile without paying hefty money for veneers or crowns.",
                },
              ].map((item, index) => (
                <div key={index} className="mb-3">
                  <h3 className="text-lg text-center lg:text-left ">{item.title}</h3>
                  <p >{item.desc}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-2xl lg:text-left text-center mb-2">
                How Does Composite Bonding Work?
              </h2>
              {[
                {
                  title: "Consultation:",
                  desc: "Based on your level or dental needs, we discuss composite bonding as a way of helping you achieve your desired smile.",
                },
                {
                  title: "Tooth Preparation:",
                  desc: "No anaesthesia is usually required, so we’ve gently prepared your tooth for the resin to adhere.",
                },
                {
                  title: "Resin Application:",
                  desc: "It is then shaped and applied as a resin in the natural contours of your teeth.",
                },
                {
                  title: "Hardening and Polishing:",
                  desc: "The resin is hardened by a special light and polished to perfection.",
                },
              ].map((step, index) => (
                <div key={index} className="mb-3">
                  <h3 className="text-lg lg:text-left text-center ">{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-xl lg:text-left text-center mb-2">
                Who Is an Ideal Patient for Composite Bonding?
              </h3>
              <p className=" mb-2">
                Composite bonding works well to fix minor cosmetic problems,
                including these factors:
              </p>
              <ul className="list-disc pl-5 ">
                <li>Chipped or cracked teeth</li>
                <li>Gaps between teeth</li>
                <li>Discolored or stained teeth</li>
                <li>Minor misalignments</li>
              </ul>
              <p className="mt-2">
                People who want basic and cost-effective smile improvement
                should try composite bonding.
              </p>
            </div>

            <div>
              <h2 className="text-2xl lg:text-left text-center mb-2">
                Benefits of Choosing City Dental Care for Composite Bonding
              </h2>
              {[
                {
                  title: "Expert Dentists:",
                  desc: "Our qualified dental team has several years of cosmetic dentistry experience to produce successful beauty outcomes.",
                },
                {
                  title: "Advanced Techniques:",
                  desc: "At City Dental Care, we adopt the latest dental technology and premium materials to ensure that you receive the highest-standard composite bonding treatment.",
                },
                {
                  title: "Personalised Care:",
                  desc: "This is why all the treatments are individual in our facility, and the treatment outcome can be as good as possible.",
                },
                {
                  title: "Convenient Location:",
                  desc: "The clinic is in Edinburgh, close enough to provide first-class dental care.",
                },
              ].map((item, index) => (
                <div key={index} className="mb-3">
                  <h3 className="text-lg text-center lg:text-left">{item.title}</h3>
                  <p >{item.desc}</p>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-2xl lg:text-left text-center mb-2">
                Why Choose Composite Bonding instead of Other Treatments?
              </h2>
              {[
                {
                  title: "Cost-Effectiveness:",
                  desc: "The cost of composite bonding is much less than that of veneers or crowns.",
                },
                {
                  title: "Quick Treatment Time:",
                  desc: "Most treatments are done in one visit.",
                },
                {
                  title: "Reversibility:",
                  desc: "Replacing broken bonding material remains simple because it does not harm your original teeth.",
                },
              ].map((item, index) => (
                <div key={index} className="mb-3">
                  <h3 className="text-lg lg:text-left text-center ">{item.title}</h3>
                  <p className="">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex  flex-col items-center">
              <h2 className="text-2xl text-center lg:text-left  mb-2">
                Get a Composite Bonding appointment today!
              </h2>
              <p >
                Are you considering getting a new veneer to fix that overdue
                cosmetic work? For a short duration and a very low cost, you can
                receive top-quality treatment as a patient at City Dental Care.
                There is no reason to wait longer to receive the beautiful smile
                you’ve always dreamed of!
              </p>
              <button className="mt-4 bg-[#1D5C5C] text-white px-6 py-2 rounded  ">
                Book Your Consultation Now!
              </button>
            </div>

            <hr className="text-gray-500 mt-6" />

            <div className="mt-6">
              <p className="mb-2">Follow Us:</p>
              <div className="flex gap-4 text-[#1D5C5C]">
                <Facebook className="   cursor-pointer w-5 h-5" />
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
        imageSrc="/Faq's.png" // Update with the actual image source path
      />
    </>
  );
}
