import Image from "next/image";
import BredCrumb from "@/components/BredCrumb"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"


import smile1 from "@/public/Composite-Bonding.jpg";
import smile2 from "@/public/composite-bonding-2.jpg";
import smile3 from "@/public/Dental-crown.jpg";
import smile4 from "@/public/dental-veeners.jpg";
import smile5 from "@/public/FAB-Bonding.jpg";
import smile6 from "@/public/FAB-Bonding-2.jpg";
import smile7 from "@/public/Invisalign.jpg";
import smile8 from "@/public/Invislaign-2.jpg";
import smile9 from "@/public/smile-makeover.jpg";
import smile10 from "@/public/Smile-Makeover-2.jpg";
import smile11 from "@/public/tooth-gum copy.jpg";
import smile12 from "@/public/Amalgam.jpg";
import ContactUs from "@/components/contact-us";

const teamMembers = [
  {
    name: "Composite Bonding",
    image: smile1,
  },
  {
    name: "composite-bonding-2",
    image: smile2,
  },
  {
    name: "Dental-crown",
    image: smile3,
  },
  {
    name: "dental-veeners",
    image: smile4,
  },
  {
    name: "FAB-Bonding",
    image: smile5,
  },
  {
    name: "Invisalign",
    image: smile6,
  },
  {
    name: "Invislaign-2",
    image: smile7,
  },
  {
    name: "Alyssa Finkelstein",
    image: smile8,
  },
  {
    name: "smile-makeover",
    image: smile9,
  },
  {
    name: "Smile-Makeover ",
    image: smile10,
  },
  {
    name: "tooth-gum ",
    image: smile11,
  },
  {
    name: "Amalgam ",
    image: smile12,
  },
];


function SmileGallery() {

  return (
    <>
        <Navbar/>
        <BredCrumb title="Smile Gallery" subtitle="Home - Smile Gallery"/>

 <section className="mt-20 mb-20   bg-white">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <div className="uppercase text-center text-[#1D5C5C] mb-4">SMILE GALLERY</div>
        <h2 className="text-4xl  md:text-5xl lg:text-6xl  mb-4 text-center max-w-4xl mx-auto">Take A Look At Some Of Our Amazing Results</h2>
        <p className="text-center text-gray-500 max-w-3xl mx-auto">
          Our dental team at <strong>City Dental Care in Edinburgh</strong> offers high-quality services in Invisalign,
          cosmetic work, and general dentistry. For the last <strong>twenty years</strong>, our practice has been based
          on patients' needs to provide a comfortable and efficient treatment process.
        </p>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white shadow rounded-lg overflow-hidden text-center">
              {/* Team Member Image */}
              <div className="relative w-full h-72"> {/* Increased height  to h-72 */}
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <br />


          <ContactUs/>
        <Footer/>
    
    
    </>
  )
}

export default SmileGallery