'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendEmailVerification,
  User as FirebaseUser
} from 'firebase/auth';
import { auth } from '@/lib/firebase/config';
import { isOwnerEmail } from '@/lib/owners';

interface User {
  email: string;
  name: string;
  uid: string;
  emailVerified: boolean;
  isOwner: boolean;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  sendVerificationEmail: () => Promise<void>;
  // Re-reads the account after the user verifies their email in another tab
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function toUser(firebaseUser: FirebaseUser): User {
  return {
    email: firebaseUser.email || '',
    name: firebaseUser.displayName || firebaseUser.email?.split('@')[0] || 'User',
    uid: firebaseUser.uid,
    emailVerified: firebaseUser.emailVerified,
    isOwner: isOwnerEmail(firebaseUser.email, firebaseUser.emailVerified)
  };
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser: FirebaseUser | null) => {
      setUser(firebaseUser ? toUser(firebaseUser) : null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const sendVerificationEmail = async () => {
    if (!auth.currentUser) throw new Error('Please sign in first.');
    try {
      await sendEmailVerification(auth.currentUser);
    } catch (error: any) {
      if (error.code === 'auth/too-many-requests') {
        throw new Error('A verification email was sent recently. Check your inbox and spam folder.');
      }
      throw new Error(error.message || 'Could not send the verification email.');
    }
  };

  const refreshUser = async () => {
    const current = auth.currentUser;
    if (!current) return;
    await current.reload();
    // Force a new ID token so the server and security rules also see email_verified
    await current.getIdToken(true);
    setUser(toUser(current));
  };

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // User state will be updated by onAuthStateChanged
    } catch (error: any) {
      // Provide clearer error messages
      if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        throw new Error('Invalid email or password. If you haven\'t created an account yet, please click "Sign Up" first.');
      } else if (error.code === 'auth/user-disabled') {
        throw new Error('This account has been disabled. Please contact support.');
      } else if (error.code === 'auth/too-many-requests') {
        throw new Error('Too many failed login attempts. Please try again later.');
      } else {
        throw new Error(error.message || 'Failed to login');
      }
    }
  };

  const signup = async (email: string, password: string, name: string) => {
    try {
      const { user: createdUser } = await createUserWithEmailAndPassword(auth, email, password);
      const displayName = name.trim();
      if (displayName) {
        await updateProfile(createdUser, { displayName });
        // onAuthStateChanged fired before the profile update, so patch the name in
        setUser((prev) => (prev && prev.uid === createdUser.uid ? { ...prev, name: displayName } : prev));
      }
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        throw new Error('An account with this email already exists. Please sign in instead.');
      } else if (error.code === 'auth/weak-password') {
        throw new Error('Password should be at least 6 characters.');
      } else if (error.code === 'auth/invalid-email') {
        throw new Error('Please enter a valid email address.');
      }
      throw new Error(error.message || 'Failed to sign up');
    }
  };

  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      // User state will be updated by onAuthStateChanged
    } catch (error: any) {
      if (error.code === 'auth/popup-closed-by-user') {
        throw new Error('Sign-in popup was closed. Please try again.');
      } else if (error.code === 'auth/popup-blocked') {
        throw new Error('Popup was blocked by your browser. Please allow popups and try again.');
      } else {
        throw new Error(error.message || 'Failed to sign in with Google');
      }
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      // User state will be updated by onAuthStateChanged
    } catch (error: any) {
      throw new Error(error.message || 'Failed to logout');
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, loginWithGoogle, logout, sendVerificationEmail, refreshUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
