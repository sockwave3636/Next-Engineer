'use client';

import { createContext, useContext, useState, useCallback } from 'react';
import { useAuth } from './AuthContext';

type AuthPromptOptions = {
  reason?: string;
  // false hides "Sign up", e.g. on the admin sign-in where new accounts are no use
  allowSignUp?: boolean;
};

type AuthMode = 'login' | 'signup';

interface AuthPromptContextType {
  isPromptOpen: boolean;
  openAuthPrompt: (options?: AuthPromptOptions) => void;
  closeAuthPrompt: () => void;
}

const AuthPromptContext = createContext<AuthPromptContextType | undefined>(undefined);

export function AuthPromptProvider({ children }: { children: React.ReactNode }) {
  const { user, login, signup, loginWithGoogle } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [promptReason, setPromptReason] = useState<string | null>(null);
  const [allowSignUp, setAllowSignUp] = useState(true);
  const [mode, setMode] = useState<AuthMode>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const resetForm = useCallback(() => {
    setName('');
    setEmail('');
    setPassword('');
    setError('');
    setLoading(false);
  }, []);

  const closeAuthPrompt = useCallback(() => {
    setIsOpen(false);
    setPromptReason(null);
    setAllowSignUp(true);
    setMode('login');
    resetForm();
  }, [resetForm]);

  const openAuthPrompt = useCallback(
    ({ reason, allowSignUp = true }: AuthPromptOptions = {}) => {
      if (user) {
        return;
      }
      setPromptReason(reason || null);
      setAllowSignUp(allowSignUp);
      setMode('login');
      setIsOpen(true);
    },
    [user]
  );

  const runAuth = async (action: () => Promise<void>) => {
    setError('');
    setLoading(true);
    try {
      await action();
      closeAuthPrompt();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong';
      setError(message);
      setLoading(false);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    runAuth(() => (mode === 'login' ? login(email, password) : signup(email, password, name)));
  };

  const switchMode = (nextMode: AuthMode) => {
    setMode(nextMode);
    setError('');
  };

  return (
    <AuthPromptContext.Provider value={{ openAuthPrompt, closeAuthPrompt, isPromptOpen: isOpen }}>
      {children}
      {isOpen && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="auth-title" onClick={closeAuthPrompt}>
          <div className="modal relative" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={closeAuthPrompt}
              className="btn btn-ghost absolute right-4 top-4 h-9 w-9 rounded-full p-0"
              aria-label="Close"
            >
              ✕
            </button>

            <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-2xl" aria-hidden="true">
              {mode === 'login' ? '👋' : '🎓'}
            </div>
            {promptReason && <p className="eyebrow mb-3">{promptReason}</p>}
            <h2 id="auth-title" className="text-2xl font-black text-ink">
              {mode === 'login' ? 'Welcome back' : 'Create your account'}
            </h2>
            <p className="mb-6 mt-1 text-sm text-ink-muted">
              {allowSignUp
                ? 'Sign in to read notes on the site and unlock premium passes.'
                : 'Sign in with an owner account.'}
            </p>

            <button
              type="button"
              disabled={loading}
              onClick={() => runAuth(loginWithGoogle)}
              className="btn btn-secondary w-full py-3"
            >
              <span className="font-black text-brand" aria-hidden="true">G</span> Continue with Google
            </button>

            <div className="my-5 flex items-center gap-3 text-xs font-bold text-ink-muted">
              <div className="flex-1 border-t border-line" />
              or use email
              <div className="flex-1 border-t border-line" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'signup' && (
                <div>
                  <label htmlFor="auth-name" className="label">Name</label>
                  <input
                    id="auth-name"
                    required
                    type="text"
                    autoComplete="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="input"
                    placeholder="Your name"
                  />
                </div>
              )}

              <div>
                <label htmlFor="auth-email" className="label">Email</label>
                <input
                  id="auth-email"
                  required
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="input"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="auth-password" className="label">Password</label>
                <input
                  id="auth-password"
                  required
                  type="password"
                  autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
                  minLength={mode === 'signup' ? 6 : undefined}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  className="input"
                  placeholder={mode === 'signup' ? 'At least 6 characters' : 'Your password'}
                />
              </div>

              {error && <div className="alert alert-error">{error}</div>}

              <button type="submit" disabled={loading} className="btn btn-primary w-full py-3">
                {loading ? 'Please wait…' : mode === 'login' ? 'Sign in' : 'Create account'}
              </button>

              {allowSignUp && (
                <p className="text-center text-sm text-ink-muted">
                  {mode === 'login' ? "Don't have an account? " : 'Already have an account? '}
                  <button
                    type="button"
                    onClick={() => switchMode(mode === 'login' ? 'signup' : 'login')}
                    className="link"
                  >
                    {mode === 'login' ? 'Sign up' : 'Sign in'}
                  </button>
                </p>
              )}
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
