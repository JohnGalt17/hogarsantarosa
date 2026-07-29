import Image from "next/image";
import type { SiteData } from "@/types/site";

export function Location({ data }: { data: SiteData }) {
  return (
    <section id="ubicacion" className="bg-almond/40 px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="brand-title text-xl sm:text-2xl">{data.location.headline}</h2>
        <p className="mt-2 text-coffee/80">
          Itaqui 1252, Libertad · {data.contact.phone_display}
        </p>

        <a
          href={data.location.map_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block overflow-hidden rounded-2xl border border-coffee/15 shadow-sm"
        >
          <Image
            src={data.location.map_image}
            alt={`Mapa — ${data.brand.name}`}
            width={600}
            height={400}
            className="h-auto w-full"
          />
        </a>

        <a
          href={data.location.map_url}
          target="_blank"
          rel="noopener noreferrer"
          className="link-accent mt-4 inline-block font-medium"
        >
          Abrir en Google Maps →
        </a>
      </div>
    </section>
  );
}
