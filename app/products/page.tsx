"use client";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import { Wrench, ShieldCheck, PackageSearch, Cpu, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

const CATEGORIES: { title: string; desc: string; icon: LucideIcon; watermark: string }[] = [
  { title: "Engine Room Spares", desc: "Filters, seals, gaskets and consumables for main and auxiliary machinery.", icon: Wrench, watermark: "text-sky-500/25" },
  { title: "Deck & Safety Equipment", desc: "Safety gear, ropes, fenders and deck hardware.", icon: ShieldCheck, watermark: "text-violet-500/25" },
  { title: "Provisions & Stores", desc: "Bonded and unbonded stores for crew and vessel operations.", icon: PackageSearch, watermark: "text-teal-600/25" },
  { title: "Technical Supplies", desc: "Instrumentation, electrical parts and general technical stock.", icon: Cpu, watermark: "text-pink-500/25" },
];

export default function ProductsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="PRODUCTS"
        title="Ship chandling and spares, ready for port call."
        description="A single point of contact for the parts, provisions and stores your vessel needs — sourced and delivered on schedule."
      />

      <section className="section-white !bg-gradient-to-br !from-yellow-200 !via-blue-400 !to-purple-500 py-20"> 
        <div className="container-page grid sm:grid-cols-2 gap-6">
          {CATEGORIES.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="card !bg-white relative overflow-hidden"
              >
                <Icon
                  size={90}
                  strokeWidth={1.5}
                  className={`absolute -right-4 -bottom-4 pointer-events-none ${c.watermark}`}
                  aria-hidden="true"
                />
                <h3 className="font-bold text-lg text-navy mb-2 relative">{c.title}</h3>
                <p className="text-muted text-sm relative">{c.desc}</p>
              </motion.div>
            );
          })}
        </div>
        <div className="container-page mt-10">
          <p className="placeholder-note">
            Full product catalogue and ordering details to be added once
            supplied.
          </p>
        </div>
      </section>
    </PageShell>
  );
}