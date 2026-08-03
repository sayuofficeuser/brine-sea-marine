const POINTS = [
  { title: "Experienced Team", desc: "Qualified marine engineers and technical staff." },
  { title: "24/7 Response", desc: "Round-the-clock availability for port calls and emergencies." },
  { title: "Quality Assured", desc: "Engineering-led work backed by clear documentation." },
  { title: "Safety First", desc: "Compliance-driven processes on every job." },
];

export default function WhyChooseUs() {
  return (
    <section className="section-white py-20">
      <div className="container-page">
        <p className="eyebrow">WHY BRINE SEA</p>
        <h2 className="text-3xl font-bold text-navy mb-12 max-w-2xl">
          Built for reliability, from the first call to the final sign-off.
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {POINTS.map((p) => (
            <div
              key={p.title}
              className="group p-5 -m-1 rounded-lg transition-all duration-300 hover:bg-gold/10 hover:-translate-y-1"
            >
              <div className="w-10 h-1.5 rounded-full bg-navy-gradient mb-4 transition-all duration-300 group-hover:w-16" />
              <h3 className="font-bold text-ink mb-2 transition-colors duration-300 group-hover:text-navy">
                {p.title}
              </h3>
              <p className="text-muted text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}