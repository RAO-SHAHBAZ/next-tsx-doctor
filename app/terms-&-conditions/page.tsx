"use client";

import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import BredCrumbServices from "@/components/BreadCrumbServices";

export default function TermsConditions() {
  return (
    <>
      <BredCrumbServices
        title="Terms & Conditions"
        subtitle={

         <span>Terms & Conditions</span>
      
        }
      />

      <div className="container mx-auto px-4 py-8 mb-20">
        <div className="flex flex-col gap-6">
          <main className="w-full">
            <h1 className="text-4xl lg:text-5xl text-center mb-6 lg:text-left">
              Terms & Conditions for City Dental Care – Providing Trusted Dental
              Services in Edinburgh
            </h1>
            <p className="leading-relaxed mb-4">
              Welcome to City Dental Care! By accessing our services, you agree
              to the following Terms & Conditions. These ensure a safe,
              transparent, and enjoyable experience for all our patients.
            </p>

            <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
              Scope of Services
            </h2>
            <p className="leading-relaxed mb-4">
              City Dental Care offers a comprehensive range of dental services,
              including cosmetic treatments, routine check-ups, and advanced
              orthodontics. Our services may vary in pricing and availability,
              and we encourage you to contact us directly for details.
            </p>

            <h3 className="text-xl lg:text-left text-center mt-4 mb-2">
              Appointment Policy
            </h3>
            <p className="leading-relaxed mb-4">
              Appointments must be confirmed at least [Insert time] in advance.
              We require [Insert time] notice for cancellations or rescheduling
              to avoid a cancellation fee. If you miss an appointment, don't
              hesitate to contact us to reschedule as soon as possible.
            </p>

            <h3 className="text-xl lg:text-left text-center mt-4 mb-2">
              Payment Terms
            </h3>
            <p className="leading-relaxed mb-4">
              At City Dental Care, we offer flexible financing options, including
              0% interest for treatments like Invisalign. Payment is due at the
              time of service, unless otherwise arranged in advance.
            </p>

            <h3 className="text-xl lg:text-left text-center mt-4 mb-2">
              Intellectual Property
            </h3>
            <p className="leading-relaxed mb-4">
              All content on our website, including logos, images, and text, is
              protected under intellectual property laws. Unauthorised use is
              prohibited.
            </p>

            <h3 className="text-xl lg:text-left text-center mt-4 mb-2">
              Limitation of Liability
            </h3>
            <p className="leading-relaxed mb-4">
              While we strive to provide the best dental services, unforeseen
              complications can occasionally occur. We do our best to minimise
              these risks. However, City Dental Care is not liable for any
              complications that may arise from treatment. Our team works
              closely with you to ensure the best possible outcome.
            </p>

            <h3 className="text-xl lg:text-left text-center mt-4 mb-2">
              Privacy and Data Protection
            </h3>
            <p className="leading-relaxed mb-4">
              For more information on how we handle your data, please visit our{" "}
              <Link
                href="/privacy-policy"
                className="text-[#1D5C5C] hover:underline"
              >
                Privacy Policy
              </Link>{" "}
              page. Your privacy is important to us.
            </p>

            <h3 className="text-xl lg:text-left text-center mt-4 mb-2">
              Modifications to Terms
            </h3>
            <p className="leading-relaxed mb-4">
              City Dental Care reserves the right to modify these Terms &
              Conditions at any time. We recommend reviewing this page
              periodically for updates.
            </p>

            <hr className="text-gray-500 mt-6" />

            <div className="mt-6">
              <p className="mb-2">Follow Us:</p>
              <div className="flex gap-4 text-[#1D5C5C]">
                <Facebook className=" cursor-pointer w-5 h-5" />
                <Twitter className=" cursor-pointer w-5 h-5" />
                <Instagram className=" cursor-pointer w-5 h-5" />
                <Youtube className=" cursor-pointer w-5 h-5" />
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}