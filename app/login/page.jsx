"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Check if already authenticated
  useEffect(() => {
    const checkSession = async () => {
      console.log("Checking session on login page...");
      const response = await fetch("/api/check-session");
      const data = await response.json();
      console.log("Check session response:", data);
      if (data.authenticated) {
        router.push("/admin");
      }
    };
    checkSession();
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting login form with:", { username, password });

    const validUsername = "rao@rao.com";
    const validPassword = "123456";

    if (username === validUsername && password === validPassword) {
      try {
        console.log("Sending login request to /api/login...");
        const response = await fetch("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        console.log("Login API response:", data);

        if (response.ok) {
          console.log("Login successful, redirecting to /admin");
          router.push("/admin");
        } else {
          setError(data.error || "Login failed. Please try again.");
        }
      } catch (err) {
        console.error("Login error:", err);
        setError("An error occurred. Please check your connection.");
      }
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-[750px] flex items-center justify-center bg-gradient-to-r from-[#1D5C5C] to-[#174a4a] p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md transform transition-all duration-100 hover:scale-105">
        <h2 className="text-3xl font-bold text-center text-[#1D5C5C] mb-6">Welcome Back</h2>
        {error && (
          <p className="text-red-500 text-sm text-center mb-4 bg-red-50 p-2 rounded">{error}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D5C5C] transition-all duration-200"
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D5C5C] transition-all duration-200"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#1D5C5C] text-white py-3 rounded-lg font-medium hover:bg-[#174a4a] transition-colors duration-200"
          >
            Login
          </button>
        </form>
        <p className="text-center text-gray-600 text-sm mt-6">
          Need help?{" "}
          <a href="/contact" className="text-[#1D5C5C] hover:underline">
            Contact Support
          </a>
        </p>
      </div>
    </div>
  );
}