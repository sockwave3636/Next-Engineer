import type { Metadata } from "next";
import Script from 'next/script';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthPromptProvider } from "./context/AuthPromptContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Learn Platform",
  description: "Access your courses and study materials",
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
          crossOrigin="anonymous"
        />
        <ThemeProvider>
          <AuthProvider>
            <AuthPromptProvider>
              {children}
            </AuthPromptProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
