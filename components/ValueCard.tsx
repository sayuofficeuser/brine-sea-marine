"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ValueCardProps {
  title: string;
  desc: string;
  index?: number;
}

const ACCENTS = [
  { bar: "bg-sky-400", text: "text-sky-500", border: "border-sky-200" },
  { bar: "bg-violet-400", text: "text-violet-500", border: "border-violet-200" },
  { bar: "bg-teal-400", text: "text-teal-500", border: "border-teal-200" },
  { bar: "bg-amber-400", text: "text-amber-500", border: "border-amber-200" },
];

export default function ValueCard({ title, desc, index = 0 }: ValueCardProps) {
  const [active, setActive] = useState(false);
  const accent = ACCENTS[index % ACCENTS.length];

  return (
    <motion.button
      type="button"
      onClick={() => setActive((v) => !v)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.96 }}
      className="text-left w-full p-5 rounded-2xl bg-white/60 hover:bg-white hover:shadow-lg transition-shadow duration-300"
    >
      <motion.div
        animate={{ width: active ? 48 : 40 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`h-1 mb-4 rounded-full ${accent.bar}`}
      />
      <motion.div animate={{ y: active ? -2 : 0 }} transition={{ type: "spring", stiffness: 300, damping: 15 }}>
        <h3 className="font-bold text-ink mb-2">{title}</h3>
        <p className="text-muted text-sm">{desc}</p>

        <motion.div
          initial={false}
          animate={{ height: active ? "auto" : 0, opacity: active ? 1 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <p className={`text-xs font-medium mt-3 pt-3 border-t ${accent.border} ${accent.text}`}>
            This is a core part of how every project at Brine Sea is planned and delivered.
          </p>
        </motion.div>
      </motion.div>
    </motion.button>
  );
}