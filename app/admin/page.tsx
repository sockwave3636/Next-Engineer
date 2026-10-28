'use client';

import { useCallback, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import ThemeToggle from '../components/ThemeToggle';
import BrandLogo from '../components/BrandLogo';
import LoadingState from '../components/LoadingState';
import AdminAccess from '../components/AdminAccess';
import ProgramsTab from './_components/ProgramsTab';
import SubjectsTab from './_components/SubjectsTab';
import PostsTab from './_components/PostsTab';
import MessagesTab from './_components/MessagesTab';
import MaterialLock from './_components/MaterialLock';

type Tab = 'programs' | 'subjects' | 'posts' | 'messages';

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: 'programs', label: 'Programs', icon: '🎓' },
  { id: 'subjects', label: 'Subjects and material', icon: '📘' },
  { id: 'posts', label: 'Blog and notices', icon: '📰' },
  { id: 'messages', label: 'Messages', icon: '✉️' },
];

export default function AdminPanel() {
  const { user, loading } = useAuth();
  const [activeTab, setActiveTab] = useState<Tab>('programs');
  const [unread, setUnread] = useState(0);
  // Program to preselect when the Subjects tab is opened from a program card
  const [subjectsProgram, setSubjectsProgram] = useState('');
  const onUnreadChange = useCallback((count: number) => setUnread(count), []);
  const openSubjects = useCallback((programId: string) => {
    setSubjectsProgram(programId);
    setActiveTab('subjects');
    window.scrollTo({ top: 0 });
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <LoadingState label="Loading admin panel…" />
      </div>
    );
  }

  // Explains why access is refused (signed out, unverified, not an owner) instead of redirecting
  if (!user?.isOwner) {
    return <AdminAccess />;
  }

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-line bg-page/85 backdrop-blur-md">
        <div className="container-page flex h-16 items-center gap-3">
          <BrandLogo />
          <span className="badge badge-brand">Admin</span>
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
            <Link href="/" className="btn btn-secondary btn-sm">
              ← View site
            </Link>
          </div>
        </div>
      </header>

      <main className="container-page py-8 sm:py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-black tracking-tight text-ink sm:text-4xl">Admin panel</h1>
          <p className="mt-1 text-ink-muted">
            Welcome back, {user.name}. Set up programs, add subjects and their material, and manage posts and messages.
          </p>
        </div>

        <MaterialLock />

        <div
          role="tablist"
          aria-label="Admin sections"
          className="mb-8 flex gap-1 overflow-x-auto rounded-2xl border border-line bg-surface p-1 shadow-soft"
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`btn flex-1 shrink-0 whitespace-nowrap ${
                activeTab === tab.id ? 'bg-brand text-on-brand shadow-soft' : 'text-ink-muted hover:bg-surface-muted hover:text-ink'
              }`}
            >
              <span aria-hidden="true">{tab.icon}</span> {tab.label}
              {tab.id === 'messages' && unread > 0 && <span className="badge badge-sun">{unread}</span>}
            </button>
          ))}
        </div>

        {activeTab === 'programs' && <ProgramsTab onOpenSubjects={openSubjects} />}
        {activeTab === 'subjects' && <SubjectsTab key={subjectsProgram} initialProgramId={subjectsProgram} />}
        {activeTab === 'posts' && <PostsTab />}
        {activeTab === 'messages' && <MessagesTab onUnreadChange={onUnreadChange} />}
      </main>
    </div>
  );
}
