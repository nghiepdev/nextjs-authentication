import {cookies} from 'next/headers';
import type {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';

const protectedRoutes = ['/dashboard'];
const publicRoutes = ['/login'];

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|icons|images|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};

export async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);
  const accessToken = (await cookies()).get('session')?.value;

  // Authentication
  if (isProtectedRoute && !accessToken) {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }
  if (isPublicRoute && accessToken && !path.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl));
  }

  return NextResponse.next();
}
