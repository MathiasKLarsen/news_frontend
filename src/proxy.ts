import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function proxy(request: NextRequest) {
  const cookie = await cookies()

  const token = cookie.get("token")
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"]
}