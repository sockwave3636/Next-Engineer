// The automated visitors the site wants: Google and Bing search, the AdSense crawlers, and the
// link previews apps fetch when a student shares a page. Everything else automated is turned away.
const WANTED =
  /googlebot|google-inspectiontool|google-site-verification|mediapartners-google|adsbot-google|google-display-ads|bingbot|bingpreview|msnbot|whatsapp|telegrambot|facebookexternalhit|twitterbot|linkedinbot|discordbot|vercel/;

// Words only automated clients put in a User-Agent. AI and SEO crawlers without "bot" in their name are listed.
const AUTOMATED =
  /bot|crawl|spider|scrap|slurp|curl|wget|python|aiohttp|httpx|axios|node-fetch|node\.js|undici|go-http|java\/|okhttp|libwww|lwp-|perl|ruby|php\/|guzzle|headless|phantomjs|puppeteer|playwright|selenium|httrack|ia_archiver|claude|anthropic|chatgpt|perplexity|cohere|bytespider|meta-external|imagesift|ahrefs|semrush|dataforseo/;

export function isUnwantedBot(userAgent: string | null): boolean {
  // Cubot is a phone brand, and its name appears in real browsers' User-Agents
  const agent = (userAgent ?? '').toLowerCase().replace(/cubot/g, '').trim();
  if (!agent) return true;
  return !WANTED.test(agent) && AUTOMATED.test(agent);
}
