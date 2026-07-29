"use client";

import { useRef, useState } from "react";
import type { SiteData } from "@/types/site";

type FeaturedVideo = NonNullable<SiteData["media"]["featured_video"]>;

function getSources(video: FeaturedVideo) {
  const mp4 = video.src_mp4 || (video.src?.endsWith(".mp4") ? video.src : null);
  const mov = video.src_mov || (video.src?.endsWith(".mov") ? video.src : null);
  return { mp4, mov };
}

export function HeroVideo({ video }: { video: FeaturedVideo }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const { mp4, mov } = getSources(video);
  if (!mp4 && !mov) return null;

  const play = async () => {
    const el = ref.current;
    if (!el) return;
    try {
      await el.play();
      setStarted(true);
    } catch {
      el.controls = true;
      setStarted(true);
    }
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-coffee/15 bg-coffee shadow-md">
      <video
        ref={ref}
        className="aspect-[4/3] w-full object-cover sm:aspect-video"
        controls={started}
        playsInline
        preload="metadata"
        poster={video.poster}
        onPlay={() => setStarted(true)}
      >
        {mp4 && <source src={mp4} type="video/mp4" />}
        {mov && mov !== mp4 && <source src={mov} type="video/quicktime" />}
      </video>

      {!started && (
        <button
          type="button"
          onClick={play}
          className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-coffee/75 via-coffee/35 to-coffee/15 px-6 text-center transition hover:from-coffee/80"
          aria-label={video.play_label ?? "Ver video del hogar"}
        >
          <span className="hero-play-btn flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full text-2xl shadow-lg sm:h-20 sm:w-20">
            ▶
          </span>
          <span className="mt-4 text-lg font-semibold text-cream sm:text-xl">
            {video.play_label ?? "Ver el hogar"}
          </span>
          <span className="mt-1 max-w-xs text-sm leading-snug text-cream/95">
            {video.play_hint ?? "Tocá para conocer el lugar"}
          </span>
        </button>
      )}

      {!started && (
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 bg-gradient-to-t from-coffee/55 to-transparent px-4 py-3 sm:hidden">
          <p className="text-center text-xs text-cream/95">
            {video.mobile_note ?? "Ideal ver con Wi‑Fi · No consume datos hasta que tocás play"}
          </p>
        </div>
      )}
    </div>
  );
}
