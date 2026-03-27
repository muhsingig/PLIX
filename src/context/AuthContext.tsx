'use client';
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import type { User } from 'firebase/auth';
import { googleProvider, getFirebaseAuth } from '@/lib/firebase';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (name: string, email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null, loading: false,
  signIn: async () => {}, signUp: async () => {}, signInWithGoogle: async () => {},
  signOut: async () => {}, resetPassword: async () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser]       = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getFirebaseAuth();
    if (!auth) { setLoading(false); return; }
    // dynamic import to keep firebase off server
    import('firebase/auth').then(({ onAuthStateChanged }) => {
      const unsub = onAuthStateChanged(auth, (u) => { setUser(u); setLoading(false); });
      return () => unsub();
    });
  }, []);

  const signIn = async (email: string, password: string) => {
    const auth = getFirebaseAuth();
    if (!auth) throw new Error('Firebase not configured — add your .env.local keys');
    const { signInWithEmailAndPassword } = await import('firebase/auth');
    await signInWithEmailAndPassword(auth, email, password);
  };

  const signUp = async (name: string, email: string, password: string) => {
    const auth = getFirebaseAuth();
    if (!auth) throw new Error('Firebase not configured');
    const { createUserWithEmailAndPassword, updateProfile } = await import('firebase/auth');
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(cred.user, { displayName: name });
    setUser(cred.user);
  };

  const signInWithGoogle = async () => {
    const auth = getFirebaseAuth();
    if (!auth) throw new Error('Firebase not configured');
    const { signInWithPopup } = await import('firebase/auth');
    await signInWithPopup(auth, googleProvider);
  };

  const signOut = async () => {
    const auth = getFirebaseAuth();
    if (!auth) return;
    const { signOut: fbSignOut } = await import('firebase/auth');
    await fbSignOut(auth);
    setUser(null);
  };

  const resetPassword = async (email: string) => {
    const auth = getFirebaseAuth();
    if (!auth) throw new Error('Firebase not configured');
    const { sendPasswordResetEmail } = await import('firebase/auth');
    await sendPasswordResetEmail(auth, email);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signInWithGoogle, signOut, resetPassword }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
