import React from 'react';
import { motion } from 'framer-motion';

/**
 * SIPEMAS - Sistem Pelaporan Masyarakat Terpadu
 * * Tech Stack: 
 * - Vite + React (TypeScript)
 * - Tailwind CSS
 * - Framer Motion
 */

// --- Types & Interfaces ---
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
}

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  iconBg: string;
  iconColor: string;
  delay?: number;
}

// --- Sub-Components ---
const NavLink: React.FC<NavLinkProps> = ({ href, children, active }) => (
  <a
    href={href}
    className={`transition-colors cursor-pointer active:opacity-80 pb-1 ${
      active 
        ? "text-[#00236f] border-b-2 border-[#00236f]" 
        : "text-[#757682] hover:text-[#00236f]"
    }`}
  >
    {children}
  </a>
);

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, iconBg, iconColor, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-white p-8 rounded-xl border border-[#c5c5d3] shadow-sm hover:shadow-lg transition-shadow"
  >
    <div className={`w-12 h-12 rounded-lg ${iconBg} flex items-center justify-center ${iconColor} mb-6`}>
      <span className="material-symbols-outlined text-[24px]">{icon}</span>
    </div>
    <h3 className="text-xl font-semibold text-[#0b1c30] mb-3">{title}</h3>
    <p className="text-base text-[#444651] leading-relaxed">{description}</p>
  </motion.div>
);

