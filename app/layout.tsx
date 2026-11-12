import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthPromptProvider } from "./context/AuthPromptContext";
import { PassProvider } from "./context/PassContext";
import { ReadWithoutAccountProvider } from "./context/ReadWithoutAccountContext";
import CookieConsent from "./components/CookieConsent";
import { ICON_FONT_URL } from "./components/Icon";
import { getReadWithoutAccount } from "@/lib/catalog/server";
import { SITE_URL } from "@/lib/site-url";

const ADSENSE_CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const jakarta = Plus_Jakarta_Sans({ variable: "--font-jakarta", subsets: ["latin"], weight: ["500", "600", "700", "800"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"], weight: ["400", "500", "600"] });

// Runs before first paint so a reader who picked dark doesn't see a flash of light. The site is
// light unless they chose dark with the toggle. Mirrors ThemeContext.
const themeScript = `(function(){try{var t=localStorage.getItem('theme-choice')==='dark'?'dark':'light';document.documentElement.setAttribute('data-theme',t);if(t==='dark'){var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute('content','#0f172a')}}catch(e){}})();`;

export const metadata: Metadata = {
  // Absolute base for canonical and Open Graph URLs (see lib/site-url.ts)
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Next Engineer: AKTU notes, PYQs and study material",
    template: "%s | Next Engineer",
  },
  description: "Unit-wise notes, previous year papers, important questions and syllabus for AKTU programs: B.Tech, MBA, MCA, B.Pharm, M.Tech, BCA and BBA.",
  keywords: "AKTU, notes, PYQ, previous year papers, important questions, B.Tech, MBA, MCA, B.Pharm, M.Tech, BCA, BBA, syllabus",
  authors: [{ name: "Next Engineer" }],
  openGraph: {
    title: "Next Engineer: AKTU notes, PYQs and study material",
    description: "Unit-wise notes, previous year papers and important questions for AKTU students.",
    type: "website",
    siteName: "Next Engineer",
  },
};

// The phone's browser bar matches the light theme; ThemeContext switches it for dark
export const viewport: Viewport = {
  themeColor: "#faf8ff",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // If this can't be read, readers sign in as usual
  const readWithoutAccount = await getReadWithoutAccount().catch(() => false);

  return (
    // data-theme is set by themeScript before React hydrates
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* Icon font, subset to the icons the site uses (see components/Icon.tsx) */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href={ICON_FONT_URL} />
      </head>
      <body className={`${inter.variable} ${jakarta.variable} ${jetbrains.variable} antialiased`}>
        {/* Loaded after hydration: the AdSense loader injects its own scripts into <head>,
            which otherwise breaks React's hydration of the head */}
        {ADSENSE_CLIENT_ID && (
          <Script
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`}
            strategy="afterInteractive"
            crossOrigin="anonymous"
          />
        )}
        <ThemeProvider>
          <ReadWithoutAccountProvider value={readWithoutAccount}>
            <AuthProvider>
              <PassProvider>
                <AuthPromptProvider>
                  {children}
                  <CookieConsent />
                </AuthPromptProvider>
              </PassProvider>
            </AuthProvider>
          </ReadWithoutAccountProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
