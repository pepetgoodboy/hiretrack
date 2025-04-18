import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function middleware(request) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  if (!token && !request.nextUrl.pathname.startsWith("/signin")) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  if (token && request.nextUrl.pathname.startsWith("/signin")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/signin"],
};
