import Link from "next/link";
import { Phone, MapPin, Hash } from "lucide-react";
import LogoMark from "./LogoMark";
import { company } from "@/lib/data";

const COLUMNS = [
  {
    title: "About",
    links: [
      { label: "Our Company", href: "/about" },
      { label: "Vision & Values", href: "/about" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Marine Engineering & Ship Repair", href: "/services" },
      { label: "Ship Chandling & Spares", href: "/products" },
      { label: "Marine Consultancy", href: "/services" },
      { label: "Navigation & Safety Support", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Industries We Serve", href: "/industries" },
      { label: "Projects", href: "/projects" },
      { label: "Gallery", href: "/gallery" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Contact",
    links: [{ label: "Get in Touch", href: "/contact" }],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy-gradient text-white">
      <div className="container-page py-8 grid grid-cols-2 md:grid-cols-5 gap-10 items-start">
        <div className="col-span-2 md:col-span-1 -ml-3 md:-ml-6">
          <div className="flex justify-start">
            <LogoMark size={260} />
          </div>
          {/* Tagline */}
  <p className="text-sm text-white italic mt-2 max-w-xs">
    {company.tagline}
  </p>

          {/* Company details, styled as a compact info card */}
          <div className="border-l-2 border-teal/60 pl-4 py-0.5 space-y-2 mt-2 max-w-xs">
            <p className="text-sm font-semibold text-white leading-snug">
              {company.legalName}
            </p>
            <p className="flex items-start gap-2 text-xs text-white/60">
              <MapPin size={16} className="text-teal mt-0.5 shrink-0" />
              {company.address}
            </p>
            <p className="flex items-center gap-2 text-xs text-white/60">
              <Phone size={16} className="text-teal shrink-0" />
              <a href={`tel:${company.phone}`} className="hover:text-white">
                {company.phone}
              </a>
            </p>
            <p className="flex items-center gap-2 text-xs text-white/60">
              <Hash size={16} className="text-teal shrink-0" />
              Reg. No. {company.registrationNumber}
            </p>
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="font-bold text-sm uppercase tracking-wide mb-4 text-white/90">
              {col.title}
            </h4>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-4 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-xs">
          <p>
            © {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span>LinkedIn</span>
            <span>Facebook</span>
            <span>Instagram</span>
          </div>
        </div>
      </div>
    </footer>
  );
}