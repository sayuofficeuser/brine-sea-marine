import Image from "next/image";
import Link from "next/link";

export default function VisionMission() {
  return (
    <section className="relative min-h-[560px] flex items-center overflow-hidden">
      <Image
        src="/vision-mission.jpg"
        alt="Vessel at sea"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy/70" />

      <div className="relative container-page text-center max-w-3xl mx-auto py-24">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">
          Our Vision &amp; Mission
        </h2>
        <div className="w-16 h-1 bg-accent mx-auto my-6" />
        <p className="text-white/90 text-lg leading-relaxed">
          Our vision is to be the Indian Ocean corridor's trusted marine
          engineering partner ; delivering safe, transparent and
          engineering-led technical services. 
          <p>Our mission is to bring ship
          repair, chandling, consultancy and safety support together under
          one contract, so every port call moves faster and every client
          gets a partner they can rely on.</p>
        </p>
        <Link
          href="/about"
          className="mt-8 inline-block border border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-navy transition-colors"
        >
          Go to Top
        </Link>
      </div>
    </section>
  );
}