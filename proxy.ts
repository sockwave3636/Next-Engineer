import { NextResponse, type NextRequest } from 'next/server';
import { isUnwantedBot } from '@/lib/bots';
import { canonicalRedirect, SITE_URL } from '@/lib/site-url';

// Runs before pages and API routes. Sends visits to the old *.vercel.app address to the site's own
// domain, and turns away scrapers, AI crawlers and scripts before a page runs, so they cost no
// database reads. robots.ts asks politely; this is for the ones that ignore it.
export function proxy(request: NextRequest) {
  if (request.method === 'GET' || request.method === 'HEAD') {
    const target = canonicalRedirect(new URL(request.url), SITE_URL, process.env.VERCEL_ENV === 'production');
    if (target) return NextResponse.redirect(target, 308);
  }
  if (isUnwantedBot(request.headers.get('user-agent'))) {
    return new NextResponse('Automated access is not allowed.', { status: 403 });
  }
  return NextResponse.next();
}

export const config = {
  // Every run is billed, so it skips what needs no check: images and other files, build files, and
  // the links the site's own pages prefetch. Also left open: Razorpay's server-to-server webhook.
  matcher: [
    '/api/((?!payments/webhook).*)',
    {
      source: '/((?!api/|_next/|__/auth|favicon\\.ico|robots\\.txt|sitemap\\.xml|ads\\.txt|.*\\.[A-Za-z0-9]+$).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
};
