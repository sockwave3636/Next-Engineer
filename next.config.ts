import type { NextConfig } from "next";

// Firebase's sign-in pages, served from this site's own address. Browsers block the cross-site
// storage Google's full-page sign-in redirect relies on, so the redirect (used when a popup is
// blocked) only works once NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN is this site's domain and these
// paths are proxied to the project's firebaseapp.com host.
const firebaseHost = `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseapp.com`;

const nextConfig: NextConfig = {
  async rewrites() {
    return [{ source: "/__/auth/:path*", destination: `${firebaseHost}/__/auth/:path*` }];
  },
};

export default nextConfig;
