import { NextResponse, type NextRequest } from 'next/server';
import { isUnwantedBot } from '@/lib/bots';

// Turns away scrapers, AI crawlers and scripts before a page runs, so they cost no database reads.
// robots.ts asks politely; this is for the ones that ignore it.
export function proxy(request: NextRequest) {
  if (isUnwantedBot(request.headers.get('user-agent'))) {
    return new NextResponse('Automated access is not allowed.', { status: 403 });
  }
  return NextResponse.next();
}

export const config = {
  // Left open: build files, the files crawlers read for the rules, and Razorpay's server-to-server webhook
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico|robots\\.txt|sitemap\\.xml|ads\\.txt|api/payments/webhook).*)'],
};
