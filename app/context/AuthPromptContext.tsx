'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useAuth } from './AuthContext';

type AuthPromptOptions = {
  reason?: string;
};

interface AuthPromptContextType {
  isPromptOpen: boolean;
  openAuthPrompt: (options?: AuthPromptOptions) => void;
  closeAuthPrompt: () => void;
}

const AuthPromptContext = createContext<AuthPromptContextType | undefined>(undefined);

export function AuthPromptProvider({ children }: { children: React.ReactNode }) {
  const { user, login } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [promptReason, setPromptReason] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const resetForm = useCallback(() => {
    setEmail('');
    setPassword('');
    setError('');
    setLoading(false);
  }, []);

  const closeAuthPrompt = useCallback(() => {
    setIsOpen(false);
    setPromptReason(null);
    resetForm();
  }, [resetForm]);

  useEffect(() => {
    if (!isOpen || !user?.isOwner) {
      return;
    }
    closeAuthPrompt();
  }, [user, isOpen, closeAuthPrompt]);

  const openAuthPrompt = useCallback(
    ({ reason }: AuthPromptOptions = {}) => {
      if (user?.isOwner) {
        return;
      }
      setPromptReason(reason || 'Admin access is restricted to the owner.');
      setIsOpen(true);
    },
    [user]
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthPromptContext.Provider value={{ openAuthPrompt, closeAuthPrompt, isPromptOpen: isOpen }}>
      {children}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 backdrop-blur-sm bg-black/40">
          <div className="w-full max-w-md rounded-2xl shadow-2xl p-6 sm:p-8 relative" style={{ backgroundColor: 'var(--secondary)' }}>
            {promptReason && (
              <p className="text-xs uppercase font-semibold mb-3 tracking-wide" style={{ color: 'var(--text-secondary)' }}>
                {promptReason}
              </p>
            )}
            <h2 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
              Admin Login
            </h2>
            <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
              Only the platform owner can access the admin dashboard.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block" style={{ color: 'var(--text-primary)' }}>
                  Owner Email
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-all text-sm"
                  style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)', color: 'var(--text-primary)' }}
                  placeholder="owner@example.com"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block" style={{ color: 'var(--text-primary)' }}>
                  Password
                </label>
                <input
                  required
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 transition-all text-sm"
                  style={{ backgroundColor: 'var(--background)', borderColor: 'var(--border)', color: 'var(--text-primary)' }}
                  placeholder="Enter your password"
                />
              </div>

              {error && (
                <div className="rounded-lg border px-4 py-3 text-sm" style={{ borderColor: 'var(--error)', color: 'var(--error)', backgroundColor: 'var(--background)' }}>
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-lg font-semibold shadow-lg transition-all disabled:opacity-60"
                style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }}
              >
                {loading ? 'Signing in...' : 'Sign in as Admin'}
              </button>

              <button
                type="button"
                onClick={closeAuthPrompt}
                className="w-full py-3 rounded-lg font-semibold transition-all"
                style={{ backgroundColor: 'transparent', color: 'var(--text-secondary)' }}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </AuthPromptContext.Provider>
  );
}

export function useAuthPrompt() {
  const context = useContext(AuthPromptContext);
  if (!context) {
    throw new Error('useAuthPrompt must be used within an AuthPromptProvider');
  }
  return context;
}

