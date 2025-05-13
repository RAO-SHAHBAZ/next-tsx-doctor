import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-[#F5F5F5] min-h-screen">
      {/* Logo (Commented out but styled for potential use) */}
      {/* <Link href="/" className="px-2 sm:pl-14 py-3 border border-black transition-all duration-200 hover:bg-gray-100">
        <Image src={assets.logo} width={120} alt="Logo" className="transition-transform duration-200 hover:scale-105" />
      </Link> */}

      <div className="w-28 sm:w-80 h-[100vh] relative py-12 border-r border-gray-300">
        <div className="w-[50%] sm:w-[80%] absolute right-0 flex flex-col items-start space-y-4">
          <Link
            href="/admin/addProduct"
            className="flex items-center gap-3 font-medium px-4 py-2 bg-[#1D5C5C] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] rounded-lg hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] transition-all duration-200 hover:-translate-x-1"
          >
            <Image src={assets.add_icon} alt="Add Blog" width={28} />
            <p className="text-white">Add Blogs</p>
          </Link>
          <Link
            href="/admin/blogList"
            className="flex items-center gap-3 font-medium px-4 py-2 bg-[#1D5C5C] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] rounded-lg hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] transition-all duration-200 hover:-translate-x-1"
          >
            <Image src={assets.blog_icon} alt="Blog List" width={28} />
            <p className="text-white">Blog List</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;