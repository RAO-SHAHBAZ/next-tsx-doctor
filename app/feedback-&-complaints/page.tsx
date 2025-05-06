"use client";

import React from "react";
import { Facebook, Instagram, Mail } from "lucide-react";
import Link from "next/link";
import FaqSection from "@/components/faqs";
import BredCrumbServices from "@/components/BreadCrumbServices";

export default function FeedbackComplaints() {
  return (
    <>
      <BredCrumbServices
        title="Feedback & Complaints"
        subtitle={
          <span>
             <span>Feedback & Complaints</span>
          </span>
        }
      />

      <div className="container mx-auto px-4 py-8 mb-20">
        <div className="flex flex-col gap-6">
          <main className="w-full">
            <h1 className="text-4xl lg:text-5xl text-center mb-6 mt-3 lg:text-left">
              Share Your Experience – Feedback & Complaints at City Dental Care
            </h1>
            <p className="leading-relaxed mb-4">
              At City Dental Care, we value your feedback! Whether you’ve had a
              fantastic experience or encountered a concern, we’re here to
              listen and improve. Your thoughts help us enhance our service and
              deliver better care.
            </p>

            <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
              How to Provide Feedback
            </h2>
            <p className="leading-relaxed mb-4">
              We encourage you to share your experiences with us. You can:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                Please fill out the feedback form on our{" "}
                <Link href="/contact-us" className="text-[#1D5C5C] hover:underline">
                  contact page
                </Link>
                .
              </li>
              <li>Call us at <Link className="hover:underline text-[#1D5C5C]" href="tel:+921312282442">
                <span>01312282442</span>
                </Link></li>
              <li>Please email us at <span className="hover:underline text-[#1D5C5C]"><Link href= "mailto:info@citydentalcare.co.uk">info@citydentalcare.co.uk</Link></span></li>
            </ul>

            <h3 className="text-xl lg:text-left text-center mt-4 mb-2">
              What Happens After You Submit Feedback?
            </h3>
            <p className="leading-relaxed mb-4">
              Once we receive your feedback, our team will review it and respond
              within [Insert time]. If you’ve shared a complaint, we will work
              quickly to resolve the issue and ensure your satisfaction.
            </p>

            <h3 className="text-xl lg:text-left text-center mt-4 mb-2">
              Our Promise
            </h3>
            <p className="leading-relaxed mb-4">
              We take all feedback seriously and will make every effort to address
              your concerns. Your experience matters to us, and we strive to
              exceed your expectations.
            </p>

            <h3 className="text-xl lg:text-left text-center mt-4 mb-2">
              Why We Value Your Feedback
            </h3>
            <p className="leading-relaxed mb-4">
              At City Dental Care, we see every piece of feedback as an
              opportunity to grow. Your input helps us fine-tune our services and
              ensures that we continue offering top-notch dental care in
              Edinburgh. We’re here to make your dental journey as pleasant and
              effective as possible.
            </p>

            <hr className="text-gray-500 mt-6" />

            <div className="mt-6">
              <p className="mb-2">Follow Us:</p>
              <div className="flex gap-4 text-[#1D5C5C]">
              <Link href='https://www.facebook.com/citydentalcareedinburgh'><Facebook className=" cursor-pointer w-5 h-5" /></Link>
                <Link href='mailto:info@citydentalcare.co.uk'><Mail className=" cursor-pointer w-5 h-5" /></Link>
                <Link href='https://www.instagram.com/citydentalcare.edin/'><Instagram className=" cursor-pointer w-5 h-5" /></Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}