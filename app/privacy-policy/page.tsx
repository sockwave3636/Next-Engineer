export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen px-4 py-8 max-w-3xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
        Privacy Policy
      </h1>
      <p className="text-sm sm:text-base mb-6" style={{ color: 'var(--text-secondary)' }}>
        Last updated: {new Date().toLocaleDateString('en-IN')}
      </p>

      <section className="space-y-4 text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>
        <p>
          This Privacy Policy explains how we collect, use, and protect your information when you use the Next Engineer
          website and learning platform.
        </p>

        <h2 className="text-lg font-semibold mt-4" style={{ color: 'var(--text-primary)' }}>
          Information We Collect
        </h2>
        <p>
          We may collect basic information that you provide directly to us, such as your name and email address when you
          sign up, log in, or contact us. We also collect non-personal information such as device type, browser type,
          and usage data to improve the platform.
        </p>

        <h2 className="text-lg font-semibold mt-4" style={{ color: 'var(--text-primary)' }}>
          Cookies and Third-Party Services (including Google AdSense)
        </h2>
        <p>
          We use cookies and similar technologies to improve your experience on our website. Cookies are small text files 
          that are placed on your device when you visit our website. We use both session cookies (which expire when you close 
          your browser) and persistent cookies (which remain on your device until deleted or expired).
        </p>
        <p>
          We use Google AdSense, a third-party advertising service provided by Google Inc., to serve advertisements on our 
          website. Google AdSense uses cookies and similar technologies to:
        </p>
        <ul className="list-disc list-inside ml-2 space-y-1">
          <li>Display personalized advertisements based on your browsing history and interests</li>
          <li>Measure the effectiveness of advertisements</li>
          <li>Prevent fraud and abuse</li>
          <li>Limit the number of times you see an ad</li>
        </ul>
        <p>
          Google and its partners may use cookies to serve ads based on your visits to this and other websites. This means 
          that when you visit other websites, you may see ads based on your previous visit to Next Engineer. Google may also 
          use information about your device and browsing activity to show you relevant ads.
        </p>
        <p>
          You can learn more about how Google uses data and how to control your ad preferences by visiting:
        </p>
        <ul className="list-disc list-inside ml-2 space-y-1">
          <li>
            <a 
              href="https://www.google.com/settings/ads" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:opacity-80"
              style={{ color: 'var(--primary)' }}
            >
              Google Ads Settings
            </a>
          </li>
          <li>
            <a 
              href="https://policies.google.com/privacy" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:opacity-80"
              style={{ color: 'var(--primary)' }}
            >
              Google Privacy Policy
            </a>
          </li>
          <li>
            <a 
              href="https://www.google.com/adsense/new/localized-terms" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:opacity-80"
              style={{ color: 'var(--primary)' }}
            >
              Google AdSense Terms
            </a>
          </li>
        </ul>
        <p>
          You can opt out of personalized advertising by visiting{' '}
          <a 
            href="https://www.google.com/settings/ads/onweb" 
            target="_blank" 
            rel="noopener noreferrer"
            className="underline hover:opacity-80"
            style={{ color: 'var(--primary)' }}
          >
            Google&apos;s Ad Settings
          </a>
          {' '}or by using browser extensions that block tracking cookies.
        </p>

        <h2 className="text-lg font-semibold mt-4" style={{ color: 'var(--text-primary)' }}>
          How We Use Your Information
        </h2>
        <p>We use the information we collect to:</p>
        <ul className="list-disc list-inside ml-2 space-y-1">
          <li>Provide and maintain the learning platform and its features</li>
          <li>Improve content, courses, and user experience</li>
          <li>Communicate with you about updates, support, or important notices</li>
          <li>Monitor usage and protect the security of the website</li>
        </ul>

        <h2 className="text-lg font-semibold mt-4" style={{ color: 'var(--text-primary)' }}>
          Data Sharing
        </h2>
        <p>
          We do not sell your personal information. We may share limited data with trusted service providers who help us
          operate the website (for example, analytics or hosting services), and only for the purpose of providing these
          services.
        </p>

        <h2 className="text-lg font-semibold mt-4" style={{ color: 'var(--text-primary)' }}>
          Your Choices and Cookie Consent
        </h2>
        <p>
          When you first visit our website, we will ask for your consent to use cookies, including those used by Google 
          AdSense. You can choose to accept or decline cookies. If you decline, we will not use cookies for advertising 
          purposes, but some website features may not function properly.
        </p>
        <p>
          You can control cookies through your browser settings. Most browsers allow you to:
        </p>
        <ul className="list-disc list-inside ml-2 space-y-1">
          <li>See what cookies you have and delete them individually</li>
          <li>Block third-party cookies</li>
          <li>Block cookies from specific sites</li>
          <li>Block all cookies</li>
          <li>Delete all cookies when you close your browser</li>
        </ul>
        <p>
          You can also opt out of personalized advertising from Google and other providers using their respective ad 
          settings pages. Please note that opting out does not mean you will not see ads; it means the ads you see may 
          be less relevant to your interests.
        </p>

        <h2 className="text-lg font-semibold mt-4" style={{ color: 'var(--text-primary)' }}>
          Children&apos;s Privacy
        </h2>
        <p>
          This website is intended for students and learners. If you are under the age of 13, you should use this
          website only with the permission and supervision of a parent or guardian.
        </p>

        <h2 className="text-lg font-semibold mt-4" style={{ color: 'var(--text-primary)' }}>
          Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the &quot;Last
          updated&quot; date will be revised accordingly.
        </p>

        <h2 className="text-lg font-semibold mt-4" style={{ color: 'var(--text-primary)' }}>
          Data Retention
        </h2>
        <p>
          We retain your personal information only for as long as necessary to provide our services and fulfill the 
          purposes outlined in this Privacy Policy. We may retain certain information for longer periods if required by 
          law or for legitimate business purposes.
        </p>

        <h2 className="text-lg font-semibold mt-4" style={{ color: 'var(--text-primary)' }}>
          Security
        </h2>
        <p>
          We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. 
          However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot 
          guarantee absolute security.
        </p>

        <h2 className="text-lg font-semibold mt-4" style={{ color: 'var(--text-primary)' }}>
          Contact Us
        </h2>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us through our{' '}
          <a href="/contact" className="underline hover:opacity-80" style={{ color: 'var(--primary)' }}>
            Contact Us
          </a>{' '}
          page. We will respond to your inquiries as soon as possible.
        </p>
      </section>
    </main>
  );
}



