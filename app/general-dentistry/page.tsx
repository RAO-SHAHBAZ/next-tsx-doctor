import BredCrumb from "@/components/BredCrumb"
import ContactUs from "@/components/contact-us"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"




function GeneralDentistry() {
  const services = [
    {
      icon: <img src="/Vector-service-1.png" alt="Dental Consultation" />,
      title: "Dental Consultation",
      description: "Detailed tests provide your dental wellness outcomes.",
    },
    {
      icon: <img src="/Facial.png" alt="Same Day Emergency Appointments" />,
      title: "Same-Day Emergency Appointments",
      description:
        "Need urgent care? Our dental practice provides emergency dental appointments on the same day patients need care.",
    },
    {
      icon: <img src="/Restorative.png" alt="Hygiene Services" />,
      title: "Hygiene Services",
      description: "Our services offer routine cleanings that maintain your smile's health and freshness.",
    },
    {
      icon: <img src="/Dermal.png" alt="Implant Consultations" />,
      title: "Implant Consultations",
      description: "Take the opportunity to find out about stable alternatives addressing tooth loss.",
    },
    {
      icon: <img src="/General.png" alt="Wisdom Tooth Removal" />,
      title: "Wisdom Tooth Removal",
      description: "A gentle, stress-free approach to wisdom tooth extraction.",
    },
    {
      icon: <img src="/Vector-service-1.png" alt="Child Smile Care" />,
      title: "Child Smile Care",
      description: "Children who get early dental visits start their future with strong smiles.",
    },
    {
      icon: <img src="/Dermal.png" alt="Implant Consultations" />,
      title: "Implant Consultations",
      description: "Take the opportunity to find out about stable alternatives addressing tooth loss.",
    },
    {
      icon: <img src="/General.png" alt="Wisdom Tooth Removal" />,
      title: "Wisdom Tooth Removal",
      description: "A gentle, stress-free approach to wisdom tooth extraction.",
    },
    {
      icon: <img src="/Vector-service-1.png" alt="Child Smile Care" />,
      title: "Child Smile Care",
      description: "Children who get early dental visits start their future with strong smiles.",
    },
  ]
  return (
<>
    <Navbar/>
    <BredCrumb title="General Dentistry" subtitle="Home - General Dentistry"/>
    <section className="pb-8 mb-1 md:mb-8 md:py-10">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <div className="uppercase text-center text-[#1D5C5C] mb-4">DENTAL SERVICE</div>
  
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-center mb-8 max-w-3xl">
              Your <span className="text-[#1d5c5c]">Family's Partner </span> in General Dentistry
            </h2>
  
            <p className="text-center text-sm text-gray-500 mb-10 max-w-3xl">
              We provide all professional cosmetic and general services to improve your smile. Invisalign functions as an
              aligner that makes it easy to fix the teeth' misalignment without the need for braces, and the teeth
              whitening services help make smiles healthier and more appealing.
            </p>
          </div>
  
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-8 shadow-2xl rounded-lg">
                {/* Icon */}
                <div className="bg-[#225555] p-4 inline-block rounded mb-4">{service.icon}</div>
                {/* Title */}
                <h4 className="text-xl font-light mb-4">{service.title}</h4>
                {/* Description */}
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
  
                {/* Arrow Link */}
                <a href="#" className="inline-flex items-center">
                  <img src="/Arrow.png" alt="arrow" />
                </a>
              </div>
            ))}
          </div>
  
          {/* Explore City Dental Care Services Today */}
          <div className="mt-20 text-center">
            <button className="bg-[#1d5c5c] text-white px-4 py-4 text-sm uppercase text-center">
              Explore City Dental Care Services Today
            </button>
          </div>
        </div>
      </section>

    <ContactUs/>
    <Footer/>


</>
  )
}

export default GeneralDentistry