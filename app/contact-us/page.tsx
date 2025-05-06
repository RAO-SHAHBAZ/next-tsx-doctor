import BredCrumb from "@/components/BredCrumb"

import Maps from "@/components/maps";


import {
  Mail,
  Phone,
  MapPin,
  Globe,
  CalendarDays,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function ContactUS() {
  return (
<>
    <BredCrumb title="Contact US" />

    <section className=" py-16 px-5 container  w-full mx-auto">
      <div className=" grid md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div>
          <h1 className="text-lg text-[#1D5C5C] ">Contact Us</h1>
          <h2 className="text-4xl md:text-5xl  mt-2 mb-4  ">Get in Touch with City Dental Care</h2>
          <h3 className="text-xl">
          Your Journey to a Healthier Smile Starts Here!
          </h3>
          <br />
          <p className="text-gray-600 mb-8">
          At City Dental Care, we go out of our way to serve all our patients to the best of our ability in dental care. We have an expert team ready to help, whether you need their services for a routine check-up or an emergency, cosmetic dentistry, or other purposes. Feel free to call us or make an appointment online so that a professional can attend to your individual needs.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Box: Phone & Location */}
            <div className=" p-6  ">
              <h4 className=" text-xl mb-4 text-[#1D5C5C]">Get In Touch</h4>

              <div className="flex items-start gap-4 mb-5">
                <div className="bg-[#1D5C5C] text-white p-3 rounded-full">
                  <Phone size={20} />
                </div>
                <div>
                  <h5 className=" text-lg">Phone</h5>
                  <p className="text-gray-600">01312282442</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#1D5C5C] text-white p-3 rounded-full">
                  <MapPin size={20} />
                </div>
                <div>
                  <h5 className=" text-lg">Location</h5>
                  <p className="text-gray-600">9 Earl Grey St Edinburgh EH3 9BN</p>
                </div>
              </div>
            </div>

            {/* Right Box: Email & Website */}
            <div className=" p-6   ">
              <h4 className=" text-xl mb-4 text-[#1D5C5C]">Email</h4>

              <div className="flex items-start gap-4 mb-5">
                <div className="bg-[#1D5C5C] text-white p-3 rounded-full">
                  <Mail size={20} />
                </div>
                <div>
                  <h5 className=" text-lg">Email</h5>
                  <p className="text-gray-600">info@citydentalcare.co.uk</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#1D5C5C] text-white p-3 rounded-full">
                  <Globe size={20} />
                </div>
                <div>
                  <h5 className=" text-lg">Website</h5>
                  <p className="text-gray-600">https://citydentalcare.co.uk/</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column – Opening Hours */}
        <div className="bg-[#1D5C5C] rounded-2xl text-white p-8">
          <h3 className="text-xl ">We Encourage You to Schedule a Consultation</h3>

          <div className="flex items-center gap-2 mt-6 mb-4">
            <CalendarDays size={20} />
            <h4 className="text-lg ">Opening Hours</h4>
          </div>

          <div className="space-y-3 border-t border-white/30 pt-4">
            <div className="flex justify-between">
              <span>Monday - Friday :</span>
              <span>08.00 am - 07.00 pm</span>
            </div>
            <div className="flex justify-between border-t border-white/30 pt-3">
              <span>Saturday:</span>
              <span>09.00 am - 08.00 pm</span>
            </div>
            <div className="flex justify-between border-t border-white/30 pt-3">
              <span>Sunday</span>
              <span>Closed</span>
            </div>
          </div>

          <div className="mt-6 flex gap-4">

            <h4 className="md:text-lg">Follow Us :</h4>
            <div className="flex gap-4">
              <Link href="https://www.facebook.com/citydentalcareedinburgh" className="bg-white text-[#1D5C5C] p-2 rounded-full">
                <Facebook size={16} />
              </Link>
              <Link href="mailto:info@citydentalcare.co.uk" className="bg-white text-[#1D5C5C] p-2 rounded-full">
                <Mail size={16} />
              </Link>

              <Link href="https://www.instagram.com/citydentalcare.edin/" className="bg-white text-[#1D5C5C] p-2 rounded-full">
                <Instagram size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Contact Form */}
    <section className="w-full py-12 mb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Side: Image */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <Image
                src="/city-dental-care-contact.webp"
                alt="Dental team working on a patient"
                width={500}
                height={500}
              
               
              />
              {/* SVG Clip Path for Organic Shape */}
              <svg width="0" height="0">
                <defs>
                  <clipPath id="organic-shape" clipPathUnits="objectBoundingBox">
                    <path d="M0.5,0 C0.776,0 1,0.224 1,0.5 C1,0.776 0.776,1 0.5,1 C0.224,1 0,0.776 0,0.5 C0,0.224 0.224,0 0.5,0 Z M0.5,0.1 C0.716,0.1 0.9,0.284 0.9,0.5 C0.9,0.716 0.716,0.9 0.5,0.9 C0.284,0.9 0.1,0.716 0.1,0.5 C0.1,0.284 0.284,0.1 0.5,0.1 Z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="w-full md:w-1/2">
          <div className="uppercase  text-[#1D5C5C] mb-4 mt-8">Ask Us Anything</div>
            <h2 className="text-4xl md:text-5xl   mb-4">
              Have Other Questions?
            </h2>
            <h3 className="text-xl">
            We're Here to Help – Ask Your Questions Anytime!
            </h3>
            <br />
            <p className="text-gray-500 mb-6">
            We present the possibility of making dental care as accessible and convenient as possible for you. For any further inquiries or issues related to our clinic services or to book an appointment, don't hesitate to contact us using the information provided. Our friendly customer support team is always ready to help and assist with your needs. Have a question? To get an answer, please fill out the form below, and we will respond as soon as possible.
            </p>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#40E0D0] focus:border-transparent"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#40E0D0] focus:border-transparent"
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Your Number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#40E0D0] focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md "
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#1d5c5c] text-white px-6 py-3 rounded-md"
              >
                Get in Touch Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <Maps/>


</>
  )
}

export default ContactUS