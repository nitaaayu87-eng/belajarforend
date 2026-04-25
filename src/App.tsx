"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";

// ── Types ──────────────────────────────────────────────────────────────────────

interface MenuItem {
  id: number;
  name: string;
  description: string;
  rating: number;
  price: number;
  emoji: string;
  badge?: string;
}

interface NavLink {
  label: string;
  href: string;
}

// ── Data ───────────────────────────────────────────────────────────────────────

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
];

const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: "Noodles",
    description: "with dried shrimps",
    rating: 8.1,
    price: 12,
    emoji: "🍜",
  },
  {
    id: 2,
    name: "Spicy Noodle Soup",
    description: "with seafood and pork",
    rating: 9.2,
    price: 20,
    emoji: "🍲",
    badge: "Popular",
  },
  {
    id: 3,
    name: "Prawn Noodle Soup",
    description: "fresh prawns & broth",
    rating: 8.5,
    price: 16,
    emoji: "🍤",
  },
  {
    id: 3,
    name: "Prawn Noodle Soup",
    description: "fresh prawns & broth",
    rating: 8.5,
    price: 16,
    emoji: "🍤",
  },
  {
    id: 3,
    name: "Prawn Noodle Soup",
    description: "fresh prawns & broth",
    rating: 8.5,
    price: 16,
    emoji: "🍤",
  },
  {
    id: 3,
    name: "Prawn Noodle Soup",
    description: "fresh prawns & broth",
    rating: 8.5,
    price: 16,
    emoji: "🍤",
  },
];

const SERVICES = [
  { icon: "📋", label: "Online booking" },
  { icon: "🍽️", label: "Catering service" },
  { icon: "🎫", label: "Membership" },
  { icon: "🚚", label: "Delivery service" },
];

// ── Helpers ────────────────────────────────────────────────────────────────────

const StarRating = ({ count = 3 }: { count?: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="text-amber-500 text-sm">★</span>
    ))}
  </div>
);

