import { NextResponse } from "next/server";

export async function POST(request) {
  console.log("Received login request...");
  const { username, password } = await request.json();
  console.log("Login credentials:", { username, password });

  const validUsername = "rao@rao.com";
  const validPassword = "123456";

  if (username === validUsername && password === validPassword) {
    console.log("Credentials valid, setting session cookie...");
    const response = NextResponse.json({ success: true });
    response.cookies.set("session", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });
    console.log("Session cookie set successfully");
    return response;
  }

  console.log("Invalid credentials, returning 401");
  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}