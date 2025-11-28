"use client";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="container section" id="top" style={{ paddingTop: "3rem" }}>
      <div style={{ display: "grid", gap: "1.6rem", textAlign: "center" }}>
        <motion.h1 className="title" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease: "easeOut" }}
          style={{ fontWeight: 700 }}>
          Des chatbots IA ?l?gants, con?us pour convertir.
        </motion.h1>
        <motion.p className="subtitle muted" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .15, duration: .7 }}
          style={{ maxWidth: 760, marginInline: "auto", lineHeight: 1.6 }}>
          Intelliwave con?oit des assistants conversationnels sur mesure, align?s sur votre marque et optimis?s pour la performance.
        </motion.p>
        <div style={{ display: "flex", justifyContent: "center", gap: ".7rem", marginTop: ".6rem" }}>
          <motion.a href="#cta" className="button" whileTap={{ scale: .98 }}>
            D?marrer votre projet
          </motion.a>
          <motion.a href="#chat" className="button" whileTap={{ scale: .98 }} style={{ background: "#121725", borderColor: "#2a3347" }}>
            Essayer le chatbot
          </motion.a>
        </div>
        <motion.div initial={{ opacity: 0, scale: .98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: .4 }} transition={{ duration: .7 }}
          className="glass" style={{ marginTop: "2.2rem", padding: "1.2rem", borderRadius: 18 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem" }}>
            {[
              { k: "+42%", l: "Taux de conversion" },
              { k: "-35%", l: "Co?ts support" },
              { k: "24h/7j", l: "Disponibilit?" },
            ].map((item, i) => (
              <motion.div key={item.k} initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * .05, duration: .6 }}
                style={{ textAlign: "center", padding: "1rem" }}>
                <div style={{ fontSize: "1.8rem", fontWeight: 700 }}>{item.k}</div>
                <div className="muted" style={{ marginTop: ".2rem" }}>{item.l}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
