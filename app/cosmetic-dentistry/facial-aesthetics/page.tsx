"use client";

import React from "react";
import { Facebook, Instagram, Mail, MoveRight, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import FaqSection from "@/components/faqs";
import BredCrumbServices from "@/components/BreadCrumbServices";
import Image from "next/image";

export default function FacialAesthetics() {
  const faqsFacialAesthetics = [
    {
      question: "What are facial aesthetic treatments?",
      answer:
        "It involves altering the appearance of the face through various noninvasive treatments.",
    },
    {
      question: "Are facial aesthetic treatments safe?",
      answer:
        "Yes, they do not pose any threat if they are done by a professional who has undergone the course, such as the City Dental Care in Edinburgh.",
    },
    {
      question:
        "How long does one stand to benefit from the given facial aesthetic treatments?",
      answer:
        "The results are usually long-lasting, ranging from some months to one year, depending on the kind of treatment and other factors.",
    },
    {
      question:
        "Are there any post-operative consequences in the facial aesthetics treatment process?",
      answer:
        "Regardless of skin type, most facial aesthetic treatments do not cause severe reactions in both ladies and gentlemen.",
    },
    {
      question:
        "Is it safe to perform facial aesthetic treatments along with some other cosmetic treatments?",
      answer:
        "Indeed, a number of patients opt for the simultaneous completion of the aesthetic correction of the face and body. Treatments that best address specific conditions that a patient may be suffering from will be recommended.",
    },
  ];

  return (
    <>
      <BredCrumbServices
        title="Facial Aesthetics"
        subtitle={
          <span>
            <Link className="hover:underline" href="/cosmetic-dentistry">
              Cosmetic Dentistry
            </Link>{" "}
            - <span>Facial Aesthetics</span>
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
                  "Dermal Fillers",
                  "Invisible Fillings",
                  "Composite Bonding",
                  "Porcelain Veneers",
                  "Bespoke Smile Design",
                  "Cosmetic Orthodontics",
                  "Teeth Whitening",
                  "Stain Removal",
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
              alt="Facial Aesthetics"
              className="rounded-2xl w-full max-h-[500px] object-cover"
            />

            <div>
              <h1 className="text-4xl lg:text-5xl text-center mb-3 lg:text-left">
                Rejuvenate Your Appearance with Expert Facial Aesthetic
                Treatments in Edinburgh
              </h1>
              <br />
              <h2 className="text-2xl lg:text-left text-center mb-2">
                Why Choose Facial Aesthetic Treatments?
              </h2>
              <p className=" ">
                City Dental Care in Edinburgh offers several cosmetic procedures
                aimed at improving the look of your face and smile. <br />
                Our facial aesthetics treatments offer patients a non-surgical
                approach to altering and improving facial features such as
                lines, skin roughness, and wrinkles.
              </p>
              <p className=" ">
                Facial aesthetics offers many benefits, including smoothing
                wrinkles and improving the contours of the face. For these
                reasons, you may want to consider it.
              </p>
            </div>

            <div>
              <h3 className="text-xl lg:text-left text-center mt-4 mb-1 inline-flex gap-2 items-center justify-center">
                <Image
                  src="/forward-icon.webp"
                  alt="Forward Icon"
                  width={15}
                  height={15}
                  className="w-[15px] h-[15px]"
                />
                Instant Results
              </h3>
              <p>
                Improvements in facial aesthetics will immediately improve the
                texture, tone, and volume of your skin. Whether smoothing
                wrinkles or rejuvenating the complexion, you'll always have a
                more youthful complexion.
              </p>
            </div>

            <div>
            <h3 className="text-xl lg:text-left text-center mt-4 mb-1 inline-flex gap-2 items-center justify-center">
                <Image
                  src="/forward-icon.webp"
                  alt="Forward Icon"
                  width={15}
                  height={15}
                  className="w-[15px] h-[15px]"
                />
               Non-Surgical Treatment:
              </h3>

              <p>
                Facial aesthetic procedures are noninvasive and do not require
                surgery. It is ideal for those who want a younger appearance
                without long periods of recovery.
              </p>
            </div>

            <div>
            <h3 className="text-xl lg:text-left text-center mt-4 mb-1 inline-flex gap-2 items-center justify-center">
                <Image
                  src="/forward-icon.webp"
                  alt="Forward Icon"
                  width={15}
                  height={15}
                  className="w-[15px] h-[15px]"
                />
              Long-Lasting Effects:
              </h3>

              <p>
                Facial aesthetic treatments provide results that stay effective
                for months, thus allowing you to regain a firmer, youthful
                facial appearance.
              </p>
            </div>

            <div>
            <h3 className="text-xl lg:text-left text-center mt-4 mb-1 inline-flex gap-2 items-center justify-center">
                <Image
                  src="/forward-icon.webp"
                  alt="Forward Icon"
                  width={15}
                  height={15}
                  className="w-[15px] h-[15px]"
                />
                 Customisable To You:
              </h3>
              <p>
                Our procedures at City Dental Care are structured according to
                the assessed facial characteristics of each patient seeking
                aesthetic enhancement. The clinic's professional staff develops
                tailored treatments for every patient to emphasise their genuine
                facial characteristics.
              </p>
            </div>

            <div className="bg-[#F5F5F5] p-10">
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                How Facial Aesthetics Treatments Develop Your Smile Appearance?
              </h2>
              <p>
                Facial aesthetics treatments bring more than skin rejuvenation
                benefits because they improve the appearance of your smile.
                Here's how:
              </p>
              <br />
              {[
                {
                  title: "Smooth Fine Lines and Wrinkles Around the Mouth",
                  desc: "The treatment of mouth and lip wrinkles through facial aesthetic interventions produces a younger-looking and smoother skin surface. This treatment improves the appearance of your smile and your confidence.",
                },
                {
                  title: "Lifting the cheeks along with the jaw area",
                  desc: "The way a smile looks gets enhanced dramatically through facial structure enhancement of the jawline and cheeks.",
                },
                {
                  title:
                    "Facial Treatments Will Increase Volume and Make Your Skin Smoother",
                  desc: "Aesthetic facial procedures restore both inner volume and outer smoothness so you look young and alive while smiling.",
                },
              ].map((item, index) => (
                <div key={index} className="mb-3">
                  <h3 className="text-lg text-center lg:text-left inline-flex gap-2 ">
                  <MoveRight /> {item.title}
                  </h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
            <img
              src="/A7402954.jpg"
              alt="Facial Aesthetics"
              className="rounded-2xl w-full max-h-[500px] object-cover"
            />

            <div>
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
                The Facial Aesthetic Treatment Process
              </h2>
              <p>
                To this end, we operate under the premise of ensuring that our
                patients are as comfortable as possible during the dental
                procedures that they undergo with us.
                <br /> All our facial aesthetic
                treatments are highly effective for the given problem and last
                long; we provide a relaxing environment.
              </p>
              <br />
              {[
                {
                  title: "Consultation",
                  desc: "The first step to treatment is patient evaluation, during which our aesthetic specialist conducts a face-to-face interview and examines the patient's face. This enables the physician to develop a therapeutic management plan that best suits the patient.",
                },
                {
                  title: "Personalised Treatment Plan",
                  desc: "Our state-of-the-art methods allow us to provide an individual treatment or plan for each client, focusing on line elimination, cheek filling, and more.",
                },
                {
                  title: "Treatment Session",
                  desc: "These are brief procedures that do not even take a day and do not necessitate hospitalisation in our clinic. You have every reason to relax while our specialist works on making your face look more aesthetically appealing.",
                },
                {
                  title: "Post-Treatment Care",
                  desc: "After the facial aesthetics treatment, you can immediately resume your everyday activities. Even if there is a slight inflammation, the skin usually returns to its everyday shade within a few hours, and you will be able to adore a youthful look right away.",
                },
              ].map((step, index) => (
                <div key={index} className="mb-3">
                  <h3 className="text-lg lg:text-left text-center inline-flex gap-2 items-center justify-center ">
                  <Image src="/forward-icon.webp"
                                      alt="Forward Icon"
                                      width={15}
                                      height={15}
                                      className="w-[15px] h-[15px]"
                                    /> {step.title}
                  </h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#F5F5F5] p-10">
              <h2 className="text-2xl lg:text-left text-center mt-6 mb-2 ">
                Why Choose City Dental Care for Facial Aesthetics?
              </h2>
              <p>
                City Dental Care unites its cosmetic dentistry knowledge with
                facial aesthetics practices to provide exceptional dental
                outcomes to patients. The clinic provides treatments that
                deliver both inner and outer rejuvenation so you can experience
                enhanced confidence along with a younger-looking appearance. The
                following reasons demonstrate why City Dental Care serves as
                your premier option for facial aesthetics across Edinburgh.
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
                  desc: "We personalise every treatment to match your requirements, so you obtain optimal results for your teeth and facial appearance.",
                },
                {
                  title: "Comfortable Environment:",
                  desc: "The clinic has designed a soothing environment that promotes comfort for all patients during their treatments.",
                },
              ].map((item, index) => (
                <div key={index} className="mb-3">
                  <h3 className="text-lg text-center lg:text-left inline-flex gap-2">
                  <MoveRight />  {item.title}
                  </h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl text-center lg:text-left  mb-2">
              Ready for a Beautiful, Refreshed Smile?
            </h2>
            <p>
              Facial aesthetics treatment is the ideal solution for improving
              your smile and rejuvenating your face. City Dental Care enables
              patients to receive customised facial aesthetic treatments for
              improving fine lines, enhancing volume, and defining their
              jawlines to achieve youthful facial effects. Secure your
              appointment for a consultation, which will lead you to a confident
              smile with enhanced radiance.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="mt-4 bg-[#1D5C5C] text-white px-6 py-2 rounded  ">
                Book Your Facial Aesthetic Consultation Today!
              </button>
            </div>

            <hr className="text-gray-500 mt-6" />

            <div className="mt-6">
              <p className="mb-2">Follow Us:</p>
              <div className="flex gap-4 text-[#1D5C5C]">
                <Link href="https://www.facebook.com/citydentalcareedinburgh">
                  <Facebook className=" cursor-pointer w-5 h-5" />
                </Link>
                <Link href="mailto:info@citydentalcare.co.uk">
                  <Mail className=" cursor-pointer w-5 h-5" />
                </Link>
                <Link href="https://www.instagram.com/citydentalcare.edin/">
                  <Instagram className=" cursor-pointer w-5 h-5" />
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>

      <FaqSection
        faqs={faqsFacialAesthetics}
        imageSrc="/Faq's.webp" /* Update with the actual image source path */
      />
    </>
  );
}
