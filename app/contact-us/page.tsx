import BredCrumb from "@/components/BredCrumb"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

import {
  Mail,
  Phone,
  MapPin,
  Globe,
  CalendarDays,
  Facebook,
  Twitter,
  Youtube,
} from "lucide-react";

function ContactUS() {
  return (
<>
    <Navbar/>
    <BredCrumb title="Contact US" />

    <section className=" py-16 px-6 container  w-full mx-auto">
      <div className=" grid md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div>
          <h3 className="text-lg text-[#1D5C5C] ">Contact Us</h3>
          <h2 className="text-4xl font-bold mt-2 mb-4  text-[#1c1c1c]">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            Lobortis ut aptent metus hac ad. Risus morbi suspendisse lectus platea nec pretium
            suscipit dolor lorem vivamus. Lorem ipsum dolor sit amet, consectetur.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Left Box: Phone & Location */}
            <div className=" p-6  ">
              <h4 className=" text-xl mb-4 text-[#1D5C5C]">Get In Touch</h4>

              <div className="flex items-start gap-4 mb-5">
                <div className="bg-[#1D5C5C] text-white p-3 rounded-full">
                  <Phone size={20} />
                </div>
                <div>
                  <h5 className=" text-lg">Phone</h5>
                  <p className="text-gray-600">01312282442</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#1D5C5C] text-white p-3 rounded-full">
                  <MapPin size={20} />
                </div>
                <div>
                  <h5 className=" text-lg">Location</h5>
                  <p className="text-gray-600">9 Earl Grey St Edinburgh EH3 9BN</p>
                </div>
              </div>
            </div>

            {/* Right Box: Email & Website */}
            <div className=" p-6   ">
              <h4 className=" text-xl mb-4 text-[#1D5C5C]">Email</h4>

              <div className="flex items-start gap-4 mb-5">
                <div className="bg-[#1D5C5C] text-white p-3 rounded-full">
                  <Mail size={20} />
                </div>
                <div>
                  <h5 className=" text-lg">Email</h5>
                  <p className="text-gray-600">info@citydentalcare.co.uk</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#1D5C5C] text-white p-3 rounded-full">
                  <Globe size={20} />
                </div>
                <div>
                  <h5 className=" text-lg">Website</h5>
                  <p className="text-gray-600">https://citydentalcare.co.uk/</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column – Opening Hours */}
        <div className="bg-[#1D5C5C] rounded-2xl text-white p-8">
          <h3 className="text-xl font-semibold font-serif">We Encourage You to Schedule a Consultation</h3>

          <div className="flex items-center gap-2 mt-6 mb-4">
            <CalendarDays size={20} />
            <h4 className="text-lg font-semibold">Opening Hours</h4>
          </div>

          <div className="space-y-3 border-t border-white/30 pt-4">
            <div className="flex justify-between">
              <span>Monday - Friday :</span>
              <span>08.00 am - 07.00 pm</span>
            </div>
            <div className="flex justify-between border-t border-white/30 pt-3">
              <span>Saturday:</span>
              <span>09.00 am - 08.00 pm</span>
            </div>
            <div className="flex justify-between border-t border-white/30 pt-3">
              <span>Sunday</span>
              <span>Closed</span>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="mb-2 text-sm">Follow Us :</h4>
            <div className="flex gap-4">
              <a href="#" className="bg-white text-[#1D5C5C] p-2 rounded-full">
                <Facebook size={16} />
              </a>
              <a href="#" className="bg-white text-[#1D5C5C] p-2 rounded-full">
                <Twitter size={16} />
              </a>

              <a href="#" className="bg-white text-[#1D5C5C] p-2 rounded-full">
                <Youtube size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>


</>
  )
}

export default ContactUS