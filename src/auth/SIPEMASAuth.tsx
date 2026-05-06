

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  LockKeyhole,
  Building2 
} from 'lucide-react';

/**
 * SIPEMAS - Secure Institutional Reporting System
 * * Design Direction: Industrial/Refined
 * A clean, high-contrast interface designed for institutional trust. 
 * Features micro-interactions for tab switching and subtle grain overlays 
 * for a tactile, production-grade feel.
 */

const SIPEMASAuth = () => {
  const [isLogin, setIsLogin] = useState(false);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } as const
    }
  };

  const formVariants = {
    initial: { opacity: 0, x: isLogin ? -10 : 10 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: isLogin ? 10 : -10 },
    transition: { duration: 0.3 }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-[#f8f9ff] overflow-hidden selection:bg-primary/20">
      
      {/* Background Layer: Abstract Institutional Aesthetic */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/p6.png')] opacity-[0.03] pointer-events-none" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-100/40 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 w-full max-w-[480px] px-6"
      >
        <main className="bg-white rounded-2xl border border-slate-200/60 shadow-[0_20px_50px_rgba(0,35,111,0.08)] overflow-hidden flex flex-col">
          
          {/* Top Accent Bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#00236f] via-[#4e45d5] to-[#00236f] bg-[length:200%_auto] animate-gradient-x" />

          <div className="p-10 flex flex-col gap-8">
            
            {/* Header / Branding */}
            <header className="flex flex-col items-center text-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-[#00236f] mb-2 border border-slate-100 shadow-inner">
                <Building2 size={32} strokeWidth={1.5} />
              </div>
              <h1 className="text-3xl font-bold text-[#0b1c30] tracking-tight">
                SIPEMAS
              </h1>
              <p className="text-sm text-slate-500 leading-relaxed max-w-[280px]">
                Secure Institutional Reporting System. <br/>Welcome, citizen.
              </p>
            </header>

            {/* Auth Toggle Tabs */}
            <div className="flex bg-slate-100/80 p-1.5 rounded-xl border border-slate-200/50">
              <button 
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  isLogin ? 'bg-white text-[#00236f] shadow-sm' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Sign In
              </button>
              <button 
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                  !isLogin ? 'bg-white text-[#00236f] shadow-sm' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                Register
              </button>
            </div>

            {/* Auth Form Container */}
            <AnimatePresence mode="wait">
              <motion.form 
                key={isLogin ? 'login' : 'register'}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={formVariants}
                className="flex flex-col gap-5"
                onSubmit={(e) => e.preventDefault()}
              >
                {!isLogin && (
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 ml-1">Full Legal Name</label>
                    <div className="relative group">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#00236f] transition-colors" size={18} />
                      <input 
                        className="w-full pl-11 pr-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:border-[#00236f] focus:ring-4 focus:ring-blue-50/50 outline-none transition-all placeholder:text-slate-400"
                        placeholder="Jane Doe"
                        type="text"
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 ml-1">Email Address</label>
                  <div className="relative group">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#00236f] transition-colors" size={18} />
                    <input 
                      className="w-full pl-11 pr-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:border-[#00236f] focus:ring-4 focus:ring-blue-50/50 outline-none transition-all placeholder:text-slate-400"
                      placeholder="citizen@example.com"
                      type="email"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-500 ml-1">Secure Password</label>
                  <div className="relative group">
                    <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#00236f] transition-colors" size={18} />
                    <input 
                      className="w-full pl-11 pr-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:border-[#00236f] focus:ring-4 focus:ring-blue-50/50 outline-none transition-all placeholder:text-slate-400"
                      placeholder="••••••••"
                      type="password"
                    />
                  </div>
                  {!isLogin && (
                    <p className="text-[11px] text-slate-400 mt-2 flex items-center gap-1.5 ml-1">
                      <ShieldCheck size={12} /> Must be at least 12 characters.
                    </p>
                  )}
                </div>

                <button 
                  className="w-full mt-2 py-3.5 bg-[#00236f] hover:bg-[#001a54] text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-900/10 transition-all active:scale-[0.98] flex justify-center items-center gap-2 group"
                  type="submit"
                >
                  <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.form>
            </AnimatePresence>
          </div>

          {/* Footer Area */}
          <div className="bg-slate-50/80 p-5 border-t border-slate-100 flex justify-center">
            <p className="text-[11px] font-medium text-slate-400 flex items-center gap-2">
              <LockKeyhole size={14} className="text-[#4e45d5]" />
              End-to-end encrypted civic connection
            </p>
          </div>
        </main>

        {/* Minimal Copyright / Links */}
        <footer className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[11px] font-bold uppercase tracking-widest text-slate-400">
          <a className="hover:text-[#00236f] transition-colors cursor-pointer" href="#">Privacy Policy</a>
          <a className="hover:text-[#00236f] transition-colors cursor-pointer" href="#">Terms of Service</a>
          <a className="hover:text-[#00236f] transition-colors cursor-pointer" href="#">Contact Support</a>
        </footer>
      </motion.div>

      
    </div>
  );
};

export default SIPEMASAuth;