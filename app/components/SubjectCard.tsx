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
      className="rounded-lg shadow-md p-4 sm:p-6 cursor-pointer hover:shadow-xl transition-all duration-200 border-2"
      style={{ 
        backgroundColor: 'var(--secondary)', 
        borderColor: 'var(--accent)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'var(--primary)';
        e.currentTarget.style.backgroundColor = 'var(--background)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--accent)';
        e.currentTarget.style.backgroundColor = 'var(--secondary)';
      }}
    >
      <h3 className="text-lg sm:text-xl font-semibold mb-2 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
        {subject.name}
      </h3>
      <p className="text-sm transition-colors duration-200" style={{ color: 'var(--text-secondary)' }}>Code: {subject.code}</p>
      <div className="mt-4 font-medium transition-colors duration-200" style={{ color: 'var(--primary)' }}>
        View Details →
      </div>
    </div>
  );
}

