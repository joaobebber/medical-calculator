import type { NextRequest } from 'next/server'

// Only applied for private routes
export function middleware(request: NextRequest) {
  const currentUserId = request.cookies.get('@medcalc.user.id')?.value

  if (!currentUserId && !request.nextUrl.pathname.startsWith('/login')) {
    return Response.redirect(new URL('/login', request.url))
  }
}

// Define private routes
export const config = {
  // Negative declaration to define public routes (exception)
  matcher: '/((?!register|api|_next/static|favicon.ico|_next/image|.*\\.png$).*)',
}
