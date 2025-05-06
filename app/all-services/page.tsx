import BredCrumb from "@/components/BredCrumb";
import ContactUs from "@/components/contact-us";
import Link from "next/link";

function AllServices() {
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
  const services2 = [
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
  const features = [
    {
      icon: "book-consultation.svg",
      title: "Consultation",
      description:
        "The most effective step is booking your appointment and letting us know your needs.",
    },
    {
      icon: "/our-vision.svg",
      title: "Examination",
      description:
        "During the checkup, we carry out an oral health assessment.",
    },
    {
      icon: "/our-mission.svg",
      title: "Treatment Plan ",
      description:
        "Get your customised care plan, which can be developed according to all your requirements.",
    },
    {
      icon: "/our-vision.svg",
      title: "Follow-up",
      description:
        "We ensure the treatment process is going well without any problems or hindrances.",
    },
   
  ];
  return (
    <>
      <BredCrumb title="Services" />
      <br />

      {/* DENTAL or Genraral Dentistry SERVICE */}
      <section className="pb-8 mb-1 md:mb-8 md:py-10">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <div className="uppercase text-center text-[#1D5C5C] mb-4">
              Dental Services
          </div>

          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-center mb-8 max-w-4xl">
              General Dentistry Services at City Dental Care
            </h2>

            <p className="text-center text-sm text-gray-500 mb-10 max-w-3xl">
              This contributes to steady teeth and gums, paving the way for a
              good life at City Dental Care, your dental practitioner in
              Edinburgh. Whether it is a general checkup, urgent care, complex
              treatment, or any other medical service offered at our esteemed
              facility.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
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
        </div>
      </section>

      {/* Our Procedure Section */}
      <div className="bg-[#F5F5F5]">
        <section className="py-16 md:py-24 px-4 container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h1 className="uppercase text-[#1D5C5C] text-lg mb-4">
                Our Procedure
              </h1>
              <h2 className="text-3xl md:text-5xl  mb-6">
                Simple Dental Appointment Process
              </h2>

              {/* Features */}
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-[#1D5C5C] w-20 h-20   rounded flex items-center justify-center  shrink-0">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl mb-2 ">
                        {feature.title}
                      </h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative w-full max-w-[600px] mx-auto ">
              <img
                src="/dentally-care-apopintment-services.png"
                alt="About Us"
                className="w-full h-auto rounded-2xl object-cover object-center"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Service section 2 */}
      <section className="pb-8 mb-1 md:mb-8 md:py-10">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <div className="uppercase text-center text-[#1D5C5C] mb-4">
          Cosmetic Services
          </div>

          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-center mb-8 max-w-4xl">
            Cosmetic Dentistry Services at City Dental Care
            </h2>

            <p className="text-center text-sm text-gray-500 mb-10 max-w-3xl">
            Our clinic provides a wide range of cosmetic dental solutions, including whitening, veneers, and Invisalign, to help you obtain your ideal smile.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services2.map((services2, index) => (
              <div key={index} className="group p-8 shadow-2xl rounded-lg">
                {/* Icon */}
                <div className="bg-[#225555] p-4 w-16 h-16 rounded mb-4">{services2.icon}</div>
                {/* Title */}
                <h4 className="text-xl font-light mb-4">{services2.title}</h4>
                {/* Description */}
                <p className="text-[16px] text-gray-600 mb-4">{services2.description}</p>
  
                {/* Arrow Link */}
                <Link href={services2 .link} className="inline-flex items-center">
                  <img src="/Arrow.png" alt="arrow" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* COntact US Section */}
      <ContactUs/>
    </>
  );
}

export default AllServices;
