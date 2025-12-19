export default function AboutPage() {
  return (
    <main className="min-h-screen px-4 py-8 max-w-4xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
        About Next Engineer
      </h1>

      <section className="space-y-6 text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>
        <div>
          <h2 className="text-xl font-semibold mt-6 mb-3" style={{ color: 'var(--text-primary)' }}>
            Our Mission
          </h2>
          <p>
            Next Engineer is dedicated to providing high-quality educational resources and study materials for engineering 
            students, particularly those pursuing courses at Dr. A.P.J. Abdul Kalam Technical University, Uttar Pradesh. 
            Our platform aims to make learning accessible, engaging, and effective for students preparing for their exams 
            and academic pursuits.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-6 mb-3" style={{ color: 'var(--text-primary)' }}>
            What We Offer
          </h2>
          <ul className="list-disc list-inside ml-2 space-y-2">
            <li>Comprehensive course materials and study resources</li>
            <li>Blog articles, notices, and educational content</li>
            <li>Subject-wise organized content for easy navigation</li>
            <li>Regular updates and new materials</li>
            <li>A user-friendly platform designed for students</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-6 mb-3" style={{ color: 'var(--text-primary)' }}>
            Our Commitment
          </h2>
          <p>
            We are committed to maintaining a high standard of educational content and providing a platform that serves 
            the academic needs of engineering students. We continuously work to improve our services and add valuable 
            resources to help students succeed in their academic journey.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-6 mb-3" style={{ color: 'var(--text-primary)' }}>
            Support Us
          </h2>
          <p>
            Next Engineer is maintained with dedication to provide free educational resources. Your support helps us 
            continue improving the platform and adding more valuable content. We appreciate any contributions that help 
            us maintain and enhance our services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mt-6 mb-3" style={{ color: 'var(--text-primary)' }}>
            Contact
          </h2>
          <p>
            If you have any questions, suggestions, or feedback, please visit our{' '}
            <a href="/contact" className="underline hover:opacity-80" style={{ color: 'var(--primary)' }}>
              Contact Us
            </a>{' '}
            page. We value your input and are always looking to improve.
          </p>
        </div>
      </section>
    </main>
  );
}


