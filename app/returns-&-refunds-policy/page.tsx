"use client";

import React from "react";
import { Facebook, Instagram, Mail, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import BredCrumbServices from "@/components/BreadCrumbServices";

export default function ReturnsRefunds() {
  return (
    <>
      <BredCrumbServices
        title="Returns & Refunds"
        subtitle={
          <span>
                <span>Returns & Refunds</span>
          </span>
        }
      />

      <div className="container mx-auto px-4 py-8 mb-20">
        <div className="flex flex-col gap-6">
          <main className="w-full">
            <h1 className="text-4xl lg:text-5xl text-center mb-6 mt-3 lg:text-left">
              Hassle-Free Returns & Refunds at City Dental Care – Your
              Satisfaction Matters
            </h1>
            <p className="leading-relaxed mb-4">
              At City Dental Care, we aim to provide exceptional dental care and
              customer service. If, for any reason, you're not satisfied with the
              treatment you received, we make it easy to request a return or
              refund. Your satisfaction is our priority.
            </p>

            <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
              Returns Policy
            </h2>
            <p className="leading-relaxed mb-4">
              As dental treatments are highly personalised, returns are not
              typically applicable. However, if you feel that your treatment did
              not meet the expectations set during your consultation, please
              contact us. We’ll review your case and work to find a solution
              that’s right for you.
            </p>

            <h3 className="text-xl lg:text-left text-center mt-4 mb-2">
              Refund Policy
            </h3>
            <p className="leading-relaxed mb-4">
              Refund requests are considered on a case-by-case basis. If you’re
              unhappy with the outcome of a procedure like Invisalign, teeth
              whitening, or any other dental service, contact us within X days.
              We’ll assess your situation and offer you either a refund or an
              alternative solution.
            </p>

            <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
              How to Request a Refund
            </h2>
            <ol className="list-decimal list-inside mb-4">
              <li>
                Contact our team at <Link className="hover:underline text-[#1D5C5C]" href="tel:+921312282442">
                <span>01312282442</span>
                </Link> or email<span className="hover:underline text-[#1D5C5C]"><Link href= "mailto:info@citydentalcare.co.uk"> info@citydentalcare.co.uk </Link></span>

                with your refund request.
              </li>
              <li>
                Our team will respond within [Insert response time] to discuss
                your situation.
              </li>
              <li>
                If you are eligible, we’ll process your refund or offer an
                alternative resolution.
              </li>
            </ol>

            <h3 className="text-xl lg:text-left text-center mt-4 mb-2">
              Why Trust City Dental Care?
            </h3>
            <p className="leading-relaxed mb-4">
              We are committed to delivering high-quality care and ensuring
              you’re comfortable with every step of your treatment. Your feedback
              is essential, and we’ll make things right if you’re not completely
              satisfied.
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