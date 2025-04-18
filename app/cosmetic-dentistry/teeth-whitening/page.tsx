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

 export default function TeethWhiteningPage() {
  const faqsTeethWhitening = [
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
         "Facial Aesthetics",
                  "Dermal Fillers",
                  "Invisible Filling",
                  "Composite Bonding",
                  "Porcelain Veneers",
                  "Bespoke Smile Design",
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
       <h2 className="text-xl mb-3">
        Enhance Your Smile with <br className="hidden sm:block" />
        Professional Care
       </h2>
       <h3 className="mb-2">
       Transform your oral health with top-tier dental services
       </h3>
       
       <p className="text-gray-600 text-sm mb-4">
       Turn to the premier dental clinics for professional dental services. Our services range from general check-ups and cleaning services to other standard aesthetic procedures that people seek. Can't visit in person? Get an online appointment for emergency services!
       Book Your Appointment Today!
       </p>
       
       <button
        className="bg-[#1D5C5C] text-white px-5 py-2 rounded "
        onClick={() => console.log("Make Appointment Clicked")}
       >
        Book Your Appointment Today
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
       <h1 className="text-4xl lg:text-5xl text-center mb-3 mt-4 lg:text-left">
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

      <div>
       <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
        Why Choose City Dental Care for Teeth Whitening?
       </h2>
       <p >
        The longstanding experience of City Dental Care in cosmetic dentistry makes the clinic Edinburgh's prime choice for secure and effective teeth whitening services.
        Our professional staff employs modern technological equipment with advanced methods to deliver the optimum outcomes.
       </p>
       {[
        {
         title: "Expert Dentists:",
         desc: "A team of experienced professionals provides teeth whitening services, which they design according to your unique requirements.",
        },
        {
         title: "Comfortable Experience:",
         desc: "Our facility provides an atmosphere designed to create calmness so clients feel comfortable during their treatment period.",
        },
        {
         title: "Personalised Care:",
         desc: "Our goal is your satisfaction with the result when we tailor our whitening treatments to meet your professional whitening goals.",
        },
       ].map((item, index) => (
        <div key={index} className="mb-3">
         <h3 className="text-lg text-center lg:text-left">{item.title}</h3>
         <p >{item.desc}</p>
        </div>
       ))}
      </div>

      <div>
       <h2 className="text-2xl text-center lg:text-left  mb-2">
        Get the Bright Smile You Deserve
       </h2>
       <p >
        Are you looking to get a sparkling white smile? If you visit the City Dental Care Clinic, you can do it orally.
        There is no reason to wait any longer to bring out your best smile and feel confident about your teeth whitening.
        If you are in Edinburgh, plan a visit to City Dental Care and speak to us about planning your perfect smile transformation today.
       </p>
       <br />
       <div className="flex justify-center items-center ">
       <Link    
              href="/"
              className=" bg-[#1d5c5c] text-white px-4 py-3 text-sm uppercase text-center"
            >
              Book Your Teeth Whitening Appointment Now
            </Link>
       </div>
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
    faqs={faqsTeethWhitening}
    imageSrc="/Faq's.webp" /* Update with the actual image source path */
   />
  </>
  );
 }