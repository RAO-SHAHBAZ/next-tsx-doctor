// BlogPage.tsx
import BredCrumb from "@/components/BredCrumb";
import {
    Facebook,
    Twitter,
    Youtube,
    CalendarDays,
  } from "lucide-react";
  
  const posts = [
    {
      title: "The Latest Innovations in Oral Health Technology",
      date: "August 13, 2024",
      image: "A7402957.jpg",
    },
    {
      title: "Why Regular Dental Check-Ups Are More Important...",
      date: "August 13, 2024",
      image: "A7402954.jpg",
    },
    {
      title: "The Link Between Oral Health and Overall Wellness",
      date: "August 13, 2024",
      image: "A7402987.jpg",
    },
    {
      title: "Trends and Techniques for a Stunning Smile",
      date: "August 13, 2024",
      image: "A7402954.jpg",
    },
    {
      title: "Preventing Tooth Sensitivity: Tips and Tricks From...",
      date: "August 13, 2024",
      image: "A7402954.jpg",
    },
  ];
  
  export default function BlogPage() {
    return (
      <>
      <BredCrumb title="Single Blog"/>
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Blog Post */}
        <main className="lg:col-span-2">
          <article className="">
            
            <img
              src="A7402957.jpg"
              alt="Oral Health Tech"
              className="w-full h-auto object-cover rounded-2xl mb-6"
            />
            <h1 className="text-4xl lg:text-5xl  mb-4">
              The Latest Innovations in Oral Health Technology
            </h1>
            <p className="text-gray-700 leading-relaxed mb-4">
              In recent years, the field of oral health has seen tremendous innovation, ranging from AI-assisted diagnostics to advanced 3D imaging. These developments are revolutionizing patient care, enhancing accuracy in diagnosis, and improving overall dental experiences.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Digital dentistry is becoming more accessible and efficient. Technologies such as intraoral scanners, CAD/CAM restorations, and laser-assisted treatments are now common in modern practices. These tools not only increase efficiency but also contribute to better patient outcomes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As the dental industry continues to evolve, staying informed about these advancements can help both professionals and patients make better decisions for long-term oral wellness.
              As the dental industry continues to evolve, staying informed about these advancements can help both professionals and patients make better decisions for long-term oral wellness.
              As the dental industry continues to evolve, staying informed about these advancements can help both professionals and patients make better decisions for long-term oral wellness.
              As the dental industry continues to evolve, staying informed about these advancements can help both professionals and patients make better decisions for long-term oral wellness.
              As the dental industry continues to evolve, staying informed about these advancements can help both professionals and patients make better decisions for long-term oral wellness.
              As the dental industry continues to evolve, staying informed about these advancements can help both professionals and patients make better decisions for long-term oral wellness.
              As the dental industry continues to evolve, staying informed about these advancements can help both professionals and patients make better decisions for long-term oral wellness.
            </p>
          </article>
        </main>
  
        {/* Sidebar */}
        <aside className=" w-full">
            {/* Make Apointment */}
            <div className="bg-[#F5F5F5] rounded shadow-md p-6 max-w-sm text-center mx-auto">
              <div className="text-[#1D5C5C] text-sm font-medium uppercase mb-2">
                Online Appointment
              </div>
              <h2 className="text-xl  mb-2 leading-snug">
                Enhance Your Smile with <br className="hidden sm:block" />
                Professional Whitening
              </h2>
              <p className="text-gray-600 text-sm mb-4">
                Lobortis ut aptent metus hac ad. Risus morbi ut tellus
                suspendisse lectus platea.
              </p>
              <button
                className="bg-[#1D5C5C] text-white px-5 py-2 rounded font-medium hover:bg-[#174a4a] transition"
              >
                Make Appointment
              </button>
            </div>
            <br />
            
          {/* Latest Posts */}
          
          <div className="bg-[#F5F5F5] rounded-xl shadow p-6">
            <ul className="space-y-5">
              {posts.map((post, index) => (
                <li key={index} className="flex gap-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-30 h-20 object-cover rounded"
                  />
                  <div className="flex flex-col">
                    <h4 className="text-sm  line-clamp-2">
                      {post.title}
                    </h4>
                    <div className="flex items-center text-xs text-[#1D5C5C] mt-1">
                      <CalendarDays size={14} className="mr-1" />
                      {post.date}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
       
  
          {/* Follow Us */}
          <div className="mt-10">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">
              Follow Us :
            </h3>
            <div className="flex gap-4 text-white">
              <div className="bg-[#1D5C5C] p-2 rounded-full hover:opacity-80 cursor-pointer">
                <Facebook size={18} />
              </div>
              <div className="bg-[#1D5C5C] p-2 rounded-full hover:opacity-80 cursor-pointer">
                <Twitter size={18} />
              </div>
              <div className="bg-[#1D5C5C] p-2 rounded-full hover:opacity-80 cursor-pointer">
                <Youtube size={18} />
              </div>
            </div>
          </div>
        </aside>
      </div>
      </>
    );
  }
  