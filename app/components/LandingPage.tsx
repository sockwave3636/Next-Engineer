'use client';

import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function LandingPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { login, signup, loginWithGoogle } = useAuth();
  const router = useRouter();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      if (isLogin) {
        await login(email, password);
      } else {
        await signup(email, password, name);
      }
      router.push('/home');
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 transition-colors duration-200" style={{ backgroundColor: 'var(--background)' }}>
      <div className="max-w-md w-full rounded-2xl shadow-xl p-6 sm:p-8 transition-colors duration-200" style={{ backgroundColor: 'var(--secondary)' }}>
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
            Learn Platform
          </h1>
          <p className="text-base sm:text-lg" style={{ color: 'var(--text-secondary)' }}>
            Access your courses and study materials
          </p>
          <div className="mt-4 p-3 rounded-lg border transition-colors duration-200" style={{ backgroundColor: 'var(--accent)', borderColor: 'var(--primary)' }}>
            <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
              <span className="font-semibold">Owner/Admin:</span> First time? Click "Sign Up" to create your account with your owner email.
            </p>
          </div>
        </div>

        <div className="flex gap-3 sm:gap-4 mb-6">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 px-3 sm:px-4 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
              isLogin ? 'shadow-md' : ''
            }`}
            style={isLogin ? { backgroundColor: 'var(--primary)', color: '#ffffff' } : { backgroundColor: 'var(--background)', color: 'var(--text-secondary)' }}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 px-3 sm:px-4 rounded-lg font-medium transition-all duration-200 text-sm sm:text-base ${
              !isLogin ? 'shadow-md' : ''
            }`}
            style={!isLogin ? { backgroundColor: 'var(--primary)', color: '#ffffff' } : { backgroundColor: 'var(--background)', color: 'var(--text-secondary)' }}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={!isLogin}
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:outline-none transition-all"
                style={{ 
                  backgroundColor: 'var(--background)', 
                  borderColor: 'var(--border)',
                  color: 'var(--text-primary)'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
                placeholder="Enter your name"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:outline-none transition-all"
              style={{ 
                backgroundColor: 'var(--background)', 
                borderColor: 'var(--border)',
                color: 'var(--text-primary)'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: 'var(--text-primary)' }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:outline-none transition-all"
              style={{ 
                backgroundColor: 'var(--background)', 
                borderColor: 'var(--border)',
                color: 'var(--text-primary)'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border)'}
              placeholder="Enter your password"
            />
          </div>

          {error && (
            <div className="px-4 py-3 rounded-lg text-sm border transition-colors duration-200" style={{ backgroundColor: 'var(--background)', borderColor: 'var(--error)' }}>
              <p className="font-semibold mb-1" style={{ color: 'var(--error)' }}>Error:</p>
              <p style={{ color: 'var(--error)' }}>{error}</p>
              {error.includes('Sign Up') && isLogin && (
                <button
                  type="button"
                  onClick={() => setIsLogin(false)}
                  className="mt-2 hover:underline font-medium transition-all"
                  style={{ color: 'var(--primary)' }}
                >
                  Click here to Sign Up instead →
                </button>
              )}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || googleLoading}
            className="w-full font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            style={{ backgroundColor: loading || googleLoading ? 'var(--accent)' : 'var(--primary)', color: '#ffffff' }}
            onMouseEnter={(e) => {
              if (!loading && !googleLoading) {
                e.currentTarget.style.backgroundColor = 'var(--primary-hover)';
              }
            }}
            onMouseLeave={(e) => {
              if (!loading && !googleLoading) {
                e.currentTarget.style.backgroundColor = 'var(--primary)';
              }
            }}
          >
            {loading ? 'Loading...' : isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t transition-colors duration-200" style={{ borderColor: 'var(--border)' }}></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 transition-colors duration-200" style={{ backgroundColor: 'var(--secondary)', color: 'var(--text-secondary)' }}>
                Or continue with
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={async () => {
              setError('');
              setGoogleLoading(true);
              try {
                await loginWithGoogle();
                router.push('/home');
              } catch (err: any) {
                setError(err.message || 'Failed to sign in with Google');
              } finally {
                setGoogleLoading(false);
              }
            }}
            disabled={loading || googleLoading}
            className="mt-4 w-full flex items-center justify-center gap-3 font-semibold py-3 px-4 rounded-lg transition-all duration-200 shadow-md disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base border-2"
            style={{ 
              backgroundColor: 'var(--background)', 
              borderColor: 'var(--border)',
              color: 'var(--text-primary)'
            }}
            onMouseEnter={(e) => {
              if (!loading && !googleLoading) {
                e.currentTarget.style.backgroundColor = 'var(--secondary)';
              }
            }}
            onMouseLeave={(e) => {
              if (!loading && !googleLoading) {
                e.currentTarget.style.backgroundColor = 'var(--background)';
              }
            }}
          >
            {googleLoading ? (
              <>Loading...</>
            ) : (
              <>
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

