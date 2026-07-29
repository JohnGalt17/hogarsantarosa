import type { SiteData } from "@/types/site";
import { buildWhatsAppFromTemplate } from "@/lib/whatsapp";

export function WhatsAppFloat({ data }: { data: SiteData }) {
  if (!data.whatsapp.floating_button.enabled) return null;

  return (
    <a
      href={buildWhatsAppFromTemplate(data, data.cta.hero.whatsapp_template_id)}
      className="fixed bottom-5 right-5 z-50 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[#1ebe57]"
      target="_blank"
      rel="noopener noreferrer"
    >
      {data.whatsapp.floating_button.text}
    </a>
  );
}
