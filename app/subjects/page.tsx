'use client';

import { Suspense, useEffect, useState, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import SubjectCard from '../components/SubjectCard';
import { getSubjects, Subject, getCourse } from '@/lib/firebase/firestore';
import ThemeToggle from '../components/ThemeToggle';
import { useAuthPrompt } from '../context/AuthPromptContext';

function SubjectsContent() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);
  const [courseName, setCourseName] = useState('');
  const [yearName, setYearName] = useState('');
  const [semesterName, setSemesterName] = useState('');
  const { openAuthPrompt } = useAuthPrompt();
  const handleAdminLogin = () =>
    openAuthPrompt({
      reason: 'Admin access is restricted. Please sign in as the owner.',
    });

  const course = searchParams.get('course') || '';
  const year = searchParams.get('year') || '';
  const semester = searchParams.get('semester') || '';

  const loadSubjects = useCallback(async () => {
    if (!course || !year || !semester) return;
    
    try {
      setLoading(true);
      const courseData = await getCourse(course);
      if (courseData) {
        setCourseName(courseData.name);
      }
      const subjectsData = await getSubjects(course, year, semester);
      setSubjects(subjectsData);
    } catch (error) {
      console.error('Error loading subjects:', error);
    } finally {
      setLoading(false);
    }
  }, [course, year, semester]);

  const loadNames = useCallback(async () => {
    if (!course || !year || !semester) return;
    
    try {
      const courseData = await getCourse(course);
      if (courseData) {
        setYearName(courseData.years[year]?.name || `Year ${year}`);
        setSemesterName(courseData.years[year]?.semesters[semester]?.name || `Semester ${semester}`);
      } else {
        setYearName(`Year ${year}`);
        setSemesterName(`Semester ${semester}`);
      }
    } catch (error) {
      console.error('Error loading course names:', error);
      setYearName(`Year ${year}`);
      setSemesterName(`Semester ${semester}`);
    }
  }, [course, year, semester]);

  useEffect(() => {
    if (!course || !year || !semester) {
      router.push('/');
      return;
    }

    loadSubjects();
    loadNames();
  }, [course, year, semester, router, loadSubjects, loadNames]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center transition-colors duration-200" style={{ backgroundColor: 'var(--background)' }}>
        <div className="text-xl transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen transition-colors duration-200" style={{ backgroundColor: 'var(--background)' }}>
      <nav className="shadow-md transition-colors duration-200" style={{ backgroundColor: 'var(--secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 py-4 sm:h-16">
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={() => router.push('/home')}
                className="text-sm sm:text-base hover:underline transition-all"
                style={{ color: 'var(--primary)' }}
              >
                ← Back
              </button>
              <h1 className="text-xl sm:text-2xl font-bold transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
                Select Subject
              </h1>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
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
                  >
                    Admin Panel
                  </button>
                  <button
                    onClick={logout}
                    className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-200"
                    style={{ backgroundColor: 'var(--error)', color: '#ffffff' }}
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

      <main className="max-w-6xl mx-auto py-6 sm:py-8 px-4">
        <div className="rounded-xl shadow-lg p-4 sm:p-6 mb-4 sm:mb-6 transition-colors duration-200" style={{ backgroundColor: 'var(--secondary)' }}>
          <h2 className="text-lg sm:text-xl font-semibold mb-2 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
            {courseName} - {yearName} - {semesterName}
          </h2>
          <p className="text-sm sm:text-base transition-colors duration-200" style={{ color: 'var(--text-secondary)' }}>
            Select a subject to view study materials and download notes
          </p>
        </div>

        {subjects.length === 0 ? (
          <div className="rounded-xl shadow-lg p-6 sm:p-8 text-center transition-colors duration-200" style={{ backgroundColor: 'var(--secondary)' }}>
            <p className="transition-colors duration-200" style={{ color: 'var(--text-secondary)' }}>No subjects available for this selection.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {subjects.map((subject) => (
              <SubjectCard
                key={subject.id}
                subject={subject}
                course={course}
                year={year}
                semester={semester}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default function SubjectsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center transition-colors duration-200" style={{ backgroundColor: 'var(--background)' }}>
          <div className="text-xl transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>Loading...</div>
        </div>
      }
    >
      <SubjectsContent />
    </Suspense>
  );
}
