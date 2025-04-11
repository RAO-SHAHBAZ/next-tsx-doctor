import BredCrumb from '@/components/BredCrumb'

function GeneralDentistry() {
    const services = [
        {
          icon: <img src="dental-consultation.svg"   alt="Dental Consultation" />,
          title: "Why Do Routine Dental Checkups Matter?",
          description: "Regular appointments include checkups, which are essential to detect cavities, gum disease, or any other mouth problems and avoid causing severe health complications.",
        },
        {
          icon: <img src="same-day-emergency.svg"  alt="Same Day Emergency Appointments" />,
          title: "Fast, Same-Day Emergency Care ",
          description:
            "Dental problems are unpredictable. We treat problems such as toothaches and chipped teeth fast without an appointment.",
        },
        {
          icon: <img src="/hygiene-service.svg" alt="Hygiene Services" />,
          title: "Professional Hygiene Services",
          description: "Your teeth and gums are clean with our hygiene service because our service helps remove plaque and tartar buildup that leads to gum disease.",
        },
        {
          icon: <img src="Implant-consultation.svg" alt="Implant Consultations" />,
          title: "Wisdom Tooth Removal is Gentle and Effective",
          description: "Wisdom teeth cause discomfort and problems for us. If you're facing these, we'll work gently and effectively to remove them for a smooth recovery.",
        },
        {
          icon: <img src="wisdom-tooth.svg" alt="Wisdom Tooth Removal" />,
          title: "Child-Friendly Dentistry for Healthy Smiles",
          description: "Our child's dental care is safe, comfortable, and fun, helping to reinforce good oral habits early.",
        },
        {
          icon: <img src="/child-smile.svg" alt="Child Smile Care" />,
          title: "Dental Implant Consultations",
          description: "For individuals who need dental implants because they have lost one or more teeth, you must consult on the most suitable procedure to regain your functionality and smile.",
        },
        {
          icon: <img src="Implant-consultation.svg" alt="Orthodontic" />,
          title: "Straighten Your Smile with Orthodontics",
          description: "Our braces and clear aligners suit everyone who wants their teeth aligned to achieve a sound bite.",
        },
    ]
    const features = [
      {
        icon: "/our-mission.svg",
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
    <BredCrumb title='Dental Treatments'/>
    <br />

{/* DENTAL SERVICE */}
<section className="pb-8 mb-1 md:mb-8 md:py-10">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <div className="uppercase text-center text-[#1D5C5C] mb-4">What Services Do We Offer?</div>
  
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-center mb-8 max-w-4xl">
            General Dentistry Services at City Dental Care
            </h2>
  
            <p className="text-center text-sm text-gray-500 mb-10 max-w-3xl">
            This contributes to steady teeth and gums, paving the way for a good life at City Dental Care, your dental practitioner in Edinburgh. Whether it is a general checkup, urgent care, complex treatment, or any other medical service offered at our esteemed facility.
            </p>
          </div>
  
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-8 shadow-2xl rounded-lg">
                {/* Icon */}
                <div className="bg-[#225555] p-4 w-16 rounded mb-4">{service.icon}</div>
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
        </div>
      </section>

      {/* Our Procedure Section */}
      <div className='bg-[#F5F5F5]'>
      <section className="py-16 md:py-24 px-4 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h1 className="uppercase text-[#1D5C5C] text-lg mb-4">Our Procedure</h1>
            <h2 className="text-3xl md:text-5xl  mb-6">
            Simple Dental Appointment Process
            </h2>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-[#1D5C5C] w-20 h-20 rounded flex items-center justify-center  shrink-0">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2 font-extrabold">
                      {feature.title}
                    </h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full ">
            <img
              src="/dentally-care-apopintment-services.png"
              alt="About Us"
              className="w-full h-auto max-h-[800px] rounded-2xl object-cover object-center"
            />
          </div>
        </div>
      </section>
      </div>

      

    </>
  )
}

export default GeneralDentistry