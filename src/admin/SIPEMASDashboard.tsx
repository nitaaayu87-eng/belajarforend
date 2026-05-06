"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  BarChart3, 
  Settings, 
  HelpCircle, 
  LogOut, 
  Plus, 
  Search, 
  Bell, 
  TrendingUp, 
  FileCheck, 
  Clock, 
  Filter, 
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  HardHat,
  Droplets,
  ShieldAlert,
  Leaf,
  Menu
} from 'lucide-react';

/**
 * SIPEMAS Admin Dashboard
 * * DESIGN DIRECTION: Industrial/Refined [cite: 1]
 * Purpose: Government Institutional Reporting Management
 * Stack: Next.js, TypeScript, Tailwind CSS, Framer Motion [cite: 1, 2]
 */

// --- Types ---

interface Report {
  id: string;
  category: string;
  location: string;
  date: string;
  status: 'Pending' | 'In Progress' | 'Resolved';
  icon: React.ReactNode;
  iconColor: string;
}

// --- Mock Data ---

const REPORTS: Report[] = [
  { id: '#REP-8902', category: 'Infrastructure', location: 'Central District', date: 'Today, 09:42 AM', status: 'Pending', icon: <HardHat size={16} />, iconColor: 'text-blue-600' },
  { id: '#REP-8901', category: 'Public Utilities', location: 'Westside', date: 'Yesterday, 14:15 PM', status: 'In Progress', icon: <Droplets size={16} />, iconColor: 'text-indigo-600' },
  { id: '#REP-8899', category: 'Security', location: 'North Sector', date: 'Oct 24, 08:30 AM', status: 'Resolved', icon: <ShieldAlert size={16} />, iconColor: 'text-orange-600' },
  { id: '#REP-8895', category: 'Environment', location: 'East Valley', date: 'Oct 23, 11:05 AM', status: 'Pending', icon: <Leaf size={16} />, iconColor: 'text-emerald-600' },
];

