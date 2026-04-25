"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ── types ──────────────────────────────────────────────────────────────────
interface FormState {
  name: string;
  email: string;
  password: string;
  agreed: boolean;
}

interface InputFieldProps {
  id: keyof Pick<FormState, "name" | "email" | "password">;
  label: string;
  type?: string;
  value: string;
  icon: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// ── SVG icons (inline, zero‑dep) ───────────────────────────────────────────
const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const LockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const CloseIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

// ── Mountain SVG background layers ────────────────────────────────────────
const MountainBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Sky gradient */}
    <div
      className="absolute inset-0"
      style={{
        background: "linear-gradient(180deg, #c0396b 0%, #e8527a 18%, #e8708a 35%, #d4567a 55%, #a63060 75%, #7a2050 100%)",
      }}
    />

    {/* Stars / noise overlay */}
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />

    {/* Far mountains – lightest purple */}
    <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 500" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 500 L0 320 L80 270 L160 230 L240 190 L320 210 L400 170 L480 140 L540 160 L600 120 L660 150 L720 100 L780 130 L840 110 L900 140 L960 120 L1040 160 L1120 180 L1200 150 L1300 200 L1380 240 L1440 220 L1440 500 Z"
        fill="rgba(160,60,120,0.55)"
      />
    </svg>

    {/* Mid mountains */}
    <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 500" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 500 L0 380 L60 340 L140 300 L200 320 L280 270 L360 290 L440 250 L500 280 L560 240 L620 260 L700 220 L760 250 L820 230 L900 260 L980 240 L1040 280 L1100 260 L1180 300 L1260 320 L1340 290 L1440 340 L1440 500 Z"
        fill="rgba(120,30,80,0.70)"
      />
    </svg>

    {/* Foreground mountains – darkest */}
    <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 500" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 500 L0 430 L80 400 L160 380 L220 400 L300 360 L380 380 L440 350 L520 370 L580 340 L660 360 L720 330 L800 360 L880 340 L960 370 L1040 350 L1120 380 L1200 360 L1280 390 L1360 410 L1440 390 L1440 500 Z"
        fill="rgba(80,15,50,0.85)"
      />
    </svg>

    {/* Lake / water reflection */}
    <div
      className="absolute bottom-0 left-0 right-0"
      style={{
        height: "22%",
        background: "linear-gradient(180deg, rgba(160,50,100,0.45) 0%, rgba(80,10,50,0.80) 100%)",
      }}
    />

    {/* Pine trees silhouette left */}
    <svg className="absolute bottom-0 left-0" style={{ width: "22%", height: "35%" }} viewBox="0 0 200 300" preserveAspectRatio="xMinYMax meet" xmlns="http://www.w3.org/2000/svg">
      {[20, 50, 80, 110, 140, 170].map((x, i) => (
        <g key={i} transform={`translate(${x},0)`}>
          <polygon points="0,300 18,180 36,300" fill="rgba(40,5,30,0.95)" />
          <polygon points="3,220 18,120 33,220" fill="rgba(40,5,30,0.95)" />
          <polygon points="6,170 18,80 30,170" fill="rgba(40,5,30,0.95)" />
        </g>
      ))}
    </svg>

    {/* Pine trees silhouette right */}
    <svg className="absolute bottom-0 right-0" style={{ width: "22%", height: "35%" }} viewBox="0 0 200 300" preserveAspectRatio="xMaxYMax meet" xmlns="http://www.w3.org/2000/svg">
      {[20, 50, 80, 110, 140, 170].map((x, i) => (
        <g key={i} transform={`translate(${x},0)`}>
          <polygon points="0,300 18,180 36,300" fill="rgba(40,5,30,0.95)" />
          <polygon points="3,220 18,120 33,220" fill="rgba(40,5,30,0.95)" />
          <polygon points="6,170 18,80 30,170" fill="rgba(40,5,30,0.95)" />
        </g>
      ))}
    </svg>
  </div>
);

// ── Navbar ─────────────────────────────────────────────────────────────────
const Navbar = () => {
  const links = ["Home", "Service", "Contact", "About"];
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-16 py-6"
    >
      <div className="flex gap-12">
        {links.map((link) => (
          <a
            key={link}
            href="#"
            className="text-white/80 hover:text-white text-sm tracking-widest uppercase transition-colors duration-200"
            style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", letterSpacing: "0.12em" }}
          >
            {link}
          </a>
        ))}
      </div>
      <motion.button
        whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.2)" }}
        whileTap={{ scale: 0.97 }}
        className="border border-white/60 text-white/90 px-5 py-1.5 rounded-full text-sm tracking-widest transition-colors duration-200"
        style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif", letterSpacing: "0.12em" }}
      >
        Login
      </motion.button>
    </motion.nav>
  );
};

