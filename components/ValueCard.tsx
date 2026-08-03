"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ValueCardProps {
  title: string;
  desc: string;
}

export default function ValueCard({ title, desc }: ValueCardProps) {
  const [active, setActive] = useState(false);

  return (
    <motion.button
      type="button"
      onClick={() => setActive((v) => !v)}
      whileTap={{ scale: 0.96 }}
      className="text-left w-full"
    >
      <motion.div
        animate={{ width: active ? 48 : 40 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`h-1 mb-4 rounded-full ${active ? "bg-teal" : "bg-accent"}`}
      />
      <motion.div
        animate={{
          y: active ? -4 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        <h3 className="font-bold text-ink mb-2 flex items-center gap-2">
          {title}
        </h3>
        <p className="text-muted text-sm">{desc}</p>

        <motion.div
          initial={false}
          animate={{
            height: active ? "auto" : 0,
            opacity: active ? 1 : 0,
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="overflow-hidden"
        >
          <p className="text-xs text-teal font-medium mt-3 pt-3 border-t border-teal/20">
            This is a core part of how every project at Brine Sea is planned and delivered.
          </p>
        </motion.div>
      </motion.div>
    </motion.button>
  );
}