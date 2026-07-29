import type { SiteData } from "@/types/site";

export function SimpleInfo({ data }: { data: SiteData }) {
  return (
    <section id="info" className="px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-3xl space-y-8">
        {data.pillars.map((pillar) => (
          <div
            key={pillar.id}
            className="section-card border-l-4 border-l-sage pl-5"
          >
            <h2 className="text-lg font-bold text-navy">{pillar.title}</h2>
            <p className="mt-2 leading-relaxed text-navy/80">{pillar.description}</p>
          </div>
        ))}

        {data.info_sections.map((section) => (
          <div key={section.id} className="section-card">
            <h3 className="text-lg font-bold text-navy">{section.title}</h3>
            <p className="mt-2 leading-relaxed text-navy/80">{section.description}</p>
            {section.items.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-2">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-sage/25 bg-sage/5 px-3 py-1 text-sm text-navy/85"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <div>
          <h3 className="text-lg font-bold text-navy">Lo que ofrecemos</h3>
          <ul className="mt-4 space-y-2 text-navy/80">
            {data.highlights.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="font-bold text-sage">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="section-card text-sm text-navy/75">
          <p className="font-medium text-navy">{data.payment?.public_summary}</p>
          <p className="mt-2">{data.contact.financing_note}</p>
          <p className="mt-2 text-sage-dark">
            Visitas: {data.philosophy.visits.description}
          </p>
        </div>
      </div>
    </section>
  );
}
