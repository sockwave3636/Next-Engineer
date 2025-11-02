'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Course {
  id: string;
  name: string;
}

interface Year {
  id: string;
  name: string;
}

interface Semester {
  id: string;
  name: string;
}

const courses: Course[] = [
  { id: 'cs', name: 'Computer Science' },
  { id: 'ece', name: 'Electronics & Communication' },
  { id: 'mech', name: 'Mechanical Engineering' },
  { id: 'civil', name: 'Civil Engineering' },
];

const years: Year[] = [
  { id: '1', name: 'First Year' },
  { id: '2', name: 'Second Year' },
  { id: '3', name: 'Third Year' },
  { id: '4', name: 'Fourth Year' },
];

const semesters: Semester[] = [
  { id: '1', name: 'Semester 1' },
  { id: '2', name: 'Semester 2' },
];

export default function CourseSelector() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<string | null>(null);
  const router = useRouter();

  const handleContinue = () => {
    if (selectedCourse && selectedYear && selectedSemester) {
      router.push(`/subjects?course=${selectedCourse}&year=${selectedYear}&semester=${selectedSemester}`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Select Your Course Details
        </h2>

        <div className="space-y-6">
          {/* Course Selection */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
              1. Select Course
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {courses.map((course) => (
                <button
                  key={course.id}
                  onClick={() => setSelectedCourse(course.id)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedCourse === course.id
                      ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                      : 'border-gray-200 dark:border-gray-700 hover:border-blue-400 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {course.name}
                </button>
              ))}
            </div>
          </div>

          {/* Year Selection */}
          {selectedCourse && (
            <div>
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                2. Select Year
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {years.map((year) => (
                  <button
                    key={year.id}
                    onClick={() => setSelectedYear(year.id)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedYear === year.id
                        ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                        : 'border-gray-200 dark:border-gray-700 hover:border-blue-400 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {year.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Semester Selection */}
          {selectedYear && (
            <div>
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                3. Select Semester
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {semesters.map((semester) => (
                  <button
                    key={semester.id}
                    onClick={() => setSelectedSemester(semester.id)}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedSemester === semester.id
                        ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                        : 'border-gray-200 dark:border-gray-700 hover:border-blue-400 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    {semester.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Continue Button */}
          {selectedCourse && selectedYear && selectedSemester && (
            <button
              onClick={handleContinue}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg mt-6"
            >
              Continue to Subjects
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

