const PORTS = ["Colombo", "Hambantota", "Galle", "Trincomalee"];

export default function PortsWeServe() {
  return (
    <section className="section-light py-20">
      <div className="container-page">
        <p className="eyebrow">WHERE WE OPERATE</p>
        <h2 className="text-3xl font-bold text-navy mb-12 max-w-2xl">
          Ports We Serve
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {PORTS.map((port) => (
            <div
              key={port}
              className="card text-center hover:border-accent transition-colors"
            >
              <h3 className="font-bold text-navy">{port}</h3>
              <p className="text-muted text-xs mt-1">Port of Sri Lanka</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
