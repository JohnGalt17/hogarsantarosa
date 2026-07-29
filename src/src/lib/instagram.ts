import type { SiteData } from "@/types/site";

export function getInstagramUrl(data: SiteData): string | null {
  const ig = data.contact.instagram;
  const url = ig?.dm_url || ig?.url || data.contact.social.instagram;
  return url?.trim() ? url.trim() : null;
}

export function getInstagramProfileUrl(data: SiteData): string | null {
  const url = data.contact.instagram?.url || data.contact.social.instagram;
  return url?.trim() ? url.trim() : null;
}
