"use client";
import React from "react";
import {
  ChevronRight,
  Facebook,
  Instagram,
  Mail,
  MoveRight,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import FaqSection from "@/components/faqs";
import BredCrumb from "@/components/BredCrumb";
import Image from "next/image";

export default function Invisalign() {
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
      <BredCrumb title="Invisalign" />

      <div className="container mx-auto px-4 py-8 mb-20">
        <div className="flex flex-col-reverse lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-1/3 flex lg:flex-col flex-col-reverse ">
            <div className="bg-[#F5F5F5] shadow rounded p-10">
              <h2 className="text-lg mb-4">Other Services</h2>
              <div className="flex flex-col gap-3">
                {[
                  "Cosmetic Dentistry",
                  "General Dentistry",
                  "Smile Gallery",
                  "Staff",
                  "pricing",
                ].map((service, i) => {
                  const serviceSlug = service
                    .toLowerCase()
                    .replace(/\s+/g, "-");
                  return (
                    <Link
                      key={i}
                      href={`/${serviceSlug}`} // Adjust link if Orthodontics has its own category
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
                Get Your Perfect Smile through Invisalign Clear Aligners in
                Edinburgh
              </h1>
              <p className="leading-relaxed">
                Do you want an invisible and pleasant option to align your
                teeth? Our clinic stands ready to bring{" "}
                <strong>Invisalign</strong> treatment to your smile needs. At{" "}
                <strong>City Dental Care</strong> we offer Invisalign clear
                aligners to help patients achieve their perfect smile without
                disrupting their daily lives. Our Edinburgh dental professionals
                help people with basic and complex tooth alignment issues.
              </p>
            </div>

            <div>
              <h2 className="text-2xl lg:text-left text-center mt-4 mb-1">
                What is Invisalign?
              </h2>
              <p>
                Invisalign aligns your teeth through clear, removable aligners
                that gradually move your teeth to their target position. The
                treatment with Invisalign works differently because its clear
                braces are hard to spot and better for your mouth comfort.
              </p>
            </div>
            <div className="bg-[#F5F5F5] p-10">
              <h2 className="text-2xl lg:text-left text-center mt-4 mb-1 ">
                How Does Invisalign Work?
              </h2>
              <p>
                It’s no secret that your journey to get your Invisalign ready
                will be smooth at City Dental Care. We start by conducting a
                consultation to evaluate your teeth and discuss the desired
                outcome.
              </p>

              <h3 className="text-xl lg:text-left text-center mt-4 mb-1 flex gap-2 md:gap-4">
                <MoveRight /> <span>Custom Treatment Plan</span>
              </h3>
              <p>
                Using a high-tech 3D scanner, we will have a plan for your
                dental problems and work on it. This will show you where your
                teeth will move and how they should look afterwards.
              </p>

              <h3 className="text-xl lg:text-left text-center mt-4 mb-1 flex gap-2 md:gap-4">
                <MoveRight /> <span>Wear the Aligners</span>
              </h3>
              <p>
                The only thing your aligners require from you once they’re ready
                is to wear them for <strong></strong> a day for the first couple
                of weeks, with frequent exchanges{" "}
                <strong>(about every 1-2 weeks)</strong>.
              </p>

              <h3 className="text-xl lg:text-left text-center mt-4 mb-1 flex gap-2 md:gap-4">
                <MoveRight /> <span>Regular Check-Ups</span>
              </h3>
              <p>
                During your treatment, we will monitor your progress and let you
                know when it's time to move forward and succeed.
              </p>

              <div>
                <h3 className="text-xl lg:text-left text-center mt-4 mb-1 flex gap-2 md:gap-4">
                  <MoveRight /> <span>Beautiful Results</span>
                </h3>
                <p>
                  When you complete your treatment, you’ll have a wonderful
                  smile that makes sense of who you are and how you appear.
                </p>
              </div>
            </div>
            <img
              src="/A7402954.jpg" // Use the same image as requested
              alt="Child Smile Program"
              className="rounded-2xl w-full max-h-[500px] object-cover"
            />

            <div>
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                Why Choose Invisalign?
              </h2>
              <p>
                Invisalign has numerous benefits, making it an advanced teeth
                straightening method.
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
                Invisible Appearance
              </h3>
              <p>
                Clear aligners are clear, so they are almost invisible, allowing
                you to smile with confidence during your treatment.
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
                Comfort
              </h3>
              <p>
                Invisalign aligners are made of smooth plastic, are much more
                comfortable than traditional braces, and don’t irritate your
                gums.
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
                Convenience
              </h3>
                
              <p>
                By being removable, the aligners allow you to eat, drink, brush,
                and floss as usual.
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
                 Faster Treatment
              </h3>
             
              <p>
                As a rule, Invisalign treatment takes less time than braces, and
                most patients complete treatment within{" "}
                <strong>6 to 18 months</strong>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                Why Trust City Dental Care for Your Invisalign Treatment?
              </h2>
              <p>
                You'll receive top-notch dental services at City Dental Care
                from our skilled team. Our professionals strive to offer you an
                easy and pleasant experience during your Invisalign treatment.
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
                Experienced Team
              </h3>
              <p>
                Our dentists are well-versed in Invisalign and have helped many
                patients achieve their aesthetic dental goals.
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
                 State-of-the-Art Technology
              </h3>
              <p>
                We employ the most modern approach to mapping and designing
                treatment plans, making our treatments very accurate.
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
                 Personalised Care
              </h3>
              <p>
                We tailor Invisalign treatment specifically for each person to
                achieve the best results.
              </p>
            </div>

            <div className="bg-[#F5F5F5] p-10">
              <div>
                <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                  The Benefits of Invisalign at City Dental Care
                </h2>
                <p>
                  Modern teeth straightening incorporates a comfortable,
                  convenient, and confident way to straighten your teeth through
                  Invisalign.
                </p>
              </div>

              <div>
                <h3 className="text-xl lg:text-left text-center mt-4 mb-1 flex gap-2 md:gap-4">
                  <MoveRight /> <span> Virtually Invisible</span>
                </h3>
                <p>
                  You can straighten your teeth while remaining invisible to
                  others because clear aligners hide beneath your teeth.
                </p>
              </div>
              <div>
                <h3 className="text-xl lg:text-left text-center mt-4 mb-1 flex gap-2 md:gap-4">
                  <MoveRight /> <span> Comfortable Fit</span>
                </h3>
                <p>
                  You will not feel discomfort from the smooth plastic inside
                  your Invisalign aligners as they rest against your gums and
                  cheeks.
                </p>
              </div>
              <div>
                <h3 className="text-xl lg:text-left text-center mt-4 mb-1 flex gap-2 md:gap-4">
                  <MoveRight /> <span> Flexible and Removable</span>
                </h3>
                <p>
                  You can eat and drink freely and maintain perfect oral hygiene
                  with ease.
                </p>
              </div>
              <div>
                <h3 className="text-xl lg:text-left text-center mt-4 mb-1 flex gap-2 md:gap-4">
                  <MoveRight /> <span> Quicker Results</span>
                </h3>
                <p>
                  Patients achieve treatment progress more rapidly when they use
                  Invisalign instead of standard braces.
                </p>
              </div>
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
                 View Patient Outcomes That Show Actual Results
              </h3> 
              <p>
                Review our patient photos to understand how we help people in
                Edinburgh achieve better smiles. Through Invisalign treatment,
                we have made numerous people in Edinburgh happier about their
                smiles instantly.
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
                Get professional Invisalign treatment at budget-friendly rates
                in Edinburgh.
              </h3> 
              <p>
                Concerned about the cost? Our clinic offers patients the option
                to pay for dental services without interest as part of our
                flexible payment choices. You can receive Invisalign treatment
                at <b>£5</b> per week to obtain your dream smile while staying
                within budget.
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
            Is Invisalign Right for You?
              </h3> 
              <p>
                City Dental Care is ready to assist you if you are ready to
                change your smile. During the consultation, we assess your needs
                and decide whether Invisalign is the right option. Invisalign
                may be the ideal treatment for a patient interested in
                effectively and discreetly straightening their teeth.
              </p>
            </div>

            <div>
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                Get Started Today!
              </h2>
              <p>
                Postpone your smile transformation no more. Contact us
                immediately to schedule your online appointment and discover the
                advantages of using Invisalign. Expert care at City Dental Care
                in Edinburgh allows you to achieve your desired smile.
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
              <Link href='https://www.facebook.com/citydentalcareedinburgh'><Facebook className=" cursor-pointer w-5 h-5" /></Link>
                <Link href='mailto:info@citydentalcare.co.uk'><Mail className=" cursor-pointer w-5 h-5" /></Link>
                <Link href='https://www.instagram.com/citydentalcare.edin/'><Instagram className=" cursor-pointer w-5 h-5" /></Link>
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
