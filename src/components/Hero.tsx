import Image from "next/image";
import type { SiteData } from "@/types/site";
import { buildWhatsAppFromTemplate } from "@/lib/whatsapp";

export function Hero({ data }: { data: SiteData }) {
  const imageSrc = data.brand.hero_image ?? data.about.image;
  const imageAlt = data.brand.hero_image_alt ?? data.about.image_alt;

  return (
    <section className="px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="overflow-hidden rounded-2xl shadow-md">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1200}
            height={800}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        <p className="mt-6 text-sm font-medium text-earth">
          {data.brand.years_family_managed}+ años en Libertad, Merlo
        </p>
        <h1 className="mt-2 text-2xl font-bold leading-snug sm:text-3xl">
          {data.brand.tagline}
        </h1>
        <p className="mt-4 text-gray-600 leading-relaxed">
          {data.about.story[0]}
        </p>

        <a
          href={buildWhatsAppFromTemplate(data, data.cta.hero.whatsapp_template_id)}
          className="btn-whatsapp mt-6 w-full text-center text-lg !py-4 sm:w-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.cta.hero.primary}
        </a>

        <p className="mt-4 text-center text-sm text-gray-500 sm:text-left">
          <a href={`tel:${data.contact.phone_raw}`} className="text-sage hover:underline">
            {data.contact.phone_display}
          </a>
          {" · "}
          <a href="#ubicacion" className="text-sage hover:underline">
            Ver ubicación
          </a>
        </p>
      </div>
    </section>
  );
}
