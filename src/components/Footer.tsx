import type { SiteData } from "@/types/site";
import { getFullAddress } from "@/lib/site-data";
import { buildWhatsAppFromTemplate } from "@/lib/whatsapp";
import { getInstagramUrl, getInstagramProfileUrl } from "@/lib/instagram";

export function Footer({ data }: { data: SiteData }) {
  const year = new Date().getFullYear();
  const instagramUrl = getInstagramUrl(data);
  const instagramProfile = getInstagramProfileUrl(data);

  return (
    <footer id="contacto" className="bg-navy py-10 text-white">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 sm:text-left">
        <p className="brand-title text-white">{data.brand.name}</p>
        <p className="brand-subtitle mt-2 text-sage-light">{data.brand.tagline}</p>
        <p className="mt-3 text-sm text-white/85">{getFullAddress(data)}</p>
        <p className="mt-2 text-sm font-medium">
          Consultas:{" "}
          <a href={`tel:${data.contact.phone_raw}`} className="hover:underline">
            {data.contact.phone_display}
          </a>
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <a
            href={buildWhatsAppFromTemplate(data, "consulta_general")}
            className="btn-whatsapp justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Escribinos por WhatsApp
          </a>
          {instagramUrl && (
            <a
              href={instagramUrl}
              className="btn-outline border-white/30 text-white hover:border-white hover:bg-white hover:text-navy justify-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.contact.instagram?.button_text ?? "Consultanos por Instagram"}
            </a>
          )}
        </div>

        {instagramProfile && (
          <p className="mt-4 text-sm text-white/70">
            Instagram:{" "}
            <a href={instagramProfile} className="hover:underline" target="_blank" rel="noopener noreferrer">
              {data.contact.instagram?.display}
            </a>
          </p>
        )}

        <p className="mt-6 text-xs text-white/50">
          © {data.footer.copyright_from}–{year} {data.footer.legal_name}
        </p>
      </div>
    </footer>
  );
}
