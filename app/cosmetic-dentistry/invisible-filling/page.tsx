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

 export default function InvisibleFillings() {
  const faqsInvisibleFillings = [
  {
   question: "How do invisible fillings maintain their invisible characteristics?",
   answer:
    "Composite resin serves as the primary material for invisible tooth restorations because it matches the colour of natural teeth.",
  },
  {
   question: "How many years does a patient need to expect their invisible fillings to remain?",
   answer:
    "Having proper maintenance measures will allow invisible fillings to retain their integrity for 5 to 10 years. The duration depends on the chosen placement area.",
  },
  {
   question: "Are invisible fillings safe?",
   answer:
    "These fillings are totally risk-free because they use biocompatible materials to provide a non-hazardous and efficient approach to hole repair.",
  },
  {
   question: "What is the use of invisible fillings in treating wide cavities?",
   answer:
    "Invisible fillings are suitable for cavities ranging from small to medium. Larger cavities often require extra interventions, such as crowns.",
  },
  {
   question: "Do patients need to take particular care of invisible fillings?",
   answer:
    "Regular oral hygiene practices, including brushing and flossing, are sufficient for invisible fillings; you do not need any special care.",
  },
  {
   question: "Do invisible fillings work effectively when treating front teeth?",
   answer:
    "Invisible fillings are an excellent solution for front teeth restoration because they harmonise perfectly with tooth colour.",
  },
  ];

  return (
  <>
   <BredCrumbServices title="Invisible Fillings" subtitle={(
    <span>
     <Link className="hover:underline" href="/cosmetic-dentistry">Cosmetic Dentistry</Link> -{' '}
     <span>Invisible Fillings</span>
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
                  "Composite Bonding",
                  "Porcelain Veneers",
                  "Bespoke Smile Design",
                  "Cosmetic Orthodontics",
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
       alt="Invisible Fillings"
       className="rounded-2xl w-full max-h-[500px] object-cover"
      />

      <div>
       <h1 className="text-4xl lg:text-5xl text-center mb-3 lg:text-left">
        Invisible Fillings for a Seamless Smile in Edinburgh
       </h1>
       <h2 className="text-2xl lg:text-left text-center mb-2">
        Obtain Flawless Oral Appearance Through Invisible Fillings
       </h2>
       <p className=" leading-relaxed">
        Patients at City Dental Care Edinburgh can obtain invisible fillings that deliver both healthy and attractive smiles.
        The dental restoration material employed for these cases uses premium tooth-colored substances that replicate the natural tooth appearance.
        Patients receive natural restorations from invisible fillings when they need cavity treatments along with cosmetic improvement of their smile appearance.
       </p>
      </div>

      <div>
       <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
        What Are Invisible Fillings?
       </h2>
       <p >
        Invisible or composite fillings have been designed to match their colour with the teeth's natural appearance.
        When teeth appear in your smile, these fillings serve as the best solution for restoration. The substance exhibits durability and lasting properties with a natural smooth finish.
       </p>
       {[
        {
         title: "Tooth-Coloured Material:",
         desc: "Blends effortlessly with your natural teeth for a seamless look.",
        },
        {
         title: "Non-Invasive:",
         desc: "Unable filling treatments need just a minimal amount of preparation work on your tooth structure.",
        },
        {
         title: "Durable and Long-Lasting:",
         desc: "The material supports long-lasting results by providing both functionality and a natural-looking smile.",
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
        Why Choose Invisible Fillings at City Dental Care?
       </h2>
       <p >
        At City Dental Care, you can find superior personalised invisible fillings treatment that leads to long-lasting results. Here's why:
       </p>
       {[
        {
         title: "Expert Dentists:",
         desc: "City Dental Care professionals apply state-of-the-art techniques when accurately placing your fillings.",
        },
        {
         title: "Comfortable Care:",
         desc: "Our organisation maintains your comfort as a top priority from start to finish in the treatment process.",
        },
        {
         title: "Natural Results:",
         desc: "The treatment implements superior tooth-coloured materials to achieve natural results.",
        },
        {
         title: "Fast Recovery:",
         desc: "Your ability to return to routine activities becomes possible immediately after receiving invisible fillings.",
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
        Benefits of Invisible Fillings
       </h2>
       {[
        {
         title: "Aesthetically Pleasing:",
         desc: "Through their blendable nature, invisible fillings match the colour of your teeth entirely, so you maintain natural-looking teeth.",
        },
        {
         title: "Preserve Your Tooth's Integrity:",
         desc: "Unlike with silver amalgam fillings, decision-makers only need minor tooth reduction for invisible fillings.",
        },
        {
         title: "Minimise Sensitivity:",
         desc: "The use of composite fillings for teeth reduces sensitivity levels better than metal fillings do.",
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
        How the Invisible Filling Process Works?
       </h2>
       <p >
        The procedure of getting invisible fillings at City Dental Care follows a streamlined process that provides stress-free treatment.
       </p>
       {[
        {
         title: "Initial Consultation:",
         desc: "Your dentist will evaluate your teeth to explain all treatment alternatives.",
        },
        {
         title: "Filling Application:",
         desc: "With great precision, the dental professional uses composite material to shape the filling according to the cavity's dimensions.",
        },
        {
         title: "Polishing:",
         desc: "After the placement of the filling material, our technicians finish it by making it match your tooth structure.",
        },
        {
         title: "Post-Care:",
         desc: "Aftercare instructions from our team help maintain both comfort and the long-term life of your new filling.",
        },
       ].map((step, index) => (
        <div key={index} className="mb-3">
         <h3 className="text-lg lg:text-left text-center ">{step.title}</h3>
         <p>{step.desc}</p>
        </div>
       ))}
      </div>

      <div className="flex  flex-col items-center">
       <h2 className="text-2xl text-center lg:text-left  mb-2">
        Ready for a Seamless, Natural Smile?
       </h2>
       <p >
        Visual tooth restorations at City Dental Care provide an attractive smile solution that still maintains a natural appearance.
        The expert team at our Edinburgh location will perform a complete tooth restoration using top-quality materials and methods.
       </p>
       <button className="mt-4 bg-[#1D5C5C] text-white px-6 py-2 rounded  ">
        Get a Perfect Smile Today!
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
    faqs={faqsInvisibleFillings}
    imageSrc="/Faq's.webp" /* Update with the actual image source path */
   />
  </>
  );
 }