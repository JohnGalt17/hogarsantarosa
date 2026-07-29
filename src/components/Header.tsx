import type { SiteData } from "@/types/site";
import { buildWhatsAppFromTemplate } from "@/lib/whatsapp";
import { getInstagramUrl } from "@/lib/instagram";
import { BrandMark } from "./BrandMark";

export function Header({ data }: { data: SiteData }) {
  const instagramUrl = getInstagramUrl(data);

  return (
    <header className="border-b border-sage/20 bg-white/70 backdrop-blur-sm">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-4">
        <a href="#" className="min-w-0">
          <BrandMark data={data} size="sm" />
        </a>
        <div className="flex shrink-0 items-center gap-2">
          {instagramUrl && (
            <a
              href={instagramUrl}
              className="btn-instagram !px-3 !py-2 text-xs sm:text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          )}
          <a
            href={buildWhatsAppFromTemplate(data, data.cta.hero.whatsapp_template_id)}
            className="btn-whatsapp !px-3 !py-2 text-xs sm:text-sm"
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
