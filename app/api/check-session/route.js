import { NextResponse } from "next/server";

export async function GET(request) {
  console.log("Checking session...");
  const session = request.cookies.get("session")?.value;
  console.log("Session cookie in check-session:", session);

  if (session === "authenticated") {
    console.log("Session valid, returning authenticated: true");
    return NextResponse.json({ authenticated: true });
  }

  console.log("Session invalid, returning authenticated: false");
  return NextResponse.json({ authenticated: false }, { status: 401 });
}