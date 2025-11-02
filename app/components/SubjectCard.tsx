'use client';

import { useRouter } from 'next/navigation';

interface SubjectCardProps {
  subject: {
    id: string;
    name: string;
    code: string;
  };
  course: string;
  year: string;
  semester: string;
}

export default function SubjectCard({ subject, course, year, semester }: SubjectCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/subject/${subject.id}?course=${course}&year=${year}&semester=${semester}`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 cursor-pointer hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700"
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {subject.name}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">Code: {subject.code}</p>
      <div className="mt-4 text-blue-600 dark:text-blue-400 font-medium">
        View Details →
      </div>
    </div>
  );
}

