'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

type Mode = 'signin' | 'signup';

export default function LoginPage() {
  const router = useRouter();
  const { signIn, signUp, signInWithGoogle, resetPassword } = useAuth();

  const [mode, setMode]         = useState<Mode>('signin');
  const [name, setName]         = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPwd]      = useState('');
  const [showPwd, setShowPwd]   = useState(false);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState('');
  const [resetSent, setResetSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (mode === 'signin') await signIn(email, password);
      else await signUp(name, email, password);
      router.push('/products');
    } catch (err: any) {
      setError(err.message?.replace('Firebase: ', '') || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setLoading(true);
    try {
      await signInWithGoogle();
      router.push('/products');
    } catch (err: any) {
      setError(err.message || 'Google sign-in failed');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async () => {
    if (!email) { setError('Please enter your email first'); return; }
    try {
      await resetPassword(email);
      setResetSent(true);
    } catch (err: any) {
      setError(err.message);
    }
  };

  const getPasswordStrength = (p: string) => {
    if (!p) return 0;
    if (p.length < 6) return 1;
    if (p.length < 10) return 2;
    return 3;
  };

  return (
    <div className="min-h-screen grid place-items-center relative overflow-hidden px-4 py-32 bg-[var(--g-900)]">
      
      {/* ── Background Decoration ───────────────────────────────────── */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-white/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[35%] h-[35%] bg-[var(--p-300)] opacity-10 blur-[100px] rounded-full" />
      
      {/* ── Auth Card ───────────────────────────────────────────────── */}
      <motion.div 
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[440px] bg-[var(--cloud)] rounded-[var(--r-xl)] shadow-[var(--shadow-float)] p-[var(--s6)] md:p-[var(--s7)] relative z-10"
      >
        <div className="text-center mb-[var(--s5)]">
           <p className="text-[32px] font-black tracking-[-0.06em] select-none mb-1">
             <span style={{ color: 'var(--g-700)' }}>PL</span>
             <span style={{ color: 'var(--p-300)' }}>I</span>
             <span style={{ color: 'var(--g-700)' }}>X</span>
           </p>
           <p className="micro text-black/40 font-bold uppercase tracking-widest">The Plant Fix.</p>
        </div>

        {/* Mode Toggle (Segmented) */}
        <div className="bg-[var(--smoke)] p-1 rounded-full flex relative mb-[var(--s4)]">
           <motion.div 
              layoutId="mode-indicator"
              className="absolute inset-y-1 bg-[var(--g-700)] rounded-full"
              style={{ 
                left: mode === 'signin' ? '4px' : '50%',
                width: 'calc(50% - 4px)'
              }}
              transition={{ type: 'spring', bounce: 0.15, duration: 0.6 }}
           />
           <button 
             onClick={() => { setMode('signin'); setError(''); }}
             className={`flex-1 py-2 text-sm font-bold rounded-full relative z-10 transition-colors ${mode === 'signin' ? 'text-white' : 'text-black/40'}`}
           >
             Sign In
           </button>
           <button 
             onClick={() => { setMode('signup'); setError(''); }}
             className={`flex-1 py-2 text-sm font-bold rounded-full relative z-10 transition-colors ${mode === 'signup' ? 'text-white' : 'text-black/40'}`}
           >
             Create Account
           </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-[var(--s3)] text-left">
          <AnimatePresence mode="wait">
            {mode === 'signup' && (
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <label className="label text-[var(--g-700)] mb-[var(--s1)] block">Full Name</label>
                <input 
                  value={name} onChange={e => setName(e.target.value)} required
                  className="w-full h-13 bg-[var(--smoke)] border-[1.5px] border-transparent focus:border-[var(--g-500)] focus:bg-white rounded-[var(--r-sm)] px-[var(--s3)] transition-std outline-none"
                  placeholder="Your Name"
                />
              </motion.div>
            )}
          </AnimatePresence>

          <div>
             <label className="label text-[var(--g-700)] mb-[var(--s1)] block">Email Address</label>
             <input 
               type="email" value={email} onChange={e => setEmail(e.target.value)} required
               className="w-full h-13 bg-[var(--smoke)] border-[1.5px] border-transparent focus:border-[var(--g-500)] focus:bg-white rounded-[var(--r-sm)] px-[var(--s3)] transition-std outline-none"
               placeholder="you@email.com"
             />
          </div>

          <div>
             <div className="flex justify-between items-baseline mb-[var(--s1)]">
                <label className="label text-[var(--g-700)]">Password</label>
                {mode === 'signin' && (
                  <button type="button" onClick={handleReset} className="micro text-[var(--p-500)] font-bold hover:underline transition-all">
                    {resetSent ? '✓ Check Email' : 'Forgot?'}
                  </button>
                )}
             </div>
             <div className="relative">
                <input 
                  type={showPwd ? 'text' : 'password'} value={password} onChange={e => setPwd(e.target.value)} required
                  className="w-full h-13 bg-[var(--smoke)] border-[1.5px] border-transparent focus:border-[var(--g-500)] focus:bg-white rounded-[var(--r-sm)] px-[var(--s3)] pr-12 transition-std outline-none"
                  placeholder="••••••••"
                />
                <button 
                   type="button" onClick={() => setShowPwd(!showPwd)}
                   className="absolute right-4 top-1/2 -translate-y-1/2 text-black/20 hover:text-[var(--g-700)] transition-colors"
                >
                  {showPwd ? 'Hide' : 'Show'}
                </button>
             </div>
             {mode === 'signup' && (
               <div className="flex gap-1 mt-2">
                 {[1, 2, 3, 4].map(i => (
                    <motion.div 
                      key={i} 
                      className={`h-0.5 flex-1 rounded-full ${getPasswordStrength(password) >= i ? (i <= 2 ? 'bg-red-400' : 'bg-[var(--g-300)]') : 'bg-black/5'}`} 
                    />
                 ))}
               </div>
             )}
          </div>

          <AnimatePresence>
            {error && (
              <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="text-red-500 micro font-bold">{error}</motion.p>
            )}
          </AnimatePresence>

          <button 
             type="submit" disabled={loading}
             className={`
               w-full h-14 mt-[var(--s2)] rounded-[var(--r-md)] text-white font-bold transition-all duration-300 flex items-center justify-center gap-3
               ${mode === 'signin' ? 'bg-[var(--g-700)] hover:bg-[var(--g-500)]' : 'bg-[var(--p-500)] hover:bg-[var(--p-700)] shadow-[var(--shadow-hover)]'}
               disabled:opacity-50
             `}
          >
            {loading && <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />}
            {mode === 'signin' ? 'Sign In' : 'Create My Account'}
          </button>
        </form>

        <div className="flex items-center gap-[var(--s3)] my-[var(--s5)]">
           <div className="flex-1 h-px bg-black/5" />
           <p className="micro text-black/30">or</p>
           <div className="flex-1 h-px bg-black/5" />
        </div>

        <button 
          onClick={handleGoogle} disabled={loading}
          className="w-full h-13 bg-white border border-black/10 rounded-[var(--r-sm)] flex items-center justify-center gap-3 hover:bg-[var(--smoke)] transition-colors"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          </svg>
          <span className="text-sm font-semibold">Continue with Google</span>
        </button>
      </motion.div>
    </div>
  );
}
