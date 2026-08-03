"use client";
import { motion } from "framer-motion";

const CARDS = [
  { title: "Ship Repair Workshop" },
  { title: "Port-Side Chandling" },
  { title: "Vessel Inspection" },
];

export default function ImageShowcase() {
  return (
    <section className="section-light pb-20">
      <div className="container-page">
        <div className="grid md:grid-cols-3 gap-6">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-lg overflow-hidden border border-line bg-white hover:-translate-y-1 transition-transform"
            >
              <div className="h-56 bg-navy-light/20 flex items-center justify-center">
                <span className="text-muted text-xs uppercase tracking-wide">
                  Placeholder photo — replace with real image
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-ink">{card.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
