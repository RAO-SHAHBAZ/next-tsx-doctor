export default function ContactUs() {
  return (
    <section className="py-1 md:py-16 mt-20 mb-10">
      <div className="container mx-auto px-4 hidden md:block">
        <div className="bg-[#E8F4F4] flex flex-col md:flex-row items-center rounded-lg relative">
          {/* Left Content */}
          <div className="p-10 md:p-16 md:w-2/3">
            <div className="uppercase text-[#1D5C5C] font-medium mb-4">CONTACT US</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl max-w-4xl mb-4">Contact City Dental Care Experts Today</h2>
            <p className="text-gray-700 mb-8 max-w-3xl">
              Our dental clinic in <strong>Edinburgh</strong> specialises in all types of dental treatments, including
              Invisalign and teeth-whitening options. Thanks to our expert team, our clinic at{" "}
              <strong>9 Earl Grey Street</strong> delivers superior dental services to patients in a comfortable
              environment.
            </p>
            <button className="bg-[#1d5c5c] text-white px-4 py-4 text-sm uppercase text-center">
              Have Questions? Contact Us Now!
            </button>
          </div>

          {/* Right Image - Doctor Overlapping Properly */}
          <div className="md:w-1/2">
            <img
              src="/contact.png"
              alt="doctor"
              className="max-h-[400px] md:max-h-[600px] object-cover md:absolute md:bottom-0 md:right-0"
            />
          </div>
        </div>
      </div>

      {/* This IS For mobile */}
      <div className="container mx-auto px-4 md:hidden mb-10">
        {/* Right Image - Doctor Overlapping Properly */}
        <div className="flex justify-center items-center">
          <img src="/contact.png" alt="doctor" className="max-h-[300px]" />
        </div>
        <div className="bg-[#E8F4F4] flex flex-col justify-center items-center rounded-lg relative">
          {/* Left Content */}
          <div className="p-10">
            <div className="uppercase text-[#1D5C5C] font-medium text-center mb-4">CONTACT US</div>
            <h2 className="text-4xl text-center font-light mb-6 leading-tight">
              Contact City Dental Care Experts Today
            </h2>
            <p className="text-gray-700 mb-8 text-center">
              Our dental clinic in <strong>Edinburgh</strong> specialises in all types of dental treatments, including
              Invisalign and teeth-whitening options. Thanks to our expert team, our clinic at{" "}
              <strong>9 Earl Grey Street</strong> delivers superior dental services to patients in a comfortable
              environment.
            </p>
            <div className="flex justify-center items-center">
            <button className="bg-[#1d5c5c] text-white px-4 py-4 text-sm uppercase text-center">
              Have Questions? Contact Us Now!
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

