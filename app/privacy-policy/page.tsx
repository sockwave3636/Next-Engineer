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
          We use cookies and similar technologies to improve your experience on our website. We may also use third-party
          services, including Google AdSense, to serve advertisements.
        </p>
        <p>
          Google and its partners may use cookies to serve ads based on your visits to this and other websites. You can
          learn more about how Google uses data and how to control your ad preferences by visiting the Google Ads
          Settings and the Google Privacy Policy.
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
          Your Choices
        </h2>
        <p>
          You can control cookies through your browser settings and can opt out of personalized advertising from Google
          and other providers using their respective ad settings pages.
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
          Contact Us
        </h2>
        <p>
          If you have any questions or concerns about this Privacy Policy, you can contact us through the website
          contact options or by email if provided on the platform.
        </p>
      </section>
    </main>
  );
}



