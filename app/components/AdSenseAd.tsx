"use client";

import { useEffect, useRef, useState } from 'react';

interface AdSenseAdProps {
  adSlot: string;
  adFormat?: string;
  fullWidthResponsive?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

export default function AdSenseAd({
  adSlot,
  adFormat = 'auto',
  fullWidthResponsive = true,
  style,
  className = '',
}: AdSenseAdProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const adInitialized = useRef(false);
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    // Check consent status
    if (typeof window !== 'undefined') {
      const consent = localStorage.getItem('cookieConsent');
      setHasConsent(consent === 'accepted');
    }
  }, []);

  useEffect(() => {
    // Only initialize if user has consented
    if (!hasConsent || typeof window === 'undefined') return;

    // Only initialize once
    if (adInitialized.current) return;

    // Wait a bit for adsbygoogle script to load
    const initAd = () => {
      try {
        if (window.adsbygoogle && adRef.current) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          adInitialized.current = true;
        } else {
          // Retry after a short delay if script isn't loaded yet
          setTimeout(initAd, 100);
        }
      } catch (e) {
        console.error('AdSense initialization error:', e);
      }
    };

    initAd();
  }, [hasConsent]);

  // Listen for consent changes
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleConsentChange = () => {
      const consent = localStorage.getItem('cookieConsent');
      setHasConsent(consent === 'accepted');
    };

    // Listen for custom event from CookieConsent component
    window.addEventListener('cookieConsentChanged', handleConsentChange);
    // Also listen for storage changes (from other tabs)
    window.addEventListener('storage', handleConsentChange);

    return () => {
      window.removeEventListener('cookieConsentChanged', handleConsentChange);
      window.removeEventListener('storage', handleConsentChange);
    };
  }, []);

  // Don't render ad if user hasn't consented
  if (!hasConsent) {
    return null;
  }

  return (
    <div ref={adRef} className={className} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-2968140045653690"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive ? 'true' : 'false'}
      />
    </div>
  );
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

