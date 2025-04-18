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

 export default function BespokeSmileDesign() {
  const faqs = [
  {
   question: "What is Bespoke Smile Design?",
   answer:
    "This is a custom way when you want to create a smile that suits your face and design preferences.",
  },
  {
   question: "How much time does it take to design a unique smile layout?",
   answer:
    "The permanent design process comprises a few planned sessions to produce enduring results.",
  },
  {
   question: "Is Bespoke Smile Design permanent?",
   answer:
    "A custom smile remains in place for years when you maintain proper oral care practices.",
  },
  {
   question: "Can I choose my ideal smile?",
   answer:
    "Absolutely. We collaborate with you to create the smile that has always been your vision.",
  },
  {
   question: "How does Bespoke Smile Design come about during the consultation?",
   answer:
    "Using advanced technology to map out the design, we talk with you to assess your facial features and discuss your goals.",
  },
  {
   question: "Is there any discomfort in receiving a Bespoke Smile Design?",
   answer:
    "It is pain-free and non-invasive, which makes the process comfortable.",
  },
  ];

  return (
  <>
   <BredCrumbServices title="Bespoke Smile Design" subtitle={
    <span>
     <Link className="hover:underline" href="/cosmetic-dentistry">Cosmetic Dentistry</Link> -{' '}
     <span>Bespoke Smile Design</span>
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
                  "Cosmetic Orthodontics",
                  "Stain Removal",
                  "Facial Aesthetics",
                  "Dermal Fillers",
                  "Invisible Filling",
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
       alt="Bespoke Smile Design"
       className="rounded-2xl w-full max-h-[500px] object-cover"
      />

      <div>
       <h1 className="text-4xl lg:text-5xl text-center mb-3 lg:text-left">
        Bespoke Smile Design for Your Unique Look in Edinburgh
       </h1>
       <h2 className="text-2xl lg:text-left text-center mb-2">
        Design The Smile of Your Dreams
       </h2>
       <p className=" leading-relaxed">
        You have set your smile as unique simply because you are special at City Dental Care Edinburgh.
        Bespoke Smile Design offers the optimal way of improving your appearance and giving you a unique smile.
        For anyone wanting minor changes or a comprehensive reddening of the smile, our professional dentists
        implement procedures that fit the latest trends and technology to provide a beautiful smile design
        that complements your facial structure and dental anatomy.
       </p>
      </div>

      <div>
       <h3 className="text-xl lg:text-left text-center mt-4 mb-1">
        What is Bespoke Smile Design?
       </h3>
       <p >
        Cosmetic dentistry or bespoke smile design refers to teeth enhancement through a smile design that fits
        the client's requirements. Our dentists take images and apply pretreatment planning to strengthen the
        odds that the best smile designs will fit the face of the person receiving it. Whether you require
        treatment of spacing, misalignment, or stains, each smile aspect is planned meticulously for beauty
        and realism.
       </p>
      </div>

      <div>
       <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
        How does Bespoke Smile Design benefit its customers?
       </h2>

       {[
        {
         title: "Customised for You:",
         desc: "Your smile is unique. We make a tailored approach that touches up your features to produce results that bring out maximum confidence.",
        },
        {
         title: "Long-Lasting Results:",
         desc: "With regular maintenance, your customised smile will remain attractive for numerous years.",
        },
        {
         title: "Minimally Invasive:",
         desc: "We aim to increase the symmetry of a natural smile with minimum impact on oral health.",
        },
        {
         title: "Advanced Techniques:",
         desc: "It helps our patients achieve a perfect smile using digital technology and the cosmetic dentistry of this era.",
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
        The Bespoke Smile Design Process
       </h2>
       <p >
        Every aspect of the Bespoke Smile Design process is a simple, step-by-step process from the moment
        you see your perfect smile for the first time. Here's what you can expect:
       </p>
       {[
        {
         title: "Digital Smile Imaging",
         desc: "Previewing your new smile is done using state-of-the-art digital imaging. It helps us design a smile that is perfect for your facial features.",
        },
        {
         title: "Consultation & Assessment:",
         desc: "Your journey starts with a personal consultation, a discussion of your goals, and a complete dental exam.",
        },
        {
         title: "Custom Smile Plan",
         desc: "Having seen the digital preview, we create a detailed treatment plan, often including veneers, whitening, and orthodontics.",
        },
        {
         title: "Treatment Execution:",
         desc: "These treatments are done. Our expert dentists will perform the treatments so you can achieve your custom-made smile with as much comfort as possible and with small results.",
        },
        {
         title: "Final Touches:",
         desc: "After your treatment, we will fine-tune your smile to make it flawless and natural.",
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
        Why Choose City Dental Care for Bespoke Smile Design?
       </h2>
       <p >
        Cosmetic dentistry in Edinburgh has built City Dental Care a reputation for excellence throughout the city.
        That is why our patients trust us to transform their smiles.
       </p>
       {[
        {
         title: "Experienced Dentists:",
         desc: "The staff of cosmetic dentists working with our team have expertise in creating natural-looking, beautiful smiles that last.",
        },
        {
         title: "Cutting-Edge Technology:",
         desc: "With the latest dental technology, including 3D digital imagining, we see it on the computer screen and design and execute your perfect smile.",
        },
        {
         title: "Comfortable Experience:",
         desc: "Your comfort is our utmost priority, and we assure you that you will feel at ease during your entire smile journey.",
        },
        {
         title: "Personalised Care:",
         desc: "Your dental needs and aesthetic goals are different, and all treatment plans will suit you.",
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
        Benefit from Initial Consultations to Achieve Your Flawless Smile
       </h2>
       <p >
        Are you ready to achieve a smile that will make you special? At City Dental Care in Edinburgh,
        we are experts in deliberately creating a smile that complements your face's features. Our staff
        will sit down with you to describe your smile plan and the perfect procedure because everyone
        deserves the best smile.
       </p>
       <button className="mt-4 bg-[#1D5C5C] text-white px-6 py-2 rounded  ">
        Get Started on Your Custom Smile
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