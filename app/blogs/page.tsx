import BredCrumb from "@/components/BredCrumb"
import ContactUs from "@/components/contact-us"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"


  const news = [
    {
      image: "/news1.png",
      title: "Appropriately productize",
      date: "Jan 21, 2019",
      comments: "45 Comments",
      excerpt: "Some quick example text to build on the",
    },
    {
      image: "/news2.png",
      title: "Quickly formulate backend",
      date: "May 26, 2019",
      comments: "30 Comments",
      excerpt: "Synergistically engage effective ROI after",
    },
    {
      image: "/news3.png",
      title: "Objectively extend extensive",
      date: "Apr 25, 2019",
      comments: "41 Comments",
      excerpt: "Holistically mesh open-source leadership",
    },
    {
      image: "/news1.png",
      title: "Appropriately productize",
      date: "Jan 21, 2019",
      comments: "45 Comments",
      excerpt: "Some quick example text to build on the",
    },
    {
      image: "/news1.png",
      title: "Appropriately productize",
      date: "Jan 21, 2019",
      comments: "45 Comments",
      excerpt: "Some quick example text to build on the",
    },
    {
      image: "/news2.png",
      title: "Quickly formulate backend",
      date: "May 26, 2019",
      comments: "30 Comments",
      excerpt: "Synergistically engage effective ROI after",
    },
    {
      image: "/news3.png",
      title: "Objectively extend extensive",
      date: "Apr 25, 2019",
      comments: "41 Comments",
      excerpt: "Holistically mesh open-source leadership",
    },
    {
      image: "/news1.png",
      title: "Appropriately productize",
      date: "Jan 21, 2019",
      comments: "45 Comments",
      excerpt: "Some quick example text to build on the",
    },
  ]

function Blogs() {
  return (
<>
    <Navbar/>
    <BredCrumb title="News & Blogs" />
<section className="py-10  ">
        <div className="container mx-auto px-4 flex items-center justify-center flex-col">
          {/* Heading Section */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl max-w-4xl mb-4">Our Latest News</h2>
          <p className="text-center text-gray-500 mb-2">
            Enthusiastically drive revolutionary opportunities before emerging leadership.
          </p>
          <p className="text-center text-gray-500 mb-12">
            Distinctively transform tactical methods of empowerment via resource.
          </p>
  
          {/* News Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {news.map((item, index) => (
              <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
                {/* News Image */}
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-52 object-cover" />
  
                {/* News Content */}
                <div className="p-6">
                  <h4 className="font-light mb-2">{item.title}</h4>
                  <div className="text-sm text-gray-500 mb-2 flex flex-wrap gap-2">
                    <span className="text-[14px]">• {item.date}</span>
                    <span className="text-[14px]">• {item.comments}</span>
                  <div className="text-gray-600 text-[14px] mb-4 ">{item.excerpt}</div>
                  </div>
  
                  {/* Read More Link */}
                  <a href="#" className="text-[#1d5c5c] text-[16px] font-semibold flex items-center gap-1">
                    Read more
                    <svg
                      className="ml-1"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    <ContactUs/>
  
    <Footer/>


</>
  )
}

export default Blogs