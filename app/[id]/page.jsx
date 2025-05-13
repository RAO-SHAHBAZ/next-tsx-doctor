"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import BredCrumb from "@/components/BredCrumb";
import { Facebook, Twitter, Youtube, CalendarDays } from "lucide-react";
import Link from "next/link";

const fallbackPost = {
  title: "Loading...",
  date: "Loading...",
  image: "/placeholder.jpg",
  author: "Loading...",
  description: "Please wait while we fetch the blog content.",
};

export default function BlogPage({ params }) {
  const { id } = params;
  const [data, setData] = useState(null);
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const res = await axios.get("/api/blog", { params: { id } });
        setData(res.data);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setData(fallbackPost);
      }
    };

    const fetchLatestPosts = async () => {
      try {
        const res = await axios.get("/api/blog/latest");
        const filteredPosts = res.data.filter((post) => post._id !== id); // Exclude the current post
        setLatestPosts(filteredPosts);
      } catch (error) {
        console.error("Error fetching latest posts:", error);
      }
    };

    fetchBlogData();
    fetchLatestPosts();
  }, [id]);

  const post = data || fallbackPost;

  return (
    <>
      {/* ✅ Dynamic breadcrumb title */}
      <BredCrumb title={post.title} />

      <div className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Blog Post */}
        <main className="lg:col-span-2">
          <article>
            <img
              src={post.image || "/placeholder.jpg"}
              alt={post.title}
              className="w-full h-auto object-cover rounded-2xl mb-6"
            />
            {/* <h1 className="text-4xl lg:text-5xl mb-4">{post.title}</h1> */}
            <p
              className="text-gray-700 leading-relaxed mb-4"
              dangerouslySetInnerHTML={{ __html: post.description }}
            ></p>
          </article>
        </main>

        {/* Sidebar */}
        <aside className="w-full">
          {/* Appointment Widget */}
          <div className="bg-[#F5F5F5] rounded shadow-md p-6 text-center mx-auto">
            <div className="text-[#1D5C5C] text-sm font-medium uppercase mb-2">
              Online Appointment
            </div>
            <h2 className="text-xl mb-2 leading-snug">
              Enhance Your Smile with <br className="hidden sm:block" />
              Professional Whitening
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Lobortis ut aptent metus hac ad. Risus morbi ut tellus suspendisse
              lectus platea.
            </p>
            <button className="bg-[#1D5C5C] text-white px-5 py-2 rounded font-medium hover:bg-[#174a4a] transition">
              Make Appointment
            </button>
          </div>

          {/* ✅ Latest Posts with fallback */}
          <div className="bg-[#F5F5F5] rounded-xl shadow p-6 mt-6">
            <h3 className="text-lg mb-4">Latest Posts</h3>
            <ul className="space-y-4">
              {latestPosts.map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  {/* Wrap the entire post item in a Link */}
                  <Link
                    href={`/${item._id}`}
                    className="flex gap-3 items-start"
                  >
                    <img
                      src={item.image || "/placeholder.jpg"}
                      alt={item.title}
                      className="w-32 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h4 className="text-sm font-medium line-clamp-2 leading-tight mb-1">
                        {item.title}
                      </h4>
                      <p className="h-4 overflow-hidden text-sm leading-snug text-gray-600">
                        {item.description.replace(/<[^>]+>/g, "")}
                      </p>
                      <div className="flex items-center text-xs text-[#1D5C5C] mt-1">
                        <CalendarDays size={14} className="mr-1" />
                        {item.date
                          ? new Date(item.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })
                          : "No date"}
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons */}
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
