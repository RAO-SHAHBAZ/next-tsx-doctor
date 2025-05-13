import { NextResponse } from "next/server";

export async function POST() {
  console.log("Logout request received, clearing session cookie...");
  const response = NextResponse.json({ success: true });
  response.cookies.set("session", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
  console.log("Session cookie cleared");
  return response;
}