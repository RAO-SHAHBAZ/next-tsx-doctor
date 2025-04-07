import BredCrumb from "@/components/BredCrumb";
import ContactUs from "@/components/contact-us";


import Image from "next/image";
import doc1 from "@/public/doc1.png";
import doc2 from "@/public/doc2.png";

const teamMembers = [
  {
    name: "Stacia McCahan",
    role: "Registered Mental Health",
    image: doc1,
  },
  {
    name: "Katie Stuart",
    role: "LMHC",
    image: doc2,
  },
  {
    name: "Alyssa Finkelstein",
    role: "Registered Mental Health",
    image: doc1,
  },
  {
    name: "Alyssa Finkelstein",
    role: "Registered Mental Health",
    image: doc2,
  },
  {
    name: "Stacia McCahan",
    role: "Registered Mental Health",
    image: doc1,
  },
  {
    name: "Katie Stuart",
    role: "LMHC",
    image: doc2,
  },
  {
    name: "Alyssa Finkelstein",
    role: "Registered Mental Health",
    image: doc1,
  },
  {
    name: "Alyssa Finkelstein",
    role: "Registered Mental Health",
    image: doc2,
  },
];

function OurStaff() {
  return (
    <>

      <BredCrumb  title="Our Staff"  />
      {/* TEAM SECTION START FROM HERE */}
      <section className="py-5 mb-10 md:py-5 bg-white">
            <div className="container mx-auto px-4">
              {/* Heading Section */}
              <h2 className="text-center text-4xl  md:text-5xl lg:text-6xl   mb-4  mt-20 max-w-4xl mx-auto">Protect Your Teeth With preventative Care</h2>
              <p className="text-center text-gray-500 max-w-3xl my-10 mx-auto">
                Our dental team at <strong>City Dental Care in Edinburgh</strong> offers high-quality services in Invisalign,
                cosmetic work, and general dentistry
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
      
                    {/* Team Member Info */}
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-gray-600">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
      


      <ContactUs />


 
    </>
  );
}

export default OurStaff;
