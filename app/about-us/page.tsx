"use client";
import OurTeam from "@/components/our-team";
import ContactUs from "@/components/contact-us";
import BredCrumb from "@/components/BredCrumb";
import WhyChooseUs from "@/components/WhyChooseUs";
import GallerySection from "@/components/our-gallery";
import FaqSection from "@/components/faqs";

export default function AboutUsPage() {
  const faqs = [
    {
      question: "How many months will I need to use the clear aligner device?",
      answer:
        "Invisalign needs different treatment lengths for each patient, averaging between 6 and 18 months.",
    },
    {
      question:
        "What arrangements does the clinic offer for paying cosmetic dental care?",
      answer:
        "The clinic provides cheap payment methods plus free financing for its dental cosmetics and Invisalign services.",
    },
    {
      question:
        "How will patients discover their first visit to City Dental Care?",
      answer:
        "When you visit City Dental Care for the first time, they will perform extensive consultations and examine your dental health to discuss your treatment plan.",
    },
    {
      question: "How would I learn if teeth veneers are essential for me?",
      answer:
        "Our team will inspect the patient's teeth during this appointment to determine the correct action plan.",
    },
    {
      question:
        "How simple are teeth whitening solutions for people to afford?",
      answer:
        "Our professional teeth whitening prices are easy to accept, and we check your needs during a free consultation to provide the appropriate treatment.",
    },
    {
      question:
        "What arrangements do you have for treating urgent dental issues?",
      answer:
        "Our dental clinic accepts patients for urgent care through emergency appointments.",
    },
  ];
  const features = [
    {
      icon: "/our-mission.svg",
      title: "Our Mission",
      description:
        "At City Dental Care, patients can get dental care at budget prices with custom treatments that include modern technology.",
    },
    {
      icon: "/our-vision.svg",
      title: "Our Vision",
      description:
        "Our vision is to become Edinburgh’s leading clinic, providing treatment that improves clients' smiles and confidence.",
    },
  ];

  return (
    <div>
      <BredCrumb title="About Us" />
      {/* About Us Hero Section */}

      <section className="py-16 md:py-24 px-4 container mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center">
            {/* Image - On top for mobile, right for desktop */}
            <div className="relative w-full lg:order-last">
              <span className="bg-[#1D5C5C] flex space-x-2 text-white px-6 py-4 absolute top-44 right-4 rounded-2xl shadow-lg z-10">
                <img src="/contct-us.svg" alt="Phone SVG" className="w-12 h-12" />
                <span>
                  Contact Us <br /> 0761-8523-398
                </span>
              </span>
              <img
                src="/about-us.webp"
                alt="About Us"
                className="w-full h-auto max-h-[800px] rounded-2xl object-cover object-center"
              />
            </div>

            {/* Content - Below for mobile, left for desktop */}
            <div className="lg:order-first">
              <h1 className="uppercase text-[#1D5C5C] text-lg mb-4 lg:text-left text-center">
                ABOUT US
              </h1>
              <h2 className="text-3xl md:text-5xl lg:text-left text-center mb-6">
                Welcome to City Dental Care – Your Trusted Dental Clinic in Edinburgh
              </h2>
              <p className="mb-8">
                City Dental Care offers high-level dental healthcare through modern technology and individualised treatments. Our practice handles every dental service in downtown Edinburgh, including cosmetic procedures, basic dentistry with Invisalign braces, and smile improvement treatments. For <strong>20 years</strong>, City Dental Care’s top dental team has delivered painless dental care, resulting in bigger smiles.
              </p>

              {/* Features */}
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-[#1D5C5C] w-20 h-20 rounded flex items-center justify-center shrink-0">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-10 h-10 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl mb-2">{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      {/* our-story section  */}
      <section className="py-16 md:py-24 px-4 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="relative w-full">
            <img
              src="/our-story.webp"
              alt="About Us"
              className="w-full h-auto max-h-[800px] rounded-2xl object-cover object-center"
            />
          </div>

          {/* Right Content */}
          <div>
            <div className="uppercase text-[#1D5C5C] text-lg mb-4 lg:text-left text-center">
              Our Story: Passion-Led Care in Edinburgh
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-left text-center mb-6">
              How City Dental Care in Edinburgh Was Born from a Passion for
              Better Dentistry
            </h2>
            <p className="mb-8">
              City Dental Care in the heart of Edinburgh has reimagined what a
              dental practice can be. Advanced dental treatments in this
              state-of-the-art environment, with personalised care, make you
              feel at home at every step.
            </p>
            <p className="mb-8">
              <strong>Dr Hamza Alhaddad</strong>, our founder, has over a decade
              of experience in dental practice across some of the UK’s most
              established institutions, which are dedicated to raising the
              standard of care in Edinburgh. Dr. Alhaddad was frustrated with
              the rushed and impersonal services. In this practice, they would
              listen and make patients feel heard, supported, and confident in
              their treatment journey.
            </p>
            <p className="mb-8">
              Whether you need a routine dental checkup, a smile makeover, or
              orthodontics, our team is first-class in orthodontics, dental
              implants, cosmetic dentistry, hygiene services, and oral surgery.
              Along with clinical excellence, we dedicate ourselves to patient
              comfort, trust, and the approach we are compassionate about.
            </p>
            <div className="flex justify-center lg:justify-start">
              {" "}
              <button className="bg-[#1d5c5c] text-white px-4 py-4 text-sm uppercase text-center">
                Book Your Appointment Today!
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}

      <WhyChooseUs />
      {/* FAQS */}
      <br />
      <FaqSection
        faqs={faqs}
        imageSrc="/Faq's.webp" // Update with the actual image source path
      />
      {/* Our Approch Section */}
      <section className="w-full relative">
        <div className="md:col-span-9 relative">
          <div className="absolute inset-0 bg-[#1d5c5c]/80 z-10"></div>
          <div
            className="w-full h-[900px] md:h-[750px] bg-cover bg-center"
            style={{ backgroundImage: `url(/ourapproch.jpg)` }}
          ></div>

          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
            <h2 className="uppercase text-lg mb-4">Our Approach</h2>

            <h3 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 max-w-4xl">
              Expert Care, Personalised Service at City Dental Care in Edinburgh
            </h3>
            <p className="text-lg mb-8 max-w-3xl">
              Our dental practice at City Dental Care works to ease patient
              anxiety during dental visits. We create an easygoing and
              compassionate method to provide our patients with the best dental
              care without anxiety. Our commitment is to deliver first-rate
              dental healthcare and make our clinic a comfortable atmosphere
              where patients can feel at ease. <br /> <br />
              We distinguish ourselves as a modern practice with a friendly
              approach. Every patient gets a unique care plan. Let us give you
              the feeling of the best dental healthcare services without passing
              through stressful moments.
            </p>
            <button className="border border-white text-white text-sm px-4 py-4 inline-block uppercase hover:bg-white hover:text-[#1d5c5c] transition-colors">
              Discover Our Expertise and Compassion
            </button>
          </div>
        </div>
      </section>

      {/* OUr Gallery Section */}

      <GallerySection />

      <OurTeam />
      <br className="hidden md:block" />
      <ContactUs />
    </div>
  );
}
