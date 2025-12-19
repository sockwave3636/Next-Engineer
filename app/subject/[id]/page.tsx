'use client';

import { Suspense, useEffect, useState, useCallback } from 'react';
import { useRouter, useSearchParams, useParams } from 'next/navigation';
import { useAuth } from '@/app/context/AuthContext';
import { getSubject, Subject } from '@/lib/firebase/firestore';
import ThemeToggle from '@/app/components/ThemeToggle';
import Footer from '@/app/components/Footer';
import { useAuthPrompt } from '@/app/context/AuthPromptContext';

function SubjectDetailContent() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = useParams();
  const [subjectData, setSubjectData] = useState<Subject | null>(null);
  const [loading, setLoading] = useState(true);
  const { openAuthPrompt } = useAuthPrompt();
  const handleAdminLogin = () =>
    openAuthPrompt({
      reason: 'Admin access is restricted. Please sign in as the owner.',
    });

  const subjectId = (params?.id as string) || '';
  const course = searchParams.get('course') || '';
  const year = searchParams.get('year') || '';
  const semester = searchParams.get('semester') || '';

  const loadSubjectData = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getSubject(course, year, semester, subjectId);
      if (data) {
        setSubjectData(data);
      }
    } catch (error) {
      console.error('Error loading subject:', error);
    } finally {
      setLoading(false);
    }
  }, [course, year, semester, subjectId]);

  useEffect(() => {
    if (!subjectId || !course || !year || !semester) {
      router.push('/');
      return;
    }
    loadSubjectData();
  }, [subjectId, course, year, semester, router, loadSubjectData]);

  const handleDownload = async (note: Subject['notes'][0]) => {
    try {
      const link = document.createElement('a');
      link.href = note.fileUrl;
      const fileName = note.title || note.fileName || 'download';
      const fileExtension =
        note.originalFileName?.split('.').pop() ||
        note.fileName?.split('.').pop() ||
        note.fileUrl.split('.').pop()?.split('?')[0] ||
        '';
      const downloadName = fileExtension && !fileName.includes('.') ? `${fileName}.${fileExtension}` : fileName;
      link.download = downloadName;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading file:', error);
      window.open(note.fileUrl, '_blank');
    }
  };

  const handleOpenLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getLinkIcon = (type: string) => {
    switch (type) {
      case 'video':
        return '🎥';
      case 'article':
        return '📄';
      case 'tutorial':
        return '📚';
      default:
        return '🔗';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center transition-colors duration-200" style={{ backgroundColor: 'var(--background)' }}>
        <div className="text-xl transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>Loading...</div>
      </div>
    );
  }

  if (!subjectData) {
    return null;
  }

  return (
    <div className="min-h-screen transition-colors duration-200" style={{ backgroundColor: 'var(--background)' }}>
      <nav className="shadow-md transition-colors duration-200" style={{ backgroundColor: 'var(--secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 py-4 sm:h-16">
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={() => router.push(`/subjects?course=${course}&year=${year}&semester=${semester}`)}
                className="text-sm sm:text-base hover:underline transition-all"
                style={{ color: 'var(--primary)' }}
              >
                ← Back to Subjects
              </button>
              <h1 className="text-xl sm:text-2xl font-bold transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
                {subjectData.name}
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
        <div className="rounded-xl shadow-lg p-6 sm:p-8 mb-4 sm:mb-6 transition-colors duration-200" style={{ backgroundColor: 'var(--secondary)' }}>
          <div className="mb-4">
            <span className="text-xs sm:text-sm font-medium px-3 py-1 rounded-full transition-colors duration-200" style={{ backgroundColor: 'var(--accent)', color: 'var(--text-primary)' }}>
              {subjectData.code}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
            {subjectData.name}
          </h2>
          <p className="text-base sm:text-lg transition-colors duration-200" style={{ color: 'var(--text-secondary)' }}>
            {subjectData.description}
          </p>
        </div>

        {/* Study Links Section */}
        <div className="rounded-xl shadow-lg p-6 sm:p-8 mb-4 sm:mb-6 transition-colors duration-200" style={{ backgroundColor: 'var(--secondary)' }}>
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
            Study Links
          </h3>
          {subjectData.links && subjectData.links.length > 0 ? (
            <div className="space-y-3 sm:space-y-4">
              {subjectData.links.map((link) => (
                <button
                  type="button"
                  key={link.id}
                  onClick={() => handleOpenLink(link.url)}
                  className="w-full text-left flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-lg transition-all duration-200 group border-2"
                  style={{ 
                    backgroundColor: 'var(--background)',
                    borderColor: 'var(--accent)'
                  }}
                  onMouseEnter={(event) => {
                    event.currentTarget.style.borderColor = 'var(--primary)';
                    event.currentTarget.style.backgroundColor = 'var(--accent)';
                  }}
                  onMouseLeave={(event) => {
                    event.currentTarget.style.borderColor = 'var(--accent)';
                    event.currentTarget.style.backgroundColor = 'var(--background)';
                  }}
                >
                  <div className="flex items-center gap-3 sm:gap-4 flex-1">
                    <span className="text-xl sm:text-2xl">{getLinkIcon(link.type)}</span>
                    <div>
                      <h4 className="font-semibold text-sm sm:text-base mb-1 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
                        {link.title}
                      </h4>
                      <p className="text-xs sm:text-sm capitalize transition-colors duration-200" style={{ color: 'var(--text-secondary)' }}>
                        {link.type}
                      </p>
                    </div>
                  </div>
                  <span className="text-lg sm:text-xl mt-2 sm:mt-0 transition-colors duration-200" style={{ color: 'var(--primary)' }}>→</span>
                </button>
              ))}
            </div>
          ) : (
            <p className="transition-colors duration-200" style={{ color: 'var(--text-secondary)' }}>No study links available.</p>
          )}
        </div>

        {/* Notes Section */}
        <div className="rounded-xl shadow-lg p-6 sm:p-8 transition-colors duration-200" style={{ backgroundColor: 'var(--secondary)' }}>
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
            Download Notes
          </h3>
          {subjectData.notes && subjectData.notes.length > 0 ? (
            <div className="space-y-3 sm:space-y-4">
              {subjectData.notes.map((note) => (
                <div
                  key={note.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-lg border-2 transition-colors duration-200"
                  style={{ 
                    backgroundColor: 'var(--background)',
                    borderColor: 'var(--accent)'
                  }}
                >
                  <div className="flex items-center gap-3 sm:gap-4 flex-1">
                    <span className="text-xl sm:text-2xl">{(note.type || 'notes') === 'book' ? '📚' : '📝'}</span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h4 className="font-semibold text-sm sm:text-base transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>
                          {note.title}
                        </h4>
                        <span className="px-2 py-0.5 text-xs rounded transition-colors duration-200" style={{ 
                          backgroundColor: (note.type || 'notes') === 'book' ? 'var(--accent)' : 'var(--background)',
                          color: 'var(--text-primary)'
                        }}>
                          {note.type || 'notes'}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm transition-colors duration-200" style={{ color: 'var(--text-secondary)' }}>
                        Size: {note.size}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDownload(note)}
                    className="w-full sm:w-auto px-4 sm:px-6 py-2 rounded-lg transition-all duration-200 font-medium text-sm sm:text-base shadow-md hover:shadow-lg"
                    style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-hover)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary)'}
                  >
                    Download
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="transition-colors duration-200" style={{ color: 'var(--text-secondary)' }}>No notes available.</p>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function SubjectDetailPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center transition-colors duration-200" style={{ backgroundColor: 'var(--background)' }}>
          <div className="text-xl transition-colors duration-200" style={{ color: 'var(--text-primary)' }}>Loading...</div>
        </div>
      }
    >
      <SubjectDetailContent />
    </Suspense>
  );
}
