'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

type Tab = 'signin' | 'signup';

function PasswordStrength({ pwd }: { pwd: string }) {
  const strength = pwd.length === 0 ? 0 : pwd.length < 6 ? 1 : pwd.length < 10 ? 2 : 3;
  const colors = ['bg-gray-200', 'bg-red-400', 'bg-yellow-400', 'bg-[var(--plix-green)]'];
  return (
    <div className="flex gap-1 mt-1">
      {[1, 2, 3].map(l => (
        <div key={l} className={`h-1 flex-1 rounded-full transition-all duration-300 ${strength >= l ? colors[strength] : 'bg-gray-200'}`} />
      ))}
    </div>
  );
}

export default function LoginPage() {
  const router = useRouter();
  const { signIn, signUp, signInWithGoogle, resetPassword } = useAuth();

  const [tab, setTab]         = useState<Tab>('signin');
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [password, setPwd]    = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [agreed, setAgreed]   = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState('');
  const [resetSent, setResetSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (tab === 'signup' && password !== confirmPwd) { setError('Passwords do not match'); return; }
    if (tab === 'signup' && !agreed) { setError('Please agree to Terms & Privacy Policy'); return; }
    setLoading(true);
    try {
      if (tab === 'signin') await signIn(email, password);
      else await signUp(name, email, password);
      router.push('/products');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message.replace('Firebase: ', '') : 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setLoading(true);
    try {
      await signInWithGoogle();
      router.push('/products');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Google sign-in failed');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async () => {
    if (!email) { setError('Please enter your email address first'); return; }
    await resetPassword(email);
    setResetSent(true);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-3/5 bg-[var(--plix-green)] flex-col items-center justify-center p-16 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[var(--plix-green-mid)] opacity-30" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-[var(--plix-pink)] opacity-10" />
        <div className="relative z-10 text-center max-w-lg">
          <p className="text-[var(--plix-pink)] font-black text-4xl mb-4 tracking-tight">
            PL<span className="text-white">IX</span>
          </p>
          <h2 className="text-6xl font-bold text-white mb-6 leading-tight">The Plant Fix.</h2>
          <p className="text-white/60 text-xl leading-relaxed mb-12">
            Clean beauty, powered by nature.<br /> Join 5 lakh+ Indian women on their glow journey.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {['🌿 Vegan', '✓ Clean Label', '🐰 Cruelty-Free'].map(t => (
              <span key={t} className="bg-white/10 text-white rounded-full px-4 py-2 text-sm font-medium border border-white/20">{t}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-full lg:w-2/5 bg-[var(--plix-sage)] flex items-center justify-center px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8"
        >
          <h1 className="text-2xl font-bold text-[var(--plix-ink)] mb-2">Welcome to Plix</h1>
          <p className="text-sm text-[var(--plix-muted)] mb-6">Your glow journey starts here.</p>

          {/* Tab toggle */}
          <div className="flex bg-[var(--plix-sage)] rounded-full p-1 mb-8">
            {(['signin', 'signup'] as Tab[]).map(t => (
              <button key={t} onClick={() => { setTab(t); setError(''); }}
                className={`flex-1 py-2 text-sm font-semibold rounded-full transition-all duration-300 ${tab === t ? 'bg-[var(--plix-pink)] text-white shadow-sm' : 'text-[var(--plix-muted)]'}`}>
                {t === 'signin' ? 'Sign In' : 'Create Account'}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.form key={tab}
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              onSubmit={handleSubmit} className="space-y-4">

              {tab === 'signup' && (
                <div>
                  <label className="text-xs font-medium text-[var(--plix-muted)] block mb-1">Full Name</label>
                  <input value={name} onChange={e => setName(e.target.value)} required
                    placeholder="Your full name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--plix-pink)] transition-colors" />
                </div>
              )}

              <div>
                <label className="text-xs font-medium text-[var(--plix-muted)] block mb-1">Email Address</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
                  placeholder="you@email.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--plix-pink)] transition-colors" />
              </div>

              <div>
                <label className="text-xs font-medium text-[var(--plix-muted)] block mb-1">Password</label>
                <div className="relative">
                  <input type={showPwd ? 'text' : 'password'} value={password} onChange={e => setPwd(e.target.value)} required
                    placeholder="••••••••"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--plix-pink)] transition-colors pr-10" />
                  <button type="button" onClick={() => setShowPwd(s => !s)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--plix-muted)] text-xs hover:text-[var(--plix-ink)]">
                    {showPwd ? 'Hide' : 'Show'}
                  </button>
                </div>
                {tab === 'signup' && <PasswordStrength pwd={password} />}
              </div>

              {tab === 'signup' && (
                <>
                  <div>
                    <label className="text-xs font-medium text-[var(--plix-muted)] block mb-1">Confirm Password</label>
                    <input type="password" value={confirmPwd} onChange={e => setConfirmPwd(e.target.value)} required
                      placeholder="••••••••"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--plix-pink)] transition-colors" />
                  </div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)}
                      className="mt-0.5 accent-[var(--plix-pink)]" />
                    <span className="text-xs text-[var(--plix-muted)]">I agree to Plix&apos;s <span className="text-[var(--plix-pink)] hover:underline cursor-pointer">Terms & Privacy Policy</span></span>
                  </label>
                </>
              )}

              {tab === 'signin' && (
                <div className="text-right">
                  <button type="button" onClick={handleReset} className="text-xs text-[var(--plix-pink)] hover:underline">
                    {resetSent ? '✓ Reset email sent!' : 'Forgot Password?'}
                  </button>
                </div>
              )}

              {error && <p className="text-red-500 text-xs">{error}</p>}

              <button type="submit" disabled={loading}
                className="w-full py-3 rounded-full font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-60"
                style={{ backgroundColor: tab === 'signin' ? 'var(--plix-green)' : 'var(--plix-pink)' }}>
                {loading && <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />}
                {tab === 'signin' ? 'Sign In' : 'Create My Account'}
              </button>
            </motion.form>
          </AnimatePresence>

          {/* Divider */}
          <div className="flex items-center gap-3 my-5">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="text-xs text-[var(--plix-muted)]">or continue with</span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>

          {/* Google button */}
          <button onClick={handleGoogle} disabled={loading}
            className="w-full py-3 rounded-full border border-gray-200 text-sm font-medium text-[var(--plix-ink)] flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors disabled:opacity-60">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </button>
        </motion.div>
      </div>
    </div>
  );
}
