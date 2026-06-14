import type { SiteData } from "@/types/site";

export function DailyLife({ data }: { data: SiteData }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        <h2 className="mb-2 text-3xl font-bold">{data.daily_life.headline}</h2>
        <p className="mb-10 text-gray-600">{data.daily_life.intro}</p>

        <div className="space-y-4">
          {data.daily_life.items.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 rounded-2xl border border-warm-light/50 p-5 sm:items-start"
            >
              <span className="shrink-0 rounded-full bg-warm/20 px-3 py-1 text-sm font-semibold text-earth">
                {item.time}
              </span>
              <div>
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-1 text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