const SIPEMASDashboard = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  // Animation Variants [cite: 1]
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } as const }
  };

  return (
    <div className="flex h-screen bg-[#f8f9ff] text-[#0b1c30] overflow-hidden font-sans selection:bg-blue-100">
      
      {/* Sidebar - Desktop */}
      <nav className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200 z-40">
        <div className="px-6 py-8 border-b border-slate-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#00236f] text-white flex items-center justify-center shadow-lg shadow-blue-900/20">
              <ShieldAlert size={20} strokeWidth={2.5} />
            </div>
            <div>
              <h2 className="text-sm font-black text-[#00236f] uppercase tracking-tight">Admin Portal</h2>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Authority</p>
            </div>
          </div>
          <button className="w-full bg-[#00236f] hover:bg-[#1e3a8a] text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95">
            <Plus size={16} />
            New Broadcast
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 space-y-1">
          {[
            { label: 'Overview', icon: <LayoutDashboard size={18} /> },
            { label: 'All Complaints', icon: <FileText size={18} /> },
            { label: 'User Management', icon: <Users size={18} /> },
            { label: 'Analytics', icon: <BarChart3 size={18} /> },
            { label: 'System Logs', icon: <Settings size={18} /> },
          ].map((nav) => (
            <button 
              key={nav.label}
              onClick={() => setActiveTab(nav.label)}
              className={`w-full flex items-center gap-3 px-6 py-3 text-sm font-semibold transition-all border-r-4 ${
                activeTab === nav.label 
                  ? 'bg-blue-50 text-[#00236f] border-[#00236f]' 
                  : 'text-slate-500 border-transparent hover:bg-slate-50 hover:text-slate-800'
              }`}
            >
              {nav.icon}
              {nav.label}
            </button>
          ))}
        </div>

        <div className="p-4 border-t border-slate-100 space-y-1">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold text-slate-500 hover:bg-slate-50 rounded-lg transition-all">
            <HelpCircle size={18} />
            Support
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-lg transition-all">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 bg-[#f8f9ff]">
        
        {/* Top App Bar */}
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md px-8 py-4 border-b border-slate-200/60 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="md:hidden text-slate-600">
              <Menu size={24} />
            </button>
            <h1 className="text-xl font-bold text-[#0b1c30] hidden md:block">Dashboard Overview</h1>
            <h1 className="text-lg font-bold text-[#0b1c30] md:hidden">Admin Portal</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                className="pl-10 pr-4 py-2 bg-slate-100 border border-transparent rounded-full text-sm focus:bg-white focus:border-[#00236f] focus:ring-4 focus:ring-blue-100 outline-none w-64 transition-all"
                placeholder="Search reports..." 
                type="text"
              />
            </div>
            <button className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-all relative">
              <Bell size={20} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-600 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        <div className="p-8 flex-1 overflow-y-auto space-y-8 max-w-[1400px] mx-auto w-full">
          
          {/* Statistics Grid */}
          <motion.section 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { label: 'Total Reports', value: '4,289', change: '+12%', trend: 'up', icon: <FileText size={24} />, color: 'bg-blue-50 text-blue-700' },
              { label: 'Pending Action', value: '842', change: '+5%', trend: 'up', icon: <Clock size={24} />, color: 'bg-red-50 text-red-700' },
              { label: 'Resolved', value: '3,105', rate: '72%', trend: 'progress', icon: <FileCheck size={24} />, color: 'bg-emerald-50 text-emerald-700' },
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                variants={item}
                className="bg-white rounded-2xl border border-slate-200/60 p-6 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all group relative overflow-hidden"
              >
                <div className="flex items-start justify-between relative z-10">
                  <div>
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                    <h3 className="text-3xl font-black text-[#0b1c30]">{stat.value}</h3>
                  </div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform ${stat.color}`}>
                    {stat.icon}
                  </div>
                </div>
                
                <div className="mt-4 flex items-center gap-2 relative z-10">
                  {stat.trend === 'progress' ? (
                    <div className="w-full flex items-center gap-3">
                      <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: stat.rate }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-emerald-600 rounded-full"
                        />
                      </div>
                      <span className="text-xs font-bold text-emerald-700">{stat.rate} Rate</span>
                    </div>
                  ) : (
                    <>
                      <TrendingUp size={14} className={stat.trend === 'up' ? 'text-emerald-600' : 'text-red-600'} />
                      <span className={`text-xs font-bold ${stat.trend === 'up' ? 'text-emerald-600' : 'text-red-600'}`}>{stat.change}</span>
                      <span className="text-xs font-medium text-slate-400">vs last month</span>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.section>

          {/* Incoming Reports Table */}
          <motion.section 
            variants={item}
            initial="hidden"
            animate="show"
            className="bg-white rounded-2xl border border-slate-200/60 shadow-sm overflow-hidden"
          >
            <div className="px-6 py-5 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-lg font-bold text-[#0b1c30]">Incoming Reports</h2>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-slate-600 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all">
                  <Filter size={14} />
                  Filter
                </button>
                <button className="flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-slate-600 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all">
                  <ArrowUpDown size={14} />
                  Sort
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-100 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                    <th className="px-6 py-4">Report ID</th>
                    <th className="px-6 py-4">Category</th>
                    <th className="px-6 py-4">Location</th>
                    <th className="px-6 py-4">Date Submitted</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {REPORTS.map((report) => (
                    <tr key={report.id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-6 py-5">
                        <span className="text-sm font-bold text-[#00236f]">{report.id}</span>
                      </td>
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2.5">
                          <div className={`p-1.5 rounded-lg bg-slate-100 ${report.iconColor}`}>
                            {report.icon}
                          </div>
                          <span className="text-sm font-semibold text-slate-700">{report.category}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span className="text-sm font-medium text-slate-500">{report.location}</span>
                      </td>
                      <td className="px-6 py-5">
                        <span className="text-sm font-medium text-slate-500">{report.date}</span>
                      </td>
                      <td className="px-6 py-5">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider ${
                          report.status === 'Pending' ? 'bg-red-50 text-red-700' :
                          report.status === 'In Progress' ? 'bg-blue-50 text-blue-700' :
                          'bg-emerald-50 text-emerald-700'
                        }`}>
                          {report.status}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button className="px-4 py-2 text-xs font-bold text-[#00236f] border border-blue-100 rounded-xl hover:bg-[#00236f] hover:text-white hover:border-[#00236f] transition-all">
                          {report.status === 'Resolved' ? 'View' : 'Review'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">Page 1 of 84</span>
              <div className="flex gap-1.5">
                <button className="p-2 rounded-lg border border-slate-200 text-slate-400 hover:text-[#00236f] hover:bg-white transition-all disabled:opacity-30" disabled>
                  <ChevronLeft size={16} />
                </button>
                {[1, 2, 3].map((num) => (
                  <button 
                    key={num} 
                    className={`w-9 h-9 flex items-center justify-center rounded-lg text-xs font-bold transition-all ${
                      num === 1 ? 'bg-[#00236f] text-white shadow-md shadow-blue-900/20' : 'bg-white border border-slate-200 text-slate-500 hover:border-[#00236f] hover:text-[#00236f]'
                    }`}
                  >
                    {num}
                  </button>
                ))}
                <button className="p-2 rounded-lg border border-slate-200 text-slate-500 hover:text-[#00236f] hover:bg-white transition-all">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </motion.section>
        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-slate-200 px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 mt-auto">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center md:text-left">
            © 2024 SIPEMAS Institutional Reporting System. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            {['Privacy Policy', 'Terms of Service', 'Transparency', 'Contact'].map((link) => (
              <a key={link} href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#00236f] transition-colors">{link}</a>
            ))}
          </div>
        </footer>
      </main>
    </div>
  );
};

export default SIPEMASDashboard;