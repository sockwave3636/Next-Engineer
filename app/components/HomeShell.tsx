"use client";

import { useRef, RefObject, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import IntroSection from './IntroSection';
import BlogSlider from './BlogSlider';
import CourseSelector from './CourseSelector';
import { useAuth } from '../context/AuthContext';
import { useAuthPrompt } from '../context/AuthPromptContext';
import Image from 'next/image';

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

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };


  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background)' }}>
      <nav className="shadow-md transition-colors duration-200" style={{ backgroundColor: 'var(--secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-row flex-wrap justify-between items-center gap-3 py-4 min-h-[64px]">
            <h1 className="text-xl sm:text-2xl font-bold whitespace-nowrap" style={{ color: 'var(--text-primary)' }}>
              Next Engineer
            </h1>
            <div className="flex flex-row flex-nowrap items-center gap-2 sm:gap-4 ml-auto">
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

      

      {/* University logo/image, responsive under navbar */}
      <div className="w-full flex justify-center items-center py-2 bg-white">
        <Image
          src="/IMG_9305.JPG"
          alt="Dr. A.P.J. Abdul Kalam Technical University Uttar Pradesh"
          width={210}
          height={200}
          style={{ height: 'auto', width: 'auto', maxWidth: '90vw', objectFit: 'contain' }}
          className="max-h-[200px] w-auto h-auto"
          priority
        />
      </div>

      <main>
        <IntroSection
          onExploreCourses={() => scrollToSection(coursesSectionRef as React.RefObject<HTMLDivElement>)}
          onBrowseArticles={() => scrollToSection(blogSectionRef as React.RefObject<HTMLDivElement>)}
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

