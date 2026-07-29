import type { SiteData } from "@/types/site";

export function FAQ({ data }: { data: SiteData }) {
  return (
    <section id="faq" className="px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="brand-title text-xl sm:text-2xl">Preguntas frecuentes</h2>
        <p className="brand-subtitle mt-2">Consultas habituales</p>
        <div className="mt-6 space-y-3">
          {data.faq.map((item) => (
            <details key={item.id} className="section-card">
              <summary className="cursor-pointer list-none font-semibold text-navy">
                {item.question}
              </summary>
              <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-navy/75">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
