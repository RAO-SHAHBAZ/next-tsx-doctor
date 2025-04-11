import React from 'react'

function WhyChooseUs() {
  return (
    <div className='min-w-full bg-[#F5F5F5] my-5'> 
<div className="py-16 md:py-24 px-4 container mx-auto ">
    {/* Heading Section */}
    <div className="flex justify-center flex-col items-center">
      <h2 className="uppercase text-[#1D5C5C] text-lg mb-4">
        Why Choose Us
      </h2>
      <h3 className="text-4xl md:text-5xl  mb-6 max-w-4xl">
        What makes City Dental Care different from other dental centers in
        Edinburgh?
      </h3>
      <p>
        City Dental Care provides top-quality dental treatment by enhancing
        looks and oral wellness.
      </p>
    </div>
    {/* img section  */}
    <div className="flex lg:justify-between flex-col gap-20 md-flex-col lg:flex-row py-16 bg-contain bg-center h-100 bg-no-repeat md:mt-16 " style={{ backgroundImage: "url('/why-us.png')" }}>
      <div className="flex gap-16 flex-col">
        <div className="max-w-2xl">
          <div className="flex items-start  gap-4">
            <div>
              <h4 className="text-xl mb-2 font-extrabold text-right ">
                Experienced Professionals
              </h4>
              <p className="max-w-[450px] text-right">
                Our professional team has been helping patients for 
                <strong> 20 years</strong> with all dental treatment options.
              </p>
            </div>
            <div className="bg-[#1D5C5C] w-20 h-20 rounded flex items-center justify-center  shrink-0">
              <img
                src="experience.svg"
                alt="TItle"
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-start  gap-4">
            <div>
              <h4 className="text-xl mb-2 font-extrabold text-right ">
              Advanced Technology
              </h4>
              <p className="max-w-[450px] text-right">
              Our clinic applies state-of-the-art medical devices to offer patients today's best medical care.
              </p>
            </div>
            <div className="bg-[#1D5C5C] w-20 h-20 rounded flex items-center justify-center  shrink-0">
              <img
                src="protection.svg"
                alt="TItle"
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-start  gap-4">
            <div>
              <h4 className="text-xl mb-2 font-extrabold text-right ">
              Comprehensive Dental Solutions
              </h4>
              <p className="max-w-[450px] text-right" >
              Our services entail preventive care, simple checkups, fillings, crowns, bridges, Invisalign, veneers, and teeth whitening.
              </p>
            </div>
            <div className="bg-[#1D5C5C] w-20 h-20 rounded flex items-center justify-center  shrink-0">
              <img
                src="professional-dentist.svg"
                alt="TItle"
                className="w-10 h-10 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-16 flex-col">
        <div className="max-w-2xl">
          <div className="flex items-start  gap-4">
          <div className="bg-[#1D5C5C] w-20 h-20 rounded flex items-center justify-center  shrink-0">
              <img
                src="comfort.svg"
                alt="TItle"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <h4 className="text-xl mb-2 font-extrabold text-left ">
              Patient-Centered Care
              </h4>
              <p className="max-w-[450px] text-left">
              Treatment is individualised, considering the client's comfort and creating a positive experience during the appointment.
              </p>
            </div>
            
          </div>
        </div>
        <div>
          <div className="flex items-start  gap-4">
          <div className="bg-[#1D5C5C] w-20 h-20 rounded flex items-center justify-center  shrink-0">
              <img
                src="pricing.svg"
                alt="TItle"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <h4 className="text-xl mb-2 font-extrabold text-left ">
              Affordable Payment Plans
              </h4>
              <p className="max-w-[450px] text-left">
              Our dental practice provides various financing structures with 0% interest, so you can get the professional dental care you need.

              </p>
            </div>
            
          </div>
        </div>
        <div>
          <div className="flex items-start  gap-4">
          <div className="bg-[#1D5C5C] w-20 h-20 rounded flex items-center justify-center  shrink-0">
              <img
                src="support.svg"
                alt="TItle"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div>
              <h4 className="text-xl mb-2 font-extrabold text-left ">
              Emergency Services
              </h4>
              <p className="max-w-[450px] text-left" >
              Need urgent care? Our clinic offers same-day emergency dental services, so you will never experience discomfort before receiving care.
              </p>
            </div>
            
          </div>
        </div>
      </div>
      
    </div>
  </div></div>
  )
}

export default WhyChooseUs