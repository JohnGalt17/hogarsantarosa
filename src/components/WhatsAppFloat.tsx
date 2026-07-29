import type { SiteData } from "@/types/site";
import { buildWhatsAppFromTemplate } from "@/lib/whatsapp";

export function WhatsAppFloat({ data }: { data: SiteData }) {
  if (!data.whatsapp.floating_button.enabled) return null;

  return (
    <a
      href={buildWhatsAppFromTemplate(data, data.cta.hero.whatsapp_template_id)}
      className="btn-whatsapp-float fixed bottom-5 right-5 z-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      {data.whatsapp.floating_button.text}
    </a>
  );
}
