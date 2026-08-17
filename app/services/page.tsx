"use client";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import EmergencyCTA from "@/components/EmergencyCTA";
import { motion } from "framer-motion";

const SERVICES = [
  {
    title: "Marine Engineering & Ship Repair",
    desc: "Hull, machinery and systems repair carried out by qualified marine engineers, planned around your port-call schedule to minimise downtime.",
  },
  {
    title: "Ship Chandling & Spares",
    desc: "Reliable sourcing and delivery of parts, provisions and technical stores, coordinated for fast turnaround at berth or anchorage.",
  },
  {
    title: "Marine Consultancy",
    desc: "Independent technical advice on vessel condition, compliance and operational decisions for owners, operators and regulators.",
  },
  {
    title: "Navigation, Safety & Offshore Support",
    desc: "Navigation equipment support, safety systems compliance, and technical support for offshore operations.",
  },
];

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="SERVICES"
        title="Engineering-led services for every port call."
        description="From routine maintenance to emergency response, our services are built around one principle: engineering decisions made by engineers."
      />

     <section className="section-white !bg-gradient-to-br !from-yellow-200 !via-blue-400 !to-purple-500 py-20"> 
        <div className="container-page grid md:grid-cols-2 gap-x-12 gap-y-14">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
              className="bg-gray-100/80 rounded-xl p-7"
            >
              <h3 className="font-bold text-xl text-navy mb-3">{s.title}</h3>
              <p className="text-muted leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <EmergencyCTA />
    </PageShell>
  );
}