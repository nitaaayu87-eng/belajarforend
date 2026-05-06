import React, { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * SIPEMAS Citizen Dashboard Component
 * * Re-implemented using:
 * - TypeScript (Strict Typing)
 * - Tailwind CSS (Modern Utility Classes)
 * - Framer Motion (Smooth Interactions)
 * - Material Symbols (Iconography)
 */

// --- Types & Interfaces ---

interface NavLinkProps {
  href: string;
  label: string;
  isActive?: boolean;
}

interface ReportCardProps {
  category: string;
  title: string;
  description: string;
  date: string;
  status: 'Processing' | 'Pending' | 'Completed';
  isFeatured?: boolean;
}

// --- Sub-Components ---

const NavLink: React.FC<NavLinkProps> = ({ href, label, isActive }) => (
  <a
    href={href}
    className={`pb-1 transition-all cursor-pointer active:opacity-80 ${
      isActive
        ? 'text-blue-900 dark:text-blue-400 border-b-2 border-blue-900 dark:border-blue-400'
        : 'text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-300'
    }`}
  >
    {label}
  </a>
);

const ReportCard: React.FC<ReportCardProps> = ({
  category,
  title,
  description,
  date,
  status,
  isFeatured,
}) => {
  const statusStyles = {
    Processing: 'bg-blue-50 text-blue-800 border-blue-200',
    Pending: 'bg-yellow-50 text-yellow-800 border-yellow-200',
    Completed: 'bg-green-50 text-green-800 border-green-200',
  };

  const containerClasses = isFeatured
    ? 'md:col-span-2 flex-col md:flex-row items-start md:items-center'
    : 'flex-col justify-between';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className={`bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex gap-4 ${containerClasses} ${
        status === 'Completed' ? 'opacity-80' : ''
      }`}
    >
      <div className="flex-grow">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
            {category}
          </span>
          <span className="text-slate-400 text-sm flex items-center gap-1">
            <span className="material-symbols-outlined text-xs">calendar_today</span>
            {date}
          </span>
        </div>
        <h3 className={`${isFeatured ? 'text-xl' : 'text-lg'} font-semibold text-slate-900 mb-1`}>
          {title}
        </h3>
        <p className="text-slate-600 text-sm line-clamp-2">{description}</p>
      </div>

      <div className={`flex-shrink-0 flex flex-col items-end gap-2 w-full md:w-auto mt-4 md:mt-0 ${isFeatured ? 'border-t border-slate-100 md:border-t-0 pt-4 md:pt-0' : 'pt-3 border-t border-slate-100'}`}>
        <div className={`${statusStyles[status]} border px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5`}>
          {status === 'Processing' && <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />}
          {status === 'Completed' && <span className="material-symbols-outlined text-[12px]">check_circle</span>}
          {status}
        </div>
        {!isFeatured && (
          <span className="material-symbols-outlined text-blue-700 cursor-pointer hover:opacity-80">chevron_right</span>
        )}
        {isFeatured && (
          <button className="text-blue-700 text-sm font-semibold hover:underline mt-2">View Details</button>
        )}
      </div>
    </motion.div>
  );
};

// --- Main Page Component ---

export default function CitizenDashboard() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
  });

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] font-sans flex flex-col">
      {/* TopNavBar */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 sticky top-0 z-50 px-6 py-3 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-6">
          <span className="text-xl font-bold tracking-tight text-blue-900 dark:text-blue-50">SIPEMAS</span>
          <nav className="hidden md:flex gap-4 text-sm font-medium">
            <NavLink href="#" label="Dashboard" isActive />
            <NavLink href="#" label="My Reports" />
            <NavLink href="#" label="Help" />
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-slate-600 hover:text-blue-700 transition-colors">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="text-slate-600 hover:text-blue-700 transition-colors">
            <span className="material-symbols-outlined">settings</span>
          </button>
          <div className="w-8 h-8 rounded-full border border-slate-200 overflow-hidden bg-slate-100">
            <img 
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-8 md:grid md:grid-cols-12 gap-6">
        
        {/* Left Column: Report Form */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="col-span-12 lg:col-span-4 mb-8 lg:mb-0"
        >
          <section className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-900"></div>
            <h2 className="text-xl font-bold text-slate-900 mb-6">Submit New Report</h2>
            
            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1" htmlFor="title">Report Title</label>
                <input
                  id="title"
                  className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-2 focus:ring-blue-900 outline-none transition-all text-sm"
                  placeholder="Briefly describe the issue"
                  type="text"
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1" htmlFor="category">Category</label>
                <select
                  id="category"
                  className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-2 focus:ring-blue-900 outline-none transition-all text-sm bg-white"
                  onChange={(e) => setFormData({...formData, category: e.target.value})}
                >
                  <option value="">Select a category</option>
                  <option value="infrastructure">Infrastructure & Roads</option>
                  <option value="security">Public Security</option>
                  <option value="sanitation">Sanitation & Waste</option>
                  <option value="utilities">Public Utilities</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1" htmlFor="desc">Detailed Description</label>
                <textarea
                  id="desc"
                  rows={4}
                  className="w-full px-3 py-2 border border-slate-200 rounded focus:ring-2 focus:ring-blue-900 outline-none transition-all text-sm resize-none"
                  placeholder="Provide specific details..."
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Evidence (Optional)</label>
                <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 text-center hover:bg-slate-50 transition-colors cursor-pointer group">
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-blue-900 text-3xl">cloud_upload</span>
                  <p className="text-sm text-slate-500 group-hover:text-blue-900 mt-2">Click or drag image to upload</p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                className="mt-2 w-full bg-blue-900 text-white py-3 rounded font-bold text-sm hover:bg-blue-800 transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">send</span>
                Submit Report
              </motion.button>
            </form>
          </section>
        </motion.div>

        {/* Right Column: Reports List */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-slate-900">Recent Reports</h2>
            <button className="text-blue-700 font-bold text-sm hover:underline flex items-center gap-1">
              View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ReportCard
              isFeatured
              category="Infrastructure"
              date="Oct 24, 2024"
              title="Pothole on Main Street"
              description="Large pothole forming near the intersection of Main St and 5th Ave, causing traffic delays and potential damage to vehicles."
              status="Processing"
            />
            <ReportCard
              category="Sanitation"
              date="Oct 26, 2024"
              title="Missed Trash Collection"
              description="Trash was not collected on the scheduled Tuesday route for the entirety of Oakwood block."
              status="Pending"
            />
            <ReportCard
              category="Utilities"
              date="Oct 15, 2024"
              title="Broken Streetlight"
              description="Streetlight outside building 4A is flickering and frequently turns off completely at night."
              status="Completed"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 px-6 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500">
          <div className="font-bold text-slate-900">
            © 2024 SIPEMAS Institutional Reporting System. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-700">Privacy Policy</a>
            <a href="#" className="hover:text-blue-700">Terms of Service</a>
            <a href="#" className="hover:text-blue-700">Public Transparency</a>
            <a href="#" className="hover:text-blue-700">Contact Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}