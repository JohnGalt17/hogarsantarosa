import type { SiteData } from "@/types/site";
import { CtaStrip } from "./CtaStrip";

export function About({ data }: { data: SiteData }) {
  return (
    <section id="historia" className="section-padding">
      <div className="container-narrow">
        <h2 className="mb-2 text-3xl font-bold">{data.about.headline}</h2>
        <p className="mb-8 text-earth">{data.team.intro}</p>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4 text-gray-700 leading-relaxed">
            {data.about.story.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <div className="image-placeholder aspect-square p-6 text-center">
            <div>
              <p className="font-serif text-lg text-sage-dark">{data.about.image_alt}</p>
              {data.about.image_pending && (
                <p className="mt-2 text-sm">Reemplazar en JSON: about.image</p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {data.values.map((value) => (
            <div key={value.id} className="card">
              <h3 className="mb-2 text-xl font-bold">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 card border-sage/20 bg-sage/5">
          <h3 className="mb-3 text-2xl font-bold">{data.philosophy.headline}</h3>
          <p className="text-gray-700 leading-relaxed">{data.philosophy.body}</p>
          <p className="mt-4 text-sm text-gray-600">
            <strong>Visitas:</strong> {data.philosophy.visits.description}
          </p>
        </div>

        <CtaStrip
          data={data}
          text={data.cta.sections.after_about}
          templateId="consulta_familiar"
          className="mt-10"
        />
      </div>
    </section>
  );
}
