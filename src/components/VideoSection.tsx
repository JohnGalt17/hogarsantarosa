import type { SiteData } from "@/types/site";

export function VideoSection({ data }: { data: SiteData }) {
  const video = data.media.featured_video;

  if (!video?.enabled) return null;

  const mp4 = video.src_mp4 || (video.src?.endsWith(".mp4") ? video.src : null);
  const mov = video.src_mov || (video.src?.endsWith(".mov") ? video.src : null);

  if (!mp4 && !mov) return null;

  return (
    <section id="video" className="px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="brand-title text-xl sm:text-2xl">{video.title}</h2>
        {video.description && (
          <p className="mt-2 text-navy/75">{video.description}</p>
        )}

        <div className="mt-4 overflow-hidden rounded-2xl border border-sage/15 bg-navy shadow-md">
          <video
            className="h-auto w-full"
            controls
            playsInline
            preload="metadata"
            poster={video.poster}
          >
            {mp4 && <source src={mp4} type="video/mp4" />}
            {mov && mov !== mp4 && <source src={mov} type="video/quicktime" />}
            Tu navegador no puede reproducir este video.
          </video>
        </div>

        <p className="mt-2 text-xs text-navy/50">
          Tocá play para ver el recorrido. En celular conviene usar Wi‑Fi.
        </p>
      </div>
    </section>
  );
}
