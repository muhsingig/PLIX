'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

export default function ForgotPasswordPage() {
  const { resetPassword } = useAuth();
  const [email, setEmail]     = useState('');
  const [sent, setSent]       = useState(false);
  const [error, setError]     = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await resetPassword(email);
      setSent(true);
    } catch {
      setError('Could not send reset email. Please check the address and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-background">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(255,209,224,0.4) 0%, rgba(255,244,245,1) 70%)' }} />

      <div className="relative z-10 w-full max-w-[440px] bg-surface-container-lowest rounded-xl p-10 shadow-ambient ghost-border flex flex-col items-center">
        
        <Link href="/login" className="self-start text-[12px] font-bold text-primary/60 hover:text-primary transition-organic mb-8 flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
          Back to Login
        </Link>

        {sent ? (
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center mx-auto mb-6 shadow-float">
              <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="text-[24px] font-sans font-black text-primary mb-3 tracking-tighter">Email Sent!</h2>
            <p className="text-[14px] text-on-background/60 font-medium leading-relaxed mb-8">
              Check your inbox at <strong className="text-primary">{email}</strong> for a link to reset your password.
            </p>
            <Link href="/login" className="w-full h-[50px] bg-primary text-on-primary rounded-full flex items-center justify-center font-bold text-[14px] hover:bg-primary-container hover:text-on-surface transition-organic shadow-ambient">
              Back to Login
            </Link>
          </div>
        ) : (
          <>
            <div className="w-14 h-14 rounded-full bg-primary-container flex items-center justify-center mx-auto mb-6 shadow-float">
              <svg className="w-6 h-6 text-on-surface" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
            </div>
            <h2 className="text-[26px] font-sans font-black text-primary mb-2 tracking-tighter">Forgot Password?</h2>
            <p className="text-[13px] text-on-background/50 font-medium mb-8 text-center">Enter your email and we'll send a reset link.</p>

            {error && (
              <div className="w-full rounded-xl bg-error/10 border border-error/20 px-5 py-3 text-[13px] font-semibold text-error mb-4">
                {error}
              </div>
            )}

            <form className="w-full space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
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
              <button
                type="submit"
                disabled={loading}
                className="w-full h-[54px] bg-primary text-on-primary rounded-full font-bold text-[15px] hover:bg-primary-container hover:text-on-surface transition-organic shadow-ambient disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                    Sending…
                  </>
                ) : 'Send Reset Link'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
