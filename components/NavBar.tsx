"use client";
import { motion } from "framer-motion";

export function NavBar() {
  return (
    <header className="container section" style={{ paddingTop: "2rem" }}>
      <nav className="glass" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: ".9rem 1.1rem" }}>
        <motion.a href="#top" className="logo" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, ease: "easeOut" }}
          style={{ display: "inline-flex", alignItems: "center", gap: ".7rem", fontWeight: 600 }}>
          <Logo />
          <span>Intelliwave</span>
        </motion.a>
        <div style={{ display: "flex", alignItems: "center", gap: ".6rem" }}>
          <motion.a href="#features" className="muted" whileHover={{ opacity: .9 }}>
            Avantages
          </motion.a>
          <motion.a href="#process" className="muted" whileHover={{ opacity: .9 }}>
            M?thode
          </motion.a>
          <motion.a href="#cta" className="button" whileTap={{ scale: .98 }}>
            Parler ? un expert
          </motion.a>
        </div>
      </nav>
    </header>
  );
}

function Logo() {
  return (
    <svg width="20" height="20" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6ab3ff" />
          <stop offset="100%" stopColor="#8af4e2" />
        </linearGradient>
      </defs>
      <path d="M8 32c0-13.255 10.745-24 24-24s24 10.745 24 24-10.745 24-24 24S8 45.255 8 32Z" fill="url(#g)" opacity="0.18"/>
      <path d="M14 32c0-9.941 8.059-18 18-18s18 8.059 18 18-8.059 18-18 18S14 41.941 14 32Z" stroke="url(#g)" strokeWidth="2.5" opacity=".8"/>
      <path d="M22 36c3 2.4 7.2 2.4 10.2 0C34.2 34 38.4 34 41 36" stroke="#8af4e2" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}
