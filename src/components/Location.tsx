import Image from "next/image";
import type { SiteData } from "@/types/site";
import { getFullAddress } from "@/lib/site-data";

export function Location({ data }: { data: SiteData }) {
  return (
    <section id="ubicacion" className="px-4 py-8 sm:px-6 bg-white">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-xl font-bold text-sage-dark">{data.location.headline}</h2>
        <p className="mt-2 text-gray-600">{getFullAddress(data)}</p>

        <a
          href={data.location.map_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block overflow-hidden rounded-xl border border-warm-light"
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
          className="mt-4 inline-block text-sage font-medium hover:underline"
        >
          Abrir en Google Maps →
        </a>
      </div>
    </section>
  );
}
