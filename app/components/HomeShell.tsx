'use client';

import { useRef, RefObject } from 'react';
import { useRouter } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import IntroSection from './IntroSection';
import BlogSlider from './BlogSlider';
import CourseSelector from './CourseSelector';
import { useAuth } from '../context/AuthContext';
import { useAuthPrompt } from '../context/AuthPromptContext';

export default function HomeShell() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const { openAuthPrompt } = useAuthPrompt();
  const blogSectionRef = useRef<HTMLDivElement>(null);
  const coursesSectionRef = useRef<HTMLDivElement>(null);

  const handleAdminLogin = () => {
    openAuthPrompt({
      reason: 'Admin access is restricted. Please sign in as the owner.',
    });
  };

  const scrollToSection = (ref: RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      <nav className="shadow-md transition-colors duration-200" style={{ backgroundColor: 'var(--secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 py-4 sm:h-16">
            <h1 className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Learn Platform
            </h1>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
              <ThemeToggle />
              {user?.isOwner ? (
                <>
                  <div className="px-3 py-1 rounded-lg text-xs sm:text-sm font-semibold" style={{ backgroundColor: 'var(--accent)', color: 'var(--text-primary)' }}>
                    👑 Owner
                  </div>
                  <button
                    onClick={() => router.push('/admin')}
                    className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                    style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}
                    onMouseEnter={(event) => (event.currentTarget.style.backgroundColor = 'var(--primary-hover)')}
                    onMouseLeave={(event) => (event.currentTarget.style.backgroundColor = 'var(--primary)')}
                  >
                    Admin Panel
                  </button>
                  <span className="text-xs sm:text-sm" style={{ color: 'var(--text-secondary)' }}>
                    Welcome, {user.name}
                  </span>
                  <button
                    onClick={logout}
                    className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-200"
                    style={{ backgroundColor: 'var(--error)', color: '#ffffff' }}
                    onMouseEnter={(event) => (event.currentTarget.style.opacity = '0.9')}
                    onMouseLeave={(event) => (event.currentTarget.style.opacity = '1')}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <button
                  onClick={handleAdminLogin}
                  className="text-xs sm:text-sm px-4 py-2 rounded-lg font-semibold transition-all duration-200 shadow-md"
                  style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}
                >
                  Admin Login
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main>
        <IntroSection
          onExploreCourses={() => scrollToSection(coursesSectionRef)}
          onBrowseArticles={() => scrollToSection(blogSectionRef)}
        />
        <section ref={blogSectionRef} id="blog-section">
          <BlogSlider />
        </section>
        <section ref={coursesSectionRef} id="courses-section" className="py-4 sm:py-8">
          <CourseSelector />
        </section>
      </main>
    </div>
  );
}

