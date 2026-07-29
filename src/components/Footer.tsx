import type { SiteData } from "@/types/site";
import { getFullAddress } from "@/lib/site-data";
import { buildWhatsAppFromTemplate } from "@/lib/whatsapp";
import { getInstagramUrl } from "@/lib/instagram";

export function Footer({ data }: { data: SiteData }) {
  const year = new Date().getFullYear();
  const instagramUrl = getInstagramUrl(data);

  return (
    <footer id="contacto" className="border-t border-warm-light bg-sage-dark py-8 text-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center sm:text-left">
        <p className="font-serif text-lg font-bold">{data.brand.name}</p>
        <p className="mt-1 text-sm text-white/80">{getFullAddress(data)}</p>
        <p className="mt-3 text-sm">
          <a href={`tel:${data.contact.phone_raw}`} className="hover:underline">
            {data.contact.phone_display}
          </a>
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <a
            href={buildWhatsAppFromTemplate(data, "consulta_general")}
            className="btn-whatsapp inline-flex justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Escribinos por WhatsApp
          </a>
          {instagramUrl && (
            <a
              href={instagramUrl}
              className="btn-instagram inline-flex justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.contact.instagram?.button_text ?? "Seguinos en Instagram"}
            </a>
          )}
        </div>
        <p className="mt-6 text-xs text-white/60">
          © {data.footer.copyright_from}–{year} {data.footer.legal_name}
        </p>
      </div>
    </footer>
  );
}
