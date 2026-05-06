import React from 'react';
import { motion } from 'framer-motion';

/**
 * SIPEMAS Sign Up Component
 * * Rebuilt using:
 * - TypeScript
 * - Tailwind CSS
 * - Vite/React compatibility
 * - Framer Motion for modern interactions
 * * Maintains the original institutional layout while adding
 * strong typing and smooth animations.
 */

const SignUpPage: React.FC = () => {
  return (
    <div className="bg-[#f8f9ff] text-[#0b1c30] min-h-screen flex flex-col font-['Public_Sans',sans-serif]">
      <main className="flex-grow flex items-center justify-center px-6 py-8 md:py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-[1100px] grid md:grid-cols-2 bg-white rounded-xl overflow-hidden shadow-sm border border-[#c5c5d3]"
        >
          {/* Left Panel: Institutional Branding */}
          <div className="hidden md:flex flex-col justify-between p-8 bg-[#1e3a8a] text-white relative overflow-hidden">
            <div className="relative z-10">
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2 mb-12"
              >
                <span className="material-symbols-outlined text-[32px] text-[#90a8ff]">
                  shield_with_heart
                </span>
                <span className="text-xl font-extrabold tracking-tight">SIPEMAS</span>
              </motion.div>
              
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-[2.25rem] font-bold mb-4 leading-tight tracking-tight"
              >
                Civic Integrity through Direct Action.
              </motion.h1>
              
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-blue-100 opacity-90 max-w-sm"
              >
                Join the official platform for institutional reporting and help us maintain operational transparency across all government sectors.
              </motion.p>
            </div>

            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="relative z-10 mt-8"
            >
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-lg border border-white/20">
                <span className="material-symbols-outlined text-[#ffdbcb] text-3xl">
                  verified_user
                </span>
                <div>
                  <p className="text-sm font-medium text-white">Secure Data Protocol</p>
                  <p className="text-xs text-blue-200">Your identity is protected by federal encryption standards.</p>
                </div>
              </div>
            </motion.div>

            {/* Background Decoration */}
            <div className="absolute bottom-[-10%] right-[-10%] w-full h-full opacity-20 pointer-events-none">
              <img 
                className="w-full h-full object-cover grayscale brightness-150" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW6aNxeFNh3eSxWvTqo9xCvUUKBfES6g9ASYrlY38K7Ezc8AtewVTdWwEYX3oedyBVF_draNkC6BVph8SzaMgAYUPcirXtoMAkdCLDhaCHrACp7MkC69YHTiKM0PRlg0wMM09LjlYSFKzF69rYtwt2Rg6RhLqCOeGv4b-Lo60qzMwILx2F9VLkQEFwXwRyq9LrqPgzwKLoldUvLszvBNU9bacMMvXZrOE_EadmctZ8VKxPC3XTGWymrB_nGuhQ0ypUIUdv4Iw7ieg" 
                alt="Security Background" 
              />
            </div>
          </div>

          {/* Right Panel: Sign Up Form */}
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="text-[1.875rem] font-semibold text-[#00236f] mb-2">Create Account</h2>
              <p className="text-[#444651]">Please provide your legal credentials to access the portal.</p>
            </div>

            <form action="#" className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-[#0b1c30]" htmlFor="name">Full Legal Name</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#757682] text-xl">
                    person
                  </span>
                  <input 
                    className="w-full pl-10 pr-4 py-3 rounded border border-[#c5c5d3] bg-[#f8f9ff] focus:ring-2 focus:ring-[#00236f] focus:border-[#00236f] transition-all outline-none" 
                    id="name" 
                    type="text" 
                    placeholder="John Q. Public" 
                    required 
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-[#0b1c30]" htmlFor="email">Email Address</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#757682] text-xl">
                    mail
                  </span>
                  <input 
                    className="w-full pl-10 pr-4 py-3 rounded border border-[#c5c5d3] bg-[#f8f9ff] focus:ring-2 focus:ring-[#00236f] focus:border-[#00236f] transition-all outline-none" 
                    id="email" 
                    type="email" 
                    placeholder="name@organization.gov" 
                    required 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-[#0b1c30]" htmlFor="password">Password</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#757682] text-xl">
                      lock
                    </span>
                    <input 
                      className="w-full pl-10 pr-4 py-3 rounded border border-[#c5c5d3] bg-[#f8f9ff] focus:ring-2 focus:ring-[#00236f] focus:border-[#00236f] transition-all outline-none" 
                      id="password" 
                      type="password" 
                      placeholder="••••••••" 
                      required 
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-[#0b1c30]" htmlFor="confirm_password">Confirm Password</label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#757682] text-xl">
                      verified
                    </span>
                    <input 
                      className="w-full pl-10 pr-4 py-3 rounded border border-[#c5c5d3] bg-[#f8f9ff] focus:ring-2 focus:ring-[#00236f] focus:border-[#00236f] transition-all outline-none" 
                      id="confirm_password" 
                      type="password" 
                      placeholder="••••••••" 
                      required 
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <div className="flex items-center h-5">
                  <input 
                    className="w-4 h-4 rounded border-[#c5c5d3] text-[#00236f] focus:ring-[#00236f]" 
                    id="terms" 
                    type="checkbox" 
                    required 
                  />
                </div>
                <label className="text-xs text-[#444651] leading-tight" htmlFor="terms">
                  I agree to the <a className="text-[#00236f] hover:underline" href="#">Terms of Service</a> and <a className="text-[#00236f] hover:underline" href="#">Privacy Policy</a> concerning data disclosure.
                </label>
              </div>

              <div className="pt-4">
                <motion.button 
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 px-6 bg-[#00236f] text-white font-medium rounded-lg shadow hover:bg-[#00236f]/90 transition-all flex items-center justify-center gap-2" 
                  type="submit"
                >
                  Register
                  <span className="material-symbols-outlined">arrow_forward</span>
                </motion.button>
              </div>

              <div className="text-center mt-6">
                <p className="text-sm text-[#444651]">
                  Already have an account? {' '}
                  <a className="text-[#00236f] font-semibold hover:underline decoration-2 underline-offset-4" href="#">
                    Sign in instead
                  </a>
                </p>
              </div>
            </form>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 px-6 flex flex-col md:flex-row justify-between items-center gap-4 bg-white border-t border-slate-200">
        <span className="text-xs font-bold text-slate-900">SIPEMAS</span>
        <span className="text-xs text-slate-500 text-center">© 2024 SIPEMAS Institutional Reporting System. All rights reserved.</span>
        <div className="flex gap-4">
          <a className="text-xs text-slate-500 hover:text-blue-600 transition-colors" href="#">Privacy Policy</a>
          <a className="text-xs text-slate-500 hover:text-blue-600 transition-colors" href="#">Public Transparency</a>
        </div>
      </footer>
    </div>
  );
};

export default SignUpPage;