"use client";
import BredCrumb from "@/components/BredCrumb"


import { useState } from "react";
import ContactUs from "@/components/contact-us";

// Define the type for an image pair
interface ImagePair {
  before: string;
}


function SmileGallery() {
  // Define the image pairs (before and after images from the public folder)
  const imagePairs: ImagePair[] = [
    {
      before: "Composite-Bonding.jpg",
     
    },
    {
      before: "composite-bonding-2.jpg",
     
    },
    {
      before: "Dental-crown.jpg",
      
    },
    {
      before: "dental-veeners.jpg",
      
    },
    {
      before: "FAB-Bonding.jpg",
     
    },
    {
      before: "FAB-Bonding-2.jpg",
     
    },
    {
      before: "Invisalign.jpg",
      
    },
    {
      before: "Invislaign-2.jpg",
      
    },
    {
      before: "smile-makeover.jpg",
     
    },
    {
      before: "Smile-Makeover-2.jpg",
     
    },
    {
      before: "tooth-gum copy.jpg",
      
    },
    {
      before: "Amalgam.jpg",
      
    },
  ];

  // State for the selected image in the modal
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Modal close handler
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>

        <BredCrumb title="Smile Gallery" />

        <section className="py-12 md:py-24">
      <div className="container mx-auto px-4 ">
        {/* Heading and Description */}
        <div className="uppercase text-center text-[#1D5C5C] mb-4">SMILE GALLERY</div>
        <h2 className="text-4xl  md:text-5xl lg:text-6xl  mb-4 text-center max-w-4xl mx-auto">Take A Look At Some Of Our Amazing Results</h2>
        <p className="text-center text-gray-500 max-w-3xl mx-auto mb-20">
          Our dental team at <strong>City Dental Care in Edinburgh</strong> offers high-quality services in Invisalign,
          cosmetic work, and general dentistry. For the last <strong>twenty years</strong>, our practice has been based
          on patients' needs to provide a comfortable and efficient treatment process.
        </p>
        

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {imagePairs.map((pair, index) => (
            <div key={index} className="space-y-4">
              {/* Before Image */}
              <div
                className="relative cursor-pointer group"
                onClick={() => setSelectedImage(pair.before)}
              >
                <img
                  src={pair.before}
                  alt={`Before ${index + 1}`}
                  className="w-[40] h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105 "
                />
                {/* <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
                  Composite Bonding
                </div> */}
              </div>
              
                  
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl w-full p-4"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <img
              src={selectedImage}
              alt="Selected Result"
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-white text-black rounded-full p-2 hover:bg-gray-200 transition-colors duration-300"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>

          <ContactUs/>

    
    
    </>
  )
}

export default SmileGallery