import Link from "next/link";

const SERVICES = [
  {
    title: "Marine Engineering & Ship Repair",
    desc: "Fast, engineering-led repair and maintenance for every port call.",
    href: "/services",
  },
  {
    title: "Ship Chandling & Spares",
    desc: "Reliable supply of parts, provisions and stores on schedule.",
    href: "/products",
  },
  {
    title: "Marine Consultancy",
    desc: "Independent technical advice for owners, operators and regulators.",
    href: "/services",
  },
  {
    title: "Navigation, Safety & Offshore Support",
    desc: "Compliance-ready safety systems and offshore operational support.",
    href: "/services",
  },
];

export default function ServicesGrid() {
  return (
    <section className="section-dark py-20">
      <div className="container-page">
        <p className="eyebrow">WHAT WE DO</p>
        <h2 className="text-3xl font-bold mb-12 max-w-2xl">
          One contract, every technical service your vessel needs.
        </h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="border-t border-white/15 pt-6 px-4 -mx-4 rounded-lg transition-all duration-300 hover:bg-white/5 hover:-translate-y-1 hover:border-t-accent"
            >
              <h3 className="font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-white/65 text-sm mb-4">{s.desc}</p>
              <Link
                href={s.href}
                className="text-accent text-sm font-semibold hover:underline"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
