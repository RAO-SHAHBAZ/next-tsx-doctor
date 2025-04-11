"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Image from "next/image"



function Faqs() {
    const faqs = [
        {
          question: "How many months will I need to use the clear aligner device? ",
          answer:
            "Invisalign needs different treatment lengths for each patient, averaging between 6 and 18 months.",
        },
        {
          question: "What arrangements does the clinic offer for paying cosmetic dental care?",
          answer:
            "The clinic provides cheap payment methods plus free financing for its dental cosmetics and Invisalign services.",
        },
        {
          question: "How will patients discover their first visit to City Dental Care?",
          answer:
            "When you visit City Dental Care for the first time, they will perform extensive consultations and examine your dental health to discuss your treatment plan.",
        },
        {
          question: "How would I learn if teeth veneers are essential for me?",
          answer: "Our team will inspect the patient's teeth during this appointment to determine the correct action plan.",
        },
        {
          question: "How simple are teeth whitening solutions for people to afford?",
          answer: "Our professional teeth whitening prices are easy to accept, and we check your needs during a free consultation to provide the appropriate treatment.",
        },
        {
          question: "What arrangements do you have for treating urgent dental issues?",
          answer: "Our dental clinic accepts patients for urgent care through emergency appointments.",
        },
      ]
    
      const [openIndex, setOpenIndex] = useState<number | null>(null)
    
      const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
      }
  return (
   <>
      <section className="container mx-auto px-4 mb-20 ">
      <div className="flex justify-center flex-col items-center mb-5">
      <h1 className="uppercase text-[#1D5C5C] text-lg mb-4">
      FAQs
      </h1>
      <h2 className="text-4xl md:text-5xl  mb-6 max-w-4xl">
      Frequently Asked Questions
      </h2>
    </div>
    
    
      <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Side: Image */}
          <div className="w-full md:w-1/2 ">
                  <div className="relative">
                    <Image
                      src="Faq's.png"
                      alt="Dental team working on a patient"
                      width={600}
                      height={500}
                    />
                   
                  </div>
                </div>

      {/* Right Side (FAQ Accordion) */}
      <div className="md:w-1/2">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-lg mb-3">
            <button
              className="w-full flex justify-between items-center px-4 py-6 rounded-xl bg-[#E8F4F4] text-gray-900 text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium">{faq.question}</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
            </button>
            {openIndex === index && <div className="px-4 py-3 text-gray-600 bg-white">{faq.answer}</div>}
          </div>
        ))}
      </div>
      </div>
    </section>
   </>
  )
}

export default Faqs