// ── Sub-components ─────────────────────────────────────────────────────────────

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between transition-all duration-300 ${scrolled ? "bg-[#f5e6c8]/90 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
    >
      <motion.span
        className="text-xl font-black tracking-wide text-amber-700"
        whileHover={{ scale: 1.05 }}
      >
        FOODEAT
      </motion.span>

      <ul className="flex gap-8">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={label}>
            <motion.a
              href={href}
              className="text-sm font-medium text-stone-700 hover:text-amber-700 transition-colors relative group"
              whileHover={{ y: -1 }}
            >
              {label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-amber-600 group-hover:w-full transition-all duration-300" />
            </motion.a>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const bowlY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const bowlRotate = useTransform(scrollYProgress, [0, 1], [0, 8]);

  const headlineWords = ["Delicious", "Food", "Is", "Waiting", "For", "You"];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-16 px-8 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-48 h-48 bg-orange-100/60 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-center w-full max-w-5xl mx-auto gap-8">
        {/* Text */}
        <div className="flex-1 space-y-6">
          <h1 className="font-black text-stone-800 leading-none">
            {["Delicious Food", "Is Waiting", "For You"].map((line, lineIdx) => (
              <div key={lineIdx} className="overflow-hidden">
                <motion.div
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: lineIdx * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="text-4xl md:text-5xl lg:text-6xl"
                >
                  {line}
                </motion.div>
              </div>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="text-stone-500 max-w-xs leading-relaxed text-sm"
          >
            Quality service and great taste, always deliver a satisfying experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex gap-3 flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: "#b45309" }}
              whileTap={{ scale: 0.97 }}
              className="bg-amber-600 text-white font-semibold px-7 py-3 rounded-full text-sm shadow-md shadow-amber-200 transition-colors"
            >
              Food Menu
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04, borderColor: "#92400e" }}
              whileTap={{ scale: 0.97 }}
              className="border-2 border-stone-300 text-stone-700 font-semibold px-7 py-3 rounded-full text-sm transition-colors hover:border-amber-700"
            >
              Book a Table
            </motion.button>
          </motion.div>
        </div>

        {/* Bowl */}
        <motion.div
          style={{ y: bowlY, rotate: bowlRotate }}
          initial={{ scale: 0.7, opacity: 0, y: 40 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex-shrink-0"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-amber-100 to-orange-50 flex items-center justify-center shadow-2xl shadow-amber-200/60">
            <span className="text-[140px] select-none drop-shadow-xl">🥗</span>
          </div>
          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, type: "spring", stiffness: 300 }}
            className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
          >
            ⭐ Top Rated
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const MenuCard = ({ item, index }: { item: MenuItem; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-5 shadow-md shadow-amber-100/60 cursor-pointer overflow-hidden border border-amber-50"
    >
      {/* Hover bg */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.25 }}
      />

      {/* Badge */}
      <AnimatePresence>
        {item.badge && (
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-3 right-3 bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10"
          >
            {item.badge}
          </motion.span>
        )}
      </AnimatePresence>

      {/* Food image */}
      <motion.div
        animate={{ scale: hovered ? 1.06 : 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative z-10 flex justify-center mb-4"
      >
        <div className="w-28 h-28 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center shadow-inner">
          <span className="text-6xl select-none">{item.emoji}</span>
        </div>
      </motion.div>

      <div className="relative z-10 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-bold text-stone-800 text-base leading-tight">{item.name}</h3>
            <p className="text-stone-400 text-xs mt-0.5">{item.description}</p>
          </div>
          <span className="text-amber-600 font-black text-lg leading-tight">{item.rating}</span>
        </div>

        <div className="flex items-center justify-between pt-1">
          <StarRating />
          <span className="font-bold text-stone-700 text-sm">${item.price}</span>
        </div>
      </div>
    </motion.div>
  );
};

const MenuSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="menu" className="px-8 py-16 max-w-5xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-black text-stone-800">
          Top List –{" "}
          <span className="text-amber-600">Our mainstay menu</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {MENU_ITEMS.map((item, i) => (
          <MenuCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  );
};

const FriesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative px-8 py-16 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 overflow-hidden"
    >
      {/* Subtle pill bg */}
      <div className="absolute inset-0 bg-white/30 rounded-3xl pointer-events-none" />

      {/* Text */}
      <div className="flex-1 space-y-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-black text-stone-800 leading-tight"
        >
          Best Potatoes<br />For French Fries
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="text-stone-500 text-sm max-w-xs leading-relaxed"
        >
          Russet potatoes have a high starch content and low moisture, making them ideal for French fries.
        </motion.p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.25 }}
          whileHover={{ scale: 1.04, backgroundColor: "#b45309" }}
          whileTap={{ scale: 0.97 }}
          className="bg-amber-600 text-white font-semibold px-6 py-2.5 rounded-full text-sm shadow-md shadow-amber-200 transition-colors"
        >
          Order Now
        </motion.button>
      </div>

      {/* Fries emoji */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
        animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex-shrink-0"
      >
        <div className="w-52 h-52 rounded-full bg-gradient-to-br from-yellow-100 to-amber-50 flex items-center justify-center shadow-xl shadow-amber-100">
          <span className="text-[110px] select-none drop-shadow-md">🍟</span>
        </div>
      </motion.div>
    </section>
  );
};

const ServicesBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <footer
      ref={ref}
      className="border-t border-amber-100 px-8 py-8 max-w-5xl mx-auto"
    >
      <div className="flex flex-wrap justify-center gap-8">
        {SERVICES.map(({ icon, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -3, color: "#b45309" }}
            className="flex items-center gap-2 text-stone-500 text-sm font-medium cursor-default transition-colors"
          >
            <span className="text-lg">{icon}</span>
            {label}
          </motion.div>
        ))}
      </div>
    </footer>
  );
};

// ── Root Component ─────────────────────────────────────────────────────────────

export default function FoodEatPage() {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "#f7ead6" }}>
      {/* Global font import via style tag */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { font-family: 'DM Sans', sans-serif; }
        h1, h2, h3 { font-family: 'Playfair Display', serif; }
      `}</style>

      <Navbar />
      <HeroSection />

      <div className="max-w-5xl mx-auto px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent my-4" />
      </div>

      <MenuSection />
      <FriesSection />
      <ServicesBar />
    </div>
  );
}