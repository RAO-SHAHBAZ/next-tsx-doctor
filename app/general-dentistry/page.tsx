import BredCrumb from "@/components/BredCrumb"
import ContactUs from "@/components/contact-us"
import Link from "next/link"



function GeneralDentistry() {
  const services = [
    {
      icon: <img src="/general-dentistry/dental-consultation.svg" alt="Dental Consultation" />,
      title: "Dental Consultation",
      description: "Regular appointments include checkups, which are essential for detecting cavities, gum disease, and other oral health problems, and for avoiding severe health complications.",
     link: "/general-dentistry/Dental-Consultation"
    },
    {
      icon: <img src="/general-dentistry/same-day-emergency.svg" alt="Same Day Emergency Appointments" />,
      title: "Same-Day Emergency Care",
      description:
        "Dental problems are unpredictable. We treat problems like toothaches and chipped teeth quickly, even without an appointment.",
        link: "/general-dentistry/same-day-emergency"
    },
    {
      icon: <img src="/general-dentistry/hygiene-service.svg" alt="Hygiene Services" />,
      title: "Hygiene Services",
      description: "Your teeth and gums are clean with our hygiene service because it helps remove plaque and tartar buildup that can lead to gum disease.",
      link: "/general-dentistry/hygiene-services"
    },
    {
      icon: <img src="/general-dentistry/wisdom-tooth.svg" alt="Implant Consultations" />,
      title: "Wisdom Tooth Removal",
      description: "Wisdom teeth cause discomfort and problems for us. If you're facing these, we'll work gently and effectively to remove them for a smooth recovery.",
      link: "/general-dentistry/wisdom-tooth-removal"
    },
    {
      icon: <img src="/general-dentistry/child-smile.svg" alt="Wisdom Tooth Removal" />,
      title: "Child Smiles",
      description: "Our child's dental care is safe, comfortable, and fun, helping to establish good oral habits from an early age.",
      link: "/general-dentistry/child-smile"
    },
    {
      icon: <img src="/general-dentistry/Implant-consultation.svg" alt="Child Smile Care" />,
      title: "Implant Consultations",
      description: "For individuals who need dental implants because they have lost one or more teeth, you should consult to determine the most suitable procedure to regain your functionality and smile.",
      link: "/general-dentistry/implant-consultations"
    },
    {
      icon: <img src="/general-dentistry/orthodontics.svg" alt="Implant Consultations" />,
      title: "Orthodontics",
      description: "Our braces and clear aligners suit everyone who wants to align their teeth to achieve a perfect smile.",
      link: "/general-dentistry/orthodontics"
    },
    {
      icon: <img src="/general-dentistry/root-canals.svg" alt="Wisdom Tooth Removal" />,
      title: "Endodontic Root Canals",
      description: "Our root canal therapy removes infected pulp to save your tooth and prevent it from decay. We have specialists who give a fast, pain-free procedure for achieving results.",
      link: "/general-dentistry/endodontic-root-canals"
    },
    {
      icon: <img src="/general-dentistry/dental-bridges.svg" alt="Child Smile Care" />,
      title: "Dental Bridges",
      description: "Our dental bridge service fills the gap left by missing teeth, restoring better chewing function and facial appearance.",
      link: "/general-dentistry/dental-bridges"
    },
  ]
  return (
<>
    <BredCrumb title="General Dentistry"/>
    <section className="pb-8 mb-1 md:mb-8 md:py-10">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <div className="uppercase text-center text-[#1D5C5C] mb-4 mt-8">DENTAL SERVICES</div>
  
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-center mb-8 max-w-3xl">
            Expert General Dentistry at Your Trusted Dental Clinic in Edinburgh
            </h2>
  
            <p className="text-center text-sm text-gray-500 mb-10 max-w-3xl">
            At City Dental Care, we focus on keeping your smile healthy and confident. Our general dentistry services combine preventative dental care and restorative dental solutions tailored to your needs. We welcome new patients seeking top-quality dental services in Edinburgh with a personal touch.
            </p>
          </div>
  
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-8 shadow-2xl rounded-lg">
                {/* Icon */}
                <div className="bg-[#225555] p-4 w-16 h-16 rounded mb-4">{service.icon}</div>
                {/* Title */}
                <h4 className="text-xl font-light mb-4">{service.title}</h4>
                {/* Description */}
                <p className="text-sm text-gray-600 mb-4">{service.description}</p>
  
                {/* Arrow Link */}
                <Link href={service.link} className="inline-flex items-center">
                  <img src="/Arrow.png" alt="arrow" />
                </Link>
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


</>
  )
}

export default GeneralDentistry