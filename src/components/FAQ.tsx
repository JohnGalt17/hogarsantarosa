import type { SiteData } from "@/types/site";

export function FAQ({ data }: { data: SiteData }) {
  return (
    <section id="faq" className="px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-xl font-bold text-sage-dark">Preguntas frecuentes</h2>
        <div className="mt-4 space-y-3">
          {data.faq.map((item) => (
            <details
              key={item.id}
              className="rounded-xl border border-warm-light/60 bg-white p-4"
            >
              <summary className="cursor-pointer font-medium text-gray-900 list-none">
                {item.question}
              </summary>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