// ── Input Field ────────────────────────────────────────────────────────────
const InputField = ({ id, label, type = "text", value, icon, onChange }: InputFieldProps) => {
  const [focused, setFocused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      className="relative group"
    >
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={label}
        autoComplete="off"
        className="w-full bg-white/10 border-b border-white/30 text-white placeholder-white/50 text-sm py-2.5 pr-8 pl-0 outline-none transition-all duration-300 focus:border-white/80 focus:bg-white/15"
        style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
      />
      <motion.span
        animate={{ color: focused ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.4)" }}
        className="absolute right-1 top-1/2 -translate-y-1/2"
      >
        {icon}
      </motion.span>
      {/* Focus underline */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-white"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: focused ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        style={{ originX: 0 }}
      />
    </motion.div>
  );
};

// ── Registration Card ──────────────────────────────────────────────────────
const RegistrationCard = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    password: "",
    agreed: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.password || !form.agreed) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const fields: InputFieldProps[] = [
    { id: "name", label: "Name", value: form.name, icon: <UserIcon />, onChange: handleChange },
    { id: "email", label: "Email", type: "email", value: form.email, icon: <MailIcon />, onChange: handleChange },
    { id: "password", label: "Password", type: "password", value: form.password, icon: <LockIcon />, onChange: handleChange },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-sm"
      style={{
        background: "rgba(255,255,255,0.12)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.25)",
        borderRadius: "16px",
        boxShadow: "0 8px 40px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.3)",
        padding: "36px 36px 32px",
      }}
    >
      {/* Close button */}
      <button
        className="absolute top-3.5 right-3.5 text-white/50 hover:text-white/90 transition-colors"
        aria-label="Close"
      >
        <CloseIcon />
      </button>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-white text-xl font-bold text-center mb-8 tracking-wide"
        style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
      >
        Registration
      </motion.h1>

      {/* Fields */}
      <div className="flex flex-col gap-6">
        {fields.map((f, i) => (
          <motion.div
            key={f.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.45 }}
          >
            <InputField {...f} />
          </motion.div>
        ))}
      </div>

      {/* Checkbox */}
      <motion.label
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65 }}
        className="flex items-center gap-2.5 mt-5 cursor-pointer group"
      >
        <div className="relative w-4 h-4 shrink-0">
          <input
            id="agreed"
            type="checkbox"
            checked={form.agreed}
            onChange={handleChange}
            className="sr-only"
          />
          <motion.div
            animate={{
              background: form.agreed ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.15)",
              borderColor: form.agreed ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.4)",
            }}
            transition={{ duration: 0.2 }}
            className="w-4 h-4 rounded-full border flex items-center justify-center"
          >
            <AnimatePresence>
              {form.agreed && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="w-2 h-2 rounded-full bg-pink-700"
                />
              )}
            </AnimatePresence>
          </motion.div>
        </div>
        <span
          className="text-white/60 text-xs tracking-wide"
          style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
        >
          I Agree to the Terms &amp; Conditions
        </span>
      </motion.label>

      {/* Register Button */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.4 }}
        whileHover={{ scale: 1.02, boxShadow: "0 6px 24px rgba(0,0,0,0.35)" }}
        whileTap={{ scale: 0.97 }}
        onClick={handleSubmit}
        className="mt-6 w-full py-2.5 rounded-full font-semibold text-sm tracking-widest uppercase transition-all duration-300"
        style={{
          fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
          background: submitted
            ? "rgba(255,255,255,0.6)"
            : "rgba(255,255,255,0.25)",
          color: submitted ? "#7a1040" : "rgba(255,255,255,0.95)",
          border: "1px solid rgba(255,255,255,0.4)",
          backdropFilter: "blur(8px)",
          letterSpacing: "0.15em",
        }}
      >
        {submitted ? "✓ Registered" : "Register"}
      </motion.button>

      {/* Login link */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.85 }}
        className="text-center text-white/50 text-xs mt-4"
        style={{ fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif" }}
      >
        Already have an account?{" "}
        <a href="#" className="text-white/80 hover:text-white underline underline-offset-2 transition-colors">
          Login
        </a>
      </motion.p>
    </motion.div>
  );
};

// ── Page ───────────────────────────────────────────────────────────────────
export default function RegistrationPage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden select-none">
      <MountainBackground />
      <Navbar />

      {/* Centered card */}
      <div className="relative z-10 flex items-center justify-center w-full px-4 pt-20 pb-8">
        <RegistrationCard />
      </div>
    </div>
  );
}