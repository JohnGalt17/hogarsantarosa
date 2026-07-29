import type { SiteData } from "@/types/site";
import { buildWhatsAppFromTemplate } from "@/lib/whatsapp";

export function Contact({ data }: { data: SiteData }) {
  return (
    <section id="contacto" className="section-padding">
      <div className="container-narrow">
        <h2 className="mb-2 text-3xl font-bold">Contacto</h2>
        <p className="mb-8 text-gray-600">{data.cta.footer}</p>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="card">
            <h3 className="font-bold text-lg">Teléfono</h3>
            <a
              href={`tel:${data.contact.phone_raw}`}
              className="mt-2 block text-xl text-sage hover:underline"
            >
              {data.contact.phone_display}
            </a>
            <p className="mt-2 text-sm text-gray-500">
              {data.contact.whatsapp.available_hours}
            </p>
          </div>
          <div className="card border-[#25D366]/30 bg-[#25D366]/5">
            <h3 className="font-bold text-lg">WhatsApp</h3>
            <p className="mt-2 text-gray-600">
              La forma más rápida de consultar disponibilidad y costos.
            </p>
            <a
              href={buildWhatsAppFromTemplate(data, "consulta_general")}
              className="btn-whatsapp mt-4 w-full sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              {data.whatsapp.floating_button.text}
            </a>
          </div>
        </div>

        {data.contact.financing_note && (
          <p className="mt-6 text-center text-gray-600">{data.contact.financing_note}</p>
        )}
      </div>
    </section>
  );
}
