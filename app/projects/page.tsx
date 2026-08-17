"use client";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="PROJECTS"
        title="Delivered work across the Indian Ocean corridor."
        description="Project case studies will appear here as they're documented."
      />

      <section className="section-white !bg-gradient-to-br !from-yellow-200 !via-blue-200 !to-purple-200 py-20">
        <div className="container-page grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i, idx) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.12, ease: "easeOut" }}
              className="card !bg-gray-100/80"
            >
              <div className="h-40 bg-navy-light/10 rounded-md flex items-center justify-center mb-4">
                <span className="text-muted text-xs uppercase tracking-wide">
                  Placeholder — project photo
                </span>
              </div>
              <h3 className="font-bold text-navy mb-1">Project title to be added</h3>
              <p className="text-muted text-sm">Short project summary to be added.</p>
            </motion.div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}