// --- Main Page Component ---
const SipemasLanding: React.FC = () => {
  return (
    <div className="bg-[#f8f9ff] text-[#0b1c30] font-sans antialiased min-h-screen">
      {/* TopNavBar */}
      <nav className="bg-white text-[#00236f] text-sm font-medium w-full border-b border-[#d3e4fe] shadow-sm sticky top-0 z-50 flex justify-between items-center px-6 py-3">
        <div className="flex items-center gap-6">
          <div className="text-xl font-bold tracking-tight text-[#00236f]">SIPEMAS</div>
          <div className="hidden md:flex gap-4">
            <NavLink href="#" active>Dashboard</NavLink>
            <NavLink href="#">My Reports</NavLink>
            <NavLink href="#">Help</NavLink>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {['search', 'notifications', 'settings'].map((icon) => (
            <button key={icon} className="text-[#757682] hover:text-[#00236f] transition-colors w-8 h-8 rounded-full bg-[#eff4ff] hover:bg-[#e5eeff] flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">{icon}</span>
            </button>
          ))}
          <div className="w-8 h-8 rounded-full bg-[#1e3a8a] overflow-hidden ml-2 cursor-pointer border border-[#d3e4fe]">
            <img 
              alt="User Profile" 
              className="w-full h-full object-cover" 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
            />
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden bg-white pt-20 pb-24 lg:pt-32 lg:pb-40 border-b border-[#d3e4fe]">
          {/* Background Blobs */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#00236f] to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#4e45d5] to-transparent rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
          </div>

          <div className="max-w-[1280px] mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e5eeff] border border-[#d3e4fe] w-fit">
                <span className="w-2 h-2 rounded-full bg-[#00236f] animate-pulse"></span>
                <span className="text-[12px] font-semibold text-[#00236f] uppercase tracking-wider">Transparansi Pelayanan Publik</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-[#0b1c30] leading-[1.2] tracking-tight">
                Laporkan Masalah Lingkungan Anda dengan <span className="text-[#00236f]">Mudah dan Cepat</span>
              </h1>
              
              <p className="text-lg text-[#444651] max-w-xl leading-relaxed">
                SIPEMAS (Sistem Pelaporan Masyarakat Terpadu) menjembatani suara warga dengan pemerintah. Pantau status laporan Anda secara real-time untuk lingkungan yang lebih baik.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-4">
                <button className="px-6 py-3 rounded bg-[#00236f] hover:bg-[#264191] text-white font-medium transition-all shadow-sm hover:shadow-md flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">add_circle</span>
                  Laporkan Sekarang
                </button>
                <button className="px-6 py-3 rounded bg-white border border-[#757682] hover:border-[#00236f] text-[#00236f] font-medium transition-all shadow-sm hover:bg-[#eff4ff] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">search</span>
                  Cek Status Laporan
                </button>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 mt-8 pt-8 border-t border-[#d3e4fe]">
                <div>
                  <p className="text-3xl font-semibold text-[#00236f]">10k+</p>
                  <p className="text-xs font-semibold text-[#757682] uppercase">Laporan Selesai</p>
                </div>
                <div className="w-px h-12 bg-[#d3e4fe]"></div>
                <div>
                  <p className="text-3xl font-semibold text-[#4e45d5]">24 Jam</p>
                  <p className="text-xs font-semibold text-[#757682] uppercase">Rata-rata Respon</p>
                </div>
                <div className="w-px h-12 bg-[#d3e4fe]"></div>
                <div>
                  <p className="text-3xl font-semibold text-[#0b1c30]">98%</p>
                  <p className="text-xs font-semibold text-[#757682] uppercase">Tingkat Kepuasan</p>
                </div>
              </div>
            </motion.div>

            {/* Hero Image / Dashboard Preview */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl border border-[#d3e4fe] group"
            >
              <img 
                alt="Dashboard Preview" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="https://images.unsplash.com/photo-1551288049-bbda0231f67b?auto=format&fit=crop&q=80&w=1000" 
              />
              
              {/* Floating Glass Elements */}
              <motion.div 
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute top-6 left-6 right-6 p-4 rounded-lg bg-white/80 backdrop-blur-md border border-white/50 shadow-sm flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#ffdad6] text-[#93000a] flex items-center justify-center">
                    <span className="material-symbols-outlined">report_problem</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#0b1c30]">Jalan Berlubang</p>
                    <p className="text-xs text-[#757682]">Jl. Sudirman No. 45</p>
                  </div>
                </div>
                <div className="px-2 py-1 rounded-full bg-[#e5eeff] text-[#00236f] text-xs font-medium">Diproses</div>
              </motion.div>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="absolute bottom-6 right-6 p-4 rounded-lg bg-white/90 backdrop-blur-md border border-[#d3e4fe] shadow-sm max-w-[240px]"
              >
                <p className="text-xs font-semibold text-[#757682] mb-2 uppercase">Update Terakhir</p>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#4e45d5]" >check_circle</span>
                  <p className="text-sm text-[#0b1c30]">Lampu jalan Pangeran Antasari telah diperbaiki.</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-[#f8f9ff]">
          <div className="max-w-[1280px] mx-auto px-6">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold text-[#0b1c30] mb-4">Mengapa Menggunakan SIPEMAS?</h2>
              <p className="text-[#444651]">Sistem dirancang untuk memberikan kemudahan dan transparansi maksimal bagi masyarakat dalam melaporkan berbagai masalah infrastruktur dan layanan publik.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <FeatureCard 
                icon="speed"
                title="Pelaporan Cepat"
                description="Proses pelaporan hanya membutuhkan 3 langkah mudah. Sertakan foto, lokasi, dan deskripsi singkat, laporan Anda langsung masuk ke instansi terkait."
                iconBg="bg-[#1e3a8a]"
                iconColor="text-white"
                delay={0.1}
              />
              <FeatureCard 
                icon="visibility"
                title="Transparansi Status"
                description="Pantau setiap tahapan laporan Anda secara real-time. Dapatkan notifikasi saat status berubah dari Diterima, Diproses, hingga Selesai."
                iconBg="bg-[#6860ef]"
                iconColor="text-white"
                delay={0.2}
              />
              <FeatureCard 
                icon="shield"
                title="Keamanan Data"
                description="Identitas pelapor dapat dirahasiakan (opsi anonim). Data pribadi Anda dienkripsi dan dijamin keamanannya sesuai standar operasional."
                iconBg="bg-[#dce9ff]"
                iconColor="text-[#00236f]"
                delay={0.3}
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white text-[#00236f] text-[10px] w-full py-8 px-6 border-t border-[#d3e4fe] flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-bold text-[#0b1c30] text-sm">SIPEMAS</div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {['Privacy Policy', 'Terms of Service', 'Public Transparency', 'Contact Support'].map((item) => (
            <a key={item} className="text-[#757682] hover:text-[#00236f] transition-colors cursor-pointer" href="#">{item}</a>
          ))}
        </div>
        <div className="text-[#757682]">
          © 2024 SIPEMAS Institutional Reporting System. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default SipemasLanding;