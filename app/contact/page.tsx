"use client";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="CONTACT"
        title="Get in touch."
        description="Reach out for a proposal, an urgent technical request, or a general enquiry."
      />

      <section className="section-white !bg-gradient-to-br !from-yellow-200 !via-blue-200 !to-purple-200 py-20">
        <div className="container-page grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-gray-100/80 rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold text-navy mb-6">
              Contact Details
            </h2>
            <ul className="space-y-4 text-muted">
              <li>
                <span className="font-semibold text-ink block">Address</span>
                <span className="italic">No. 24, Marine Drive, Colombo 03, Sri Lanka.</span>
              </li>
              <li>
                <span className="font-semibold text-ink block">Phone</span>
                <span className="italic">+94 11 234 5678</span>
              </li>
              <li>
                <span className="font-semibold text-ink block">Email</span>
                <span className="italic">info@brineseamarine.com</span>
              </li>
              <li>
                <span className="font-semibold text-ink block">WhatsApp</span>
                <span className="italic">+94 11 234 5678</span>
              </li>
              <li>
                <span className="font-semibold text-ink block">
                  24-Hour Hotline
                </span>
                <span className="italic">[to be provided]</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="bg-gray-100/80 rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold text-navy mb-6">
              Send an Enquiry
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full name"
                className="w-full border border-line rounded-md px-4 py-3 text-sm focus:outline-none focus:border-accent bg-white"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full border border-line rounded-md px-4 py-3 text-sm focus:outline-none focus:border-accent bg-white"
              />
              <textarea
                placeholder="Message"
                rows={5}
                className="w-full border border-line rounded-md px-4 py-3 text-sm focus:outline-none focus:border-accent bg-white"
              />
              <button type="submit" className="btn-primary">
                Send Message
              </button>
              <p className="placeholder-note">
                Form submission handling (email/API endpoint) to be
                connected once decided.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}