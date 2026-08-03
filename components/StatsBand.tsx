const STATS = [
  { value: "40+", label: "VESSELS SERVED" },
  { value: "6", label: "SERVICE LINES" },
  { value: "4", label: "PORTS COVERED" },
  { value: "24/7", label: "EMERGENCY SUPPORT" },
];

export default function StatsBand() {
  return (
    <section className="section-white border-y border-line">
      <div className="container-page py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <p className="font-mono text-4xl font-bold text-navy">{s.value}</p>
            <p className="text-muted text-xs font-semibold tracking-wide uppercase mt-2">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
