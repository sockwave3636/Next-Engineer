import type { Metadata } from "next";
import Script from 'next/script';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthPromptProvider } from "./context/AuthPromptContext";
import CookieConsent from "./components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Engineer - Engineering Study Materials & Resources",
  description: "Access comprehensive engineering courses, study materials, and resources for Dr. A.P.J. Abdul Kalam Technical University, Uttar Pradesh. Get notes, articles, and exam preparation materials.",
  keywords: "engineering, study materials, AKTU, technical university, engineering courses, exam preparation, notes, resources",
  authors: [{ name: "Next Engineer" }],
  openGraph: {
    title: "Next Engineer - Engineering Study Materials & Resources",
    description: "Access comprehensive engineering courses, study materials, and resources",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2968140045653690"
          strategy="afterInteractive"
          crossOrigin="anonymous">
        </Script>
        <ThemeProvider>
          <AuthProvider>
            <AuthPromptProvider>
              {children}
              <CookieConsent />
            </AuthPromptProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
