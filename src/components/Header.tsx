import type { SiteData } from "@/types/site";
import { buildWhatsAppFromTemplate } from "@/lib/whatsapp";
import { getInstagramUrl } from "@/lib/instagram";

export function Header({ data }: { data: SiteData }) {
  const instagramUrl = getInstagramUrl(data);

  return (
    <header className="border-b border-warm-light/60 bg-cream">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-4">
        <a href="#" className="font-serif text-lg font-bold text-sage-dark">
          {data.brand.name}
        </a>
        <div className="flex items-center gap-2">
          {instagramUrl && (
            <a
              href={instagramUrl}
              className="btn-instagram !px-4 !py-2 text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          )}
          <a
            href={buildWhatsAppFromTemplate(data, data.cta.hero.whatsapp_template_id)}
            className="btn-whatsapp !px-4 !py-2 text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
