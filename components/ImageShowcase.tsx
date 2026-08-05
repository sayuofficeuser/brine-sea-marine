"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const CARDS = [
  { title: "Ship Repair Workshop", image: "/images/gallery/ship-repair-workshop.jpg" },
  { title: "Port-Side Chandling", image: "/images/gallery/port-side-chandling.jpg" },
  { title: "Vessel Inspection", image: "/images/gallery/vessel-inspection.jpg" },
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
              whileHover={{ y: -8, boxShadow: "0 20px 40px -12px rgba(0,0,0,0.18)" }}
              className="group rounded-lg overflow-hidden border border-line bg-white"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-ink transition-colors group-hover:text-accent">
                  {card.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}