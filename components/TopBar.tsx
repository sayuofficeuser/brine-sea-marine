"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import LogoMark from "./LogoMark";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Our Crew", href: "/crew" },
  { label: "Careers", href: "/careers" },
];

export default function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
        scrolled ? "bg-navy shadow-md" : "bg-navy/95"
      }`}
    >
      <div className="container-page flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3">
          <LogoMark size={80} />
          <span className="text-white font-bold text-lg hidden sm:block">
            Brine Sea Marine Solutions
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href}>
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className={`inline-block text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-yellow-400"
                      : "text-white/85 hover:text-white hover:[filter:drop-shadow(0_0_6px_rgba(255,255,255,0.8))]"
                  }`}
                >
                  {link.label}
                </motion.span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary text-sm">
            Contact Us
          </Link>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-navy border-t border-white/10 px-6 pb-6">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block py-3 text-sm font-semibold border-b border-white/10 ${
                  isActive ? "text-yellow-400" : "text-white/85 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link href="/contact" className="btn-primary text-sm inline-block mt-4">
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}