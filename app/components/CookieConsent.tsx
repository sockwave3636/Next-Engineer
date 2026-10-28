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
    window.dispatchEvent(new Event('cookieConsentChanged'));
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-3 sm:p-5">
      <div className="card mx-auto flex max-w-3xl flex-col gap-4 p-5 shadow-lift sm:flex-row sm:items-center">
        <span className="hidden text-3xl sm:block" aria-hidden="true">🍪</span>
        <p className="flex-1 text-sm text-ink">
          We use cookies to improve your experience and show personalised ads through Google AdSense.{' '}
          <Link href="/privacy-policy" className="link">
            Learn more
          </Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <button onClick={handleDecline} className="btn btn-secondary btn-sm">
            Decline
          </button>
          <button onClick={handleAccept} className="btn btn-primary btn-sm">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
