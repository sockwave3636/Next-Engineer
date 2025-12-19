"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    // Dispatch custom event to notify AdSense components
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('cookieConsentChanged'));
    }
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 shadow-lg"
      style={{
        backgroundColor: 'var(--secondary)',
        borderTop: '2px solid var(--border-color)',
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex-1">
          <p className="text-sm sm:text-base" style={{ color: 'var(--text-primary)' }}>
            We use cookies and similar technologies to improve your experience and show personalized ads through Google AdSense. 
            By clicking &quot;Accept&quot;, you consent to our use of cookies. 
            <Link href="/privacy-policy" className="underline ml-1 hover:opacity-80">
              Learn more
            </Link>
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={handleDecline}
            className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
            style={{
              backgroundColor: 'transparent',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border-color)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg"
            style={{
              backgroundColor: 'var(--primary)',
              color: '#ffffff',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary-hover)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary)';
            }}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

