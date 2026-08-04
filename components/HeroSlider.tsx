"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const SLIDES = [
  {
    kicker: "",
    headline: "SAFE OPERATIONS; FAST TURNAROUND; TRUSTED SUPPORT;",
    description:
      "One contract instead of many vendors ,Engineering-led ship repair, Chandling and consultancy across Colombo, Hambantota, Galle and Trincomalee.",
    image: "/hero-1.jpg",
  },
  {
    kicker: "",
    headline: "EVERYTHING YOUR VESSEL NEEDS, ON TIME.",
    description:
      "Reliable port-call supply chains built for shipping lines and shipowners.",
    image: "/hero-2.jpg",
  },
  {
    kicker: "",
    headline: "READY WHEN YOUR FLEET NEEDS US.",
    description:
      "Round the clock technical and emergency response across the Indian Ocean corridor.",
    image: "/hero-3.jpg",
  },
  {
    kicker: "",
    headline: "EXPERTISE THAT PROTECTS YOUR ASSETS.",
    description:
      "Independent marine consultancy for owners, operators and government agencies.",
    image: "/hero-4.jpg",
  },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  const slide = SLIDES[active];

  return (
    <section className="relative bg-navy text-white min-h-[640px] flex items-end overflow-hidden">
      {SLIDES.map((s, i) => (
        <Image
          key={s.image}
          src={s.image}
          alt=""
          fill
          priority={i === 0}
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-purple/25 to-gold/10" />

      <div className="relative container-page pb-20 pt-40">
        <p className="eyebrow">{slide.kicker}</p>
        <h1 className="text-4xl md:text-6xl font-extrabold max-w-3xl leading-tight text-white">
  {slide.headline}
</h1>
        <p className="text-white max-w-xl mt-6 text-lg">{slide.description}</p>
        <div className="flex flex-wrap gap-4 mt-8">
          <Link href="/contact" className="btn-primary">
            Request a Proposal
          </Link>
          <Link href="/contact" className="btn-outline">
            Talk to an Expert
          </Link>
        </div>
        <div className="flex gap-2 mt-12">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === active ? "w-8 bg-accent" : "w-4 bg-white"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}