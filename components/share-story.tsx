export default function ShareStory() {
    return (
      <section className="w-full relative">
        <div className="md:col-span-9 relative">
          <div className="absolute inset-0 bg-[#1d5c5c]/80 z-10"></div>
          <div
            className="w-full h-[900px] md:h-[750px] bg-cover bg-center"
            style={{ backgroundImage: `url(/story.jpeg)` }}
          ></div>
  
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
            <div className="bg-white rounded-full p-4 mb-8 cursor-pointer hover:bg-gray-100 transition-colors">
              <img src="/VIDEO.png" alt="VIDEO" className="h-10 md:h-15" />
            </div>
  
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 max-w-4xl">
              See How We Have Transformed Smiles in Edinburgh
            </h3>
            <p className="text-lg mb-8 max-w-3xl">
              Actual outcomes demonstrate themselves best. Preview our transformation pictures of before-and-after cases
              while you picture the improved self-assured look you will achieve. City Dental Care offers cosmetic and
              dental services.
            </p>
            <p className="text-lg mb-8 max-w-3xl">
              They employ Invisalign clear aligners and porcelain veneers to achieve subtle yet significant changes to
              help our patients regain their confidence and looks. Our smile makeovers reflect our expertise and
              dedication to serving patients across Edinburgh, thus gaining their trust and confidence. A dream smile
              exists within reach of your consultation appointment.
            </p>
            <button className="border border-white text-white text-sm px-4 py-4 inline-block uppercase hover:bg-white hover:text-[#1d5c5c] transition-colors">
              Explore Our Patients' Smile Journeys Now!
            </button>
          </div>
        </div>
      </section>
    )
  }
  
  