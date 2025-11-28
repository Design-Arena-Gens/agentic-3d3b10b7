"use client";
import { motion } from "framer-motion";

const steps = [
  { n: 1, t: "Exploration", d: "Cadrage des objectifs, canaux, donn?es et KPI." },
  { n: 2, t: "Design", d: "Script, personnalit?, prompts et garde-fous." },
  { n: 3, t: "Int?gration", d: "Connecteurs, bases de connaissances, CRM, analytics." },
  { n: 4, t: "Pilotage", d: "Monitoring, it?rations et am?lioration continue." },
];

export function Process() {
  return (
    <section className="container section" id="process">
      <div style={{ display: "grid", gap: "1.2rem" }}>
        <motion.h2 className="title" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6 }}>Notre m?thode, tout en souplesse.</motion.h2>
        <div style={{ display: "grid", gap: ".9rem" }}>
          {steps.map((s, i) => (
            <motion.div key={s.n} className="glass" initial={{ x: -12, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: .55, delay: i * .05 }}
              style={{ padding: "1rem", display: "grid", gridTemplateColumns: "56px 1fr", alignItems: "center", gap: ".9rem" }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, display: "grid", placeItems: "center", color: "#0f141b",
                             background: "linear-gradient(180deg, #8af4e2, #6ab3ff)", fontWeight: 700 }}>
                {s.n}
              </div>
              <div>
                <div style={{ fontWeight: 600 }}>{s.t}</div>
                <div className="muted" style={{ marginTop: ".2rem" }}>{s.d}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
