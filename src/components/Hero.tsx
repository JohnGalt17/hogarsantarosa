import Image from "next/image";
import type { SiteData } from "@/types/site";
import { buildWhatsAppFromTemplate } from "@/lib/whatsapp";
import { getInstagramUrl } from "@/lib/instagram";

export function Hero({ data }: { data: SiteData }) {
  const imageSrc = data.brand.hero_image ?? data.about.image;
  const imageAlt = data.brand.hero_image_alt ?? data.about.image_alt;
  const instagramUrl = getInstagramUrl(data);

  return (
    <section className="px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="overflow-hidden rounded-2xl border border-sage/15 shadow-md">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1200}
            height={800}
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        <p className="brand-subtitle mt-6">
          {data.brand.years_family_managed}+ años · Libertad, Merlo
        </p>
        <h1 className="brand-title mt-3 text-3xl sm:text-4xl">{data.brand.name}</h1>
        <p className="brand-subtitle mt-2 normal-case tracking-[0.08em]">
          {data.brand.tagline}
        </p>
        {data.brand.subtitle && (
          <p className="mt-3 font-serif text-lg italic text-sage-dark">
            {data.brand.subtitle}
          </p>
        )}
        <p className="mt-4 leading-relaxed text-navy/80">{data.about.story[0]}</p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={buildWhatsAppFromTemplate(data, data.cta.hero.whatsapp_template_id)}
            className="btn-whatsapp w-full text-center text-lg !py-4 sm:w-auto"
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.cta.hero.primary}
          </a>
          {instagramUrl && (
            <a
              href={instagramUrl}
              className="btn-instagram w-full text-center text-lg !py-4 sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.contact.instagram?.button_text ?? "Consultanos por Instagram"}
            </a>
          )}
        </div>

        <p className="mt-4 text-center text-sm text-navy/60 sm:text-left">
          <a href={`tel:${data.contact.phone_raw}`} className="font-medium text-sage hover:underline">
            {data.contact.phone_display}
          </a>
          {data.contact.instagram?.display && instagramUrl && (
            <>
              {" · "}
              <a
                href={instagramUrl}
                className="font-medium text-sage hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.contact.instagram.display}
              </a>
            </>
          )}
          {" · "}
          <a href="#ubicacion" className="text-sage hover:underline">
            Ver ubicación
          </a>
        </p>
      </div>
    </section>
  );
}
