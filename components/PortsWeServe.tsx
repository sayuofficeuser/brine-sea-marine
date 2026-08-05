import Image from "next/image";

const PORTS = [
  { name: "Colombo", image: "/images/ports/colombo.jpg" },
  { name: "Hambantota", image: "/images/ports/hambantota.jpg" },
  { name: "Galle", image: "/images/ports/galle.jpg" },
  { name: "Trincomalee", image: "/images/ports/trincomalee.jpg" },
];

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
              key={port.name}
              className="card overflow-hidden text-center hover:border-accent transition-colors"
            >
              <div className="relative h-32 w-full -mx-5 -mt-5 mb-4" style={{ width: "calc(100% + 2.5rem)" }}>
                <Image
                  src={port.image}
                  alt={`${port.name} port`}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-bold text-navy">{port.name}</h3>
              <p className="text-muted text-xs mt-1">Port of Sri Lanka</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}