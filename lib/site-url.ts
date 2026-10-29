// The site's public address, for canonical links, the sitemap and robots.txt.
// NEXT_PUBLIC_SITE_URL wins; on Vercel the project's production domain is used when it's unset,
// so pages never tell search engines their address is localhost.
const vercelDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || (vercelDomain ? `https://${vercelDomain}` : 'http://localhost:3000')
).replace(/\/+$/, '');
