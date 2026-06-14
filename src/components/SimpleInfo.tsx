import type { SiteData } from "@/types/site";

export function SimpleInfo({ data }: { data: SiteData }) {
  return (
    <section id="info" className="px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-xl font-bold text-sage-dark">Un hogar de familia</h2>
        <p className="mt-3 text-gray-600 leading-relaxed">{data.about.story[1]}</p>

        <h3 className="mt-8 text-lg font-bold text-sage-dark">Lo que ofrecemos</h3>
        <ul className="mt-4 space-y-2 text-gray-700">
          {data.highlights.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-sage">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-xl border border-warm-light bg-white p-4 text-sm text-gray-600">
          <p className="font-medium text-gray-800">{data.payment?.public_summary}</p>
          <p className="mt-2">{data.contact.financing_note}</p>
          <p className="mt-2 text-earth">
            Visitas: {data.philosophy.visits.description}
          </p>
        </div>
      </div>
    </section>
  );
}
