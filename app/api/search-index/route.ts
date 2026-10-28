import { getSearchIndex } from '@/lib/catalog/server';

// Every subject's code, name and page URL, for the header search box.
// Cached server-side under the 'catalog' tag; browsers and CDNs may reuse it briefly.
export async function GET() {
  const entries = await getSearchIndex();
  return Response.json(entries, {
    headers: { 'Cache-Control': 'public, max-age=60, s-maxage=300, stale-while-revalidate=3600' },
  });
}
