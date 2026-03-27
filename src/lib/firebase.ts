// lib/firebase.ts — client-only, lazy initialized
// Firebase SDK is only initialized when first accessed (client side)
import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { Auth, getAuth, GoogleAuthProvider } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';

let app: FirebaseApp | null = null;
let _auth: Auth | null = null;
let _db: Firestore | null = null;

function getApp(): FirebaseApp | null {
  if (typeof window === 'undefined') return null; // server: skip
  if (app) return app;
  const config = {
    apiKey:            process.env.NEXT_PUBLIC_FIREBASE_API_KEY            || '',
    authDomain:        process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN        || '',
    projectId:         process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID         || '',
    storageBucket:     process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET     || '',
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
    appId:             process.env.NEXT_PUBLIC_FIREBASE_APP_ID             || '',
  };
  try {
    app = getApps().length ? getApps()[0] : initializeApp(config);
    return app;
  } catch {
    return null;
  }
}

export function getFirebaseAuth(): Auth | null {
  if (_auth) return _auth;
  const a = getApp();
  if (!a) return null;
  try { _auth = getAuth(a); return _auth; } catch { return null; }
}

export function getFirebaseDb(): Firestore | null {
  if (_db) return _db;
  const a = getApp();
  if (!a) return null;
  try { _db = getFirestore(a); return _db; } catch { return null; }
}

export const googleProvider = new GoogleAuthProvider();
