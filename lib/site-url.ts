// The site's public address, for canonical links, the sitemap and robots.txt.
// NEXT_PUBLIC_SITE_URL wins; on Vercel the project's production domain is used when it's unset,
// so pages never tell search engines their address is localhost.
const vercelDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || (vercelDomain ? `https://${vercelDomain}` : 'http://localhost:3000')
).replace(/\/+$/, '');

// Once the site has its own domain, a visit to the *.vercel.app address of the live site should
// end up on the domain instead. Returns where to send `requestUrl`, or null to serve it as it is.
export function canonicalRedirect(requestUrl: URL, siteUrl: string, production: boolean): URL | null {
  const site = new URL(siteUrl);
  if (!production || !requestUrl.hostname.endsWith('.vercel.app') || site.hostname.endsWith('.vercel.app')) return null;
  if (site.hostname === requestUrl.hostname) return null;
  return new URL(requestUrl.pathname + requestUrl.search, site);
}
