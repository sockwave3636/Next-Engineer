export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen px-4 py-8 max-w-3xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
        Terms of Service
      </h1>
      <p className="text-sm sm:text-base mb-6" style={{ color: 'var(--text-secondary)' }}>
        Last updated: {new Date().toLocaleDateString('en-IN')}
      </p>

      <section className="space-y-4 text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>
        <p>
          Welcome to Next Engineer. By accessing and using this website, you accept and agree to be bound by the terms 
          and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
        </p>

        <h2 className="text-lg font-semibold mt-4" style={{ color: 'var(--text-primary)' }}>
          Use License
        </h2>
        <p>
          Permission is granted to temporarily access the materials on Next Engineer&apos;s website for personal, 
          non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under 
          this license you may not:
        </p>
        <ul className="list-disc list-inside ml-2 space-y-1">
          <li>Modify or copy the materials</li>
          <li>Use the materials for any commercial purpose or for any public display</li>
          <li>Attempt to decompile or reverse engineer any software contained on the website</li>
          <li>Remove any copyright or other proprietary notations from the materials</li>
        </ul>

        <h2 className="text-lg font-semibold mt-4" style={{ color: 'var(--text-primary)' }}>
          Disclaimer
        </h2>
        <p>
          The materials on Next Engineer&apos;s website are provided on an &apos;as is&apos; basis. Next Engineer makes 
          no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without 
          limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or 
          non-infringement of intellectual property or other violation of rights.
        </p>

        <h2 className="text-lg font-semibold mt-4" style={{ color: 'var(--text-primary)' }}>
          Limitations
        </h2>
        <p>
          In no event shall Next Engineer or its suppliers be liable for any damages (including, without limitation, 
          damages for loss of data or profit, or due to business interruption) arising out of the use or inability to 
          use the materials on Next Engineer&apos;s website, even if Next Engineer or a Next Engineer authorized 
          representative has been notified orally or in writing of the possibility of such damage.
        </p>

        <h2 className="text-lg font-semibold mt-4" style={{ color: 'var(--text-primary)' }}>
          Accuracy of Materials
        </h2>
        <p>
          The materials appearing on Next Engineer&apos;s website could include technical, typographical, or photographic 
          errors. Next Engineer does not warrant that any of the materials on its website are accurate, complete, or 
          current. Next Engineer may make changes to the materials contained on its website at any time without notice.
        </p>

        <h2 className="text-lg font-semibold mt-4" style={{ color: 'var(--text-primary)' }}>
          Links
        </h2>
        <p>
          Next Engineer has not reviewed all of the sites linked to its website and is not responsible for the contents 
          of any such linked site. The inclusion of any link does not imply endorsement by Next Engineer of the site. 
          Use of any such linked website is at the user&apos;s own risk.
        </p>

        <h2 className="text-lg font-semibold mt-4" style={{ color: 'var(--text-primary)' }}>
          Modifications
        </h2>
        <p>
          Next Engineer may revise these terms of service for its website at any time without notice. By using this 
          website you are agreeing to be bound by the then current version of these terms of service.
        </p>

        <h2 className="text-lg font-semibold mt-4" style={{ color: 'var(--text-primary)' }}>
          Governing Law
        </h2>
        <p>
          These terms and conditions are governed by and construed in accordance with the laws of India and you 
          irrevocably submit to the exclusive jurisdiction of the courts in that location.
        </p>

        <h2 className="text-lg font-semibold mt-4" style={{ color: 'var(--text-primary)' }}>
          Contact Information
        </h2>
        <p>
          If you have any questions about these Terms of Service, please contact us through our{' '}
          <a href="/contact" className="underline hover:opacity-80" style={{ color: 'var(--primary)' }}>
            Contact Us
          </a>{' '}
          page.
        </p>
      </section>
    </main>
  );
}


