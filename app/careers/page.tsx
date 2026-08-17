"use client";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CareersPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="CAREERS"
        title="Build your career with Brine Sea."
        description="We're always interested in hearing from qualified marine engineers and technical staff."
      />

      <section className="section-white !bg-gradient-to-br !from-yellow-300 !via-blue-300 !to-purple-600 py-20">
        <div className="container-page max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-gray-100/80 rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold text-navy mb-4">Open Positions</h2>
            <p className="text-muted leading-relaxed mb-6">
              No open positions are listed at this time. To register your
              interest, get in touch and we&apos;ll keep your details on file.
            </p>
            <Link href="/contact" className="btn-outline-navy">
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}