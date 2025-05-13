import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("Middleware triggered for:", request.nextUrl.pathname);
  
  const protectedRoute = "/admin";

  if (request.nextUrl.pathname.startsWith(protectedRoute)) {
    console.log("Checking session for /admin route...");
    const session = request.cookies.get("session")?.value;
    console.log("Session cookie:", session);

    if (!session || session !== "authenticated") {
      console.log("No valid session, redirecting to /login");
      return NextResponse.redirect(new URL("/login", request.url));
    }
    console.log("Session valid, proceeding to /admin");
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};