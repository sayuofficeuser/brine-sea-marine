"use client";
import Image from "next/image";
import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import { motion } from "framer-motion";

const GALLERY_IMAGES = [
  "/images/gallery-page/photo-1.jpg",
  "/images/gallery-page/photo-2.jpg",
  "/images/gallery-page/photo-3.jpg",
  "/images/gallery-page/photo-4.jpg",
  "/images/gallery-page/photo-5.jpg",
  "/images/gallery-page/photo-6.jpg",
];

export default function GalleryPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="GALLERY"
        title="Our work, on site and at sea."
        description="A look at our vessels, workshops, and operations."
      />

      <section className="section-white !bg-gradient-to-br !from-yellow-300 !via-blue-300 !to-purple-600 py-20">
        <div className="container-page grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="relative h-48 rounded-md overflow-hidden border border-line"
            >
              <Image
                src={src}
                alt={`Gallery photo ${i + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}