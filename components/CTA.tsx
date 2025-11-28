"use client";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="container section" id="cta">
      <motion.div className="glass" initial={{ opacity: 0, scale: .98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: .6 }}
        style={{ padding: "1.6rem", display: "grid", gap: ".9rem", textAlign: "center" }}>
        <h2 className="title" style={{ fontSize: "2.2rem" }}>Pr?t ? surfer la vague IA ?</h2>
        <p className="muted">Parlons de vos objectifs et concevons un chatbot qui vous ressemble.</p>
        <div style={{ display: "flex", justifyContent: "center", gap: ".7rem", marginTop: ".6rem" }}>
          <a className="button" href="#chat">Essayer le widget</a>
          <a className="button" href="mailto:hello@intelliwave.ai">Contact</a>
        </div>
      </motion.div>
    </section>
  );
}
