
import ContactUs from "@/components/contact-us";
import Image from "next/image";
import doc1 from "@/public/staff/chris.jpg";
import doc2 from "@/public/staff/dentist.jpg";
import doc3 from "@/public/staff/feras.jpg";
import doc4 from "@/public/staff/hamza-alhadad.jpg";
import doc5 from "@/public/staff/sanja.jpg";
import doc6 from "@/public/staff/uzaire.jpg";
import doc7 from "@/public/staff/zoe.jpg";
import BredCrumbServices from "@/components/BreadCrumbServices";
import Link from "next/link";

const teamMembers = [
  {
    name: "Christopher Sarafiant",
    gdc:'310911',
    role: "Dentist: DMD 2023 (Vilnius University)",
    image: doc1,
  },
  {
    name: "Nabila Al Riyami",
    gdc:'308610 ',
    role: "Dentist: BDS 2023 (Glasgow)",
    image: doc2,
  },
  {
    name: "Feras Elbiss ",
    gdc:'303408',
    role: "Dentist: MDDr 2022 (Charles University)",
    image: doc3,
  },
  {
    name: "Hamza Al Haddad",
    gdc:'310491',
    role: "Dentist: DMD 2023 (Vilnius University)",
    image: doc4,
  },
  {
    name: "Sania Jabeen",
    gdc:'319609',
    role: "Therapist: BSc (Hons) Oral Health Sciences 2024 (Edinburgh)",
    image: doc5,
  },
  {
    name: "Uzair Sarwar",
    gdc:'308854',
    role: "Dentist: BDS 2023 (Glasgow)",
    image: doc6,
  },
  {
    name: "Zoe Kemp",
    gdc:'295494 ',
    role: "Therapist: BSc (Hons) Oral Health Sciences 2024 (Edinburgh)",
    image: doc7,
  },
  // {
  //   name: "Usman Ullah ",
  //   gdc:'113427'
  //   role: "Dentist: BDS 2007 (Dundee)",
  //   image: doc2,
  // },
];

function OurStaff() {
  return (
    <>

<BredCrumbServices
        title="Our Staff"
        subtitle="Our Staff"
      />
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
                      <h3 className="text-xl text-gray-900">{member.name}</h3>
                      <p className="text-gray-600">GDC Number: {member.gdc}</p>
                      <p className="text-gray-600 "> {member.role}</p>
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
