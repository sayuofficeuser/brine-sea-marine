import Link from "next/link";

export default function WelcomeSection() {
  return (
    <section className="section-light py-20">
      <div className="container-page grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="eyebrow">WELCOME TO BRINE SEA</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight">
            An engineering-led marine solutions partner for the Indian Ocean
            corridor.
          </h2>
        </div>
        <div>
          <p className="text-muted leading-relaxed">
            Brine Sea Marine Solutions (Pvt) Ltd is a Colombo-based marine
            engineering and technical services company serving shipping
            lines, shipowners, port authorities, offshore operators and
            government agencies. We bring ship repair, chandling,
            consultancy, and navigation &amp; safety support together under
            one contract — so port calls move faster and vendor management
            gets simpler.
          </p>
          <Link href="/about" className="text-accent font-semibold text-sm mt-6 inline-block hover:underline">
            More About Us →
          </Link>
        </div>
      </div>
    </section>
  );
}
