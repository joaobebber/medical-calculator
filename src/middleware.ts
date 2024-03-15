import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const currentUserId = request.cookies.get('@medcalc.user.id')?.value

  if (!currentUserId && !request.nextUrl.pathname.startsWith('/login')) {
    return Response.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: '/((?!register|api|_next/static|favicon.ico|_next/image|.*\\.png$).*)',
}
