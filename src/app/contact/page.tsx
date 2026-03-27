'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <div className="min-h-[100dvh] pt-24 w-full relative flex flex-col overflow-hidden bg-background">
      {/* Background radial soft gradient */}
      <div className="absolute inset-0 pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse at top right, rgba(255,209,224,0.4) 0%, rgba(255,244,245,1) 80%)' }} />

      <div className="max-w-[1280px] w-full mx-auto px-6 pb-24 relative z-10 flex flex-col md:flex-row gap-12 md:gap-20 items-stretch">
        
        {/* Visual / Lifestyle Side */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <div>
            <h1 className="display-lg text-primary tracking-tighter mb-4 text-[42px] md:text-[56px] leading-[1.1]">Let's Radiate<br/>Together.</h1>
            <p className="text-[16px] text-on-background/50 font-medium max-w-[400px] leading-relaxed">
              Have a question about your glow routine, an order, or just want to say hello? Drop us a line below. Our botanical experts are always here to help.
            </p>
          </div>

          <div className="w-full relative rounded-xl overflow-hidden shadow-ambient ghost-border aspect-[4/5] md:aspect-square bg-surface-container-low group flex-[1]">
            <div className="absolute inset-0 scale-105 group-hover:scale-100 transition-organic duration-1000 bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=1400&auto=format&fit=crop")' }} />
            <div className="absolute inset-0 bg-primary/10 mix-blend-color-burn transition-organic duration-700 group-hover:opacity-50" />
            <div className="absolute bottom-6 left-6 p-4 bg-surface-container-lowest/80 backdrop-blur-md ghost-border rounded-xl shadow-ambient min-w-[200px]">
               <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-1">HQ Base</p>
               <p className="text-[14px] font-bold text-on-background">New York City, NY</p>
               <p className="text-[12px] font-medium text-on-background/50">M-F, 9am - 5pm EST</p>
            </div>
          </div>

        </div>

        {/* Form Side */}
        <div className="w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-24 h-full">
          <div className="w-full flex flex-col gap-6 h-full">
              
            {/* Form Card */}
            <div className="w-full bg-surface-container-lowest rounded-xl p-8 md:p-12 shadow-ambient ghost-border relative overflow-hidden flex-[1]">
                
                {status === 'success' ? (
                <div className="flex flex-col items-center justify-center text-center py-16 animate-in fade-in slide-in-from-bottom-4 duration-700 h-full">
                    <div className="w-20 h-20 bg-secondary-container rounded-full flex items-center justify-center text-secondary mb-6 shadow-ambient">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <h2 className="text-[32px] font-sans font-black tracking-tighter text-primary mb-3">Message Received</h2>
                    <p className="text-[15px] font-medium text-on-background/50 leading-relaxed max-w-[340px] mb-8">
                    Our team is reviewing your note and will get back to you with a vibrant solution within 24 hours. Keep glowing!
                    </p>
                    <button 
                    onClick={() => setStatus('idle')}
                    className="h-[48px] px-8 bg-surface-container-high text-primary ghost-border font-bold rounded-full hover:bg-surface-container-highest transition-organic text-[14px]"
                    >
                    Send Another Message
                    </button>
                </div>
                ) : (
                <form onSubmit={handleSubmit} className="space-y-5 relative z-10 w-full h-full flex flex-col justify-center">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5 flex flex-col">
                        <label className="label-md text-primary ml-2 uppercase tracking-wide text-[10px]">Your Name</label>
                        <input type="text" placeholder="Jane Doe" required className="w-full h-[52px] rounded-md bg-surface-container-low px-5 text-[14px] outline-none placeholder:text-on-background/30 text-on-background font-medium ghost-border focus:ring-2 focus:ring-primary/20 transition-organic shadow-inner" />
                    </div>
                    {/* Email */}
                    <div className="space-y-1.5 flex flex-col">
                        <label className="label-md text-primary ml-2 uppercase tracking-wide text-[10px]">Email Address</label>
                        <input type="email" placeholder="jane@wellness.com" required className="w-full h-[52px] rounded-md bg-surface-container-low px-5 text-[14px] outline-none placeholder:text-on-background/30 text-on-background font-medium ghost-border focus:ring-2 focus:ring-primary/20 transition-organic shadow-inner" />
                    </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Order Number (Optional) */}
                    <div className="space-y-1.5 flex flex-col">
                        <label className="label-md text-primary ml-2 uppercase tracking-wide text-[10px]">Order Number (Opt)</label>
                        <input type="text" placeholder="#PLIX10293" className="w-full h-[52px] rounded-md bg-surface-container-low px-5 text-[14px] outline-none placeholder:text-on-background/30 text-on-background font-medium ghost-border focus:ring-2 focus:ring-primary/20 transition-organic shadow-inner" />
                    </div>
                    {/* Subject */}
                    <div className="space-y-1.5 flex flex-col">
                        <label className="label-md text-primary ml-2 uppercase tracking-wide text-[10px]">Subject</label>
                        <div className="relative">
                        <select required defaultValue="" className="w-full h-[52px] rounded-md bg-surface-container-low px-5 text-[14px] outline-none text-on-background font-medium ghost-border focus:ring-2 focus:ring-primary/20 transition-organic shadow-inner appearance-none pr-10 cursor-pointer">
                            <option value="" disabled>Select a subject...</option>
                            <option value="order">Where is my order?</option>
                            <option value="product">Product Question</option>
                            <option value="returns">Returns & Exchanges</option>
                            <option value="wholesale">Wholesale Inquiry</option>
                            <option value="other">Just saying hello!</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-primary">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </div>
                        </div>
                    </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5 flex flex-col pt-1">
                    <label className="label-md text-primary ml-2 uppercase tracking-wide text-[10px]">Your Message</label>
                    <textarea 
                        required 
                        placeholder="Tell us everything..." 
                        className="w-full min-h-[140px] rounded-md bg-surface-container-low p-5 text-[14px] outline-none placeholder:text-on-background/30 text-on-background font-medium ghost-border focus:ring-2 focus:ring-primary/20 transition-organic shadow-inner resize-y" 
                    />
                    </div>

                    <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full h-[56px] bg-primary text-on-primary rounded-full font-bold text-[15px] hover:bg-primary-container hover:text-on-surface transition-organic shadow-ambient mt-6 disabled:opacity-60 flex items-center justify-center gap-2"
                    >
                    {status === 'loading' ? (
                        <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                        Sending...
                        </>
                    ) : 'Send Message'}
                    </button>
                </form>
                )}
                
                {/* Form decorative glow */}
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-secondary-container/20 rounded-full blur-3xl pointer-events-none" />
            </div>

            {/* Social Links Block */}
            <div className="bg-surface-container-lowest rounded-xl p-8 ghost-border shadow-ambient flex flex-col sm:flex-row shadow-sm">
                <div className="flex-1 border-b sm:border-b-0 sm:border-r border-outline-variant/10 pb-4 sm:pb-0 sm:pr-4 mb-4 sm:mb-0">
                    <h3 className="text-[10px] font-black text-on-background/40 uppercase tracking-[0.15em] mb-4">Direct Email</h3>
                    <a href="mailto:hello@plixlife.com" className="flex items-center gap-3 text-on-background hover:text-primary transition-organic group">
                        <div className="w-10 h-10 rounded-full bg-surface-container-low group-hover:bg-primary-container/20 flex items-center justify-center transition-organic text-primary">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        <span className="text-[14px] font-bold">hello@plixlife.com</span>
                    </a>
                </div>
                <div className="flex-1 sm:pl-8">
                    <h3 className="text-[10px] font-black text-on-background/40 uppercase tracking-[0.15em] mb-4">Instagram</h3>
                    <a href="#" className="flex items-center gap-3 text-on-background hover:text-primary transition-organic group">
                        <div className="w-10 h-10 rounded-full bg-surface-container-low group-hover:bg-primary-container/20 flex items-center justify-center transition-organic text-primary">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                        </div>
                        <span className="text-[14px] font-bold">@plixwellness</span>
                    </a>
                </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-surface border-t border-outline-variant/10 relative z-20 pt-16 pb-12 px-6">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <img src="/logo.png" alt="Plix Logo" className="h-8 w-auto mb-6 object-contain" />
            <p className="text-[13px] text-on-background/50 leading-relaxed max-w-[200px] mb-8 font-medium">Radiant by nature, clinical by choice. We believe in the power of botanical synergy.</p>
          </div>
          <div>
            <h4 className="text-[11px] font-black text-on-background/40 uppercase tracking-[0.15em] mb-6">Shop</h4>
            <ul className="space-y-4 text-[14px] font-medium text-on-background/80">
              <li><Link href="/shop" className="hover:text-primary transition-organic">All Products</Link></li>
              <li><Link href="/shop" className="hover:text-primary transition-organic">Best Sellers</Link></li>
              <li><Link href="/shop" className="hover:text-primary transition-organic">Bundles</Link></li>
              <li><Link href="/science" className="hover:text-primary transition-organic">Ingredient Glossary</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-black text-on-background/40 uppercase tracking-[0.15em] mb-6">About</h4>
            <ul className="space-y-4 text-[14px] font-medium text-on-background/80">
              <li><Link href="/about" className="hover:text-primary transition-organic">Our Story</Link></li>
              <li><Link href="/science" className="hover:text-primary transition-organic">The Science</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-organic">Sustainability</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-organic">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] font-black text-on-background/40 uppercase tracking-[0.15em] mb-6">Stay Glowing</h4>
            <p className="text-[13px] font-medium text-on-background/50 mb-4">Subscribe to our newsletter for 15% off your first juicy order.</p>
            <div className="flex bg-surface-container-low rounded-full ghost-border p-1">
              <input type="email" placeholder="hello@glow.com" className="flex-1 bg-transparent px-4 text-[13px] outline-none placeholder:text-on-background/30 text-on-background" />
              <button className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-on-primary hover:bg-primary-container hover:text-on-surface transition-organic shrink-0">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-[1100px] mx-auto pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] font-bold text-on-background/40">© 2024 Plix Life. All rights reserved.</p>
          <div className="flex gap-6 text-[10px] font-black text-primary/60 uppercase tracking-[0.15em]">
            <Link href="#" className="hover:text-primary transition-organic">Privacy</Link>
            <Link href="#" className="hover:text-primary transition-organic">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
