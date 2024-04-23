import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest): NextResponse | undefined {
  const persona = request.cookies.get('persona')?.value || 'DEFAULT'
  return NextResponse.rewrite(new URL(`_handlers/${persona}${request.nextUrl.pathname}`, request.url))
}

export const config = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       */
      '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
  }
  