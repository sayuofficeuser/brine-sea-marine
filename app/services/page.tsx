import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";
import EmergencyCTA from "@/components/EmergencyCTA";

const SERVICES = [
  {
    title: "Marine Engineering & Ship Repair",
    desc: "Hull, machinery and systems repair carried out by qualified marine engineers, planned around your port-call schedule to minimise downtime.",
  },
  {
    title: "Ship Chandling & Spares",
    desc: "Reliable sourcing and delivery of parts, provisions and technical stores, coordinated for fast turnaround at berth or anchorage.",
  },
  {
    title: "Marine Consultancy",
    desc: "Independent technical advice on vessel condition, compliance and operational decisions for owners, operators and regulators.",
  },
  {
    title: "Navigation, Safety & Offshore Support",
    desc: "Navigation equipment support, safety systems compliance, and technical support for offshore operations.",
  },
];

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="SERVICES"
        title="Engineering-led services for every port call."
        description="From routine maintenance to emergency response, our services are built around one principle: engineering decisions made by engineers."
      />

      <section className="section-white py-20">
        <div className="container-page grid md:grid-cols-2 gap-x-12 gap-y-14">
          {SERVICES.map((s) => (
            <div key={s.title} className="border-t border-line pt-6">
              <h3 className="font-bold text-xl text-navy mb-3">{s.title}</h3>
              <p className="text-muted leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <EmergencyCTA />
    </PageShell>
  );
}
