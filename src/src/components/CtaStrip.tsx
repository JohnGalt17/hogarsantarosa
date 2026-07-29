import type { SiteData } from "@/types/site";
import { buildWhatsAppFromTemplate } from "@/lib/whatsapp";

export function CtaStrip({
  data,
  text,
  templateId,
  className = "",
}: {
  data: SiteData;
  text: string;
  templateId: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-between gap-4 rounded-2xl border border-sage/20 bg-sage/5 p-6 sm:flex-row ${className}`}
    >
      <p className="font-serif text-lg font-semibold text-sage-dark">{text}</p>
      <a
        href={buildWhatsAppFromTemplate(data, templateId)}
        className="btn-whatsapp shrink-0"
        target="_blank"
        rel="noopener noreferrer"
      >
        Consultar por WhatsApp
      </a>
    </div>
  );
}
