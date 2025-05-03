"use client";

import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import BredCrumbServices from "@/components/BreadCrumbServices";

export default function PrivacyPolicy() {
  return (
    <>
      <BredCrumbServices
        title="Privacy Policy"
        subtitle={

        <span>Privacy Policy</span>

        }
      />

      <div className="container mx-auto px-4 py-8 mb-20">
        <div className="flex flex-col gap-6">
          <main className="w-full">
            <h1 className="text-4xl lg:text-5xl text-center mb-6 lg:text-left">
              Privacy Policy – Protecting Your Data at City Dental Care
            </h1>
            <p className="leading-relaxed mb-4">
              Your privacy is a priority at City Dental Care. This Privacy Policy
              outlines how we collect, use, and protect your personal information
              to ensure your dental experience is secure and personalised.
            </p>

            <h2 className="text-2xl lg:text-left text-center mt-6 mb-2">
              What Information We Collect
            </h2>
            <p className="leading-relaxed mb-4">
              We collect personal data such as:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>
                <strong>Contact Details:</strong> Name, address, phone number,
                email.
              </li>
              <li>
                <strong>Medical History:</strong> Relevant health details for
                customised treatment plans.
              </li>
              <li>
                <strong>Payment Information:</strong> To process payments for
                dental services.
              </li>
            </ul>

            <h3 className="text-xl lg:text-left text-center mt-4 mb-2">
              How We Use Your Information
            </h3>
            <p className="leading-relaxed mb-4">
              We use your information to:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Provide personalised dental services.</li>
              <li>Communicate about treatment options and updates.</li>
              <li>Process payments for services.</li>
              <li>Improve the quality of care we provide.</li>
            </ul>

            <h3 className="text-xl lg:text-left text-center mt-4 mb-2">
              How We Protect Your Information
            </h3>
            <p className="leading-relaxed mb-4">
              We implement industry-standard security measures to protect your
              data from unauthorised access. Your information is encrypted during
              transmission, ensuring its safety.
            </p>

            <h3 className="text-xl lg:text-left text-center mt-4 mb-2">
              Sharing Your Information
            </h3>
            <p className="leading-relaxed mb-4">
              We do not sell or share your personal information with third
              parties, except for trusted service providers who help with payment
              processing and appointment scheduling.
            </p>

            <h3 className="text-xl lg:text-left text-center mt-4 mb-2">
              Your Rights
            </h3>
            <p className="leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Request access to the data we hold about you.</li>
              <li>Correct any inaccuracies in your personal information.</li>
              <li>
                Request deletion of your data (subject to legal obligations).
              </li>
            </ul>

            <h3 className="text-xl lg:text-left text-center mt-4 mb-2">
              Contact Us
            </h3>
            <p className="leading-relaxed mb-4">
              If you have any questions about our Privacy Policy or would like to
              exercise your rights, please contact us at <span className="hover:underline text-[#1D5C5C]"><Link href= "mailto:info@citydentalcare.co.uk">info@citydentalcare.co.uk</Link></span>.
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