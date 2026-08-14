import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import VisionMission from "@/components/VisionMission";

const VALUES = [
  { title: "Safety First", desc: "Every job is planned and executed with safety as the non-negotiable baseline." },
  { title: "Engineering Integrity", desc: "Technical decisions are made by engineers, not sales targets." },
  { title: "Transparency", desc: "Clear scopes, clear pricing, no surprise line items." },
  { title: "Reliability", desc: "We show up when we say we will, especially in emergencies." },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="ABOUT US"
        title="A marine engineering partner built on trust and turnaround."
        description="Brine Sea Marine Solutions (Pvt) Ltd is a Colombo-based marine engineering and technical services company serving the Indian Ocean shipping corridor."
      />
      <VisionMission />

      <section className="section-white py-20"></section>

      <section className="section-white py-20">
        <div className="container-page grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">Our Company</h2>
            <p className="text-black leading-relaxed">
              We work with shipping lines, shipowners, port authorities,
              offshore and oil &amp; gas operators, government and navy
              clients, and fisheries operators across Colombo, Hambantota,
              Galle and Trincomalee. Our positioning is simple: one contract
              instead of many vendors, fast port-call turnaround, transparent
              pricing, and engineering-led work.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">Our Approach</h2>
            <p className="text-black leading-relaxed">
              Every engagement starts with an engineering assessment, not a
              quote. That means the scope of work reflects what the vessel
              actually needs, priced transparently, and delivered by people
              who understand marine systems-not just logistics.
            </p>
          </div>
        </div>
      </section>

      <section className="section-light py-20">
        <div className="container-page">
          <p className="eyebrow">OUR VALUES</p>
          <h2 className="text-3xl font-bold text-navy mb-12 max-w-2xl">
            What guides how we work.
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {VALUES.map((v) => (
              <div key={v.title}>
                <div className="w-10 h-1 bg-accent mb-4" />
                <h3 className="font-bold text-ink mb-2">{v.title}</h3>
                <p className="text-muted text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
