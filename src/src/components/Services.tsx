import type { SiteData } from "@/types/site";
import { CtaStrip } from "./CtaStrip";

export function Services({ data }: { data: SiteData }) {
  return (
    <section id="servicios" className="section-padding">
      <div className="container-narrow">
        <h2 className="mb-2 text-3xl font-bold">{data.services.headline}</h2>
        <p className="mb-10 text-gray-600">{data.services.intro}</p>

        <div className="space-y-10">
          {data.services.categories.map((category) => (
            <div key={category.id}>
              <h3 className="mb-4 text-2xl font-bold text-sage">{category.title}</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {category.items.map((item) => (
                  <div key={item.id} className="card">
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="mt-2 text-gray-600">{item.description}</p>
                    {item.note && (
                      <p className="mt-2 text-sm text-earth">({item.note})</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <CtaStrip
          data={data}
          text={data.cta.sections.after_services}
          templateId="agendar_visita"
          className="mt-10"
        />
      </div>
    </section>
  );
}
