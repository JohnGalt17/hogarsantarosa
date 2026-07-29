import type { SiteData } from "@/types/site";
import { buildWhatsAppFromTemplate } from "@/lib/whatsapp";
import { getInstagramUrl } from "@/lib/instagram";

export function SocialFloats({ data }: { data: SiteData }) {
  const instagramUrl = getInstagramUrl(data);
  const showWhatsApp = data.whatsapp.floating_button.enabled;
  const showInstagram =
    instagramUrl && data.instagram?.floating_button.enabled !== false;

  if (!showWhatsApp && !showInstagram) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2">
      {showWhatsApp && (
        <a
          href={buildWhatsAppFromTemplate(data, data.cta.hero.whatsapp_template_id)}
          className="rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[#1ebe57]"
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.whatsapp.floating_button.text}
        </a>
      )}
      {showInstagram && (
        <a
          href={instagramUrl}
          className="btn-instagram !px-5 !py-3 text-sm shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          {data.instagram?.floating_button.text ?? "Instagram"}
        </a>
      )}
    </div>
  );
}
