import type { SiteData } from "@/types/site";
import { buildWhatsAppFromTemplate } from "@/lib/whatsapp";

export function Header({ data }: { data: SiteData }) {
  return (
    <header className="border-b border-warm-light/60 bg-cream">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-4">
        <a href="#" className="font-serif text-lg font-bold text-sage-dark">
          {data.brand.name}
        </a>
        <a
          href={buildWhatsAppFromTemplate(data, data.cta.hero.whatsapp_template_id)}
          className="btn-whatsapp !px-4 !py-2 text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
