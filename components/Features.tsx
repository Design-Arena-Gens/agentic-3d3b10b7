"use client";
import { motion } from "framer-motion";

const features = [
  { title: "Sur mesure", desc: "Personnalisation totale: tonalit?, connaissances, workflows." },
  { title: "Omnicanal", desc: "Site web, WhatsApp, Messenger, Intercom? en une base commune." },
  { title: "S?r et ma?tris?", desc: "Garde-fous, supervision humaine, conformit? RGPD." },
  { title: "Rapide ? int?grer", desc: "Widget l?ger, API claire, d?ploiement en jours, pas en mois." },
];

export function Features() {
  return (
    <section className="container section" id="features">
      <div style={{ display: "grid", gap: "1.2rem" }}>
        <motion.h2 className="title" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: .6 }}>Un design minimal. Un maximum d'impact.</motion.h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "1rem" }}>
          {features.map((f, i) => (
            <motion.article key={f.title} className="glass" initial={{ y: 14, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: .6, delay: i * .05 }}
              style={{ padding: "1.1rem", minHeight: 140 }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 600 }}>{f.title}</h3>
              <p className="muted" style={{ marginTop: ".45rem", lineHeight: 1.6 }}>{f.desc}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
