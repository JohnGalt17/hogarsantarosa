import type { SiteData } from "@/types/site";
import { InfoCard } from "./InfoCard";
import { SectionIcon } from "./SectionIcon";

export function SimpleInfo({ data }: { data: SiteData }) {
  return (
    <section id="info" className="bg-almond/50 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-3xl space-y-5">
        <div className="mb-2">
          <h2 className="brand-title text-xl sm:text-2xl">Nuestro cuidado</h2>
          <p className="brand-subtitle mt-2">Calidez, atención y un hogar de verdad</p>
        </div>

        {data.pillars.map((pillar) => (
          <InfoCard
            key={pillar.id}
            id={pillar.id}
            title={pillar.title}
            description={pillar.description}
            headingLevel="h2"
          />
        ))}

        {data.info_sections.map((section) => (
          <InfoCard
            key={section.id}
            id={section.id}
            title={section.title}
            description={section.description}
            items={section.items}
          />
        ))}

        <article className="info-card">
          <div className="info-card-icon" aria-hidden="true">
            <SectionIcon id="highlights" className="h-7 w-7" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="info-card-title">Lo que ofrecemos</h3>
            <ul className="mt-3 space-y-2.5">
              {data.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-coffee/85">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-burgundy/15 text-xs font-bold text-burgundy">
                    ✓
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <div className="section-card border border-burgundy/20 bg-cream text-sm text-coffee/80">
          <p className="font-semibold text-burgundy">{data.payment?.public_summary}</p>
          <p className="mt-2 leading-relaxed">{data.contact.financing_note}</p>
          <p className="mt-3 border-t border-coffee/10 pt-3 text-coffee/75">
            <span className="font-semibold text-coffee">Visitas:</span>{" "}
            {data.philosophy.visits.description}
          </p>
        </div>
      </div>
    </section>
  );
}
