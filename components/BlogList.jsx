import React, { useState, useEffect } from "react";
import ContactUs from "@/components/contact-us";
import axios from "axios";
import Link from "next/link";

const BlogList = () => {
  const [menue, setMenue] = useState("All");
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get("/api/blog");

      // Sort by newest (assuming date is valid ISO string or Date)
      const sortedBlogs = response.data.blogs.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });

      setBlogs(sortedBlogs);
    } catch (err) {
      console.error("Error fetching blogs:", err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) return "Invalid Date";
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const filteredBlogs = blogs.filter((item) =>
    menue === "All" ? true : item.category === menue
  );

  return (
    <>
      <section className="py-10">
        <div className="container mx-auto px-4 flex items-center justify-center flex-col">
          <h2 className="text-4xl md:text-5xl lg:text-6xl max-w-4xl mb-4 text-center">
            Our Latest News
          </h2>
          <p className="text-center text-gray-500 mb-2">
            Enthusiastically drive revolutionary opportunities before emerging leadership.
          </p>
          <p className="text-center text-gray-500 mb-12">
            Distinctively transform tactical methods of empowerment via resource.
          </p>

          {/* Category Menu */}
          {/* <div className="flex justify-center flex-wrap gap-4 mb-12">
            {["All", "Technology", "Startup", "Lifestyle"].map((cat) => (
              <button
                key={cat}
                onClick={() => setMenue(cat)}
                className={`py-2 px-5 rounded-full border text-sm font-medium transition ${
                  menue === cat
                    ? "bg-black text-white"
                    : "bg-white text-black border-gray-300 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div> */}

          {/* Blog Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {filteredBlogs.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow rounded-lg overflow-hidden"
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-52 object-cover"
                />

                <div className="p-6">
                  <h4 className="font-light mb-2">{item.title}</h4>
                  <div className="text-sm text-gray-500 mb-2 flex flex-wrap gap-2">
                    <span className="text-[14px]">
                       {formatDate(item.date)}
                    </span>
                    <span className="text-[14px]"></span>
                  </div>
<div className="text-gray-600 text-[14px] mb-4 line-clamp-3">
  {item.description.replace(/<[^>]+>/g, '')}
</div>

                  <Link
                    href={`/${item._id}`}
                    className="text-[#1d5c5c] text-[16px] font-semibold flex items-center gap-1"
                  >
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
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactUs />
    </>
  );
};

export default BlogList;
