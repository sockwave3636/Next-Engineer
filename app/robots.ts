import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site-url';

// Search engines, the AdSense crawlers and link previews. Every other crawler is asked to stay
// out, and proxy.ts refuses the ones that ignore this.
const WELCOME = [
  'Googlebot',
  'Google-InspectionTool',
  'Mediapartners-Google',
  'AdsBot-Google',
  'Bingbot',
  'Twitterbot',
  'LinkedInBot',
  'TelegramBot',
  'Discordbot',
  'facebookexternalhit',
  'WhatsApp',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: WELCOME, allow: '/', disallow: ['/admin', '/api/'] },
      { userAgent: '*', disallow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
