// AdSense checks /ads.txt for the publisher account allowed to sell ads on this site;
// without it AdSense warns "Earnings at risk". Built from NEXT_PUBLIC_ADSENSE_CLIENT_ID (ca-pub-…).
export function GET() {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;
  if (!client) return new Response('Not found', { status: 404 });
  const publisher = client.replace(/^ca-/, '');
  return new Response(`google.com, ${publisher}, DIRECT, f08c47fec0942fa0\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
