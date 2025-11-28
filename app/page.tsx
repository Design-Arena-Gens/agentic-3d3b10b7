"use client";

import { motion } from "framer-motion";
import { NavBar } from "../components/NavBar";
import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Process } from "../components/Process";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { ChatWidget } from "../components/ChatWidget";

export default function HomePage() {
  return (
    <div className="page">
      <NavBar />
      <main>
        <Hero />
        <Features />
        <Process />
        <CTA />
      </main>
      <Footer />
      <ChatWidget />
      <motion.div
        className="bg-wave"
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </div>
  );
}
