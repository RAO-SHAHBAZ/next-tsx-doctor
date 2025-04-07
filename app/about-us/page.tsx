import OurTeam from '@/components/our-team';
import ContactUs from '@/components/contact-us';
import BredCrumb from '@/components/BredCrumb';
import { PhoneCall, ShieldCheck, Hospital, HeartPulse } from "lucide-react"

export default function AboutUsPage() {
  const features = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-[#3A6969]" />,
      title: "Trusted Dental Experts in Edinburgh",
      description:
        "Our expert team uses advanced tools to provide you and your family with top-quality dental care in Edinburgh.",
    },
    {
      icon: <Hospital className="text-[#3A6969] h-10 w-10" />,
      title: "Comprehensive and Affordable Dental Solutions",
      description:
        "We offer dental treatments for all clients, which may include general checkups, cleanings, and complex cosmetic dentistry.",
    },
    {
      icon: <HeartPulse className="h-10 w-10 text-[#3A6969]" />,
      title: "Caring for the Personalised Smile of Each Patient",
      description:
        "From simple Invisalign treatments to an extreme smile makeover, the procedures that are followed depend on your requirements.",
    },
  ]
  return (
    <div>
        
        
       
        <BredCrumb  title="About Us"/>
        <section className="py-16 md:py-24 px-2 container mx-auto hidden md:block">
  <div className="  px-2">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div>
        <div className="uppercase text-[#1D5C5C] mb-4">ABOUT US</div>
        {/* Heading */}
        <h3 className="text-4xl md:text-5xl mb-6">Ready to Transform Your Smile?</h3>
        <p className="text-gray-600 mb-8">
          At City Dental Care in Edinburgh, we use the best services and technology in a friendly environment to
          enhance patient's lives. We are a team of dentists with more than 20 years of experience and aim to
          ensure that every patient receives a comfortable dental experience, ranging from a simple examination to
          cosmetic surgery.
        </p>

        <div className="space-y-6">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="bg-[#e8f4f4] p-6 flex items-center">{feature.icon}</div>
              <div>
                <h4 className="text-xl mb-2">{feature.title}</h4>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Doctor About Us Section Images */}
      <div className="flex ">
        {/* First Image with Overlay */}
        <div className="relative">
          <span className="bg-[#1D5C5C] flex space-x-2 text-white px-6 py-4 absolute top-44 right-1 rounded-2xl">
            <img  src="/contct-us.svg" alt="Phone SVG" />
            <span >Contact Us <br /> 0761-8523-398</span>
          </span>
          <img src="/about-us.png" alt="About Us 1" className="w-auto h-[600px] rounded-2xl " />
        </div>

    
      </div>
    </div>
  </div>
</section>

{/* Mobile Section */}
<section className="py-12 px-4 md:hidden">
  <div className="container mx-auto px-2">
    <div className="items-center">
      <div>
        <div className="uppercase text-center text-[#1D5C5C] mb-4">ABOUT US</div>

        <h3 className="text-3xl text-center font-light mb-6">Ready to Transform Your Smile?</h3>
        <p className="text-gray-600 text-center mb-8">
          At City Dental Care in Edinburgh, we use the best services and technology in a friendly environment to
          enhance patient's lives. We are a team of dentists with more than 20 years of experience and aim to
          ensure that every patient receives a comfortable dental experience, ranging from a simple examination to
          cosmetic surgery.
        </p>

        {/* About Us Features */}
        <div className="space-y-6 -space-x-2 flex justify-center flex-wrap items-center">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4 flex-col items-center">
              <div className="bg-[#e8f4f4] p-4 h-fit">{feature.icon}</div>
              <div className="">
                <h4 className="text-xl text-center font-light mb-2">{feature.title}</h4>
                <p className="text-gray-500 text-center">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Images for Mobile */}
       
        <div className="relative">
          <span className="bg-[#1D5C5C] flex space-x-2 text-white px-6 py-4 absolute top-44 right-1 rounded-2xl">
            <img  src="/contct-us.svg" alt="Phone SVG" />
            <span >Contact Us <br /> 0761-8523-398</span>
          </span>
          <img src="/about-us.png" alt="About Us 1" className="w-auto h-[500px] rounded-2xl right-0" />
        </div>
         

      </div>
    </div>
  </div>
</section>

        <OurTeam/>
        <ContactUs/>

    </div>
  );
}