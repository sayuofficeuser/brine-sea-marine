import PageShell from "@/components/PageShell";
import PageHeader from "@/components/PageHeader";

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="PROJECTS"
        title="Delivered work across the Indian Ocean corridor."
        description="Project case studies will appear here as they're documented."
      />

      <section className="section-white py-20">
        <div className="container-page grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="card">
              <div className="h-40 bg-navy-light/10 rounded-md flex items-center justify-center mb-4">
                <span className="text-muted text-xs uppercase tracking-wide">
                  Placeholder — project photo
                </span>
              </div>
              <h3 className="font-bold text-navy mb-1">Project title to be added</h3>
              <p className="text-muted text-sm">Short project summary to be added.</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
