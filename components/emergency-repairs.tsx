export default function EmergencyRepairs() {
    return (
      <section className="w-full relative">
        <div className="absolute inset-0 bg-[#1d5c5c]/80 z-10"></div>
        <div className="w-full h-[550px] bg-cover bg-center"></div>
  
        <div className="absolute inset-0">
          <img
            src="/bg.png"
            alt="Emergency Call"
            className="w-full h-full flex justify-center items-center object-cover"
          />
          <div className="absolute inset-0 bg-[#0C2F2FB2] opacity-90"></div> {/* Dark Overlay */}
        </div>
  
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 max-w-4xl">
            Ready to Take the First Step Toward Your Best Smile?
          </h3>
          <p className="text-lg mb-8 max-w-3xl">
            The staff at City Dental Care provides simple ways for patients to control their dental health. Contact us
            today because we offer free assessments and flexible payment options to help you access all our dental
            services. We are available now to assist you in obtaining the gorgeous smile you desire.
          </p>
  
          <a href="#" className="bg-[#319684] text-[#FFFFFF] px-4 py-4 inline-block uppercase font-medium">
            Book Your Free Consultation Now
          </a>
        </div>
      </section>
    )
  }
  
  