import BredCrumb from "@/components/BredCrumb"
import ContactUs from "@/components/contact-us"
import Link from "next/link"

function CosmaticDentistry() {
  const services = [
    {
      icon: <img src="/cosmetic-dentistry/bespoke-smile.svg" alt="Dental Consultation" />,
      title: "Bespoke Smile Design",
      description: "Bespoke Smile Planning makes your smile unique, tailored to your face shape and tooth shape, to make it look completely natural.",
     link: "/cosmetic-dentistry/bespoke-smile-design"
    },
    {
      icon: <img src="/cosmetic-dentistry/facial-esthetics.svg" alt="Same Day Emergency Appointments" />,
      title: "Facial Aesthetics",
      description:
        "Facial aesthetics offers many benefits, including smoothing wrinkles and improving the contours of the face.",
        link: "/cosmetic-dentistry/facial-aesthetics"
    },
    {
      icon: <img src="/cosmetic-dentistry/invisible-fillings.svg" alt="Hygiene Services" />,
      title: "Invisible Fillings",
      description: "Invisible or composite fillings have been designed to match their colour of the teeth's natural appearance.",
      link: "/cosmetic-dentistry/invisible-fillings"
    },
    {
      icon: <img src="/cosmetic-dentistry/composite-bonding.svg" alt="Implant Consultations" />,
      title: "Fix Imperfections with Composite Bonding",
      description: "These fugitive bonding composites are a quick and effective way to fix chips, cracks, or gaps in teeth, bringing an individual's smile to life.",
      link: "/cosmetic-dentistry/composite-bonding"
    },
    {
      icon: <img src="/cosmetic-dentistry/proclein-veeners.svg" alt="Wisdom Tooth Removal" />,
      title: "Smiling Transformation Comes With Porcelain Veneers",
      description: "Porcelain veneers serve as thin covers to conceal various dental issues, including discoloured teeth, broken or misaligned teeth, and to create a strong and flawless smile structure.",
      link: "/cosmetic-dentistry/porcelain-veneers"
    },
    {
      icon: <img src="/cosmetic-dentistry/teeth-whitening.svg" alt="Child Smile Care" />,
      title: "Luminate Your Teeth With Teeth Whitening",
      description: "This treatment eliminates stains from food, beverages, and ageing and delivers long-lasting, stunning smile results.",
      link: "/cosmetic-dentistry/teeth-whitening"
    },
    {
      icon: <img src="/cosmetic-dentistry/cosmetic-orthodontics.svg" alt="Implant Consultations" />,
      title: "Cosmetic Orthodontics",
      description: "In cosmetic orthodontics, we provide clear braces or aligners that correct your teeth's positions while enhancing the shape of your mouth and its function.",
      link: "/cosmetic-dentistry/cosmetic-orthodontics"
    },
    {
      icon: <img src="/cosmetic-dentistry/dermal-fillers.svg" alt="Wisdom Tooth Removal" />,
      title: "Dermal Fillers for a Youthful Look",
      description: "We also offer dermal fillers, which help address fine lines and facial volume loss to improve your smile and give your face a youthful look.",
      link: "/cosmetic-dentistry/dermal-fillers"
    },
    {
      icon: <img src="/cosmetic-dentistry/stain-removal.svg" alt="Child Smile Care" />,
      title: "Remove Stains and Revitalise Your Smile",
      description: "The treatments mentioned above will help remove stains and make your teeth as bright as possible.",
      link: "/cosmetic-dentistry/stain-removal"
    },
  ]
  return (
<>
{/* BredCrumb */}
    <BredCrumb title="Cosmatic Dentistry" />
    {/* Services Section */}
    <section className="pb-8 mb-1 md:mb-8 md:py-10">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <div className="uppercase text-center text-[#1D5C5C] mb-4 mt-8">Cosmetic Services</div>
  
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-center mb-8 max-w-3xl">
            Cosmetic Dentistry Services at City Dental Care
            </h2>
  
            <p className="text-center  text-gray-500 mb-10 max-w-3xl">
            Our clinic provides a wide range of cosmetic dental solutions, including whitening, veneers, and Invisalign, to help you obtain your ideal smile. 
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
                <p className="text-[16px] text-gray-600 mb-4">{service.description}</p>
  
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
      {/* CONTACT US SECTION */}
      <section className="py-1 md:py-16 mt-20 mb-10">
      <div className="container mx-auto px-4 hidden lg:block">
        <div className="bg-[#E8F4F4] flex flex-col lg:flex-row items-center rounded-lg relative">
          {/* Left Content */}
          <div className="p-10 md:p-16 md:w-2/3">
            <h2><div className="uppercase text-[#1D5C5C] font-medium mb-4">CONTACT US</div></h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl max-w-4xl mb-4">Ready to Transform Your Smile?</h3>
            <p className="text-gray-700 mb-8 max-w-3xl">
            At City Dental Care, we provide a range of general services related to dental and cosmetic treatments for our customers, including grooming, checkups, and emergency care, among others. Don't wait! Call and arrange your appointment today and change your smile at City Dental Care of Edinburgh.
            </p>
            <button className="bg-[#1d5c5c] text-white px-4 py-4 text-sm uppercase text-center">
              Start your smile transformation today!
            </button>
          </div>

          {/* Right Image - Doctor Overlapping Properly */}
          <div className=" lg:w-1/2">
            <img
              src="/contact.png"
              alt="doctor"
              className="max-h-[400px]  lg:max-h-[600px] object-cover lg:absolute lg:bottom-0 lg:right-0"
            />
          </div>
        </div>
      </div>

      {/* This IS For mobile */}
      <div className="container mx-auto px-4 lg:hidden mb-10">
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

</>
  )
}

export default CosmaticDentistry