'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function RegisterPage() {
  const router = useRouter();
  const { signUp, signInWithGoogle } = useAuth();

  const [name, setName]           = useState('');
  const [email, setEmail]         = useState('');
  const [password, setPassword]   = useState('');
  const [confirm, setConfirm]     = useState('');
  const [error, setError]         = useState('');
  const [loading, setLoading]     = useState(false);
  const [showPass, setShowPass]   = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!name || !email || !password || !confirm) { setError('Please fill in all fields.'); return; }
    if (password.length < 6) { setError('Password must be at least 6 characters.'); return; }
    if (password !== confirm) { setError('Passwords do not match.'); return; }
    setLoading(true);
    try {
      await signUp(name, email, password);
      router.push('/');
    } catch (err: unknown) {
      const code = (err as { code?: string }).code ?? '';
      if (code === 'auth/email-already-in-use') {
        setError('This email is already registered. Try logging in.');
      } else if (code === 'auth/weak-password') {
        setError('Password is too weak. Please choose a stronger one.');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setError('');
    setLoading(true);
    try {
      await signInWithGoogle();
      router.push('/');
    } catch {
      setError('Google sign-in failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col pt-12 pb-8 overflow-hidden bg-background">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 30% 80%, rgba(188,241,159,0.3) 0%, rgba(255,244,245,1) 60%)' }} />

      {/* Decorative asset */}
      <div className="absolute -top-20 -left-20 w-[280px] h-[280px] bg-primary-container/20 rounded-full blur-3xl pointer-events-none" />

      {/* Logo */}
      <div className="relative z-10 w-full flex justify-center mb-8">
        <Link href="/" className="flex items-center justify-center select-none">
          <img src="/logo.png" alt="Plix Logo" className="h-10 w-auto object-contain" />
        </Link>
      </div>

      {/* Card */}
      <div className="flex-1 flex items-center justify-center w-full px-6 relative z-10">
        <div className="w-full max-w-[480px] bg-surface-container-lowest rounded-xl p-10 md:p-14 shadow-ambient flex flex-col items-center ghost-border">

          <h1 className="text-[32px] font-sans font-black tracking-tighter text-primary mb-1">Create Account</h1>
          <p className="text-[14px] font-medium text-on-background/50 mb-8">Join the Plix glow journey today.</p>

          {/* Google */}
          <button
            onClick={handleGoogle}
            disabled={loading}
            className="w-full h-[52px] mb-6 flex items-center justify-center gap-3 rounded-full bg-surface-container-low ghost-border text-on-background font-bold text-[14px] hover:bg-surface-container-high transition-organic disabled:opacity-50"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          <div className="w-full flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-outline-variant/20" />
            <span className="text-[12px] font-bold text-on-background/40 uppercase tracking-wider">or</span>
            <div className="flex-1 h-px bg-outline-variant/20" />
          </div>

          <form className="w-full space-y-4" onSubmit={handleRegister}>

            {error && (
              <div className="w-full rounded-xl bg-error/10 border border-error/20 px-5 py-3 text-[13px] font-semibold text-error">
                {error}
              </div>
            )}

            {/* Name */}
            <div className="space-y-1.5">
              <label className="label-md text-primary ml-4">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                className="w-full h-[52px] rounded-full bg-surface-container-low px-6 text-[14px] outline-none placeholder:text-on-background/30 text-on-background font-medium ghost-border focus:ring-2 focus:ring-primary/20 transition-organic shadow-inner"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="label-md text-primary ml-4">Email Address</label>
              <input
                type="email"
                placeholder="hello@wellness.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full h-[52px] rounded-full bg-surface-container-low px-6 text-[14px] outline-none placeholder:text-on-background/30 text-on-background font-medium ghost-border focus:ring-2 focus:ring-primary/20 transition-organic shadow-inner"
              />
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="label-md text-primary ml-4">Password</label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  placeholder="Min. 6 characters"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  className="w-full h-[52px] rounded-full bg-surface-container-low px-6 pr-14 text-[14px] outline-none placeholder:text-on-background/30 text-on-background font-medium ghost-border focus:ring-2 focus:ring-primary/20 transition-organic shadow-inner"
                />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-on-background/30 hover:text-primary transition-organic">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-1.5">
              <label className="label-md text-primary ml-4">Confirm Password</label>
              <input
                type={showPass ? 'text' : 'password'}
                placeholder="Repeat your password"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
                required
                className={`w-full h-[52px] rounded-full px-6 text-[14px] outline-none placeholder:text-on-background/30 text-on-background font-medium ghost-border focus:ring-2 transition-organic shadow-inner ${
                  confirm && password !== confirm
                    ? 'bg-error/10 focus:ring-error/20'
                    : 'bg-surface-container-low focus:ring-primary/20'
                }`}
              />
              {confirm && password !== confirm && (
                <p className="text-[11px] text-error font-bold ml-4">Passwords don't match</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-[56px] bg-primary text-on-primary rounded-full font-bold text-[15px] hover:bg-primary-container hover:text-on-surface transition-organic shadow-ambient mt-2 disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                  Creating account…
                </>
              ) : 'Create Account'}
            </button>
          </form>

          <div className="w-full h-px bg-outline-variant/20 my-7" />

          <p className="text-[14px] text-on-background/50 font-medium mb-4">Already have an account?</p>
          <Link href="/login" className="w-[180px] h-[46px] bg-surface-container-high ghost-border text-primary rounded-full flex items-center justify-center font-bold text-[14px] hover:bg-surface-container-highest transition-organic shadow-sm">
            Sign In
          </Link>
        </div>
      </div>

      <div className="relative z-10 w-full flex flex-col md:flex-row justify-between items-center px-6 md:px-12 mt-8 pt-6">
        <span className="text-[11px] font-bold text-on-background/40 mb-3 md:mb-0">© 2024 Plix Life.</span>
        <div className="flex gap-6 text-[10px] font-black text-primary/60 uppercase tracking-[0.15em]">
          <Link href="#" className="hover:text-primary transition-organic">Privacy Policy</Link>
          <Link href="#" className="hover:text-primary transition-organic">Terms of Service</Link>
        </div>
      </div>
    </div>
  );
}
