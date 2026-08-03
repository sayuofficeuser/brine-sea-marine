import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";

export default function GalleryPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="GALLERY"
        title="Our work, on site and at sea."
        description="Real vessel and workshop photography will replace these placeholders once supplied."
      />

      <section className="section-white py-20">
        <div className="container-page grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-48 bg-navy-light/10 rounded-md flex items-center justify-center border border-line"
            >
              <span className="text-muted text-xs uppercase tracking-wide">
                Placeholder photo
              </span>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
