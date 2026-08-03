export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="section-dark pt-20 pb-16">
      <div className="container-page">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="text-4xl md:text-5xl font-extrabold max-w-2xl leading-tight">
          {title}
        </h1>
        <p className="text-white/70 max-w-xl mt-5 text-lg">{description}</p>
      </div>
    </section>
  );
}
