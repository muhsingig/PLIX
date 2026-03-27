'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function LoginPage() {
  const router = useRouter();
  const { signIn, signInWithGoogle } = useAuth();

  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const [loading, setLoading]   = useState(false);
  const [showPass, setShowPass] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !password) { setError('Please fill in all fields.'); return; }
    setLoading(true);
    try {
      await signIn(email, password);
      router.push('/');
    } catch (err: unknown) {
      const code = (err as { code?: string }).code ?? '';
      if (code === 'auth/user-not-found' || code === 'auth/wrong-password' || code === 'auth/invalid-credential') {
        setError('Invalid email or password. Please try again.');
      } else if (code === 'auth/too-many-requests') {
        setError('Too many failed attempts. Please try again later.');
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
      
      {/* Background Radial Core */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(255,209,224,0.5) 0%, rgba(255,244,245,1) 70%)' }} />

      {/* Decorative Floating Asset */}
      <div className="absolute -bottom-8 -right-8 md:bottom-20 md:right-32 w-[240px] h-[240px] md:w-[320px] md:h-[320px] bg-secondary-container rounded-xl rotate-[-5deg] shadow-ambient-lg z-0 pointer-events-none border-[12px] border-surface-container-lowest overflow-hidden">
        <div className="w-[150%] h-[150%] bg-cover bg-center rotate-[5deg] absolute"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")' }} />
        <div className="absolute inset-0 bg-secondary/10" />
      </div>

      {/* Logo */}
      <div className="relative z-10 w-full flex justify-center mb-8 md:mb-12">
        <Link href="/" className="text-[28px] font-sans font-black tracking-tighter text-primary">PLIX</Link>
      </div>

      {/* Card */}
      <div className="flex-1 flex items-center justify-center w-full px-6 relative z-10">
        <div className="w-full max-w-[480px] bg-surface-container-lowest rounded-xl p-10 md:p-14 shadow-ambient flex flex-col items-center ghost-border">
          
          <h1 className="display-lg text-primary mb-1 text-[36px]">Welcome Back</h1>
          <p className="text-[15px] font-medium text-on-background/50 mb-8">Step back into your glow journey.</p>

          {/* Google Sign-In */}
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

          <form className="w-full space-y-5" onSubmit={handleLogin}>
            
            {/* Error Banner */}
            {error && (
              <div className="w-full rounded-xl bg-error/10 border border-error/20 px-5 py-3 text-[13px] font-semibold text-error">
                {error}
              </div>
            )}

            {/* Email */}
            <div className="space-y-2">
              <label className="label-md text-primary ml-4">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="hello@wellness.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="w-full h-[54px] rounded-full bg-surface-container-low px-6 text-[14px] outline-none placeholder:text-on-background/30 text-on-background font-medium ghost-border focus:ring-2 focus:ring-primary/20 transition-organic shadow-inner"
                />
                <div className="absolute right-5 top-1/2 -translate-y-1/2 text-on-background/20">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
                </div>
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-4 mr-4">
                <label className="label-md text-primary">Password</label>
                <Link href="/forgot-password" className="text-[11px] font-bold text-primary hover:text-primary-container transition-organic">Forgot Password?</Link>
              </div>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  className="w-full h-[54px] rounded-full bg-surface-container-low px-6 pr-14 text-[16px] outline-none placeholder:text-on-background/30 placeholder:tracking-widest text-on-background font-medium ghost-border focus:ring-2 focus:ring-primary/20 transition-organic shadow-inner"
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-on-background/30 hover:text-primary transition-organic"
                >
                  {showPass ? (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-[56px] bg-primary text-on-primary rounded-full font-bold text-[15px] hover:bg-primary-container hover:text-on-surface transition-organic shadow-ambient mt-4 disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                  Signing in…
                </>
              ) : 'Login'}
            </button>
          </form>

          <div className="w-full h-px bg-outline-variant/20 my-8" />
          
          <p className="text-[14px] text-on-background/50 font-medium mb-5">New to the Plix ritual?</p>
          <Link href="/register" className="w-[200px] h-[48px] bg-secondary text-on-primary rounded-full flex items-center justify-center font-bold text-[14px] hover:bg-secondary-fixed-dim transition-organic shadow-float">
            Create Account
          </Link>
        </div>
      </div>

      {/* Quote */}
      <div className="relative z-10 w-full flex justify-center mt-10 text-center px-6">
        <p className="text-[13px] text-on-background/30 italic font-medium max-w-sm leading-relaxed">
          "Radiance is not just skin deep; it's the energy you bring to the world."
        </p>
      </div>

      {/* Footer */}
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
