import Link from "next/link";

export default function EmergencyCTA() {
  return (
    <section className="bg-gradient-to-r from-sky-500 to-white py-14 border-t border-white/10">
      <div className="container-page flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-bold text-lg text-navy">Need emergency technical support?</p>
          <p className="text-navy/70 text-sm mt-1">
            24-Hour Hotline: <span className="italic">[to be provided]</span>
          </p>
        </div>
        <Link
          href="/contact"
          className="bg-navy text-white font-semibold px-6 py-3 rounded-md hover:bg-navy-light transition-colors whitespace-nowrap"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}