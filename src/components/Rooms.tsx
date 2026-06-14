import type { SiteData } from "@/types/site";
import { CtaStrip } from "./CtaStrip";

export function Rooms({ data }: { data: SiteData }) {
  return (
    <section id="habitaciones" className="section-padding bg-white">
      <div className="container-narrow">
        <h2 className="mb-2 text-3xl font-bold">{data.rooms.headline}</h2>
        <p className="mb-10 text-gray-600">{data.rooms.intro}</p>

        <div className="grid gap-6 md:grid-cols-2">
          {data.rooms.types.map((room) => (
            <div key={room.id} className="card overflow-hidden">
              <div className="image-placeholder mb-4 aspect-video">
                {room.image_pending ? "Foto pendiente" : room.title}
              </div>
              <h3 className="text-xl font-bold">{room.title}</h3>
              <p className="mt-2 text-gray-600">{room.description}</p>
              <ul className="mt-4 space-y-1 text-sm text-gray-700">
                {room.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm font-medium text-earth">
                {room.availability_note} · {room.price_display === "consultar" ? "Costos a consultar" : room.price_display}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 card border-warm/30 bg-warm-light/20">
          <p className="text-gray-700">{data.contact.financing_note}</p>
        </div>

        <CtaStrip
          data={data}
          text={data.cta.sections.after_rooms}
          templateId="disponibilidad"
          className="mt-8"
        />
      </div>
    </section>
  );
}
