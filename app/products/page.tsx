import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";

const CATEGORIES = [
  { title: "Engine Room Spares", desc: "Filters, seals, gaskets and consumables for main and auxiliary machinery." },
  { title: "Deck & Safety Equipment", desc: "Safety gear, ropes, fenders and deck hardware." },
  { title: "Provisions & Stores", desc: "Bonded and unbonded stores for crew and vessel operations." },
  { title: "Technical Supplies", desc: "Instrumentation, electrical parts and general technical stock." },
];

export default function ProductsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="PRODUCTS"
        title="Ship chandling and spares, ready for port call."
        description="A single point of contact for the parts, provisions and stores your vessel needs — sourced and delivered on schedule."
      />

      <section className="section-white py-20">
        <div className="container-page grid sm:grid-cols-2 gap-6">
          {CATEGORIES.map((c) => (
            <div key={c.title} className="card">
              <h3 className="font-bold text-lg text-navy mb-2">{c.title}</h3>
              <p className="text-muted text-sm">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="container-page mt-10">
          <p className="placeholder-note">
            Full product catalogue and ordering details to be added once
            supplied.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
