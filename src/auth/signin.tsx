import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * SIPEMAS Sign In Component
 * Rebuilt using:
 * - TypeScript for robust type safety [cite: 3, 5]
 * - Tailwind CSS for consistent institutional styling [cite: 3, 6]
 * - Framer Motion for modern, interactive transitions [cite: 3, 7]
 * - Next.js (App Router) compatible architecture
 */

const SignInPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="bg-[#F8FAFC] text-[#0b1c30] min-h-screen flex flex-col font-['Public_Sans',sans-serif]">
      <main className="flex-grow flex items-center justify-center px-6 py-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-[440px]"
        >
          {/* Brand Logo & Identity [cite: 12] */}
          <div className="text-center mb-8">
            <motion.div 
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-[#1e3a8a] rounded-xl mb-4 shadow-sm"
            >
              <span className="material-symbols-outlined text-white text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                account_balance
              </span>
            </motion.div>
            <h1 className="text-[1.875rem] font-semibold text-[#00236f] tracking-tight">SIPEMAS</h1>
            <p className="text-base text-[#444651] mt-2">Institutional Reporting System</p>
          </div>

          {/* Login Card [cite: 12] */}
          <div className="bg-white border border-[#c5c5d3] rounded-xl p-8 shadow-sm">
            <header className="mb-6">
              <h2 className="text-[1.5rem] font-semibold text-[#0b1c30] mb-1">Welcome back</h2>
              <p className="text-sm font-medium text-[#444651]">Please enter your credentials to access the portal.</p>
            </header>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              {/* Email Field [cite: 12] */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-[#0b1c30]" htmlFor="email">
                  Email Address
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#757682] text-xl">
                    mail
                  </span>
                  <input 
                    className="w-full pl-10 pr-4 py-3 bg-[#f8f9ff] border border-[#c5c5d3] rounded-lg text-base focus:ring-2 focus:ring-[#00236f] focus:border-[#00236f] transition-all outline-none" 
                    id="email" 
                    type="email" 
                    placeholder="name@organization.gov" 
                    required 
                  />
                </div>
              </div>

              {/* Password Field [cite: 12] */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="block text-sm font-medium text-[#0b1c30]" htmlFor="password">
                    Password
                  </label>
                  <a className="text-xs font-semibold text-[#4e45d5] hover:text-[#1e3a8a] transition-colors" href="#">
                    Forgot Password?
                  </a>
                </div>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#757682] text-xl">
                    lock
                  </span>
                  <input 
                    className="w-full pl-10 pr-10 py-3 bg-[#f8f9ff] border border-[#c5c5d3] rounded-lg text-base focus:ring-2 focus:ring-[#00236f] focus:border-[#00236f] transition-all outline-none" 
                    id="password" 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••" 
                    required 
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#757682] hover:text-[#0b1c30] transition-colors"
                  >
                    <span className="material-symbols-outlined text-xl">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#00236f] text-white font-bold py-3.5 rounded-lg shadow-sm hover:bg-[#1e3a8a] transition-all" 
                type="submit"
              >
                Sign In
              </motion.button>
            </form>

            {/* Divider [cite: 12] */}
            <div className="flex items-center my-8">
              <div className="flex-grow border-t border-[#c5c5d3]"></div>
              <span className="px-4 text-xs text-[#757682] uppercase tracking-widest font-semibold">or</span>
              <div className="flex-grow border-t border-[#c5c5d3]"></div>
            </div>

            {/* Secondary Action [cite: 12] */}
            <div className="text-center">
              <p className="text-base text-[#444651] mb-4">New to the platform?</p>
              <button className="w-full border-2 border-[#4e45d5] text-[#4e45d5] font-bold py-3 rounded-lg hover:bg-[#eff4ff] transition-all">
                Create an account
              </button>
            </div>
          </div>

          {/* Footer Links [cite: 12] */}
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <a className="text-xs font-semibold text-[#757682] hover:text-[#00236f] transition-colors" href="#">Privacy Policy</a>
            <a className="text-xs font-semibold text-[#757682] hover:text-[#00236f] transition-colors" href="#">Terms of Service</a>
            <a className="text-xs font-semibold text-[#757682] hover:text-[#00236f] transition-colors" href="#">Contact Support</a>
          </div>
        </motion.div>
      </main>

      {/* Illustrative Backdrop [cite: 12] */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[60%] rounded-full bg-[#e5eeff] opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-[10%] -left-[5%] w-[35%] h-[50%] rounded-full bg-[#cbdbf5] opacity-30 blur-3xl"></div>
      </div>

      {/* Mandatory Footer Component [cite: 12] */}
      <footer className="w-full py-8 px-6 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-slate-200 bg-white">
        <p className="text-xs text-slate-500">
          © 2024 SIPEMAS Institutional Reporting System. All rights reserved.
        </p>
        <div className="flex gap-6">
          <span className="text-xs text-slate-500 cursor-pointer hover:text-blue-600 transition-colors">Public Transparency</span>
          <span className="text-xs text-slate-500 cursor-pointer hover:text-blue-600 transition-colors">Contact Support</span>
        </div>
      </footer>
    </div>
  );
};

export default SignInPage;