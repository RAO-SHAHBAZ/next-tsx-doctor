import OurTeam from "@/components/our-team";
import ContactUs from "@/components/contact-us";
import BredCrumb from "@/components/BredCrumb";
import WhyChooseUs from "@/components/WhyChooseUs";
import Faqs from "@/components/faqs";
import GallerySection from "@/components/our-gallery";

export default function AboutUsPage() {
  const features = [
    {
      icon: "/our-mission.svg",
      title: "Our Mission",
      description:
        "At City Dental Care, patients can get good dental care at budget prices with custom treatments that include modern dental technology.",
    },
    {
      icon: "/our-vision.svg",
      title: "Our Vision",
      description:
        "Our vision is to become the best dental clinic in Edinburgh to provide quality treatment and care that will improve the appearance of our clients' teeth and confidence.",
    },
  ];

  return (
    <div>
      <BredCrumb title="About Us" />
      {/* About Us Hero Section */}

      <section className="py-16 md:py-24 px-4 container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h1 className="uppercase text-[#1D5C5C] text-lg mb-4">ABOUT US</h1>
            <h2 className="text-3xl md:text-5xl  mb-6">
              Welcome to City Dental Care – Your Trusted Dental Clinic in
              Edinburgh
            </h2>
            <p className="text-gray-600 mb-8">
              City Dental Care offers high-level dental healthcare through
              modern technology and individualised treatments. Our practice
              handles every dental service in downtown Edinburgh, including
              cosmetic procedures, basic dentistry with Invisalign braces, and
              smile improvement treatments. For <strong>20 years</strong>, City
              Dental Care’s top dental team has delivered painless dental care,
              resulting in bigger smiles.
            </p>

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
          <div className="relative w-full">
            <span className="bg-[#1D5C5C] flex space-x-2 text-white px-6 py-4 absolute top-44 right-4 rounded-2xl shadow-lg z-10">
              <img src="/contct-us.svg" alt="Phone SVG" className="w-12 h-12" />
              <span>
                Contact Us <br /> 0761-8523-398
              </span>
            </span>
            <img
              src="/about-us.png"
              alt="About Us"
              className="w-full h-auto max-h-[800px] rounded-2xl object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}

     <WhyChooseUs/>
     {/* FAQS */}
     <Faqs/>
     {/* Our Approch Section */}
           <section className="w-full relative">
        <div className="md:col-span-9 relative">
          <div className="absolute inset-0 bg-[#1d5c5c]/80 z-10"></div>
          <div
            className="w-full h-[900px] md:h-[750px] bg-cover bg-center"
            style={{ backgroundImage: `url(/ourapproch.jpg)` }}
          ></div>
  
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
            <h2 className="uppercase text-lg mb-4">
            Our Approach
            </h2>
  
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 max-w-4xl">
            Expert Care, Personalised Service at City Dental Care in Edinburgh
            </h3>
            <p className="text-lg mb-8 max-w-3xl">
            Our dental practice at City Dental Care works to ease patient anxiety during dental visits. We create an easygoing and compassionate method to provide our patients with the best dental care without anxiety. Our commitment is to deliver first-rate dental healthcare and make our clinic a comfortable atmosphere where patients can feel at ease. <br /> <br />
We distinguish ourselves as a modern practice with a friendly approach. Every patient gets a unique care plan. Let us give you the feeling of the best dental healthcare services without passing through stressful moments.

            </p>
            <button className="border border-white text-white text-sm px-4 py-4 inline-block uppercase hover:bg-white hover:text-[#1d5c5c] transition-colors">
            Discover Our Expertise and Compassion
            </button>
          </div>
        </div>
      </section>


      {/* OUr Gallery Section */}

      <GallerySection/>
    

      <OurTeam />
      <br className="hidden md:block" />
      <ContactUs />
    </div>
  );
}
