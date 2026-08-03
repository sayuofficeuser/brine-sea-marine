import Image from "next/image";
import { Mail, Phone, BadgeCheck, Building2 } from "lucide-react";
import PageShell from "@/components/PageShell";
import { team } from "@/lib/data";

export const metadata = {
  title: "Our Crew",
  description:
    "Meet the officers, engineers, and staff behind BRINE SEA Marine Solutions.",
};

export default function CrewPage() {
  return (
    <PageShell>
      <section className="pt-32 pb-24 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-teal">
            <span className="w-6 h-px bg-teal inline-block" />
            Our Crew
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl font-display font-bold text-navy">
            The people behind every port call
          </h1>
          <p className="mt-4 text-navy/60 leading-relaxed">
            From the bridge to the back office, meet the officers, engineers, and staff
            who keep BRINE SEA Marine Solutions running.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="rounded-2xl overflow-hidden border border-black/5 bg-white hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 w-full bg-light-gray">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display font-semibold text-lg text-navy">
                  {member.name}
                </h3>
                <p className="text-sm text-teal font-medium mt-0.5">
                  {member.designation}
                </p>
                <p className="text-xs text-navy/50 mt-1 flex items-center gap-1.5">
                  <Building2 size={13} /> {member.department}
                </p>

                <div className="mt-4 pt-4 border-t border-black/5 space-y-1.5 text-xs text-navy/60">
                  <p className="flex items-center gap-2">
                    <Mail size={13} className="text-teal shrink-0" />
                    <a href={`mailto:${member.email}`} className="hover:text-teal">
                      {member.email}
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone size={13} className="text-teal shrink-0" />
                    <a href={`tel:${member.phone}`} className="hover:text-teal">
                      {member.phone}
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <BadgeCheck size={13} className="text-teal shrink-0" />
                    ID: {member.employeeId}
                  </p>
                </div>

                {member.certifications.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {member.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="text-[0.65rem] px-2 py-1 rounded-full bg-teal/10 text-teal font-medium"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}