import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";

export default function CareersPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="CAREERS"
        title="Build your career with Brine Sea."
        description="We're always interested in hearing from qualified marine engineers and technical staff."
      />

      <section className="section-white py-20">
        <div className="container-page max-w-2xl">
          <h2 className="text-2xl font-bold text-navy mb-4">Open Positions</h2>
          <p className="text-muted leading-relaxed mb-6">
            No open positions are listed at this time. To register your
            interest, get in touch and we'll keep your details on file.
          </p>
          <Link href="/contact" className="btn-outline-navy">
            Contact Us
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
