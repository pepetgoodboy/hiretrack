import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(request) {
  const token = request.cookies.get("token");

  if (!token && !request.nextUrl.pathname.startsWith("/signin")) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard/:path*",
};
