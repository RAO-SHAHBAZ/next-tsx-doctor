"use client";

import { Star, CalendarCheck, Clock1 } from "lucide-react";
import Image from "next/image"; // Import the Image component

export default function Hero() {
  return (
    <div className="relative w-full min-h-[800px] flex flex-col justify-center items-center">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          <Image
            src="/city-dental-care-hero-2.webp" // Path relative to the `public` folder
            alt="Hero Background"
            fill // Replaces `bg-cover` by filling the container
            className="object-cover object-[60%] md:object-center" // Matches your original positioning
            priority // Optional: Loads this image eagerly since it’s above the fold
          />
          <div className="absolute inset-0 bg-[#0C2F2FCC] opacity-95"></div>
        </div>
      </div>

      {/* Content Wrapper */}
      <div className="container mx-auto px-4 md:px-6 text-left relative z-10 text-white">
        <div className="max-w-3xl">
          {/* Title */}
          <h1 className="text-5xl md:text-3xl lg:text-7xl font-light mb-6">
            Smile Brighter Today with <span className="text-[#40E0D0]">Edinburgh's</span> Top Dentists
          </h1>

          {/* Subtitle */}
          <p className=" mb-10 max-w-2xl font-Nova">
            Welcome to City Dental Care Clinic in Edinburgh, which is fully equipped with state-of-the-art machines for
            patient comfort. We offer Invisalign treatment, teeth whitening, and smile makeovers to boost confidence and
            durability.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mb-16">
            <a href="#" className="bg-[#225555] border border-[#225555] text-white px-8 py-4 text-center uppercase">
              Book A Consultation
            </a>
            <a
              href="#"
              className="bg-transparent border-[2px] border-[#319684] text-white px-8 py-4 text-center uppercase hover:bg-white hover:text-[#003B3B] transition"
            >
              Explore Our Services
            </a>
          </div>

          {/* Reviews Section */}
          <div className="flex items-center gap-4">
            {/* Profiles For Reviews */}
            <div className="flex -space-x-5">
              <Image
                src="/profile1.png"
                alt="User 1"
                width={60}
                height={60}
                className="hidden md:block rounded-full border border-white"
              />
              <Image
                src="/profile4.png"
                alt="User 2"
                width={60}
                height={60}
                className="hidden md:block rounded-full border border-white"
              />
              <Image
                src="/profile3.png"
                alt="User 3"
                width={60}
                height={60}
                className="hidden md:block rounded-full border border-white"
              />
            </div>
            <div>
              <div className="text-3xl mb-0.5 hidden md:block font-medium">Google</div>
              <div>
                Based on <span className="font-bold text-xl">200 reviews</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="mr-2 text-lg font-semibold">4.8 out of 5</div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Get Appointment Sidebar */}
      <div className="fixed right-5 top-[40%] transform -translate-y-1/2 z-50 hidden md:block">
        <div className="bg-[#37FFDB] text-[#1D5C5C] flex flex-wrap font-bold py-5 px-8 rounded rotate-[-90deg] origin-right whitespace-nowrap">
          <CalendarCheck className="w-8 h-6" />
          <span className="ml-2">GET APPOINTMENT</span>
        </div>
      </div>

      {/* Mobile Get Appointment Sidebar */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 md:hidden">
        <div className="bg-[#37FFDB] py-3 px-3 rounded rotate-[-90deg] origin-right whitespace-nowrap">
          <Clock1 className="text-[#1D5C5C]" />
        </div>
      </div>
    </div>
  );
}