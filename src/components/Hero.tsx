import type { SiteData } from "@/types/site";
import { buildWhatsAppFromTemplate } from "@/lib/whatsapp";
import { getInstagramUrl } from "@/lib/instagram";
import { BrandMark } from "./BrandMark";
import { HeroVideo } from "./HeroVideo";

export function Hero({ data }: { data: SiteData }) {
  const instagramUrl = getInstagramUrl(data);
  const video = data.media.featured_video;
  const showVideo = video?.enabled && video.show_in_hero !== false;

  return (
    <section className="animate-fade-in px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-3xl">
        {showVideo && video ? <HeroVideo video={video} /> : null}

        <p className="brand-subtitle mt-6">
          {data.brand.years_family_managed}+ años · Libertad, Merlo
        </p>
        <div className="mt-3">
          <BrandMark data={data} size="lg" />
        </div>
        <p className="brand-subtitle mt-2 normal-case tracking-[0.08em]">
          {data.brand.tagline}
        </p>
        {data.brand.subtitle && (
          <p className="mt-3 font-serif text-lg italic text-burgundy/90">
            {data.brand.subtitle}
          </p>
        )}
        <p className="mt-4 leading-relaxed text-coffee/85">{data.about.story[0]}</p>

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
              className="btn-primary w-full text-center text-lg !py-4 sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.contact.instagram?.button_text ?? "Consultanos por Instagram"}
            </a>
          )}
        </div>

        <p className="mt-4 text-center text-sm text-coffee/70 sm:text-left">
          <a href={`tel:${data.contact.phone_raw}`} className="link-accent">
            {data.contact.phone_display}
          </a>
          {data.contact.instagram?.display && instagramUrl && (
            <>
              {" · "}
              <a
                href={instagramUrl}
                className="link-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                {data.contact.instagram.display}
              </a>
            </>
          )}
          {" · "}
          <a href="#ubicacion" className="link-accent">
            Ver ubicación
          </a>
        </p>
      </div>
    </section>
  );
}
