"use client";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";

const INDUSTRIES = [
  { title: "Shipping Lines & Shipowners", desc: "Fast port-call turnaround and transparent scopes for commercial fleets." },
  { title: "Port Authorities", desc: "Technical and engineering support for port infrastructure operations." },
  { title: "Offshore & Oil/Gas Operators", desc: "Specialised support for offshore assets and operations." },
  { title: "Government & Navy", desc: "Compliant, accountable technical services for public sector fleets." },
  { title: "Fisheries", desc: "Maintenance and supply support for fishing fleet operators." },
];

export default function IndustriesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="INDUSTRIES"
        title="Trusted across the maritime sector."
        description="We work with organisations that need reliable technical partners, not just vendors."
      />

      <section className="section-white !bg-gradient-to-br !from-yellow-200 !via-blue-200 !to-purple-200 py-20">
        <div className="container-page grid md:grid-cols-2 gap-x-12 gap-y-10">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="bg-gray-100/80 rounded-xl p-7"
            >
              <h3 className="font-bold text-lg text-navy mb-2">{ind.title}</h3>
              <p className="text-muted text-sm">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}