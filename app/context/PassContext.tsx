'use client';

import { createContext, useContext, useEffect, useState, useCallback, useMemo } from 'react';
import { useAuth } from './AuthContext';
import { subscribeToUserPasses, UserPass } from '@/lib/firebase/firestore';
import { hasSubjectAccess, PassExpiries } from '@/lib/catalog/access';
import type { Subject } from '@/lib/catalog/types';

interface PassContextType {
  // scopeKey → pass (subject:{id} or branch:{program}:{branch})
  passes: Record<string, UserPass>;
  // Owners always have access. Display only: the server re-checks on every read.
  hasAccess: (subject: Pick<Subject, 'id' | 'programId' | 'offerings'>) => boolean;
  // Expiry of an active pass for this scope, or null
  activeUntil: (scopeKey: string) => Date | null;
}

const PassContext = createContext<PassContextType | undefined>(undefined);

export function PassProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  // Tagged with the uid they belong to, so signing out or switching accounts
  // never shows the previous user's passes
  const [loaded, setLoaded] = useState<{ uid: string; passes: Record<string, UserPass> } | null>(null);
  const uid = user?.uid;
  const passes = useMemo(() => (uid && loaded?.uid === uid ? loaded.passes : {}), [uid, loaded]);
  const expiries = useMemo(() => {
    const result: PassExpiries = {};
    for (const [key, pass] of Object.entries(passes)) {
      result[key] = pass.expiresAt?.toMillis?.() ?? 0;
    }
    return result;
  }, [passes]);

  useEffect(() => {
    if (!uid) return;
    // Live listener, so a pass granted by the payment webhook shows up without a reload
    return subscribeToUserPasses(
      uid,
      (nextPasses) => setLoaded({ uid, passes: nextPasses }),
      (error) => {
        if ((error as { code?: string }).code === 'permission-denied') {
          // Expected until firestore.rules (which allow reading your own passes) is published
          console.warn('Premium passes are unavailable: publish firestore.rules in the Firebase console to enable them.');
          return;
        }
        console.error('Error loading premium passes:', error);
      }
    );
  }, [uid]);

  const hasAccess = useCallback(
    (subject: Pick<Subject, 'id' | 'programId' | 'offerings'>) => !!user?.isOwner || hasSubjectAccess(expiries, subject),
    [user, expiries]
  );

  const activeUntil = useCallback(
    (key: string) => ((expiries[key] ?? 0) > Date.now() ? new Date(expiries[key]) : null),
    [expiries]
  );

  return <PassContext.Provider value={{ passes, hasAccess, activeUntil }}>{children}</PassContext.Provider>;
}

export function usePasses() {
  const context = useContext(PassContext);
  if (!context) {
    throw new Error('usePasses must be used within a PassProvider');
  }
  return context;
}
