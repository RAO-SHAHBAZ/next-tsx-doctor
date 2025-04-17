import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

// Define types for FAQ
type FaqType = {
  question: string;
  answer: string;
};

interface FaqSectionProps {
  faqs: FaqType[];
  imageSrc: string;
}

const FaqSection: React.FC<FaqSectionProps> = ({ faqs, imageSrc }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container mx-auto px-4 mb-20 mt-10">
      <div className="flex  flex-col justify-center items-center mb-5">
        <h1 className="uppercase text-[#1D5C5C] text-lg text-center mb-4">FAQs</h1>
        <h2 className="text-4xl md:text-5xl text-center mb-6 max-w-4xl">Frequently Asked Questions</h2>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2">
          <div className="relative">
            <Image src={imageSrc} alt="Dental team working on a patient" width={600} height={500} />
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
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 py-3 text-gray-600 bg-white">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
