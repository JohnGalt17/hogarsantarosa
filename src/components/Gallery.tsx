import type { SiteData } from "@/types/site";

export function Gallery({ data }: { data: SiteData }) {
  if (data.media.gallery.length === 0) return null;

  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        <h2 className="mb-10 text-3xl font-bold">Nuestro hogar</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.media.gallery.map((img, i) => (
            <div key={i} className="image-placeholder aspect-[4/3] p-4 text-center">
              <div>
                <p className="font-medium text-sage-dark">{img.alt}</p>
                {img.pending && (
                  <p className="mt-1 text-xs">Reemplazar en media.gallery</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
