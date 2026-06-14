import type { SiteData } from "@/types/site";

export function Testimonials({ data }: { data: SiteData }) {
  const visible = data.testimonials.filter((t) => !t.pending);

  if (visible.length === 0) return null;

  return (
    <section className="section-padding bg-warm-light/20">
      <div className="container-narrow">
        <h2 className="mb-10 text-3xl font-bold">Lo que dicen las familias</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {visible.map((item, i) => (
            <blockquote key={i} className="card border-warm/30">
              <p className="text-gray-700 leading-relaxed italic">&ldquo;{item.text}&rdquo;</p>
              <footer className="mt-4 text-sm font-medium text-earth">
                — {item.author}
                {item.year && <span className="text-gray-500"> · {item.year}</span>}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
