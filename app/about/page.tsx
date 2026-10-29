import Link from 'next/link';
import PageShell from "../components/PageShell";
import PageIntro from "../components/PageIntro";

export default function AboutPage() {
  return (
    <PageShell>
      <div className="container-page max-w-3xl py-12">
        <PageIntro
          eyebrow="About us"
          title="About Next Engineer"
          description="Study material for AKTU students, organised by program, branch and semester."
        />

        <section className="card card-pad prose-page">
          <div>
            <h2>
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
            <h2>
              What We Offer
            </h2>
            <ul>
              <li>Comprehensive course materials and study resources</li>
              <li>Blog articles, notices, and educational content</li>
              <li>Subject-wise organized content for easy navigation</li>
              <li>Regular updates and new materials</li>
              <li>A user-friendly platform designed for students</li>
            </ul>
          </div>

          <div>
            <h2>
              Our Commitment
            </h2>
            <p>
              We are committed to maintaining a high standard of educational content and providing a platform that serves 
              the academic needs of engineering students. We continuously work to improve our services and add valuable 
              resources to help students succeed in their academic journey.
            </p>
          </div>

          <div>
            <h2>
              Contact
            </h2>
            <p>
              If you have any questions, suggestions, or feedback, please visit our{' '}
              <Link href="/contact">
                Contact Us
              </Link>{' '}
              page. We value your input and are always looking to improve.
            </p>
          </div>
        </section>
      </div>
    </PageShell>
  );
}



