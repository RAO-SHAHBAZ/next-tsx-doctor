"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminPage() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold text-[#2A3F5F]">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-[#1D5C5C] text-white px-6 py-2 rounded-lg transition-colors duration-200"
          >
            Logout
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold text-[#2A3F5F] mb-2">Welcome, Admin!</h3>
          <p className="text-gray-600">
            Manage your blog posts with ease. Create new posts or edit existing ones below.
          </p>
        </div>

        <div className="flex justify-center space-x-4">
          <Link
            href="/admin/addProduct"
            className="bg-[#1D5C5C] text-white px-6 py-3 rounded-lg  transition-colors duration-200"
          >
            Create Blog Post
          </Link>
          <Link
            href="/admin/blogList"
            className="bg-[#1D5C5C] text-white px-6 py-3 rounded-lg  transition-colors duration-200"
          >
            Manage Blog Posts
          </Link>
        </div>
      </div>
    </div>
  );
}