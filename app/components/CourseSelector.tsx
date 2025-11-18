'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { getCourses, Course } from '@/lib/firebase/firestore';

export default function CourseSelector() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<string | null>(null);
  const [courses, setCourses] = useState<Record<string, Course>>({});
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const loadCourses = useCallback(async () => {
    setLoading(true);
    try {
      setErrorMessage(null);
      const coursesData = await getCourses();
      setCourses(coursesData);
    } catch (error) {
      console.error('Error loading courses:', error);
      setErrorMessage('Unable to load courses right now. Please try again later.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCourses();
  }, [loadCourses]);

  const handleContinue = () => {
    if (selectedCourse && selectedYear && selectedSemester) {
      router.push(`/subjects?course=${selectedCourse}&year=${selectedYear}&semester=${selectedSemester}`);
    }
  };

  const availableYears = selectedCourse && courses[selectedCourse]
    ? Object.values(courses[selectedCourse].years || {})
    : [];

  const availableSemesters = selectedCourse && selectedYear && courses[selectedCourse]?.years[selectedYear]
    ? Object.values(courses[selectedCourse].years[selectedYear].semesters || {})
    : [];

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        <div className="rounded-xl shadow-lg p-6 sm:p-8 text-center transition-colors duration-200" style={{ backgroundColor: 'var(--secondary)' }}>
          <div className="text-base sm:text-lg transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>Loading courses...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="rounded-xl shadow-lg p-6 sm:p-8 transition-colors duration-200" style={{ backgroundColor: 'var(--secondary)' }}>
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
          Select Your Course Details
        </h2>

        <div className="space-y-4 sm:space-y-6">
          {/* Course Selection */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
              1. Select Course
            </h3>
            {Object.keys(courses).length === 0 ? (
              <p className="transition-colors duration-200" style={{ color: 'var(--text-secondary)' }}>
                No courses available yet. Please check back later.
              </p>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
                {Object.entries(courses).map(([courseId, course]) => (
                  <button
                    key={courseId}
                    onClick={() => {
                      setSelectedCourse(courseId);
                      setSelectedYear(null);
                      setSelectedSemester(null);
                    }}
                    className={`p-3 sm:p-4 rounded-lg border-2 transition-all duration-200 text-sm sm:text-base ${
                      selectedCourse === courseId ? 'shadow-md' : ''
                    }`}
                    style={selectedCourse === courseId 
                      ? { borderColor: 'var(--primary)', backgroundColor: 'var(--accent)', color: 'var(--text-primary)' }
                      : { borderColor: 'var(--secondary)', backgroundColor: 'var(--background)', color: 'var(--text-secondary)' }
                    }
                    onMouseEnter={(e) => {
                      if (selectedCourse !== courseId) {
                        e.currentTarget.style.borderColor = 'var(--accent)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedCourse !== courseId) {
                        e.currentTarget.style.borderColor = 'var(--secondary)';
                      }
                    }}
                  >
                    {course.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Year Selection */}
          {selectedCourse && availableYears.length > 0 && (
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
                2. Select Year
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
                {availableYears.map((year) => (
                  <button
                    key={year.id}
                    onClick={() => {
                      setSelectedYear(year.id);
                      setSelectedSemester(null);
                    }}
                    className={`p-3 sm:p-4 rounded-lg border-2 transition-all duration-200 text-sm sm:text-base ${
                      selectedYear === year.id ? 'shadow-md' : ''
                    }`}
                    style={selectedYear === year.id
                      ? { borderColor: 'var(--primary)', backgroundColor: 'var(--accent)', color: 'var(--text-primary)' }
                      : { borderColor: 'var(--secondary)', backgroundColor: 'var(--background)', color: 'var(--text-secondary)' }
                    }
                    onMouseEnter={(e) => {
                      if (selectedYear !== year.id) {
                        e.currentTarget.style.borderColor = 'var(--accent)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedYear !== year.id) {
                        e.currentTarget.style.borderColor = 'var(--secondary)';
                      }
                    }}
                  >
                    {year.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Semester Selection */}
          {selectedYear && availableSemesters.length > 0 && (
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
                3. Select Semester
              </h3>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {availableSemesters.map((semester) => (
                  <button
                    key={semester.id}
                    onClick={() => setSelectedSemester(semester.id)}
                    className={`p-3 sm:p-4 rounded-lg border-2 transition-all duration-200 text-sm sm:text-base ${
                      selectedSemester === semester.id ? 'shadow-md' : ''
                    }`}
                    style={selectedSemester === semester.id
                      ? { borderColor: 'var(--primary)', backgroundColor: 'var(--accent)', color: 'var(--text-primary)' }
                      : { borderColor: 'var(--secondary)', backgroundColor: 'var(--background)', color: 'var(--text-secondary)' }
                    }
                    onMouseEnter={(e) => {
                      if (selectedSemester !== semester.id) {
                        e.currentTarget.style.borderColor = 'var(--accent)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedSemester !== semester.id) {
                        e.currentTarget.style.borderColor = 'var(--secondary)';
                      }
                    }}
                  >
                    {semester.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {errorMessage && (
            <div className="rounded-lg border px-4 py-3 text-sm" style={{ borderColor: 'var(--error)', backgroundColor: 'var(--background)', color: 'var(--error)' }}>
              {errorMessage}
            </div>
          )}

          {/* Continue Button */}
          {selectedCourse && selectedYear && selectedSemester && (
            <button
              onClick={handleContinue}
              className="w-full font-semibold py-3 px-4 sm:px-6 rounded-lg transition-all duration-200 shadow-lg mt-4 sm:mt-6 text-sm sm:text-base"
              style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-hover)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
            >
              Continue to Subjects
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
